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
      
  const SHAPES = [
    {
      name: 'circle',
      color: '#a78bfa',
      stroke: '#7c3aed',
      matter: (x, y) => Matter.Bodies.circle(x, y, 33, { restitution:0.8 }),
      isMatch: (body, target) => body.shapeType === target && body.circleRadius && body.circleRadius >= 29,
    },
    {
      name: 'square',
      color: '#fde68a',
      stroke: '#f59e42',
      matter: (x, y) => Matter.Bodies.rectangle(x, y, 66, 66, { restitution:0.7 }),
      isMatch: (body, target) => body.shapeType === target && body.bounds.max.x - body.bounds.min.x >= 54,
    },
    {
      name: 'triangle',
      color: '#f472b6',
      stroke: '#be185d',
      matter: (x, y) => Matter.Bodies.polygon(x, y, 3, 36, { restitution:0.7 }),
      isMatch: (body, target) => body.shapeType === target && body.vertices.length === 3,
    },
    {
      name: 'pentagon',
      color: '#34d399',
      stroke: '#059669',
      matter: (x, y) => Matter.Bodies.polygon(x, y, 5, 34, { restitution:0.7 }),
      isMatch: (body, target) => body.shapeType === target && body.vertices.length === 5,
    },
    {
      name: 'star',
      color: '#38bdf8',
      stroke: '#0ea5e9',
      matter: (x, y) => {
        const points = [];
        const cx = x, cy = y, spikes = 5, outer = 34, inner = 14;
        let rot = Math.PI / 2 * 3;
        let step = Math.PI / spikes;
        for (let i = 0; i < spikes; i++) {
          points.push({
            x: cx + Math.cos(rot) * outer,
            y: cy + Math.sin(rot) * outer
          });
          rot += step;
          points.push({
            x: cx + Math.cos(rot) * inner,
            y: cy + Math.sin(rot) * inner
          });
          rot += step;
        }
        return Matter.Bodies.fromVertices(x, y, [points], { restitution:0.5 });
      },
      isMatch: (body, target) => body.shapeType === target && body.vertices.length >= 10,
 },
  ];

  const TARGETS = [
    { name: 'circle', x: 70, y: 370 },
    { name: 'square', x: 170, y: 370 },
    { name: 'triangle', x: 270, y: 370 },
    { name: 'pentagon', x: 370, y: 370 },
    { name: 'star', x: 480, y: 370 }
  ];

  function playSound(id) {
    try {
      const a = document.getElementById(id);
      a.currentTime = 0;
      a.play();
    } catch {}
  }

  let engine, render, runner, mouseConstraint, world, allBodies = [], matches = {}, lockedBodies = {};
  const W = 600, H = 400;
  let resetting = false;

  // Helper to fully stop and clean up Matter.js
  function cleanupMatter() {
    if (runner) {
      Matter.Runner.stop(runner);
      runner = null;
    }
    if (render) {
      Matter.Render.stop(render);
      if (render.canvas && render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
      render.canvas = null;
      render = null;
    }
    engine = null;
    world = null;
    allBodies = [];
    matches = {};
    lockedBodies = {};
  }

  function setupPhysics() {
    resetting = true;
    cleanupMatter();

    // Create new canvas
    let canvas = document.createElement('canvas');
    canvas.id = "game-canvas";
    canvas.width = W;
    canvas.height = H;
    canvas.className = "block w-[600px] h-[400px] mx-auto shadow-xl";
    let oldCanvas = document.getElementById('game-canvas');
    if (oldCanvas && oldCanvas.parentNode) {
      oldCanvas.parentNode.insertBefore(canvas, oldCanvas);
      oldCanvas.parentNode.removeChild(oldCanvas);
    } else {
      // It's first load, add to DOM
      let mainDiv = document.querySelector(".relative.w-\\[650px\\]");
      if(mainDiv && !document.getElementById('game-canvas')) {
        mainDiv.insertBefore(canvas, mainDiv.children[1]);
      }
    }

    engine = Matter.Engine.create();
    world = engine.world;
    world.gravity.y = 0.95;

    render = Matter.Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: W,
        height: H,
        wireframes: false,
        background: '#fff8f5'
      }
    });

    const wallOpts = { isStatic: true, render: { visible: false } };
    Matter.World.add(world, [
      Matter.Bodies.rectangle(W/2, -20, W, 40, wallOpts),
      Matter.Bodies.rectangle(W/2, H+20, W, 40, wallOpts),
      Matter.Bodies.rectangle(-20, H/2, 40, H, wallOpts),
      Matter.Bodies.rectangle(W+20, H/2, 40, H, wallOpts)
    ]);

    allBodies = [];
    lockedBodies = {};
    matches = {};
    // Each time, randomize order and start from top
    const xStarts = [70, 170, 270, 370, 480];
    const shuffledIndices = Matter.Common.shuffle([...Array(SHAPES.length).keys()]);
    for (let i = 0; i < SHAPES.length; ++i) {
      const shape = SHAPES[shuffledIndices[i]];
      // Place at top with small random offset for variety
      const body = shape.matter(xStarts[i], 60 + Math.random()*10);
      body.shapeType = shape.name;
      body.render.fillStyle = shape.color;
      body.render.strokeStyle = shape.stroke;
      body.render.lineWidth = 4;
      body.render.opacity = 1;
      allBodies.push(body);
    }
    Matter.World.add(world, allBodies);

    mouseConstraint = Matter.MouseConstraint.create(engine, {
      element: render.canvas,
      constraint: {
        stiffness: 0.8,
        render: { visible: false }
      }
    });
    Matter.World.add(world, mouseConstraint);

    Matter.Render.run(render);
    runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    render.mouse = mouseConstraint.mouse;

    Matter.Events.on(mouseConstraint, "enddrag", function(ev) {
      const body = ev.body;
      if (!body || lockedBodies[body.id]) return;
      checkMatch(body);
    });

    Matter.Events.on(mouseConstraint, "startdrag", function(ev) {
      const body = ev.body;
      if (body && !lockedBodies[body.id]) {
        Matter.Body.setAngularVelocity(body, 0);
        body.render.opacity = 1;
      }
    });

    Matter.Events.on(engine, "afterUpdate", function() {
      if (Object.keys(matches).length === SHAPES.length) {
        document.getElementById('message').classList.remove('hidden');
        launchConfetti();
        playSound('snd-win');
      }
    });

    resetTargetsUI();
    document.getElementById('message').classList.add('hidden');
    document.getElementById('confetti').innerHTML = '';
    resetting = false;
  }

  function checkMatch(body) {
    let best = null, bestDist = 99999, bestName = null;
    for (const t of TARGETS) {
      const dx = body.position.x - t.x;
      const dy = body.position.y - t.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 48 && dist < bestDist && !matches[t.name]) {
        best = t;
        bestDist = dist;
        bestName = t.name;
      }
    }
    if (best && body.shapeType === bestName) {
      Matter.Body.setPosition(body, { x: best.x, y: best.y });
      Matter.Body.setVelocity(body, { x: 0, y: 0 });
      Matter.Body.setAngularVelocity(body, 0);
      Matter.Body.setAngle(body, 0);
      body.isStatic = true;
      body.render.opacity = 0.7;
      lockedBodies[body.id] = true;
      matches[bestName] = true;
      highlightTarget(bestName, true);
      playSound('snd-snap');
      checkWin();
    } else {
      playSound('snd-error');
      highlightTarget(bestName, false);
    }
  }

  function highlightTarget(name, correct) {
    let el = document.querySelector(`[data-shape="${name}"]`);
    if (!el) return;
    if (correct) {
      el.style.borderColor = "#4ade80";
      el.style.background = "#d1fae5";
    } else {
      el.style.borderColor = "#f87171";
      el.style.background = "#fee2e2";
      setTimeout(() => {
        el.style.borderColor = "";
        el.style.background = "";
      }, 350);
    }
  }
  function resetTargetsUI() {
    for (const s of SHAPES) {
      let el = document.querySelector(`[data-shape="${s.name}"]`);
      if (!el) continue;
      el.style.borderColor = "";
      el.style.background = "";
    }
  }

  function launchConfetti() {
    const confetti = document.getElementById('confetti');
    confetti.innerHTML = '';
    const colors = ['#f472b6', '#fbbf24', '#a78bfa', '#4ade80', '#38bdf8', '#f87171', '#34d399'];
    for (let i = 0; i < 58; i++) {
      const div = document.createElement('div');
      div.className = 'confetti-piece';
      div.style.left = (Math.random() * 550 + 20) + 'px';
      div.style.top = (-20 + Math.random() * 10) + 'px';
      div.style.background = colors[Math.floor(Math.random() * colors.length)];
      div.style.transform = `rotate(${Math.random()*360}deg)`;
      div.style.animationDuration = (1 + Math.random() * 0.8) + 's';
      confetti.appendChild(div);
    }
  }

  function checkWin() {
    if (Object.keys(matches).length === SHAPES.length) {
      document.getElementById('message').classList.remove('hidden');
      launchConfetti();
      playSound('snd-win');
    }
  }

  document.getElementById('reset-btn').onclick = () => {
    const btn = document.getElementById('reset-btn');
    btn.disabled = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    setTimeout(() => {
      btn.disabled = false;
      btn.classList.remove('opacity-50', 'cursor-not-allowed');
    }, 700);
    setupPhysics();
  };
  document.querySelector('header a').onclick = e => {
    e.preventDefault();
    setupPhysics();
  };
  window.addEventListener('resize', () => setTimeout(setupPhysics, 200));

  setupPhysics();
  
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
      
<header className="w-full py-7 bg-white shadow z-10 relative">
<div className="container mx-auto px-4 flex items-center justify-between">
<h1 className="text-3xl font-extrabold text-pink-600">Physics Shape Matcher</h1>
<a className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition" href="#">Play Again</a>
</div>
</header>
<main className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh]">
<section className="w-full max-w-3xl mt-10 text-center">
<h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Match the Falling Shapes!</h2>
<p className="text-lg text-gray-700 mb-8">
        Drag the falling shapes onto their shadows below. Get every match for a surprise!
      </p>
</section>
<div className="relative w-[650px] h-[480px] flex flex-col items-center justify-center">

<div className="pointer-events-none absolute top-0 left-0 w-full h-full z-50" id="confetti"></div>

<canvas className="block w-[600px] h-[400px] mx-auto shadow-xl" height="400" id="game-canvas" width="600"></canvas>

<div className="absolute left-0 bottom-2 w-full flex justify-around pointer-events-none z-20" id="targets">
<div className="outline-target flex flex-col items-center" data-shape="circle" style={{width: `85px`}}>
<svg height="80" width="80">
<circle cx="40" cy="40" fill="#fff" r="33" stroke="#a78bfa" strokeWidth="7"></circle>
</svg>
<span className="mt-1 text-xs text-gray-400">Circle</span>
</div>
<div className="outline-target flex flex-col items-center" data-shape="square" style={{width: `85px`}}>
<svg height="80" width="80">
<rect fill="#fff" height="52" stroke="#fbbf24" strokeWidth="7" width="52" x="14" y="14"></rect>
</svg>
<span className="mt-1 text-xs text-gray-400">Square</span>
</div>
<div className="outline-target flex flex-col items-center" data-shape="triangle" style={{width: `85px`}}>
<svg height="80" width="80">
<polygon fill="#fff" points="40,16 68,68 12,68" stroke="#f472b6" strokeWidth="7"></polygon>
</svg>
<span className="mt-1 text-xs text-gray-400">Triangle</span>
</div>
<div className="outline-target flex flex-col items-center" data-shape="pentagon" style={{width: `85px`}}>
<svg height="80" width="80">
<polygon fill="#fff" points="40,10 70,32 58,70 22,70 10,32" stroke="#34d399" strokeWidth="7"></polygon>
</svg>
<span className="mt-1 text-xs text-gray-400">Pentagon</span>
</div>
<div className="outline-target flex flex-col items-center" data-shape="star" style={{width: `85px`}}>
<svg height="80" width="80">
<polygon fill="#fff" points="40,12 47,35 72,35 52,50 60,73 40,59 20,73 28,50 8,35 33,35" stroke="#38bdf8" strokeWidth="7"></polygon>
</svg>
<span className="mt-1 text-xs text-gray-400">Star</span>
</div>
</div>
</div>
<div className="mt-8 text-2xl font-bold text-green-700 hidden" id="message">
      🎉 Hooray! All shapes matched!
    </div>
<button className="mt-8 px-6 py-2 bg-pink-500 hover:bg-pink-700 text-white font-semibold rounded-lg shadow transition" id="reset-btn">Reset Game</button>
</main>
<footer className="text-center text-gray-400 py-6 mt-10">
    Made for curious kids — Physics Shape Matcher © 2024
  </footer>

<audio id="snd-snap" src="https://cdn.pixabay.com/audio/2022/07/26/audio_123sfa92.mp3"></audio>
<audio id="snd-error" src="https://cdn.pixabay.com/audio/2022/11/16/audio_12bde8f83a.mp3"></audio>
<audio id="snd-win" src="https://cdn.pixabay.com/audio/2022/08/20/audio_12b6c9f4d6.mp3"></audio>


    </>
  );
}
