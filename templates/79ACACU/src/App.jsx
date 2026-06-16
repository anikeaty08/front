import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      lucide.createIcons();


    attribute vec2 a_position;
    varying vec2 vUv;
    void main() {
      vUv = 0.5 * (a_position + 1.0);
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  


    precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_scroll_progress;
    vec2 rotate(vec2 uv, float th) { return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv; }
    float neuro_shape(vec2 uv, float t, float p) {
      vec2 sine_acc = vec2(0.);
      vec2 res = vec2(0.);
      float scale = 8.;
      for (int j = 0; j < 15; j++) {
        uv = rotate(uv, 1.);
        sine_acc = rotate(sine_acc, 1.);
        vec2 layer = uv * scale + float(j) + sine_acc - t;
        sine_acc += sin(layer) + 2.4 * p;
        res += (.5 + .5 * cos(layer)) / scale;
        scale *= (1.2);
      }
      return res.x + res.y;
    }
    void main() {
      vec2 uv = .5 * vUv;
      uv.x *= u_ratio;
      vec2 pointer = vUv - u_pointer_position;
      pointer.x *= u_ratio;
      float p = clamp(length(pointer), 0., 1.);
      p = .5 * pow(1. - p, 2.);
      float t = .001 * u_time;
      vec3 color = vec3(0.);
      float noise = neuro_shape(uv, t, p);
      noise = 1.2 * pow(noise, 3.);
      noise += pow(noise, 10.);
      noise = max(.0, noise - .5);
      noise *= (1. - length(vUv - .5));
      color = vec3(0.10, 0.16, 0.27) * noise;
      gl_FragColor = vec4(color, noise);
    }
  


    // Dynamic animated background
    const canvasEl = document.getElementById("neuro-bg");
    let dpr = Math.min(window.devicePixelRatio, 2);
    function getGL() {
      const vs = document.getElementById("vertShader").textContent;
      const fs = document.getElementById("fragShader").textContent;
      const g = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");
      if (!g) return null;
      function sh(t, s) { const c = g.createShader(t); g.shaderSource(c, s); g.compileShader(c); return c; }
      const v = sh(g.VERTEX_SHADER, vs), f = sh(g.FRAGMENT_SHADER, fs);
      const p = g.createProgram(); g.attachShader(p, v); g.attachShader(p, f); g.linkProgram(p); g.useProgram(p);
      const uniforms = new Proxy({}, { get: (_, k) => g.getUniformLocation(p, k) });
      const buffer = g.createBuffer();
      g.bindBuffer(g.ARRAY_BUFFER, buffer);
      g.bufferData(g.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), g.STATIC_DRAW);
      const pos = g.getAttribLocation(p, "a_position");
      g.enableVertexAttribArray(pos);
      g.vertexAttribPointer(pos, 2, g.FLOAT, false, 0, 0);
      return { gl: g, uniforms };
    }
    let glObj = null;
    function resize() {
      dpr = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * dpr;
      canvasEl.height = window.innerHeight * dpr;
      canvasEl.style.width = "100vw";
      canvasEl.style.height = "100vh";
      if (glObj) {
        glObj.gl.viewport(0, 0, canvasEl.width, canvasEl.height);
        glObj.gl.uniform1f(glObj.uniforms.u_ratio, canvasEl.width / canvasEl.height);
      }
    }
    const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
    function render(t) {
      pointer.x += (pointer.tX - pointer.x) * 0.2;
      pointer.y += (pointer.tY - pointer.y) * 0.2;
      if (glObj) {
        glObj.gl.uniform1f(glObj.uniforms.u_time, t);
        glObj.gl.uniform2f(glObj.uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
        glObj.gl.uniform1f(glObj.uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));
        glObj.gl.drawArrays(glObj.gl.TRIANGLE_STRIP, 0, 4);
      }
      requestAnimationFrame(render);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (e) => { pointer.tX = e.clientX; pointer.tY = e.clientY; });
    function setupGL() {
      glObj = getGL();
      if (glObj) {
        resize();
        requestAnimationFrame(render);
      }
    }
    setupGL();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas aria-hidden="true" id="neuro-bg"></canvas>
<header className="relative z-10 w-full">
<nav className="max-w-7xl sm:px-8 flex h-16 mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-lg md:text-xl flex items-center">
<span className="text-white">masz</span>
<span aria-label="AI" className="animated-gradient-text ml-1 mr-1">AI</span>
<span className="text-white">.com</span>
</span>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:inline-block text-xs font-medium italic text-white/60 text-left" style={{display: 'inline-block', textAlign: 'center', width: '100%'}}>Agentic Solutions for Modern Business</span>
</div>
</nav>
</header>

<section className="relative z-10 w-full md:pt-24 md:pb-20 flex flex-col pt-16 pb-12 items-center">
<div className="max-w-2xl mx-auto text-center space-y-6">
<h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
<span className="">On Demand</span><br/>
<span className="accent-gradient">Intelligence</span><br/>
<span className="">Tailored for Your Business</span>
</h1>
<p className="sm:text-lg max-w-xl text-base font-normal text-white/80 mr-auto ml-auto">Launch an Advanced AI Assistant and end-to-end automations that work 24x7, all crafted around your unique business DNA.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
<a className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-[#00bcd4] to-[#4a148c] hover:brightness-110 transition shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00bcd4]" href="#onboard">
          Try the Demo
        </a>
</div>
</div>
</section>

<section className="relative z-10 max-w-4xl mx-auto px-4 py-10 md:py-16" id="about">
<div className="glass rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-14">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-6">Productivity on Autopilot</h3>
<div className="grid md:grid-cols-3 gap-8 text-sm">
<div className="flex flex-col gap-2 items-start">
<span className="flex items-center gap-2 font-medium text-cyan-400">
<svg className="lucide lucide-headphones w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(34, 211, 238)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2v-3"></path><path d="M3 19a2 2 0 0 0 2 2H5a2 2 0 0 0 2-2v-3"></path></svg>
            Conversation Recaps
          </span>
<span className="text-white/75">Stay in the loop: after every interaction, a concise digest – names, intent, sentiment, and next-step tasks – lands instantly in your inbox or team chat.</span>
</div>
<div className="flex flex-col gap-2 items-start">
<span className="flex items-center gap-2 font-medium text-emerald-400">
<svg className="lucide lucide-database w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 7v6c0 1.657 4.03 3 9 3s9-1.343 93V7"></path>
<path d="M3 13v6c0 1.657 4.03 3 9 3s9-1.343 9-3v-6"></path>
</svg>
            Your Knowledge Vault
          </span>
<span className="text-white/75">Connect FAQs, docs, and past chats; the agent searches, cites, and updates itself, keeping information consistent across every channel.</span>
</div>
<div className="flex flex-col items-start gap-2">
<span className="flex items-center gap-2 font-medium text-indigo-400">
<svg className="lucide lucide-users w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(129, 140, 248)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Native in 30+ Languages
          </span>
<span className="text-white/75">Seamless voice &amp; text capability, capturing nuance across chat, email, and voice channels so every customer feels heard, understood, and fully supported.</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-3xl mx-auto px-4 py-10 md:py-16">
<div className="glass rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-12 text-center">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Let's Discuss Your Needs</h3>
<span className="text-base font-normal text-white/70 block mb-5">Book a free consultation call with our team to discover how maszAI can revolutionize customer service for your business.</span>
<div className="rounded-xl overflow-hidden shadow-lg max-w-md mx-auto border border-white/10 glass-light py-4 px-2">
<div className="text-white/50 text-xs py-8">[Calendar Integration Here – e.g., Calendly]</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-2xl mx-auto px-4 pt-10 pb-20" id="onboard">
<div className="glass rounded-2xl shadow-xl px-6 py-10 md:px-12 md:py-12">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-center">Begin Your AI Assistant Setup</h3>
<span className="text-base font-normal text-white/70 block text-center mb-6">Complete the form below to help us prepare a personalized setup for your AI Assistant.</span>
<form autocomplete="off" className="space-y-8">
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1" htmlFor="name">First Name</label>
<input className="w-full rounded-md glass-light px-3 py-2 text-sm text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#00bcd4] transition" id="name" name="name" placeholder="Name" required=""/>
</div>
<div>
<label className="block text-xs font-medium mb-1" htmlFor="email">Email</label>
<input className="w-full rounded-md glass-light px-3 py-2 text-sm text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#00bcd4] transition" id="email" name="email" placeholder="Email" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1" htmlFor="company">Company</label>
<input className="w-full rounded-md glass-light px-3 py-2 text-sm text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#00bcd4] transition" id="company" name="company" placeholder="Company name"/>
</div>
<div className="">
<label className="block text-xs font-medium mb-1" htmlFor="website">Website</label>
<input className="w-full rounded-md glass-light px-3 py-2 text-sm text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#00bcd4] transition" id="website" name="website" placeholder="https://your-site.com" type="url"/>
</div>
<div>
<label className="block text-xs font-medium mb-1" htmlFor="goals">Primary goals</label>
<textarea className="w-full rounded-md glass-light px-3 py-2 text-sm text-white outline-none border border-white/10 focus:ring-2 focus:ring-[#00bcd4] transition" id="goals" name="goals" placeholder="What are your main goals?" rows="2"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="accent-[#00bcd4] mt-1" id="terms" required="" type="checkbox"/>
<label className="text-xs text-white/70 select-none" htmlFor="terms">I accept the <a className="underline text-[#00bcd4]" href="#">terms &amp; conditions</a></label>
</div>
<button className="w-full py-3 text-base rounded-lg font-semibold bg-gradient-to-r from-[#00bcd4] to-[#4a148c] hover:brightness-110 transition shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00bcd4]" type="submit">
          Submit
        </button>
</form>
</div>
</section>
<footer className="relative z-10 border-t border-white/10 py-8 mt-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4 text-xs text-white/60">
<span>© 2025 maszAI. All rights reserved</span>
<span>
<a className="hover:underline" href="#">Privacy Policy</a> |
        <a className="hover:underline" href="#">Terms of Use</a>
</span>
</div>
</footer>







    </>
  );
}
