import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['Space Grotesk', 'sans-serif'], // Using Space Grotesk for the "techy" look
},
colors: {
dark: '#030014',
card: '#0F1121',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'orbit': 'orbit 20s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'shimmer': 'shimmer 2.5s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
orbit: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' }
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    window.onload = function() {
      const canvas = document.getElementById('shader-canvas');
      const gl = canvas.getContext('webgl');
      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }
      resize();
      window.addEventListener('resize', resize);

      const vertexShaderSource = `
        attribute vec2 aPosition;
        void main() {
          gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `;
      const fragmentShaderSource = `
        precision highp float;
        uniform float iTime;
        uniform vec2 iResolution;
        mat2 rotate2d(float angle){
          float c = cos(angle), s = sin(angle);
          return mat2(c, -s, s, c);
        }
        float variation(vec2 v1, vec2 v2, float strength, float speed) {
          return sin(
              dot(normalize(v1), normalize(v2)) * strength + iTime * speed
          ) / 100.0;
        }
        vec3 paintCircle (vec2 uv, vec2 center, float rad, float width) {
          vec2 diff = center-uv;
          float len = length(diff);
          len += variation(diff, vec2(0.0, 1.0), 5.0, 2.0);
          len -= variation(diff, vec2(1.0, 0.0), 5.0, 2.0);
          float circle = smoothstep(rad-width, rad, len) - smoothstep(rad, rad+width, len);
          return vec3(circle);
        }
        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          uv.x *= 1.5;
          uv.x -= 0.25;
          vec3 color = vec3(0.0);
          float radius = 0.35;
          vec2 center = vec2(0.5);
          color += paintCircle(uv, center, radius, 0.035);
          color += paintCircle(uv, center, radius - 0.018, 0.01);
          color += paintCircle(uv, center, radius + 0.018, 0.005);
          vec2 v = rotate2d(iTime) * uv;
          color *= vec3(v.x, v.y, 0.7-v.y*v.x);
          color += paintCircle(uv, center, radius, 0.003);
          gl_FragColor = vec4(color, 1.0);
        }
      `;
      function compileShader(type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          throw new Error(gl.getShaderInfoLog(shader));
        }
        return shader;
      }
      const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program));
      }
      gl.useProgram(program);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]), gl.STATIC_DRAW);
      const aPosition = gl.getAttribLocation(program, 'aPosition');
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
      const iTimeLoc = gl.getUniformLocation(program, 'iTime');
      const iResLoc = gl.getUniformLocation(program, 'iResolution');
      function render(time) {
        gl.uniform1f(iTimeLoc, time * 0.001);
        gl.uniform2f(iResLoc, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);
    };
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div bis_size='{"x":0,"y":1665,"w":1528,"h":343,"abs_x":0,"abs_y":1707}' className="aura-background-component fixed -z-10 w-full h-1/2 top-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}></div>

<nav bis_size='{"x":0,"y":1665,"w":1528,"h":80,"abs_x":0,"abs_y":1707}' className="fixed z-50 transition-all duration-300 bg-[#030014]/80 w-full border-white/5 border-b top-0 backdrop-blur-xl">
<div bis_size='{"x":124,"y":1665,"w":1280,"h":80,"abs_x":124,"abs_y":1707}' className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div bis_size='{"x":148,"y":1689,"w":86,"h":32,"abs_x":148,"abs_y":1731}' className="flex group cursor-pointer space-x-2 items-center justify-center">
<div bis_size='{"x":148,"y":1689,"w":32,"h":32,"abs_x":148,"abs_y":1731}' className="relative w-8 h-8 flex items-center justify-center">
<div bis_size='{"x":148,"y":1689,"w":32,"h":32,"abs_x":148,"abs_y":1731}' className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-md group-hover:bg-indigo-500/40 transition-all" style={{}}></div>
<div bis_size='{"x":148,"y":1689,"w":32,"h":32,"abs_x":148,"abs_y":1731}' className="w-8 h-8 bg-gradient-to-br from-indigo-500 rounded-lg flex items-center justify-center relative z-10 border to-purple-600 border-white/10" style={{}}>
<div bis_size='{"x":158,"y":1699,"w":12,"h":12,"abs_x":158,"abs_y":1741}' className="w-3 h-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] bg-white"></div>
</div>
</div>
<span bis_size='{"x":188,"y":1691,"w":46,"h":28,"abs_x":188,"abs_y":1733}' className="font-serif text-xl font-medium tracking-tight text-white font-sans" style={{}}>ZynQ</span>
</div>
<div bis_size='{"x":562,"y":1697,"w":312,"h":16,"abs_x":562,"abs_y":1739}' className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-gray-400" style={{}}>
<a bis_size='{"x":562,"y":1697,"w":73,"h":16,"abs_x":562,"abs_y":1739}' className="transition-colors hover:text-white font-sans" href="#features" style={{}}>Platform</a>
<a bis_size='{"x":668,"y":1697,"w":89,"h":16,"abs_x":668,"abs_y":1739}' className="transition-colors hover:text-white font-sans" href="#developers" style={{}}>Developers</a>
<a bis_size='{"x":789,"y":1697,"w":85,"h":16,"abs_x":789,"abs_y":1739}' className="transition-colors hover:text-white font-sans" href="#use-cases" style={{}}>Ecosystem</a>
</div>
<div bis_size='{"x":1203,"y":1687,"w":176,"h":36,"abs_x":1203,"abs_y":1729}' className="flex items-center gap-4" style={{}}>
<a bis_size='{"x":1203,"y":1697,"w":43,"h":16,"abs_x":1203,"abs_y":1739}' className="hidden md:block text-xs font-mono transition-colors uppercase tracking-wider text-gray-400 hover:text-white font-sans" href="#" style={{}}>Log in</a>
<a bis_size='{"x":1262,"y":1687,"w":117,"h":36,"abs_x":1262,"abs_y":1729}' className="px-5 py-2.5 text-xs font-mono font-semibold rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:scale-105 bg-white text-black hover:bg-indigo-50 font-sans" href="#" style={{}}>
                    Start Building
                </a>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":1528,"h":1179,"abs_x":0,"abs_y":42}' className="lg:min-h-screen flex flex-col overflow-hidden pt-32 pb-20 relative blur-none items-center justify-center"><div bis_size='{"x":0,"y":0,"w":1528,"h":1179,"abs_x":0,"abs_y":42}' className="z-10 absolute top-0 right-0 bottom-0 left-0 blur-md brightness-50 gap-x-y-10 gap-y-0" data-container-bg="true"><div bis_size='{"x":0,"y":0,"w":1528,"h":1179,"abs_x":0,"abs_y":42}' className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>


<div bis_size='{"x":124,"y":128,"w":1280,"h":971,"abs_x":124,"abs_y":170}' className="flex flex-col z-10 text-center w-full max-w-7xl mr-auto ml-auto pt-36 pr-6 pl-6 relative gap-x-y-10 gap-y-0 items-center" style={{animationDelay: '1s'}}>

<div bis_size='{"x":656,"y":272,"w":214,"h":29,"abs_x":656,"abs_y":314}' className="inline-flex gap-2 animate-fade-in-up bg-white/5 border-white/10 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md gap-x-y-10 gap-y-0 items-center">
<span bis_size='{"x":673,"y":282,"w":8,"h":8,"abs_x":673,"abs_y":324}' className="relative flex h-2 w-2">
<span bis_size='{"x":673,"y":282,"w":8,"h":8,"abs_x":673,"abs_y":324}' className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400" style={{}}></span>
<span bis_size='{"x":673,"y":282,"w":8,"h":8,"abs_x":673,"abs_y":324}' className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" style={{}}></span>
</span>
<span bis_size='{"x":689,"y":278,"w":164,"h":16,"abs_x":689,"abs_y":320}' className="uppercase text-xs tracking-wider font-mono text-violet-50 font-sans" style={{}}>ZynQ Mainnet v2.0 Live</span>
</div>

<h1 bis_size='{"x":291,"y":333,"w":944,"h":96,"abs_x":291,"abs_y":375}' className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl tracking-tight max-w-5xl mr-auto mb-8 ml-auto font-instrument-serif font-normal">Where on-chain <span bis_size='{"x":802,"y":319,"w":204,"h":124,"abs_x":802,"abs_y":361}' className="text-gradient-purple pr-4 font-instrument-serif font-normal" style={{}}>clarity</span> begins.</h1>
<p bis_size='{"x":428,"y":461,"w":672,"h":56,"abs_x":428,"abs_y":503}' className="md:text-xl leading-relaxed text-lg text-slate-50 font-mono max-w-2xl mb-12 font-sans">
                Experience the future of decentralized infrastructure with our unified execution layer. Simplify, scale, and secure.
            </p>
<div bis_size='{"x":589,"y":565,"w":348,"h":53,"abs_x":589,"abs_y":607}' className="flex flex-col sm:flex-row mb-20 gap-x-5 gap-y-10">
<button bis_size='{"x":589,"y":565,"w":163,"h":53,"abs_x":589,"abs_y":607}' className="group relative px-8 py-4 rounded-full font-mono text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] bg-indigo-600 text-white" style={{}}>
<div bis_size='{"x":426,"y":565,"w":163,"h":53,"abs_x":426,"abs_y":607}' className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-shimmer via-white/20"></div>
<span bis_size='{"x":621,"y":582,"w":99,"h":20,"abs_x":621,"abs_y":624}' className="relative flex items-center gap-2 font-sans" style={{}}>
                        Get Started <svg bis_size='{"x":705,"y":584,"w":16,"h":16,"abs_x":705,"abs_y":626}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button bis_size='{"x":773,"y":565,"w":164,"h":53,"abs_x":773,"abs_y":607}' className="px-8 py-4 rounded-full border font-mono text-sm transition-all flex items-center gap-2 border-white/10 text-gray-300 hover:bg-white/5 hover:border-white/20 hover:text-white font-sans" style={{}}>
<svg bis_size='{"x":806,"y":584,"w":16,"h":16,"abs_x":806,"abs_y":626}' className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> View Demo
                </button>
</div>

<div bis_size='{"x":252,"y":699,"w":1024,"h":400,"abs_x":252,"abs_y":741}' className="md:h-[400px] w-full h-[10px] max-w-5xl mr-auto ml-auto relative gap-x-y-10 gap-y-0">


<div bis_size='{"x":252,"y":1010,"w":1024,"h":128,"abs_x":252,"abs_y":1052}' className="-bottom-10 pr-4 pl-4 absolute right-0 left-0 gap-x-y-10 gap-y-0">
<div bis_size='{"x":316,"y":1010,"w":896,"h":128,"abs_x":316,"abs_y":1052}' className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mr-auto ml-auto gap-x-4 gap-y-4">


<div bis_size='{"x":316,"y":1010,"w":288,"h":128,"abs_x":316,"abs_y":1052}' className="glass-card flex flex-col group text-center rounded-2xl pt-6 pr-6 pb-6 pl-6 items-center justify-center">
<span bis_size='{"x":414,"y":1035,"w":91,"h":16,"abs_x":414,"abs_y":1077}' className="uppercase text-xs text-slate-50 tracking-wider font-mono mb-2">Global Nodes</span>
<span bis_size='{"x":436,"y":1059,"w":48,"h":36,"abs_x":436,"abs_y":1101}' className="group-hover:text-indigo-400 transition-colors -multi text-3xl font-normal text-red-50 font-instrument-serif mb-1">+2M</span>
<span bis_size='{"x":419,"y":1099,"w":81,"h":15,"abs_x":419,"abs_y":1141}' className="text-[10px] text-neutral-50">Active worldwide</span>
</div><div bis_size='{"x":620,"y":1010,"w":288,"h":128,"abs_x":620,"abs_y":1052}' className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group border-indigo-500/30 bg-indigo-900/5" style={{}}>
<span bis_size='{"x":720,"y":1035,"w":86,"h":16,"abs_x":720,"abs_y":1077}' className="uppercase text-xs text-violet-50 tracking-wider font-mono mb-2 font-sans">Total Value</span>
<span bis_size='{"x":732,"y":1059,"w":62,"h":36,"abs_x":732,"abs_y":1101}' className="text-3xl mb-1 group-hover:text-indigo-400 transition-colors text-white -multi font-instrument-serif font-normal" style={{}}>$12B+</span>
<span bis_size='{"x":721,"y":1099,"w":84,"h":15,"abs_x":721,"abs_y":1141}' className="text-[10px] text-neutral-50 font-sans">Secured on-chain</span>
</div>

<div bis_size='{"x":924,"y":1010,"w":288,"h":128,"abs_x":924,"abs_y":1052}' className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group">
<span bis_size='{"x":1043,"y":1035,"w":49,"h":16,"abs_x":1043,"abs_y":1077}' className="uppercase text-xs text-neutral-50 tracking-wider font-mono mb-2 font-sans">Uptime</span>
<span bis_size='{"x":1038,"y":1059,"w":58,"h":36,"abs_x":1038,"abs_y":1101}' className="group-hover:text-indigo-400 transition-colors text-3xl text-neutral-50 mb-1 font-instrument-serif font-normal">99.9%</span>
<span bis_size='{"x":1029,"y":1099,"w":77,"h":15,"abs_x":1029,"abs_y":1141}' className="text-[10px] text-neutral-50 font-sans">Guaranteed SLA</span>
</div>
</div>
</div>

</div>
</div>
</section>

<section bis_size='{"x":0,"y":1179,"w":1528,"h":277,"abs_x":0,"abs_y":1221}' className="border-y bg-[#05050A] border-white/5 pt-24 pb-24">
<div bis_size='{"x":124,"y":1275,"w":1280,"h":84,"abs_x":124,"abs_y":1317}' className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-y-10 gap-y-0">
<p bis_size='{"x":148,"y":1275,"w":1232,"h":16,"abs_x":148,"abs_y":1317}' className="uppercase text-xs text-gray-600 tracking-widest font-mono mb-10" style={{}}>Trusted by the most well-known teams</p>
<div bis_size='{"x":148,"y":1331,"w":1232,"h":28,"abs_x":148,"abs_y":1373}' className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
<div bis_size='{"x":437,"y":1331,"w":88,"h":28,"abs_x":437,"abs_y":1373}' className="flex text-xl font-semibold text-white font-serif gap-x-2 gap-y-2 items-center" style={{}}>Microsoft</div>
<div bis_size='{"x":605,"y":1331,"w":61,"h":28,"abs_x":605,"abs_y":1373}' className="flex gap-2 text-xl font-semibold text-white font-serif gap-x-2 gap-y-2 items-center" style={{}}>Oracal</div>
<div bis_size='{"x":746,"y":1331,"w":43,"h":28,"abs_x":746,"abs_y":1373}' className="flex gap-2 text-xl font-semibold text-white font-serif gap-x-2 gap-y-2 items-center" style={{}}>MRF</div>
<div bis_size='{"x":870,"y":1331,"w":60,"h":28,"abs_x":870,"abs_y":1373}' className="flex gap-2 text-xl font-semibold text-white font-serif gap-x-2 gap-y-2 items-center" style={{}}>Block3</div>
<div bis_size='{"x":1010,"y":1331,"w":80,"h":28,"abs_x":1010,"abs_y":1373}' className="flex gap-2 text-xl font-semibold text-white font-serif gap-x-2 gap-y-2 items-center" style={{}}>Ethernet</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1456,"w":1528,"h":1105,"abs_x":0,"abs_y":1498}' className="overflow-hidden bg-center z-0 pointer-events-auto pt-32 pb-32 relative brightness-100" id="features"><div bis_size='{"x":0,"y":1456,"w":1528,"h":1105,"abs_x":0,"abs_y":1498}' className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div bis_size='{"x":0,"y":1456,"w":1528,"h":1105,"abs_x":0,"abs_y":1498}' className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div bis_size='{"x":0,"y":1456,"w":1528,"h":1105,"abs_x":0,"abs_y":1498}' className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="mZq7XpvHyoo5yklnnqL9"></div>
</div><div bis_size='{"x":0,"y":1456,"w":1528,"h":687,"abs_x":0,"abs_y":1498}' className="aura-background-component -z-10 w-full h-screen absolute top-0" data-alpha-mask="100"><div bis_size='{"x":0,"y":1456,"w":1528,"h":687,"abs_x":0,"abs_y":1498}' className="absolute inset-0" data-container-bg="true" style={{visibility: 'hidden'}}><div bis_size='{"x":0,"y":1456,"w":1528,"h":687,"abs_x":0,"abs_y":1498}' className="spline-container absolute top-0 left-0 w-full h-full -z-0"><iframe bis_chainid="2" bis_depth="1" bis_id="fr_sma7rkstzrn0mlm0e6bc9j" bis_size='{"x":0,"y":1665,"w":0,"h":0,"abs_x":0,"abs_y":1707}' frameborder="0" height="100%" src="https://my.spline.design/boxeshover-moTMLK3GQFBGQDftEiPF6OlW" width="100%"></iframe></div></div>
<div bis_size='{"x":0,"y":1456,"w":1528,"h":687,"abs_x":0,"abs_y":1498}' className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZPruWnhzwuk5Tf6nc1q0"></div>

</div></div>

<div bis_size='{"x":1028,"y":1733,"w":500,"h":500,"abs_x":1028,"abs_y":1775}' className="blur-[100px] bg-purple-900/20 w-[500px] h-[500px] rounded-full absolute top-1/4 right-0 blur-none" style={{}}></div>
<div bis_size='{"x":124,"y":1584,"w":1280,"h":849,"abs_x":124,"abs_y":1626}' className="max-w-7xl mr-auto ml-auto pr-6 pl-6"><div className="absolute inset-0" data-container-bg="true"><div className="spline-container absolute top-0 left-0 w-full h-full -z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/boxeshover-moTMLK3GQFBGQDftEiPF6OlW" width="100%"></iframe></div></div>
<div bis_size='{"x":148,"y":1584,"w":1232,"h":132,"abs_x":148,"abs_y":1626}' className="text-center mb-24">
<span bis_size='{"x":704,"y":1585,"w":118,"h":24,"abs_x":704,"abs_y":1627}' className="font-mono text-xs uppercase tracking-widest border border-indigo-500/20 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-sans" style={{}}>Capabilities</span>
<h2 bis_size='{"x":148,"y":1632,"w":1232,"h":48,"abs_x":148,"abs_y":1674}' className="text-4xl md:text-5xl mt-6 mb-4 text-white font-instrument-serif font-normal" style={{}}>Future-Forward Solutions</h2>
<p bis_size='{"x":508,"y":1696,"w":512,"h":20,"abs_x":508,"abs_y":1738}' className="max-w-lg mx-auto font-mono text-sm text-gray-400 font-sans" style={{}}>Engineered for the next generation of financial products.</p>
</div>
<div bis_size='{"x":148,"y":1812,"w":1232,"h":621,"abs_x":148,"abs_y":1854}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":148,"y":1812,"w":394,"h":275,"abs_x":148,"abs_y":1854}' className="glass-card p-8 rounded-3xl group relative overflow-hidden">
<div bis_size='{"x":381,"y":1813,"w":160,"h":160,"abs_x":381,"abs_y":1855}' className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
<svg bis_size='{"x":413,"y":1845,"w":96,"h":96,"abs_x":413,"abs_y":1887}' className="lucide lucide-zap w-24 h-24 text-indigo-500 stroke-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div bis_size='{"x":180,"y":1845,"w":48,"h":48,"abs_x":180,"abs_y":1887}' className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border group-hover:bg-indigo-500/20 transition-colors bg-white/5 border-white/10" style={{}}>
<svg bis_size='{"x":192,"y":1857,"w":24,"h":24,"abs_x":192,"abs_y":1899}' className="lucide lucide-cpu w-6 h-6 text-indigo-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 bis_size='{"x":180,"y":1917,"w":329,"h":32,"abs_x":180,"abs_y":1959}' className="text-2xl mb-3 text-white font-instrument-serif font-normal" style={{}}>Modular Compute</h3>
<p bis_size='{"x":180,"y":1961,"w":329,"h":45,"abs_x":180,"abs_y":2003}' className="text-gray-500 font-mono text-sm leading-relaxed mb-6 font-sans" style={{}}>Composable infrastructure blocks that adapt to your throughput needs automatically.</p>
<a bis_size='{"x":180,"y":2036,"w":103,"h":16,"abs_x":180,"abs_y":2078}' className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 hover:text-indigo-300 font-sans" href="#" style={{}}>
                        Learn more <svg bis_size='{"x":272,"y":2038,"w":12,"h":12,"abs_x":272,"abs_y":2080}' className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div bis_size='{"x":566,"y":1812,"w":813,"h":275,"abs_x":566,"abs_y":1854}' className="glass-card p-8 rounded-3xl group relative overflow-hidden lg:col-span-2">
<div bis_size='{"x":567,"y":1813,"w":811,"h":274,"abs_x":567,"abs_y":1855}' className="group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-transparent to-indigo-900/20 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":599,"y":1845,"w":747,"h":210,"abs_x":599,"abs_y":1887}' className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full relative z-10">
<div bis_size='{"x":599,"y":1845,"w":357,"h":210,"abs_x":599,"abs_y":1887}' className="">
<div bis_size='{"x":599,"y":1845,"w":48,"h":48,"abs_x":599,"abs_y":1887}' className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border group-hover:bg-indigo-500/20 transition-colors bg-white/5 border-white/10" style={{}}>
<svg bis_size='{"x":611,"y":1857,"w":24,"h":24,"abs_x":611,"abs_y":1899}' className="lucide lucide-shield-check w-6 h-6 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 bis_size='{"x":599,"y":1917,"w":357,"h":32,"abs_x":599,"abs_y":1959}' className="text-2xl mb-3 text-white font-instrument-serif font-normal" style={{}}>Zero-Knowledge Security</h3>
<p bis_size='{"x":599,"y":1961,"w":357,"h":45,"abs_x":599,"abs_y":2003}' className="text-gray-500 font-mono text-sm leading-relaxed mb-6 font-sans" style={{}}>Default privacy and verification without revealing underlying data structures. SOC2 Type II compliant.</p>
<div bis_size='{"x":599,"y":2031,"w":357,"h":24,"abs_x":599,"abs_y":2073}' className="flex gap-3">
<div bis_size='{"x":599,"y":2031,"w":76,"h":24,"abs_x":599,"abs_y":2073}' className="px-3 py-1 rounded border text-[10px] font-mono bg-white/5 border-white/10 text-gray-400 font-sans" style={{}}>ZK-Rollups</div>
<div bis_size='{"x":688,"y":2031,"w":85,"h":24,"abs_x":688,"abs_y":2073}' className="px-3 py-1 rounded border text-[10px] font-mono bg-white/5 border-white/10 text-gray-400 font-sans" style={{}}>MPC Wallets</div>
</div>
</div>
<div bis_size='{"x":989,"y":1862,"w":357,"h":176,"abs_x":989,"abs_y":1904}' className="rounded-xl border p-4 font-mono text-xs shadow-2xl bg-black/40 border-white/10 text-gray-400" style={{}}>
<div bis_size='{"x":1006,"y":1879,"w":324,"h":18,"abs_x":1006,"abs_y":1921}' className="flex gap-1.5 mb-3 border-b pb-2 border-white/5">
<div bis_size='{"x":1006,"y":1879,"w":10,"h":10,"abs_x":1006,"abs_y":1921}' className="w-2.5 h-2.5 rounded-full bg-red-500/50" style={{}}></div>
<div bis_size='{"x":1022,"y":1879,"w":10,"h":10,"abs_x":1022,"abs_y":1921}' className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div bis_size='{"x":1038,"y":1879,"w":10,"h":10,"abs_x":1038,"abs_y":1921}' className="w-2.5 h-2.5 rounded-full bg-green-500/50" style={{}}></div>
</div>
<div bis_size='{"x":1006,"y":1910,"w":324,"h":112,"abs_x":1006,"abs_y":1952}' className="space-y-2">
<div bis_size='{"x":1006,"y":1910,"w":324,"h":16,"abs_x":1006,"abs_y":1952}' className="flex justify-between">
<span bis_size='{"x":1006,"y":1910,"w":31,"h":16,"abs_x":1006,"abs_y":1952}' className="text-indigo-400 font-sans" style={{}}>const</span> <span bis_size='{"x":1152,"y":1910,"w":177,"h":16,"abs_x":1152,"abs_y":1952}' className="font-sans" style={{}}>verifyProof = <span bis_size='{"x":1230,"y":1910,"w":33,"h":15,"abs_x":1230,"abs_y":1952}' className="text-yellow-200 font-sans" style={{}}>async</span> (proof) =&gt; {</span>
</div>
<div bis_size='{"x":1006,"y":1934,"w":324,"h":16,"abs_x":1006,"abs_y":1976}' className="pl-4 text-gray-500 font-sans" style={{}}>// ZK verification logic</div>
<div bis_size='{"x":1006,"y":1958,"w":324,"h":16,"abs_x":1006,"abs_y":2000}' className="pl-4 font-sans" style={{}}>
<span bis_size='{"x":1022,"y":1958,"w":34,"h":15,"abs_x":1022,"abs_y":2000}' className="text-indigo-400 font-sans" style={{}}>return</span> await zynq.verify(proof);
                                </div>
<div bis_size='{"x":1006,"y":1982,"w":324,"h":16,"abs_x":1006,"abs_y":2024}' className="font-sans" style={{}}>}</div>
<div bis_size='{"x":1006,"y":2006,"w":324,"h":16,"abs_x":1006,"abs_y":2048}' className="mt-2 text-green-400 font-sans" style={{}}>&gt;&gt; Proof Verified (12ms)</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":148,"y":2112,"w":1232,"h":321,"abs_x":148,"abs_y":2154}' className="glass-card p-8 rounded-3xl group relative overflow-hidden lg:col-span-3 border-indigo-500/20" style={{}}>
<div bis_size='{"x":148,"y":2113,"w":1230,"h":320,"abs_x":148,"abs_y":2155}' className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div bis_size='{"x":180,"y":2145,"w":1166,"h":256,"abs_x":180,"abs_y":2187}' className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div bis_size='{"x":180,"y":2163,"w":576,"h":220,"abs_x":180,"abs_y":2205}' className="max-w-xl">
<div bis_size='{"x":180,"y":2165,"w":126,"h":24,"abs_x":180,"abs_y":2207}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-[10px] font-mono uppercase tracking-wide mb-6 text-indigo-300 font-sans" style={{}}>
<span bis_size='{"x":193,"y":2174,"w":6,"h":6,"abs_x":193,"abs_y":2216}' className="relative flex h-1.5 w-1.5">
<span bis_size='{"x":193,"y":2174,"w":6,"h":6,"abs_x":193,"abs_y":2216}' className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400" style={{}}></span>
<span bis_size='{"x":193,"y":2174,"w":6,"h":6,"abs_x":193,"abs_y":2216}' className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500" style={{}}></span>
</span>
                                Real-time Sync
                            </div>
<h3 bis_size='{"x":180,"y":2214,"w":576,"h":36,"abs_x":180,"abs_y":2256}' className="text-3xl mb-4 text-white font-instrument-serif font-normal" style={{}}>Unified Data Layer</h3>
<p bis_size='{"x":180,"y":2266,"w":576,"h":45,"abs_x":180,"abs_y":2308}' className="font-mono text-sm leading-relaxed mb-8 text-gray-400 font-sans" style={{}}>Stop stitching together fragmented indexers. Query historical and real-time blockchain data from a single, typed GraphQL endpoint.</p>
<button bis_size='{"x":180,"y":2343,"w":131,"h":40,"abs_x":180,"abs_y":2385}' className="px-6 py-3 text-xs font-mono font-semibold rounded-lg transition-colors bg-white text-black hover:bg-gray-200 font-sans" style={{}}>Start Querying</button>
</div>

<div bis_size='{"x":899,"y":2145,"w":448,"h":256,"abs_x":899,"abs_y":2187}' className="relative w-full max-w-md h-40 md:h-64 flex items-center justify-center">
<div bis_size='{"x":899,"y":2271,"w":448,"h":4,"abs_x":899,"abs_y":2313}' className="absolute w-full h-1 top-1/2 -translate-y-1/2 bg-white/10"></div>

<div bis_size='{"x":944,"y":2254,"w":37,"h":37,"abs_x":944,"abs_y":2296}' className="absolute left-[10%] border border-indigo-500/50 p-2 rounded-lg z-10 animate-float bg-black" style={{animationDelay: '0s'}}>
<svg bis_size='{"x":952,"y":2263,"w":20,"h":20,"abs_x":952,"abs_y":2305}' className="lucide lucide-database w-5 h-5 text-indigo-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>

<div bis_size='{"x":1090,"y":2240,"w":65,"h":65,"abs_x":1090,"abs_y":2282}' className="-translate-x-1/2 z-10 bg-black border-white/20 border rounded-xl pt-3 pr-3 pb-3 pl-3 absolute left-[50%] shadow-[0_0_30px_rgba(99,102,241,0.4)]">
<div bis_size='{"x":1103,"y":2253,"w":40,"h":40,"abs_x":1103,"abs_y":2295}' className="flex text-xl font-bold text-white font-serif bg-indigo-600 w-10 h-10 rounded items-center justify-center" style={{}}></div>
</div>

<div bis_size='{"x":1264,"y":2254,"w":37,"h":37,"abs_x":1264,"abs_y":2296}' className="z-10 animate-float bg-black border-purple-500/50 border rounded-lg pt-2 pr-2 pb-2 pl-2 absolute right-[10%]" style={{animationDelay: '1s'}}>
<svg bis_size='{"x":1273,"y":2263,"w":20,"h":20,"abs_x":1273,"abs_y":2305}' className="lucide lucide-smartphone w-5 h-5 text-purple-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>

<div bis_size='{"x":944,"y":2273,"w":8,"h":8,"abs_x":944,"abs_y":2315}' className="animate-shimmer bg-indigo-400 w-2 h-2 rounded-full absolute top-1/2 left-[10%]" style={{animation: '3s linear 0s infinite normal none running moveRight', visibility: 'hidden'}}></div>
<div bis_size='{"x":1294,"y":2273,"w":8,"h":8,"abs_x":1294,"abs_y":2315}' className="animate-shimmer bg-purple-400 w-2 h-2 rounded-full absolute top-1/2 right-[10%]" style={{animation: '3s linear 1.5s infinite normal none running moveLeft', visibility: 'hidden'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2562,"w":1528,"h":601,"abs_x":0,"abs_y":2604}' className="bg-[#020205] border-white/5 border-t pt-24 pb-24" id="developers">
<div bis_size='{"x":124,"y":2658,"w":1280,"h":408,"abs_x":124,"abs_y":2700}' className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-12 items-center">
<div bis_size='{"x":148,"y":2708,"w":604,"h":309,"abs_x":148,"abs_y":2750}' className="space-y-8 order-2 lg:order-1">
<div bis_size='{"x":148,"y":2708,"w":604,"h":309,"abs_x":148,"abs_y":2750}' className="bg-[#0c0c0c] rounded-xl border shadow-2xl overflow-hidden group border-white/10" style={{}}>
<div bis_size='{"x":148,"y":2709,"w":602,"h":39,"abs_x":148,"abs_y":2751}' className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
<div bis_size='{"x":164,"y":2722,"w":52,"h":12,"abs_x":164,"abs_y":2764}' className="flex items-center gap-2">
<div bis_size='{"x":164,"y":2722,"w":12,"h":12,"abs_x":164,"abs_y":2764}' className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div bis_size='{"x":184,"y":2722,"w":12,"h":12,"abs_x":184,"abs_y":2764}' className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div bis_size='{"x":204,"y":2722,"w":12,"h":12,"abs_x":204,"abs_y":2764}' className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div bis_size='{"x":636,"y":2721,"w":99,"h":15,"abs_x":636,"abs_y":2763}' className="text-[10px] font-mono text-gray-500 font-sans" style={{}}>api.zynq.dev — bash</div>
</div>
<div bis_size='{"x":148,"y":2749,"w":602,"h":268,"abs_x":148,"abs_y":2791}' className="p-6 font-mono text-xs md:text-sm space-y-4 text-gray-300" style={{}}>
<div bis_size='{"x":172,"y":2773,"w":554,"h":20,"abs_x":172,"abs_y":2815}' className="flex">
<span bis_size='{"x":172,"y":2773,"w":14,"h":20,"abs_x":172,"abs_y":2815}' className="mr-2 text-green-400 font-sans" style={{}}>➜</span>
<span bis_size='{"x":194,"y":2773,"w":149,"h":20,"abs_x":194,"abs_y":2815}' className="font-sans" style={{}}>npm install @zynq/sdk</span>
</div>
<div bis_size='{"x":172,"y":2809,"w":554,"h":20,"abs_x":172,"abs_y":2851}' className="text-gray-500 italic mb-2 font-sans" style={{}}>
                            added 42 packages in 2s
                        </div>
<div bis_size='{"x":172,"y":2845,"w":554,"h":20,"abs_x":172,"abs_y":2887}' className="flex">
<span bis_size='{"x":172,"y":2845,"w":14,"h":20,"abs_x":172,"abs_y":2887}' className="mr-2 text-green-400 font-sans" style={{}}>➜</span>
<span bis_size='{"x":194,"y":2845,"w":218,"h":20,"abs_x":194,"abs_y":2887}' className="text-white font-sans" style={{}}>zynq deploy --network ethereum</span>
</div>
<div bis_size='{"x":172,"y":2881,"w":554,"h":76,"abs_x":172,"abs_y":2923}' className="border-l-2 border-indigo-500/50 pl-4 py-2 my-2 bg-indigo-500/5 rounded-r" style={{}}>
<div bis_size='{"x":190,"y":2889,"w":536,"h":20,"abs_x":190,"abs_y":2931}' className="text-indigo-300 font-sans" style={{}}>Deploying Smart Contract...</div>
<div bis_size='{"x":190,"y":2913,"w":536,"h":16,"abs_x":190,"abs_y":2955}' className="flex justify-between mt-1 text-xs">
<span bis_size='{"x":190,"y":2913,"w":84,"h":16,"abs_x":190,"abs_y":2955}' className="font-sans" style={{}}>Gas estimated:</span>
<span bis_size='{"x":658,"y":2913,"w":68,"h":16,"abs_x":658,"abs_y":2955}' className="text-white font-sans" style={{}}>21,000 gwei</span>
</div>
<div bis_size='{"x":190,"y":2933,"w":536,"h":16,"abs_x":190,"abs_y":2975}' className="flex justify-between mt-1 text-xs">
<span bis_size='{"x":190,"y":2933,"w":39,"h":16,"abs_x":190,"abs_y":2975}' className="font-sans" style={{}}>Status:</span>
<span bis_size='{"x":587,"y":2933,"w":140,"h":16,"abs_x":587,"abs_y":2975}' className="text-green-400 font-sans" style={{}}>Confirmed Block #18293</span>
</div>
</div>
<div bis_size='{"x":172,"y":2973,"w":554,"h":20,"abs_x":172,"abs_y":3015}' className="flex items-center gap-2">
<span bis_size='{"x":172,"y":2973,"w":14,"h":20,"abs_x":172,"abs_y":3015}' className="text-green-400 font-sans" style={{}}>➜</span>
<span bis_size='{"x":194,"y":2975,"w":8,"h":16,"abs_x":194,"abs_y":3017}' className="animate-pulse w-2 h-4 bg-gray-500 block" style={{}}></span>
</div>
</div>
</div>
</div>
<div bis_size='{"x":776,"y":2658,"w":604,"h":408,"abs_x":776,"abs_y":2700}' className="order-1 lg:order-2">
<h2 bis_size='{"x":776,"y":2658,"w":604,"h":96,"abs_x":776,"abs_y":2700}' className="text-4xl md:text-5xl mb-6 text-white font-instrument-serif font-normal" style={{}}>Built for builders,<br bis_size='{"x":1061,"y":2651,"w":0,"h":62,"abs_x":1061,"abs_y":2693}'/><span bis_size='{"x":776,"y":2699,"w":249,"h":62,"abs_x":776,"abs_y":2741}' className="text-gray-500 font-instrument-serif font-normal" style={{}}>not buzzwords.</span></h2>
<p bis_size='{"x":776,"y":2778,"w":604,"h":45,"abs_x":776,"abs_y":2820}' className="font-mono text-sm leading-relaxed mb-8 text-gray-400 font-sans" style={{}}>
                    Direct integration with your existing stack. We handle the complexity of RPCs, indexing, and gas management so you can focus on product.
                </p>
<div bis_size='{"x":776,"y":2856,"w":604,"h":147,"abs_x":776,"abs_y":2898}' className="space-y-4 font-mono text-sm">
<div bis_size='{"x":776,"y":2856,"w":604,"h":65,"abs_x":776,"abs_y":2898}' className="flex items-center gap-4 p-4 rounded-lg border hover:border-indigo-500/30 transition-colors cursor-default bg-white/5 border-white/5" style={{}}>
<div bis_size='{"x":792,"y":2873,"w":32,"h":32,"abs_x":792,"abs_y":2915}' className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400" style={{}}>
<svg bis_size='{"x":800,"y":2881,"w":16,"h":16,"abs_x":800,"abs_y":2923}' className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<div bis_size='{"x":840,"y":2879,"w":107,"h":20,"abs_x":840,"abs_y":2921}' className="text-gray-300 font-sans" style={{}}>Type-safe SDKs</div>
</div>
<div bis_size='{"x":776,"y":2938,"w":604,"h":65,"abs_x":776,"abs_y":2980}' className="flex items-center gap-4 p-4 rounded-lg border hover:border-indigo-500/30 transition-colors cursor-default bg-white/5 border-white/5" style={{}}>
<div bis_size='{"x":792,"y":2954,"w":32,"h":32,"abs_x":792,"abs_y":2996}' className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400" style={{}}>
<svg bis_size='{"x":800,"y":2962,"w":16,"h":16,"abs_x":800,"abs_y":3004}' className="lucide lucide-webhook w-4 h-4" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
</div>
<div bis_size='{"x":840,"y":2960,"w":137,"h":20,"abs_x":840,"abs_y":3002}' className="text-gray-300 font-sans" style={{}}>Real-time Webhooks</div>
</div>
</div>
<div bis_size='{"x":776,"y":3043,"w":604,"h":24,"abs_x":776,"abs_y":3085}' className="mt-10">
<a bis_size='{"x":776,"y":3047,"w":211,"h":21,"abs_x":776,"abs_y":3089}' className="border-b border-indigo-500 pb-1 transition-colors font-mono text-sm uppercase tracking-wider text-white hover:text-indigo-400 font-sans" href="#" style={{}}>Read the Documentation</a>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3163,"w":1528,"h":517,"abs_x":0,"abs_y":3205}' className="overflow-hidden pt-32 pb-32 relative"><div bis_size='{"x":0,"y":3163,"w":1528,"h":517,"abs_x":0,"abs_y":3205}' className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><canvas bis_size='{"x":0,"y":3163,"w":1528,"h":517,"abs_x":0,"abs_y":3205}' className="w-full h-full absolute top-0 left-0 -z-10" height="687" id="shader-canvas" width="1536">

</canvas></div>
<div bis_size='{"x":0,"y":3163,"w":1528,"h":517,"abs_x":0,"abs_y":3205}' className="bg-indigo-900/10 absolute top-0 right-0 bottom-0 left-0 gap-x-y-10 gap-y-0"></div>
<div bis_size='{"x":0,"y":3163,"w":1528,"h":517,"abs_x":0,"abs_y":3205}' className="z-10 bg-gradient-to-t from-[#030014] via-transparent to-transparent w-full h-full absolute bottom-0 left-0" style={{}}></div>
<div bis_size='{"x":316,"y":3291,"w":896,"h":261,"abs_x":316,"abs_y":3333}' className="z-20 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative" style={{}}>
<h2 bis_size='{"x":340,"y":3291,"w":848,"h":72,"abs_x":340,"abs_y":3333}' className="md:text-7xl text-5xl text-white tracking-tight mb-8 font-instrument-serif font-normal">Ready to launch?</h2>
<p bis_size='{"x":476,"y":3395,"w":576,"h":56,"abs_x":476,"abs_y":3437}' className="font-mono text-lg mb-12 max-w-xl mx-auto text-gray-400 font-sans" style={{}}>Join thousands of developers building the future of finance on ZynQ.</p>
<div bis_size='{"x":340,"y":3499,"w":848,"h":53,"abs_x":340,"abs_y":3541}' className="flex flex-col sm:flex-row justify-center gap-4">
<button bis_size='{"x":586,"y":3499,"w":165,"h":53,"abs_x":586,"abs_y":3541}' className="px-10 py-4 font-mono text-sm font-semibold rounded-full transition-all hover:scale-105 bg-white text-black hover:bg-gray-200 font-sans" style={{}}>
                    Start for free
                </button>
<button bis_size='{"x":768,"y":3499,"w":173,"h":53,"abs_x":768,"abs_y":3541}' className="px-10 py-4 bg-transparent border font-mono text-sm rounded-full transition-all border-white/20 text-white hover:bg-white/5 font-sans" style={{}}>
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":3681,"w":1528,"h":408,"abs_x":0,"abs_y":3723}' className="bg-[#010103] border-white/5 border-t pt-20 pb-10" style={{}}>
<div bis_size='{"x":124,"y":3762,"w":1280,"h":287,"abs_x":124,"abs_y":3804}' className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div bis_size='{"x":148,"y":3762,"w":1232,"h":160,"abs_x":148,"abs_y":3804}' className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div bis_size='{"x":148,"y":3762,"w":468,"h":160,"abs_x":148,"abs_y":3804}' className="col-span-2 lg:col-span-2 pr-10">
<div bis_size='{"x":148,"y":3762,"w":428,"h":24,"abs_x":148,"abs_y":3804}' className="flex items-center gap-2 mb-6">
<div bis_size='{"x":148,"y":3762,"w":24,"h":24,"abs_x":148,"abs_y":3804}' className="w-6 h-6 rounded flex items-center justify-center bg-indigo-600" style={{}}>
<div bis_size='{"x":155,"y":3769,"w":10,"h":10,"abs_x":155,"abs_y":3811}' className="w-2.5 h-2.5 rounded-full bg-white"></div>
</div>
<span bis_size='{"x":180,"y":3774,"w":0,"h":0,"abs_x":180,"abs_y":3816}' className="text-2xl font-normal text-white font-instrument-serif" style={{}}></span>
</div>
<p bis_size='{"x":148,"y":3810,"w":320,"h":39,"abs_x":148,"abs_y":3852}' className="font-mono text-xs leading-relaxed max-w-xs text-gray-600 font-sans" style={{}}>
                        The definitive infrastructure layer for the decentralized web. Built for clarity, speed, and scale.
                    </p>
</div>
<div bis_size='{"x":656,"y":3762,"w":214,"h":160,"abs_x":656,"abs_y":3804}'>
<h4 bis_size='{"x":656,"y":3762,"w":214,"h":24,"abs_x":656,"abs_y":3804}' className="font-serif mb-6 text-white font-sans" style={{}}>Product</h4>
<ul bis_size='{"x":656,"y":3810,"w":214,"h":112,"abs_x":656,"abs_y":3852}' className="space-y-4 font-mono text-xs text-gray-500" style={{}}>
<li bis_size='{"x":656,"y":3810,"w":214,"h":16,"abs_x":656,"abs_y":3852}'><a bis_size='{"x":656,"y":3810,"w":49,"h":15,"abs_x":656,"abs_y":3852}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Core API</a></li>
<li bis_size='{"x":656,"y":3842,"w":214,"h":16,"abs_x":656,"abs_y":3884}'><a bis_size='{"x":656,"y":3842,"w":36,"h":15,"abs_x":656,"abs_y":3884}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Nodes</a></li>
<li bis_size='{"x":656,"y":3874,"w":214,"h":16,"abs_x":656,"abs_y":3916}'><a bis_size='{"x":656,"y":3874,"w":77,"h":15,"abs_x":656,"abs_y":3916}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Data Indexing</a></li>
<li bis_size='{"x":656,"y":3906,"w":214,"h":16,"abs_x":656,"abs_y":3948}'><a bis_size='{"x":656,"y":3906,"w":39,"h":15,"abs_x":656,"abs_y":3948}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Pricing</a></li>
</ul>
</div>
<div bis_size='{"x":911,"y":3762,"w":214,"h":160,"abs_x":911,"abs_y":3804}' className="">
<h4 bis_size='{"x":911,"y":3762,"w":214,"h":24,"abs_x":911,"abs_y":3804}' className="font-serif mb-6 text-white font-sans" style={{}}>Resources</h4>
<ul bis_size='{"x":911,"y":3810,"w":214,"h":112,"abs_x":911,"abs_y":3852}' className="space-y-4 font-mono text-xs text-gray-500" style={{}}>
<li bis_size='{"x":911,"y":3810,"w":214,"h":16,"abs_x":911,"abs_y":3852}'><a bis_size='{"x":911,"y":3810,"w":86,"h":15,"abs_x":911,"abs_y":3852}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Documentation</a></li>
<li bis_size='{"x":911,"y":3842,"w":214,"h":16,"abs_x":911,"abs_y":3884}'><a bis_size='{"x":911,"y":3842,"w":80,"h":15,"abs_x":911,"abs_y":3884}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>API Reference</a></li>
<li bis_size='{"x":911,"y":3874,"w":214,"h":16,"abs_x":911,"abs_y":3916}'><a bis_size='{"x":911,"y":3874,"w":64,"h":15,"abs_x":911,"abs_y":3916}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Community</a></li>
<li bis_size='{"x":911,"y":3906,"w":214,"h":16,"abs_x":911,"abs_y":3948}'><a bis_size='{"x":911,"y":3906,"w":35,"h":15,"abs_x":911,"abs_y":3948}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Status</a></li>
</ul>
</div>
<div bis_size='{"x":1165,"y":3762,"w":214,"h":160,"abs_x":1165,"abs_y":3804}'>
<h4 bis_size='{"x":1165,"y":3762,"w":214,"h":24,"abs_x":1165,"abs_y":3804}' className="font-serif mb-6 text-white font-sans" style={{}}>Company</h4>
<ul bis_size='{"x":1165,"y":3810,"w":214,"h":112,"abs_x":1165,"abs_y":3852}' className="space-y-4 font-mono text-xs text-gray-500" style={{}}>
<li bis_size='{"x":1165,"y":3810,"w":214,"h":16,"abs_x":1165,"abs_y":3852}'><a bis_size='{"x":1165,"y":3810,"w":33,"h":15,"abs_x":1165,"abs_y":3852}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>About</a></li>
<li bis_size='{"x":1165,"y":3842,"w":214,"h":16,"abs_x":1165,"abs_y":3884}'><a bis_size='{"x":1165,"y":3842,"w":25,"h":15,"abs_x":1165,"abs_y":3884}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Blog</a></li>
<li bis_size='{"x":1165,"y":3874,"w":214,"h":16,"abs_x":1165,"abs_y":3916}'><a bis_size='{"x":1165,"y":3874,"w":44,"h":15,"abs_x":1165,"abs_y":3916}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Careers</a></li>
<li bis_size='{"x":1165,"y":3906,"w":214,"h":16,"abs_x":1165,"abs_y":3948}'><a bis_size='{"x":1165,"y":3906,"w":30,"h":15,"abs_x":1165,"abs_y":3948}' className="transition-colors hover:text-indigo-400 font-sans" href="#" style={{}}>Legal</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":148,"y":4002,"w":1232,"h":47,"abs_x":148,"abs_y":4044}' className="flex flex-col md:flex-row justify-between items-center pt-8 border-t font-mono text-[10px] uppercase tracking-widest border-white/5 text-gray-600" style={{}}>
<p bis_size='{"x":148,"y":4034,"w":244,"h":15,"abs_x":148,"abs_y":4076}' className="font-sans" style={{}}>© 2025 ZynQ Inc. All rights reserved.</p>
<div bis_size='{"x":1185,"y":4034,"w":194,"h":15,"abs_x":1185,"abs_y":4076}' className="flex gap-6 mt-4 md:mt-0">
<a bis_size='{"x":1185,"y":4034,"w":49,"h":15,"abs_x":1185,"abs_y":4076}' className="transition-colors hover:text-gray-400 font-sans" href="#" style={{}}>Privacy</a>
<a bis_size='{"x":1258,"y":4034,"w":39,"h":15,"abs_x":1258,"abs_y":4076}' className="transition-colors hover:text-gray-400 font-sans" href="#" style={{}}>Terms</a>
<a bis_size='{"x":1322,"y":4034,"w":57,"h":15,"abs_x":1322,"abs_y":4076}' className="transition-colors hover:text-gray-400 font-sans" href="#" style={{}}>Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
