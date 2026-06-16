import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

                renderSection('Status', [
                    'stat-success', 'stat-error', 'stat-warning', 'stat-info',
                    'stat-loading', 'stat-pending'
                ]);

                renderSection('Communication', [
                    'comm-email', 'comm-phone', 'comm-chat', 'comm-video',
                    'comm-notify', 'comm-comment', 'comm-mention', 'comm-reaction'
                ]);

                renderSection('Content', [
                    'cont-doc', 'cont-image', 'cont-video', 'cont-audio',
                    'cont-link', 'cont-code', 'cont-table', 'cont-pres'
                ]);

                renderSection('System', [
                    'sys-search', 'sys-filter', 'sys-sort', 'sys-refresh', 'sys-undo',
                    'sys-redo', 'sys-fullscreen', 'sys-zoomin', 'sys-zoomout', 'sys-close'
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

                drawGauge(value) {
                    const svg = this.createSVG();
                    const cx = this.width / 2;
                    const cy = this.height - 10;
                    const r = this.height - 20;

                    const bgPath = document.createElementNS(this.ns, "path");
                    bgPath.setAttribute("d", `M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${cx+r} ${cy}`);
                    bgPath.setAttribute("fill", "none");
                    bgPath.setAttribute("stroke", COLORS.darkGrey);
                    bgPath.setAttribute("stroke-width", "10");
                    bgPath.setAttribute("stroke-linecap", "round");
                    svg.appendChild(bgPath);

                    const angle = map(value, 0, 100, Math.PI, 0);
                    const x = cx + r * Math.cos(angle);
                    const y = cy - r * Math.sin(angle);

                    const valPath = document.createElementNS(this.ns, "path");
                    const d = `M ${cx-r} ${cy} A ${r} ${r} 0 0 1 ${x} ${y}`;
                    valPath.setAttribute("d", d);
                    valPath.setAttribute("fill", "none");
                    valPath.setAttribute("stroke", COLORS.accent);
                    valPath.setAttribute("stroke-width", "10");
                    valPath.setAttribute("stroke-linecap", "round");
                    valPath.setAttribute("class", "draw-path");
                    svg.appendChild(valPath);

                    const text = document.createElementNS(this.ns, "text");
                    text.setAttribute("x", cx);
                    text.setAttribute("y", cy - 20);
                    text.setAttribute("text-anchor", "middle");
                    text.setAttribute("fill", COLORS.white);
                    text.setAttribute("font-family", "JetBrains Mono");
                    text.setAttribute("font-size", "24");
                    text.textContent = value;
                    svg.appendChild(text);

                    this.container.appendChild(svg);
                }

                drawTreemap(data) {
                    const svg = this.createSVG();

                    const r1 = document.createElementNS(this.ns, "rect");
                    r1.setAttribute("x", 0); r1.setAttribute("y", 0);
                    r1.setAttribute("width", this.width * 0.6); r1.setAttribute("height", this.height);
                    r1.setAttribute("fill", COLORS.darkGrey);
                    r1.setAttribute("stroke", COLORS.bg);
                    r1.setAttribute("stroke-width", "2");

                    const r2 = document.createElementNS(this.ns, "rect");
                    r2.setAttribute("x", this.width * 0.6); r2.setAttribute("y", 0);
                    r2.setAttribute("width", this.width * 0.4); r2.setAttribute("height", this.height * 0.5);
                    r2.setAttribute("fill", COLORS.grey);
                    r2.setAttribute("stroke", COLORS.bg);
                    r2.setAttribute("stroke-width", "2");

                    const r3 = document.createElementNS(this.ns, "rect");
                    r3.setAttribute("x", this.width * 0.6); r3.setAttribute("y", this.height * 0.5);
                    r3.setAttribute("width", this.width * 0.4); r3.setAttribute("height", this.height * 0.5);
                    r3.setAttribute("fill", COLORS.accent);
                    r3.setAttribute("stroke", COLORS.bg);
                    r3.setAttribute("stroke-width", "2");

                    [r1,r2,r3].forEach((r, i) => {
                        r.setAttribute("class", "fade-in");
                        r.style.animationDelay = `${i*0.2}s`;
                        r.addEventListener('mouseenter', (e) => showTooltip(e, "Category " + (i+1)));
                        r.addEventListener('mouseleave', hideTooltip);
                        svg.appendChild(r);
                    });

                    this.container.appendChild(svg);
                }
            }

            function renderProgress(containerId, val) {
                const container = document.getElementById(containerId);
                if (!container) return;
                container.innerHTML = `
                    <div class="mb-4">
                        <div class="flex justify-between text-xs font-mono text-muted mb-1">
                            <span>CPU LOAD</span>
                            <span>${val}%</span>
                        </div>
                        <div class="w-full bg-border h-1 rounded-full overflow-hidden">
                            <div class="bg-white h-full rounded-full" style="width: ${val}%; transition: width 1s ease;"></div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <div class="flex justify-between text-xs font-mono text-muted mb-1">
                            <span>MEMORY</span>
                            <span>${val-15}%</span>
                        </div>
                        <div class="w-full bg-border h-1 rounded-full overflow-hidden">
                            <div class="bg-accent h-full rounded-full" style="width: ${val-15}%; transition: width 1s ease;"></div>
                        </div>
                    </div>
                `;
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

                renderProgress('progress-chart', r(40, 90));

                new ChartRenderer('gauge-chart').clear();
                new ChartRenderer('gauge-chart').drawGauge(r(0, 100));

                new ChartRenderer('treemap-chart').clear();
                new ChartRenderer('treemap-chart').drawTreemap([]);
            }

            window.addEventListener('load', randomizeData);
            window.addEventListener('resize', randomizeData);
        


            function triggerDownload20(el) {
                if (el.classList.contains('downloading')) return;

                el.classList.add('downloading');

                setTimeout(() => {
                    el.classList.remove('downloading');
                    el.classList.add('download-done');

                    setTimeout(() => {
                        el.classList.remove('download-done');
                    }, 2500);
                }, 1200);
            }
        


                (function() {
                    // --- 1. FOG / ATMOSPHERE CANVAS ---
                    const canvas = document.getElementById('fog-canvas-sec12');
                    const ctx = canvas.getContext('2d');
                    let width, height;

                    function resize() {
                        width = canvas.width = window.innerWidth;
                        height = canvas.height = window.innerHeight;
                    }
                    window.addEventListener('resize', resize);
                    resize();

                    const blobs = [
                        { x: 0, y: 0, r: 0, vx: 0.3, vy: 0.2, color: 'rgba(255, 255, 255, 0.03)' },
                        { x: 0, y: 0, r: 0, vx: -0.2, vy: 0.3, color: 'rgba(100, 100, 100, 0.05)' },
                        { x: 0, y: 0, r: 0, vx: 0.4, vy: -0.2, color: 'rgba(50, 50, 50, 0.05)' }
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

                    // --- 2. INTERACTIVE PARALLAX ---
                    const wrapper = document.getElementById('controller-wrapper-sec12');

                    document.addEventListener('mousemove', (e) => {
                        const x = (window.innerWidth / 2 - e.pageX) / 30;
                        const y = (window.innerHeight / 2 - e.pageY) / 30;
                        wrapper.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
                    });

                    document.addEventListener('mouseleave', () => {
                        wrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
                    });

                    // --- 3. REVEAL ANIMATIONS ---
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('active');
                            }
                        });
                    }, { threshold: 0.1 });

                    document.querySelectorAll('.reveal-sec12').forEach(el => observer.observe(el));
                })();
            
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>
<div id="tooltip"></div>

<section className="max-w-7xl mx-auto mb-32" id="section-14">
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
<div className="max-w-6xl mx-auto">
<header className="mb-16 border-b border-zinc-200 dark:border-zinc-800 pb-8">
<h1 className="text-4xl font-bold tracking-tight mb-4 font-sans">Icon System <span className="text-xs align-top bg-acid text-black px-2 py-1 rounded font-mono ml-2">v2.0</span></h1>
<p className="text-zinc-500 dark:text-zinc-400 max-w-2xl text-lg">
                    A high-performance SVG sprite system designed for enterprise SaaS applications.
                    Built on a 24px grid with a consistent 2px stroke. Optimized for dark mode with high-contrast acid accents.
                </p>
</header>

<section className="mt-20 p-8 bg-zinc-900 rounded-xl text-zinc-200 font-mono text-sm border border-zinc-800">
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
<footer className="py-20 text-center text-zinc-500 text-sm">
                Designed for High Density Dashboards
            </footer>
</div>
</section>
<div className="section-divider"></div>

<section className="max-w-7xl mx-auto mb-32" id="section-15">
<div className="section-header">SECTION 2: AXIS // Data Visualization Library (File 15)</div>
<div className="noise"></div>

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

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">System Health</h3>
</div>
<div className="h-48 w-full flex flex-col justify-between" id="progress-chart"></div>
</div>

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">Velocity</h3>
</div>
<div className="h-48 w-full flex justify-center items-end pb-4" id="gauge-chart"></div>
</div>

<div className="chart-card">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-bold uppercase tracking-widest">Market Share</h3>
</div>
<div className="h-48 w-full" id="treemap-chart"></div>
</div>
</div>


</section>
<div className="section-divider"></div>

<section className="max-w-7xl mx-auto mb-32" id="section-20">
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

<div className="card">
<svg height="30" viewbox="0 0 60 30" width="60">
<path d="M15,15 C15,5 25,5 30,15 C35,25 45,25 45,15 C45,5 35,5 30,15 C25,25 15,25 15,15 Z" fill="none" stroke="#ff3300" stroke-dasharray="100" strokeLinecap="round" strokeWidth="2" style={{animation: 'dash-draw 2s linear infinite'}}></path>
</svg>
<span className="label">Infinity</span>
</div>

<div className="card">
<svg className="stroke-white stroke-[1.5] fill-none animate-[spin_3s_ease-in-out_infinite]" height="40" viewbox="0 0 24 24" width="40">
<path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
</svg>
<span className="label">Hourglass</span>
</div>

<div className="card">
<svg height="40" viewbox="0 0 24 24" width="40">
<rect fill="none" height="12" rx="2" stroke="#333" strokeWidth="1.5" width="20" x="2" y="6"></rect>
<circle cx="8" cy="12" fill="white" r="1"><animate attributename="opacity" begin="0s" dur="1.5s" repeatcount="indefinite" values="0;1;0"></animate></circle>
<circle cx="12" cy="12" fill="white" r="1"><animate attributename="opacity" begin="0.2s" dur="1.5s" repeatcount="indefinite" values="0;1;0"></animate></circle>
<circle cx="16" cy="12" fill="white" r="1"><animate attributename="opacity" begin="0.4s" dur="1.5s" repeatcount="indefinite" values="0;1;0"></animate></circle>
</svg>
<span className="label">Typing</span>
</div>

<div className="card">
<svg className="stroke-white stroke-[1.5] fill-none" height="40" style={{overflow: 'visible'}} viewbox="0 0 24 24" width="40">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#555"></path>
<g style={{animation: 'upload-arrow 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</g>
</svg>
<span className="label">Upload</span>
</div>

<div className="card">
<svg height="40" style={{transform: 'rotate(-90deg)'}} viewbox="0 0 40 40" width="40">
<circle cx="20" cy="20" fill="none" r="16" stroke="#222" strokeWidth="4"></circle>
<circle cx="20" cy="20" fill="none" r="16" stroke="white" stroke-dasharray="100" stroke-dashoffset="25" strokeWidth="4">
<animate attributename="stroke-dashoffset" calcmode="spline" dur="2s" fill="freeze" keysplines="0.16 1 0.3 1" repeatcount="indefinite" values="100; 20"></animate>
</circle>
</svg>
<span className="label">Percent</span>
</div>
</div>

<h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-6">02 / Micro-Interactions</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<div className="card group cursor-pointer overflow-hidden">
<button className="relative flex items-center gap-2 px-6 py-2 border border-white rounded-full group-hover:bg-white group-hover:text-black transition-colors duration-300">
<span className="text-xs font-bold uppercase tracking-wider">Action</span>
<svg className="stroke-current stroke-2 fill-none transition-transform duration-300 group-hover:translate-x-1" height="16" viewbox="0 0 24 24" width="16">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</button>
<span className="label">Btn Hover</span>
</div>

<div className="card">
<div className="relative group w-full max-w-[140px]">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="h-4 w-4 text-gray-500 transition-colors group-focus-within:text-accent" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input className="bg-black border border-[#333] text-white text-xs rounded-lg focus:border-accent focus:ring-1 focus:ring-accent block w-full pl-9 p-2.5 outline-none transition-all" placeholder="User" type="text"/>
</div>
<span className="label">Focus</span>
</div>

<div className="card">
<label className="cursor-pointer relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border border-gray-500 rounded peer-checked:bg-accent peer-checked:border-accent transition-all duration-300 flex items-center justify-center">
<svg className="w-4 h-4 text-black scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
</label>
<span className="label">Check</span>
</div>

<div className="card">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-[#333] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
</label>
<span className="label">Toggle</span>
</div>

<div className="card group">
<div className="w-10 h-10 rounded-full bg-success/10 border border-success flex items-center justify-center text-success">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<animate attributename="stroke-dasharray" begin="mouseenter" dur="0.3s" fill="freeze" from="0, 100" to="100, 0"></animate>
</path>
</svg>
</div>
<span className="label">Success</span>
</div>

<div className="card group">
<div className="w-10 h-10 rounded-full bg-error/10 border border-error flex items-center justify-center text-error group-hover:animate-[shake_0.5s_ease-in-out]">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="label">Error</span>
</div>

<div className="card">
<label className="cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<svg className="w-8 h-8 text-gray-500 peer-checked:text-accent peer-checked:fill-accent transition-colors duration-300 peer-checked:animate-[pop_0.3s_ease-out]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</label>
<span className="label">Like</span>
</div>

<div className="card group cursor-pointer">
<svg className="w-6 h-6 text-white stroke-current stroke-2 fill-transparent transition-all duration-300 group-hover:fill-white" viewbox="0 0 24 24">
<path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="label">Save</span>
</div>

<div className="card group cursor-pointer">
<svg className="w-6 h-6 stroke-white stroke-[1.5] fill-none" viewbox="0 0 24 24">
<circle className="transition-all duration-300 group-hover:fill-white" cx="18" cy="5" r="3"></circle>
<circle className="transition-all duration-300 delay-75 group-hover:fill-white" cx="6" cy="12" r="3"></circle>
<circle className="transition-all duration-300 delay-150 group-hover:fill-white" cx="18" cy="19" r="3"></circle>
<line className="origin-left transition-transform duration-300 group-hover:scale-x-110" x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line className="origin-left transition-transform duration-300 group-hover:scale-x-110" x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
<span className="label">Share</span>
</div>

<div className="card group cursor-pointer" id="dl-btn-20" onclick="triggerDownload20(this)">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-6 h-6 absolute dl-arrow-group" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
<svg className="w-full h-full absolute rotate-[-90deg]" viewbox="0 0 24 24">
<circle className="opacity-0 dl-track" cx="12" cy="12" fill="none" r="10" stroke="#333" strokeWidth="2"></circle>
<circle className="dl-progress opacity-0" cx="12" cy="12" fill="none" r="10" stroke="white" strokeWidth="2"></circle>
</svg>
<svg className="w-6 h-6 absolute dl-check text-success" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="label">Download</span>
</div>

<div className="card group cursor-pointer">
<svg fill="none" height="32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{overflow: 'visible'}} viewbox="0 0 24 24" width="32">
<g className="lid">
<line x1="3" x2="21" y1="6" y2="6"></line>
<path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
</g>
<g>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
<g className="trash-lines">
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</g>
</g>
</svg>
<span className="label">Delete</span>
</div>

<div className="card group cursor-move hover:bg-[#1a1a1a]">
<svg className="w-6 h-6 fill-gray-500 transition-colors group-hover:fill-white" viewbox="0 0 24 24">
<circle cx="9" cy="5" r="1.5"></circle><circle cx="15" cy="5" r="1.5"></circle><circle cx="9" cy="12" r="1.5"></circle><circle cx="15" cy="12" r="1.5"></circle><circle cx="9" cy="19" r="1.5"></circle><circle cx="15" cy="19" r="1.5"></circle>
</svg>
<span className="label">Drag</span>
</div>

<div className="card group cursor-pointer">
<div className="relative">
<svg className="w-6 h-6 stroke-white stroke-[1.5] fill-none group-hover:animate-[shake_0.5s_ease-in-out]" viewbox="0 0 24 24">
<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border border-black scale-0 group-hover:scale-100 transition-transform duration-200 ease-out"></span>
</div>
<span className="label">Notify</span>
</div>

<div className="card group cursor-pointer">
<svg className="w-6 h-6 stroke-white stroke-[1.5] fill-none transition-transform duration-300 group-hover:rotate-180" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
<span className="label">Expand</span>
</div>

<div className="card group cursor-help">
<div className="relative flex justify-center">
<svg className="w-6 h-6 stroke-gray-400 group-hover:stroke-white transition-colors" fill="none" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<div className="absolute bottom-full mb-2 tooltip-box">
<div className="bg-white text-black px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wide shadow-[0_5px_15px_rgba(255,255,255,0.2)] relative">
                            Details
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-white"></div>
</div>
</div>
</div>
<span className="label">Tooltip</span>
</div>
</div>

</section>
<div className="section-divider"></div>

<section className="max-w-7xl mx-auto mb-32" id="section-24">
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

<pattern height="48" id="p-hex" patternunits="userSpaceOnUse" width="28" x="0" y="0">
<path d="M14 0l14 8v16l-14 8L0 24V8z" fill="none" stroke="#222" strokeWidth="1"></path>
</pattern>

<pattern height="100" id="p-circuit" patternunits="userSpaceOnUse" width="100" x="0" y="0">
<path d="M10 10h20v20h20v-20h40v80h-60" fill="none" stroke="#222" strokeWidth="1"></path>
<rect fill="#333" height="4" width="4" x="8" y="8"></rect>
<rect fill="#333" height="4" width="4" x="88" y="8"></rect>
</pattern>

<pattern height="40" id="p-grid" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" strokeWidth="1"></path>
</pattern>

<pattern height="40" id="p-tri" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<polygon fill="none" points="20,0 40,40 0,40" stroke="#222" strokeWidth="1"></polygon>
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

<div className="w-full border border-border bg-surface p-4">
<div className="text-xs text-dim mb-2 font-mono">02. HARD TILT</div>
<svg className="w-full h-16 text-white" fill="none" preserveaspectratio="none" viewbox="0 0 1200 120">
<path d="M1200 120L0 16.48V0h1200V120z" fill="#111"></path>
</svg>
</div>

<div className="w-full border border-border bg-surface p-4">
<div className="text-xs text-dim mb-2 font-mono">03. DIGITAL STEPS</div>
<svg className="w-full h-16 text-white" fill="none" preserveaspectratio="none" viewbox="0 0 1200 120">
<path d="M0,0v60h200v20h200v20h200v20h200V80h200V60h200V0H0z" fill="#111"></path>
</svg>
</div>

<div className="w-full border border-border bg-surface p-4">
<div className="text-xs text-dim mb-2 font-mono">04. POINTER</div>
<svg className="w-full h-16 text-white" fill="none" preserveaspectratio="none" viewbox="0 0 1200 120">
<path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" fill="#111"></path>
</svg>
</div>

<div className="w-full border border-border bg-surface p-4">
<div className="text-xs text-dim mb-2 font-mono">05. DATA LAYERS</div>
<svg className="w-full h-24 text-white" fill="none" preserveaspectratio="none" viewbox="0 0 1200 120">
<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#222" opacity="0.5"></path>
<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#111"></path>
</svg>
</div>

<div className="w-full border border-border bg-surface p-4">
<div className="text-xs text-dim mb-2 font-mono">06. FREQUENCY</div>
<svg className="w-full h-12 text-white" fill="none" preserveaspectratio="none" viewbox="0 0 1200 40">
<path d="M0 0 L20 40 L40 0 L60 40 L80 0 L100 40 L120 0 L140 40 L160 0 L180 40 L200 0 L220 40 L240 0 L260 40 L280 0 L300 40 L320 0 L340 40 L360 0 L380 40 L400 0 L420 40 L440 0 L460 40 L480 0 L500 40 L520 0 L540 40 L560 0 L580 40 L600 0 L620 40 L640 0 L660 40 L680 0 L700 40 L720 0 L740 40 L760 0 L780 40 L800 0 L820 40 L840 0 L860 40 L880 0 L900 40 L920 0 L940 40 L960 0 L980 40 L1000 0 L1020 40 L1040 0 L1060 40 L1080 0 L1100 40 L1120 0 L1140 40 L1160 0 L1180 40 L1200 0" fill="#111"></path>
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
<svg className="pattern-swatch"><rect fill="url(#p-grid)" height="100%" width="100%"></rect></svg>
<span className="label">Grid</span>
</div>
<div className="grid-box">
<svg className="pattern-swatch"><rect fill="url(#p-lines)" height="100%" width="100%"></rect></svg>
<span className="label">Hatch</span>
</div>
<div className="grid-box">
<svg className="pattern-swatch"><rect fill="url(#p-hex)" height="100%" width="100%"></rect></svg>
<span className="label">Hive</span>
</div>
<div className="grid-box">
<svg className="pattern-swatch"><rect fill="url(#p-circuit)" height="100%" width="100%"></rect></svg>
<span className="label">Circuit</span>
</div>
</div>
</section>

<section>
<span className="section-title">03 / DECORATIVE ACCENTS</span>
<div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4">

<div className="grid-box flex items-center justify-center group">
<svg className="w-8 h-8 text-white group-hover:text-lime transition-colors duration-300" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"></path>
</svg>
<span className="label">Sparkle</span>
</div>

<div className="grid-box flex items-center justify-center">
<svg className="w-10 h-10 text-lime animate-[spin-slow_10s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"></path>
</svg>
<span className="label">Asterisk</span>
</div>

<div className="grid-box flex items-center justify-center">
<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 100 100">
<path d="M20 80 Q 50 10 80 50" stroke-dasharray="4 4"></path>
<path d="M70 55 L 80 50 L 85 40"></path>
</svg>
<span className="label">Flow</span>
</div>

<div className="grid-box flex items-center justify-center gap-2 group">
<svg className="w-4 h-10 text-dim group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 20 60">
<path d="M15 1 L 5 10 L 5 50 L 15 59"></path>
</svg>
<svg className="w-4 h-10 text-dim group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 20 60">
<path d="M5 1 L 15 10 L 15 50 L 5 59"></path>
</svg>
<span className="label">Code</span>
</div>

<div className="grid-box flex items-center justify-center">
<svg className="w-12 h-12 text-lime" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M50 10 C 20 10 10 40 10 50 C 10 80 30 90 50 90 C 80 90 90 60 90 50 C 90 45 88 20 55 15" stroke-dasharray="300" stroke-dashoffset="0"></path>
</svg>
<span className="label">Focus</span>
</div>

<div className="grid-box flex items-center justify-center group">
<svg className="w-10 h-10 text-dim group-hover:text-lime transition-colors" viewbox="0 0 40 40">
<path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="1"></path>
<circle cx="20" cy="20" fill="none" r="10" stroke="currentColor" strokeWidth="1"></circle>
<circle cx="20" cy="20" fill="currentColor" r="2"></circle>
</svg>
<span className="label">Target</span>
</div>

<div className="grid-box flex items-center justify-center">
<svg className="w-10 h-10 text-white" fill="none" viewbox="0 0 40 40">
<path d="M0 10 V0 H10" stroke="currentColor" strokeWidth="3"></path>
<path d="M30 0 H40 V10" opacity="0.5" stroke="currentColor" strokeWidth="1"></path>
<path d="M40 30 V40 H30" stroke="currentColor" strokeWidth="3"></path>
<path d="M10 40 H0 V30" opacity="0.5" stroke="currentColor" strokeWidth="1"></path>
</svg>
<span className="label">Frame</span>
</div>

<div className="grid-box flex items-center justify-center">
<svg className="w-16 h-6 text-lime" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3" viewbox="0 0 100 20">
<path d="M5 15 Q 50 5 95 15"></path>
</svg>
<span className="label">Swoosh</span>
</div>

<div className="grid-box flex items-center justify-center">
<svg className="w-8 h-8 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
</svg>
<span className="label">Quote</span>
</div>

<div className="grid-box flex items-center justify-center gap-1">
<div className="w-2 h-2 bg-lime rounded-full animate-bounce"></div>
<div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-2 h-2 bg-dim rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
<span className="label">Load</span>
</div>
</div>
</section>

<section>
<span className="section-title">04 / FLUID GEOMETRY</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="h-64 bg-panel border border-border relative flex items-center justify-center overflow-hidden">
<svg className="absolute inset-0 opacity-20 w-full h-full"><rect fill="url(#p-grid)" height="100%" width="100%"></rect></svg>
<div className="w-32 h-32 bg-white rounded-full animate-morph filter blur-md"></div>
<div className="w-32 h-32 border border-white rounded-full animate-morph absolute"></div>
</div>

<div className="h-64 bg-panel border border-border relative flex items-center justify-center">
<svg className="w-40 h-40 animate-morph text-lime" viewbox="0 0 100 100">
<path d="M50 0 C 80 0 100 20 100 50 C 100 80 80 100 50 100 C 20 100 0 80 0 50 C 0 20 20 0 50 0" fill="none" stroke="currentColor" stroke-dasharray="4 2" strokeWidth="1"></path>
</svg>
</div>

<div className="h-64 bg-panel border border-border relative flex items-center justify-center overflow-hidden">
<div className="w-40 h-40 bg-dim/20 rounded-full animate-morph flex items-center justify-center overflow-hidden border border-dim">
<svg className="w-full h-full opacity-50"><rect fill="url(#p-circuit)" height="100%" width="100%"></rect></svg>
</div>
</div>
</div>
</section>

<section>
<span className="section-title">05 / FUNCTIONAL UI</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-border bg-panel flex flex-col gap-4">
<div className="font-mono text-xs text-dim">CTA DIRECTION</div>
<div className="flex items-center gap-4 text-white">
<span className="text-xl font-bold">Start Project</span>
<svg className="w-24 h-8 text-lime" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 20">
<path d="M0 10 H 90 M 85 5 L 90 10 L 85 15"></path>
</svg>
</div>
</div>

<div className="p-8 border border-border bg-panel flex flex-col gap-4 items-start">
<div className="font-mono text-xs text-dim">TEXT EMPHASIS</div>
<div className="relative inline-block">
<span className="relative z-10 font-bold text-2xl">Priority Access</span>
<svg className="absolute -bottom-2 left-0 w-full h-3 text-lime opacity-60 z-0" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 12 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</div>
</div>

<div className="p-8 border border-border bg-panel relative overflow-hidden h-40">
<div className="font-mono text-xs text-dim">STATUS RIBBON</div>
<div className="absolute top-6 right-[-35px] rotate-45 bg-lime text-black text-[10px] font-bold px-12 py-1 shadow-[0_5px_10px_rgba(0,0,0,0.5)] border-y border-white/20 tracking-widest">
                            PREMIUM
                        </div>
</div>
</div>
</section>
</main>
<footer className="border-t border-border mt-20 py-12 bg-surface">
<div className="text-center">
<div className="font-mono text-xs text-dim">
                    ONYX SYSTEM // SVG LIBRARY v1.0
                </div>
</div>
</footer>
</section>
<div className="section-divider"></div>

<section className="max-w-7xl mx-auto mb-32" id="section-25">
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
<span className="comp-label">SVG LOADER STATE</span>
<button className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
<svg className="w-4 h-4 animate-spin-slow text-black" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
<path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" stroke-opacity="1"></path>
</svg>
                            Processing
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

<section>
<h2 className="text-lime font-mono text-sm mb-8 border-l-2 border-lime pl-4">02 // INPUT CONTROLS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="comp-card">
<span className="comp-label">SVG CHECKBOX</span>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="checkbox-box w-5 h-5 border border-dim bg-surface transition-all duration-200 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-black transform scale-0 transition-transform duration-200" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
</div>
<span className="text-sm text-dim group-hover:text-white transition-colors">Enable 2FA</span>
</label>
</div>

<div className="comp-card">
<span className="comp-label">MECHANICAL TOGGLE</span>
<label className="flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="relative w-12 h-6 border border-dim bg-surface peer-checked:border-lime peer-checked:bg-lime/10 transition-colors">
<div className="absolute top-0.5 left-0.5 w-4 h-4 bg-dim peer-checked:bg-lime peer-checked:translate-x-6 transition-all duration-300 flex items-center justify-center">
<svg className="w-2 h-2 text-black opacity-0 peer-checked:opacity-100" stroke="currentColor" strokeWidth="4" viewbox="0 0 24 24"><path d="M5 12h14"></path></svg>
</div>
</div>
</label>
</div>

<div className="comp-card">
<span className="comp-label">SEARCH FIELD</span>
<div className="relative w-full">
<input className="w-full bg-surface border-b border-dim p-2 pl-8 text-sm focus:outline-none focus:border-lime transition-colors placeholder-dim" placeholder="Search database..." type="text"/>
<svg className="absolute left-0 top-2.5 w-4 h-4 text-dim" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
</div>
</div>

<div className="comp-card col-span-1 md:col-span-2">
<span className="comp-label">DROP ZONE</span>
<div className="w-full border border-dashed border-dim hover:border-lime p-8 flex flex-col items-center justify-center gap-3 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-dim/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="w-5 h-5 text-dim group-hover:text-lime" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
<span className="font-mono text-xs text-dim group-hover:text-white">DROP FILE OR CLICK TO UPLOAD</span>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lime font-mono text-sm mb-8 border-l-2 border-lime pl-4">03 // CONTENT CONTAINERS</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative bg-surface p-6 border border-border group hover:border-dim transition-colors">
<svg className="absolute top-0 left-0 w-4 h-4 text-lime" viewbox="0 0 20 20"><path d="M1 19V1H19" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
<svg className="absolute bottom-0 right-0 w-4 h-4 text-dim group-hover:text-lime transition-colors" viewbox="0 0 20 20"><path d="M19 1V19H1" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
<div className="mb-4 w-8 h-8 bg-lime text-black flex items-center justify-center font-bold text-xs">01</div>
<h3 className="text-lg font-bold mb-2">System Architecture</h3>
<p className="text-sm text-dim font-mono">Scalable vector frameworks for modern web applications.</p>
</div>

<div className="comp-card">
<span className="comp-label">SVG AVATARS</span>
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded bg-dim flex items-center justify-center border-2 border-black">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="w-10 h-10 rounded bg-white flex items-center justify-center border-2 border-black">
<svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<div className="w-10 h-10 rounded bg-lime flex items-center justify-center border-2 border-black font-bold text-black text-xs">
                                JD
                            </div>
</div>
</div>

<div className="relative bg-surface border border-border h-32 overflow-hidden flex items-center justify-center">
<div className="absolute top-3 right-[-30px] rotate-45 bg-lime text-black text-[10px] font-bold px-10 py-1 border-y border-black z-10">
                            NEW
                        </div>
<span className="text-dim font-mono text-xs">FEATURED ITEM</span>
</div>
</div>
</section>

<section>
<h2 className="text-lime font-mono text-sm mb-8 border-l-2 border-lime pl-4">04 // WAYFINDING</h2>
<div className="grid grid-cols-1 gap-6">

<div className="comp-card items-start">
<span className="comp-label">PATH TRACE</span>
<nav className="flex items-center text-sm font-mono">
<a className="text-dim hover:text-white transition-colors" href="#">HOME</a>
<svg className="w-4 h-4 text-dim mx-2" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
<a className="text-dim hover:text-white transition-colors" href="#">PROJECTS</a>
<svg className="w-4 h-4 text-dim mx-2" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><path d="M9 18l6-6-6-6"></path></svg>
<span className="text-lime">DASHBOARD</span>
</nav>
</div>

<div className="comp-card">
<span className="comp-label">PROGRESS TRACKER</span>
<div className="flex items-center w-full max-w-md">

<div className="relative flex flex-col items-center text-lime">
<div className="w-8 h-8 border border-lime bg-lime/10 flex items-center justify-center rounded-full z-10">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="absolute top-10 text-[10px] font-bold uppercase">Init</span>
</div>
<div className="flex-1 h-[1px] bg-lime mx-2"></div>

<div className="relative flex flex-col items-center text-white">
<div className="w-8 h-8 border border-white bg-black flex items-center justify-center rounded-full z-10 shadow-[0_0_10px_rgba(255,255,255,0.3)]">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>
<span className="absolute top-10 text-[10px] font-bold uppercase">Config</span>
</div>
<div className="flex-1 h-[1px] bg-dim mx-2"></div>

<div className="relative flex flex-col items-center text-dim">
<div className="w-8 h-8 border border-dim bg-black flex items-center justify-center rounded-full z-10">
<span className="text-xs">3</span>
</div>
<span className="absolute top-10 text-[10px] font-bold uppercase">Deploy</span>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-lime font-mono text-sm mb-8 border-l-2 border-lime pl-4">05 // SYSTEM STATUS</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface border border-l-4 border-warning p-4 flex items-start gap-4">
<svg className="w-5 h-5 text-warning mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
<div>
<h4 className="text-warning font-bold text-xs uppercase tracking-wide mb-1">System Alert</h4>
<p className="text-dim text-xs font-mono">Connection latency exceeded threshold.</p>
</div>
</div>

<div className="comp-card flex items-center justify-center">
<span className="comp-label">HOVER FOR INFO</span>
<div className="relative group cursor-help">
<svg className="w-6 h-6 text-dim group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
<div className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded uppercase whitespace-nowrap">
                                    Read Only
                                    <svg className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 text-white fill-current" viewbox="0 0 24 24"><path d="M12 24L0 0h24L12 24z"></path></svg>
</div>
</div>
</div>
</div>

<div className="comp-card">
<span className="comp-label">SVG GAUGE</span>
<div className="relative w-16 h-16">
<svg className="w-full h-full rotate-[-90deg]" viewbox="0 0 36 36">
<path className="text-dim" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-lime drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="75, 100" strokeLinecap="round" strokeWidth="2"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold">75%</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-border mt-24 py-12 text-center font-mono text-xs text-dim">
            ONYX UI // PRODUCTION READY // 2024
        </footer>
</section>
<div className="section-divider"></div>

<section className="max-w-7xl mx-auto mb-32" id="section-12-nexus">
<div className="section-header">SECTION 6: NEXUS PRO // Ultimate Fidelity (File 12)</div>

<div style={{position: 'relative', backgroundColor: '#050505', overflowX: 'hidden', margin: '0', color: '#e5e5e5'}}>

<div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', pointerEvents: 'none', zIndex: '50', opacity: '0.04', backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter-sec12\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter-sec12)\'/%3E%3C/svg%3E&quot'}}></div>

<canvas id="fog-canvas-sec12" style={{position: 'absolute', inset: '0', zIndex: '0', opacity: '0.6'}}></canvas>

<nav id="navbar-sec12" style={{position: 'relative', width: '100%', zIndex: '50', top: '0', background: 'rgba(10, 10, 10, 0.6)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'all 0.5s'}}>
<div style={{maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem', height: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer'}}>
<div style={{width: '2rem', height: '2rem', background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Syncopate, sans-serif', fontWeight: 'bold', fontSize: '1.125rem', borderRadius: '0.125rem', transition: 'transform 0.3s'}}>N</div>
<span style={{fontFamily: 'Manrope, sans-serif', fontWeight: 'bold', letterSpacing: '0.2em', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)', transition: 'color 0.3s'}}>NEXUS PRO</span>
</div>
<div className="md:flex" style={{display: 'none', alignItems: 'center', gap: '3rem'}}>
<a href="#" style={{fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9ca3af', textDecoration: 'none', position: 'relative', transition: 'color 0.3s'}}>Specs</a>
<a href="#" style={{fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9ca3af', textDecoration: 'none', position: 'relative', transition: 'color 0.3s'}}>Design</a>
<a href="#" style={{fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#9ca3af', textDecoration: 'none', position: 'relative', transition: 'color 0.3s'}}>Software</a>
</div>
<button style={{padding: '0.625rem 1.5rem', background: 'white', color: 'black', fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '0.125rem', border: 'none', cursor: 'pointer', transition: 'background 0.3s', boxShadow: '0 0 15px rgba(255,255,255,0.1)'}}>
                        Pre-Order
                    </button>
</div>
</nav>

<main style={{position: 'relative', zIndex: '10', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '5rem 1.5rem', overflow: 'hidden'}}>
<div className="lg:grid-cols-12" style={{maxWidth: '1400px', width: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center'}}>

<div className="lg:col-span-5" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', position: 'relative', zIndex: '20'}}>
<div className="reveal-sec12 delay-100" style={{marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
<div style={{height: '1px', width: '2rem', background: 'rgba(255, 255, 255, 0.3)'}}></div>
<span style={{fontSize: '0.625rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#9ca3af'}}>Series X Architecture</span>
</div>
<h1 className="reveal-sec12 delay-200" style={{fontFamily: 'Manrope, sans-serif', fontWeight: '300', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '0.95', letterSpacing: '-0.025em', color: 'white', marginBottom: '2rem'}}>
                            Pure <br/>
<span style={{fontWeight: '800', background: 'linear-gradient(to bottom, #ffffff 40%, #666666 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Control.</span>
</h1>
<p className="reveal-sec12 delay-300" style={{fontFamily: 'Manrope, sans-serif', fontSize: '1.125rem', color: '#9ca3af', fontWeight: '300', lineHeight: '1.625', maxWidth: '28rem', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.5rem', marginBottom: '2.5rem'}}>
                            Engineered for the obsession of precision. The new benchmark in haptic feedback and ergonomic latency reduction.
                        </p>
<div className="reveal-sec12 delay-400" style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%'}}>
<button style={{position: 'relative', padding: '1rem 2rem', overflow: 'hidden', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '0.125rem', cursor: 'pointer', transition: 'all 0.3s', color: 'white', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em'}}>
                                View Design
                            </button>
<div style={{display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 1.5rem', color: '#6b7280'}}>
<div style={{width: '0.5rem', height: '0.5rem', background: '#10b981', borderRadius: '9999px', animation: 'pulse-sec12 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
<span style={{fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold'}}>In Stock</span>
</div>
</div>

<div className="reveal-sec12 delay-500" style={{marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', width: '100%', maxWidth: '20rem', opacity: '0.6'}}>
<div>
<div style={{fontSize: '1.5rem', fontFamily: 'Syncopate, sans-serif', fontWeight: 'bold', color: 'white'}}>1ms</div>
<div style={{fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9ca3af', marginTop: '0.25rem'}}>Response Time</div>
</div>
<div>
<div style={{fontSize: '1.5rem', fontFamily: 'Syncopate, sans-serif', fontWeight: 'bold', color: 'white'}}>Tactile</div>
<div style={{fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9ca3af', marginTop: '0.25rem'}}>Hybrid D-Pad</div>
</div>
</div>
</div>

<div className="lg:col-span-7 lg:h-80vh" style={{position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', perspective: '1200px'}}>

<div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)', mixBlendMode: 'screen', borderRadius: '9999px', filter: 'blur(100px)', opacity: '0.4', animation: 'spotlight-sec12 10s ease-in-out infinite alternate', pointerEvents: 'none'}}></div>

<div id="controller-wrapper-sec12" style={{width: '100%', maxWidth: '700px', animation: 'hover-float-sec12 4s ease-in-out infinite', transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out'}}>

<svg style={{width: '100%', height: 'auto', filter: 'grayscale(10%) contrast(110%)', dropShadow: '0 25px 25px rgba(0,0,0,0.15)'}} viewbox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="bodyGrad-sec12" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3a3a3a', stopOpacity: '1'}}></stop>
<stop offset="30%" style={{stopColor: '#1a1a1a', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#050505', stopOpacity: '1'}}></stop>
</lineargradient>
<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="gripGrad-sec12" r="50%">
<stop offset="70%" style={{stopColor: '#1a1a1a', stopOpacity: '0'}}></stop>
<stop offset="100%" style={{stopColor: '#000000', stopOpacity: '0.4'}}></stop>
</radialgradient>
<lineargradient id="btnGlare-sec12" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: '0.6'}}></stop>
<stop offset="50%" style={{stopColor: '#ffffff', stopOpacity: '0'}}></stop>
</lineargradient>
<filter height="200%" id="ledGlow-sec12" width="200%" x="-50%" y="-50%">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M150,80
                                        C150,80 180,50 300,50
                                        C420,50 450,80 450,80
                                        C480,80 530,90 540,150
                                        C550,210 540,300 500,350
                                        C460,400 410,350 400,320
                                        C380,300 350,280 300,280
                                        C250,280 220,300 200,320
                                        C190,350 140,400 100,350
                                        C60,300 50,210 60,150
                                        C70,90 120,80 150,80 Z" fill="url(#bodyGrad-sec12)" stroke="#444" strokeWidth="1"></path>
<path d="M60,150 C50,210 60,300 100,350 C140,400 190,350 200,320" fill="url(#gripGrad-sec12)"></path>
<path d="M540,150 C550,210 540,300 500,350 C460,400 410,350 400,320" fill="url(#gripGrad-sec12)"></path>
<path d="M160,55 L440,55" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<g transform="translate(170, 150)">
<circle cx="0" cy="0" fill="#0a0a0a" r="35" stroke="#000" strokeWidth="1"></circle>
<circle cx="0" cy="0" fill="#1a1a1a" r="30"></circle>
<circle cx="0" cy="0" fill="#111" r="25" stroke="#222" strokeWidth="1"></circle>
<circle cx="0" cy="-10" fill="white" opacity="0.03" r="15"></circle>
<circle cx="0" cy="0" fill="none" r="28" stroke="#222" stroke-dasharray="2,2" strokeWidth="1"></circle>
</g>
<g transform="translate(220, 240)">
<circle cx="0" cy="0" fill="#111" r="45"></circle>
<path d="M-12,-35 L12,-35 L15,-15 L35,-12 L35,12 L15,15 L12,35 L-12,35 L-15,15 L-35,12 L-35,-12 L-15,-15 Z" fill="#1a1a1a" stroke="#000" strokeWidth="1"></path>
<path d="M-12,-35 L12,-35 L15,-15 L35,-12 L35,12 L15,15 L12,35 L-12,35 L-15,15 L-35,12 L-35,-12 L-15,-15 Z" fill="url(#btnGlare-sec12)" opacity="0.1"></path>
<path d="M0,-30 L0,30 M-30,0 L30,0" opacity="0.5" stroke="#000" strokeWidth="1"></path>
</g>
<g transform="translate(380, 240)">
<circle cx="0" cy="0" fill="#0a0a0a" r="35" stroke="#000" strokeWidth="1"></circle>
<circle cx="0" cy="0" fill="#1a1a1a" r="30"></circle>
<circle cx="0" cy="0" fill="#111" r="25" stroke="#222" strokeWidth="1"></circle>
<circle cx="0" cy="-10" fill="white" opacity="0.03" r="15"></circle>
<circle cx="0" cy="0" fill="none" r="28" stroke="#222" stroke-dasharray="2,2" strokeWidth="1"></circle>
</g>
<g transform="translate(430, 150)">
<g transform="translate(0, -35)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#111" strokeWidth="2"></circle>
<text fill="#dca716" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">Y</text>
<circle cx="0" cy="0" fill="url(#btnGlare-sec12)" r="16"></circle>
</g>
<g transform="translate(35, 0)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#111" strokeWidth="2"></circle>
<text fill="#cf3535" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">B</text>
<circle cx="0" cy="0" fill="url(#btnGlare-sec12)" r="16"></circle>
</g>
<g transform="translate(0, 35)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#111" strokeWidth="2"></circle>
<text fill="#2ea857" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">A</text>
<circle cx="0" cy="0" fill="url(#btnGlare-sec12)" r="16"></circle>
</g>
<g transform="translate(-35, 0)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#111" strokeWidth="2"></circle>
<text fill="#2e70cf" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">X</text>
<circle cx="0" cy="0" fill="url(#btnGlare-sec12)" r="16"></circle>
</g>
</g>
<g transform="translate(300, 100)">
<circle cx="0" cy="0" fill="#1a1a1a" r="20" stroke="#000" strokeWidth="1"></circle>
<circle cx="0" cy="0" fill="#fff" fillOpacity="0.9" filter="url(#ledGlow-sec12)" r="18"></circle>
<path d="M-8,-8 L8,8 M8,-8 L-8,8" stroke="#aaa" strokeLinecap="round" strokeWidth="3"></path>
</g>
<circle cx="260" cy="150" fill="#111" r="8" stroke="#333"></circle>
<circle cx="340" cy="150" fill="#111" r="8" stroke="#333"></circle>
<rect fill="#444" height="8" rx="1" width="8" x="256" y="146"></rect>
<rect fill="#444" height="8" rx="1" width="8" x="336" y="146"></rect>
<g transform="translate(300, 180)">
<path d="M-8,0 Q0,5 8,0 Q0,12 -8,0" fill="#111" stroke="#333"></path>
</g>
</svg>
</div>

<div className="reveal-sec12 delay-700" style={{position: 'absolute', bottom: '2.5rem', left: '-2.5rem', background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.0) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', padding: '1.5rem', borderRadius: '1rem', maxWidth: '240px', display: 'none'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem'}}>
<div style={{width: '0.5rem', height: '0.5rem', background: 'white', borderRadius: '9999px'}}></div>
<span style={{fontSize: '0.625rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#d1d5db'}}>Haptic Engine</span>
</div>
<p style={{fontSize: '0.75rem', color: '#6b7280', lineHeight: '1.625'}}>
                                Adaptive triggers with dynamic resistance levels for immersive gameplay feedback.
                            </p>
</div>
</div>
</div>
</main>
<style>
                /* Section 12 Specific Styles */
                @keyframes hover-float-sec12 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                @keyframes spotlight-sec12 {
                    0% { opacity: 0.3; transform: scale(0.9); }
                    100% { opacity: 0.6; transform: scale(1.1); }
                }
                @keyframes pulse-sec12 {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .reveal-sec12 {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reveal-sec12.active {
                    opacity: 1;
                    transform: translateY(0);
                }
                .delay-100 { transition-delay: 0.1s; }
                .delay-200 { transition-delay: 0.2s; }
                .delay-300 { transition-delay: 0.3s; }
                .delay-400 { transition-delay: 0.4s; }
                .delay-500 { transition-delay: 0.5s; }
                .delay-700 { transition-delay: 0.7s; }

                @media (min-width: 1024px) {
                    .lg\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
                    .lg\:col-span-5 { grid-column: span 5 / span 5; }
                    .lg\:col-span-7 { grid-column: span 7 / span 7; }
                    .lg\:h-80vh { height: 80vh; }
                    .lg\:block { display: block; }
                }
            </style>

</div>
</section>

<footer className="max-w-7xl mx-auto mt-32 pt-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
<p className="text-zinc-500 dark:text-zinc-400 text-sm font-mono">
            Combined HTML Collection // 6 Files in 1 Document
        </p>
</footer>

    </>
  );
}
