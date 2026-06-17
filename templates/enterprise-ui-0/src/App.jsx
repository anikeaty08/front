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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
obsidian: '#09090b',
charcoal: '#18181b',
concrete: '#f4f4f5',
acid: '#ccff00',
danger: '#ff453a',
void: '#000000',
surface: '#0a0a0a',
panel: '#111111',
border: '#222222',
accent: '#ff3300',
success: '#00cc66',
error: '#ff3300',
lime: '#ccff00',
dim: '#444444',
muted: '#525252',
text: '#e5e5e5',
warning: '#ffaa00',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'spin-slow': 'spin 1s linear infinite',
'morph': 'morph 8s ease-in-out infinite',
'draw': 'draw 0.4s ease-out forwards',
},
keyframes: {
float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
morph: {
'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
'50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
},
draw: { 'to': { strokeDashoffset: '0' } }
}
}
}
}



                            const renderSection = (title, icons) => {
                                document.write(`
                                    <section class="mb-16">
                                        <h2 class="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-6">${title}</h2>
                                        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                            ${icons.map(id => `
                                                <div class="icon-card group flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-900/50 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer transition-all duration-200">
                                                    <svg class="w-6 h-6 icon-base mb-4 text-zinc-900 dark:text-white"><use href="#${id}"></use></svg>
                                                    <span class="text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">${id.split('-')[1]}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </section>
                                `);
                            };

                            renderSection('Navigation', [
                                'nav-dashboard', 'nav-projects', 'nav-tasks', 'nav-calendar',
                                'nav-messages', 'nav-team', 'nav-reports', 'nav-settings'
                            ]);

                            renderSection('Actions', [
                                'act-add', 'act-edit', 'act-delete', 'act-save', 'act-cancel',
                                'act-upload', 'act-download', 'act-share', 'act-print', 'act-export'
                            ]);
                        


                        const COLORS = {
                            bg: '#0a0a0a',
                            grid: '#262626',
                            white: '#ffffff',
                            grey: '#404040',
                            darkGrey: '#171717',
                            accent: '#ff3300'
                        };

                        const map = (val, inMin, inMax, outMin, outMax) => (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

                        const getBezierPath = (points, height) => {
                            let d = `M ${points[0].x},${points[0].y}`;
                            for (let i = 1; i < points.length; i++) {
                                const prev = points[i - 1];
                                const curr = points[i];
                                const cp1x = prev.x + (curr.x - prev.x) * 0.5;
                                const cp1y = prev.y;
                                const cp2x = curr.x - (curr.x - prev.x) * 0.5;
                                const cp2y = curr.y;
                                d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${curr.x},${curr.y}`;
                            }
                            return d;
                        };

                        class ChartRenderer {
                            constructor(containerId) {
                                this.container = document.getElementById(containerId);
                                if (!this.container) return;
                                this.width = this.container.offsetWidth;
                                this.height = this.container.offsetHeight;
                                this.ns = "http://www.w3.org/2000/svg";
                            }

                            clear() {
                                if (this.container) this.container.innerHTML = '';
                            }

                            createSVG() {
                                const svg = document.createElementNS(this.ns, "svg");
                                svg.setAttribute("width", "100%");
                                svg.setAttribute("height", "100%");
                                svg.setAttribute("viewBox", `0 0 ${this.width} ${this.height}`);
                                return svg;
                            }

                            drawLine(data1, data2) {
                                const svg = this.createSVG();
                                const padding = 20;

                                for(let i=0; i<5; i++) {
                                    const y = map(i, 0, 4, this.height - padding, padding);
                                    const line = document.createElementNS(this.ns, "line");
                                    line.setAttribute("x1", 0);
                                    line.setAttribute("y1", y);
                                    line.setAttribute("x2", this.width);
                                    line.setAttribute("y2", y);
                                    line.setAttribute("class", "grid-line");
                                    svg.appendChild(line);
                                }

                                const drawPath = (data, color, isArea = false) => {
                                    const points = data.map((val, i) => ({
                                        x: map(i, 0, data.length - 1, 0, this.width),
                                        y: map(val, 0, 100, this.height - padding, padding)
                                    }));

                                    let d = getBezierPath(points);

                                    if(isArea) {
                                        d += ` L ${this.width},${this.height} L 0,${this.height} Z`;
                                        const path = document.createElementNS(this.ns, "path");
                                        path.setAttribute("d", d);
                                        path.setAttribute("fill", color);
                                        path.setAttribute("opacity", "0.1");
                                        path.setAttribute("class", "fade-in");
                                        svg.appendChild(path);
                                    } else {
                                        const path = document.createElementNS(this.ns, "path");
                                        path.setAttribute("d", d);
                                        path.setAttribute("fill", "none");
                                        path.setAttribute("stroke", color);
                                        path.setAttribute("stroke-width", "2");
                                        path.setAttribute("class", "draw-path");
                                        svg.appendChild(path);

                                        points.forEach((p, i) => {
                                            const circle = document.createElementNS(this.ns, "circle");
                                            circle.setAttribute("cx", p.x);
                                            circle.setAttribute("cy", p.y);
                                            circle.setAttribute("r", "3");
                                            circle.setAttribute("fill", "#0a0a0a");
                                            circle.setAttribute("stroke", color);
                                            circle.setAttribute("stroke-width", "2");
                                            circle.setAttribute("class", "fade-in");
                                            circle.style.animationDelay = `${0.5 + (i * 0.1)}s`;

                                            circle.addEventListener('mouseenter', (e) => showTooltip(e, data[i] + '%'));
                                            circle.addEventListener('mouseleave', hideTooltip);

                                            svg.appendChild(circle);
                                        });
                                    }
                                };

                                drawPath(data1, COLORS.white);
                                drawPath(data2, COLORS.accent);

                                this.container.appendChild(svg);
                            }

                            drawBar(data) {
                                const svg = this.createSVG();
                                const barWidth = (this.width / data.length) * 0.6;
                                const spacing = (this.width / data.length);

                                data.forEach((val, i) => {
                                    const h = map(val, 0, 100, 0, this.height);
                                    const x = (i * spacing) + (spacing/2) - (barWidth/2);
                                    const y = this.height - h;

                                    const rect = document.createElementNS(this.ns, "rect");
                                    rect.setAttribute("x", x);
                                    rect.setAttribute("y", y);
                                    rect.setAttribute("width", barWidth);
                                    rect.setAttribute("height", h);
                                    rect.setAttribute("fill", i === data.length - 1 ? COLORS.accent : COLORS.grey);
                                    rect.setAttribute("class", "grow-bar");
                                    rect.style.animationDelay = `${i * 0.05}s`;

                                    rect.addEventListener('mouseenter', (e) => {
                                        rect.setAttribute("fill", COLORS.white);
                                        showTooltip(e, val);
                                    });
                                    rect.addEventListener('mouseleave', () => {
                                        rect.setAttribute("fill", i === data.length - 1 ? COLORS.accent : COLORS.grey);
                                        hideTooltip();
                                    });

                                    svg.appendChild(rect);
                                });
                                this.container.appendChild(svg);
                            }

                            drawRadar(data) {
                                const svg = this.createSVG();
                                const cx = this.width / 2;
                                const cy = this.height / 2;
                                const radius = Math.min(this.width, this.height) / 2 - 20;
                                const sides = data.length;

                                [0.3, 0.6, 1].forEach(scale => {
                                    const pts = [];
                                    for(let i=0; i<sides; i++) {
                                        const angle = (Math.PI * 2 * i) / sides - (Math.PI/2);
                                        pts.push(`${cx + (radius * scale) * Math.cos(angle)},${cy + (radius * scale) * Math.sin(angle)}`);
                                    }
                                    const poly = document.createElementNS(this.ns, "polygon");
                                    poly.setAttribute("points", pts.join(" "));
                                    poly.setAttribute("fill", "none");
                                    poly.setAttribute("stroke", COLORS.grid);
                                    svg.appendChild(poly);
                                });

                                const dataPts = data.map((val, i) => {
                                    const angle = (Math.PI * 2 * i) / sides - (Math.PI/2);
                                    const r = map(val, 0, 100, 0, radius);
                                    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
                                });

                                const shape = document.createElementNS(this.ns, "polygon");
                                shape.setAttribute("points", dataPts.join(" "));
                                shape.setAttribute("fill", COLORS.accent);
                                shape.setAttribute("fill-opacity", "0.2");
                                shape.setAttribute("stroke", COLORS.accent);
                                shape.setAttribute("stroke-width", "2");
                                shape.setAttribute("class", "fade-in");
                                svg.appendChild(shape);

                                this.container.appendChild(svg);
                            }

                            drawDonut(data) {
                                const svg = this.createSVG();
                                const total = data.reduce((a, b) => a + b, 0);
                                let currentAngle = 0;
                                const cx = this.width / 2;
                                const cy = this.height / 2;
                                const radius = Math.min(this.width, this.height) / 2 - 10;
                                const hole = radius * 0.6;

                                const colors = [COLORS.grey, COLORS.white, COLORS.accent];

                                data.forEach((val, i) => {
                                    const sliceAngle = (val / total) * 2 * Math.PI;
                                    const x1 = cx + radius * Math.cos(currentAngle);
                                    const y1 = cy + radius * Math.sin(currentAngle);
                                    const x2 = cx + radius * Math.cos(currentAngle + sliceAngle);
                                    const y2 = cy + radius * Math.sin(currentAngle + sliceAngle);

                                    const largeArc = sliceAngle > Math.PI ? 1 : 0;

                                    const d = [
                                        `M ${cx} ${cy}`,
                                        `L ${x1} ${y1}`,
                                        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
                                        `Z`
                                    ].join(" ");

                                    const path = document.createElementNS(this.ns, "path");
                                    path.setAttribute("d", d);
                                    path.setAttribute("fill", colors[i % colors.length]);
                                    path.setAttribute("stroke", COLORS.bg);
                                    path.setAttribute("stroke-width", "2");

                                    path.addEventListener('mouseenter', (e) => {
                                        path.style.transform = "scale(1.05)";
                                        path.style.transformOrigin = "center";
                                        path.style.transition = "transform 0.3s";
                                        showTooltip(e, Math.round((val/total)*100) + '%');
                                    });
                                    path.addEventListener('mouseleave', () => {
                                        path.style.transform = "scale(1)";
                                        hideTooltip();
                                    });

                                    svg.appendChild(path);
                                    currentAngle += sliceAngle;
                                });

                                const circle = document.createElementNS(this.ns, "circle");
                                    circle.setAttribute("cx", cx);
                                    circle.setAttribute("cy", cy);
                                    circle.setAttribute("r", hole);
                                    circle.setAttribute("fill", COLORS.bg);
                                    svg.appendChild(circle);

                                    const text = document.createElementNS(this.ns, "text");
                                    text.setAttribute("x", cx);
                                    text.setAttribute("y", cy + 5);
                                    text.setAttribute("text-anchor", "middle");
                                    text.setAttribute("fill", COLORS.text);
                                    text.setAttribute("font-family", "JetBrains Mono");
                                    text.setAttribute("font-size", "14");
                                    text.textContent = "TOTAL";
                                    svg.appendChild(text);

                                    this.container.appendChild(svg);
                                }

                                drawArea(data) {
                                    const svg = this.createSVG();
                                    const padding = 0;

                                    const defs = document.createElementNS(this.ns, "defs");
                                    const grad = document.createElementNS(this.ns, "linearGradient");
                                    grad.setAttribute("id", "areaGrad");
                                    grad.setAttribute("x1", "0%");
                                    grad.setAttribute("y1", "0%");
                                    grad.setAttribute("x2", "0%");
                                    grad.setAttribute("y2", "100%");

                                    const stop1 = document.createElementNS(this.ns, "stop");
                                    stop1.setAttribute("offset", "0%");
                                    stop1.setAttribute("stop-color", COLORS.white);
                                    stop1.setAttribute("stop-opacity", "0.5");

                                    const stop2 = document.createElementNS(this.ns, "stop");
                                    stop2.setAttribute("offset", "100%");
                                    stop2.setAttribute("stop-color", COLORS.bg);
                                    stop2.setAttribute("stop-opacity", "0");

                                    grad.appendChild(stop1);
                                    grad.appendChild(stop2);
                                    defs.appendChild(grad);
                                    svg.appendChild(defs);

                                    const points = data.map((val, i) => ({
                                        x: map(i, 0, data.length - 1, 0, this.width),
                                        y: map(val, 0, 100, this.height, 20)
                                    }));

                                    let d = getBezierPath(points);
                                    d += ` L ${this.width},${this.height} L 0,${this.height} Z`;

                                    const path = document.createElementNS(this.ns, "path");
                                    path.setAttribute("d", d);
                                    path.setAttribute("fill", "url(#areaGrad)");
                                    path.setAttribute("stroke", COLORS.white);
                                    path.setAttribute("stroke-width", "2");
                                    path.setAttribute("class", "fade-in");

                                    svg.addEventListener('mousemove', (e) => {
                                        const rect = svg.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const index = Math.round(map(x, 0, this.width, 0, data.length-1));
                                        const point = points[index];

                                        const old = svg.querySelector('.crosshair');
                                        if(old) old.remove();

                                        if(point) {
                                            const group = document.createElementNS(this.ns, "g");
                                            group.setAttribute("class", "crosshair");

                                            const line = document.createElementNS(this.ns, "line");
                                            line.setAttribute("x1", point.x);
                                            line.setAttribute("y1", 0);
                                            line.setAttribute("x2", point.x);
                                            line.setAttribute("y2", this.height);
                                            line.setAttribute("stroke", COLORS.accent);
                                            line.setAttribute("stroke-dasharray", "4 4");

                                            const circle = document.createElementNS(this.ns, "circle");
                                            circle.setAttribute("cx", point.x);
                                            circle.setAttribute("cy", point.y);
                                            circle.setAttribute("r", 4);
                                            circle.setAttribute("fill", COLORS.accent);

                                            group.appendChild(line);
                                            group.appendChild(circle);
                                            svg.appendChild(group);

                                            showTooltip(e, data[index]);
                                        }
                                    });

                                    svg.addEventListener('mouseleave', () => {
                                        const old = svg.querySelector('.crosshair');
                                        if(old) old.remove();
                                        hideTooltip();
                                    });

                                    svg.appendChild(path);
                                    this.container.appendChild(svg);
                                }
                            }

                            const tooltip = document.getElementById('tooltip');
                            function showTooltip(e, content) {
                                if (!tooltip) return;
                                tooltip.textContent = content;
                                tooltip.style.opacity = 1;
                                tooltip.style.left = (e.pageX + 10) + 'px';
                                tooltip.style.top = (e.pageY + 10) + 'px';
                            }
                            function hideTooltip() {
                                if (!tooltip) return;
                                tooltip.style.opacity = 0;
                            }

                            function randomizeData() {
                                const r = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                                const rArr = (len) => Array.from({length: len}, () => r(20, 90));

                                new ChartRenderer('line-chart').clear();
                                new ChartRenderer('line-chart').drawLine(rArr(10), rArr(10));

                                new ChartRenderer('radar-chart').clear();
                                new ChartRenderer('radar-chart').drawRadar([r(40,100), r(40,100), r(40,100), r(40,100), r(40,100)]);

                                new ChartRenderer('bar-chart').clear();
                                new ChartRenderer('bar-chart').drawBar(rArr(8));

                                new ChartRenderer('donut-chart').clear();
                                new ChartRenderer('donut-chart').drawDonut([30, 20, 50]);

                                new ChartRenderer('area-chart').clear();
                                new ChartRenderer('area-chart').drawArea(rArr(15));
                            }

                            window.addEventListener('load', randomizeData);
                            window.addEventListener('resize', randomizeData);
                        


                                (function() {
                                    const canvas = document.getElementById('fog-canvas-sec12');
                                    if(!canvas) return;
                                    const ctx = canvas.getContext('2d');
                                    let width, height;
                                    function resize() {
                                        width = canvas.width = canvas.parentElement.offsetWidth;
                                        height = canvas.height = canvas.parentElement.offsetHeight;
                                    }
                                    window.addEventListener('resize', resize);
                                    setTimeout(resize, 100); 

                                    const blobs = [
                                        { x: 0, y: 0, r: 0, vx: 0.3, vy: 0.2, color: 'rgba(255, 255, 255, 0.03)' },
                                        { x: 0, y: 0, r: 0, vx: -0.2, vy: 0.3, color: 'rgba(100, 100, 100, 0.05)' },
                                    ];
                                    function initBlobs() {
                                        blobs.forEach(b => {
                                            b.x = Math.random() * width;
                                            b.y = Math.random() * height;
                                            b.r = Math.min(width, height) * 0.5;
                                        });
                                    }
                                    initBlobs();
                                    function animateFog() {
                                        ctx.clearRect(0, 0, width, height);
                                        ctx.fillStyle = '#050505';
                                        ctx.fillRect(0, 0, width, height);
                                        blobs.forEach(b => {
                                            b.x += b.vx;
                                            b.y += b.vy;
                                            if(b.x < -b.r || b.x > width + b.r) b.vx *= -1;
                                            if(b.y < -b.r || b.y > height + b.r) b.vy *= -1;
                                            const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
                                            gradient.addColorStop(0, b.color);
                                            gradient.addColorStop(1, 'rgba(0,0,0,0)');
                                            ctx.fillStyle = gradient;
                                            ctx.beginPath();
                                            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
                                            ctx.fill();
                                        });
                                        requestAnimationFrame(animateFog);
                                    }
                                    animateFog();
                                })();
                            


    lucide.createIcons();

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
      
<div className="flex flex-col h-screen w-full">

<header className="w-full h-14 bg-surface border-b border-border flex items-center justify-between px-4 sm:px-6 relative z-50 shrink-0">

<div className="flex items-center gap-4">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-acid rounded-sm group-hover:bg-white transition-colors"></div>
<h1 className="font-bold tracking-tight text-white text-sm">ONYX <span className="text-zinc-500 font-normal">SYSTEMS</span></h1>
</div>

<div className="hidden md:flex items-center">
<span className="text-border mx-2 text-xl font-thin">/</span>
<div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 transition-colors cursor-pointer">
<span className="text-xs text-zinc-400 font-mono">Workspace</span>
<i className="w-3 h-3 text-zinc-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative group">
<input className="bg-panel border border-border rounded-md py-1.5 pl-9 pr-24 text-xs text-zinc-300 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 w-80 transition-all placeholder:text-zinc-600" placeholder="Search documentation..." type="text"/>
<i className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-white transition-colors" data-lucide="search"></i>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<span className="text-[10px] text-zinc-600 font-mono border border-zinc-800 rounded px-1.5 py-0.5">Ctrl K</span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 text-zinc-400 hover:text-white transition-colors relative">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-acid rounded-full border border-surface"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
<div className="h-5 w-px bg-border mx-1"></div>
<div className="flex items-center gap-2 pl-1 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500"></div>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<aside className="w-64 border-r border-border bg-surface hidden lg:flex flex-col justify-between h-full">
<div className="p-4 border-b border-border">
<div className="text-[10px] font-mono text-dim uppercase tracking-wider mb-2">Current Context</div>
<div className="flex items-center gap-2 text-sm text-white font-medium">
<i className="w-4 h-4 text-acid" data-lucide="folder-open"></i>
                    Library v2.0
                </div>
</div>
<nav className="flex-1 overflow-y-auto custom-scroll p-4 space-y-1">
<div className="px-3 py-2 text-[10px] font-mono text-dim uppercase tracking-wider">Components</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors group" href="#section-14">
<i className="w-4 h-4 text-dim group-hover:text-acid" data-lucide="grid"></i>
                    Icon System
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors group" href="#section-15">
<i className="w-4 h-4 text-dim group-hover:text-acid" data-lucide="bar-chart-2"></i>
                    Axis Visuals
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors group" href="#section-20">
<i className="w-4 h-4 text-dim group-hover:text-acid" data-lucide="zap"></i>
                    Kinetic Library
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors group" href="#section-24">
<i className="w-4 h-4 text-dim group-hover:text-acid" data-lucide="layers"></i>
                    Onyx Assets
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors group" href="#section-25">
<i className="w-4 h-4 text-dim group-hover:text-acid" data-lucide="box"></i>
                    Onyx UI
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors group" href="#section-12-nexus">
<i className="w-4 h-4 text-dim group-hover:text-acid" data-lucide="cpu"></i>
                    Nexus Pro
                </a>
</nav>
<div className="p-4 border-t border-border">
<div className="bg-panel rounded border border-border p-3">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] text-zinc-400 font-mono">Storage</span>
<span className="text-[10px] text-white">82%</span>
</div>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
<div className="bg-acid h-full rounded-full w-[82%]"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto custom-scroll min-w-0 bg-grid relative h-full">
<div className="noise"></div>
<div id="tooltip"></div>
<div className="w-full px-6 md:px-12 py-12">

<section className="w-full mb-24" id="section-14">
<div className="section-header">SECTION 1: SaaS Icon System // Agency Grade (File 14)</div>

<svg style={{display: 'none'}}>
<defs>

<symbol id="nav-dashboard" viewbox="0 0 24 24"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></symbol>
<symbol id="nav-projects" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></symbol>
<symbol id="nav-tasks" viewbox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></symbol>
<symbol id="nav-calendar" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></symbol>
<symbol id="nav-messages" viewbox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></symbol>
<symbol id="nav-team" viewbox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></symbol>
<symbol id="nav-reports" viewbox="0 0 24 24"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></symbol>
<symbol id="nav-settings" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></symbol>

<symbol id="act-add" viewbox="0 0 24 24"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></symbol>
<symbol id="act-edit" viewbox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></symbol>
<symbol id="act-delete" viewbox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></symbol>
<symbol id="act-save" viewbox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></symbol>
<symbol id="act-cancel" viewbox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></symbol>
<symbol id="act-upload" viewbox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></symbol>
<symbol id="act-download" viewbox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></symbol>
<symbol id="act-share" viewbox="0 0 24 24"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></symbol>
<symbol id="act-print" viewbox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect height="8" width="12" x="6" y="14"></rect></symbol>
<symbol id="act-export" viewbox="0 0 24 24"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path><polyline points="7 11 12 16 17 11"></polyline><line x1="12" x2="12" y1="16" y2="4"></line></symbol>

<symbol id="stat-success" viewbox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></symbol>
<symbol id="stat-error" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></symbol>
<symbol id="stat-warning" viewbox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></symbol>
<symbol id="stat-info" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></symbol>
<symbol id="stat-loading" viewbox="0 0 24 24"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></symbol>
<symbol id="stat-pending" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></symbol>

<symbol id="comm-email" viewbox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></symbol>
<symbol id="comm-phone" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></symbol>
<symbol id="comm-chat" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></symbol>
<symbol id="comm-video" viewbox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect></symbol>
<symbol id="comm-notify" viewbox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></symbol>
<symbol id="comm-comment" viewbox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></symbol>
<symbol id="comm-mention" viewbox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></symbol>
<symbol id="comm-reaction" viewbox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></symbol>

<symbol id="cont-doc" viewbox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></symbol>
<symbol id="cont-image" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></symbol>
<symbol id="cont-video" viewbox="0 0 24 24"><rect height="20" rx="2.18" ry="2.18" width="20" x="2" y="2"></rect><line x1="7" x2="7" y1="2" y2="22"></line><line x1="17" x2="17" y1="2" y2="22"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="2" x2="7" y1="7" y2="7"></line><line x1="2" x2="7" y1="17" y2="17"></line><line x1="17" x2="22" y1="17" y2="17"></line><line x1="17" x2="22" y1="7" y2="7"></line></symbol>
<symbol id="cont-audio" viewbox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="23"></line><line x1="8" x2="16" y1="23" y2="23"></line></symbol>
<symbol id="cont-link" viewbox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></symbol>
<symbol id="cont-code" viewbox="0 0 24 24"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></symbol>
<symbol id="cont-table" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="12" x2="12" y1="3" y2="21"></line></symbol>
<symbol id="cont-pres" viewbox="0 0 24 24"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></symbol>

<symbol id="sys-search" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></symbol>
<symbol id="sys-filter" viewbox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></symbol>
<symbol id="sys-sort" viewbox="0 0 24 24"><path d="M11 5h10"></path><path d="M11 9h7"></path><path d="M11 13h4"></path><path d="M3 17l3 3 3-3"></path><path d="M6 18V4"></path></symbol>
<symbol id="sys-refresh" viewbox="0 0 24 24"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></symbol>
<symbol id="sys-undo" viewbox="0 0 24 24"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></symbol>
<symbol id="sys-redo" viewbox="0 0 24 24"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path></symbol>
<symbol id="sys-fullscreen" viewbox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M16 3h3a2 2 0 0 1 2 2v3"></path><path d="M8 21H5a2 2 0 0 1-2-2v-3"></path><path d="M16 21h3a2 2 0 0 1 2-2v-3"></path></symbol>
<symbol id="sys-zoomin" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></symbol>
<symbol id="sys-zoomout" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="8" x2="14" y1="11" y2="11"></line></symbol>
<symbol id="sys-close" viewbox="0 0 24 24"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></symbol>
</defs>
</svg>
<div>
<header className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
<h1 className="text-4xl font-bold tracking-tight mb-4 font-sans">Icon System <span className="text-xs align-top bg-acid text-black px-2 py-1 rounded font-mono ml-2">v2.0</span></h1>
<p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg">
                                A high-performance SVG sprite system designed for enterprise SaaS applications.
                                Built on a 24px grid with a consistent 2px stroke. Optimized for dark mode with high-contrast acid accents.
                            </p>
</header>

<section className="mt-12 p-8 bg-zinc-900 rounded-xl text-zinc-200 font-mono text-sm border border-zinc-800">
<h3 className="text-acid mb-4 uppercase font-bold">Usage Guide</h3>
<p className="mb-4 text-zinc-400">1. Include the SVG sprite sheet at the top of your &lt;body&gt;.</p>
<p className="mb-4 text-zinc-400">2. Reference icons using the &lt;use&gt; tag:</p>
<div className="bg-black p-4 rounded border border-zinc-700 overflow-x-auto">
<code>
                                    &lt;svg className="w-6 h-6 fill-none stroke-current"&gt;<br/>
                                      &lt;use href="#nav-dashboard"&gt;&lt;/use&gt;<br/>
                                    &lt;/svg&gt;
                                </code>
</div>
</section>
</div>
</section>

<section className="w-full mb-24" id="section-15">
<div className="section-header">SECTION 2: AXIS // Data Visualization Library (File 15)</div>

<header className="mb-16 border-b border-border pb-8 flex justify-between items-end">
<div>
<h1 className="text-4xl font-bold tracking-tighter mb-2 font-sans">AXIS<span className="text-accent">.</span>VISUAL</h1>
<p className="text-muted font-mono text-sm">High-Fidelity SVG Data Rendering Engine v1.0</p>
</div>
<button className="px-4 py-2 border border-border text-xs font-mono uppercase hover:bg-white hover:text-black transition-colors" onclick="randomizeData()">
                            Regenerate Data
                        </button>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="chart-card col-span-1 md:col-span-2">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">Revenue Stream</h3>
<div className="flex gap-4 text-xs font-mono text-muted">
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span> Current</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full"></span> Projected</span>
</div>
</div>
<div className="h-64 w-full" id="line-chart"></div>
</div>

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">Performance</h3>
</div>
<div className="h-64 w-full flex justify-center" id="radar-chart"></div>
</div>

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">User Acquisition</h3>
</div>
<div className="h-48 w-full" id="bar-chart"></div>
</div>

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">Traffic Sources</h3>
</div>
<div className="h-48 w-full flex justify-center" id="donut-chart"></div>
</div>

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">Server Load</h3>
</div>
<div className="h-48 w-full" id="area-chart"></div>
</div>
</div>


</section>

<section className="w-full mb-24" id="section-20">
<div className="section-header">SECTION 3: KINETIC // Full Interaction Library (File 20)</div>
<header className="mb-16 border-b border-border pb-6">
<h1 className="text-3xl font-bold tracking-tight mb-2">KINETIC <span className="text-accent">v2.0</span></h1>
<p className="text-gray-500 text-sm">Complete Interaction Set</p>
</header>

<h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-6">01 / Loading States</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">

<div className="card">
<svg className="animate-[spin_1s_linear_infinite]" height="40" viewbox="0 0 40 40" width="40">
<circle cx="20" cy="20" fill="none" r="16" stroke="#333" strokeWidth="3"></circle>
<circle cx="20" cy="20" fill="none" r="16" stroke="#ff3300" stroke-dasharray="100" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<span className="label">Spinner</span>
</div>

<div className="card">
<svg height="40" viewbox="0 0 40 40" width="40">
<circle cx="10" cy="20" fill="white" r="3"><animate attributename="cy" dur="0.6s" repeatcount="indefinite" values="20;15;20"></animate></circle>
<circle cx="20" cy="20" fill="white" r="3"><animate attributename="cy" begin="0.1s" dur="0.6s" repeatcount="indefinite" values="20;15;20"></animate></circle>
<circle cx="30" cy="20" fill="white" r="3"><animate attributename="cy" begin="0.2s" dur="0.6s" repeatcount="indefinite" values="20;15;20"></animate></circle>
</svg>
<span className="label">Dots</span>
</div>

<div className="card">
<div className="relative flex items-center justify-center w-12 h-12">
<span className="absolute w-3 h-3 bg-accent rounded-full z-10 shadow-[0_0_10px_#ff3300]"></span>
<span className="absolute w-full h-full border border-accent rounded-full opacity-0 animate-[radar_2s_infinite]"></span>
<span className="absolute w-full h-full border border-accent rounded-full opacity-0 animate-[radar_2s_0.6s_infinite]"></span>
</div>
<span className="label">Pulse</span>
</div>

<div className="card">
<svg className="stroke-white stroke-2 stroke-linecap-round" height="40" viewbox="0 0 40 40" width="40">
<line x1="12" x2="12" y1="15" y2="25"><animate attributename="y1" dur="0.6s" repeatcount="indefinite" values="15;10;15"></animate><animate attributename="y2" dur="0.6s" repeatcount="indefinite" values="25;30;25"></animate></line>
<line x1="20" x2="20" y1="15" y2="25"><animate attributename="y1" begin="0.1s" dur="0.6s" repeatcount="indefinite" values="15;10;15"></animate><animate attributename="y2" begin="0.1s" dur="0.6s" repeatcount="indefinite" values="25;30;25"></animate></line>
<line x1="28" x2="28" y1="15" y2="25"><animate attributename="y1" begin="0.2s" dur="0.6s" repeatcount="indefinite" values="15;10;15"></animate><animate attributename="y2" begin="0.2s" dur="0.6s" repeatcount="indefinite" values="25;30;25"></animate></line>
</svg>
<span className="label">Bars</span>
</div>

<div className="card">
<svg className="w-10 h-10 animate-[spin_2s_linear_infinite]" viewbox="25 25 50 50">
<circle cx="50" cy="50" fill="none" r="20" stroke="#333" strokeWidth="4"></circle>
<circle cx="50" cy="50" fill="none" r="20" stroke="white" strokeLinecap="round" strokeWidth="4" style={{animation: 'ring-dash 1.5s ease-in-out infinite'}}></circle>
</svg>
<span className="label">Ring</span>
</div>
</div>
</section>

<section className="w-full mb-24" id="section-24">
<div className="section-header">SECTION 4: ONYX // DECORATIVE ASSETS (File 24)</div>

<svg className="hidden">
<defs>

<pattern height="20" id="p-dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="#333" r="1"></circle>
</pattern>

<pattern height="40" id="p-mesh" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<path d="M0 0L40 40M40 0L0 40" stroke="#222" strokeWidth="0.5"></path>
<circle cx="20" cy="20" fill="#111" r="2" stroke="#333"></circle>
</pattern>

<pattern height="10" id="p-lines" patternunits="userSpaceOnUse" width="10" x="0" y="0">
<path d="M-2,2 l4,-4 M0,10 l10,-10 M8,12 l4,-4" stroke="#222" strokeWidth="1"></path>
</pattern>
</defs>
</svg>
<header className="mb-20 relative z-10">
<h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">ONYX <span className="text-lime">ASSETS</span></h1>
<p className="font-mono text-dim text-sm">DECORATIVE PRIMITIVES // SYSTEM READY</p>
</header>
<main className="relative z-10 space-y-32">

<section>
<span className="section-title">01 / SECTION DIVIDERS</span>
<div className="grid grid-cols-1 gap-8">

<div className="w-full border border-border bg-surface p-4">
<div className="text-xs text-dim mb-2 font-mono">01. ORGANIC WAVE</div>
<svg className="w-full h-16 text-white" fill="none" preserveaspectratio="none" viewbox="0 0 1200 120">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#111"></path>
</svg>
</div>
</div>
</section>

<section>
<span className="section-title">02 / SEAMLESS PATTERNS</span>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="grid-box">
<svg className="pattern-swatch"><rect fill="url(#p-dots)" height="100%" width="100%"></rect></svg>
<span className="label">Dots</span>
</div>
<div className="grid-box">
<svg className="pattern-swatch"><rect fill="url(#p-lines)" height="100%" width="100%"></rect></svg>
<span className="label">Hatch</span>
</div>
</div>
</section>
</main>
</section>

<section className="w-full mb-24" id="section-25">
<div className="section-header">SECTION 5: ONYX UI // COMPONENT LIBRARY (File 25)</div>
<header className="mb-20 border-b border-border pb-6">
<h1 className="text-4xl font-bold tracking-tighter mb-2">ONYX <span className="text-lime">UI</span></h1>
<p className="font-mono text-dim text-xs">SVG-ENHANCED COMPONENT SYSTEM // v1.0</p>
</header>
<main className="space-y-24">

<section>
<h2 className="text-lime font-mono text-sm mb-8 border-l-2 border-lime pl-4">01 // INTERACTIVE BUTTONS</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="comp-card items-start">
<span className="comp-label">KINETIC ARROW</span>
<button className="group relative px-6 py-3 border border-white/20 bg-transparent hover:bg-white/5 transition-colors flex items-center gap-3 overflow-hidden">
<span className="text-sm font-bold tracking-widest uppercase">Explore</span>
<svg className="w-4 h-4 text-lime transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
<svg className="absolute top-0 left-0 w-2 h-2 text-white" viewbox="0 0 10 10"><path d="M0 10V0H10" fill="none" stroke="currentColor"></path></svg>
<svg className="absolute bottom-0 right-0 w-2 h-2 text-white" viewbox="0 0 10 10"><path d="M10 0V10H0" fill="none" stroke="currentColor"></path></svg>
</button>
</div>

<div className="comp-card items-start">
<span className="comp-label">SUCCESS MORPH</span>
<button className="group flex items-center gap-2 px-6 py-3 border border-lime/50 text-lime hover:bg-lime hover:text-black transition-all duration-300">
<span className="text-sm font-bold uppercase">Submit</span>
<div className="relative w-4 h-4">
<svg className="w-4 h-4 absolute inset-0 transition-opacity group-hover:opacity-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
<svg className="w-4 h-4 absolute inset-0 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300 delay-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</button>
</div>
</div>
</section>
</main>
</section>

<section className="w-full mb-32" id="section-12-nexus">
<div className="section-header">SECTION 6: NEXUS PRO // Ultimate Fidelity (File 12)</div>
<div className="relative bg-[#050505] overflow-hidden m-0 text-[#e5e5e5] border border-zinc-800 rounded-lg">

<canvas id="fog-canvas-sec12" style={{position: 'absolute', inset: '0', zIndex: '0', opacity: '0.6', width: '100%', height: '100%'}}></canvas>

<nav id="navbar-sec12" style={{position: 'relative', width: '100%', zIndex: '50', top: '0', background: 'rgba(10, 10, 10, 0.6)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)'}}>
<div style={{padding: '0 1.5rem', height: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer'}}>
<div style={{width: '1.5rem', height: '1.5rem', background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syncopate, sans-serif', fontWeight: 'bold', fontSize: '0.8rem', borderRadius: '0.125rem'}}>N</div>
<span style={{fontFamily: 'Manrope, sans-serif', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.8)'}}>NEXUS PRO</span>
</div>
</div>
</nav>

<main style={{position: 'relative', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '3rem 1.5rem', overflow: 'hidden'}}>
<div className="lg:grid-cols-12" style={{width: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center'}}>

<div className="lg:col-span-5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', zIndex: '20'}}>
<h1 className="reveal-sec12 active" style={{fontFamily: 'Manrope, sans-serif', fontWeight: '300', fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '0.95', letterSpacing: '-0.025em', color: 'white', marginBottom: '2rem'}}>
                                            Pure <br/>
<span style={{fontWeight: '800', background: 'linear-gradient(to bottom, #ffffff 40%, #666666 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Control.</span>
</h1>
</div>

<div className="lg:col-span-7" style={{position: 'relative', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px'}}>

<div id="controller-wrapper-sec12" style={{width: '100%', maxWidth: '500px', animation: 'hover-float-sec12 4s ease-in-out infinite', transformStyle: 'preserve-3d'}}>
<svg style={{width: '100%', height: 'auto', filter: 'grayscale(10%) contrast(110%)', dropShadow: '0 25px 25px rgba(0,0,0,0.15)'}} viewbox="0 0 600 400">
<defs>
<lineargradient id="bodyGrad-sec12" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3a3a3a', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#050505', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M150,80 C150,80 180,50 300,50 C420,50 450,80 450,80 C480,80 530,90 540,150 C550,210 540,300 500,350 C460,400 410,350 400,320 C380,300 350,280 300,280 C250,280 220,300 200,320 C190,350 140,400 100,350 C60,300 50,210 60,150 C70,90 120,80 150,80 Z" fill="url(#bodyGrad-sec12)" stroke="#444" strokeWidth="1"></path>

<circle cx="430" cy="150" fill="#111" r="16" stroke="#333"></circle>
<circle cx="465" cy="115" fill="#111" r="16" stroke="#333"></circle>
<circle cx="395" cy="115" fill="#111" r="16" stroke="#333"></circle>
<circle cx="430" cy="80" fill="#111" r="16" stroke="#333"></circle>
</svg>
</div>
</div>
</div>
</main>

</div>
</section>
</div>
<footer className="w-full border-t border-zinc-800 text-center py-8">
<p className="text-zinc-500 text-sm font-mono">
                        Combined HTML Collection // Full Width Layout
                    </p>
</footer>
</main>

<aside className="w-72 border-l border-border bg-surface hidden xl:flex flex-col h-full">
<div className="p-4 border-b border-border">
<h2 className="text-xs font-bold tracking-widest text-zinc-500 mb-4">SYSTEM STATUS</h2>
<div className="space-y-4">
<div className="bg-panel border border-border p-3 rounded">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-mono text-zinc-400">CPU LOAD</span>
<span className="text-[10px] font-mono text-acid">42%</span>
</div>
<div className="w-full bg-black h-1 rounded-full overflow-hidden">
<div className="bg-acid h-full rounded-full w-[42%]"></div>
</div>
</div>
<div className="bg-panel border border-border p-3 rounded">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-mono text-zinc-400">MEMORY</span>
<span className="text-[10px] font-mono text-white">64%</span>
</div>
<div className="w-full bg-black h-1 rounded-full overflow-hidden">
<div className="bg-white h-full rounded-full w-[64%]"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scroll p-4">
<h2 className="text-xs font-bold tracking-widest text-zinc-500 mb-4 pl-2">RECENT ACTIVITY</h2>
<div className="relative pl-4 border-l border-zinc-800 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
<p className="text-xs text-zinc-300">New asset uploaded</p>
<p className="text-[10px] text-zinc-600 font-mono mt-1">2 mins ago</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-acid border border-acid/50 shadow-[0_0_8px_rgba(204,255,0,0.3)]"></div>
<p className="text-xs text-zinc-300">Deployment successful</p>
<p className="text-[10px] text-zinc-600 font-mono mt-1">15 mins ago</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
<p className="text-xs text-zinc-300">System backup completed</p>
<p className="text-[10px] text-zinc-600 font-mono mt-1">1 hour ago</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600"></div>
<p className="text-xs text-zinc-300">User config updated</p>
<p className="text-[10px] text-zinc-600 font-mono mt-1">3 hours ago</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-border">
<h2 className="text-xs font-bold tracking-widest text-zinc-500 mb-4 pl-2">QUICK ACTIONS</h2>
<div className="grid grid-cols-2 gap-2">
<button className="p-2 border border-border bg-panel hover:bg-zinc-800 rounded flex flex-col items-center justify-center gap-1 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="plus"></i>
<span className="text-[10px] text-zinc-500">Add</span>
</button>
<button className="p-2 border border-border bg-panel hover:bg-zinc-800 rounded flex flex-col items-center justify-center gap-1 transition-colors">
<i className="w-4 h-4 text-zinc-400" data-lucide="upload"></i>
<span className="text-[10px] text-zinc-500">Upload</span>
</button>
</div>
</div>
</div>
</aside>
</div>
</div>


    </>
  );
}
