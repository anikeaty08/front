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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
navy: '#002956',
cyan: '#00bfda',
yellow: '#FFBC00',
dark: '#020b14'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 2s infinite',
'spin-slow': 'spin 8s linear infinite',
}
}
}
}



        // Aurora Background
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        const canvas = document.getElementById('aurora-canvas');
        
        if (canvas) {
            renderer.setSize(window.innerWidth, window.innerHeight);
            canvas.replaceWith(renderer.domElement);
            renderer.domElement.style.position = 'absolute';
            renderer.domElement.style.top = '0';
            renderer.domElement.style.left = '0';
            renderer.domElement.style.width = '100%';
            renderer.domElement.style.height = '100%';
            renderer.domElement.style.zIndex = '-10';

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    iTime: { value: 0 },
                    iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                },
                vertexShader: `
                    void main() {
                        gl_Position = vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float iTime;
                    uniform vec2 iResolution;

                    #define NUM_OCTAVES 3

                    float rand(vec2 n) { 
                        return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
                    }

                    float noise(vec2 p){
                        vec2 ip = floor(p);
                        vec2 u = fract(p);
                        u = u*u*(3.0-2.0*u);
                        float res = mix(
                            mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                            mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                        return res*res;
                    }

                    float fbm(vec2 x) {
                        float v = 0.0;
                        float a = 0.3;
                        vec2 shift = vec2(100);    
                        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                        for (int i = 0; i < NUM_OCTAVES; ++i) {
                            v += a * noise(x);
                            x = rot * x * 2.0 + shift;
                            a *= 0.4;
                        }
                        return v;
                    }

                    void main() {
                        vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                        vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                        vec4 o = vec4(0.0);
                        float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                        
                        for(float i = 0.0; i++ < 35.0;)
                        {
                            vec2 v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                            float r = 0.0 + 0.1 * sin(i * 0.2 + iTime * 0.4); 
                            float g = 0.1 + 0.3 * cos(i * 0.3 + iTime * 0.5); 
                            float b = 0.3 + 0.4 * sin(i * 0.4 + iTime * 0.3);
                            vec4 auroraColors = vec4(r, g, b, 1.0);
                            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                            float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                        }
                        
                        o = tanh(pow(o / 100.0, vec4(1.6)));
                        gl_FragColor = o * 1.0; 
                    }
                `
            });

            const geometry = new THREE.PlaneGeometry(2, 2);
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            function animate() {
                requestAnimationFrame(animate);
                material.uniforms.iTime.value += 0.016;
                renderer.render(scene, camera);
            }

            window.addEventListener('resize', () => {
                renderer.setSize(window.innerWidth, window.innerHeight);
                material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
            });

            animate();
        }

        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<canvas id="aurora-canvas" style={{display: 'block', width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px', zIndex: '-10'}}></canvas>
</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md bg-brand-dark/70 border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto px-6 items-center justify-between">
<div className="flex items-center gap-3 group select-none">
<img alt="In2Dialog" className="h-8 w-auto object-contain" src="https://in2dialog.com/wp-content/uploads/2024/07/In2Dialog-Logo-White.webp"/>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="transition-colors hover:text-[#00bfda]" href="#features">Features</a>
<a className="transition-colors hover:text-[#00bfda]" href="#benefits">Benefits</a>
<a className="transition-colors hover:text-[#00bfda]" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-[#00bfda]" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all bg-[#FFBC00] hover:bg-[#e5a800] shadow-[0_0_20px_-5px_rgba(255,188,0,0.3)] text-brand-navy tracking-tight" href="#contact">
                Get a Demo
            </a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-start z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-medium mb-8 backdrop-blur-sm bg-white/5 border-white/10 text-[#00bfda]/80">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#00bfda]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bfda]"></span>
</span>
                        Multi-award-winning solution in Recruitment Tech
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-white">
                        The #1 Note-Taker <br/>
<span className="primary-gradient-text">for Recruitment</span>
</h1>
<p className="text-lg lg:text-xl mb-10 leading-relaxed max-w-lg text-slate-400">
                        No more note-taking during interviews or intakes. In2Dialog instantly turns your conversations into complete reports and job descriptions in your ATS.
                    </p>
<div className="flex flex-wrap items-center gap-4 mb-12">
<button className="h-14 px-8 rounded-full hover:bg-[#e5a800] font-semibold transition-all shadow-[0_0_30px_-5px_rgba(255,188,0,0.4)] flex items-center gap-2 group bg-[#FFBC00] text-brand-navy tracking-tight">
                            Start Trial
                        </button>
<button className="h-14 px-8 rounded-full border font-medium transition-all backdrop-blur-sm flex items-center gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white">
<i className="w-5 h-5" data-lucide="play-circle"></i> Watch Demo
                        </button>
</div>
<div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
<i className="w-5 h-5 text-[#00bfda]" data-lucide="award"></i>
<span>The new recruitment standard</span>
</div>
</div>

<div className="relative flex justify-center lg:justify-end perspective-[1000px]">
<div className="absolute inset-0 bg-gradient-to-tr blur-[60px] rounded-full -z-10 transform scale-90 from-brand-navy/40 to-[#00bfda]/20"></div>

<div className="relative w-[320px] sm:w-[340px] h-[650px] bg-[#020b14] rounded-[40px] border-[6px] border-[#1e293b] shadow-2xl overflow-hidden z-10 flex flex-col animate-float">
<div className="px-4 py-4 flex items-center justify-between border-b border-white/5 bg-[#002956]/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-[#00bfda] text-brand-navy">ID</div>
<div>
<div className="text-sm font-medium text-white">Live Interview</div>
<div className="text-[10px] text-[#00bfda] flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Recording
                                    </div>
</div>
</div>
</div>
<div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar relative bg-[#020b14]">
<div className="flex flex-col gap-1">
<span className="text-[10px] font-semibold text-slate-400 ml-2">Recruiter</span>
<div className="bg-[#1e293b] self-start rounded-2xl rounded-tl-none px-4 py-3 max-w-[90%] border border-white/5">
<p className="text-xs leading-relaxed text-slate-200">Tell me about a time you handled a difficult stakeholder.</p>
</div>
</div>
<div className="flex flex-col gap-1 items-end">
<span className="text-[10px] font-semibold text-[#00bfda] mr-2">Candidate</span>
<div className="bg-[#002956] self-end rounded-2xl rounded-tr-none px-4 py-3 max-w-[90%] shadow-lg border border-[#00bfda]/20">
<p className="text-xs leading-relaxed text-white">I had a project where expectations weren't aligned. I set up weekly syncs and...</p>
</div>
</div>
<div className="mt-4 animate-[pulse_3s_infinite]">
<div className="glass-card rounded-xl p-4 border border-[#00bfda]/30">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-medium uppercase tracking-wide text-[#00bfda] flex items-center gap-1">
<i className="w-3 h-3" data-lucide="sparkles"></i> AI Summary
                                        </span>
<span className="text-[10px] text-white bg-[#00bfda]/20 px-2 py-0.5 rounded">High Potential</span>
</div>
<div className="space-y-2">
<div>
<p className="text-[10px] text-slate-400">Communication Style</p>
<div className="h-1.5 w-full bg-white/10 rounded-full mt-1">
<div className="h-full bg-[#00bfda] w-[92%] rounded-full"></div>
</div>
</div>
<p className="text-xs font-medium text-slate-200 mt-2">Candidate demonstrates strong conflict resolution skills. Structured thinker.</p>
</div>
</div>
</div>
</div>
<div className="p-5 bg-[#020b14] border-t border-white/5 z-20">
<div className="flex items-center justify-center gap-2 text-[#00bfda]">
<i className="w-4 h-4 animate-bounce" data-lucide="mic"></i>
<span className="text-xs font-medium">Listening &amp; Analyzing...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-8">
<p className="text-center text-sm text-slate-500 mb-6 font-medium">TRUSTED BY FORWARD-THINKING RECRUITMENT TEAMS</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold text-white"><i className="text-[#00bfda]" data-lucide="hexagon"></i> Inzet.nl</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><i className="text-[#00bfda]" data-lucide="triangle"></i> Nomilk2day</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><i className="text-[#00bfda]" data-lucide="circle"></i> theMatchBox</div>
<div className="flex items-center gap-2 text-xl font-bold text-white"><i className="text-[#00bfda]" data-lucide="square"></i> Compagnon</div>
</div>
</div>
</div>

<section className="py-24 relative overflow-hidden bg-brand-dark border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfda]/10 text-[#00bfda] border border-[#00bfda]/20 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="file-check"></i> Automated Reporting
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-[1.2]">
                        The ultimate report
                    </h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        While you focus 100% on the candidate, we generate objective reports which focus on the details that matter to you and your clients. Consistent, impartial, clear and fair.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="shrink-0 w-12 h-12 rounded-xl bg-[#00bfda]/10 flex items-center justify-center text-[#00bfda] border border-[#00bfda]/20 group-hover:bg-[#00bfda] group-hover:text-brand-navy transition-colors">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">Psychometric Insights</h3>
<p className="text-sm text-slate-500">Automatically extracted personality traits and motivators.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="shrink-0 w-12 h-12 rounded-xl bg-[#00bfda]/10 flex items-center justify-center text-[#00bfda] border border-[#00bfda]/20 group-hover:bg-[#00bfda] group-hover:text-brand-navy transition-colors">
<i className="w-6 h-6" data-lucide="list-checks"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-1">Competency Mapping</h3>
<p className="text-sm text-slate-500">Evidence-based competency scoring derived from the dialogue.</p>
</div>
</div>
</div>
</div>

<div className="order-2 relative perspective-[1000px] group">
<div className="absolute inset-0 bg-gradient-to-r from-[#00bfda]/20 to-purple-500/20 blur-[100px] -z-10 rounded-full opacity-50"></div>
<div className="relative bg-[#020b14] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-[float_8s_ease-in-out_infinite]">
<div className="h-10 bg-[#002956] border-b border-white/5 flex items-center px-4 gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
<div className="ml-4 h-4 w-32 bg-white/10 rounded-full"></div>
</div>
<div className="p-6 md:p-8 grid md:grid-cols-12 gap-6 relative">
<div className="md:col-span-7 space-y-6">
<div className="inline-block px-4 py-1.5 rounded-lg bg-[#00bfda] text-brand-navy text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,191,218,0.4)] transform -rotate-1">
                                    Motivator Tips
                                </div>
<div className="space-y-3 relative z-10">
<div className="bg-[#001529]/80 backdrop-blur-sm border border-white/5 p-4 rounded-xl hover:border-[#00bfda]/50 transition-all hover:translate-x-1 cursor-default group/card">
<div className="flex items-center gap-2 mb-1.5">
<div className="bg-[#00bfda]/20 p-1 rounded-full text-[#00bfda]"><i className="w-3 h-3" data-lucide="arrow-up-circle"></i></div>
<span className="text-sm font-medium text-white">Finds task-challenge important</span>
</div>
<p className="text-[10px] text-slate-400 italic pl-7 border-l-2 border-white/5">Tip: Talk about the challenges within the projects and the organization.</p>
</div>
<div className="bg-[#001529]/80 backdrop-blur-sm border border-white/5 p-4 rounded-xl hover:border-[#00bfda]/50 transition-all hover:translate-x-1 cursor-default group/card delay-75">
<div className="flex items-center gap-2 mb-1.5">
<div className="bg-[#00bfda]/20 p-1 rounded-full text-[#00bfda]"><i className="w-3 h-3" data-lucide="users"></i></div>
<span className="text-sm font-medium text-white">Finds collaboration important</span>
</div>
<p className="text-[10px] text-slate-400 italic pl-7 border-l-2 border-white/5">Tip: Tell more about the team and the collaboration within it.</p>
</div>
<div className="bg-[#001529]/80 backdrop-blur-sm border border-white/5 p-4 rounded-xl hover:border-[#00bfda]/50 transition-all hover:translate-x-1 cursor-default group/card delay-150">
<div className="flex items-center gap-2 mb-1.5">
<div className="bg-[#00bfda]/20 p-1 rounded-full text-[#00bfda]"><i className="w-3 h-3" data-lucide="scale"></i></div>
<span className="text-sm font-medium text-white">Finds work-life balance important</span>
</div>
<p className="text-[10px] text-slate-400 italic pl-7 border-l-2 border-white/5">Tip: Bring up the topic of work-life balance and ask open-ended questions.</p>
</div>
</div>
</div>
<div className="md:col-span-5 flex flex-col h-full">
<div className="bg-[#001529] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden h-full">
<div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#00bfda]/10 to-transparent"></div>
<div className="relative w-28 h-28 mb-4">
<div className="absolute inset-0 bg-[#00bfda] rounded-full blur-md opacity-20 animate-pulse"></div>
<div className="w-full h-full rounded-full border-[3px] border-[#00bfda] p-1 relative z-10 bg-[#001529]">
<img alt="Emily Johnson" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-[#001529] z-20"></div>
</div>
<h3 className="text-lg font-bold text-white mb-1">Emily Johnson</h3>
<p className="text-xs text-slate-400 mb-4">June 14, 2024, 15:45 • 47 min</p>
<button className="mt-auto w-full py-2.5 rounded-lg bg-[#002956] hover:bg-[#003875] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/10 group/btn">
<i className="w-4 h-4 group-hover/btn:animate-bounce" data-lucide="file-down"></i> DOWNLOAD PDF
                                    </button>
</div>
</div>
<div className="md:col-span-12 pt-2 border-t border-white/5 mt-2">
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="shrink-0 px-4 py-1.5 rounded-lg bg-[#00bfda] text-brand-navy text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,191,218,0.4)] transform rotate-1 self-start">
                                        Competencies
                                    </div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300 hover:bg-white/10 hover:border-[#00bfda]/30 transition-colors cursor-default">Working in teams</span>
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300 hover:bg-white/10 hover:border-[#00bfda]/30 transition-colors cursor-default">Adapting to change</span>
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-slate-300 hover:bg-white/10 hover:border-[#00bfda]/30 transition-colors cursor-default">Managing resources</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#001529] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfda]/10 text-[#00bfda] border border-[#00bfda]/20 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i> Team Analytics
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-[1.2]">
                        Improve team performance
                    </h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        Monitor, manage and improve your team’s technique. Analyse interviewer communication style and skills, set benchmarks and track performance to drive your organisation’s success.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-[#00bfda]/10 text-[#00bfda] border border-[#00bfda]/20"><i className="w-4 h-4" data-lucide="target"></i></div>
<div>
<h4 className="text-white text-base font-medium">Set Benchmarks</h4>
<p className="text-slate-500 text-sm mt-1">Define success metrics and track progress over time.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-[#00bfda]/10 text-[#00bfda] border border-[#00bfda]/20"><i className="w-4 h-4" data-lucide="users"></i></div>
<div>
<h4 className="text-white text-base font-medium">Compare Styles</h4>
<p className="text-slate-500 text-sm mt-1">Identify top performers and train others to match.</p>
</div>
</div>
</div>
</div>

<div className="order-2 lg:order-1 relative group perspective-[1000px]">

<div className="absolute inset-0 bg-[#00bfda]/10 blur-[100px] rounded-full -z-10 opacity-60"></div>

<div className="relative bg-[#020b14] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl animate-float-delayed">

<div className="flex items-center gap-2 mb-6 opacity-50">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="h-2 w-20 bg-slate-700 rounded-full"></div>
</div>

<div className="grid md:grid-cols-2 gap-6 relative z-10 pb-6">

<div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg border border-white/5 transform hover:-translate-y-2 transition-transform duration-300 relative">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00bfda] text-[#002956] text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(0,191,218,0.3)] flex items-center gap-1 z-20">
<i className="w-3 h-3" data-lucide="bar-chart"></i> TECHNIQUES
                                </div>

<div className="flex justify-between items-start mb-5 pt-3 border-b border-white/5 pb-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full border-2 border-[#00bfda] p-0.5 relative">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"/>
</div>
<div>
<div className="text-sm font-bold text-white">Ethan Blake</div>
</div>
</div>
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-white text-sm border border-white/10">9</div>
</div>

<div className="space-y-4">

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Question<br/>Rate</span>
<span className="font-mono text-sm font-semibold text-white">1.1 <span className="text-[10px] text-slate-500 font-normal">min</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-[#00bfda] font-bold text-[9px]">+10%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-[#00bfda] w-[60%] rounded-full animate-bar"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Open<br/>Questions</span>
<span className="font-mono text-sm font-semibold text-white">52 <span className="text-[10px] text-slate-500 font-normal">%</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-[#00bfda] font-bold text-[9px]">+24%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-[#00bfda] w-[80%] rounded-full animate-bar" style={{animationDelay: '0.1s'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Turn<br/>Taking</span>
<span className="font-mono text-sm font-semibold text-white">3.1 <span className="text-[10px] text-slate-500 font-normal">/min</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-slate-500 font-bold text-[9px]">-22%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-slate-500 w-[40%] rounded-full animate-bar" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Speaking<br/>Turn</span>
<span className="font-mono text-sm font-semibold text-white">4.0 <span className="text-[10px] text-slate-500 font-normal">sec</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-[#00bfda] font-bold text-[9px]">+33%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-[#00bfda] w-[75%] rounded-full animate-bar" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg border border-white/5 transform hover:-translate-y-2 transition-transform duration-300 delay-75 relative">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00bfda] text-[#002956] text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_4px_10px_rgba(0,191,218,0.3)] flex items-center gap-1 z-20">
<i className="w-3 h-3" data-lucide="pie-chart"></i> STATISTICS
                                </div>

<div className="flex justify-between items-start mb-5 pt-3 border-b border-white/5 pb-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full border-2 border-slate-600 p-0.5 relative">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"/>
</div>
<div>
<div className="text-sm font-bold text-white">Lily Harper</div>
</div>
</div>
<div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-white text-sm border border-white/10">9</div>
</div>

<div className="space-y-4">

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Conversation<br/>Duration</span>
<span className="font-mono text-sm font-semibold text-white">47 <span className="text-[10px] text-slate-500 font-normal">min</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-[#00bfda] font-bold text-[9px]">+34%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-[#00bfda] w-[85%] rounded-full animate-bar"></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Talk<br/>Time</span>
<span className="font-mono text-sm font-semibold text-white">44 <span className="text-[10px] text-slate-500 font-normal">%</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-[#00bfda] font-bold text-[9px]">+47%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-[#00bfda] w-[70%] rounded-full animate-bar" style={{animationDelay: '0.1s'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Traits<br/>Detected</span>
<span className="font-mono text-sm font-semibold text-white">0.3 <span className="text-[10px] text-slate-500 font-normal">/min</span></span>
<div className="flex flex-col items-end w-16">
<span className="text-slate-500 font-bold text-[9px]">-40%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-slate-500 w-[30%] rounded-full animate-bar" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-[10px]">
<span className="text-slate-400 font-bold w-20 uppercase leading-tight">Motivators<br/>Detected</span>
<span className="font-mono text-sm font-semibold text-white">7 <span className="text-[10px] text-slate-500 font-normal"></span></span>
<div className="flex flex-col items-end w-16">
<span className="text-[#00bfda] font-bold text-[9px]">+0%</span>
<div className="h-1.5 w-full bg-white/5 rounded-full mt-0.5 overflow-hidden">
<div className="h-full bg-[#00bfda] w-[90%] rounded-full animate-bar" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#1e293b] rounded-full p-1.5 shadow-xl border border-white/10 flex items-center gap-1 z-30">
<button className="bg-[#00bfda] text-brand-navy px-6 py-2.5 rounded-full text-xs font-bold shadow-[0_0_15px_rgba(0,191,218,0.4)] transition-transform hover:scale-105">INDIVIDUALS</button>
<button className="text-slate-400 px-6 py-2.5 rounded-full text-xs font-bold hover:bg-white/5 hover:text-white transition-colors flex items-center gap-2">
<i className="w-3 h-3" data-lucide="users"></i> TEAM OVERVIEW
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                    Record, Report, Recruit
                </h2>
<p className="text-lg text-slate-400">
                    Record live, online and telephone interviews. Generate and edit automated reports. Save time instantly.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-3xl border border-white/10 bg-[#020b14] p-8 hover:border-brand-navy/50 transition-all flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-brand-navy/30 rounded-lg text-white border border-white/5">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-medium text-white">Automated Reports</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            While you focus 100% on the candidate, we generate objective summaries and reports automatically.
                        </p>
<button className="text-[#00bfda] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="flex-1 relative h-40 bg-[#001529]/50 rounded-lg border border-white/5 p-4 flex items-end justify-between gap-1 overflow-hidden group">
<div className="w-[12%] h-[40%] bg-slate-700/50 rounded-t-sm group-hover:bg-slate-600/50 transition-colors"></div>
<div className="w-[12%] h-[60%] bg-slate-700/50 rounded-t-sm group-hover:bg-slate-600/50 transition-colors"></div>
<div className="w-[12%] h-[45%] bg-slate-700/50 rounded-t-sm group-hover:bg-slate-600/50 transition-colors"></div>
<div className="w-[12%] h-[80%] bg-[#00bfda] rounded-t-sm shadow-[0_0_15px_-3px_rgba(0,191,218,0.5)] relative"></div>
<div className="w-[12%] h-[70%] bg-slate-700/50 rounded-t-sm group-hover:bg-slate-600/50 transition-colors"></div>
<div className="w-[12%] h-[55%] bg-slate-700/50 rounded-t-sm group-hover:bg-slate-600/50 transition-colors"></div>
<div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-white/10"></div>
</div>
</div>

<div className="rounded-3xl border border-white/10 bg-[#020b14] p-8 hover:border-[#FFBC00]/30 transition-all flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-[#FFBC00]/10 rounded-lg text-[#FFBC00] border border-[#FFBC00]/20">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-white">Sales Insights</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Gain actionable insights and visualised metrics that empower your team to close deals.
                    </p>
<div className="mt-auto h-32 w-full flex items-center justify-center relative">
<svg className="w-24 h-24 transform -rotate-90">
<circle cx="48" cy="48" fill="transparent" r="40" stroke="#1e293b" strokeWidth="6"></circle>
<circle className="drop-shadow-[0_0_8px_rgba(255,188,0,0.5)]" cx="48" cy="48" fill="transparent" r="40" stroke="#FFBC00" stroke-dasharray="251.2" stroke-dashoffset="60" strokeWidth="6"></circle>
</svg>
<div className="absolute text-center">
<div className="text-2xl font-bold text-white">76%</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Success Rate</div>
</div>
</div>
</div>

<div className="lg:col-span-3 rounded-3xl border border-white/10 bg-[#020b14] p-8 flex items-center justify-between hover:border-[#00bfda]/30 transition-all">
<div>
<h3 className="text-xl font-medium text-white mb-2">Job Qualification</h3>
<p className="text-sm text-slate-400 max-w-2xl">
                            Automatically convert transcripts into structured job ads. Learn more in the section below.
                        </p>
</div>
<div className="p-3 bg-[#00bfda]/10 rounded-full text-[#00bfda]">
<i className="w-5 h-5 animate-bounce" data-lucide="arrow-down"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5 bg-[#010e1a]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFBC00]/10 text-[#FFBC00] border border-[#FFBC00]/20 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="trending-up"></i> AI Sales Enablement
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-[1.2]">
                        Revolutionise Sales <br/>
<span className="text-[#00bfda]">with AI Insights</span>
</h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        In2Dialog's Sales Report drives smarter sales by analysing conversations with AI. Gain actionable insights, sales potential scores, and visualised metrics that empower your team to close deals more quickly and exceed targets.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-[#00bfda]/20 text-[#00bfda]"><i className="w-3 h-3" data-lucide="check"></i></div>
<span className="text-slate-300 text-sm">Automated "Next Steps" extraction to keep deals moving</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-[#00bfda]/20 text-[#00bfda]"><i className="w-3 h-3" data-lucide="check"></i></div>
<span className="text-slate-300 text-sm">Sentiment analysis to gauge positive buying signals</span>
</li>
</ul>
<button className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center gap-2">
                        Explore Sales Solutions <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative group perspective-[1000px] order-1 lg:order-2">
<div className="absolute inset-0 bg-[#00bfda]/10 blur-[80px] rounded-full -z-10"></div>
<div className="relative bg-[#020b14] border border-white/10 rounded-3xl p-3 shadow-2xl overflow-hidden flex flex-col md:flex-row gap-4 h-[450px] md:h-[400px]">
<div className="relative w-full md:w-5/12 h-full rounded-2xl overflow-hidden shrink-0">
<img alt="Sales Call" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-brand-navy/30"></div>
<div className="absolute top-4 left-0 bg-[#00bfda] text-brand-navy font-bold text-[10px] px-3 py-1.5 rounded-r-lg shadow-lg z-20">
                                SALES REPORT
                            </div>
<div className="absolute bottom-24 left-3 right-3 bg-[#001529]/95 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-20 animate-float">
<div className="text-[10px] font-bold text-white mb-1">Next Steps:</div>
<p className="text-[9px] text-slate-300 leading-snug">The vendor will create a detailed proposal outlining personalised ad strategies, platforms, and analytics options.</p>
</div>
<div className="absolute bottom-3 left-3 right-3 bg-[#001529]/95 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-xl z-20 animate-float-delayed">
<div className="text-[10px] font-bold text-white mb-1">Positive Buying Signals:</div>
<p className="text-[9px] text-slate-300 leading-snug">Clear enthusiasm for a data-driven, targeted approach to digital advertising.</p>
</div>
</div>
<div className="w-full md:w-7/12 bg-[#001529]/30 rounded-2xl p-5 flex flex-col border border-white/5">
<div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
<div>
<h3 className="text-lg font-bold text-white">Sales</h3>
<p className="text-[10px] text-slate-400 mt-1">Template suitable for discussion between sales personnel and a potential client.</p>
</div>
<i className="w-4 h-4 text-[#00bfda]" data-lucide="eye"></i>
</div>
<div className="space-y-3 overflow-y-auto pr-1 flex-1 custom-scrollbar">
<div className="group/item cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors sales-list-item">
<div className="flex items-center gap-2 mb-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500 sales-bullet transition-colors"></div>
<h4 className="text-xs font-bold text-white transition-colors">Transcript</h4>
</div>
<p className="text-[10px] text-slate-500 pl-3.5">Searchable transcript with timestamps.</p>
</div>
<div className="group/item cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors sales-list-item">
<div className="flex items-center gap-2 mb-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500 sales-bullet transition-colors"></div>
<h4 className="text-xs font-bold text-white transition-colors">Summary</h4>
</div>
<p className="text-[10px] text-slate-500 pl-3.5">A generic summary of the conversation.</p>
</div>
<div className="group/item cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors sales-list-item">
<div className="flex items-center gap-2 mb-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500 sales-bullet transition-colors"></div>
<h4 className="text-xs font-bold text-white transition-colors">Key Points</h4>
</div>
<p className="text-[10px] text-slate-500 pl-3.5">List of key points of the conversation.</p>
</div>
<div className="group/item cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors sales-list-item">
<div className="flex items-center gap-2 mb-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500 sales-bullet transition-colors"></div>
<h4 className="text-xs font-bold text-white transition-colors">Sales Report</h4>
</div>
<p className="text-[10px] text-slate-500 pl-3.5">Report focused on purpose, main take-aways and next steps resulting from a sales meeting.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#001529] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1 select-none">
<div className="relative h-[550px] w-full perspective-[1000px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00bfda]/10 to-transparent rounded-full blur-[90px]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 z-0 pointer-events-none overflow-visible">
<path className="opacity-40" d="M 0,40 Q 150,120 300,50" fill="none" stroke="#64748b" stroke-dasharray="8 6" strokeWidth="2"></path>
<polygon className="opacity-40" fill="#64748b" points="300,50 290,45 290,55"></polygon>
</svg>
<div className="absolute top-10 left-0 md:left-10 w-72 bg-white rounded-xl shadow-2xl z-10 p-5 border border-slate-200 transform -rotate-2 transition-transform hover:rotate-0 duration-500">
<div className="bg-[#00bfda] text-brand-navy text-xs font-bold py-2 px-4 rounded-lg inline-block mb-4 shadow-sm tracking-wide">SAMPLE JOB POSTING TEXT</div>
<div className="space-y-3">
<div className="h-4 w-2/3 bg-slate-100 rounded"></div>
<div className="text-sm font-bold text-slate-800">Vacancy: Salesperson BENELUX</div>
<div className="text-[10px] font-bold text-slate-900 mt-2">Job description:</div>
<div className="text-[9px] leading-relaxed text-slate-600 rounded relative">
<div className="animate-[highlightPulse_5s_infinite]">
                                        As a salesperson for the Benelux you are responsible for maintaining existing relationships and recruiting new customers. You must be able to understand and explain technical processes.
                                    </div>
<div className="mt-1 opacity-50">Communication skills, a neat appearance and keeping agreements are essential for this role.</div>
</div>
</div>
<div className="absolute -right-8 bottom-12 bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-lg px-3 py-1.5 flex items-center gap-2 text-[10px] font-medium text-slate-700 animate-[tooltipPop_5s_infinite]">
<i className="w-3 h-3 text-[#00bfda]" data-lucide="copy"></i> Copy...
                            </div>
</div>
<div className="absolute bottom-10 right-0 md:right-10 w-72 bg-white rounded-xl shadow-2xl z-20 p-5 border border-slate-200 transform rotate-1 transition-transform hover:rotate-0 duration-500">
<div className="absolute top-4 right-4 text-slate-300"><i className="w-4 h-4" data-lucide="x"></i></div>
<h3 className="font-serif text-lg font-bold text-slate-900 leading-tight mb-1">Salesperson BENELUX</h3>
<p className="text-[9px] text-slate-500 mb-5 font-medium">Amsterdam | € 4500 a month | Full-time</p>
<div className="flex gap-2 mb-6">
<button className="flex-1 bg-[#8b5cf6] text-white text-[10px] font-bold py-2.5 rounded shadow-sm hover:bg-[#7c3aed]">Apply now</button>
<button className="px-3 border border-slate-200 rounded text-slate-400 hover:bg-slate-50"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
</div>
<div className="text-xs font-bold text-slate-900 mb-2">Job description</div>
<div className="bg-slate-50 border border-slate-200 rounded-lg p-3 min-h-[120px] relative overflow-hidden shadow-inner">
<div className="text-[9px] leading-relaxed text-slate-600 animate-[textAppear_5s_infinite]">
                                    As a salesperson for the Benelux you are responsible for maintaining existing relationships and recruiting new customers. You must be able to understand and explain technical processes.
                                </div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.1)] rounded-lg px-3 py-1.5 flex items-center gap-2 text-[10px] font-medium text-slate-700 animate-[tooltipPopPaste_5s_infinite]">
<i className="w-3 h-3 text-[#00bfda]" data-lucide="clipboard"></i> Paste...
                                </div>
</div>
</div>
<div className="absolute -bottom-4 right-20 z-30 animate-[buttonPulse_5s_infinite]">
<button className="bg-[#002956] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-2xl hover:bg-[#003875] transition-colors flex items-center gap-2 border border-white/10 tracking-wide">
                                PUBLISH
                            </button>
</div>
<div className="absolute z-50 pointer-events-none text-slate-800 drop-shadow-xl animate-[cursorFlow_5s_ease-in-out_infinite]">
<svg fill="currentColor" height="28" stroke="white" strokeWidth="1.5" viewbox="0 0 24 24" width="28">
<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
</svg>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00bfda]/10 text-[#00bfda] border border-[#00bfda]/20 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="briefcase"></i> Smart Recruitment
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white leading-[1.2]">
                        Simplify Hiring with <br/>
<span className="primary-gradient-text">AI-Powered Job Qualification</span>
</h2>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                        In2Dialog's Job Qualification Report converts client discussions into ready-to-use job ads and descriptions. Save time, ensure precision, and align perfectly with client expectations—seamlessly and effortlessly.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#00bfda]/10 flex items-center justify-center text-[#00bfda] border border-[#00bfda]/20">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">Instant Generation</h4>
<p className="text-slate-500 text-xs">From conversation to job ad in seconds.</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#00bfda]/10 flex items-center justify-center text-[#00bfda] border border-[#00bfda]/20">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">Precision Matching</h4>
<p className="text-slate-500 text-xs">Aligns perfectly with hiring manager needs.</p>
</div>
</div>
</div>
<button className="px-8 py-3.5 rounded-full bg-[#00bfda] text-brand-navy font-bold hover:bg-[#00a0b8] transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(0,191,218,0.4)]">
                        Start Automating <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Simple Pricing</h2>
<p className="text-slate-400 max-w-xl mx-auto">Start for free. Scale as you grow. No hidden fees.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-3xl border border-white/10 bg-[#020b14] hover:border-white/20 transition-all">
<h3 className="text-lg font-medium text-white mb-2">Standard</h3>
<div className="text-4xl font-semibold text-white mb-2">€39.50</div>
<div className="text-xs text-slate-500 mb-6 font-medium">per user / month <br/> billed annually</div>
<p className="text-sm text-slate-400 mb-8 h-10">For individual recruiters and small teams.</p>
<button className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors mb-8">Get Started</button>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Unlimited Interviews</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Detailed Reports</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Recruiter Insights</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Manager Insights</li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-[#00bfda]/50 bg-[#002956]/20 relative">
<h3 className="text-lg font-medium text-white mb-2">Plus</h3>
<div className="text-4xl font-semibold text-white mb-2">€49.50</div>
<div className="text-xs text-slate-400 mb-6 font-medium">per user / month <br/> billed annually</div>
<p className="text-sm text-slate-300 mb-8 h-10">More premium features to reduce manual tasks.</p>
<button className="w-full py-3 rounded-xl bg-[#00bfda] text-brand-navy font-bold hover:bg-[#00a0b8] transition-colors mb-8 shadow-[0_0_20px_-5px_rgba(0,191,218,0.4)]">Start Free Trial</button>
<ul className="space-y-3 text-sm text-white">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Unlimited Interviews</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Detailed Reports</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Recruiter Insights</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Manager Insights</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> ATS integration possible</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Interview template integration</li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-white/10 bg-[#020b14] hover:border-white/20 transition-all">
<h3 className="text-lg font-medium text-white mb-2">Corporate</h3>
<div className="text-4xl font-semibold text-white mb-2">Request a quote</div>
<div className="text-xs text-slate-500 mb-6 font-medium">  <br/>  </div>
<p className="text-sm text-slate-400 mb-8 h-10">All options adapted to your recruitment processes.</p>
<button className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Unlimited Interviews</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Detailed Reports</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Recruiter Insights</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Manager Insights</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> ATS integration possible</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Interview template integration</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#00bfda]" data-lucide="check"></i> Data science for optimal performance</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#020b14] border border-white/10 rounded-2xl open:border-[#00bfda]/30 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white">
                        Is my data secure?
                        <i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180 group-open:text-[#00bfda]" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Yes, absolutely. We are GDPR compliant and use enterprise-grade encryption for all data storage and transmission. Your interview data remains yours and is never used to train public AI models.
                    </div>
</details>
<details className="group bg-[#020b14] border border-white/10 rounded-2xl open:border-[#00bfda]/30 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white">
                        Does it work with my ATS?
                        <i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180 group-open:text-[#00bfda]" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        We integrate seamlessly with major ATS platforms including Bullhorn, Carerix, Otys, and Byner. For custom integrations, our API is available for Enterprise plans.
                    </div>
</details>
<details className="group bg-[#020b14] border border-white/10 rounded-2xl open:border-[#00bfda]/30 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer font-medium text-white">
                        Can I try it before buying?
                        <i className="w-5 h-5 text-slate-500 transition-transform group-open:rotate-180 group-open:text-[#00bfda]" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">
                        Yes! We offer a 14-day free trial with full access to Pro features. No credit card required to start.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01]" id="resources">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-10">News, Articles and Case Studies</h2>
<div className="grid md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-slate-800 mb-4 overflow-hidden relative">
<img alt="Meeting" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10">Case Study</div>
</div>
<div className="text-xs text-[#00bfda] mb-2 font-mono">4 min read</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#00bfda] transition-colors">Inzet.nl &amp; In2Dialog: From Efficient Hiring to Meaningful Insights</h3>
</article>
<article className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-slate-800 mb-4 overflow-hidden relative">
<img alt="Team" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10">Article</div>
</div>
<div className="text-xs text-[#00bfda] mb-2 font-mono">4 min read</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#00bfda] transition-colors">From time-consuming to future-focused: Nomilk2day’s AI leap</h3>
</article>
<article className="group cursor-pointer">
<div className="aspect-video rounded-xl bg-slate-800 mb-4 overflow-hidden relative">
<img alt="Integration" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur px-3 py-1 rounded-full text-xs text-white border border-white/10">News</div>
</div>
<div className="text-xs text-[#00bfda] mb-2 font-mono">3 min read</div>
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#00bfda] transition-colors">In2Dialog Joins Forces with theMatchBox</h3>
</article>
</div>
</div>
</section>

<section className="py-24 bg-brand-navy/20 border-t border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-center text-white mb-16">What customers say about us</h2>
<div className="grid lg:grid-cols-3 gap-8">
<div className="glass-card p-8 rounded-2xl flex flex-col relative">
<i className="w-8 h-8 text-[#00bfda]/20 absolute top-6 right-6" data-lucide="quote"></i>
<p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                        "Partnering with In2Dialog has been a game changer for NoMilk2Day. The automated reports are not only consistent and insightful but also save us an average of 30 minutes per interview."
                    </p>
<div className="border-t border-white/5 pt-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-xs">WW</div>
<div>
<div className="text-white font-medium text-sm">Wim van de Worp</div>
<div className="text-slate-500 text-xs">Co-Founder, NoMilk2Day</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl flex flex-col relative">
<i className="w-8 h-8 text-[#00bfda]/20 absolute top-6 right-6" data-lucide="quote"></i>
<p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                        "In2Dialog has transformed our recruitment processes by saving us valuable time and providing valuable insights into our interview style."
                    </p>
<div className="border-t border-white/5 pt-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#00bfda] text-brand-navy flex items-center justify-center font-bold text-xs">GO</div>
<div>
<div className="text-white font-medium text-sm">Guillaume Onclin</div>
<div className="text-slate-500 text-xs">IT Business Analyst, NIMBL</div>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl flex flex-col relative">
<i className="w-8 h-8 text-[#00bfda]/20 absolute top-6 right-6" data-lucide="quote"></i>
<p className="text-slate-300 text-sm leading-relaxed mb-6 flex-grow">
                        "In2Dialog also gives me feedback on my conversational techniques, truly hilarious. How many open-ended questions am I asking, intonation... Yes, it's true, I'm completely a fan."
                    </p>
<div className="border-t border-white/5 pt-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FFBC00] text-brand-navy flex items-center justify-center font-bold text-xs">LB</div>
<div>
<div className="text-white font-medium text-sm">Linn van Boxtel</div>
<div className="text-slate-500 text-xs">Recruiter, Compagnon</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden text-center" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] pointer-events-none via-[#020b14] to-[#020b14] from-brand-navy/40"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<span className="text-[#00bfda] font-mono text-sm tracking-wider uppercase mb-4 block">AI for Recruiters</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white">
                The New Recruitment Standard
            </h2>
<p className="text-xl mb-12 leading-relaxed text-slate-400 max-w-2xl mx-auto">
                We help recruiters specialise in what they do best: focus on candidate connection.
                <span className="text-white font-medium block mt-4">Are you ready for next-level recruitment?</span>
</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:bg-[#e5a800] bg-[#FFBC00] text-brand-navy shadow-[#FFBC00]/20">
                    Book a Discovery Call
                </button>
<button className="px-10 py-4 rounded-full text-lg font-semibold transition-all border border-white/10 hover:bg-white/5 text-white">
                    Contact Us
                </button>
</div>
</div>
</section>

<footer className="border-t py-16 bg-[#001529] border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<img alt="In2Dialog" className="h-6 w-auto object-contain opacity-80" src="https://in2dialog.com/wp-content/uploads/2024/07/In2Dialog-Logo-White.webp"/>
</div>
<div className="text-slate-500 space-y-2">
<p>Hofplein 20</p>
<p>3032 AC Rotterdam (NL)</p>
<p className="mt-4 text-white hover:text-[#00bfda] transition-colors"><a href="mailto:info@in2dialog.com">info@in2dialog.com</a></p>
<p className="text-white hover:text-[#00bfda] transition-colors"><a href="tel:+31853036330">+31 85 303 6330</a></p>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Information</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#00bfda] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#00bfda] transition-colors" href="#">Resources</a></li>
<li><a className="hover:text-[#00bfda] transition-colors" href="#">Release notes</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-[#00bfda] transition-colors" href="#">Terms and conditions</a></li>
<li><a className="hover:text-[#00bfda] transition-colors" href="#">Privacy statement</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-pink-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-slate-600">
<p>© 2024 In2Dialog. All rights reserved.</p>
<p>Made with AI.</p>
</div>
</footer>




    </>
  );
}
