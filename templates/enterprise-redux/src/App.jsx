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
      
tailwind.config = {
theme: {
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
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



      const COLORS = {
          bg: 'transparent',
          grid: '#27272a',
          primary: '#ff5500',
          grey: '#52525b',
          darkGrey: '#18181b',
      };

      const map = (val, inMin, inMax, outMin, outMax) => (val - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;

      const getBezierPath = (points) => {
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

      const tooltip = document.getElementById('chart-tooltip');
      function showTooltip(e, content) {
          if (!tooltip) return;
          tooltip.textContent = content;
          tooltip.style.opacity = 1;
          tooltip.style.left = (e.pageX + 10) + 'px';
          tooltip.style.top = (e.pageY - 20) + 'px';
      }
      function hideTooltip() {
          if (!tooltip) return;
          tooltip.style.opacity = 0;
      }

      // Custom Slider
      function handleSlider(e) {
          const slider = document.getElementById('custom-slider');
          const fill = document.getElementById('slider-fill');
          const thumb = document.getElementById('slider-thumb');
          const valDisplay = document.getElementById('slider-val');
          const rect = slider.getBoundingClientRect();
          const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
          fill.style.width = pct + '%';
          thumb.style.left = `calc(${pct}% - 7px)`;
          valDisplay.textContent = Math.round(pct) + '%';
      }

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
              svg.style.overflow = "visible";
              return svg;
          }

          drawLine(data1, data2) {
              const svg = this.createSVG();
              const padding = 10;

              for(let i=0; i<4; i++) {
                  const y = map(i, 0, 3, this.height - padding, padding);
                  const line = document.createElementNS(this.ns, "line");
                  line.setAttribute("x1", 0);
                  line.setAttribute("y1", y);
                  line.setAttribute("x2", this.width);
                  line.setAttribute("y2", y);
                  line.setAttribute("stroke", COLORS.grid);
                  line.setAttribute("stroke-width", "1");
                  line.setAttribute("stroke-dasharray", "4 4");
                  svg.appendChild(line);
              }

              const drawPath = (data, color, strokeWidth, isPrimary = false) => {
                  const points = data.map((val, i) => ({
                      x: map(i, 0, data.length - 1, 0, this.width),
                      y: map(val, 0, 100, this.height - padding, padding)
                  }));

                  const d = getBezierPath(points);
                  const path = document.createElementNS(this.ns, "path");
                  path.setAttribute("d", d);
                  path.setAttribute("fill", "none");
                  path.setAttribute("stroke", color);
                  path.setAttribute("stroke-width", strokeWidth);
                  path.setAttribute("class", "draw-path");

                  if (isPrimary) {
                      path.style.filter = 'drop-shadow(0px 4px 8px rgba(255, 85, 0, 0.4))';
                  }

                  svg.appendChild(path);

                  points.forEach((p, i) => {
                      const circle = document.createElementNS(this.ns, "circle");
                      circle.setAttribute("cx", p.x);
                      circle.setAttribute("cy", p.y);
                      circle.setAttribute("r", "3");
                      circle.setAttribute("fill", "#09090b");
                      circle.setAttribute("stroke", color);
                      circle.setAttribute("stroke-width", "1.5");
                      circle.setAttribute("class", "fade-in cursor-crosshair");
                      circle.style.animationDelay = `${0.5 + (i * 0.1)}s`;

                      circle.addEventListener('mouseenter', (e) => showTooltip(e, `${data[i]}k`));
                      circle.addEventListener('mouseleave', hideTooltip);

                      svg.appendChild(circle);
                  });
              };

              drawPath(data2, COLORS.grey, "1.5");
              drawPath(data1, COLORS.primary, "2", true);

              this.container.appendChild(svg);
          }

          drawBar(data) {
              const svg = this.createSVG();
              const barWidth = (this.width / data.length) * 0.7;
              const spacing = (this.width / data.length);

              data.forEach((val, i) => {
                  const h = map(val, 0, 100, 0, this.height);
                  const x = (i * spacing) + (spacing/2) - (barWidth/2);
                  const y = this.height - h;

                  const isLast = i === data.length - 1;

                  const rect = document.createElementNS(this.ns, "rect");
                  rect.setAttribute("x", x);
                  rect.setAttribute("y", y);
                  rect.setAttribute("width", barWidth);
                  rect.setAttribute("height", h);
                  rect.setAttribute("rx", "2");
                  rect.setAttribute("fill", isLast ? COLORS.primary : COLORS.grey);
                  rect.setAttribute("class", "grow-bar cursor-pointer transition-all duration-300 hover:opacity-80");
                  if(isLast) rect.style.filter = 'drop-shadow(0px 0px 8px rgba(255, 85, 0, 0.3))';

                  rect.style.animationDelay = `${i * 0.1}s`;

                  rect.addEventListener('mouseenter', (e) => showTooltip(e, `${val}%`));
                  rect.addEventListener('mouseleave', hideTooltip);

                  svg.appendChild(rect);
              });

              this.container.appendChild(svg);
          }

          drawArea(data) {
              const svg = this.createSVG();
              const padding = 10;

              for(let i=0; i<3; i++) {
                  const y = map(i, 0, 2, this.height - padding, padding);
                  const line = document.createElementNS(this.ns, "line");
                  line.setAttribute("x1", 0);
                  line.setAttribute("y1", y);
                  line.setAttribute("x2", this.width);
                  line.setAttribute("y2", y);
                  line.setAttribute("stroke", COLORS.grid);
                  line.setAttribute("stroke-width", "1");
                  line.setAttribute("stroke-dasharray", "4 4");
                  svg.appendChild(line);
              }

              const points = data.map((val, i) => ({
                  x: map(i, 0, data.length - 1, 0, this.width),
                  y: map(val, 0, 100, this.height - padding, padding)
              }));

              const d = getBezierPath(points);

              // Create gradient
              const defs = document.createElementNS(this.ns, "defs");
              const gradient = document.createElementNS(this.ns, "linearGradient");
              gradient.setAttribute("id", "areaGrad");
              gradient.setAttribute("x1", "0");
              gradient.setAttribute("y1", "0");
              gradient.setAttribute("x2", "0");
              gradient.setAttribute("y2", "1");
              const stop1 = document.createElementNS(this.ns, "stop");
              stop1.setAttribute("offset", "0%");
              stop1.setAttribute("stop-color", COLORS.primary);
              stop1.setAttribute("stop-opacity", "0.3");
              const stop2 = document.createElementNS(this.ns, "stop");
              stop2.setAttribute("offset", "100%");
              stop2.setAttribute("stop-color", COLORS.primary);
              stop fill
              const areaPath = document.createElementNS(this.ns, "path");
              const areaD = d + ` L ${this.width},${this.height} L 0,${this.height} Z`;
              areaPath.setAttribute("d", areaD);
              areaPath.setAttribute("fill", "url(#areaGrad)");
              areaPath.setAttribute("class", "fade-in");
              svg.appendChild(areaPath);

              // Line
              const linePath = document.createElementNS(this.ns, "path");
              linePath.setAttribute("d", d);
              linePath.setAttribute("fill", "none");
              linePath.setAttribute("stroke", COLORS.primary);
              linePath.setAttribute("stroke-width", "2");
              linePath.setAttribute("class", "draw-path");
              linePath.style.filter = 'drop-shadow(0px 2px 6px rgba(255, 85, 0, 0.4))';
              svg.appendChild(linePath);

              // Data points
              points.forEach((p, i) => {
                  const circle = document.createElementNS(this.ns, "circle");
                  circle.setAttribute("cx", p.x);
                  circle.setAttribute("cy", p.y);
                  circle.setAttribute("r", "2.5");
                  circle.setAttribute("fill", "#09090b");
                  circle.setAttribute("stroke", COLORS.primary);
                  circle.setAttribute("stroke-width", "1.5");
                  circle.setAttribute("class", "fade-in cursor-crosshair");
                  circle.style.animationDelay = `${0.5 + (i * 0.08)}s`;

                  circle.addEventListener('mouseenter', (e) => showTooltip(e, `${data[i]} Gbps`));
                  circle.addEventListener('mouseleave', hideTooltip);

                  svg.appendChild(circle);
              });

              this.container.appendChild(svg);
          }

          drawProgress(items) {
              if (!this.container) return;
              this.container.innerHTML = '';
              items.forEach((item, i) => {
                  const wrapper = document.createElement('div');
                  wrapper.className = 'fade-in';
                  wrapper.style.animationDelay = `${i * 0.2}s`;

                  const labelRow = document.createElement('div');<span class="text-zinc-400">${item.label}</span><span class="${item.value > 80 ? 'text-[#ff5500]' : 'text-zinc-500'}">${item.value}%</span>`;

                  const trackOuter = document.createElement('div');
                  trackOuter.className = 'h-1.5 bg-zinc-800 rounded-full overflow-hidden';

                  const trackInner = document.createElement('div');
                  trackInner.className = 'h-full rounded-full transition-all duration-1000';
                  trackInner.style.width = item.value + '%';
                  trackInner.style.backgroundColor = item.value > 80 ? COLORS.primary : COLORS.grey;
                  if (item.value > 80) {
                      trackInner.style.boxShadow = '0 0 8px rgba(255, 85, 0, 0.5)';
                  }

                  trackOuter.appendChild(trackInner);
                  wrapper.appendChild(labelRow);
                  wrapper.appendChild(trackOuter);
                  this.container.appendChild(wrapper);
              });
          }
      }

      // Data generators
      const genLineData = () => Array.from({length: 10}, () => Math.floor(Math.random() * 60 + 30));
      const genBarData = () => Array.from({length: 7}, () => Math.floor(Math.random() * 70 + 20));
      const genAreaData = () => Array.from({length: 12}, () => Math.floor(Math.random() * 50 + 30));

      function renderAllCharts() {
          const lineChart = new ChartRenderer('line-chart');
          if (lineChart.container) {
              lineChart.clear();
              lineChart.drawLine(genLineData(), genLineData());
          }

          const barChart = new ChartRenderer('bar-chart');
          if (barChart.container) {
              barChart.clear();
              barChart.drawBar(genBarData());
          }

          const areaChart = new ChartRenderer('area-chart');
          if (areaChart.container) {
              areaChart.clear();
              areaChart.drawArea(genAreaData());
          }

          const progressChart = new ChartRenderer('progress-chart');
          if (progressChart.container) {
              progressChart.clear();
              progressChart.drawProgress([
                  { label: 'CPU', value: Math.floor(Math.random() * 30 + 60 + 30) },
              ]);
          }
      }

      function randomizeData() {
          renderAllCharts();
      }

      // Initialize on load
      window.addEventListener('load', () => {
          renderAllCharts();
      });

      // Resize handler
      let resizeTimeout;
      window.addEventListener('resize', () => {
          clearTimeout(resizeTimeout);
          resizeTimeout = setTimeout(renderAllCharts, 250);
      });
    
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
      
<div className="noise-bg"></div>
<div className="max-w-6xl mx-auto px-6 py-24 relative z-10 space-y-40">

<header className="border-b border-zinc-800/50 pb-12">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[#ff5500]"></div>
<span className="text-xs font-mono text-[#ff5500] tracking-widest uppercase">
            System Library 2.0
          </span>
</div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-50 mb-4">
          Enterprise Components
        </h1>
<p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
          A unified design system engineered for high-density interfaces.
          Focused on precision, minimal visual noise, and optimal performance
          across data-heavy applications. Enhanced with state-driven feedback
          patterns.
        </p>
</header>

<section id="icons">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<h2 className="text-xl font-medium tracking-tight">Iconography</h2>
<span className="text-xs font-mono text-zinc-500">
            Solar Linear // 1.5px
          </span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-px bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-800/50">

<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              dashboard
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              projects
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:check-square-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              tasks
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              calendar
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              team
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:settings-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              settings
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:bell-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              alerts
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              search
            </span>
</div>

<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:add-circle-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              create
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:pen-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              edit
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-red-500/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-red-500 transition-colors text-2xl drop-shadow-[0_0_0px_rgba(239,68,68,0)] group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" icon="solar:trash-bin-trash-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-red-500/80 transition-colors">
              delete
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:upload-minimalistic-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              upload
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:download-minimalistic-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              download
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:link-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              link
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:refresh-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              sync
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:filters-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              filter
            </span>
</div>

<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              success
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              warning
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-red-500/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-red-500 transition-colors text-2xl drop-shadow-[0_0_0px_rgba(239,68,68,0)] group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-red-500/80 transition-colors">
              error
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              pending
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:lock-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              locked
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:eye-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              visible
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              secure
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:tuning-2-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              config
            </span>
</div>

<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              document
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:gallery-minimalistic-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              media
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:code-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              code
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:database-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              data
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:chart-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              analytics
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:tag-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              label
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:clipboard-text-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              clipboard
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:archive-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              archive
            </span>
</div>

<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:chat-round-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              chat
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:letter-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              email
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:share-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              share
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              call
            </span>
</div>

<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              server
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:cloud-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              cloud
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              compute
            </span>
</div>
<div className="flex flex-col items-center justify-center p-6 bg-zinc-950 hover:bg-[#ff5500]/5 transition-colors group cursor-pointer">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-2xl drop-shadow-[0_0_0px_rgba(255,85,0,0)] group-hover:drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" icon="solar:widget-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-600 mt-3 group-hover:text-[#ff5500]/80 transition-colors">
              widgets
            </span>
</div>
</div>
</section>

<section id="charts">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">Axis</h2>
<p className="text-xs text-zinc-500 mt-1">
              Data visualization primitives
            </p>
</div>
<button className="text-xs font-mono text-[#ff5500] hover:text-[#ff8844] transition-colors flex items-center gap-2" onclick="randomizeData()">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
            Regenerate
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 relative overflow-hidden group hover:border-zinc-700/50 transition-colors">
<div className="flex justify-between mb-8 items-start">
<div>
<h3 className="text-sm font-medium text-zinc-300">
                  Revenue Velocity
                </h3>
<p className="text-xs text-zinc-500 mt-1">
                  Trailing 30 days vs projected
                </p>
</div>
<div className="flex gap-4 text-xs font-mono text-zinc-500">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full shadow-[0_0_5px_rgba(255,85,0,0.8)]"></span>
                  Actual
                </span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                  Target
                </span>
</div>
</div>
<div className="h-56 w-full" id="line-chart"></div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group hover:border-zinc-700/50 transition-colors">
<div className="flex justify-between mb-8">
<h3 className="text-sm font-medium text-zinc-300">
                Server Allocation
              </h3>
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="h-40 w-full" id="bar-chart"></div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group hover:border-zinc-700/50 transition-colors">
<div className="flex justify-between mb-8">
<h3 className="text-sm font-medium text-zinc-300">System Health</h3>
<div className="relative flex items-center justify-center w-6 h-6">
<span className="absolute w-1.5 h-1.5 bg-[#ff5500] rounded-full z-10 shadow-[0_0_10px_rgba(255,85,0,0.8)]"></span>
<span className="absolute w-full h-full border border-[#ff5500] rounded-full opacity-0 animate-[radar_2s_infinite]"></span>
<span className="absolute w-full h-full border border-[#ff5500] rounded-full opacity-0 animate-[radar_2s_0.6s_infinite]"></span>
</div>
</div>
<div className="h-40 w-full flex flex-col justify-center space-y-6" id="progress-chart"></div>
</div>

<div className="col-span-1 md:col-span-2 bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group hover:border-zinc-700/50 transition-colors">
<div className="flex justify-between mb-8">
<h3 className="text-sm font-medium text-zinc-300">Network Traffic</h3>
<div className="text-xs font-mono text-[#ff5500] bg-[#ff5500]/10 border border-[#ff5500]/20 px-2 py-1 rounded">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.8)] animate-pulse"></span>
                  Live
                </span>
</div>
</div>
<div className="h-40 w-full" id="area-chart"></div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group hover:border-zinc-700/50 transition-colors flex flex-col">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-300">
                Resource Distribution
              </h3>
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="relative">
<svg height="140" viewbox="0 0 140 140" width="140">
<circle cx="70" cy="70" fill="none" r="55" stroke="#27272a" strokeWidth="12"></circle>
<circle className="draw-path" cx="70" cy="70" fill="none" r="55" stroke="#ff5500" stroke-dasharray="207 346" stroke-dashoffset="-86" strokeLinecap="round" strokeWidth="12" style={{filter: 'drop-shadow(0 0 6px rgba(255,85,0,0.4))'}}></circle>
<circle className="draw-path" cx="70" cy="70" fill="none" r="55" stroke="#cc4400" stroke-dasharray="104 346" stroke-dashoffset="-293" strokeLinecap="round" strokeWidth="12" style={{animationDelay: '0.3s'}}></circle>
<circle className="draw-path" cx="70" cy="70" fill="none" r="55" stroke="#52525b" stroke-dasharray="35 346" stroke-dashoffset="-51" strokeLinecap="round" strokeWidth="12" style={{animationDelay: '0.6s'}}></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xl font-medium tracking-tight">60%</span>
<span className="text-xs text-zinc-500 font-mono">compute</span>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-4 text-xs font-mono text-zinc-500">
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-[#ff5500] rounded-full"></span>
                Compute
              </span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-[#cc4400] rounded-full"></span>
                Storage
              </span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span>
                Network
              </span>
</div>
</div>
</div>
<div className="absolute bg-zinc-900 text-zinc-50 text-xs font-mono px-2 py-1 rounded border border-[#ff5500]/50 pointer-events-none opacity-0 transition-opacity z-50 shadow-[0_0_15px_rgba(255,85,0,0.2)]" id="chart-tooltip"></div>
</section>

<section id="kinetic">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">Kinetic</h2>
<p className="text-xs text-zinc-500 mt-1">Full interaction library</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="space-y-6">
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-4 border-l-2 border-[#ff5500] pl-3">
              Input Controls
            </h3>

<div className="flex items-center justify-between p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
<span className="text-sm text-zinc-300">Hardware Acceleration</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="relative w-12 h-6 border border-zinc-700 bg-zinc-900 peer-checked:border-[#ff5500] peer-checked:bg-[#ff5500]/10 transition-colors rounded-sm">
<div className="absolute top-1/2 -translate-y-1/2 left-1 w-4 h-4 bg-zinc-500 peer-checked:bg-[#ff5500] peer-checked:translate-x-6 peer-checked:shadow-[0_0_10px_rgba(255,85,0,0.6)] transition-all duration-300 flex items-center justify-center rounded-sm"></div>
</div>
</label>
</div>

<div className="flex items-center justify-between p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
<span className="text-sm text-zinc-300">Dark Mode Override</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="relative w-12 h-6 border border-zinc-700 bg-zinc-900 peer-checked:border-[#ff5500] peer-checked:bg-[#ff5500]/10 transition-colors rounded-sm">
<div className="absolute top-1/2 -translate-y-1/2 left-1 w-4 h-4 bg-zinc-500 peer-checked:bg-[#ff5500] peer-checked:translate-x-6 peer-checked:shadow-[0_0_10px_rgba(255,85,0,0.6)] transition-all duration-300 flex items-center justify-center rounded-sm"></div>
</div>
</label>
</div>

<div className="flex items-center p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
<label className="flex items-center gap-3 cursor-pointer group w-full">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded-sm bg-zinc-950 peer-checked:bg-[#ff5500] peer-checked:border-[#ff5500] peer-checked:shadow-[0_0_10px_rgba(255,85,0,0.4)] transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors select-none">
                  Require approval workflows
                </span>
</label>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500 group-focus-within:text-[#ff5500] transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="bg-zinc-900/50 border border-zinc-800 text-zinc-50 text-sm rounded-lg focus:border-[#ff5500] focus:ring-0 block w-full pl-10 p-2.5 outline-none transition-colors placeholder-zinc-600 shadow-sm" placeholder="Search resources..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-xs text-zinc-600 font-mono border border-zinc-800 rounded px-1.5 py-0.5 group-focus-within:border-[#ff5500]/50 group-focus-within:text-[#ff5500] transition-colors">
                  ⌘K
                </span>
</div>
</div>

<div className="p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20">
<div className="flex justify-between text-xs font-mono text-zinc-400 mb-3">
<span>Throttle Limit</span>
<span className="text-[#ff5500]" id="slider-val">65%</span>
</div>
<div className="relative h-1.5 bg-zinc-800 rounded-full cursor-pointer" id="custom-slider" onclick="handleSlider(event)">
<div className="h-full bg-[#ff5500] rounded-full shadow-[0_0_8px_rgba(255,85,0,0.5)] pointer-events-none" id="slider-fill" style={{width: '65%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-zinc-950 border-2 border-[#ff5500] rounded-full shadow-[0_0_10px_rgba(255,85,0,0.4)] cursor-grab" id="slider-thumb" style={{left: 'calc(65% - 7px)'}}></div>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-4 border-l-2 border-[#ff5500] pl-3">
              Action States
            </h3>

<button className="w-full group relative px-4 py-2 bg-[#ff5500] text-white rounded-md hover:bg-[#ff6611] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_15px_rgba(255,85,0,0.3)] hover:shadow-[0_0_25px_rgba(255,85,0,0.5)]">
<span className="text-sm font-semibold tracking-widest uppercase">
                Deploy Application
              </span>
<svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
<svg className="absolute top-0 left-0 w-2 h-2 text-white/50" viewbox="0 0 10 10">
<path d="M0 10V0H10" fill="none" stroke="currentColor"></path>
</svg>
<svg className="absolute bottom-0 right-0 w-2 h-2 text-white/50" viewbox="0 0 10 10">
<path d="M10 0V10H0" fill="none" stroke="currentColor"></path>
</svg>
</button>

<button className="w-full px-4 py-2 border border-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:export-linear"></iconify-icon>
<span className="text-sm font-medium">Export Report</span>
</button>

<button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-900 transition-colors shadow-sm cursor-wait">
<svg className="animate-[spin_1s_linear_infinite] shrink-0" height="20" viewbox="0 0 40 40" width="20">
<circle cx="20" cy="20" fill="none" r="16" stroke="#27272a" strokeWidth="4"></circle>
<circle cx="20" cy="20" fill="none" r="16" stroke="#ff5500" stroke-dasharray="100" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<span className="text-sm font-medium">Syncing Data…</span>
</button>

<div className="flex items-start gap-3 p-4 rounded-lg border border-[#ff5500]/30 bg-[#ff5500]/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#ff5500]"></div>
<iconify-icon className="text-[#ff5500] mt-0.5 text-lg drop-shadow-[0_0_5px_rgba(255,85,0,0.6)]" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-[#ff5500] mb-1">
                  Connection Interrupted
                </h4>
<p className="text-xs text-[#ff5500]/80">
                  Unable to reach the primary database node. Retrying in 5s.
                </p>
</div>
</div>

<div className="flex items-start gap-3 p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<iconify-icon className="text-emerald-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-emerald-400 mb-1">
                  Deployment Successful
                </h4>
<p className="text-xs text-emerald-400/80">
                  All 12 services are running in production.
                </p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-4 border-l-2 border-[#ff5500] pl-3">
              Feedback &amp; Status
            </h3>

<div className="p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20 w-full animate-pulse">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-zinc-800/80"></div>
<div className="space-y-2 flex-1">
<div className="h-3 bg-zinc-800/80 rounded w-1/2"></div>
<div className="h-2 bg-zinc-800/80 rounded w-1/3"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 bg-zinc-800/80 rounded w-full"></div>
<div className="h-2 bg-zinc-800/80 rounded w-5/6"></div>
</div>
</div>

<div className="p-4 rounded-lg border border-zinc-800/50 bg-zinc-900/20 w-full">
<div className="flex justify-between text-xs font-mono text-zinc-400 mb-2 tracking-wider uppercase">
<span>System Migration</span>
<span className="text-[#ff5500]">78%</span>
</div>
<div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-[#ff5500] w-[78%] shadow-[0_0_10px_rgba(255,85,0,0.8)] relative">
<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent to-white/30 animate-[dash_2s_linear_infinite]"></div>
</div>
</div>
</div>

<div className="p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/50 flex items-center gap-3 shadow-lg animate-[slideUp_0.3s_ease-out]">
<div className="w-8 h-8 rounded-full bg-[#ff5500]/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-[#ff5500]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-zinc-200 truncate">
                  Changes saved successfully
                </p>
<p className="text-xs text-zinc-500">2 seconds ago</p>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors flex-shrink-0">
<iconify-icon className="text-base" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-zinc-900/30 border border-zinc-800/50 rounded-lg flex flex-col items-center justify-center group cursor-help relative hover:border-[#ff5500]/50 transition-colors">
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] transition-colors text-xl" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-600 mt-2 font-mono">HOVER</span>
<div className="absolute bottom-full mb-2 tooltip-box z-10">
<div className="bg-[#ff5500] text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap shadow-[0_4px_15px_rgba(255,85,0,0.4)]">
                    More info here
                  </div>
</div>
</div>
<div className="aspect-square bg-zinc-900/30 border border-zinc-800/50 rounded-lg flex flex-col items-center justify-center group cursor-pointer relative hover:border-[#ff5500]/50 transition-colors">
<label className="cursor-pointer flex flex-col items-center">
<input className="sr-only peer" type="checkbox"/>
<iconify-icon className="text-zinc-500 peer-checked:text-[#ff5500] transition-colors text-xl peer-checked:animate-[pop_0.3s_ease-out] peer-checked:drop-shadow-[0_0_8px_rgba(255,85,0,0.6)]" icon="solar:bookmark-linear"></iconify-icon>
</label>
<span className="text-xs text-zinc-600 mt-2 font-mono">SAVE</span>
</div>
<div className="aspect-square bg-zinc-900/30 border border-zinc-800/50 rounded-lg flex flex-col items-center justify-center group cursor-pointer active:scale-95 transition-all hover:border-[#ff5500]/50" onclick="this.querySelector('.copy-icon').setAttribute('icon', 'solar:check-circle-linear'); this.querySelector('.copy-icon').classList.add('text-[#ff5500]', 'drop-shadow-[0_0_8px_rgba(255,85,0,0.6)]'); setTimeout(() =&gt; {this.querySelector('.copy-icon').setAttribute('icon', 'solar:copy-linear'); this.querySelector('.copy-icon').classList.remove('text-[#ff5500]', 'drop-shadow-[0_0_8px_rgba(255,85,0,0.6)]')}, 1500)">
<iconify-icon className="copy-icon text-zinc-500 group-hover:text-[#ff5500] transition-colors text-xl" icon="solar:copy-linear"></iconify-icon>
<span className="text-xs text-zinc-600 mt-2 font-mono">COPY</span>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-8 border-t border-zinc-800/50">
<div className="flex items-center justify-between w-full relative max-w-2xl mx-auto">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-zinc-800 z-0"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-[1px] bg-[#ff5500] z-0 shadow-[0_0_5px_rgba(255,85,0,0.5)]"></div>
<div className="relative z-10 w-6 h-6 rounded-full bg-zinc-950 border border-[#ff5500] flex items-center justify-center text-[#ff5500] shadow-[0_0_10px_rgba(255,85,0,0.3)]">
<svg className="w-3 h-3 text-[#ff5500]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div className="relative z-10 w-6 h-6 rounded-full bg-zinc-950 border border-[#ff5500] flex items-center justify-center shadow-[0_0_15px_rgba(255,85,0,0.4)]">
<div className="w-1.5 h-1.5 bg-[#ff5500] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,85,0,1)]"></div>
</div>
<div className="relative z-10 w-6 h-6 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 text-xs font-mono">
              3
            </div>
</div>
<div className="flex justify-between mt-3 text-xs font-mono uppercase text-zinc-500 max-w-2xl mx-auto">
<span className="text-[#ff5500]">Build</span>
<span className="text-zinc-200">Test</span>
<span>Deploy</span>
</div>
</div>
</section>

<section id="onyx-assets">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">Onyx</h2>
<p className="text-xs text-zinc-500 mt-1">
              UI asset components &amp; cards
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff5500] to-[#cc4400] flex items-center justify-center text-white font-medium text-sm shadow-[0_0_20px_rgba(255,85,0,0.3)]">
                AK
              </div>
<div>
<h4 className="text-sm font-medium text-zinc-200">Ava Kowalski</h4>
<p className="text-xs text-zinc-500 font-mono">Lead Engineer</p>
</div>
<div className="ml-auto">
<span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                  Online
                </span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800/50">
<div className="text-center">
<div className="text-lg font-medium tracking-tight text-zinc-100">
                  142
                </div>
<div className="text-xs text-zinc-500 font-mono">Commits</div>
</div>
<div className="text-center">
<div className="text-lg font-medium tracking-tight text-zinc-100">
                  38
                </div>
<div className="text-xs text-zinc-500 font-mono">PRs</div>
</div>
<div className="text-center">
<div className="text-lg font-medium tracking-tight text-[#ff5500]">
                  97%
                </div>
<div className="text-xs text-zinc-500 font-mono">Approval</div>
</div>
</div>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center">
<iconify-icon className="text-[#ff5500] text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
<iconify-icon className="text-xs" icon="solar:arrow-up-linear"></iconify-icon>
                +12.5%
              </span>
</div>
<div className="text-3xl font-medium tracking-tight text-zinc-100 mb-1" style={{animation: 'countUp 0.6s ease-out'}}>
              $48,294
            </div>
<p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
              Monthly Revenue
            </p>
<div className="mt-4 h-12 flex items-end gap-1">
<div className="flex-1 bg-zinc-800 rounded-sm h-[30%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[45%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[35%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[60%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[50%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[70%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[65%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[80%]"></div>
<div className="flex-1 bg-zinc-800 rounded-sm h-[75%]"></div>
<div className="flex-1 bg-[#ff5500] rounded-sm h-[95%] shadow-[0_0_8px_rgba(255,85,0,0.4)]"></div>
</div>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group">
<h4 className="text-sm font-medium text-zinc-300 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
              Recent Activity
            </h4>
<div className="space-y-4">
<div className="flex items-start gap-3 relative">
<div className="absolute left-[7px] top-4 w-px h-full bg-zinc-800"></div>
<div className="w-3.5 h-3.5 rounded-full border-2 border-[#ff5500] bg-zinc-950 flex-shrink-0 mt-0.5 z-10 shadow-[0_0_6px_rgba(255,85,0,0.3)]"></div>
<div>
<p className="text-xs text-zinc-300">
                    Deployment
                    <span className="text-[#ff5500] font-mono">v2.4.1</span>
                    completed
                  </p>
<p className="text-xs text-zinc-600 font-mono mt-0.5">
                    2 min ago
                  </p>
</div>
</div>
<div className="flex items-start gap-3 relative">
<div className="absolute left-[7px] top-4 w-px h-full bg-zinc-800"></div>
<div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-700 bg-zinc-950 flex-shrink-0 mt-0.5 z-10"></div>
<div>
<p className="text-xs text-zinc-300">
                    Database migration
                    <span className="text-zinc-400 font-mono">schema_v12</span>
</p>
<p className="text-xs text-zinc-600 font-mono mt-0.5">
                    14 min ago
                  </p>
</div>
</div>
<div className="flex items-start gap-3 relative">
<div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-700 bg-zinc-950 flex-shrink-0 mt-0.5 z-10"></div>
<div>
<p className="text-xs text-zinc-300">
                    Security scan passed —
                    <span className="text-emerald-400 font-mono">0 issues</span>
</p>
<p className="text-xs text-zinc-600 font-mono mt-0.5">1 hr ago</p>
</div>
</div>
</div>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden group col-span-1 md:col-span-2">
<div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800/50 bg-zinc-900/50">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
</div>
<span className="text-xs font-mono text-zinc-500 ml-2">
                  config.ts
                </span>
</div>
<button className="text-xs font-mono text-zinc-500 hover:text-[#ff5500] transition-colors flex items-center gap-1">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
                Copy
              </button>
</div>
<pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto"><code><span className="text-zinc-500">const</span> <span className="text-[#ff8844]">config</span> <span className="text-zinc-500">=</span> {
  <span className="text-zinc-400">endpoint</span>: <span className="text-[#ff5500]">"https://api.nexus.dev"</span>,
  <span className="text-zinc-400">version</span>:  <span className="text-[#ff5500]">"2.0.0"</span>,
  <span className="text-zinc-400">cluster</span>:  <span className="text-[#ff5500]">"us-east-1"</span>,
  <span className="text-zinc-400">features</span>: {
    <span className="text-zinc-400">telemetry</span>: <span className="text-[#ff8844]">true</span>,
    <span className="text-zinc-400">encryption</span>: <span className="text-[#ff8844]">true</span>,
  }
};</code></pre>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 group">
<h4 className="text-sm font-medium text-zinc-300 mb-4">
              Notification Queue
            </h4>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/30">
<div className="w-2 h-2 rounded-full bg-[#ff5500] shadow-[0_0_6px_rgba(255,85,0,0.6)]"></div>
<span className="text-xs text-zinc-300 flex-1">
                  Build queue overflow
                </span>
<span className="text-xs text-zinc-600 font-mono">now</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/30">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-zinc-300 flex-1">
                  SSL cert renewed
                </span>
<span className="text-xs text-zinc-600 font-mono">5m</span>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/30">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-xs text-zinc-300 flex-1">
                  Backup completed
                </span>
<span className="text-xs text-zinc-600 font-mono">1h</span>
</div>
</div>
</div>
</div>
</section>

<section id="opnyx-assets">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">OPnyx</h2>
<p className="text-xs text-zinc-500 mt-1">Extended UI asset library</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                +8.2%
              </span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
              2,847
            </div>
<p className="text-xs text-zinc-500 font-mono mt-1">Active Users</p>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs font-mono text-[#ff5500] bg-[#ff5500]/10 px-1.5 py-0.5 rounded">
                99.97%
              </span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
              24/7
            </div>
<p className="text-xs text-zinc-500 font-mono mt-1">Uptime</p>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                -15ms
              </span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
              42ms
            </div>
<p className="text-xs text-zinc-500 font-mono mt-1">Avg Latency</p>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5">
<div className="flex items-center justify-between mb-3">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Clean
              </span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
              0
            </div>
<p className="text-xs text-zinc-500 font-mono mt-1">Vulnerabilities</p>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-4 kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl overflow-hidden">
<div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50">
<h4 className="text-sm font-medium text-zinc-300">
                Service Registry
              </h4>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-500 text-xs" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-zinc-900/50 border border-zinc-800 rounded text-xs pl-7 pr-3 py-1.5 outline-none focus:border-[#ff5500] transition-colors text-zinc-300 placeholder-zinc-600 w-40" placeholder="Filter…" type="text"/>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-xs">
<thead>
<tr className="border-b border-zinc-800/50 text-zinc-500 font-mono uppercase tracking-wider">
<th className="text-left px-6 py-3 font-medium">Service</th>
<th className="text-left px-6 py-3 font-medium">Status</th>
<th className="text-left px-6 py-3 font-medium">Region</th>
<th className="text-left px-6 py-3 font-medium">Latency</th>
<th className="text-right px-6 py-3 font-medium">Requests/s</th>
</tr>
</thead>
<tbody className="text-zinc-300">
<tr className="border-b border-zinc-800/30 hover:bg-[#ff5500]/5 transition-colors">
<td className="px-6 py-3 font-mono text-zinc-200">
                      api-gateway
                    </td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]"></span>
                        Healthy
                      </span>
</td>
<td className="px-6 py-3 text-zinc-500">us-east-1</td>
<td className="px-6 py-3 font-mono text-[#ff5500]">12ms</td>
<td className="px-6 py-3 text-right font-mono">14,280</td>
</tr>
<tr className="border-b border-zinc-800/30 hover:bg-[#ff5500]/5 transition-colors">
<td className="px-6 py-3 font-mono text-zinc-200">
                      auth-service
                    </td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]"></span>
                        Healthy
                      </span>
</td>
<td className="px-6 py-3 text-zinc-500">us-east-1</td>
<td className="px-6 py-3 font-mono">24ms</td>
<td className="px-6 py-3 text-right font-mono">8,420</td>
</tr>
<tr className="border-b border-zinc-800/30 hover:bg-[#ff5500]/5 transition-colors">
<td className="px-6 py-3 font-mono text-zinc-200">
                      data-pipeline
                    </td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shadow-[0_0_4px_rgba(255,85,0,0.5)] animate-pulse"></span>
<span className="text-[#ff5500]">Degraded</span>
</span>
</td>
<td className="px-6 py-3 text-zinc-500">eu-west-1</td>
<td className="px-6 py-3 font-mono text-[#ff5500]">186ms</td>
<td className="px-6 py-3 text-right font-mono">3,150</td>
</tr>
<tr className="hover:bg-[#ff5500]/5 transition-colors">
<td className="px-6 py-3 font-mono text-zinc-200">
                      ml-inference
                    </td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.5)]"></span>
                        Healthy
                      </span>
</td>
<td className="px-6 py-3 text-zinc-500">us-west-2</td>
<td className="px-6 py-3 font-mono">45ms</td>
<td className="px-6 py-3 text-right font-mono">6,890</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-zinc-300 mb-4">Team Members</h4>
<div className="flex items-center">
<div className="flex -space-x-2">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff5500] to-[#cc4400] flex items-center justify-center text-white text-xs font-medium border-2 border-zinc-950 shadow-[0_0_8px_rgba(255,85,0,0.2)]">
                  AK
                </div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center text-white text-xs font-medium border-2 border-zinc-950">
                  JR
                </div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center text-white text-xs font-medium border-2 border-zinc-950">
                  ML
                </div>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center text-white text-xs font-medium border-2 border-zinc-950">
                  TS
                </div>
<div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 text-xs font-mono border-2 border-zinc-950">
                  +5
                </div>
</div>
<div className="ml-4 text-xs text-zinc-400">
<span className="text-zinc-200 font-medium">9 members</span>
                across 3 timezones
              </div>
</div>
</div>

<div className="kinetic-card bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 col-span-1 md:col-span-2">
<h4 className="text-sm font-medium text-zinc-300 mb-4">
              Tags &amp; Labels
            </h4>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 text-[#ff5500]">
                production
              </span>
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                stable
              </span>
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400">
                v2.4.1
              </span>
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
                beta
              </span>
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400">
                docker
              </span>
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 text-[#ff5500]">
                critical
              </span>
<span className="text-xs font-mono px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-400">
                kubernetes
              </span>
</div>
</div>
</div>
</section>

<section className="relative py-24 rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-zinc-900/20 to-zinc-950 overflow-hidden" id="nexus-layout">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#ff5500] to-transparent opacity-40 shadow-[0_0_20px_rgba(255,85,0,1)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff5500]/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="px-8 md:px-16 relative z-10 mb-12">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-[#ff5500]"></div>
<span className="text-xs font-mono text-[#ff5500] tracking-widest uppercase">
              Section 6
            </span>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Nexus Pro</h2>
<p className="text-xs text-zinc-500">
            Complex layout compositions &amp; hero elements
          </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-center px-8 md:px-16 relative z-10">

<div className="lg:col-span-5 space-y-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 text-xs font-mono text-[#ff5500]">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse shadow-[0_0_8px_rgba(255,85,0,0.8)]"></span>
              Architecture V2
            </div>
<h2 className="text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Absolute
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff8844] to-[#ff5500] drop-shadow-[0_0_15px_rgba(255,85,0,0.2)]">
                Precision.
              </span>
</h2>
<p className="text-sm text-zinc-400 leading-relaxed border-l-2 border-[#ff5500] pl-4 max-w-sm">
              Engineered for zero-latency environments. The new standard in
              high-frequency data processing and ergonomic workflow management.
            </p>
<div className="flex items-center gap-4 pt-4">
<button className="px-6 py-2.5 bg-[#ff5500] text-white text-sm font-medium rounded-md hover:bg-[#ff6611] transition-all shadow-[0_0_15px_rgba(255,85,0,0.3)] hover:shadow-[0_0_25px_rgba(255,85,0,0.5)]">
                Initialize System
              </button>
<button className="px-6 py-2.5 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-colors">
                View Specs
              </button>
</div>
<div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800/50 max-w-md">
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
                  0.1ms
                </div>
<div className="text-xs font-mono text-[#ff5500] uppercase mt-1">
                  Latency
                </div>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
                  99.9%
                </div>
<div className="text-xs font-mono text-[#ff5500] uppercase mt-1">
                  Uptime SLA
                </div>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-zinc-100">
                  256-bit
                </div>
<div className="text-xs font-mono text-[#ff5500] uppercase mt-1">
                  Encryption
                </div>
</div>
</div>
</div>

<div className="lg:col-span-7 relative flex justify-center items-center perspective-[1000px] h-[400px]">
<div className="w-full max-w-lg relative animate-[float_6s_ease-in-out_infinite] group transform-style-3d hover:rotate-y-12 hover:-rotate-x-12 transition-transform duration-700 ease-out">
<svg style={{width: '100%', height: 'auto', filter: 'contrast(110%)'}} viewbox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="bodyGrad-sec12" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#27272a', stopOpacity: '1'}}></stop>
<stop offset="30%" style={{stopColor: '#18181b', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#09090b', stopOpacity: '1'}}></stop>
</lineargradient>
<radialgradient cx="50%" cy="50%" fx="50%" fy="50%" id="gripGrad-sec12" r="50%">
<stop offset="70%" style={{stopColor: '#18181b', stopOpacity: '0'}}></stop>
<stop offset="100%" style={{stopColor: '#000000', stopOpacity: '0.4'}}></stop>
</radialgradient>
<lineargradient id="btnGlare-sec12" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: '0.6'}}></stop>
<stop offset="50%" style={{stopColor: '#ffffff', stopOpacity: '0'}}></stop>
</lineargradient>
<filter height="200%" id="ledGlow-sec12" width="200%" x="-50%" y="-50%">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="4"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M150,80 C150,80 180,50 300,50 C420,50 450,80 450,80 C480,80 530,90 540,150 C550,210 540,300 500,350 C460,400 410,350 400,320 C380,300 350,280 300,280 C250,280 220,300 200,320 C190,350 140,400 100,350 C60,300 50,210 60,150 C70,90 120,80 150,80 Z" fill="url(#bodyGrad-sec12)" stroke="#ff5500" stroke-opacity="0.3" strokeWidth="1"></path>
<path d="M60,150 C50,210 60,300 100,350 C140,400 190,350 200,320" fill="url(#gripGrad-sec12)"></path>
<path d="M540,150 C550,210 540,300 500,350 C460,400 410,350 400,320" fill="url(#gripGrad-sec12)"></path>
<path d="M160,55 L440,55" fill="none" filter="url(#ledGlow-sec12)" stroke="#ff5500" strokeWidth="2"></path>
<g transform="translate(170, 150)">
<circle cx="0" cy="0" fill="#09090b" r="35" stroke="#000" strokeWidth="1"></circle>
<circle cx="0" cy="0" fill="#18181b" r="30"></circle>
<circle cx="0" cy="0" fill="#09090b" r="25" stroke="#ff5500" stroke-opacity="0.5" strokeWidth="1"></circle>
<circle cx="0" cy="-10" fill="white" opacity="0.03" r="15"></circle>
<circle cx="0" cy="0" fill="none" r="28" stroke="#27272a" stroke-dasharray="2,2" strokeWidth="1"></circle>
</g>
<g transform="translate(220, 240)">
<circle cx="0" cy="0" fill="#09090b" r="45"></circle>
<path d="M-12,-35 L12,-35 L15,-15 L35,-12 L35,12 L15,15 L12,35 L-12,35 L-15,15 L-35,12 L-35,-12 L-15,-15 Z" fill="#18181b" stroke="#ff5500" stroke-opacity="0.3" strokeWidth="1"></path>
<path d="M-12,-35 L12,-35 L15,-15 L35,-12 L35,12 L15,15 L12,35 L-12,35 L-15,15 L-35,12 L-35,-12 L-15,-15 Z" fill="url(#btnGlare-sec12)" opacity="0.1"></path>
</g>
<g transform="translate(380, 240)">
<circle cx="0" cy="0" fill="#09090b" r="35" stroke="#000" strokeWidth="1"></circle>
<circle cx="0" cy="0" fill="#18181b" r="30"></circle>
<circle cx="0" cy="0" fill="#09090b" r="25" stroke="#ff5500" stroke-opacity="0.5" strokeWidth="1"></circle>
<circle cx="0" cy="-10" fill="white" opacity="0.03" r="15"></circle>
</g>
<g transform="translate(430, 150)">
<g transform="translate(0, -35)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#09090b" strokeWidth="2"></circle>
<text fill="#ff5500" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">
                      Y
                    </text>
</g>
<g transform="translate(35, 0)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#09090b" strokeWidth="2"></circle>
<text fill="#52525b" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">
                      B
                    </text>
</g>
<g transform="translate(0, 35)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#09090b" strokeWidth="2"></circle>
<text fill="#52525b" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">
                      A
                    </text>
</g>
<g transform="translate(-35, 0)">
<circle cx="0" cy="0" fill="#000" r="16" stroke="#09090b" strokeWidth="2"></circle>
<text fill="#ff5500" fontFamily="sans-serif" fontSize="16" font-weight="bold" text-anchor="middle" x="0" y="5">
                      X
                    </text>
</g>
</g>
<g transform="translate(300, 100)">
<circle cx="0" cy="0" fill="#18181b" r="20" stroke="#000" strokeWidth="1"></circle>
<circle cx="0" cy="0" fill="#ff5500" filter="url(#ledGlow-sec12)" r="14"></circle>
</g>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-zinc-900/80 backdrop-blur-md border border-[#ff5500]/30 p-4 rounded-lg max-w-[200px] shadow-[0_10px_30px_rgba(255,85,0,0.15)]">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#ff5500]" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-mono text-[#ff5500] uppercase tracking-wider">
                  Secure Enclave
                </span>
</div>
<p className="text-xs text-zinc-400 leading-tight">
                Hardware-level encryption for all incoming telemetry streams.
              </p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<div className="w-3 h-3 rounded-full bg-[#ff5500] shadow-[0_0_12px_rgba(255,85,0,0.6)] animate-[orbit_8s_linear_infinite]"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<div className="w-2 h-2 rounded-full bg-zinc-500 animate-[orbit-reverse_12s_linear_infinite]"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-16 mt-16 relative z-10">
<div className="kinetic-card p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20">
<div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-[#ff5500] text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-200 mb-2">
              Edge Computing
            </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
              Sub-millisecond response times with globally distributed edge
              nodes. Automatic failover and load balancing.
            </p>
</div>
<div className="kinetic-card p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20">
<div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-[#ff5500] text-xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-200 mb-2">
              Zero Trust Security
            </h4>
<p className="text-xs text-zinc-500 leading-relaxed">
              Every request authenticated. mTLS encryption, RBAC policies, and
              real-time threat detection.
            </p>
</div>
<div className="kinetic-card p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20">
<div className="w-10 h-10 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center mb-4">
<iconify-icon className="text-[#ff5500] text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-200 mb-2">Auto Scaling</h4>
<p className="text-xs text-zinc-500 leading-relaxed">
              Intelligent resource allocation that scales from zero to millions
              of requests without configuration.
            </p>
</div>
</div>

<div className="mx-8 md:mx-16 mt-12 relative z-10">
<div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-2xl max-w-xl mx-auto overflow-hidden">
<div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800/50">
<iconify-icon className="text-zinc-500" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm text-zinc-400">
                Type a command or search…
              </span>
<span className="ml-auto text-xs font-mono text-zinc-600 border border-zinc-800 rounded px-1.5 py-0.5">
                ESC
              </span>
</div>
<div className="py-2">
<div className="px-3 py-1">
<span className="text-xs font-mono text-zinc-600 uppercase tracking-wider px-1">
                  Actions
                </span>
</div>
<div className="px-2 py-1.5 mx-1 rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center gap-3 cursor-pointer">
<iconify-icon className="text-[#ff5500]" icon="solar:add-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Create New Project</span>
<span className="ml-auto text-xs font-mono text-zinc-500">⌘N</span>
</div>
<div className="px-2 py-1.5 mx-1 rounded-lg hover:bg-zinc-800/50 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon className="text-zinc-500" icon="solar:upload-minimalistic-linear"></iconify-icon>
<span className="text-sm text-zinc-400">Deploy to Production</span>
<span className="ml-auto text-xs font-mono text-zinc-600">⌘D</span>
</div>
<div className="px-2 py-1.5 mx-1 rounded-lg hover:bg-zinc-800/50 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon className="text-zinc-500" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm text-zinc-400">Open Settings</span>
<span className="ml-auto text-xs font-mono text-zinc-600">⌘,</span>
</div>
</div>
</div>
</div>
</section>

<section id="kinetic-v2">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">Kinetic V2</h2>
<p className="text-xs text-zinc-500 mt-1">
              Loading States &amp; Micro-interactions
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="space-y-6">
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-4 border-l-2 border-[#ff5500] pl-3">
              Loading States
            </h3>

<div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 flex flex-col items-center justify-center gap-4 min-h-[160px]">
<div className="flex gap-2">
<div className="w-2 h-2 bg-[#ff5500] rounded-full animate-bounce shadow-[0_0_8px_rgba(255,85,0,0.5)]" style={{animationDelay: '0ms'}}></div>
<div className="w-2 h-2 bg-[#ff5500] rounded-full animate-bounce shadow-[0_0_8px_rgba(255,85,0,0.5)]" style={{animationDelay: '150ms'}}></div>
<div className="w-2 h-2 bg-[#ff5500] rounded-full animate-bounce shadow-[0_0_8px_rgba(255,85,0,0.5)]" style={{animationDelay: '300ms'}}></div>
</div>
<span className="text-xs font-mono text-zinc-500">Processing...</span>
</div>

<div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 flex flex-col items-center justify-center gap-4 min-h-[160px]">
<svg className="w-8 h-8 text-[#ff5500] animate-spin drop-shadow-[0_0_8px_rgba(255,85,0,0.4)]" fill="none" viewbox="0 0 24 24">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
<span className="text-xs font-mono text-zinc-500">Connecting</span>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-4 border-l-2 border-[#ff5500] pl-3">
              Micro-interactions
            </h3>

<div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 group cursor-pointer hover:border-[#ff5500]/50 transition-all duration-300">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-300 group-hover:text-[#ff5500] transition-colors">
                  Server Details
                </span>
<iconify-icon className="text-zinc-500 group-hover:text-[#ff5500] group-hover:rotate-180 transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
<div className="overflow-hidden">
<p className="text-xs text-zinc-500 mt-4 leading-relaxed">
                    Detailed metrics and logs are available upon expansion. This
                    pattern maintains high-density while allowing discovery.
                  </p>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 group relative overflow-hidden h-[160px] flex items-center justify-center">
<div className="absolute inset-0 bg-[#ff5500]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-center justify-center backdrop-blur-sm">
<button className="px-4 py-2 bg-[#ff5500] text-white text-xs font-semibold uppercase tracking-widest rounded shadow-[0_0_15px_rgba(255,85,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  View Analytics
                </button>
</div>
<div className="text-center group-hover:scale-95 transition-transform duration-500">
<iconify-icon className="text-3xl text-zinc-500 mb-2" icon="solar:chart-square-linear"></iconify-icon>
<p className="text-sm text-zinc-300 font-medium">Monthly Report</p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-4 border-l-2 border-[#ff5500] pl-3">
              Status Feedback
            </h3>

<div className="p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20 min-h-[160px] flex flex-col justify-center gap-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<span className="absolute w-4 h-4 bg-emerald-500/30 rounded-full animate-ping"></span>
<span className="relative w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</div>
<span className="text-sm text-zinc-300">API Gateway</span>
</div>
<span className="text-xs font-mono text-emerald-500">Online</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<span className="absolute w-4 h-4 bg-yellow-500/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></span>
<span className="relative w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.8)]"></span>
</div>
<span className="text-sm text-zinc-300">Database Sync</span>
</div>
<span className="text-xs font-mono text-yellow-500">Syncing</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<span className="absolute w-4 h-4 bg-red-500/30 rounded-full animate-ping"></span>
<span className="relative w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
</div>
<span className="text-sm text-zinc-300">Cache Server</span>
</div>
<span className="text-xs font-mono text-red-500">Offline</span>
</div>
</div>
</div>
</div>
</section>

<section id="visual-elements">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">Onyx Assets V2</h2>
<p className="text-xs text-zinc-500 mt-1">
              Section Dividers, Patterns, Decorative Accents &amp; Fluid
              Geometry
            </p>
</div>
</div>
<div className="space-y-16">

<div>
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-8 border-l-2 border-[#ff5500] pl-3">
              Section Dividers
            </h3>
<div className="space-y-12">

<div className="relative flex items-center py-4">
<div className="flex-grow border-t border-zinc-800/80"></div>
<div className="flex-shrink-0 mx-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shadow-[0_0_8px_rgba(255,85,0,0.6)]"></div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    End of Log
                  </span>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex-grow border-t border-zinc-800/80"></div>
</div>

<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-800/80 border-dashed"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-zinc-950 px-4 text-xs font-mono text-[#ff5500] border border-[#ff5500]/30 rounded-full py-1 shadow-[0_0_10px_rgba(255,85,0,0.1)]">
                    // Block Separator
                  </span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-8 border-l-2 border-[#ff5500] pl-3">
              Seamless Patterns &amp; Fluid Geometry
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="h-48 rounded-xl border border-zinc-800/50 bg-zinc-950 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#ff5500 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.1'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
<span className="relative z-10 text-sm font-medium text-zinc-300 bg-zinc-950/80 px-4 py-2 rounded-lg border border-zinc-800/50 backdrop-blur-sm">
                  Radial Dot Matrix
                </span>
</div>

<div className="h-48 rounded-xl border border-zinc-800/50 bg-zinc-950 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, #ff5500 0, #ff5500 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px', opacity: '0.05'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-zinc-950"></div>
<span className="relative z-10 text-sm font-medium text-zinc-300 bg-zinc-950/80 px-4 py-2 rounded-lg border border-zinc-800/50 backdrop-blur-sm">
                  Hatch Pattern
                </span>
</div>

<div className="h-48 rounded-xl border border-zinc-800/50 bg-zinc-950 relative overflow-hidden flex items-center justify-center group">
<div className="absolute w-32 h-32 bg-[#ff5500]/20 rounded-full blur-[30px] group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
<div className="absolute w-24 h-24 border border-[#ff5500]/30 rounded-full group-hover:rotate-180 transition-transform duration-1000"></div>
<div className="absolute w-16 h-16 border border-[#ff5500]/50 rounded-full border-dashed group-hover:-rotate-90 transition-transform duration-1000"></div>
<span className="relative z-10 text-sm font-medium text-zinc-300 bg-zinc-950/80 px-4 py-2 rounded-lg border border-zinc-800/50 backdrop-blur-sm">
                  Fluid Geometry
                </span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-mono text-zinc-500 tracking-wider uppercase mb-8 border-l-2 border-[#ff5500] pl-3">
              Decorative Accents
            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-zinc-900/30 relative flex items-center justify-center min-h-[120px]">
<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ff5500]"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ff5500]"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ff5500]"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ff5500]"></div>
<span className="text-xs font-mono text-zinc-400">
                  Target Focus
                </span>
</div>

<div className="p-6 rounded-xl bg-zinc-900/30 relative flex items-center justify-center min-h-[120px] overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff5500] to-transparent group-hover:shadow-[0_0_15px_rgba(255,85,0,0.8)] transition-shadow duration-500"></div>
<span className="text-xs font-mono text-zinc-400">Energy Line</span>
</div>

<div className="p-6 rounded-xl bg-zinc-900/30 relative flex items-center justify-center min-h-[120px]">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-zinc-700 rounded-sm transform rotate-45"></div>
<div className="w-8 h-px bg-zinc-800"></div>
<div className="w-3 h-3 bg-[#ff5500] rounded-sm transform rotate-45 shadow-[0_0_10px_rgba(255,85,0,0.6)] animate-pulse"></div>
<div className="w-8 h-px bg-zinc-800"></div>
<div className="w-2 h-2 bg-zinc-700 rounded-sm transform rotate-45"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="functional-ui">
<div className="mb-8 flex items-end justify-between border-b border-zinc-800/50 pb-4">
<div>
<h2 className="text-xl font-medium tracking-tight">Functional UI</h2>
<p className="text-xs text-zinc-500 mt-1">
              Ready-to-use application modules
            </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="kinetic-card border border-zinc-800/50 bg-zinc-900/30 rounded-xl overflow-hidden flex flex-col h-[300px]">
<div className="px-4 py-3 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-950/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ff5500]" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">
                  System Logs
                </span>
</div>
<div className="flex gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
</div>
</div>
<div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2 text-zinc-400 bg-black/20">
<div className="flex gap-3">
<span className="text-zinc-600">14:02:41</span>
<span className="text-emerald-400">[INFO]</span>
<span>Server instance initiated.</span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600">14:02:45</span>
<span className="text-emerald-400">[INFO]</span>
<span>Database connection established.</span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600">14:03:12</span>
<span className="text-yellow-400">[WARN]</span>
<span>Memory usage spike detected (84%).</span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600">14:03:15</span>
<span className="text-emerald-400">[INFO]</span>
<span>Auto-scaling policy triggered.</span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600">14:04:01</span>
<span className="text-[#ff5500]">[ERR]</span>
<span>Failed to fetch telemetry payload. Retrying...</span>
</div>
<div className="flex gap-3">
<span className="text-zinc-600">14:04:05</span>
<span className="text-emerald-400">[INFO]</span>
<span>Payload delivered successfully.</span>
</div>
</div>
</div>

<div className="kinetic-card border border-zinc-800/50 bg-zinc-900/30 rounded-xl overflow-hidden flex flex-col h-[300px]">
<div className="px-4 py-3 border-b border-zinc-800/50 flex justify-between items-center bg-zinc-950/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ff5500]" icon="solar:tuning-2-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">
                  Environment Variables
                </span>
</div>
<button className="text-xs font-semibold tracking-widest uppercase text-zinc-400 hover:text-[#ff5500] transition-colors border border-zinc-700 rounded px-2 py-1">
                Save
              </button>
</div>
<div className="p-4 space-y-4 overflow-y-auto">
<div className="flex items-center justify-between gap-4">
<label className="text-xs font-mono text-zinc-400 w-1/3">
                  NODE_ENV
                </label>
<input className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-sm text-zinc-200 outline-none focus:border-[#ff5500] transition-colors font-mono" type="text" value="production"/>
</div>
<div className="flex items-center justify-between gap-4">
<label className="text-xs font-mono text-zinc-400 w-1/3">
                  API_KEY
                </label>
<div className="flex-1 relative">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-sm text-zinc-200 outline-none focus:border-[#ff5500] transition-colors font-mono" type="password" value="sk_live_1234567890abcdef"/>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer hover:text-zinc-300" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<label className="text-xs font-mono text-zinc-400 w-1/3">
                  MAX_MEMORY
                </label>
<input className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-3 py-1.5 text-sm text-zinc-200 outline-none focus:border-[#ff5500] transition-colors font-mono" type="text" value="2048M"/>
</div>
<div className="pt-2">
<button className="text-xs font-mono text-[#ff5500] flex items-center gap-1 hover:text-[#ff8844] transition-colors">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                  Add Variable
                </button>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-12 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-zinc-400 group cursor-pointer hover:text-zinc-200 transition-colors">
<iconify-icon className="text-xl group-hover:text-[#ff5500] transition-colors" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="font-medium tracking-tight text-sm">System UI</span>
</div>
<div className="flex items-center gap-6 text-xs text-zinc-600">
<a className="hover:text-[#ff5500] transition-colors" href="#">
            Documentation
          </a>
<a className="hover:text-[#ff5500] transition-colors" href="#">
            Changelog
          </a>
<a className="hover:text-[#ff5500] transition-colors" href="#">GitHub</a>
</div>
<div className="text-xs font-mono text-zinc-600 uppercase">
          Version 2.0 //
          <span className="text-[#ff5500]">Stable Release</span>
</div>
</footer>
</div>


    </>
  );
}
