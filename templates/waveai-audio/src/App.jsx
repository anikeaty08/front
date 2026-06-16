import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    (function(){
      const c=document.getElementById('gl-aura-emm8vx35y2vz3w6qc'),b=c.closest('button'),gl=c.getContext('webgl2',{antialias:true,alpha:true});
      if(!gl)return;
      const sh=(t,s)=>{const x=gl.createShader(t);gl.shaderSource(x,s);gl.compileShader(x);return x;},prg=gl.createProgram();
      gl.attachShader(prg,sh(gl.VERTEX_SHADER,`#version 300 es\nin vec2 aPos;out vec2 vUv;void main(){vUv=aPos*0.5+0.5;gl_Position=vec4(aPos,0.,1.);}`));
      gl.attachShader(prg,sh(gl.FRAGMENT_SHADER,`#version 300 es\nprecision highp float;in vec2 vUv;out vec4 o;uniform vec2 r;uniform float t;uniform vec2 p;uniform float h;float hsh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);float a=hsh(i),b=hsh(i+vec2(1.,0.)),c=hsh(i+vec2(0.,1.)),d=hsh(i+vec2(1.,1.));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}void main(){vec2 uv=vUv,px=uv-p;px.x*=r.x/r.y;float d=length(px),rip=sin(30.*d-t*5.)*exp(-8.*d)*h,bl=smoothstep(.4,.7,fbm(uv*3.+t*.1));vec2 dist=vec2(fbm(uv*4.+t*.2),fbm(uv*4.-t*.15))*.04+rip*.02;vec3 cA=vec3(1.0, 0.65, 0.2),cB=vec3(0.95, 0.35, 0.0),cC=vec3(0.6, 0.15, 0.0),col=mix(mix(cA,cB,smoothstep(.1,.9,uv.x+dist.x)),cC,smoothstep(.5,1.,uv.y+dist.y))+bl*.15+pow(1.-length(uv-.5)*1.5,3.)*.2;o=vec4(col,.95);}`));
      gl.linkProgram(prg);const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
      const pos=gl.getAttribLocation(prg,"aPos");gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
      const rL=gl.getUniformLocation(prg,"r"),tL=gl.getUniformLocation(prg,"t"),pL=gl.getUniformLocation(prg,"p"),hL=gl.getUniformLocation(prg,"h");
      let pt={x:.5,y:.5},hv=0,hvT=0;
      const res=()=>{c.width=c.clientWidth*devicePixelRatio;c.height=c.clientHeight*devicePixelRatio;gl.viewport(0,0,c.width,c.height);};
      window.addEventListener('resize',res);res();
      b.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();pt.x=(e.clientX-r.left)/r.width;pt.y=1.-(e.clientY-r.top)/r.height;});
      b.addEventListener('pointerenter',()=>hvT=1.);b.addEventListener('pointerleave',()=>hvT=0.);
      const l=t=>{hv+=(hvT-hv)*.1;gl.useProgram(prg);gl.uniform2f(rL,c.width,c.height);gl.uniform1f(tL,t*.001);gl.uniform2f(pL,pt.x,pt.y);gl.uniform1f(hL,hv);gl.drawArrays(gl.TRIANGLES,0,6);requestAnimationFrame(l);};
      requestAnimationFrame(l);
      if(typeof lucide!=='undefined')lucide.createIcons();
    })();
  


      (function() {
        const audio = document.getElementById('audio-player');
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const trackDisplay = document.getElementById('display-track');
        const volumeDial = document.getElementById('main-dial');
        const volumeArc = document.getElementById('volume-arc');
        const volumeText = document.getElementById('volume-text');
        const dialDot = document.getElementById('dial-dot');
        const equalizer = document.getElementById('equalizer').children;
        
        let isPlaying = false;
        let volume = 0.65;
        let trackIndex = 1;

        function updateUI() {
          if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
            trackDisplay.textContent = "SoundHelix Track 0" + trackIndex;
            trackDisplay.classList.add('animate-pulse');
          } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
            trackDisplay.textContent = "Paused";
            trackDisplay.classList.remove('animate-pulse');
          }

          const deg = volume * 260 - 130;
          volumeDial.style.transform = `rotate(${deg}deg)`;
          volumeArc.style.background = `conic-gradient(from 215deg, #fb7185 0%, #fb923c ${volume * 100}%, transparent ${volume * 100}%, transparent 100%)`;
          volumeText.textContent = Math.round(volume * 100) + '%';
          audio.volume = volume;
        }

        playBtn.addEventListener('click', () => {
          if (isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
          isPlaying = !isPlaying;
          updateUI();
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
          trackIndex = trackIndex > 1 ? trackIndex - 1 : 1;
          audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${trackIndex}.mp3`;
          if (isPlaying) audio.play();
          updateUI();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
          trackIndex = trackIndex < 9 ? trackIndex + 1 : 1;
          audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${trackIndex}.mp3`;
          if (isPlaying) audio.play();
          updateUI();
        });

        document.getElementById('dial-wrapper').addEventListener('click', (e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
          if (angle < 0) angle += 360;
          
          if (angle > 180 && angle < 360) {
            volume = Math.min(1, Math.max(0, (angle - 215) / 130));
            updateUI();
          }
        });

        const setupToggle = (id, ledId) => {
          const toggle = document.getElementById(id);
          const led = document.getElementById(ledId);
          let active = id === 'toggle-direct'; 
          
          toggle.addEventListener('click', () => {
            active = !active;
            const knob = toggle.querySelector('.knob');
            if (active) {
              knob.style.left = '21px';
              knob.style.background = 'linear-gradient(145deg, #4a4a52, #2a2a2e)';
              led.style.backgroundColor = id === 'toggle-direct' ? '#fbbf24' : '#fb923c';
              if (ledId !== 'led-direct') led.style.boxShadow = '0 0 15px rgba(251, 146, 60, 0.6), inset 0 0 10px rgba(251, 146, 60, 0.4)';
            } else {
              knob.style.left = '1px';
              knob.style.background = 'linear-gradient(145deg, #3a3a40, #1a1a1d)';
              led.style.backgroundColor = '#3f3f46';
              led.style.boxShadow = 'none';
            }
          });
        };

        setupToggle('toggle-bass', 'led-bass');
        setupToggle('toggle-iso', 'led-iso');
        setupToggle('toggle-direct', 'led-direct');

        setInterval(() => {
          if (isPlaying) {
            Array.from(equalizer).forEach(bar => {
              const h = 4 + Math.random() * 16;
              bar.style.height = `${h}px`;
            });
          } else {
            Array.from(equalizer).forEach(bar => {
              bar.style.height = '4px';
            });
          }
        }, 150);

        updateUI();
      })();
    


        (function initParticles() {
            const canvas = document.getElementById('particles-canvas-hero');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];

            function resize() {
                const parent = canvas.parentElement;
                width = parent.clientWidth;
                height = parent.clientHeight;

                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = width + 'px';
                canvas.style.height = height + 'px';

                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }

            class Particle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.size = Math.random() * 1.5 + 0.5;
                    this.vx = (Math.random() - 0.5) * 0.15;
                    this.vy = (Math.random() - 0.5) * 0.15;
                    this.alpha = Math.random() * 0.4 + 0.1;
                    this.hue = Math.random() > 0.5 ? 28 : 38; 
                }
                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    if (this.x < 0) this.x = width;
                    if (this.x > width) this.x = 0;
                    if (this.y < 0) this.y = height;
                    if (this.y > height) this.y = 0;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.alpha})`;
                    ctx.fill();
                }
            }

            function createParticles() {
                particles = [];
                const particleCount = Math.floor((width * height) / 12000);
                for (let i = 0; i < particleCount; i++) particles.push(new Particle());
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => { p.update(); p.draw(); });
                requestAnimationFrame(animate);
            }

            window.addEventListener('resize', () => {
                resize();
                createParticles();
            });

            resize();
            createParticles();
            animate();
        })();
      


    (function(){
      const c=document.getElementById('gl-aura-emm9g7pk56abubhoj');
      if(!c) return;
      const b=c.closest('button'),gl=c.getContext('webgl2',{antialias:true,alpha:true});
      if(!gl)return;
      const sh=(t,s)=>{const x=gl.createShader(t);gl.shaderSource(x,s);gl.compileShader(x);return x;},prg=gl.createProgram();
      gl.attachShader(prg,sh(gl.VERTEX_SHADER,`#version 300 es\nin vec2 aPos;out vec2 vUv;void main(){vUv=aPos*0.5+0.5;gl_Position=vec4(aPos,0.,1.);}`));
      gl.attachShader(prg,sh(gl.FRAGMENT_SHADER,`#version 300 es\nprecision highp float;in vec2 vUv;out vec4 o;uniform vec2 r;uniform float t;uniform vec2 p;uniform float h;float hsh(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);float a=hsh(i),b=hsh(i+vec2(1.,0.)),c=hsh(i+vec2(0.,1.)),d=hsh(i+vec2(1.,1.));vec2 u=f*f*(3.-2.*f);return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}void main(){vec2 uv=vUv,px=uv-p;px.x*=r.x/r.y;float d=length(px),rip=sin(30.*d-t*5.)*exp(-8.*d)*h,bl=smoothstep(.4,.7,fbm(uv*3.+t*.1));vec2 dist=vec2(fbm(uv*4.+t*.2),fbm(uv*4.-t*.15))*.04+rip*.02;vec3 cA=vec3(1.0, 0.65, 0.2),cB=vec3(0.95, 0.35, 0.0),cC=vec3(0.6, 0.15, 0.0),col=mix(mix(cA,cB,smoothstep(.1,.9,uv.x+dist.x)),cC,smoothstep(.5,1.,uv.y+dist.y))+bl*.15+pow(1.-length(uv-.5)*1.5,3.)*.2;o=vec4(col,.95);}`));
      gl.linkProgram(prg);const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
      const pos=gl.getAttribLocation(prg,"aPos");gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
      const rL=gl.getUniformLocation(prg,"r"),tL=gl.getUniformLocation(prg,"t"),pL=gl.getUniformLocation(prg,"p"),hL=gl.getUniformLocation(prg,"h");
      let pt={x:.5,y:.5},hv=0,hvT=0;
      const res=()=>{c.width=c.clientWidth*devicePixelRatio;c.height=c.clientHeight*devicePixelRatio;gl.viewport(0,0,c.width,c.height);};
      window.addEventListener('resize',res);res();
      b.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();pt.x=(e.clientX-r.left)/r.width;pt.y=1.-(e.clientY-r.top)/r.height;});
      b.addEventListener('pointerenter',()=>hvT=1.);b.addEventListener('pointerleave',()=>hvT=0.);
      const l=t=>{hv+=(hvT-hv)*.1;gl.useProgram(prg);gl.uniform2f(rL,c.width,c.height);gl.uniform1f(tL,t*.001);gl.uniform2f(pL,pt.x,pt.y);gl.uniform1f(hL,hv);gl.drawArrays(gl.TRIANGLES,0,6);requestAnimationFrame(l);};
      requestAnimationFrame(l);
    })();
  


        document.addEventListener("DOMContentLoaded", () => {
            lucide.createIcons();
        });
        // Fallback execution incase script runs after DOM load in the parser
        lucide.createIcons();
    


    // Re-initialize icons for the footer if they don't appear
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            const ctx = document.getElementById('performanceChart').getContext('2d');
            const orangeGradient = ctx.createLinearGradient(0, 0, 0, 300);
            orangeGradient.addColorStop(0, 'rgba(249, 115, 22, 0.2)');
            orangeGradient.addColorStop(1, 'rgba(249, 115, 22, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [
                        {
                            label: 'Wave V2',
                            data: [65, 78, 85, 92, 98, 96, 99],
                            borderColor: '#f97316',
                            borderWidth: 2,
                            backgroundColor: orangeGradient,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            pointBackgroundColor: '#f97316'
                        },
                        {
                            label: 'Legacy',
                            data: [40, 45, 42, 48, 50, 47, 52],
                            borderColor: '#3f3f46',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            fill: false,
                            tension: 0.4,
                            pointRadius: 0
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            display: false,
                            grid: { display: false }
                        },
                        x: {
                            grid: {
                                display: true,
                                color: 'rgba(255, 255, 255, 0.03)'
                            },
                            ticks: {
                                color: '#52525b',
                                font: { size: 10, family: 'Inter' }
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    }
                }
            });
        });
    


      // Joystick state
      const joyState = { 1: {x:0,y:0}, 2: {x:0,y:0}, 3: {x:0,y:0}, 4: {x:0,y:0}, 5: {x:0,y:0} };

      // Fader drag
      let activeDrag = null, activeElement = null, startY = 0, startVal = 0;
      document.querySelectorAll('.fader-cap').forEach(fader => {
          fader.addEventListener('mousedown', e => {
              activeDrag = 'fader'; activeElement = fader;
              startY = e.clientY; startVal = parseFloat(window.getComputedStyle(fader).bottom);
              fader.style.transition = 'none'; e.preventDefault();
          });
      });
      window.addEventListener('mousemove', e => {
          if (activeDrag === 'fader') {
              const track = activeElement.parentElement;
              const maxTravel = track.getBoundingClientRect().height - activeElement.offsetHeight;
              let newBottom = Math.max(0, Math.min(maxTravel, startVal + (startY - e.clientY)));
              activeElement.style.bottom = newBottom + 'px';
              document.getElementById('data-readout').innerText = 'CH > ' + Math.round((newBottom/maxTravel)*100) + '%';
          }
      });
      window.addEventListener('mouseup', () => {
          if (activeDrag === 'fader') activeElement.style.transition = 'bottom 0.2s ease-out';
          activeDrag = null; activeElement = null;
      });

      // Joystick drag
      document.querySelectorAll('.joystick').forEach(stick => {
          stick.style.transform = 'translate(0px, 0px)';
          stick.addEventListener('mousedown', e => {
              e.preventDefault();
              const id = stick.dataset.id, socket = stick.parentElement;
              const rect = socket.getBoundingClientRect();
              const cx = rect.left + rect.width/2, cy = rect.top + rect.height/2;
              const maxDist = (rect.width/2) - (stick.offsetWidth/2.5);
              stick.style.transition = 'none';
              function onMove(me) {
                  let dx = me.clientX - cx, dy = me.clientY - cy;
                  const dist = Math.sqrt(dx*dx+dy*dy);
                  if (dist > maxDist) { const a = Math.atan2(dy,dx); dx = Math.cos(a)*maxDist; dy = Math.sin(a)*maxDist; }
                  stick.style.transform = `translate(${dx}px, ${dy}px)`;
                  joyState[id] = { x: dx/maxDist, y: dy/maxDist };
              }
              function onUp() {
                  document.removeEventListener('mousemove', onMove);
                  document.removeEventListener('mouseup', onUp);
                  stick.style.transition = 'transform 0.4s cubic-bezier(0.175,0.885,0.32,1.275)';
                  stick.style.transform = 'translate(0px, 0px)';
                  joyState[id] = {x:0,y:0};
              }
              document.addEventListener('mousemove', onMove);
              document.addEventListener('mouseup', onUp);
          });
      });

      // Toggle buttons
      document.querySelectorAll('.toggle-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              const isActive = btn.classList.toggle('active');
              const led = btn.querySelector('div');
              if (isActive && !led) {
                  const d = document.createElement('div');
                  d.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full';
                  d.style.cssText = 'background:#4af626;box-shadow:0 0 6px #4af626;';
                  btn.appendChild(d);
              } else if (!isActive && led) { led.remove(); }
          });
      });

      // Three.js waveform
      function initThree() {
          const container = document.getElementById('canvas-container');
          if (!container) return;
          const w = container.clientWidth, h = container.clientHeight;
          if (w < 1 || h < 1) return;
          const scene = new THREE.Scene(); scene.fog = new THREE.FogExp2(0x000000, 0.1);
          const camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 1000);
          camera.position.set(0,1,6); camera.lookAt(0,0,0);
          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setSize(w, h); container.appendChild(renderer.domElement);
          const lines = [], lineCount = 8, segments = 100;
          for (let l=0; l<lineCount; l++) {
              const geo = new THREE.BufferGeometry();
              const pos = new Float32Array(segments*3);
              geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
              const isAccent = l%3===0;
              const mat = new THREE.LineBasicMaterial({ color: isAccent?0xff4800:0x3b5bdb, transparent:true, opacity: isAccent?0.9:0.4 });
              const line = new THREE.Line(geo, mat); scene.add(line); lines.push(line);
          }
          let time = 0;
          function animate() {
              requestAnimationFrame(animate);
              time += 0.02 + Math.abs(joyState[4].x)*0.1;
              const pan=joyState[1].x, tilt=joyState[2].y, dim=joyState[3].y;
              lines.forEach((line, li) => {
                  const p = line.geometry.attributes.position.array, off = li*0.2;
                  for (let i=0; i<segments; i++) {
                      const x = (i/(segments-1))*8-4;
                      let y = Math.sin(x*1.5+time+off)*0.5 + Math.sin(x*4+time*2)*0.1;
                      y *= (1+dim);
                      const z = Math.sin(x+time)*pan*2;
                      p[i*3]=x; p[i*3+1]=y+(li*0.1)-(lineCount*0.05)+tilt; p[i*3+2]=z+Math.cos(x)*0.5;
                  }
                  line.geometry.attributes.position.needsUpdate = true;
              });
              renderer.render(scene, camera);
          }
          animate();
      }
      setTimeout(initThree, 200);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>
</div>

<nav className="fixed z-50 border-white/5 border-b top-0 right-0 left-0" style={{backdropFilter: 'blur(20px)', background: 'rgba(0, 0, 0, 0.7)'}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-8 gap-x-8 gap-y-8 items-center">
<div className="flex gap-2 text-xl font-semibold text-white tracking-tighter gap-x-2 gap-y-2 items-center">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-900" style={{boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 2px inset, rgba(0, 0, 0, 0.5) 0px 2px 4px'}}>
<div className="w-2 h-2 rounded-full bg-amber-500" style={{boxShadow: 'rgba(245, 158, 11, 0.8) 0px 0px 8px'}}></div>
</div>
    WAVE.AI
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
              Services
            </a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
              Models
            </a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
              Creators
            </a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
              Pricing
            </a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">
            Sign in
          </a>
<a className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">
            Start free
          </a>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-16 relative items-center justify-center">

<div className="pointer-events-none absolute inset-0 z-0 bg-[#121320] bg-[radial-gradient(40rem_40rem_at_30%_50%,rgba(249,115,22,0.08),transparent_100%),radial-gradient(50rem_50rem_at_70%_40%,rgba(245,158,11,0.06),transparent_100%)]"></div>

<div className="pointer-events-none absolute top-[52%] left-0 w-full h-[1px] bg-white/[0.04] -translate-y-1/2 z-0"></div>
<div className="pointer-events-none absolute top-0 left-[58%] w-[1px] h-full bg-white/[0.04] -translate-x-1/2 z-0 hidden lg:block"></div>
<div className="pointer-events-none absolute top-0 left-[68%] w-[1px] h-full bg-white/[0.02] -translate-x-1/2 z-0 hidden lg:block"></div>
<canvas className="pointer-events-none absolute inset-0 z-0 opacity-50" height="2348" id="particles-canvas-hero" style={{width: '1568px', height: '1174px'}} width="3136"></canvas>

<div className="z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<main className="flex-none flex flex-col lg:flex-row lg:gap-24 z-10 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative items-center">

<div className="lg:w-1/2 flex flex-col w-full items-start justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-8" style={{boxShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 1px inset'}}>
<iconify-icon className="text-amber-500 text-sm" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-zinc-400 uppercase">Generative Audio Engine v2.4</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
                Generative Audio for <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-500">Infinite Soundscapes.</span>
</h1>
<p className="leading-relaxed md:text-xl text-lg font-light text-zinc-400 max-w-lg mt-6">
                Generate, sequence, and fine-tune every parameter with precision-driven AI models. Master your sonic environment through a tactile, zero-latency interface designed for audio professionals.
            </p>
<div className="flex flex-col sm:flex-row gap-4 sm:w-auto w-full mt-10 gap-x-4 gap-y-4 items-center">
<button className="group sm:w-auto overflow-hidden transition-all duration-700 ease-out hover:scale-[1.02] border-none flex cursor-pointer z-10 w-full h-[64px] rounded-full pt-0 pr-0 pb-0 pl-0 relative gap-x-3 gap-y-x-3 items-center justify-center" style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.35) 0px 15px 30px)', background: 'rgb(255, 251, 245)'}}>

<div className="overflow-hidden bg-white/5 border-white/40 border rounded-full absolute top-[4px] right-[4px] bottom-[4px] left-[4px] shadow-[inset_0_2px_12px_rgba(255,255,255,0.7)] backdrop-blur-xl">
<canvas className="w-full h-full block" height="108" id="gl-aura-emm8vx35y2vz3w6qc" width="420"></canvas>
</div><div className="-bottom-10 -translate-x-1/2 blur-[60px] group-hover:opacity-100 transition-opacity z-10 bg-orange-500/30 opacity-60 w-[140%] h-32 rounded-full absolute left-1/2 gap-x-3 gap-y-x-3">
</div>

<div className="absolute inset-[4px] rounded-full overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 opacity-70"></div>
<div className="absolute inset-0 rounded-full border border-white/90 shadow-[inset_0_6px_12px_rgba(255,255,255,0.4),inset_0_-6px_12px_rgba(0,0,0,0.15)]"></div>
</div>

<div className="z-10 flex text-white pr-10 pl-10 relative drop-shadow-md gap-x-3 gap-y-x-3 items-center">
<svg className="group-hover:text-white group-hover:scale-110 transition-all duration-500 text-2xl text-white/80" data-icon-set="solar" data-solar="infinity-linear" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 8a5 5 0 1 0-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 1 1-3 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<span className="text-base font-medium tracking-tight">Launch Studio</span>
</div>

</button><button className="sm:w-auto flex gap-3 group overflow-hidden transition-all active:scale-[0.98] border-none text-sm font-medium text-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 relative gap-x-3 gap-y-3 items-center justify-center" style={{background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(40px)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}}>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute inset-0 rounded-full pointer-events-none" style={{padding: '1.5px', background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.2) 100%)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>

<div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500" style={{background: 'radial-gradient(circle at center, rgba(59, 91, 219, 0.2) 0%, transparent 70%)'}}></div>

<div className="pointer-events-none rounded-full absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>

<i className="w-3.5 h-3.5 fill-current ml-0.5" data-lucide="play"></i>
<span className="group-hover:text-white z-10 text-white/90 tracking-tight relative">Listen to Samples</span>

<div className="-inset-2 group-hover:opacity-100 transition-opacity duration-1000 bg-indigo-500/5 opacity-0 rounded-full absolute blur-xl"></div>
</button>
</div>
</div>

<div className="lg:w-1/2 flex lg:justify-end w-full perspective-1000 justify-center text-zinc-400 font-sans">

<div className="sm:p-8 w-full max-w-md border-[#2a2a2d] border rounded-[2.5rem] pt-6 pr-6 pb-6 pl-6 relative" style={{background: 'linear-gradient(145deg, #222226, #121215)', boxShadow: '20px 25px 50px rgba(0, 0, 0, 0.9), -2px -2px 10px rgba(255, 255, 255, 0.03), inset 1px 1px 2px rgba(255, 255, 255, 0.1), inset -1px -1px 4px rgba(0, 0, 0, 0.8)'}}>

<div className="pointer-events-none absolute inset-0 rounded-[inherit] z-50" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)'}}></div>

<div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-[#151515] flex items-center justify-center z-10" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="w-full h-[1px] bg-black/60 rotate-45"></div>
</div>
<div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#151515] flex items-center justify-center z-10" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="w-full h-[1px] bg-black/60 -rotate-45"></div>
</div>
<div className="absolute bottom-5 left-5 w-2 h-2 rounded-full bg-[#151515] flex items-center justify-center z-10" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="w-full h-[1px] bg-black/60 -rotate-12"></div>
</div>
<div className="absolute bottom-5 right-5 w-2 h-2 rounded-full bg-[#151515] flex items-center justify-center z-10" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="w-full h-[1px] bg-black/60 rotate-12"></div>
</div>

<div className="flex justify-between items-center mb-8 px-2 relative z-10">
<div className="flex flex-col text-[#050505]" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.08)'}}>
<span className="uppercase text-xs font-normal tracking-widest">WAVE.AI</span>
<span className="text-xl font-normal tracking-tighter uppercase leading-none mt-1">
          AX-7000
        </span>
</div>

<div className="w-12 h-4 rounded-full bg-[#0a0a0c] overflow-hidden relative" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="opacity-70 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#111 1.5px, transparent 1.5px)', backgroundSize: '4px 4px'}}></div>
</div>
</div>

<div className="overflow-hidden flex flex-col w-full h-24 rounded-2xl mb-10 pt-4 pr-4 pb-4 pl-4 relative justify-center z-10" style={{background: '#050505', boxShadow: 'inset 0px 10px 20px rgba(0, 0, 0, 1), inset 0px -2px 5px rgba(255, 255, 255, 0.05)', borderTop: '2px solid #000', borderBottom: '1px solid #333'}}>

<div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-12 pointer-events-none rounded-full blur-xl"></div>
<div className="flex flex-col items-center justify-center z-10">
<div className="text-[10px] font-medium tracking-[0.2em] uppercase text-rose-500/80 mb-2 truncate max-w-full" id="display-track">Paused</div>
<div className="flex opacity-80 h-6 gap-x-1 items-end" id="equalizer">
<div className="w-1 bg-rose-500 h-2 rounded-t-sm" style={{boxShadow: '0 0 8px rgba(251, 113, 133, 0.4)'}}></div>
<div className="w-1 bg-rose-400 h-4 rounded-t-sm" style={{boxShadow: '0 0 8px rgba(251, 113, 133, 0.4)'}}></div>
<div className="w-1 bg-orange-400 h-3 rounded-t-sm" style={{boxShadow: '0 0 8px rgba(251, 146, 60, 0.4)'}}></div>
<div className="w-1 bg-orange-500 h-5 rounded-t-sm" style={{boxShadow: '0 0 8px rgba(251, 146, 60, 0.4)'}}></div>
<div className="w-1 bg-rose-400 h-2 rounded-t-sm" style={{boxShadow: '0 0 8px rgba(251, 113, 133, 0.4)'}}></div>
<div className="w-1 bg-orange-400 h-4 rounded-t-sm" style={{boxShadow: '0 0 8px rgba(251, 146, 60, 0.4)'}}></div>
</div>
</div>
</div>

<div className="flex w-64 h-64 mr-auto mb-10 ml-auto relative items-center justify-center cursor-pointer group z-10" id="dial-wrapper">

<div className="absolute inset-0 rounded-full bg-[#111113] border border-[#222]" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}></div>

<div className="absolute inset-[10px] rounded-full overflow-hidden">
<div className="w-full h-full rounded-full transition-all duration-300" id="volume-arc" style={{background: 'conic-gradient(from 215deg, #fb7185 0%, #fb923c 65%, transparent 65%, transparent 100%)', filter: 'blur(2px)'}}></div>
</div>

<div className="absolute inset-[16px] rounded-full bg-[#121215]" style={{boxShadow: 'rgba(0, 0, 0, 0.8) 2px 2px 8px, rgba(255, 255, 255, 0.05) 1px 1px 2px inset'}}></div>

<div className="relative w-44 h-44 rounded-full flex items-center justify-center z-10 transition-transform duration-300 active:scale-[0.98]" id="main-dial" style={{background: 'conic-gradient(from 180deg at 50% 50%, #2a2a2e 0%, #44444a 15%, #2a2a2e 30%, #151518 50%, #2a2a2e 70%, #44444a 85%, #2a2a2e 100%)', boxShadow: '10px 15px 30px rgba(0, 0, 0, 0.8), -2px -2px 6px rgba(255, 255, 255, 0.06), inset 2px 2px 3px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.6)'}}>
<div className="absolute inset-2 rounded-full border border-black/40" style={{boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.1)'}}></div>
<div className="border-black/30 border rounded-full absolute top-4 right-4 bottom-4 left-4"></div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rose-400 transition-all duration-300" id="dial-dot" style={{boxShadow: '0 0 15px rgba(251, 113, 133, 0.6), inset 0 0 10px rgba(251, 113, 133, 0.4)', transformOrigin: 'center 88px'}}></div>
</div>

<div className="flex flex-col bg-gradient-to-br from-[#1a1a1d] to-[#111113] w-20 h-20 border-[#2a2a2d] border rounded-full absolute items-center justify-center z-20 pointer-events-none" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<svg className="lucide lucide-volume-2 text-zinc-500 mb-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
<span className="text-[10px] font-medium tracking-tighter uppercase text-[#050505]" id="volume-text" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.08)'}}>65%</span>
</div>
</div>

<div className="flex items-center justify-center gap-6 mb-10 relative z-10">
<button className="w-14 h-14 rounded-full flex items-center justify-center text-zinc-500 transition-all duration-150 border border-[#2a2a2d] active:scale-95" id="prev-btn" style={{background: 'linear-gradient(145deg, #2a2a2e, #1a1a1d)', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.7), -1px -1px 4px rgba(255, 255, 255, 0.05), inset 1px 1px 1px rgba(255, 255, 255, 0.1)'}}>
<svg className="lucide lucide-skip-back drop-shadow-[0_1px_1px_rgba(0,0,0,1)]" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" x2="5" y1="19" y2="5"></line></svg>
</button>
<button className="w-20 h-20 rounded-full flex items-center justify-center text-zinc-400 transition-all duration-150 border border-[#333] active:scale-95 group" id="play-btn" style={{background: 'linear-gradient(145deg, #2a2a2e, #1a1a1d)', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.7), -1px -1px 4px rgba(255, 255, 255, 0.05), inset 1px 1px 1px rgba(255, 255, 255, 0.1)'}}>
<div className="" id="play-icon">
<svg className="lucide lucide-play w-[32px] h-[32px] ml-1 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]" fill="currentColor" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(161, 161, 170)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<div className="hidden" id="pause-icon">
<svg className="lucide lucide-pause drop-shadow-[0_2px_2px_rgba(0,0,0,1)]" fill="currentColor" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(161, 161, 170)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="16" width="4" x="6" y="4"></rect><rect height="16" width="4" x="14" y="4"></rect></svg>
</div>
</button>
<button className="w-14 h-14 rounded-full flex items-center justify-center text-zinc-500 transition-all duration-150 border border-[#2a2a2d] active:scale-95" id="next-btn" style={{background: 'linear-gradient(145deg, #2a2a2e, #1a1a1d)', boxShadow: '5px 5px 12px rgba(0, 0, 0, 0.7), -1px -1px 4px rgba(255, 255, 255, 0.05), inset 1px 1px 1px rgba(255, 255, 255, 0.1)'}}>
<svg className="lucide lucide-skip-forward drop-shadow-[0_1px_1px_rgba(0,0,0,1)]" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" x2="19" y1="5" y2="19"></line></svg>
</button>
</div>

<div className="flex justify-between items-center px-4 pt-4 border-t border-[#2a2a2d] relative z-10" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)'}}>
<div className="flex flex-col items-center gap-3">
<span className="text-[10px] tracking-widest uppercase font-normal text-[#050505]" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.08)'}}>Bass Boost</span>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 transition-colors duration-300" id="led-bass"></div>
<div className="relative w-10 h-5 rounded-full bg-[#0a0a0c] border border-black/50 cursor-pointer" id="toggle-bass" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="knob absolute top-[1px] left-[1px] w-[16px] h-[16px] rounded-full border border-[#333] transition-all duration-200" style={{background: 'linear-gradient(145deg, #3a3a40, #1a1a1d)'}}></div>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<span className="text-[10px] tracking-widest uppercase font-normal text-[#050505]" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.08)'}}>Isolation</span>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 transition-colors duration-300" id="led-iso"></div>
<div className="relative w-10 h-5 rounded-full bg-[#0a0a0c] border border-black/50 cursor-pointer" id="toggle-iso" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="knob absolute top-[1px] left-[1px] w-[16px] h-[16px] rounded-full border border-[#333] transition-all duration-200" style={{background: 'linear-gradient(145deg, #3a3a40, #1a1a1d)'}}></div>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<span className="text-[10px] tracking-widest uppercase font-normal text-[#050505]" style={{textShadow: '0px 1px 1px rgba(255, 255, 255, 0.08)'}}>Direct</span>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-amber-400" id="led-direct" style={{boxShadow: '0 0 15px rgba(251, 146, 60, 0.6), inset 0 0 10px rgba(251, 146, 60, 0.4)'}}></div>
<div className="relative w-10 h-5 rounded-full bg-[#0a0a0c] border border-black/50 cursor-pointer" id="toggle-direct" style={{boxShadow: 'inset 4px 4px 10px rgba(0, 0, 0, 0.9), inset -1px -1px 3px rgba(255, 255, 255, 0.04)'}}>
<div className="knob absolute top-[1px] left-[21px] w-[16px] h-[16px] rounded-full border border-[#444] transition-all duration-200" style={{background: 'linear-gradient(145deg, #4a4a52, #2a2a2e)', boxShadow: '2px 2px 5px rgba(0,0,0,0.6)'}}></div>
</div>
</div>
</div>
</div>
<audio id="audio-player" loop="" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>

</div>
</div>
</main>
</div>

<div className="relative z-10 mt-8 pb-12">
<p className="text-xs text-zinc-600 text-center mb-4 uppercase tracking-widest">
          Trusted by teams at
        </p>
<div className="flex items-center justify-center gap-8 sm:gap-12 opacity-30">
<span className="text-sm font-semibold tracking-tighter text-zinc-400">
            SoundForge
          </span>
<span className="text-sm font-semibold tracking-tighter text-zinc-400">
            MixLab
          </span>
<span className="text-sm font-semibold tracking-tighter text-zinc-400">
            VocalAI
          </span>
<span className="text-sm font-semibold tracking-tighter text-zinc-400 hidden sm:block">
            BeatWorks
          </span>
<span className="text-sm font-semibold tracking-tighter text-zinc-400 hidden sm:block">
            StemCloud
          </span>
</div>
</div>

</section><section className="overflow-hidden border-white/5 border-t pt-32 pb-40 relative">

<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none z-0"></div>
<div className="z-10 flex flex-col text-center w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">


<h2 className="md:text-6xl lg:text-7xl text-5xl font-semibold text-white tracking-tight mb-6">WAVE.AI</h2>

<p className="text-lg md:text-xl text-zinc-300 mb-10 font-normal max-w-2xl">
            Instant pro vocal chains. Limitless potential.
        </p>

<div className="flex items-center gap-4 mb-24">
<button className="group sm:w-auto overflow-hidden transition-all duration-700 ease-out hover:scale-[1.02] border-none flex cursor-pointer z-10 w-full sm:min-w-[200px] h-[64px] rounded-full pt-0 pr-0 pb-0 pl-0 relative gap-3 items-center justify-center" style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.35) 0px 15px 30px)', background: 'rgb(255, 251, 245)'}}>

<div className="overflow-hidden bg-white/5 border-white/40 border rounded-full absolute top-[4px] right-[4px] bottom-[4px] left-[4px] shadow-[inset_0_2px_12px_rgba(255,255,255,0.7)] backdrop-blur-xl">
<canvas className="w-full h-full block" height="108" id="gl-aura-emm9g7pk56abubhoj" width="380"></canvas>
</div>

<div className="-bottom-10 -translate-x-1/2 blur-[60px] group-hover:opacity-100 transition-opacity bg-orange-500/30 opacity-60 w-[140%] h-32 z-10 rounded-full absolute left-1/2"></div>

<div className="absolute inset-[4px] rounded-full overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 opacity-70"></div>
<div className="absolute inset-0 rounded-full border border-white/90 shadow-[inset_0_6px_12px_rgba(255,255,255,0.4),inset_0_-6px_12px_rgba(0,0,0,0.15)]"></div>
</div>

<div className="z-10 flex text-white px-10 relative drop-shadow-md gap-3 items-center justify-center">
<svg className="group-hover:text-white group-hover:scale-110 transition-all duration-500 text-2xl text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
<span className="text-base font-medium tracking-tight">Learn More</span>
</div>

</button>
<button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Buy
            </button>
</div>

<div className="overflow-x-auto hide-scrollbar w-full pb-12">
<div className="min-w-[1000px] flex flex-col overflow-hidden text-left bg-[#121214] w-full max-w-5xl border-[#080809] border rounded-2xl mr-auto ml-auto relative shadow-[0_80px_160px_-40px_rgba(0,0,0,1),0_40px_80px_-40px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.08),inset_0_-2px_10px_rgba(0,0,0,0.5)] gap-x-10 gap-y-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22nf%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23nf)%22 opacity=%220.04%22/%3E%3C/svg%3E\')'}}>

<div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none z-0"></div>

<div className="absolute left-4 top-4 bottom-4 w-1.5 rounded-full bg-black/40 shadow-[inset_1px_0_1px_rgba(255,255,255,0.02)]"></div>
<div className="absolute right-4 top-4 bottom-4 w-1.5 rounded-full bg-black/40 shadow-[inset_1px_0_1px_rgba(255,255,255,0.02)]"></div>

<div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_rgba(0,0,0,0.8)] border border-black/50 flex items-center justify-center"><div className="w-2 h-[1px] bg-black/40 rotate-45"></div></div>
<div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_rgba(0,0,0,0.8)] border border-black/50 flex items-center justify-center"><div className="w-2 h-[1px] bg-black/40 -rotate-12"></div></div>
<div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_rgba(0,0,0,0.8)] border border-black/50 flex items-center justify-center"><div className="w-2 h-[1px] bg-black/40 rotate-90"></div></div>
<div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_rgba(0,0,0,0.8)] border border-black/50 flex items-center justify-center"><div className="w-2 h-[1px] bg-black/40 rotate-[130deg]"></div></div>

<div className="flex items-center justify-between px-10 py-6 relative z-10">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981] border border-emerald-400/50"></div>
<span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] font-semibold" style={{textShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px'}}>System Status: Nominal</span>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-zinc-400 font-mono text-[11px] uppercase tracking-widest font-semibold" style={{textShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px'}}>Obsidian Pro-8</span>
<span className="text-zinc-600 font-mono text-[8px] uppercase tracking-[0.4em] -mt-1">Neural Audio Processor</span>
</div>
</div>
</div>

<div className="flex flex-1 gap-10 z-10 pt-10 pr-10 pb-10 pl-10 relative gap-x-10 gap-y-10">

<div className="w-1/4 flex flex-col gap-8">

<div className="h-32 bg-[#080809] border border-black rounded-lg shadow-[inset_0_4px_10px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)] p-4 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<span className="text-zinc-600 font-mono text-[8px] uppercase tracking-widest">Input Gain (dB)</span>
<div className="flex gap-1 h-12 items-end">
<div className="flex-1 bg-zinc-800 rounded-sm h-[30%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[45%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[60%]"></div>
<div className="flex-1 bg-emerald-500 shadow-[0_0_8px_#10b981] rounded-sm h-[75%]"></div>
<div className="flex-1 bg-emerald-500 shadow-[0_0_8px_#10b981] rounded-sm h-[85%]"></div>
<div className="flex-1 bg-amber-500 shadow-[0_0_8px_#f59e0b] rounded-sm h-[92%]"></div>
<div className="flex-1 bg-rose-500 shadow-[0_0_8px_#ef4444] rounded-sm h-[100%]"></div>
</div>
<div className="flex justify-between text-zinc-700 font-mono text-[8px]">
<span className="">-48</span><span className="">-24</span><span>-12</span><span>-6</span><span className="text-rose-900 font-bold">0</span>
</div>
</div>

<div className="flex justify-around items-center pt-4">
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-14 bg-[#0a0a0b] border border-black rounded-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] p-1.5">
<button className="active:scale-95 transition-transform bg-gradient-to-b from-[#444] to-[#222] w-full h-1/2 border-white/10 rounded-t-sm border-t shadow-[0_2px_4px_rgba(0,0,0,0.5)]"></button>
</div>
<span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest font-semibold">Bypass</span>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-10 h-14 bg-[#0a0a0b] border border-black rounded-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] p-1.5 flex flex-col justify-end">
<button className="w-full h-1/2 bg-gradient-to-b from-[#222] to-[#444] rounded-b-sm shadow-[0_-2px_4px_rgba(0,0,0,0.5)] border-b border-white/5 active:scale-95 transition-transform"></button>
</div>
<span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest font-semibold">Sync</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col relative items-center justify-center">

<div className="mb-8 text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] font-semibold" style={{textShadow: 'rgba(255, 255, 255, 0.05) 0px 1px 0px'}}>Master Core Synthesis</div>
<div className="bg-gradient-to-b from-[#222] to-[#050505] w-72 h-72 rounded-full pt-2 pr-2 pb-2 pl-2 relative shadow-[0_40px_80px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.1)]">

<div className="rounded-full absolute top-0 right-0 bottom-0 left-0" style={{background: 'conic-gradient(from 220deg, rgb(249, 115, 22) 0%, rgb(249, 115, 22) 240deg, transparent 0deg)', filter: 'drop-shadow(rgba(249, 115, 22, 0.4) 0px 0px 10px)'}}></div>

<div className="absolute inset-6 rounded-full bg-black shadow-[inset_0_10px_20px_rgba(0,0,0,1)]"></div>

<div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#0a0a0b] via-[#1c1c1f] to-[#2a2a2d] shadow-[0_15px_30px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.1)] border border-black group cursor-pointer active:scale-95 transition-transform">

<div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, transparent 30%, black 100%), repeating-conic-gradient(from 0deg, #444 0deg 10deg, #222 10deg 20deg)'}}></div>

<div className="absolute inset-4 rounded-full bg-gradient-to-b from-[#333] to-[#0a0a0b] shadow-[0_4px_10px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="text-white font-mono text-4xl font-light tracking-tighter" style={{textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>84</div>
</div>

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316,0_0_20px_#f97316] border border-orange-300/50"></div>
</div>
</div>
<div className="mt-8 flex gap-12">
<div className="flex flex-col items-center">
<span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest font-semibold shadow-[0_0_8px_rgba(249,115,22,0.2)]">Active</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1 shadow-[0_0_6px_#f97316]"></div>
</div>
<div className="flex flex-col items-center">
<span className="text-zinc-600 font-mono text-[10px] uppercase tracking-widest font-semibold">Limit</span>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800 mt-1"></div>
</div>
</div>
</div>

<div className="w-1/4 flex flex-col justify-center gap-10">

<div className="flex flex-col gap-3">
<div className="flex justify-between items-center px-1">
<span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold">Saturation</span>
<span className="text-zinc-400 font-mono text-[10px]">62%</span>
</div>
<div className="h-2 bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] border border-white/5 relative p-0.5">
<div className="h-full w-[62%] bg-gradient-to-r from-amber-900 to-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.3)]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[62%] -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-[#eee] to-[#888] border border-black shadow-[0_2px_4px_rgba(0,0,0,0.8)]"></div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex justify-between items-center px-1">
<span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold">Diffusion</span>
<span className="text-zinc-400 font-mono text-[10px]">28%</span>
</div>
<div className="h-2 bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] border border-white/5 relative p-0.5">
<div className="h-full w-[28%] bg-gradient-to-r from-cyan-900 to-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.3)]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[28%] -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-[#eee] to-[#888] border border-black shadow-[0_2px_4px_rgba(0,0,0,0.8)]"></div>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="flex justify-between items-center px-1">
<span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.2em] font-semibold">Harmonics</span>
<span className="text-zinc-400 font-mono text-[10px]">91%</span>
</div>
<div className="h-2 bg-black rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,1)] border border-white/5 relative p-0.5">
<div className="h-full w-[91%] bg-gradient-to-r from-emerald-900 to-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[91%] -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-[#eee] to-[#888] border border-black shadow-[0_2px_4px_rgba(0,0,0,0.8)]"></div>
</div>
</div>
</div>
</div>

<div className="h-16 bg-gradient-to-t from-black to-transparent flex items-center justify-center relative overflow-hidden">
<div className="flex gap-2 opacity-40">
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
<div className="w-1 h-8 bg-zinc-800 rounded-full"></div>
</div>
<div className="absolute bottom-4 right-10 text-zinc-700 font-mono text-[8px] uppercase tracking-[0.5em]">Serial No. OBS-2024-X4</div>
</div>
</div>
</div>
</div>
</section><section className="z-20 overflow-hidden bg-black pt-32 pb-32 relative">

<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 mb-6">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="cpu"></i>
<span className="text-xs font-medium tracking-wide text-zinc-300 uppercase">Core Architecture</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
                Move beyond random generation. <br/><span className="text-zinc-500">Absolute sonic control.</span>
</h2>
<p className="text-lg text-zinc-400 leading-relaxed font-normal max-w-xl">
                Our node-based architecture gives you surgical precision over every generated stem, modulation pathway, and harmonic structure in real-time.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="overflow-hidden border-[4px] flex flex-col group min-h-[340px] bg-[#161618] z-10 border-[#222] rounded-[2.5rem] ring-black ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-[20px_20px_50px_rgba(0,0,0,0.9),-8px_-8px_20px_rgba(255,255,255,0.03)] justify-between" style={{maskImage: 'linear-gradient(40deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(40deg, transparent, black 25%, black 75%, transparent)'}}>
<div className="pointer-events-none opacity-[0.1] mix-blend-overlay absolute inset-0 z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div></div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div></div>
<div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)] relative z-10 border border-white/5">
<i className="w-5 h-5 text-zinc-300 group-hover:text-orange-400 transition-colors" data-lucide="layers"></i>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Multi-Stem Separation</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">
                        Generate fully separated drum, bass, melody, and vocal stems simultaneously. Edit each layer independently without artifacting.
                    </p>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-40">
<span className="text-[9px] font-mono uppercase tracking-[0.2em]">Proc-Module A1</span>
<div className="w-1 h-1 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
</div>
</div>

<div className="overflow-hidden border-[4px] flex flex-col group min-h-[340px] bg-[#161618] z-10 border-[#222] rounded-[2.5rem] ring-black ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-[20px_20px_50px_rgba(0,0,0,0.9),-8px_-8px_20px_rgba(255,255,255,0.03)] justify-between" style={{maskImage: 'linear-gradient(40deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(40deg, transparent, black 25%, black 75%, transparent)'}}>
<div className="pointer-events-none opacity-[0.1] mix-blend-overlay absolute inset-0 z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-90"></div></div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-0"></div></div>
<div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)] relative z-10 border border-white/5">
<i className="w-5 h-5 text-zinc-300 group-hover:text-blue-400 transition-colors" data-lucide="sliders-horizontal"></i>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Timbre Transfer</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">
                        Morph any audio source into entirely new instruments. Apply the acoustic characteristics of a grand piano to a synthesized bassline.
                    </p>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-40">
<span className="text-[9px] font-mono uppercase tracking-[0.2em]">Proc-Module B4</span>
<div className="w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
</div>
</div>

<div className="overflow-hidden border-[4px] flex flex-col group min-h-[340px] bg-[#161618] z-10 border-[#222] rounded-[2.5rem] ring-black ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-[20px_20px_50px_rgba(0,0,0,0.9),-8px_-8px_20px_rgba(255,255,255,0.03)] justify-between" style={{maskImage: 'linear-gradient(40deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(40deg, transparent, black 25%, black 75%, transparent)'}}>
<div className="pointer-events-none opacity-[0.1] mix-blend-overlay absolute inset-0 z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform -rotate-12"></div></div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-12"></div></div>
<div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)] relative z-10 border border-white/5">
<i className="w-5 h-5 text-zinc-300 group-hover:text-emerald-400 transition-colors" data-lucide="zap"></i>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Zero-Latency DSP</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">
                        Our proprietary inference engine runs locally, providing hardware-level responsiveness for live performance and tracking.
                    </p>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-40">
<span className="text-[9px] font-mono uppercase tracking-[0.2em]">Proc-Module C7</span>
<div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]"></div>
</div>
</div>

<div className="md:col-span-3 overflow-hidden border-[4px] flex flex-col lg:flex-row bg-[#161618] z-10 border-[#222] rounded-[3rem] ring-black ring-1 mt-4 relative shadow-[20px_20px_50px_rgba(0,0,0,0.9),-8px_-8px_20px_rgba(255,255,255,0.03)]" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)'}}>
<div className="pointer-events-none opacity-[0.1] mix-blend-overlay absolute inset-0 z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div></div>
<div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div></div>
<div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-12"></div></div>
<div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20"><div className="w-[60%] h-[1px] bg-[#000] transform rotate-90"></div></div>
<div className="lg:w-1/3 flex flex-col z-10 pt-12 pr-12 pb-12 pl-12 relative justify-center">
<div className="w-14 h-14 rounded-full bg-black border border-white/5 flex items-center justify-center mb-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05)]">
<i className="w-5 h-5 text-orange-500" data-lucide="git-merge"></i>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-4 uppercase font-sans">Generative Sequencing</h3>
<p className="text-base text-zinc-500 leading-relaxed font-normal">
                        Program complex rhythmic structures that evolve over time. Our AI understands groove, syncopation, and micro-timing to humanize patterns automatically.
                    </p>
<div className="mt-8 flex items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Active Sync</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-semibold">Midi Out</span>
</div>
</div>
</div>

<div className="lg:w-2/3 lg:p-12 flex z-10 pt-12 pr-12 pb-12 pl-12 relative items-center justify-center">
<div className="overflow-hidden w-full max-w-6xl rounded-2xl relative" id="device-wrapper" style={{background: 'linear-gradient(rgb(46, 46, 48) 0%, rgb(34, 34, 36) 100%)', boxShadow: 'rgba(0, 0, 0, 0.8) 0px 60px 120px -30px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px inset, rgb(0, 0, 0) 0px 0px 0px 1px', padding: '16px'}}>

<div className="pointer-events-none z-0 rounded-2xl absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.03%22/%3E%3C/svg%3E\')'}}></div>

<div className="text-[10px] uppercase font-medium text-white/20 tracking-[0.3em] font-mono z-20 absolute top-1 right-6">
                            OBS-AI // STUDIO V2
                        </div>

<div className="relative z-10 grid gap-6 mb-5" style={{gridTemplateColumns: '300px 1fr 90px', height: '170px'}}>

<div className="relative bg-black rounded-md border border-zinc-700/50 overflow-hidden" style={{boxShadow: 'rgba(255, 255, 255, 0.05) 0px 0px 20px inset'}}>
<div className="absolute inset-0 z-10 pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)'}}></div>
<div className="w-full h-full opacity-80" id="canvas-container">
<canvas className="w-full h-full block" height="170" width="300"></canvas>
<canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas><canvas height="168" style={{display: 'block', width: '298px', height: '168px'}} width="298"></canvas></div>
<div className="absolute inset-0 z-20 pointer-events-none p-3 flex flex-col justify-between font-mono text-[10px] tracking-wider" style={{color: '#ff4800'}}>
<div className="flex justify-between items-center">
<span className="font-medium">MODE: LIVE SET</span>
<span className="text-white/40">BAT 87%</span>
</div>
<div className="flex justify-between items-center">
<span className="font-medium" id="data-readout">READY</span>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="font-medium">REC</span>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-white/[0.03] flex items-center justify-around px-5" style={{background: 'rgba(0,0,0,0.2)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'}}>
<div className="flex flex-col items-center gap-2.5">
<div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #1f1f1f, #2a2a2a)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="joystick w-9 h-9 rounded-full cursor-grab active:cursor-grabbing transition-transform" data-id="1" style={{backgroundColor: 'rgb(59, 91, 219)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(255, 255, 255, 0.3) 0px 1px 2px inset'}}></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-medium">Tempo</span>
</div>
<div className="flex flex-col items-center gap-2.5">
<div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #1f1f1f, #2a2a2a)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="w-9 h-9 rounded-full joystick cursor-grab active:cursor-grabbing transition-transform" data-id="2" style={{backgroundColor: 'rgb(212, 160, 53)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(255, 255, 255, 0.3) 0px 1px 2px inset'}}></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-medium">Tone</span>
</div>
<div className="flex flex-col items-center gap-2.5">
<div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #1f1f1f, #2a2a2a)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="w-9 h-9 rounded-full joystick cursor-grab active:cursor-grabbing transition-transform" data-id="3" style={{backgroundColor: 'rgb(102, 102, 102)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(255, 255, 255, 0.3) 0px 1px 2px inset'}}></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-medium">Depth</span>
</div>
<div className="flex flex-col items-center gap-2.5">
<div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #1f1f1f, #2a2a2a)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="w-9 h-9 rounded-full joystick cursor-grab active:cursor-grabbing transition-transform" data-id="4" style={{backgroundColor: 'rgb(255, 72, 0)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(255, 255, 255, 0.3) 0px 1px 2px inset'}}></div>
</div>
<span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-medium">Drive</span>
</div>
</div>

<div className="flex flex-col items-center justify-center gap-2.5" style={{borderLeft: '1px solid rgba(0,0,0,0.3)', paddingLeft: '14px'}}>
<div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(145deg, #1f1f1f, #2a2a2a)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)'}}>
<div className="w-10 h-10 rounded-full joystick cursor-grab active:cursor-grabbing transition-transform" data-id="5" style={{backgroundColor: 'rgb(224, 224, 226)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 8px, rgba(255, 255, 255, 0.3) 0px 1px 2px inset'}}></div>
</div>
<span className="text-[9px] font-mono text-orange-500 font-semibold uppercase tracking-[0.2em]">
                                    Render
                                </span>
</div>
</div>

<div className="z-10 flex border-y border-black/30 mb-4 pt-3.5 pb-3.5 relative items-center justify-between">
<div className="flex gap-2.5">
<button className="h-8 px-4 rounded-full text-[10px] font-semibold uppercase tracking-widest text-zinc-500 hover:text-white transition-all bg-[#222] border border-[#111] shadow-[rgba(255,255,255,0.05)_0px_1px_0px,rgba(0,0,0,0.3)_0px_2px_4px] active:translate-y-px">
                                    Bank A
                                </button>
<button className="h-8 px-4 rounded-full text-[10px] font-semibold uppercase tracking-widest text-zinc-500 hover:text-white transition-all bg-[#222] border border-[#111] shadow-[rgba(255,255,255,0.05)_0px_1px_0px,rgba(0,0,0,0.3)_0px_2px_4px] active:translate-y-px">
                                    Bank B
                                </button>
<button className="h-8 px-4 rounded-full text-[10px] font-semibold uppercase tracking-widest text-zinc-500 hover:text-white transition-all bg-[#222] border border-[#111] shadow-[rgba(255,255,255,0.05)_0px_1px_0px,rgba(0,0,0,0.3)_0px_2px_4px] active:translate-y-px">
                                    Shift
                                </button>
</div>
<div className="flex gap-2.5">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors bg-[#222] border border-[#111] shadow-[rgba(255,255,255,0.05)_0px_1px_0px,rgba(0,0,0,0.3)_0px_2px_4px] active:scale-95">
<svg aria-hidden="true" className="lucide lucide-pause" data-lucide="pause" fill="currentColor" height="14" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-300 transition-colors bg-[#222] border border-[#111] shadow-[rgba(255,255,255,0.05)_0px_1px_0px,rgba(0,0,0,0.3)_0px_2px_4px] active:scale-95">
<i className="w-3.5 h-3.5 fill-current ml-0.5" data-lucide="play"></i>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center bg-[#333] border border-orange-500/30 text-orange-500 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5),0_0_8px_rgba(255,72,0,0.1)] active:scale-95">
<div className="w-2.5 h-2.5 rounded-full bg-current"></div>
</button>
<button className="h-8 px-4 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-[#222] border border-[#111] text-orange-500 shadow-[0_1px_0_rgba(255,255,255,0.05),0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-px">
                                    Loop
                                </button>
</div>
</div>

<div className="relative z-10 rounded-lg border border-white/[0.02] p-4 bg-black/10" style={{height: '200px'}}>
<div className="grid grid-cols-8 gap-2 h-full">

<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4af626] shadow-[0_0_6px_#4af626]"></div>
</button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '15%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">01</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all"></button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '55%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">02</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all"></button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '25%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">03</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all"></button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '70%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">04</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all"></button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '35%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">05</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4af626] shadow-[0_0_6px_#4af626]"></div>
</button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '65%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">06</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all"></button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '8%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">07</span>
</div>
<div className="flex flex-col items-center gap-3 h-full">
<button className="w-6 h-6 rounded bg-zinc-800 border border-zinc-900 relative shadow-[0_2px_0_#111] active:translate-y-px transition-all"></button>
<div className="w-5 flex-1 rounded-xl relative flex justify-center bg-[#151515] shadow-[inset_0_2px_8px_rgba(0,0,0,0.5)]">
<div className="absolute top-3 bottom-3 w-px bg-white/5"></div>
<div className="fader-cap absolute w-10 rounded-sm cursor-grab active:cursor-grabbing z-10 flex items-center justify-center" style={{height: '44px', bottom: '85%', background: 'linear-gradient(180deg, #333, #222)', border: '1px solid #444', borderBottomColor: '#111', boxShadow: '0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<div className="w-full h-px bg-black shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
</div>
<span className="font-mono text-[9px] text-zinc-600 tracking-tighter">08</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 grid grid-cols-6 gap-1.5 z-10 opacity-30">
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
<div className="w-0.5 h-0.5 rounded-full bg-zinc-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>



</section><section className="relative py-32 overflow-hidden border-t border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-white/5 mb-6">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="activity"></i>
<span className="text-xs font-medium tracking-wide text-zinc-300 uppercase">Benchmark Data</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-6">
                        Inference at the speed <br/><span className="text-zinc-500">of human inspiration.</span>
</h2>
<p className="text-lg text-zinc-400 leading-relaxed font-normal mb-10 max-w-lg">
                        Our custom-trained LLM architecture is optimized for real-time synthesis. While traditional models struggle with 500ms+ latency, we deliver results in under 12ms.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div className="">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">12.4ms</div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Avg. Latency</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">2.4GB</div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">VRAM Footprint</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">96kHz</div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Native Output</div>
</div>
<div className="">
<div className="text-3xl font-semibold tracking-tight text-white mb-1">Zero</div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Buffer Artifacts</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="overflow-hidden border-[4px] flex flex-col min-h-[500px] bg-[#161618] h-full border-[#222] rounded-[3rem] ring-black ring-1 pt-8 pr-8 pb-8 pl-8 relative shadow-[20px_20px_50px_rgba(0,0,0,0.9),-8px_-8px_20px_rgba(255,255,255,0.03)]">

<div className="pointer-events-none opacity-[0.15] mix-blend-overlay absolute inset-0 z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-5 left-5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 left-5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-20">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>

<div className="z-10 flex flex-col h-full relative">
<div className="flex items-center justify-between mb-8">
<div className="flex flex-col">
<h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-widest" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>Neural Compute Efficiency</h4>
<p className="text-[11px] text-zinc-500 mt-1 font-medium italic opacity-80">Wave.AI vs Standard Diffusion Models</p>
</div>
<div className="flex gap-2 bg-black/40 p-2 rounded-lg border border-white/5 shadow-inner">
<div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800 shadow-[inset_0_1px_1px_rgba(0,0,0,0.5)]"></div>
</div>
</div>
<div className="flex-1 min-h-[250px] border-white/[0.02] bg-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd8ed8fa-7d40-48ab-9f0f-83c906166ad2_1600w.webp)] bg-cover bg-center border rounded-2xl pt-4 pr-4 pb-4 pl-4 relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)]">
<canvas className="" id="performanceChart"></canvas>
</div>
<div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em] font-semibold">Real-time Telemetry Active</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse"></div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/40 border border-white/5 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
<span className="text-[10px] text-zinc-400 font-semibold tracking-wide">Wave V2</span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/20 border border-white/5 opacity-60">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]"></div>
<span className="text-[10px] text-zinc-500 font-semibold tracking-wide">Legacy</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="py-32 bg-[#050505] relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">The centerpiece of your ecosystem.</h2>
<p className="text-zinc-400">Seamlessly export high-fidelity stems directly to your DAW of choice or integrate our API into your custom software stack.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 py-4 gap-x-6 gap-y-6" style={{maskImage: 'linear-gradient(90deg, transparent, black 15%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 15%, black 95%, transparent)'}}>

<div className="overflow-hidden border-[3px] flex flex-col z-10 bg-[#161618] border-[#222] ring-black ring-1 rounded-[2.5rem] relative shadow-[15px_15px_30px_rgba(0,0,0,0.8),-4px_-4px_10px_rgba(255,255,255,0.02)] p-8 items-center justify-center text-center group transition-transform hover:scale-[1.02]">
<div className="pointer-events-none opacity-[0.12] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div>
</div>
<div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] relative z-10">
<i className="w-6 h-6 text-orange-500" data-lucide="plug"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider relative z-10">VST3 / AU</h3>
<p className="text-[11px] text-zinc-500 mt-2 relative z-10">Native plugin support for all major workstations.</p>
</div>

<div className="overflow-hidden border-[3px] flex flex-col z-10 bg-[#161618] border-[#222] ring-black ring-1 rounded-[2.5rem] relative shadow-[15px_15px_30px_rgba(0,0,0,0.8),-4px_-4px_10px_rgba(255,255,255,0.02)] p-8 items-center justify-center text-center group transition-transform hover:scale-[1.02]">
<div className="pointer-events-none opacity-[0.12] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div>
</div>
<div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] relative z-10">
<i className="w-6 h-6 text-blue-400" data-lucide="cloud"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider relative z-10">Cloud Sync</h3>
<p className="text-[11px] text-zinc-500 mt-2 relative z-10">Access your models and presets from any studio.</p>
</div>

<div className="overflow-hidden border-[3px] flex flex-col z-10 bg-[#161618] border-[#222] ring-black ring-1 rounded-[2.5rem] relative shadow-[15px_15px_30px_rgba(0,0,0,0.8),-4px_-4px_10px_rgba(255,255,255,0.02)] p-8 items-center justify-center text-center group transition-transform hover:scale-[1.02]">
<div className="pointer-events-none opacity-[0.12] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div>
</div>
<div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] relative z-10">
<i className="w-6 h-6 text-emerald-400" data-lucide="code-2"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider relative z-10">Developer API</h3>
<p className="text-[11px] text-zinc-500 mt-2 relative z-10">Build custom audio tools on our inference engine.</p>
</div>

<div className="overflow-hidden border-[3px] flex flex-col z-10 bg-[#161618] border-[#222] ring-black ring-1 rounded-[2.5rem] relative shadow-[15px_15px_30px_rgba(0,0,0,0.8),-4px_-4px_10px_rgba(255,255,255,0.02)] p-8 items-center justify-center text-center group transition-transform hover:scale-[1.02]">
<div className="pointer-events-none opacity-[0.12] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_2px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111]">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div>
</div>
<div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center mb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] relative z-10">
<i className="w-6 h-6 text-purple-400" data-lucide="share-2"></i>
</div>
<h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider relative z-10">Direct Export</h3>
<p className="text-[11px] text-zinc-500 mt-2 relative z-10">Lossless WAV/FLAC export with auto-naming.</p>
</div>
</div>

<div className="overflow-hidden border-[4px] flex flex-col group bg-[#161618] z-20 border-[#222] rounded-[3rem] ring-black ring-1 mt-20 relative shadow-[20px_20px_50px_rgba(0,0,0,0.9),-8px_-8px_20px_rgba(255,255,255,0.03)]" style={{maskImage: 'linear-gradient(40deg, transparent, black 15%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(40deg, transparent, black 15%, black 70%, transparent)'}}>
<div className="pointer-events-none opacity-[0.15] mix-blend-overlay absolute inset-0 z-20" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-6 left-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-30">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45"></div>
</div>
<div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-30">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45"></div>
</div>
<div className="absolute bottom-6 left-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-30">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-12"></div>
</div>
<div className="absolute bottom-6 right-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-30">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-90"></div>
</div>
<div className="h-[400px] relative">
<img alt="Studio Setup" className="group-hover:scale-105 transition-transform duration-1000 opacity-10 w-full h-full object-cover z-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa0f3272-4d49-4dc4-b486-7daa7cb58c11_1600w.webp"/>
<div className="flex z-20 bg-gradient-to-t from-[#161618] via-[#161618]/60 to-transparent pt-12 pr-12 pb-12 pl-12 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="max-w-xl">
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-orange-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-current" data-lucide="star"></i>
</div>
<p className="text-2xl font-medium tracking-tight text-white mb-4 italic">"The first generative tool that actually feels like an instrument. It doesn't replace the process; it amplifies it."</p>
<p className="text-zinc-400 font-medium">Marcus Chen — <span className="text-zinc-600">Lead Sound Designer at Obsidian Audio</span></p>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-white/5 border-t py-32 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
<span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">Verified Artists</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">The vanguard of sound.</h2>
<p className="text-zinc-400 text-lg">Leading producers and sound designers are integrating WAVE.AI into their primary signal chain.</p>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center gap-2">
<span className="text-[9px] uppercase tracking-widest text-zinc-600 font-semibold">Feed</span>
<div className="w-12 h-6 rounded-full bg-[#0a0a0c] border border-black p-1 inner-glow flex items-center justify-end relative cursor-pointer">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#444] to-[#222] shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-white/10"></div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border-[3px] hardware-shadow overflow-hidden group bg-[#161618] border-[#222] rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(130deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="pointer-events-none opacity-[0.05] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-[60%] h-[1px] bg-black rotate-45"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-[60%] h-[1px] bg-black -rotate-45"></div>
</div>
<div className="flex items-center gap-4 mb-8">
<div alt="Avatar" className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-zinc-700 to-zinc-900 shadow946832022-c327f74956e0?w=200&amp;h=200&amp;fit=crop">
</div>
<div className="">
<h4 className="text-sm font-semibold text-white tracking-tight">Lena Rodriguez</h4>
<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Techno Producer</p>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 italic">"The transient response in the generative drum stems is unlike anything I've heard from AI. It retains the analog warmth I need for large-room systems."</p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex gap-1">
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Node ID: 44100</span>
</div>
</div>

<div className="border-[3px] hardware-shadow overflow-hidden group bg-[#161618] border-[#222] rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(130deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="pointer-events-none opacity-[0.05] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-[60%] h-[1px] bg-black rotate-90"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-[60%] h-[1px] bg-black rotate-0"></div>
</div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-xl overflow-hidden">
<img alt="Avatar" className="w-full h-full rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white tracking-tight">Soren Vahl</h4>
<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Game Audio Lead</p>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 italic">"Building dynamic soundscapes for open-world environments used to take months. With the API, we can now generate reactive audio in real-time based on player telemetry."</p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex gap-1">
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Node ID: 96000</span>
</div>
</div>

<div className="border-[3px] hardware-shadow overflow-hidden group bg-[#161618] border-[#222] rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative" style={{maskImage: 'linear-gradient(130deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="pointer-events-none opacity-[0.05] mix-blend-overlay absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-[60%] h-[1px] bg-black rotate-12"></div>
</div>
<div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#111] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center">
<div className="w-[60%] h-[1px] bg-black -rotate-90"></div>
</div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-zinc-700 to-zinc-900 shadow-xl overflow-hidden">
<img alt="Avatar" className="w-full h-full rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-white tracking-tight">Kaitlyn M.</h4>
<p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Soundtrack Composer</p>
</div>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 italic">"The timbral morphing capability is a game changer. I can feed it a simple flute melody and it transforms it into a complex, evolving string quartet that fits the cinematic mood perfectly."</p>
<div className="flex items-center justify-between pt-6 border-t border-white/5">
<div className="flex gap-1">
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="text-orange-500" fill="#f97316" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Node ID: 88200</span>
</div>
</div>
</div>

<div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-20 grayscale hover:opacity-40 transition-opacity duration-700">
<img alt="Brand" className="h-6 invert object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c27636a5-c205-47a0-abd0-6c505e897932_320w.webp"/>
<img alt="Brand" className="h-8 invert object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b41ed9cc-930b-4625-9af2-4a478108704b/320w.jpg"/>
<img alt="Brand" className="h-10 invert object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/e44ec1fe-2eb5-4aee-917b-f31f10e9f350/320w.jpg"/>
<img alt="Brand" className="h-8 invert object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/823f2b22-afcd-4c1d-b3f6-c025e505e98c/320w.jpg"/>
</div>
</div>
</section><footer className="bg-[#161618] border-t-[4px] border-[#222] ring-black ring-1 pt-24 pb-12 relative overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">

<div className="pointer-events-none opacity-[0.08] mix-blend-overlay absolute inset-0 z-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, rgb(0, 0, 0) 0px, rgb(0, 0, 0) 2px, transparent 2px, transparent 4px)'}}></div>

<div className="absolute top-6 left-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-10">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-10">
<div className="w-[60%] h-[1px] bg-[#000] transform -rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 left-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-10">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="absolute bottom-6 right-6 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#444] to-[#111] shadow-[1px_1px_3px_#000,inset_0_1px_1px_rgba(255,255,255,0.2)] flex items-center justify-center border border-[#111] z-10">
<div className="w-[60%] h-[1px] bg-[#000] transform rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.1)]"></div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">

<div className="col-span-2 lg:col-span-2">
<div className="flex gap-2 text-xl font-semibold text-white tracking-tight items-center mb-6">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-zinc-900 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)]">
<div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
</div>
                    WAVE.AI
                </div>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-8">
                    The next generation of audio synthesis. Built for producers, engineers, and creators pushing the boundaries of sound.
                </p>
<div className="flex items-center gap-4">
<a className="w-8 h-8 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
</a><a className="w-8 h-8 rounded-full bg-[#111] border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white transition-colors shadow-sm" href="#">
<svg aria-hidden="true" className="lucide lucide-github w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="logos" data-logos="instagram-icon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36" fill="#0A0A08"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.2em] mb-6">Product</h4>
<ul className="space-y-4">
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Pro-8 Controller</a></li>
<li className=""><a className="hover:text-white transition-colors text-sm font-medium text-zinc-400" href="#">Wave</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">VST3/AU Plugins</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Cloud Sync</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.2em] mb-6">Resources</h4>
<ul className="space-y-4">
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Documentation</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">API Reference</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Community</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Tutorials</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Sample Packs</a></li>
</ul>
</div>
<div className="">
<h4 className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.2em] mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">About Us</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Journal</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Careers</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Brand Kit</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-zinc-500 text-[10px] font-semibold uppercase tracking-[0.2em] mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Privacy Policy</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Terms of Service</a></li>
<li><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">Cookie Settings</a></li>
<li className=""><a className="text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">EULA</a></li>
</ul>
</div>
</div>
<div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-zinc-600 text-[11px] font-mono uppercase tracking-[0.2em] font-medium">
                © 2024 Obsidian Audio Technologies. All rights reserved.
            </div>
<div className="flex items-center gap-8">
<div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-black/40 border border-white/5 shadow-inner">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Status: Online</span>
</div>
<div className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] font-semibold">
                    v2.4.12-PRO
                </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
