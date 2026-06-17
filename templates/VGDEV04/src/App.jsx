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



        // Initialize MEGA particles
        particlesJS('particles-js', {
            particles: {
                number: { value: 200, density: { enable: true, value_area: 400 } },
                color: { value: ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0080ff', '#8000ff', '#ff0080', '#ff69b4', '#00ffff', '#ff1493'] },
                shape: { type: ['circle', 'triangle', 'polygon'], polygon: { nb_sides: 6 } },
                opacity: { value: 0.8, random: true },
                size: { value: 8, random: true },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 2 },
                move: { enable: true, speed: 12, direction: 'none', random: true, straight: false, out_mode: 'bounce', bounce: true }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { 
                    onhover: { enable: true, mode: 'bubble' }, 
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                    push: { particles_nb: 10 }
                }
            }
        });

        // Variables
        let giggles = 0;
        let chaosLevel = 75;
        let engine, world, canvas, balls = [];
        let rainbowMode = false;
        let ultimateChaosMode = false;
        
        const insaneEmojis = ['🤪', '🤯', '🥳', '🎉', '🎊', '💥', '⚡', '🌟', '⭐', '✨', '🌈', '🦄', '🎭', '🎪', '🎨', '🎯', '🎲', '🎮', '🚀', '💫', '🔥', '💎', '🍭', '🧁', '🎂', '🍰', '🎈', '🎁', '🏆', '👑', '💝', '🎵', '🎶', '🎸', '🥳', '😵‍💫', '🤩', '😎', '🤖', '👾', '🦋', '🌺', '🌸', '🌼', '🌻', '🌹'];
        
        const weirdFacts = [
            "🦄 Unicorns are actually just shy rhinoceros with party hats! 🎉",
            "🐙 Octopuses throw temper tantrums with all 8 arms! 😤",
            "🍯 Honey is basically bee vomit that tastes amazing! 🤢✨",
            "🦩 Flamingos are pink because they eat too much shrimp pizza! 🍕",
            "🍌 Bananas are radioactive and plotting world domination! 🌍💥",
            "🐧 Penguins have their own comedy clubs in Antarctica! 🎭",
            "🦐 Shrimp can see colors that don't even exist yet! 👁️🌈",
            "🕷️ Spiders dream about flying but are too scared to jump! 💭✈️",
            "🦋 Butterflies taste with their feet and judge your shoes! 👠👟",
            "🐨 Koalas sleep 22 hours a day and still complain about being tired! 😴"
        ];

        // Initialize MEGA Physics
        function initPhysics() {
            const Engine = Matter.Engine;
            const World = Matter.World;
            const Bodies = Matter.Bodies;
            const Render = Matter.Render;

            engine = Engine.create();
            world = engine.world;
            engine.world.gravity.y = 1.5;

            canvas = document.getElementById('physics-canvas');
            const render = Render.create({
                canvas: canvas,
                engine: engine,
                options: {
                    width: canvas.offsetWidth,
                    height: 384,
                    wireframes: false,
                    background: 'transparent',
                    showAngleIndicator: true,
                    showVelocity: true
                }
            });

            // Bouncy walls
            const walls = [
                Bodies.rectangle(canvas.offsetWidth/2, 0, canvas.offsetWidth, 20, { isStatic: true, render: { fillStyle: '#ff0000' } }),
                Bodies.rectangle(canvas.offsetWidth/2, 384, canvas.offsetWidth, 20, { isStatic: true, render: { fillStyle: '#00ff00' } }),
                Bodies.rectangle(0, 192, 20, 384, { isStatic: true, render: { fillStyle: '#0000ff' } }),
                Bodies.rectangle(canvas.offsetWidth, 192, 20, 384, { isStatic: true, render: { fillStyle: '#ffff00' } })
            ];
            World.add(world, walls);

            Render.run(render);
            Engine.run(engine);

            // Add balls on click
            canvas.addEventListener('click', (e) => {
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                addMegaBall(x, y);
                createEmojiExplosion(e.clientX, e.clientY);
            });
        }

        function addMegaBall(x, y) {
            const colors = ['#ff0000', '#ff8000', '#ffff00', '#00ff00', '#0080ff', '#8000ff', '#ff0080', '#ff69b4'];
            const size = 15 + Math.random() * 30;
            const ball = Matter.Bodies.circle(x, y, size, {
                restitution: 0.95,
                friction: 0.001,
                render: { 
                    fillStyle: rainbowMode ? colors[Math.floor(Math.random() *
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
      
<div className="fixed inset-0 z-0" id="particles-js"></div>

<div className="fixed inset-0 pointer-events-none z-50" id="emoji-explosion"></div>

<div className="fixed top-10 left-10 text-6xl float-wild z-40">🤪</div>
<div className="fixed top-20 right-20 text-6xl mega-bounce z-40">🎉</div>
<div className="fixed bottom-20 left-20 text-6xl spin-crazy z-40">🌈</div>
<div className="fixed bottom-10 right-10 text-6xl insane-wiggle z-40">🚀</div>
<div className="fixed top-1/2 left-1/4 text-6xl earthquake z-40">💥</div>
<div className="fixed top-1/3 right-1/3 text-6xl rainbow-explosion z-40">⭐</div>

<div className="relative z-20 p-4">

<header className="text-center mb-8 opacity-0 animate-pulse pulse-rainbow" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<div className="relative">
<h1 className="text-8xl font-bold text-white mb-4 mega-bounce rainbow-explosion tracking-tight crazy-font">
                    🎪🤪🎊 ULTRA MEGA BONKERS 🎊🤪🎪
                </h1>
<h2 className="text-6xl font-bold text-yellow-300 insane-wiggle crazy-font">
                    🌈💥 EXPLOSION FACTORY 💥🌈
                </h2>
<div className="text-4xl mt-4 spin-crazy">
                    🚀✨🎭🎨🎪🎊🎉🌟⭐💫🔥💥🎯🎲🎮🎰🎳🎸🎺🎷🥳🤯🤩😵‍💫🤖👾🦄🌈🍭🧁🎂🍰
                </div>
</div>
<p className="text-2xl text-white earthquake mt-4 crazy-font">THE MOST INSANELY RIDICULOUS APP IN THE UNIVERSE! 🌌</p>
</header>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8">

<div className="bg-gradient-to-br from-red-500/30 via-yellow-500/30 to-blue-500/30 backdrop-blur-lg rounded-3xl p-6 border-4 border-rainbow pulse-rainbow opacity-0 mega-bounce" style={{animationDelay: '0.3s', animationFillMode: 'forwards', background: 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080)'}}>
<h3 className="text-3xl font-semibold text-white mb-4 flex items-center gap-2 crazy-font">
<span className="mega-bounce text-5xl">⚡💥🔥</span> MEGA CHAOS LEVEL
                </h3>
<div className="bg-black/50 rounded-full h-12 mb-4 overflow-hidden border-4 border-white pulse-rainbow">
<div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full transition-all duration-500 rainbow-explosion insane-wiggle" id="chaos-bar" style={{width: '75%'}}></div>
</div>
<button className="w-full bg-gradient-to-r from-pink-500 via-purple-600 via-blue-600 to-green-500 text-white py-4 px-6 rounded-2xl font-bold text-xl hover:scale-125 transform transition-all duration-300 mega-bounce pulse-rainbow crazy-font" id="chaos-btn">
                    🚀💥 UNLEASH MAXIMUM CHAOS! 💥🚀
                </button>
</div>

<div className="bg-gradient-to-br from-yellow-500/30 via-orange-500/30 to-red-500/30 backdrop-blur-lg rounded-3xl p-6 border-4 border-dashed border-white earthquake opacity-0 insane-wiggle" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
<h3 className="text-3xl font-semibold text-white mb-4 flex items-center gap-2 crazy-font">
<span className="rainbow-explosion text-5xl">😂🤣😆</span> GIGGLE EXPLOSION
                </h3>
<div className="text-center">
<div className="text-8xl font-bold text-yellow-300 mega-bounce rainbow-explosion crazy-font" id="giggle-count">0</div>
<p className="text-white mt-2 text-xl insane-wiggle">TIMES YOU'VE LOST IT! 🤪</p>
<button className="mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-3 px-8 rounded-full font-bold text-lg hover:rotate-45 hover:scale-150 transform transition-all duration-300 spin-crazy pulse-rainbow" id="giggle-btn">
                        🤣💥 I'M DYING! 💥🤣
                    </button>
</div>
</div>

<div className="bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-lg rounded-3xl p-6 border-4 border-dotted border-white float-wild opacity-0 rainbow-explosion" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
<h3 className="text-3xl font-semibold text-white mb-4 flex items-center gap-2 crazy-font">
<span className="mega-bounce text-5xl">🤯🧠💭</span> MIND BLOWN FACTS
                </h3>
<div className="text-white text-lg mb-4 min-h-20 earthquake pulse-rainbow" id="weird-fact">
                    🦄 Unicorns are actually just shy rhinoceros! 🦏✨
                </div>
<button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-4 rounded-2xl font-bold text-lg hover:scale-110 transform transition-all duration-300 insane-wiggle pulse-rainbow crazy-font" id="fact-btn">
                    🤯💥 BLOW MY MIND AGAIN! 💥🤯
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto mb-8 opacity-0 mega-bounce" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
<div className="bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-yellow-500/30 backdrop-blur-lg rounded-3xl p-8 border-8 border-double border-white pulse-rainbow">
<h3 className="text-4xl font-bold text-white mb-6 text-center mega-bounce crazy-font">
                    🎾🌈💥 BOUNCY BALL UNIVERSE OF CHAOS! 💥🌈🎾
                </h3>
<div className="relative">
<canvas className="w-full h-96 bg-black/40 rounded-2xl border-8 border-dashed border-rainbow pulse-rainbow" id="physics-canvas"></canvas>
<div className="absolute top-4 left-4 text-white text-xl font-bold insane-wiggle crazy-font bg-black/50 p-2 rounded-lg">
                        🎈💥 CLICK TO EXPLODE BALLS EVERYWHERE! 💥🎈
                    </div>
</div>
<div className="flex justify-center gap-6 mt-6 flex-wrap">
<button className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-3 px-6 rounded-full font-bold text-lg transform hover:scale-125 transition-all duration-300 earthquake pulse-rainbow" id="clear-balls">
                        🧹💥 CLEAR CHAOS! 💥🧹
                    </button>
<button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-full font-bold text-lg transform hover:scale-125 transition-all duration-300 spin-crazy pulse-rainbow" id="gravity-toggle">
                        🌍🚀 FLIP GRAVITY! 🚀🌍
                    </button>
<button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-full font-bold text-lg transform hover:scale-125 transition-all duration-300 rainbow-explosion pulse-rainbow" id="rainbow-balls">
                        🌈✨ RAINBOW MODE! ✨🌈
                    </button>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
<button className="silly-btn bg-gradient-to-r from-red-400 to-pink-500 text-white py-6 px-4 rounded-3xl font-bold text-lg transform hover:scale-150 transition-all duration-300 opacity-0 mega-bounce pulse-rainbow" data-sound="boing" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
                🎺💥 MEGA BOING! 💥🎺
            </button>
<button className="silly-btn bg-gradient-to-r from-green-400 to-blue-500 text-white py-6 px-4 rounded-3xl font-bold text-lg transform hover:scale-150 transition-all duration-300 opacity-0 insane-wiggle pulse-rainbow" data-sound="honk" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
                📯🚨 ULTRA HONK! 🚨📯
            </button>
<button className="silly-btn bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-6 px-4 rounded-3xl font-bold text-lg transform hover:scale-150 transition-all duration-300 opacity-0 earthquake pulse-rainbow" data-sound="pop" style={{animationDelay: '1.3s', animationFillMode: 'forwards'}}>
                🎈💥 MEGA POP! 💥🎈
            </button>
<button className="silly-btn bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-6 px-4 rounded-3xl font-bold text-lg transform hover:scale-150 transition-all duration-300 opacity-0 spin-crazy pulse-rainbow" data-sound="woosh" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
                💨🌪️ SUPER WOOSH! 🌪️💨
            </button>
<button className="silly-btn bg-gradient-to-r from-pink-400 to-purple-500 text-white py-6 px-4 rounded-3xl font-bold text-lg transform hover:scale-150 transition-all duration-300 opacity-0 float-wild pulse-rainbow" data-sound="pow" style={{animationDelay: '1.5s', animationFillMode: 'forwards'}}>
                💥⚡ MEGA POW! ⚡💥
            </button>
<button className="silly-btn bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-6 px-4 rounded-3xl font-bold text-lg transform hover:scale-150 transition-all duration-300 opacity-0 rainbow-explosion pulse-rainbow" data-sound="zap" style={{animationDelay: '1.6s', animationFillMode: 'forwards'}}>
                ⚡🔥 ULTRA ZAP! 🔥⚡
            </button>
</div>

<div className="max-w-6xl mx-auto text-center mb-8">
<h3 className="text-5xl font-bold text-white mb-8 insane-wiggle crazy-font">🕺💃 MEET THE ULTIMATE DANCE CREW! 💃🕺</h3>
<div className="grid grid-cols-4 md:grid-cols-8 gap-6 justify-center">
<div className="dancing-char mega-bounce text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="spin">🐱</div>
<div className="dancing-char insane-wiggle text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="bounce">🐶</div>
<div className="dancing-char earthquake text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="wiggle">🐸</div>
<div className="dancing-char rainbow-explosion text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="rainbow">🦄</div>
<div className="dancing-char spin-crazy text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="spin">🤖</div>
<div className="dancing-char float-wild text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="float">👾</div>
<div className="dancing-char mega-bounce text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="bounce">🎭</div>
<div className="dancing-char insane-wiggle text-8xl cursor-pointer hover:scale-200 transform transition-all duration-300 pulse-rainbow" data-dance="wiggle">🎪</div>
</div>
</div>

<div className="max-w-6xl mx-auto text-center mb-8">
<button className="bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-pink-500 text-white py-8 px-16 rounded-full font-bold text-3xl hover:scale-150 transform transition-all duration-300 mega-bounce pulse-rainbow crazy-font" id="ultimate-chaos">
                🌈💥🚀 ACTIVATE ULTIMATE CHAOS MODE! 🚀💥🌈
            </button>
</div>
</div>

    </>
  );
}
