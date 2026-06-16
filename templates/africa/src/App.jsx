import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // ---- Card Swap Logic (Vanilla JS + GSAP) ----
      document.addEventListener("DOMContentLoaded", () => {
        // Configuration
        const cardDistance = 40; // Reduced for tighter stack
        const verticalDistance = 30; // Reduced for tighter stack
        const delay = 5000;
        const skewAmount = 2; // Subtle skew
        const container = document.getElementById('card-swap-wrapper');
        const cards = Array.from(container.querySelectorAll('.swap-card'));
        
        // Easing config (Elastic)
        const config = {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 1.2,
            durMove: 1.2,
            durReturn: 1.2,
            promoteOverlap: 0.9,
            returnDelay: 0.05
        };

        // Internal State
        let order = cards.map((_, i) => i);
        let intervalId;
        let tl;

        // Helper: Calculate slot position
        const makeSlot = (i, distX, distY, total) => ({
            x: i * distX,
            y: -i * distY,
            z: -i * distX * 1.5,
            zIndex: total - i
        });

        // Helper: Place card immediately
        const placeNow = (el, slot, skew) => {
            gsap.set(el, {
                x: slot.x,
                y: slot.y,
                z: slot.z,
                xPercent: -50,
                yPercent: -50,
                skewY: skew,
                transformOrigin: 'center center',
                zIndex: slot.zIndex,
                force3D: true
            });
        };

        // Initialize positions
        const total = cards.length;
        cards.forEach((card, i) => {
            placeNow(card, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
        });

        // The Swap Animation Function
        const swap = () => {
            if (order.length < 2) return;

            const [frontIndex, ...restIndices] = order;
            const elFront = cards[frontIndex];
            
            tl = gsap.timeline();

            // 1. Drop the front card
            tl.to(elFront, {
                y: '+=300', // Drop distance
                duration: config.durDrop,
                ease: config.ease
            });

            tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`);

            // 2. Move other cards forward
            restIndices.forEach((idx, i) => {
                const el = cards[idx];
                const slot = makeSlot(i, cardDistance, verticalDistance, total);
                
                tl.set(el, { zIndex: slot.zIndex }, 'promote');
                tl.to(el, {
                    x: slot.x,
                    y: slot.y,
                    z: slot.z,
                    duration: config.durMove,
                    ease: config.ease
                }, `promote+=${i * 0.1}`);
            });

            // 3. Return front card to back
            const backSlot = makeSlot(total - 1, cardDistance, verticalDistance, total);
            tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`);
            
            tl.call(() => {
                gsap.set(elFront, { zIndex: backSlot.zIndex });
            }, null, 'return');

            tl.to(elFront, {
                x: backSlot.x,
                y: backSlot.y,
                z: backSlot.z,
                duration: config.durReturn,
                ease: config.ease
            }, 'return');

            // Update order array
            tl.call(() => {
                order = [...restIndices, frontIndex];
            });
        };

        // Start Loop
        intervalId = setInterval(swap, delay);

        // Hover Controls (Pause/Play)
        container.addEventListener('mouseenter', () => {
            if(tl) tl.pause();
            clearInterval(intervalId);
        });

        container.addEventListener('mouseleave', () => {
            if(tl) tl.play();
            intervalId = setInterval(swap, delay);
        });
        
        // Allow clicking top card to trigger swap immediately
        container.addEventListener('click', () => {
             clearInterval(intervalId);
             swap();
             intervalId = setInterval(swap, delay);
        });
      });

      // ---- Falling Text Physics Logic (From Previous) ----
      document.addEventListener("DOMContentLoaded", () => {
        const container = document.getElementById("falling-text-container");
        const wordsConfig = [
          { text: "Africa", type: "primary" },
          { text: "is", type: "primary" },
          { text: "Not", type: "primary" },
          { text: "a", type: "primary" },
          { text: "Subject.", type: "primary", breakAfter: true },
          { text: "We", type: "secondary" },
          { text: "are", type: "secondary" },
          { text: "the", type: "secondary" },
          { text: "Authors.", type: "secondary" },
        ];

        const baseClass = "physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2";
        const primaryClass = "font-serif font-medium text-[#262624]";
        const secondaryClass = "italic text-[#888] font-serif font-medium";

        let htmlContent = "";
        wordsConfig.forEach(word => {
            const classes = `${baseClass} ${word.type === 'primary' ? primaryClass : secondaryClass}`;
            htmlContent += `<span class="${classes}">${word.text}</span>`;
            if (word.breakAfter) htmlContent += "<br/>";
        });
        container.innerHTML = htmlContent;

        let effectStarted = false;
        container.addEventListener("mouseenter", () => { if (!effectStarted) startPhysics(); });
        container.addEventListener("touchstart", () => { if (!effectStarted) startPhysics(); });

        function startPhysics() {
          effectStarted = true;
          const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
          const rect = container.getBoundingClientRect();
          const width = rect.width;
          const height = Math.max(rect.height, 400);
          container.style.height = `${height}px`;

          const engine = Engine.create();
          engine.world.gravity.y = 0.6;

          const canvas = document.createElement("canvas");
          Object.assign(canvas.style, { position: "absolute", top: "0", left: "0", pointerEvents: "none", zIndex: "0" });
          container.appendChild(canvas);

          const render = Render.create({
            canvas: canvas,
            engine: engine,
            options: { width, height, background: "transparent", wireframes: false }
          });

          const wallOptions = { isStatic: true, render: { fillStyle: "transparent" } };
          World.add(engine.world, [
             Bodies.rectangle(width / 2, height + 50, width, 100, wallOptions),
             Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions),
             Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions)
          ]);

          const spans = container.querySelectorAll(".physics-word");
          const wordBodies = [];
          spans.forEach((span) => {
             const spanRect = span.getBoundingClientRect();
             const x = spanRect.left - rect.left + spanRect.width / 2;
             const y = spanRect.top - rect.top + spanRect.height / 2;
             const body = Bodies.rectangle(x, y, spanRect.width, spanRect.height, {
                restitution: 0.6, friction: 0.1, frictionAir: 0.02, render: { fillStyle: "transparent" }
             });
             Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: -2 - Math.random() * 2 });
             wordBodies.push({ body, elem: span });
          });
          World.add(engine.world, wordBodies.map(wb => wb.body));

          spans.forEach((span) => {
             Object.assign(span.style, { position: "absolute", margin: "0", transformOrigin: "center center", left: "0", top: "0", zIndex: "10" });
          });

          const mouse = Mouse.create(container);
          const mouseConstraint = MouseConstraint.create(engine, {
             mouse: mouse, constraint: { stiffness: 0.9, render: { visible: false } }
          });
          mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
          mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
          World.add(engine.world, mouseConstraint);
          render.mouse = mouse;

          const runner = Runner.create();
          Runner.run(runner, engine);
          Render.run(render);

          (function updateLoop() {
             wordBodies.forEach(item => {
                const { x, y } = item.body.position;
                item.elem.style.transform = `translate(${x - item.elem.offsetWidth/2}px, ${y - item.elem.offsetHeight/2}px) rotate(${item.body.angle}rad)`;
             });
             requestAnimationFrame(updateLoop);
          })();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 bg-noise pointer-events-none z-50 opacity-50"></div>

<nav className="md:px-12 flex z-40 fixed bg-[#E6E3D6]/90 w-full border-[#262624]/5 border-b pt-4 pr-6 pb-4 pl-6 top-0 left-0 backdrop-blur-sm items-center justify-between">
<div className="flex items-center gap-4">
<div className="relative group">
<div className="absolute inset-0 bg-[#CC5500]/20 blur-md rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Pan-Africanism Logo" className="filter contrast-125 bg-black w-16 h-16 object-contain border-[#262624]/10 border rounded-sm relative shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08fa7891-2513-4ddc-b7a8-6bfdf0601f7c_320w.jpg"/>
</div>
<a className="text-xl font-medium text-[#262624] tracking-tight font-serif italic uppercase hover:opacity-70 transition-opacity" href="index.html">
          Pan-Africanism
        </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A5852]">
<a className="hover:text-[#CC5500] transition-colors" href="index.html">Home</a>
<a className="hover:text-[#CC5500] transition-colors" href="insights.html">Insights</a>
<a className="hover:text-[#CC5500] transition-colors" href="heritage.html">Heritage</a>
<a className="hover:text-[#CC5500] transition-colors" href="community.html">Community</a>
<a className="hover:text-[#CC5500] transition-colors" href="contact.html">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex px-6 py-3 bg-[#1A4D2E] hover:bg-[#143d24] text-white text-sm font-medium transition-colors shadow-sm rounded-sm items-center gap-2">
<a href="insights.html">Subscribe</a>
</button>
<button className="flex md:hidden text-[#262624]">
<iconify-icon icon="lucide:menu" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-start justify-center min-h-[90vh] relative">
<div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#CC5500] blur-[120px] opacity-[0.08] pointer-events-none rounded-full mix-blend-multiply"></div>
<div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-[#1A4D2E] blur-[120px] opacity-[0.08] pointer-events-none rounded-full mix-blend-multiply"></div>
<div className="grid lg:grid-cols-2 w-full z-10 gap-x-16 gap-y-16 items-center">
<div className="flex flex-col items-start w-full relative">
<a className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-[#CC5500]/30 rounded-full bg-[#CC5500]/5 text-[#CC5500] text-xs font-semibold tracking-widest uppercase transition-colors hover:bg-[#CC5500]/10" href="index.html">
<span className="w-1.5 h-1.5 rounded-full bg-[#CC5500] animate-pulse"></span>
            Live Analysis
          </a>
<div className="relative w-full cursor-grab active:cursor-grabbing mb-8 select-none" id="falling-text-container" style={{minHeight: '250px', height: '400px'}}><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 font-serif font-medium text-[#262624]" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(7.82812px, 0px) rotate(0rad)'}}>Africa</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 font-serif font-medium text-[#262624]" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(264.562px, 0px) rotate(0rad)'}}>is</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 font-serif font-medium text-[#262624]" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(345.641px, 0px) rotate(0rad)'}}>Not</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 font-serif font-medium text-[#262624]" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(7.99219px, 96px) rotate(0rad)'}}>a</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 font-serif font-medium text-[#262624]" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(69.8359px, 96px) rotate(0rad)'}}>Subject.</span><br/><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 italic text-[#888] font-serif font-medium" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(8.07031px, 192px) rotate(0rad)'}}>We</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 italic text-[#888] font-serif font-medium" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(158.328px, 192px) rotate(0rad)'}}>are</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 italic text-[#888] font-serif font-medium" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(311.727px, 192px) rotate(0rad)'}}>the</span><span className="physics-word text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mx-2 italic text-[#888] font-serif font-medium" style={{position: 'absolute', margin: '0px', transformOrigin: 'center center', left: '0px', top: '0px', zIndex: '10', transform: 'translate(7.94531px, 288px) rotate(0rad)'}}>Authors.</span><canvas height="400" style={{position: 'absolute', top: '0px', left: '0px', pointerEvents: 'none', zIndex: '0', background: '0% 0% / contain transparent'}} width="560"></canvas></div>
<p className="text-lg md:text-xl text-[#5A5852] mb-10 max-w-lg leading-relaxed border-l-2 border-[#CC5500] pl-6">
            David presents a Pan-African lens on global shifts, unity, and the
            future of the Black Star.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-4 bg-[#CC5500] hover:bg-[#B34900] text-white font-medium text-base transition-all hover:-translate-y-1 shadow-lg shadow-[#CC5500]/10 flex items-center justify-center gap-2 rounded-sm">
<span>Join the Movement</span>
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 bg-transparent border border-[#262624]/20 text-[#262624] hover:border-[#262624]/50 font-medium text-base transition-colors flex items-center justify-center gap-2 rounded-sm">
<iconify-icon className="" icon="lucide:play-circle" width="18"></iconify-icon>
<span className="">Watch Manifesto</span>
</button>
</div>
</div>
<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:ml-auto group">
<div className="absolute inset-0 bg-[#E6E3D6] z-0 translate-x-4 translate-y-4 border border-[#262624]/10"></div>
<div className="relative h-full w-full overflow-hidden border border-[#262624]/10">
<img alt="African Architecture" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1626695436755-3e288720849c?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-[#1A4D2E] mix-blend-multiply opacity-20"></div>
<div className="bg-gradient-to-t from-[#E6E3D6] via-transparent to-transparent opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-[#F5F4F0] p-6 border border-[#262624]/10 shadow-xl max-w-xs z-10">
<p className="text-[#CC5500] font-serif text-2xl italic mb-2">
              "Intellectual Sovereignty"
            </p>
<p className="text-[#5A5852] text-xs uppercase tracking-wider">
              The New Paradigm
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-[#262624]/5 bg-[#E6E3D6] overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-1/3 z-20">
<div className="mb-8">
<h2 className="text-[#5A5852] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                  The Global Pulse
                </h2>
<h3 className="text-4xl md:text-5xl font-serif text-[#262624] mb-6">
                  David’s Latest Analysis
                </h3>
<p className="text-[#5A5852] leading-relaxed mb-8">
                  Swipe through the latest briefings on trade, climate sovereignty, and technological infrastructure.
                </p>
<a className="text-[#CC5500] hover:text-[#262624] transition-colors flex items-center gap-2 text-sm font-medium pb-1 border-b border-[#CC5500] w-fit" href="insights.html">
                    View Full Archive
                    <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 text-sm text-[#5A5852]/60">
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-[#CC5500]"></span>
<span className="w-2 h-2 rounded-full bg-[#CC5500]/40"></span>
<span className="w-2 h-2 rounded-full bg-[#CC5500]/20"></span>
</div>
<span>Updates automatically every 5s</span>
</div>
</div>

<div className="w-full lg:w-2/3 relative h-[500px] flex items-center justify-center">

<div className="relative w-[340px] md:w-[500px] h-[400px]">
<div className="absolute bottom-0 right-0 w-full h-full card-swap-container origin-bottom-right md:scale-90 lg:scale-100" id="card-swap-wrapper">

<div className="swap-card w-full h-full bg-[#F5F4F0] border border-[#262624]/10 rounded-sm shadow-xl p-8 flex flex-col justify-between group cursor-pointer hover:border-[#CC5500]/30 transition-colors" style={{translate: 'none', rotate: 'none', scale: 'none', zIndex: '3', transformOrigin: '50% 50%', transform: 'translate(-50%, -50%) translate3d(0px, 0px, 0px) skew(0deg, 2deg)'}}>
<div className="">
<div className="w-12 h-12 rounded-full bg-[#1A4D2E]/10 text-[#1A4D2E] flex items-center justify-center mb-6">
<iconify-icon icon="lucide:cpu" width="24"></iconify-icon>
</div>
<div className="mb-3">
<span className="text-xs text-[#5A5852] uppercase tracking-wider">Technology</span>
</div>
<h4 className="text-3xl font-serif text-[#262624] mb-3 tracking-tight">
                                Beyond Mobile Money
                            </h4>
<p className="text-[#5A5852] text-sm leading-relaxed">
                                Fintech was just the warm-up. The next wave of African tech is infrastructure-first, decentralized, and sovereign by design.
                            </p>
</div>
<div className="flex items-center gap-2 text-[#CC5500] text-sm font-medium">
<span className="">Read Deep Dive</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="swap-card w-full h-full bg-[#F5F4F0] border border-[#262624]/10 rounded-sm shadow-xl p-8 flex flex-col justify-between group cursor-pointer hover:border-[#1A4D2E]/30 transition-colors" style={{translate: 'none', rotate: 'none', scale: 'none', zIndex: '2', transformOrigin: '50% 50%', transform: 'translate(-50%, -50%) translate3d(40px, -30px, -60px) skew(0deg, 2deg)'}}>
<div>
<div className="w-12 h-12 rounded-full bg-[#1A4D2E]/10 text-[#1A4D2E] flex items-center justify-center mb-6">
<iconify-icon icon="lucide:leaf" width="24"></iconify-icon>
</div>
<div className="mb-3">
<span className="text-xs text-[#5A5852] uppercase tracking-wider">Climate Justice</span>
</div>
<h4 className="text-3xl font-serif text-[#262624] mb-3 tracking-tight">
                                Carbon &amp; The Global South
                            </h4>
<p className="text-[#5A5852] text-sm leading-relaxed">
                                Why the Congo Basin is the world's most valuable asset, and why our approach to conservation must reject colonial models.
                            </p>
</div>
<div className="flex items-center gap-2 text-[#1A4D2E] text-sm font-medium">
<span>Read Deep Dive</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="swap-card w-full h-full bg-[#F5F4F0] border border-[#262624]/10 rounded-sm shadow-xl p-8 flex flex-col justify-between group cursor-pointer hover:border-[#CC5500]/30 transition-colors" style={{translate: 'none', rotate: 'none', scale: 'none', zIndex: '1', transformOrigin: '50% 50%', transform: 'translate(-50%, -50%) translate3d(80px, -60px, -120px) skew(0deg, 2deg)'}}>
<div>
<div className="w-12 h-12 rounded-full bg-[#1A4D2E]/10 text-[#1A4D2E] flex items-center justify-center mb-6">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<div className="mb-3">
<span className="text-xs text-[#5A5852] uppercase tracking-wider">Economics</span>
</div>
<h4 className="text-3xl font-serif text-[#262624] mb-3 tracking-tight">
                                The Trade Corridor Shift
                            </h4>
<p className="text-[#5A5852] text-sm leading-relaxed">
                                As Western markets saturate, the intra-African trade agreement (AfCFTA) is creating a new axis of power that bypasses traditional gatekeepers.
                            </p>
</div>
<div className="flex items-center gap-2 text-[#CC5500] text-sm font-medium">
<span>Read Deep Dive</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#E6E3D6]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -top-6 -left-6 w-full h-full border border-[#262624]/20 opacity-50"></div>
<div className="relative aspect-[4/5] bg-[#F5F4F0] p-2 border border-[#262624]/10">
<img className="w-full h-full object-cover filter grayscale contrast-[1.05]" src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-[#CC5500] mix-blend-multiply opacity-10"></div>
<div className="absolute bottom-12 right-0 bg-[#1A4D2E] p-8 max-w-sm shadow-xl translate-x-4 lg:translate-x-12 border-t-2 border-[#CC5500]">
<iconify-icon className="text-white/30 mb-4" icon="lucide:quote" width="32"></iconify-icon>
<p className="text-white font-serif text-lg leading-relaxed italic mb-4">
                "We are weaving a single narrative of sovereignty from Lagos to
                London."
              </p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-[#5A5852] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Why Now?
          </h2>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-[#262624] mb-8 leading-[1.1] tracking-tight">
            The Bridge Between Continent &amp; Diaspora
          </h3>
<p className="text-lg text-[#5A5852] mb-8 leading-relaxed font-normal">
            Pan-Africanism is no longer just a dream of the 1960s; it is the
            economic and cultural necessity of the 2020s. From the streets of
            Lagos to the tech hubs of Nairobi and the hearts of the Diaspora, we
            are witnessing a convergence.
          </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full border border-[#1A4D2E] text-[#1A4D2E] flex items-center justify-center shrink-0 mt-1">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#262624] font-medium mb-1">
                  Decolonizing the Narrative
                </h4>
<p className="text-sm text-[#5A5852]">
                  Shifting focus from aid to trade, and pity to power.
                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full border border-[#1A4D2E] text-[#1A4D2E] flex items-center justify-center shrink-0 mt-1">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#262624] font-medium mb-1">Digital Unity</h4>
<p className="text-sm text-[#5A5852]">
                  Connecting 1.4 billion people through shared digital
                  infrastructure.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#1A4D2E] relative overflow-hidden">
<iconify-icon className="absolute -right-20 -bottom-20 text-[#0F3626] opacity-30 rotate-12 w-[600px] h-[600px]" icon="lucide:globe" width="600"></iconify-icon>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 border-l-4 border-[#CC5500] pl-6">
<h2 className="text-4xl md:text-5xl font-serif text-[#F5F4F0] mb-2 tracking-tight">
            Africa by the Numbers
          </h2>
<p className="text-green-100/70 text-lg">
            The data behind the rising giant.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F5F4F0]/20 border border-[#F5F4F0]/10">
<div className="bg-[#1A4D2E] p-10 hover:bg-[#143d24] transition-colors group cursor-default">
<p className="text-green-300 text-xs font-medium tracking-wider uppercase mb-2">
              Population
            </p>
<p className="text-5xl text-[#F5F4F0] font-serif mb-2 tracking-tight">
              2.5B
            </p>
<p className="text-sm text-[#F5F4F0]/60">Projected by 2050</p>
<div className="w-full h-1 bg-[#F5F4F0]/10 mt-6 overflow-hidden">
<div className="h-full bg-[#CC5500] w-[75%]"></div>
</div>
</div>
<div className="bg-[#1A4D2E] p-10 hover:bg-[#143d24] transition-colors group cursor-default">
<p className="text-green-300 text-xs font-medium tracking-wider uppercase mb-2">
              Median Age
            </p>
<p className="text-5xl text-[#F5F4F0] font-serif mb-2 tracking-tight">
              19.7
            </p>
<p className="text-sm text-[#F5F4F0]/60">Youngest workforce globally</p>
<div className="w-full h-1 bg-[#F5F4F0]/10 mt-6 overflow-hidden">
<div className="h-full bg-[#CC5500] w-[40%]"></div>
</div>
</div>
<div className="bg-[#1A4D2E] p-10 hover:bg-[#143d24] transition-colors group cursor-default">
<p className="text-green-300 text-xs font-medium tracking-wider uppercase mb-2">
              Urbanization
            </p>
<p className="text-5xl text-[#F5F4F0] font-serif mb-2 tracking-tight">
              +3.5%
            </p>
<p className="text-sm text-[#F5F4F0]/60">Annual growth rate</p>
<div className="w-full h-1 bg-[#F5F4F0]/10 mt-6 overflow-hidden">
<div className="h-full bg-[#CC5500] w-[80%]"></div>
</div>
</div>
<div className="bg-[#1A4D2E] p-10 hover:bg-[#143d24] transition-colors group cursor-default">
<p className="text-green-300 text-xs font-medium tracking-wider uppercase mb-2">
              Tech Hubs
            </p>
<p className="text-5xl text-[#F5F4F0] font-serif mb-2 tracking-tight">
              618+
            </p>
<p className="text-sm text-[#F5F4F0]/60">Active across the continent</p>
<div className="w-full h-1 bg-[#F5F4F0]/10 mt-6 overflow-hidden">
<div className="h-full bg-[#CC5500] w-[60%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-[#E6E3D6] border-[#262624]/5 border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="aspect-[3/4] relative bg-[#F5F4F0] border border-[#262624]/10 p-2 shadow-sm">
<img alt="David" className="filter contrast-125 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6688ce3-f328-43f9-abf5-1eeb3acbd364_800w.jpg"/>
</div>
</div>
<div className="w-full md:w-2/3">
<h2 className="text-[#5A5852] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            About The Founder
          </h2>
<h3 className="text-4xl font-serif text-[#262624] mb-6 tracking-tight">
            Meet David
          </h3>
<p className="text-lg text-[#5A5852] leading-relaxed mb-6 font-normal">
            "David is a thinker, advocate, and storyteller dedicated to
            decolonizing the global news cycle. By connecting African issues to
            global trends, he provides the clarity needed for the continent to
            take its rightful seat at the world's table."
          </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 border border-[#262624]/20 rounded-full flex items-center justify-center text-[#5A5852] hover:border-[#CC5500] hover:text-[#CC5500] transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-[#262624]/20 rounded-full flex items-center justify-center text-[#5A5852] hover:border-[#CC5500] hover:text-[#CC5500] transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-[#262624] font-serif italic text-lg ml-4" href="#">David.</a>
</div>
</div>
</div>
</section>

<section className="md:px-12 overflow-hidden flex text-center bg-[#E6E3D6] pt-32 pr-6 pb-32 pl-6 relative justify-center">
<div className="w-full max-w-3xl relative drop-shadow-xl filter">
<div className="ticket-top"></div>
<div className="bg-[#F5F4F0] px-8 py-16 md:p-16 relative">
<div className="hidden md:block absolute top-0 bottom-0 left-24 border-r-2 border-dashed border-[#262624]/10 h-full"></div>
<div className="md:pl-24 relative z-10">
<span className="inline-block py-1 px-4 rounded-full border border-[#262624]/10 bg-[#E6E3D6] text-[#CC5500] text-sm font-medium mb-6">
              Admit One: Intellectual Sovereignty
            </span>
<h2 className="text-4xl md:text-5xl font-serif text-[#262624] mb-6 tracking-tight">
              Join the Forum
            </h2>
<p className="text-[#5A5852] text-lg mb-10 max-w-lg mx-auto">
              Weekly deep dives, debate invitations, and a community of
              changemakers delivered to your inbox. No noise, just signal.
            </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-grow px-6 py-4 bg-[#E6E3D6] border border-[#262624]/10 text-[#262624] focus:outline-none focus:border-[#CC5500] transition-colors placeholder:text-[#5A5852]/50" placeholder="email@address.com" type="email"/>
<button className="px-8 py-4 bg-[#CC5500] hover:bg-[#B34900] text-white font-medium transition-colors whitespace-nowrap shadow-md" type="submit">
                Subscribe
              </button>
</form>
<p className="text-xs text-[#5A5852]/60 mt-6 font-mono">
              TICKET NO. 00-25000-AFR
            </p>
</div>
</div>
<div className="ticket-bottom"></div>
</div>
</section>

<footer className="bg-[#262624] text-[#9EA08F] py-16 px-6 md:px-12 font-sans text-sm border-t-4 border-[#CC5500]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6 text-[#F5F4F0]">
<img alt="Logo" className="bg-black w-8 h-8 object-cover border-[#F5F4F0]/20 border rounded-sm" src="https://images.unsplash.com/photo-1655102717581-a6a3fa59a2a6?w=320&amp;q=80"/>
<span className="text-lg font-medium font-serif">PAN-AFRICANISM</span>
</div>
<p className="max-w-sm mb-8 font-light">
            Elevating African perspectives in global discourse. Bold,
            intellectual, and unashamedly sovereign.
          </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
<div className="">
<h4 className="text-[#F5F4F0] font-medium mb-6">Platform</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-[#CC5500] transition-colors" href="#">Latest Analysis</a></li>
<li><a className="hover:text-[#CC5500] transition-colors" href="#">The Podcast</a></li>
<li><a className="hover:text-[#CC5500] transition-colors" href="#">Events &amp; Forums</a></li>
</ul>
</div>
<div className="">
<h4 className="text-[#F5F4F0] font-medium mb-6">Legal</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-[#CC5500] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#CC5500] transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-[#CC5500] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#F5F4F0]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="">© 2026 Pan-Africanism. All rights reserved.</p>
<div className="flex items-center gap-3 text-right">
<div className="w-8 h-px bg-[#1A4D2E]"></div>
<p className="italic font-serif text-[#787870]">
            "I am not African because I was born in Africa but because Africa is
            born in me." <span className="text-[#CC5500]">— Kwame Nkrumah</span>
</p>
</div>
</div>
</footer>



    </>
  );
}
