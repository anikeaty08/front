import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {

          lucide.createIcons();

          setTimeout(() => {
              const heroEls = document.querySelectorAll('[data-hero-anim]');
              heroEls.forEach((el, index) => {
                  setTimeout(() => {
                      el.classList.remove('opacity-0', 'translate-y-full', 'translate-y-8');
                      el.classList.add('opacity-100', 'translate-y-0');
                  }, index * 100);
              });
          }, 100);

          const observerOptions = {
              root: null,
              rootMargin: '0px 0px -10% 0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.remove('opacity-0', 'translate-y-16', '-translate-x-12', 'translate-x-12', 'translate-y-12', '-translate-x-16', 'translate-x-16', '-translate-x-8');
                      entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'in-view');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

          const heroSection = document.getElementById('hero-section');
          const heroGlow = document.getElementById('hero-glow');
          const dotCanvas = document.getElementById('interactive-dot-grid');

          const sharedMouse = { x: -1000, y: -1000 };
          let rect = { left: 0, top: 0, width: 0, height: 0 };

          if(heroSection) {
              const updateRect = () => {
                  rect = heroSection.getBoundingClientRect();
              };

              window.addEventListener('resize', updateRect);
              window.addEventListener('scroll', updateRect);
              updateRect();

              heroSection.addEventListener('mousemove', (e) => {
                  sharedMouse.x = e.clientX - rect.left;
                  sharedMouse.y = e.clientY - rect.top;

                  if (heroGlow) {
                      heroGlow.style.transform = `translate(calc(-50% + ${sharedMouse.x - rect.width/2}px), calc(-50% + ${sharedMouse.y - rect.height/2}px))`;
                  }
              });

              heroSection.addEventListener('mouseleave', () => {
                  sharedMouse.x = -1000;
                  sharedMouse.y = -1000;
                  if (heroGlow) {
                      heroGlow.style.transform = `translate(-50%, -50%)`;
                  }
              });

              if (dotCanvas) {
                  const ctx = dotCanvas.getContext('2d');
                  let width, height;
                  let dots = [];
                  const spacing = 22;
                  const repulsionRadius = 150;

                  function initGrid() {
                      width = dotCanvas.parentElement.clientWidth;
                      height = dotCanvas.parentElement.clientHeight;
                      dotCanvas.width = width;
                      dotCanvas.height = height;

                      dots = [];
                      for (let x = -spacing; x < width + spacing; x += spacing) {
                          for (let y = -spacing; y < height + spacing; y += spacing) {
                              dots.push({ baseX: x, baseY: y, x: x, y: y });
                          }
                      }
                  }

                  function drawGrid() {
                      ctx.clearRect(0, 0, width, height);
                      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                      ctx.shadowColor = 'rgba(249, 115, 22, 0.4)';
                      ctx.shadowBlur = 4;

                      dots.forEach(dot => {
                          let dx = sharedMouse.x - dot.baseX;
                          let dy = sharedMouse.y - dot.baseY;
                          let dist = Math.sqrt(dx * dx + dy * dy);

                          let targetX = dot.baseX;
                          let targetY = dot.baseY;

                          if (dist < repulsionRadius && dist > 0) {
                              let force = (repulsionRadius - dist) / repulsionRadius;
                              let push = Math.pow(force, 1.5) * 80;
                              targetX = dot.baseX - (dx / dist) * push;
                              targetY = dot.baseY - (dy / dist) * push;
                          }

                          dot.x += (targetX - dot.x) * 0.15;
                          dot.y += (targetY - dot.y) * 0.15;

                          ctx.beginPath();
                          ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
                          ctx.fill();
                      });

                      requestAnimationFrame(drawGrid);
                  }

                  window.addEventListener('resize', initGrid);
                  initGrid();
                  drawGrid();
              }

              // Custom Hero Network Implementation Based on Image
              const heroCanvas = document.getElementById('hero-network-overlay');
              const heroNodesWrapper = document.getElementById('hero-html-nodes');

              if (heroCanvas && heroNodesWrapper) {
                  const hctx = heroCanvas.getContext('2d');
                  const edges = [
                      ['sourcing', 'underwriting'],
                      ['sourcing', 'asset_mgmt'],
                      ['underwriting', 'portfolios'],
                      ['asset_mgmt', 'portfolios'],
                      ['underwriting', 'leasing'],
                      ['leasing', 'ops1'],
                      ['leasing', 'dev'],
                      ['ops1', 'ops2'],
                      ['dev', 'ops2'],
                      ['portfolios', 'dev'],
                      ['asset_mgmt', 'dev']
                  ];

                  function drawHeroNetwork() {
                      heroCanvas.width = heroCanvas.parentElement.clientWidth;
                      heroCanvas.height = heroCanvas.parentElement.clientHeight;
                      hctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

                      const nodesMap = {};
                      document.querySelectorAll('.hero-node').forEach(node => {
                          const dot = node.querySelector('.dot');
                          if (dot) {
                              const rect = dot.getBoundingClientRect();
                              const containerRect = heroCanvas.getBoundingClientRect();
                              nodesMap[node.getAttribute('data-id')] = {
                                  x: rect.left - containerRect.left + rect.width / 2,
                                  y: rect.top - containerRect.top + rect.height / 2
                              };
                          }
                      });

                      hctx.lineWidth = 1;
                      hctx.strokeStyle = 'rgba(249, 115, 22, 0.4)';
                      hctx.shadowColor = 'rgba(249, 115, 22, 0.8)';
                      hctx.shadowBlur = 10;

                      edges.forEach(edge => {
                          const n1 = nodesMap[edge[0]];
                          const n2 = nodesMap[edge[1]];
                          if(n1 && n2) {
                              hctx.beginPath();
                              hctx.moveTo(n1.x, n1.y);
                              hctx.lineTo(n2.x, n2.y);
                              hctx.stroke();
                          }
                      });
                  }

                  window.addEventListener('resize', drawHeroNetwork);
                  setTimeout(() => {
                      drawHeroNetwork();
                      heroCanvas.classList.remove('opacity-0');
                      heroNodesWrapper.classList.remove('opacity-0');
                  }, 800);
              }
          }

          // ============================================
          // Logistics Network Map Setup
          // ============================================
          const mapContainer = document.getElementById('map-container');
          if(mapContainer) {
              // Enabled interactive features (zoom, drag)
              const map = L.map('map-container', {
                  center: [49.5, 10.5],
                  zoom: 5, minZoom: 4, maxZoom: 8,
                  zoomControl: false, // Hidden default, using custom HTML buttons
                  scrollWheelZoom: true,
                  dragging: true,
                  attributionControl: false,
                  maxBounds: [[30, -25], [70, 45]]
              });

              // Attach map instance to DOM element for custom buttons access
              mapContainer._leaflet_map = map;

              const cartoDarkUrl = 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
              L.tileLayer(cartoDarkUrl, {
                  subdomains: 'abcd',
                  maxZoom: 19
              }).addTo(map);

              map.createPane('borders-pane').style.zIndex = 300;
              map.createPane('routes-pane').style.zIndex = 350;
              map.createPane('labels-pane').style.zIndex = 450;
              map.getPane('labels-pane').style.pointerEvents = 'none';

              // Fetch World Borders GeoJSON with Interactivity
              fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
                  .then(response => response.json())
                  .then(data => {
                      L.geoJSON(data, {
                          pane: 'borders-pane',
                          style: function () {
                              return {
                                  color: '#333333',
                                  weight: 1.5,
                                  opacity: 0.8,
                                  fillColor: '#ffffff',
                                  fillOpacity: 0.01 // Very subtle base fill
                              };
                          },
                          onEachFeature: function(feature, layer) {
                              layer.on('mouseover', function(e) {
                                  layer.setStyle({
                                      fillOpacity: 0.04,
                                      color: '#f97316',
                                      weight: 2
                                  });
                              });
                              layer.on('mouseout', function(e) {
                                  layer.setStyle({
                                      fillOpacity: 0.01,
                                      color: '#333333',
                                      weight: 1.5
                                  });
                              });
                          }
                      }).addTo(map);
                  });

              const labels = [
                  { loc: [46.5, 2.5], txt: 'France' },
                  { loc: [51.0, 10.5], txt: 'Germany' },
                  { loc: [53.5, -2.5], txt: 'UK' },
                  { loc: [40.0, -3.5], txt: 'Spain' },
                  { loc: [42.0, 12.5], txt: 'Italy' },
                  { loc: [52.2, 19.5], txt: 'Poland' }
              ];

              labels.forEach(labelLabel => {
                  L.marker(labelLabel.loc, {
                      pane: 'labels-pane',
                      icon: L.divIcon({
                          className: 'country-label text-sm tracking-widest',
                          html: labelLabel.txt,
                          iconSize: [100, 20],
                          iconAnchor: [50, 10]
                      })
                  }).addTo(map);
              });

              const assets = [
                  { id: 'lon', lat: 51.507, lng: -0.127, type: 'Outside Storage', name: 'London Hub' },
                  { id: 'par', lat: 48.856, lng: 2.352, type: 'Outside Storage', name: 'Paris Distribution' },
                  { id: 'fra', lat: 50.110, lng: 8.682, type: 'Light Industrial', name: 'Frankfurt Gateway' },
                  { id: 'rot', lat: 51.924, lng: 4.477, type: 'Last-Mile Logistics', name: 'Rotterdam Terminal' },
                  { id: 'mil', lat: 45.464, lng: 9.190, type: 'Big Box Distribution', name: 'Milan Transit' },
                  { id: 'ams', lat: 52.367, lng: 4.904, type: 'Big Box Distribution', name: 'Amsterdam Facility' },
                  { id: 'bar', lat: 41.385, lng: 2.173, type: 'Last-Mile Logistics', name: 'Barcelona Maritime' },
                  { id: 'ber', lat: 52.520, lng: 13.405, type: 'Light Industrial', name: 'Berlin Node' },
                  { id: 'war', lat: 52.229, lng: 21.012, type: 'Light Industrial', name: 'Warsaw Hub' }
              ];

              const routeConnections = [
                  ['rot', 'ams'], ['ams', 'fra'], ['rot', 'lon'], ['par', 'lon'],
                  ['par', 'fra'], ['fra', 'ber'], ['ber', 'war'], ['fra', 'mil'],
                  ['mil', 'bar'], ['par', 'bar']
              ];

              const nodeMap = {};
              assets.forEach(a => nodeMap[a.id] = a);

              routeConnections.forEach(pair => {
                  const start = nodeMap[pair[0]];
                  const end = nodeMap[pair[1]];
                  if(start && end) {
                      const routeLine = L.polyline([[start.lat, start.lng], [end.lat, end.lng]], {
                          color: '#ffffff',
                          weight: 2,
                          opacity: 0.25,
                          className: 'route-line transition-all duration-300',
                          pane: 'routes-pane'
                      }).addTo(map);

                      // Interactive route lines
                      routeLine.on('mouseover', function() {
                          this.setStyle({ color: '#f97316', opacity: 0.8, weight: 3 });
                      });
                      routeLine.on('mouseout', function() {
                          this.setStyle({ color: '#ffffff', opacity: 0.25, weight: 2 });
                      });
                  }
              });

              function getAssetStyle(type) {
                  const base = { weight: 2, fillOpacity: 0.9, color: '#fff' };
                  switch (type) {
                      case 'Last-Mile Logistics': return { ...base, color: '#ff3300', fillColor: '#ff3300', radius: 8 };
                      case 'Light Industrial': return { ...base, color: '#ff6600', fillColor: '#ff6600', radius: 7 };
                      case 'Big Box Distribution': return { ...base, color: '#ff9900', fillColor: '#ff9900', radius: 5 };
                      case 'Outside Storage': return { ...base, color: '#ffcc00', fillColor: '#ffcc00', radius: 4 };
                      default: return base;
                  }
              }

              assets.forEach(asset => {
                  const style = getAssetStyle(asset.type);
                  const marker = L.circleMarker([asset.lat, asset.lng], style).addTo(map);

                  marker.bindPopup(`<h3 class="text-base font-semibold text-white tracking-tight">${asset.name}</h3><p class="text-xs uppercase tracking-widest text-orange-500 mt-1 font-semibold">${asset.type}</p>`);

                  L.marker([asset.lat, asset.lng], {
                      pane: 'labels-pane',
                      icon: L.divIcon({
                          className: 'node-label text-sm font-semibold tracking-wide transition-opacity duration-300',
                          html: asset.name,
                          iconSize: [120, 20]
                      })
                  }).addTo(map);

                  marker.on('mouseover', function(e) {
                      this.setStyle({ radius: style.radius * 1.5, weight: 3, fillOpacity: 1 });
                  });
                  marker.on('mouseout', function(e) {
                      this.setStyle(style);
                  });
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen -z-10 mix-blend-hard-light brightness-150" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10 animate-bg-shift" id="unicorn-bg"></div>
</div>
</div>
<nav className="flex md:px-12 fixed transition-all duration-500 transform bg-black/40 w-full z-[100] border-white/5 border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-md items-center justify-between" id="navbar">
<div className="flex items-center gap-4 group cursor-pointer">
<button className="w-12 h-12 rounded-xl bg-neutral-900/50 border border-white/10 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
<i className="text-neutral-400 transition-transform group-hover:rotate-90 duration-500 w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<a className="text-4xl font-thin tracking-tight group-hover:tracking-widest transition-all duration-500 text-white flex items-baseline leading-none mt-1" href="#">
          STRADA
          <span className="text-orange-500 ml-0.5 group-hover:text-white transition-colors duration-500">
            .
          </span>
</a>
</div>
<div className="space-x-10 text-xl uppercase tracking-widest font-thin hidden lg:flex items-center">
<a className="text-neutral-500 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300" href="#vision">
          Vision
        </a>
<a className="text-neutral-500 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300" href="#geography">
          Geography
        </a>
<a className="text-neutral-500 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300" href="#assets">
          Asset Classes
        </a>
<a className="text-neutral-500 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300" href="#leadership">
          Leadership
        </a>
<a className="flex items-center gap-3 bg-white rounded-full px-8 py-4 text-black hover:bg-orange-500 hover:text-white transition-all duration-300 group text-sm tracking-[0.2em] font-light ml-4" href="#contact">
          CONTACT
          <i className="transition-transform group-hover:translate-x-1 duration-300 w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>
<section className="min-h-screen flex flex-col overflow-hidden pt-16 md:pt-24 pb-20 relative items-center justify-center" id="hero-section">
<div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 h-full w-full opacity-90"></div>
<div className="absolute inset-0 animate-scanline mix-blend-overlay z-10 opacity-40"></div>
<canvas className="absolute inset-0 z-10 w-full h-full pointer-events-none grid-mask opacity-60" height="1185" id="interactive-dot-grid" width="825"></canvas>
<div className="absolute w-[45rem] h-[45rem] bg-orange-500/10 rounded-full blur-[120px] z-10 transition-transform duration-700 ease-out will-change-transform mix-blend-screen pointer-events-none" id="hero-glow" style={{left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}></div>
</div>
<div className="flex flex-col text-center w-full max-w-[90rem] z-20 pr-6 pl-6 relative items-center" id="hero-content">
<div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
<canvas className="absolute inset-0 w-full h-full z-0 pointer-events-none transition-opacity duration-1000 delay-[800ms]" height="400" id="hero-network-overlay" width="777"></canvas>
<div className="absolute inset-0 w-full h-full z-10 pointer-events-none transition-opacity duration-1000 delay-[800ms]" id="hero-html-nodes">
<div className="absolute top-[15%] left-[5%] lg:left-[10%] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 hero-node" data-id="sourcing">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Sourcing
              </span>
<div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)] dot"></div>
</div>
<div className="absolute top-[18%] left-[28%] lg:left-[32%] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 hero-node" data-id="underwriting">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Underwriting
              </span>
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)] dot"></div>
</div>
<div className="absolute top-[55%] left-[32%] lg:left-[36%] flex flex-col items-center gap-1.5 transform -translate-x-1/2 -translate-y-1/2 hero-node" data-id="portfolios">
<span className="text-[10px] font-light tracking-[0.1em] text-neutral-500 uppercase drop-shadow-md">
                Portfolios
              </span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-600/80 shadow-[0_0_10px_rgba(249,115,22,0.8)] dot"></div>
</div>
<div className="absolute top-[80%] left-[22%] lg:left-[26%] flex flex-col items-center gap-2 transform -translate-x-1/2 -translate-y-1/2 hero-node" data-id="asset_mgmt">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Asset Management
              </span>
<div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)] dot"></div>
</div>
<div className="absolute top-[22%] right-[25%] lg:right-[30%] flex flex-col items-center gap-2 transform translate-x-1/2 -translate-y-1/2 hero-node" data-id="leasing">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Leasing
              </span>
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)] dot"></div>
</div>
<div className="absolute top-[20%] right-[5%] lg:right-[10%] flex flex-col items-center gap-2 transform translate-x-1/2 -translate-y-1/2 hero-node" data-id="ops1">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Operations
              </span>
<div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)] dot"></div>
</div>
<div className="absolute top-[80%] right-[28%] lg:right-[32%] flex flex-col items-center gap-2 transform translate-x-1/2 -translate-y-1/2 hero-node" data-id="dev">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Development
              </span>
<div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)] dot"></div>
</div>
<div className="absolute top-[70%] right-[8%] lg:right-[12%] flex flex-col items-center gap-2 transform translate-x-1/2 -translate-y-1/2 hero-node" data-id="ops2">
<span className="text-xs font-light tracking-[0.2em] text-neutral-300 uppercase drop-shadow-md">
                Operations
              </span>
<div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,1)] dot"></div>
</div>
</div>
<h1 className="text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] leading-[0.85] font-thin tracking-tight pointer-events-none relative z-20 w-full my-auto">
<div className="overflow-hidden pt-2 pb-2">
<div className="inline-block transition-all duration-1000 ease-out opacity-0 translate-y-full" data-hero-anim="">
<span className="animate-shine text-white">STRADA</span><span className="text-orange-500 -ml-2 md:-ml-4">.</span>
</div>
</div>
</h1>
</div>
<div className="inline-flex uppercase transition-all duration-1000 ease-out text-sm md:text-base text-neutral-400 tracking-[0.2em] font-light bg-[#110500]/80 z-20 pointer-events-auto border-[#ff5e00]/30 border rounded-full mt-2 md:mt-4 mb-8 py-3 px-8 relative shadow-[0_0_30px_rgba(249,115,22,0.1)] backdrop-blur-md gap-x-4 items-center hover:border-[#ff5e00]/60 hover:text-neutral-300 transition-colors cursor-default" data-hero-anim="">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_10px_#f97316]"></span>
</span>
          Pan-European Logistics
        </div>
<p className="leading-relaxed md:leading-loose transition-all duration-1000 ease-out delay-300 text-3xl md:text-4xl lg:text-5xl font-extralight text-neutral-400 max-w-[90%] md:max-w-5xl mb-8 mx-auto relative z-20 pointer-events-none text-center tracking-tight" data-hero-anim="">
          We build, acquire, and optimize
          <span className="text-white font-normal drop-shadow-sm">
            institutional-grade
          </span>
          industrial assets across Europe's most critical supply chain nodes.
        </p>
<div className="flex flex-col sm:flex-row transition-all duration-1000 ease-out delay-500 z-20 pointer-events-auto relative gap-x-6 gap-y-4 items-center justify-center w-full" data-hero-anim="">
<a className="flex items-center justify-center gap-2 bg-white text-black hover:bg-orange-500 hover:text-white rounded-full px-10 py-5 text-2xl font-extralight transition-all w-full sm:w-auto tracking-tight shadow-[0_0_40px_rgba(255,255,255,0.1)]" href="#vision">
            Explore Our Vision
          </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce opacity-50">
<i className="text-white w-8 h-8" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</section>
<section className="py-32 lg:py-48 px-6 lg:px-12 bg-black relative border-t border-white/5 overflow-hidden" id="vision">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 text-2xl uppercase tracking-widest text-orange-500 font-extralight mb-12 transition-all duration-[1000ms] ease-out translate-y-8" data-reveal="">
<i className="w-6 h-6" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
          Firm Overview
        </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.3] transition-all duration-[1200ms] ease-out text-[#525252] tracking-tight font-extralight" data-reveal="">
          Strada’s team has
          <span className="inline text-white font-normal bg-[#2a1304] px-3 py-1.5 rounded-lg box-decoration-clone relative -top-0.5">
            over 80 years of collective experience
          </span>
          investing in pan-European real estate on behalf of leading private
          equity funds, investment managers, and developers, having
          <span className="inline text-white font-normal bg-[#2a1304] px-3 py-1.5 rounded-lg box-decoration-clone relative -top-0.5">
            deployed over €5bn
          </span>
          in the logistics and industrial sector over the last 10 years.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 pt-16 border-t border-white/10 transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<div>
<h3 className="text-5xl text-white font-thin tracking-tight mb-6">
              Maximizing Lifecycle Value
            </h3>
</div>
<div>
<p className="text-3xl font-extralight leading-relaxed text-neutral-400">
              The company has in-house sourcing, underwriting, asset management,
              and development capabilities to maximize value at each stage of
              the investment lifecycle.
            </p>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 lg:px-12 bg-[#050505] border-y border-white/5 relative overflow-hidden group/section">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/10 via-black to-black opacity-50 transition-opacity duration-1000"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex items-center gap-2 text-2xl uppercase tracking-widest text-orange-500 font-extralight mb-16 transition-all duration-[1000ms] ease-out opacity-0 -translate-x-8" data-reveal="">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
          Integrated Capabilities
        </div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4 transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<h3 className="text-6xl md:text-7xl font-thin tracking-tight text-white sticky top-32">
              Precision at every phase.
            </h3>
</div>
<div className="lg:col-span-8 space-y-4">
<div className="group border border-white/5 bg-black hover:bg-neutral-900/50 rounded-3xl p-8 md:p-12 transition-all duration-500 ease-out hover:border-orange-500/30 cursor-crosshair duration-[1000ms] opacity-0 translate-y-12" data-reveal="">
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
<div className="flex items-center gap-6">
<span className="text-5xl font-thin text-orange-500/50 group-hover:text-orange-500 transition-colors">
                    01
                  </span>
<h4 className="text-4xl md:text-5xl font-thin tracking-tight text-white">
                    Sourcing
                  </h4>
</div>
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
<i className="text-neutral-500 group-hover:text-white transition-colors w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl md:text-3xl font-extralight text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors">
                Leveraging deep market networks across the UK, France, and
                Netherlands to identify off-market logistics opportunities
                before they price in structural premiums.
              </p>
</div>
<div className="group border border-white/5 bg-black hover:bg-neutral-900/50 rounded-3xl p-8 md:p-12 transition-all duration-500 ease-out hover:border-orange-500/30 cursor-crosshair duration-[1000ms] opacity-0 translate-y-12" data-reveal="" style={{transitionDelay: '100ms'}}>
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
<div className="flex items-center gap-6">
<span className="text-5xl font-thin text-orange-500/50 group-hover:text-orange-500 transition-colors">
                    02
                  </span>
<h4 className="text-4xl md:text-5xl font-thin tracking-tight text-white">
                    Underwriting
                  </h4>
</div>
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
<i className="text-neutral-500 group-hover:text-white transition-colors w-6 h-6" data-lucide="file-plus" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl md:text-3xl font-extralight text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors">
                Rigorous, data-driven analysis modeling complex supply chain
                dynamics, tenant demand shifts, and micro-location viability to
                ensure resilient yield.
              </p>
</div>
<div className="group border border-white/5 bg-black hover:bg-neutral-900/50 rounded-3xl p-8 md:p-12 transition-all duration-500 ease-out hover:border-orange-500/30 cursor-crosshair duration-[1000ms] opacity-0 translate-y-12" data-reveal="" style={{transitionDelay: '200ms'}}>
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
<div className="flex items-center gap-6">
<span className="text-5xl font-thin text-orange-500/50 group-hover:text-orange-500 transition-colors">
                    03
                  </span>
<h4 className="text-4xl md:text-5xl font-thin tracking-tight text-white">
                    Asset Management
                  </h4>
</div>
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
<i className="text-neutral-500 group-hover:text-white transition-colors w-6 h-6" data-lucide="settings" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl md:text-3xl font-extralight text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors">
                Active, hands-on optimization. We focus on tenant relationships,
                ESG improvements, and operational efficiencies to drive
                long-term NOI growth.
              </p>
</div>
<div className="group border border-white/5 bg-black hover:bg-neutral-900/50 rounded-3xl p-8 md:p-12 transition-all duration-500 ease-out hover:border-orange-500/30 cursor-crosshair duration-[1000ms] opacity-0 translate-y-12" data-reveal="" style={{transitionDelay: '300ms'}}>
<div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8">
<div className="flex items-center gap-6">
<span className="text-5xl font-thin text-orange-500/50 group-hover:text-orange-500 transition-colors">
                    04
                  </span>
<h4 className="text-4xl md:text-5xl font-thin tracking-tight text-white">
                    Development
                  </h4>
</div>
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-500">
<i className="text-neutral-500 group-hover:text-white transition-colors w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-2xl md:text-3xl font-extralight text-neutral-400 leading-relaxed max-w-2xl group-hover:text-neutral-300 transition-colors">
                Executing ground-up and repositioning projects to modern,
                sustainable specifications, delivering Class-A industrial
                product in high-barrier markets.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 lg:px-12 bg-black overflow-hidden relative" id="geography">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto items-center">
<div className="transition-all duration-[1000ms] ease-out opacity-0 -translate-x-12" data-reveal="">
<div className="flex items-center gap-2 text-2xl uppercase tracking-widest text-orange-500 font-extralight mb-6">
<i className="w-6 h-6" data-lucide="map" strokeWidth="1.5"></i>
            Geographic Focus
          </div>
<h3 className="text-5xl md:text-7xl font-thin tracking-tight text-white leading-[1.1] mb-8">
            Supply Chain Corridors.
          </h3>
<p className="leading-relaxed text-3xl font-thin text-neutral-400 mb-10 tracking-tight">
            We target high-barrier, supply-constrained markets along Europe's
            most vital freight routes, ensuring resilient tenant demand through
            critical infrastructure connectivity.
          </p>
<div className="space-y-8">
<div className="group relative pl-6 border-l border-white/10 hover:border-orange-500 transition-colors duration-500">
<h4 className="text-3xl font-extralight text-white tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-[#ffcc00] block"></span>
                United Kingdom
              </h4>
<p className="md:text-2xl leading-relaxed text-xl font-extralight text-neutral-500 group-hover:translate-x-2 transition-transform duration-300 delay-75 tracking-tight">
                Focus on London perimeter urban last-mile and prime Midlands
                logistics golden triangle.
              </p>
</div>
<div className="group relative pl-6 border-l border-white/10 hover:border-orange-500 transition-colors duration-500">
<h4 className="text-3xl font-extralight text-white tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-[#ff3300] block"></span>
                Netherlands &amp; Germany
              </h4>
<p className="md:text-2xl leading-relaxed text-xl font-extralight text-neutral-500 group-hover:translate-x-2 transition-transform duration-300 delay-75 tracking-tight">
                Strategic assets connecting Rotterdam port entry routes to
                primary DACH distribution hubs.
              </p>
</div>
<div className="group relative pl-6 border-l border-white/10 hover:border-orange-500 transition-colors duration-500">
<h4 className="text-3xl font-extralight text-white tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-3">
<span className="w-2.5 h-2.5 rounded-full bg-[#ff6600] block"></span>
                France &amp; Italy
              </h4>
<p className="md:text-2xl leading-relaxed text-xl font-extralight text-neutral-500 group-hover:translate-x-2 transition-transform duration-300 delay-75 tracking-tight">
                Targeting the North-South logistical spine, encompassing Greater
                Paris nodes and Northern Italy manufacturing transit.
              </p>
</div>
</div>
</div>
<div className="transition-all duration-[1000ms] ease-out opacity-0 translate-x-12" data-reveal="">
<div className="relative w-full aspect-[4/5] bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 z-0 group">
<div className="absolute inset-0 w-full h-full z-0 bg-black cursor-grab active:cursor-grabbing" id="map-container" tabindex="0"></div>

<div className="absolute top-6 right-6 z-[1000] flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none group-hover:pointer-events-auto">
<button className="w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-orange-500 hover:text-orange-500 transition-colors backdrop-blur-md shadow-lg" onclick="document.getElementById('map-container')._leaflet_id &amp;&amp; L.DomUtil.get('map-container')._leaflet_map.zoomIn()">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-orange-500 hover:text-orange-500 transition-colors backdrop-blur-md shadow-lg" onclick="document.getElementById('map-container')._leaflet_id &amp;&amp; L.DomUtil.get('map-container')._leaflet_map.zoomOut()">
<i className="w-5 h-5" data-lucide="minus" strokeWidth="1.5"></i>
</button>
</div>
<div className="absolute bottom-8 left-0 z-[1000] bg-black/85 border-l-[3px] border-orange-500 py-4 px-5 rounded-r text-white backdrop-blur-md pointer-events-none shadow-2xl">
<div className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                Targeted Asset Classes
              </div>
<div className="flex items-center mb-3 text-base font-extralight">
<span className="h-3 w-3 rounded-full mr-3 shadow-[0_0_8px_currentColor]" style={{backgroundColor: '#ff3300', color: '#ff3300'}}></span>
                Last-Mile Logistics
              </div>
<div className="flex items-center mb-3 text-base font-extralight">
<span className="h-3 w-3 rounded-full mr-3 shadow-[0_0_8px_currentColor]" style={{backgroundColor: '#ff6600', color: '#ff6600'}}></span>
                Light Industrial
              </div>
<div className="flex items-center mb-3 text-base font-extralight">
<span className="h-3 w-3 rounded-full mr-3 shadow-[0_0_8px_currentColor]" style={{backgroundColor: '#ff9900', color: '#ff9900'}}></span>
                Big Box Distribution
              </div>
<div className="flex items-center text-base font-extralight">
<span className="h-3 w-3 rounded-full mr-3 shadow-[0_0_8px_currentColor]" style={{backgroundColor: '#ffcc00', color: '#ffcc00'}}></span>
                Outside Storage
              </div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/5 overflow-hidden" id="assets">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div className="transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<div className="flex items-center gap-2 text-2xl uppercase tracking-widest text-orange-500 font-extralight mb-4">
<i className="w-6 h-6" data-lucide="package" strokeWidth="1.5"></i>
              Target Portfolio
            </div>
<h3 className="text-5xl md:text-7xl font-thin tracking-tight text-white">
              Logistics Asset Classes.
            </h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer transition-all duration-[1000ms] ease-out opacity-0 translate-y-16" data-reveal="">
<div className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-2xl group-hover:border-orange-500/50 transition-colors duration-500 z-0"></div>
<img alt="Big Box" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-110 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000 ease-in-out z-0" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<span className="inline-block px-4 py-1.5 border border-orange-500/30 rounded-full text-base font-extralight text-orange-400 mb-4 tracking-widest uppercase bg-black/50 backdrop-blur-sm">
                  Primary Focus
                </span>
<h4 className="text-4xl font-thin tracking-tight text-white mb-4">
                  Big Box Distribution
                </h4>
<p className="text-xl font-extralight text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  Large-scale, highly specified facilities serving national and
                  regional supply chains. Essential nodes for e-commerce
                  fulfillment and major retailers.
                </p>
</div>
</div>
</div>
<div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer transition-all duration-[1000ms] ease-out opacity-0 translate-y-16" data-reveal="" style={{transitionDelay: '150ms'}}>
<div className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-2xl group-hover:border-orange-500/50 transition-colors duration-500 z-0"></div>
<img alt="Urban Last Mile" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-110 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000 ease-in-out z-0" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-base font-extralight text-neutral-300 mb-4 tracking-widest uppercase bg-black/50 backdrop-blur-sm group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
                  High Growth
                </span>
<h4 className="text-4xl font-thin tracking-tight text-white mb-4">
                  Urban Last-Mile
                </h4>
<p className="text-xl font-extralight text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  In-fill locations proximate to dense populations. Critical for
                  sub-24-hour delivery models, characterized by intense land
                  constraint and high tenant retention.
                </p>
</div>
</div>
</div>
<div className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer transition-all duration-[1000ms] ease-out opacity-0 translate-y-16" data-reveal="" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-2xl group-hover:border-orange-500/50 transition-colors duration-500 z-0"></div>
<img alt="Light Industrial" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity group-hover:scale-110 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000 ease-in-out z-0" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
<div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<span className="inline-block px-4 py-1.5 border border-white/20 rounded-full text-base font-extralight text-neutral-300 mb-4 tracking-widest uppercase bg-black/50 backdrop-blur-sm group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
                  Value Add
                </span>
<h4 className="text-4xl font-thin tracking-tight text-white mb-4">
                  Light Industrial
                </h4>
<p className="text-xl font-extralight text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                  Multi-let estates and manufacturing facilities. We target
                  older stock in premium locations for comprehensive ESG
                  upgrading and rental reversion.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/5 overflow-hidden" id="leadership">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 text-2xl uppercase tracking-widest text-orange-500 font-extralight mb-16 transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
          Leadership
        </div>
<div className="flex flex-col gap-24">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<div className="w-full lg:w-1/3">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 relative group">
<img alt="Charlie" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>
</div>
<div className="w-full lg:w-2/3">
<h3 className="text-5xl md:text-6xl text-white font-thin tracking-tight mb-4">
                Charlie
              </h3>
<p className="text-orange-500 tracking-widest uppercase text-lg mb-10 border border-orange-500/20 bg-orange-500/10 inline-block px-5 py-2.5 rounded-full">
                Co-Founder &amp; CEO
              </p>
<div className="space-y-8 text-2xl md:text-3xl font-extralight text-neutral-400 leading-relaxed">
<p>
                  Charlie is the co-founder and CEO of Strada REP, responsible
                  for the strategic direction of the business, capital raising,
                  and deal sourcing. He has over 27 years of experience in
                  pan-European value-add investing and team building, with a
                  primary focus on the logistics sector.
                </p>
<p>
                  Before founding Strada, Charlie held several senior leadership
                  roles in the EMEA private equity real estate industry,
                  including Head of Europe at Bridge Industrial, Head of Direct
                  Real Estate at Pictet Alternative Advisors, and Managing
                  Director and founding Portfolio Manager of the Europe Value
                  Partners fund series at CBRE Investment Management. He has
                  also held senior positions at Rockspring Property Investment
                  Managers, Catalyst Capital, and Royal Bank of Scotland.
                </p>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<div className="w-full lg:w-1/3">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 relative group">
<img alt="Leonardo Cerutti" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>
</div>
<div className="w-full lg:w-2/3">
<h3 className="text-5xl md:text-6xl text-white font-thin tracking-tight mb-4">
                Leonardo Cerutti
              </h3>
<p className="text-orange-500 tracking-widest uppercase text-lg mb-10 border border-orange-500/20 bg-orange-500/10 inline-block px-5 py-2.5 rounded-full">
                Co-Founder
              </p>
<div className="space-y-8 text-2xl md:text-3xl font-extralight text-neutral-400 leading-relaxed">
<p>
                  Leonardo is the co-founder of Strada REP and is responsible
                  for the company’s investment activities including sourcing,
                  underwriting, execution and portfolio management.
                </p>
<p>
                  Prior to Strada, he was responsible for pan-European
                  investment at Bridge Industrial, having previously worked in
                  the real estate private equity teams of Pictet Alternative
                  Advisors and Cerberus Capital Management. Leonardo holds an
                  undergraduate degree from Lancaster University and a Master’s
                  degree from the London School of Economics.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-black py-20 px-6 lg:px-12 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
<div className="max-w-md transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="">
<div className="text-5xl font-thin tracking-tight text-white mb-6 flex items-baseline gap-1 hover:tracking-widest transition-all duration-500 cursor-default">
            STRADA
            <span className="text-orange-500 text-6xl leading-none">.</span>
</div>
<p className="text-2xl text-neutral-500 font-extralight leading-relaxed mb-8 tracking-tight">
            Institutional real estate investment partners focused on
            pan-European logistics and industrial assets.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24 w-full lg:w-auto transition-all duration-[1000ms] ease-out opacity-0 translate-y-12" data-reveal="" style={{transitionDelay: '200ms'}}>
<div>
<h4 className="text-xl uppercase tracking-widest text-neutral-600 font-extralight mb-6">
              Contact
            </h4>
<ul className="space-y-4">
<li>
<a className="text-2xl text-neutral-400 hover:text-white transition-colors font-extralight hover:pl-2 duration-300 block tracking-tight" href="mailto:contact@stradarep.com">
                  contact@stradarep.com
                </a>
</li>
<li>
<p className="text-2xl text-neutral-400 font-extralight tracking-tight">
                  London, UK
                </p>
</li>
</ul>
</div>
<div>
<h4 className="text-xl uppercase tracking-widest text-neutral-600 font-extralight mb-6">
              Portal
            </h4>
<a className="group inline-flex items-center gap-2 text-base uppercase tracking-widest font-extralight border border-white/10 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300" href="#">
<i className="group-hover:scale-110 transition-transform w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
              LP Login
            </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-1000 opacity-0" data-reveal="" style={{transitionDelay: '400ms'}}>
<p className="text-lg text-neutral-600 font-extralight">
          © 2024 Strada Real Estate Partners.
        </p>
<p className="text-lg text-neutral-600 font-extralight">
          All Rights Reserved.
        </p>
</div>
</footer>



    </>
  );
}
