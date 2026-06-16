import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



    precision highp float;

uniform vec2 iResolution;
uniform float iTime;

vec3 hash( vec3 p ) {
  p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
            dot(p,vec3(269.5,183.3,246.1)),
            dot(p,vec3(113.5,271.9,124.6)));
  return -1.0 + 2.0*fract(sin(p)*43758.5453123);
}

float noise( in vec3 p ) {
  vec3 i = floor( p );
  vec3 f = fract( p );
  vec3 u = f*f*(3.0-2.0*f);
  return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ),
                      dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ),
                      dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
            mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ),
                      dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                 mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ),
                      dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}

void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  vec3 stars_direction = normalize(vec3(uv * 2.0 - 1.0, 1.0));
  float stars_threshold = 8.0;
  float stars_exposure = 200.0;
  float stars = pow(clamp(noise(stars_direction * 200.0), 0.0, 1.0), stars_threshold) * stars_exposure;
  stars *= mix(0.4, 1.4, noise(stars_direction * 100.0 + vec3(iTime)));
  gl_FragColor = vec4(vec3(stars),1.0);
}



    const canvas = document.getElementById('shader-canvas');
const gl = canvas.getContext('webgl');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
}
window.addEventListener('resize', resize);
resize();

function compileShader(gl, source, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader));
  }
  return shader;
}

const vertSrc = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragSrc = document.getElementById('fragShader').textContent;

const vertShader = compileShader(gl, vertSrc, gl.VERTEX_SHADER);
const fragShader = compileShader(gl, fragSrc, gl.FRAGMENT_SHADER);

const program = gl.createProgram();
gl.attachShader(program, vertShader);
gl.attachShader(program, fragShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  throw new Error(gl.getProgramInfoLog(program));
}
gl.useProgram(program);

const posLoc = gl.getAttribLocation(program, 'position');
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
  -1, -1, 1, -1, -1, 1,
  -1, 1, 1, -1, 1, 1,
]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

const iResolution = gl.getUniformLocation(program, 'iResolution');
const iTime = gl.getUniformLocation(program, 'iTime');

function render(time) {
  gl.uniform2f(iResolution, canvas.width, canvas.height);
  gl.uniform1f(iTime, time * 0.001);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
  


    (function(){const button = document.querySelector('.liquid-glass-button');if(button){button.addEventListener('click', function(e){const rect = this.getBoundingClientRect();const x = e.clientX - rect.left;const y = e.clientY - rect.top;const ripple = document.createElement('span');ripple.className = 'absolute rounded-full bg-gradient-radial from-white/30 to-transparent pointer-events-none animate-ping';ripple.style.left = x - 25 + 'px';ripple.style.top = y - 25 + 'px';ripple.style.width = '50px';ripple.style.height = '50px';ripple.style.animation = 'ripple 0.6s linear';this.appendChild(ripple);setTimeout(() => ripple.remove(), 600);});}})()
  


    (function(){const button = document.querySelector('.liquid-glass-button');if(button){button.addEventListener('click', function(e){const rect = this.getBoundingClientRect();const x = e.clientX - rect.left;const y = e.clientY - rect.top;const ripple = document.createElement('span');ripple.className = 'absolute rounded-full bg-gradient-radial from-white/30 to-transparent pointer-events-none animate-ping';ripple.style.left = x - 25 + 'px';ripple.style.top = y - 25 + 'px';ripple.style.width = '50px';ripple.style.height = '50px';ripple.style.animation = 'ripple 0.6s linear';this.appendChild(ripple);setTimeout(() => ripple.remove(), 600);});}})()
  


    (function() {
      const container = document.getElementById('card-orbit-container');
      if (!container) return;
      
      const cards = Array.from(container.querySelectorAll('.orbit-card'));
      const bubble1 = document.querySelector('.bubble-float-1');
      const bubble2 = document.querySelector('.bubble-float-2');
      const totalCards = cards.length;
      
      let animationTime = 0;
      const speed = 0.0008;
      
      function updateOrbit() {
        animationTime += speed;
        
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const centerX = containerWidth / 2;
        const centerY = containerHeight * 0.65;
        
        const radiusX = Math.min(containerWidth * 0.35, 300);
        const radiusY = Math.min(containerHeight * 0.3, 120);
        
        cards.forEach((card, index) => {
          const angleOffset = (index / totalCards) * Math.PI * 2;
          const angle = animationTime + angleOffset;
          
          const x = centerX + Math.cos(angle) * radiusX;
          const y = centerY + Math.sin(angle) * radiusY;
          
          const depth = Math.sin(angle);
          const scale = 0.85 + (depth + 1) * 0.15;
          const zIndex = Math.round(50 + depth * 50);
          
          const rotation = Math.cos(angle) * 12;
          
          let opacity, blur;
          if (depth < -0.5) {
            opacity = 0;
            blur = 4;
          } else if (depth < 0) {
            opacity = 0.5 + (depth + 0.5) * 1.0;
            blur = 2 + Math.abs(depth) * 2;
          } else {
            opacity = 0.5 + depth * 0.5;
            blur = 0;
          }
          
          card.style.left = x + 'px';
          card.style.top = y + 'px';
          card.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
          card.style.opacity = opacity;
          card.style.zIndex = zIndex;
          card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
          
          if (index === 0 && bubble1) {
            const bubbleY = Math.sin(animationTime * 2) * 10;
            bubble1.style.transform = `translateY(${bubbleY}px) rotate(-6deg)`;
          }
          
          if (index === 6 && bubble2) {
            const bubbleY = Math.sin((animationTime + 0.5) * 2) * 10;
            bubble2.style.transform = `translateY(${bubbleY}px) rotate(6deg)`;
          }
        });
        
        requestAnimationFrame(updateOrbit);
      }
      
      updateOrbit();
      
      window.addEventListener('resize', () => {});
    })();
  


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-0 brightness-75"><canvas className="absolute inset-0 -z-10" height="1669" id="shader-canvas" width="2720">


</canvas></div>


<header className="z-10 sm:px-6 md:pl-0 md:pt-0 md:pb-0 md:pr-0 w-full max-w-7xl border-0 rounded-none mt-6 mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 relative">
<div className="flex b xl:bg-neutral-950 xl:pt-2 xl:pb-2 [animation:fadeSlideIn_1s_ease-out_0.1s_both] bg-slate-900 h-14 border-[#ffffff]/10 border ring-white/10 ring-1 rounded-lg pt-2 pr-2.5 pb-2 pl-2.5 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[40px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d1adc6d1-e4ea-4a81-81fe-345648b46b63_320w.png)] bg-cover rounded invert" href="/home"></a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition" href="/home" title="Link disabled in preview mode">Home</a>
<a className="hover:text-white transition" href="/events" title="Link disabled in preview mode">Events</a>
<a className="hover:text-white transition" href="/speaker" title="Link disabled in preview mode">Speaker</a>
<a className="hover:text-white transition" href="/tickets" title="Link disabled in preview mode">Tickets</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-3 py-1.5 text-sm rounded-md text-slate-300 hover:text-white transition font-sans" style={{}}>Log in</button>
<button className="liquid-glass-button inline-flex cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 text-sm font-medium text-white/90 bg-gradient-to-r from-white/10 to-white/5 h-10 border-white/15 border rounded-lg pr-6 pl-6 relative shadow-lg backdrop-blur-xl items-center justify-center" style={{boxShadow: '0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)'}}>
<div className="overflow-hidden pointer-events-none rounded-lg absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3"></div>
</div>
<span className="relative z-10 font-sans" style={{}}>Sign Up</span>

<style>
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1
      }
  
      100% {
        transform: scale(2);
        opacity: 0
      }
    }
  </style>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>

<section className="z-10 border-gradient before:rounded-lg sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.2s_both] w-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a63f6a06-f3d9-41c1-aad2-9662b6dda4cc_1600w.webp)] max-w-7xl bg-cover border-0 rounded-lg mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{height: '600px'}}>


<div className="grid grid-cols-1 sm:gap-10 lg:grid-cols-12 lg:gap-x-20 pr-8 pl-8 absolute right-0 bottom-10 left-0 gap-x-20 gap-y-8" style={{}}>

<div className="lg:col-span-7">
<h1 className="leading-none tracking-tight text-white select-none">
</h1><h2 className="text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.9] [animation:fadeSlideIn_1s_ease-out_0.3s_both] font-semibold tracking-tight">Let's spark <span className="opacity-70">together.</span></h2>
</div>

<div className="lg:col-span-5 flex flex-col h-full space-y-4 justify-end">
<p className="sm:text-base [animation:fadeSlideIn_1s_ease-out_0.4s_both] text-sm font-light text-neutral-300">Let's spark a global movement where innovation meets collaboration, and bold ideas shape a better tomorrow.</p>
<div className="inline-block [animation:fadeSlideIn_1s_ease-out_0.5s_both]">
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

    @keyframes animate1 {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @keyframes animate2 {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(100%);
      }
    }

    @keyframes animate3 {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes animate4 {
      0% {
        transform: translateY(100%);
      }

      100% {
        transform: translateY(-100%);
      }
    }
  </style>
<button className="liquid-glass-button inline-flex cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 text-sm font-medium text-white/90 bg-gradient-to-r from-white/10 to-white/5 h-10 border-white/15 border rounded-lg pr-6 pl-6 relative shadow-lg backdrop-blur-xl items-center justify-center" style={{boxShadow: '0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)'}}>
<div className="overflow-hidden pointer-events-none rounded-lg absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3"></div>
</div>
<span className="z-10 relative">Join the Spark Movement</span>

<style className="">
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1
      }
  
      100% {
        transform: scale(2);
        opacity: 0
      }
    }
  </style>
</button>
</div>
</div>
</div>
</section>

<section className="z-10 border-gradient before:rounded-lg sm:p-8 sm:bg-neutral-950 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll w-full max-w-7xl border-0 rounded-lg mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur space-y-8">

<div className="flex sm:px-0 pr-1 pl-1 items-center justify-between">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 gap-x-6 gap-y-6 items-center">
<span className="inline-flex items-center gap-2 text-sm">
<span className="[animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll text-4xl font-medium text-white">3 Simple Steps</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/10" role="separator"></span>
<span className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll text-sm text-neutral-300 max-w-md">Start your journey with SPARK and become part of a global community shaping the future together.</span>
</div>

<div className="flex xl:gap-x-8 text-right max-w-md gap-x-3 gap-y-3 items-center">
<a className="group inline-flex items-center gap-2 transition overflow-hidden ring-white/10 ring-1 [animation:fadeSlideIn_1s_ease-out_0.9s_both] animate-on-scroll text-sm font-medium text-white rounded-lg relative" href="#" style="background: linear-gradient(135deg, #374151 0%, #27282B 30%);
           box-shadow: inset 0 0 1.6em -0.6em #4b5563;
           height: 2.8em;
           padding: 0.35em 3.3em 0.35em 1.2em;
           letter-spacing: 0.05em;">
    Join the Conference

    <span className="flex items-center justify-center h-[2.2em] w-[2.2em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] active:scale-95 bg-white rounded-md absolute right-[0.3em]" style={{boxShadow: '0.1em 0.1em 0.6em 0.2em #4b5563'}}>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-[0.1em] w-[24px] h-[24px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(75, 85, 99)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
<div className="h-px bg-white/10 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 z-10 sm:mt-8 mt-8 relative gap-x-8 gap-y-8 items-stretch">

<div className="lg:col-span-4 hover-lift group overflow-hidden transition hover:bg-white/10 min-h-[300px] flex [animation:fadeSlideIn_1s_ease-out_0.10s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative backdrop-blur-xl items-end">
<img alt="Choose your pass" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68b625be-c49f-477b-83a0-96522157239d_800w.webp"/>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center sm:text-sm sm:text-neutral-50 sm:bg-neutral-900 text-xs font-light text-neutral-800 tracking-tight bg-white border-neutral-700 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4">STEP 1</span>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Choose your pass</h3>
<p className="text-sm text-slate-300/90">Pick General, Creator, or Team passes. Student &amp; virtual options available.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 hover-lift group overflow-hidden transition hover:bg-white/10 min-h-[300px] flex [animation:fadeSlideIn_1s_ease-out_0.11s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative backdrop-blur-xl items-end">
<img alt="Plan your agenda" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/356bdc4c-e6ed-48b7-9f77-49eecc083899_800w.jpg"/>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center sm:text-sm sm:text-neutral-50 sm:bg-neutral-900 text-xs font-light text-neutral-800 tracking-tight bg-white border-neutral-700 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4">STEP 2</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Plan your agenda</h3>
<p className="text-sm text-slate-300/90">Star sessions, book 1:1s, and get calendar reminders.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 hover-lift group overflow-hidden transition hover:bg-white/10 min-h-[300px] flex [animation:fadeSlideIn_1s_ease-out_0.12s_both] animate-on-scroll bg-white/5 border-white/10 border rounded-2xl relative backdrop-blur-xl items-end">
<img alt="Attend &amp; connect" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b153fc0e-6382-4a25-8ef6-375b322122a9_800w.jpg"/>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center sm:text-sm sm:text-neutral-50 sm:bg-neutral-900 text-xs font-light text-neutral-800 tracking-tight bg-white border-neutral-700 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4">STEP 3</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Attend &amp; connect</h3>
<p className="text-sm text-slate-300/90">Join onsite or live stream. Meet partners, chat, and access replays.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 border-gradient before:rounded-lg sm:p-8 sm:bg-neutral-950 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl border-0 rounded-lg mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur space-y-8">

<div className="flex sm:px-0 pr-1 pl-1 items-center justify-between">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 gap-x-6 gap-y-6 items-center">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Why Join Spark?</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-white/10" role="separator"></span>
<span className="text-sm text-neutral-300 max-w-md">Join 5,000+ innovators, entrepreneurs, and thought leaders shaping tomorrow's world.</span>
</div>

<div className="flex xl:gap-x-8 text-right max-w-md gap-x-3 gap-y-3 items-center">
<a className="group inline-flex items-center gap-2 transition overflow-hidden text-sm font-medium text-white ring-white/10 ring-1 rounded-lg relative" href="#" style="background: linear-gradient(135deg, #374151 0%, #27282B 30%);
           box-shadow: inset 0 0 1.6em -0.6em #4b5563;
           height: 2.8em;
           padding: 0.35em 3.3em 0.35em 1.2em;
           letter-spacing: 0.05em;">
    Join the Conference

    <span className="flex items-center justify-center h-[2.2em] w-[2.2em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] active:scale-95 bg-white rounded-md absolute right-[0.3em]" style={{boxShadow: '0.1em 0.1em 0.6em 0.2em #4b5563'}}>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-[0.1em] w-[24px] h-[24px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(75, 85, 99)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
<div className="h-px bg-white/10 mt-4"></div>
<div className="columns-1 sm:columns-2 lg:columns-3 lg:mt-0 mt-0 space-y-5 gap-x-5 gap-y-5">

<div className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-xl min-h-[280px] flex items-end relative">
<img alt="Exclusive speaker access" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1cfbb8c1-ce75-47ab-94af-c1089aec4d64_800w.webp"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center bg-emerald-400/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 py-1">
<span className="text-xs font-medium text-emerald-300">Premium Access</span>
</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Meet Industry Pioneers</h3>
<p className="text-sm text-slate-300/90">Get direct access to CEOs, founders, and innovators from Google, Tesla,
        OpenAI, and more.</p>
</div>
</div>
</div>
</div>

<div className="group break-inside-avoid overflow-hidden hover:bg-white/10 transition flex h--[100px] bg-white/5 h-[320px] max-h-none border-white/10 border rounded-2xl mb-5 relative backdrop-blur-xl items-end">
<img alt="Networking opportunities" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a772c813-66f7-4035-8324-8895267e7aab_800w.jpg"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full px-3 py-1">
<span className="text-xs font-medium text-cyan-300">Network</span>
</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Connect with Game-Changers</h3>
<p className="text-sm text-slate-300/90">Build meaningful relationships with 5,000+ innovators, investors, and
            industry leaders.</p>
</div>
</div>
</div>
</div>

<div className="group break-inside-avoid overflow-hidden hover:bg-white/10 transition flex bg-white/5 h-[320px] border-white/10 border rounded-2xl mb-5 relative backdrop-blur-xl items-end">
<img alt="Learning sessions" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0c770fd-fcfe-44d2-a09b-8050690eaf82_800w.jpg"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center bg-purple-400/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-3 py-1">
<span className="text-xs font-medium text-purple-300">Learn</span>
</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Master Future Technologies</h3>
<p className="text-sm text-slate-300/90">Deep-dive into AI, Web3, sustainability, and breakthrough innovations
            shaping 2025.</p>
</div>
</div>
</div>
</div>

<div className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-xl min-h-[280px] flex items-end relative">
<img alt="Career opportunities" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33b39afd-9e06-4eaf-81f9-30863e6a4159_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center bg-orange-400/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-3 py-1">
<span className="text-xs font-medium text-orange-300">Opportunity</span>
</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Unlock New Opportunities</h3>
<p className="text-sm text-slate-300/90">92% of attendees report career advancement within 6 months. Access
            exclusive job boards and partnerships.</p>
</div>
</div>
</div>
</div>

<div className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-xl min-h-[280px] flex items-end relative">
<img alt="Innovation showcase" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d95e69f-fe67-4ab5-a2d9-d78a63648c54_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center bg-pink-400/20 backdrop-blur-sm border border-pink-400/30 rounded-full px-3 py-1">
<span className="text-xs font-medium text-pink-300">Innovation</span>
</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">See Tomorrow, Today</h3>
<p className="text-sm text-slate-300/90">Get exclusive previews of breakthrough technologies and startups before
            they go mainstream.</p>
</div>
</div>
</div>
</div>

<div className="group break-inside-avoid overflow-hidden hover:bg-white/10 transition flex bg-white/5 h-[320px] border-white/10 border rounded-2xl mb-5 relative backdrop-blur-xl items-end">
<img alt="Global community" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f0b7dda2-0868-4e2a-bf8e-8479062248d3_800w.webp"/>
<div className="bg-gradient-to-t from-black/50 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative w-full bg-slate-50/5 border-white/10 rounded-t-xl border-t pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center bg-green-400/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1">
<span className="text-xs font-medium text-green-300">Impact</span>
</span>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-100 tracking-tight mb-1">Shape the Future</h3>
<p className="text-sm text-slate-300/90">Join a global community committed to solving humanity's biggest
            challenges through innovation.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="z-10 border-gradient before:rounded-lg sm:p-8 sm:bg-neutral-950 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl border-0 rounded-lg mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur space-y-8">


<div className="flex sm:px-0 pr-1 pl-1 items-center justify-between">

<div className="flex gap-6 sm:px-0 pr-1 pl-1 gap-x-6 gap-y-6 items-center">
<span className="inline-flex items-center gap-2 text-sm">
<span className="text-4xl font-medium text-white">Speakers &amp; Partners</span>
</span>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/10 h-10" role="separator"></span>
<span className="text-sm text-neutral-300 max-w-md">Meet world-class founders, researchers, and creators—backed by partners shaping tomorrow's world.</span>
</div>

<div className="flex xl:gap-x-8 text-right max-w-md gap-x-3 gap-y-3 items-center">
<a className="group inline-flex items-center gap-2 transition overflow-hidden text-sm font-medium text-white ring-white/10 ring-1 rounded-lg relative" href="#" style="background: linear-gradient(135deg, #374151 0%, #27282B 30%);
           box-shadow: inset 0 0 1.6em -0.6em #4b5563;
           height: 2.8em;
           padding: 0.35em 3.3em 0.35em 1.2em;
           letter-spacing: 0.05em;">
    Join the Conference

    <span className="flex items-center justify-center h-[2.2em] w-[2.2em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] active:scale-95 bg-white rounded-md absolute right-[0.3em]" style={{boxShadow: '0.1em 0.1em 0.6em 0.2em #4b5563'}}>
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-[0.1em] w-[24px] h-[24px]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(75, 85, 99)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</div>
<div className="h-px bg-white/10 mt-4"></div>
<section className="z-10 relative">
<div className="xl:pt-0 xl:pb-0 max-w-7xl mr-auto ml-auto pt-0 pr-6 pb-0 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-center">

<div className="w-full h-full space-y-10">
<h2 className="sm:text-6xl text-5xl font-light text-white tracking-tighter mb-4">Voices Shaping What's Next</h2>
<p className="sm:text-base sm:text-neutral-400 text-sm font-light text-neutral-600 tracking-tight max-w-[52ch] mt-2" style={{}}>Hear from AI pioneers, climate leaders, product builders, and
            creative
            directors.
            Deep dives, live demos, and actionable playbooks you can take back to your team.</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="inline-flex xl:bg-neutral-900 bg-neutral-900/60 border border-neutral-700 rounded-md px-4 py-2 items-center justify-center" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '12px 12px'}}>
<span className="text-sm font-medium text-neutral-300 tracking-tight">Keynotes &amp; Fireside Chats</span>
</div>

<div className="inline-flex xl:bg-neutral-900 bg-neutral-900/60 border border-neutral-700 rounded-md px-4 py-2 items-center justify-center" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '12px 12px'}}>
<span className="text-sm font-medium text-neutral-300 tracking-tight">Founders &amp; Operators</span>
</div>

<div className="inline-flex xl:bg-neutral-900 bg-neutral-900/60 border border-neutral-700 rounded-md px-4 py-2 items-center justify-center" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '12px 12px'}}>
<span className="text-sm font-medium text-neutral-300 tracking-tight">Hands-on Workshops</span>
</div>

<div className="inline-flex xl:bg-neutral-900 bg-neutral-900/60 border border-neutral-700 rounded-md px-4 py-2 items-center justify-center" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '12px 12px'}}>
<span className="text-sm font-medium text-neutral-300 tracking-tight">Researchers &amp; Creators</span>
</div>
</div>
<div className="overflow-visible xl:pl-0 xl:pr-0 xl:pt-0 xl:pb-0 max-h-fit border-0 rounded-none pt-4 pr-4 pb-8 pl-4 relative">
<img alt="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a63f6a06-f3d9-41c1-aad2-9662b6dda4cc_1600w.webp"/>

</div>
</div>

<div className="w-full h-full space-y-8">
<div className="xl:pt-18 max-w-full mr-auto ml-auto pt-18 pr-6 pb-24 pl-6">

<div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 max-w-full gap-x-8 gap-y-8">

<div className="md:col-span-3 col-span-1 w-full space-y-12">

<div className="max-w-6xl mr-auto ml-auto relative">

<div className="flex min-h-[300px] sm:px-6 sm:mt-0 sm:mb-32 mt-0 mb-32 pr-4 pl-4 relative gap-x-0 gap-y-0 items-end justify-center" id="card-orbit-container">

<div className="orbit-card group absolute w-[140px] sm:w-[180px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 transition-all duration-100 hover:-translate-y-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]" data-orbit-index="0" style={{left: '438.6px', top: '195.072px', transform: 'translate(-50%, -50%) rotate(12deg) scale(1.00012)', opacity: '0.5004', zIndex: '50', filter: 'none'}}>
<img alt="Minimal bag on moss" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5a8f3649-9a97-4446-955e-d3ced353790f_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[150px] sm:w-[190px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="1" style={{left: '370.489px', top: '265.41px', transform: 'translate(-50%, -50%) rotate(7.47437deg) scale(1.11735)', opacity: '0.891165', zIndex: '89', filter: 'none'}}>
<img alt="Sports car at sunset" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/55c99f39-16f4-473b-a2b0-a0a75e0485b5_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[160px] sm:w-[200px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] hover:z-10 transition-all duration-100 hover:scale-105 hover:-translate-y-[6px]" data-orbit-index="2" style={{left: '217.672px', top: '282.727px', transform: 'translate(-50%, -50%) rotate(-2.67961deg) scale(1.14621)', opacity: '0.987375', zIndex: '99', filter: 'none'}}>
<img alt="Citrus still life with dropper bottle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9c20c8-e367-4ade-a102-dda55d03765d_800w.jpg"/>
<div className="transition-all duration-100 absolute top-0 right-0 bottom-0 left-0" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.55)'}}>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(600px circle at 50% 30%, rgba(139 transparent 40%)'}}></div>
</div>

<div className="orbit-card group absolute w-[150px] sm:w-[190px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="3" style={{left: '95.2224px', top: '233.985px', transform: 'translate(-50%, -50%) rotate(-10.8158deg) scale(1.06497)', opacity: '0.716581', zIndex: '72', filter: 'none'}}>
<img alt="Reflective sphere render on field" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ac4a631c-975f-4482-9cef-2a1f99a48178_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[150px] sm:w-[190px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_22px_55px_rgba(0,0,0,0.55)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="4" style={{left: '95.3478px', top: '155.886px', transform: 'translate(-50%, -50%) rotate(-10.8075deg) scale(0.934809)', opacity: '0.565396', zIndex: '28', filter: 'blur(2.86921px)'}}>
<img alt="Portrait fashion outdoors" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7a2dc7c2-23b6-422f-a823-9f6546bcaa1e_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.55)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[160px] sm:w-[200px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_26px_70px_rgba(0,0,0,0.6)] hover:z-10 transition-all duration-100 hover:scale-105 hover:-translate-y-[6px]" data-orbit-index="5" style={{left: '217.954px', top: '107.24px', transform: 'translate(-50%, -50%) rotate(-2.66089deg) scale(0.853734)', opacity: '0', zIndex: '1', filter: 'blur(4px)'}}>
<img alt="Perfume bottles product shot" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_800w.jpg"/>
<div className="rounded-3xl absolute top-0 right-0 bottom-0 left-0" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.55)'}}></div>
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
</div>
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(600px circle at 60% 30%, rgba(139,92,246,0.12), transparent 40%)'}}>
</div>
</div>

<div className="orbit-card group absolute w-[145px] sm:w-[185px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_18px_45px_rgba(0,0,0,0.5)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="6" style={{left: '370.715px', top: '124.68px', transform: 'translate(-50%, -50%) rotate(7.48938deg) scale(0.8828)', opacity: '0', zIndex: '11', filter: 'blur(4px)'}}>
<img alt="Modern workspace setup" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
</div>
</div>


</div>
</div>
<style>
    @keyframes floatBubble1 {

      0%,
      100% {
        transform: translateY(0px) rotate(-6deg);
      }

      50% {
        transform: translateY(-10px) rotate(-6deg);
      }
    }

    @keyframes floatBubble2 {

      0%,
      100% {
        transform: translateY(0px) rotate(6deg);
      }

      50% {
        transform: translateY(-10px) rotate(6deg);
      }
    }
  </style>

</div>

</div>
</div>
</div>
</section>
</section>



<div className="xl:mb-12 text-white mb-12">
<style className="">
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
  </style>
<footer className="z-10 border-gradient before:rounded-lg sm:p-8 sm:bg-neutral-950 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll w-full max-w-7xl border-0 rounded-lg mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur space-y-8">
<div className="sm:px-6 lg:pb-0 lg:pl-8 lg:pr-8 lg:pt-12 max-w-7xl mx-auto pt-12 pr-8 pb-0 pl-8">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[40px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d1adc6d1-e4ea-4a81-81fe-345648b46b63_320w.png)] bg-cover rounded invert" href="#" style={{}}></a>
<p className="mt-3 text-sm text-neutral-300 max-w-md font-light" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>
            Join 5,000+ innovators, entrepreneurs, and thought leaders shaping tomorrow's world through collaboration
            and breakthrough innovation.
          </p>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-3" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Conference</h4>
<ul className="space-y-2 text-sm text-neutral-400 font-light">
<li>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Schedule</a>
</li>
<li>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Speakers</a>
</li>
<li>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Pricing</a>
</li>
<li>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Virtual Pass</a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-3" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Connect</h4>
<ul className="space-y-2 text-sm text-neutral-400 font-light">
<li className="">
<a className="hover:text-emerald-300 transition-colors duration-200" href="mailto:hello@sparkconf.tech" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>hello@sparkconf.tech</a>
</li>
<li className="flex items-center gap-3">
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Twitter</a>
<span className="text-neutral-700" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>•</span>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>LinkedIn</a>
</li>
<li>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Discord Community</a>
</li>
</ul>
</div>
</div>
<div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-light" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>
          © SPARK Conference 2025. All rights reserved.
        </p>
<div className="flex items-center gap-4 text-xs text-neutral-500 font-light">
<a className="hover:text-neutral-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Privacy Policy</a>
<a className="hover:text-neutral-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>Terms of Use</a>
<a className="inline-flex items-center gap-1 hover:text-emerald-300 transition-colors duration-200" href="#" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'}}>
            Back to top
            <svg className="w-3.5 h-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
