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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const users = {
            bash: "326950",
            callender: "329062",
        };

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const statusElement = document.getElementById("status");
        const loginBox = document.getElementById("loginContainer");
        const app = document.getElementById("app");
        const frame = document.getElementById("frame");
        const backBtn = document.getElementById("backBtn");

        function login() {
            const u = usernameInput.value;
            const p = passwordInput.value;

            if (users[u] === p) {
                statusElement.textContent = "Injecting...";
                statusElement.className = "mt-4 text-xs font-normal text-center h-4 text-[#b57aff] transition-colors duration-300";

                loginBox.style.opacity = '0';
                loginBox.style.filter = 'blur(10px)';
                loginBox.style.transform = 'translate(-50%, -50%) scale(0.95)';
                loginBox.style.pointerEvents = 'none';

                setTimeout(() => {
                    loginBox.style.display = "none";
                    
                    app.style.display = "block";
                    backBtn.style.display = "flex";

                    frame.src = "https://pevcnupdate.update.curtellsoggydih.152-53-38-9.nip.io/";

                    setTimeout(() => {
                        app.style.opacity = '1';
                    }, 50);

                }, 500);

            } else {
                statusElement.textContent = "Invalid login";
                statusElement.className = "mt-4 text-xs font-normal text-center h-4 text-red-400 transition-colors duration-300";
                usernameInput.value = "";
                passwordInput.value = "";
            }
        }

        function goBack() {
            app.style.opacity = '0';

            setTimeout(() => {
                app.style.display = "none";
                frame.src = "";

                loginBox.style.display = "block";

                setTimeout(() => {
                    loginBox.style.opacity = '1';
                    loginBox.style.filter = 'none';
                    loginBox.style.transform = 'translate(-50%, -50%) scale(1)';
                    loginBox.style.pointerEvents = 'auto';
                }, 50);

                backBtn.style.display = "none";
                
                statusElement.textContent = "";
                statusElement.className = "mt-4 text-xs font-normal text-center h-4 text-transparent transition-colors duration-300";
                usernameInput.value = "";
                passwordInput.value = "";
            }, 400);
        }

        document.addEventListener("keydown", e => {
            if (e.key === "Enter" && loginBox.style.display !== "none") login();
        });

        const canvas = document.getElementById("particles");
        const ctx = canvas.getContext("2d");

        let particles = [];
        let mouse = { x: 0, y: 0 };

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener("resize", resize);

        window.addEventListener("mousemove", e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        function createParticles() {
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 2.5 + 0.5,
                    speedY: Math.random() * 0.8 + 0.2,
                    drift: (Math.random() - 0.5) * 0.3,
                    alpha: Math.random() * 0.5 + 0.1
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                let dx = p.x - mouse.x;
                let dy = p.y - mouse.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    let force = (120 - dist) / 120;
                    p.x += (dx / dist) * force * 1.5;
                    p.y += (dy / dist) * force * 1.5;
                }

                p.y += p.speedY;
                p.x += p.drift;

                if (p.y > canvas.height) {
                    p.y = -5;
                    p.x = Math.random() * canvas.width;
                }

                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(181, 122, 255, ${p.alpha})`;
                ctx.shadowColor = "rgba(181, 122, 255, 0.4)";
                ctx.shadowBlur = 10;
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }

        createParticles();
        draw();
    
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
      
<canvas className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" id="particles"></canvas>
<button className="hidden absolute top-6 left-6 z-50 flex items-center gap-1.5 bg-[#121018]/60 backdrop-blur-md border border-white/5 text-neutral-400 hover:text-[#b57aff] hover:border-[#b57aff]/40 px-3 py-1.5 rounded-lg text-xs font-normal transition-all duration-300" id="backBtn" onclick="goBack()">
<iconify-icon className="text-sm" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
        Back
    </button>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-[340px] bg-[#121018]/70 backdrop-blur-xl px-8 pt-10 pb-8 rounded-2xl border border-white/5 shadow-2xl" id="loginContainer" style={{transition: 'opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease'}}>
<div className="flex flex-col items-center mb-8">
<div className="flex items-center gap-2">
<h1 className="text-2xl font-normal tracking-tight text-white uppercase">Amethyst</h1>
<span className="text-xs text-[#b57aff] border border-[#b57aff]/20 bg-[#b57aff]/10 px-1.5 py-0.5 rounded font-normal tracking-wide">V4</span>
</div>
</div>
<div className="space-y-3">
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-base" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input autocomplete="off" className="w-full bg-white/5 border border-white/5 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#b57aff]/40 focus:ring-1 focus:ring-[#b57aff]/20 transition-all placeholder:text-neutral-600 font-light" id="username" placeholder="Enter Username" type="text"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 text-base" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-white/5 border border-white/5 text-sm rounded-xl pl-10 pr-4 py-3 outline-none focus:border-[#b57aff]/40 focus:ring-1 focus:ring-[#b57aff]/20 transition-all placeholder:text-neutral-600 font-light" id="password" placeholder="Enter Password" type="password"/>
</div>
</div>
<button className="w-full mt-6 bg-transparent border border-[#b57aff]/30 text-[#b57aff] hover:bg-[#b57aff] hover:text-[#0b0b0f] hover:border-[#b57aff] hover:shadow-[0_0_15px_rgba(181,122,255,0.25),0_0_30px_rgba(181,122,255,0.15)] text-sm font-medium tracking-tight py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" onclick="login()">
            Enter
            <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="mt-4 text-xs font-normal text-center h-4 text-transparent transition-colors duration-300" id="status"></div>
<p className="absolute bottom-3 right-4 text-xs text-neutral-600 tracking-tight font-normal">made by bash</p>
</div>
<div className="absolute inset-0 w-full h-full z-40 hidden" id="app" style={{opacity: '0', transition: 'opacity 0.6s ease'}}>
<iframe className="w-full h-full border-none" id="frame"></iframe>
</div>


    </>
  );
}
