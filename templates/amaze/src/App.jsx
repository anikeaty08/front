import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Global Theme Management
window.themeRGB = '255, 255, 255';
function toggleTheme() {
  var root = document.documentElement;
  var icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (root.getAttribute('data-theme') === 'light') {
    root.setAttribute('data-theme', 'dark');
    icon.setAttribute('icon', 'solar:sun-linear');
    window.themeRGB = '255, 255, 255';
  } else {
    root.setAttribute('data-theme', 'light');
    icon.setAttribute('icon', 'solar:moon-linear');
    window.themeRGB = '0, 0, 0';
  }
}

// Entrance Animation
function animateEntrance() {
  var cells = document.querySelectorAll('.grid-cell');
  if (cells.length > 0) {
    gsap.set(cells, { opacity: 0, y: 40, scale: 0.96 });
    gsap.to(cells, {
      opacity: 1, y: 0, scale: 1,
      duration: 1.2, stagger: 0.12,
      ease: 'power3.out'
    });
  }
  var topNav = document.getElementById('top-nav');
  if (topNav) gsap.from(topNav, { opacity: 0, y: -20, duration: 1, delay: 0.3, ease: 'power2.out' });
}

// Intro Loader
var loaderFill = document.getElementById('loader-fill');
var introLoader = document.getElementById('intro-loader');
if (loaderFill && introLoader) {
  var loadProgress = 0;
  var loadInterval = setInterval(function() {
    loadProgress += Math.random() * 15 + 5;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadInterval);
      loaderFill.style.width = '100%';
      setTimeout(function() {
        if (typeof gsap !== 'undefined') {
          gsap.to(introLoader, { opacity: 0, duration: 0.8, ease: 'power2.inOut', onComplete: function() {
            introLoader.style.display = 'none';
            animateEntrance();
          }});
        } else {
          introLoader.style.display = 'none';
          animateEntrance();
        }
      }, 300);
    } else {
      loaderFill.style.width = loadProgress + '%';
      loaderFill.style.transition = 'width 0.3s ease';
    }
  }, 150);
} else {
  // Graceful fallback if loader HTML isn't copied to other pages
  setTimeout(animateEntrance, 100);
}

// Custom Cursor
var cursor = document.getElementById('cursor');
var ring = document.getElementById('cursor-ring');
var cursorLabel = document.getElementById('cursor-label');
var cx = window.innerWidth / 2, cy = window.innerHeight / 2, rx = cx, ry = cy;
var isMobile = window.innerWidth < 768;

window.addEventListener('resize', function() { isMobile = window.innerWidth < 768; });

if (!isMobile) {
  document.addEventListener('mousemove', function(e) {
    cx = e.clientX; cy = e.clientY;
    if(cursor) { cursor.style.left = cx + 'px'; cursor.style.top = cy + 'px'; }
    if(cursorLabel) { cursorLabel.style.left = cx + 'px'; cursorLabel.style.top = (cy + 36) + 'px'; }
  });
  if (ring) {
    (function animRing() {
      rx += (cx - rx) * 0.1; ry += (cy - ry) * 0.1;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    })();
  }
  document.querySelectorAll('a,button').forEach(function(el) {
    el.addEventListener('mouseenter', function() { 
      if(cursor) cursor.classList.add('expanded'); 
      if(ring) ring.classList.add('expanded'); 
    });
    el.addEventListener('mouseleave', function() { 
      if(cursor) cursor.classList.remove('expanded'); 
      if(ring) ring.classList.remove('expanded'); 
    });
  });
} else {
  if(cursor) cursor.style.display = 'none';
  if(ring) ring.style.display = 'none';
  if(cursorLabel) cursorLabel.style.display = 'none';
  document.body.style.cursor = 'auto';
}

// Draggable Grid Cells
if (!isMobile && typeof Draggable !== 'undefined') {
  var cells = document.querySelectorAll('.grid-cell[data-drag="true"]');
  cells.forEach(function(cell) {
    cell.addEventListener('mouseenter', function() {
      if(cursor) cursor.classList.add('drag');
      if(ring) ring.classList.add('drag');
      if(cursorLabel) cursorLabel.classList.add('visible');
    });
    cell.addEventListener('mouseleave', function() {
      if(cursor) cursor.classList.remove('drag');
      if(ring) ring.classList.remove('drag');
      if(cursorLabel) cursorLabel.classList.remove('visible');
    });

    Draggable.create(cell, {
      type: 'x,y',
      zIndexBoost: true,
      onDragStart: function() {
        cell.classList.add('dragging');
        gsap.to(cell, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        if(cursorLabel) cursorLabel.textContent = 'Drop';
      },
      onDrag: function(e) {
        cells.forEach(function(otherCell) {
          if (otherCell !== cell) {
            if (this.hitTest(otherCell, e)) {
              otherCell.style.transform = 'scale(0.98)';
              otherCell.style.opacity = '0.8';
            } else {
              otherCell.style.transform = 'scale(1)';
              otherCell.style.opacity = '1';
            }
          }
        }.bind(this));
      },
      onDragEnd: function(e) {
        cell.classList.remove('dragging');
        if(cursorLabel) cursorLabel.textContent = 'Drag';
        
        let targetCell = null;
        cells.forEach(function(otherCell) {
          if (otherCell !== cell && this.hitTest(otherCell, e)) {
            targetCell = otherCell;
          }
          otherCell.style.transform = 'scale(1)';
          otherCell.style.opacity = '1';
        }.bind(this));

        if (targetCell) {
          let cellPos = cell.getAttribute('data-pos');
          let targetPos = targetCell.getAttribute('data-pos');
          
          cell.classList.remove('grid-pos-' + cellPos);
          targetCell.classList.remove('grid-pos-' + targetPos);
          
          cell.classList.add('grid-pos-' + targetPos);
          targetCell.classList.add('grid-pos-' + cellPos);
          
          cell.setAttribute('data-pos', targetPos);
          targetCell.setAttribute('data-pos', cellPos);
          
          gsap.set(cell, { x: 0, y: 0, scale: 1 });
          gsap.set(targetCell, { x: 0, y: 0, scale: 1 });
          
          gsap.from(cell, { scale: 0.95, duration: 0.4, ease: 'back.out(1.5)' });
          gsap.from(targetCell, { scale: 0.95, duration: 0.4, ease: 'back.out(1.5)' });

          setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 50);

        } else {
          gsap.to(cell, { x: 0, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' });
        }
      }
    });
  });
}

// Hero Slides
var heroSlides = document.querySelectorAll('.hero-slide');
var heroIdx = 0;
function nextHeroSlide() {
  if (!heroSlides.length) return;
  heroSlides[heroIdx].classList.remove('active');
  heroIdx = (heroIdx + 1) % heroSlides.length;
  heroSlides[heroIdx].classList.add('active');
}
if (heroSlides.length > 0) setInterval(nextHeroSlide, 5000);

// Statement
var statements = [
  { title: 'Live<br>Experiences', desc: 'From the FII to the Red Sea Global — we orchestrate monumental events across the globe.' },
  { title: 'Cultural<br>Scenography', desc: 'We sculpt space, light, and narrative into environments that leave lasting impressions.' },
  { title: 'Global<br>Production', desc: 'End-to-end event production across 18 countries, delivering at scale.' },
  { title: 'Visionary<br>Summits', desc: 'Designing where world leaders, innovators and investors shape the future.' },
  { title: 'Immersive<br>Installations', desc: 'Transforming empty space into living, breathing worlds that move audiences deeply.' }
];
var stmtIdx = 0;
var stmtTitle = document.getElementById('statement-title');
var stmtDesc = document.getElementById('statement-desc');
function nextStatement() {
  if (!stmtTitle || !stmtDesc) return;
  gsap.to([stmtTitle, stmtDesc], {
    opacity: 0, y: -15, duration: 0.5, ease: 'power2.in',
    onComplete: function() {
      stmtIdx = (stmtIdx + 1) % statements.length;
      stmtTitle.innerHTML = statements[stmtIdx].title;
      stmtDesc.textContent = statements[stmtIdx].desc;
      gsap.fromTo([stmtTitle, stmtDesc], { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' });
    }
  });
}
if (stmtTitle && stmtDesc) setInterval(nextStatement, 4500);

// Projects
var projects = [
  { year: '2024', location: 'Riyadh, KSA', title: 'Future Investment<br>Initiative 9th Edition', desc: 'A landmark summit at the intersection of global capital and visionary leadership.' },
  { year: '2023', location: 'Dubai, UAE', title: 'Ithra<br>Museum', desc: 'Architecting immersive spatial designs for the King Abdulaziz Center for World Culture.' },
  { year: '2023', location: 'Red Sea, KSA', title: 'Red Sea Global<br>Launch', desc: 'Transforming a visionary concept into a groundbreaking destination reveal.' },
  { year: '2022', location: 'Riyadh, KSA', title: 'E-Sports<br>World Cup', desc: 'Multi-sensorial environments designed for global broadcast and 8,000 live attendees.' },
  { year: '2023', location: 'Riyadh, KSA', title: 'CIC<br>Conference', desc: 'A high-impact gathering of global creative and investment minds.' },
  { year: '2024', location: 'Riyadh, KSA', title: 'New<br>Murabba', desc: 'Unveiling Riyadh\'s urban future through a monumental launch experience.' },
  { year: '2023', location: 'Red Sea, KSA', title: 'Red Sea<br>Film Festival', desc: 'Celebrating Arab and international cinema through world-class production.' },
  { year: '2024', location: 'Riyadh, KSA', title: 'Riyadh Metro<br>Launch', desc: 'A city-scale event marking the inauguration of one of the world\'s largest metro systems.' },
  { year: '2023', location: 'Doha, Qatar', title: 'Qatar F1<br>Motor Show', desc: 'Sculpting the ultimate automotive showcase — where engineering and spectacle converge.' }
];
var projIdx = 0;
var pImgs = document.querySelectorAll('.proj-img');
var projDots = document.querySelectorAll('#proj-dots .prog-dot');

function updateProject(idx, dir) {
  var pYear = document.getElementById('proj-year');
  var pLoc = document.getElementById('proj-location');
  var pTitle = document.getElementById('proj-title');
  var pDesc = document.getElementById('proj-desc');
  
  if (!pYear || !pLoc || !pTitle || !pDesc) return;

  projIdx = ((idx % projects.length) + projects.length) % projects.length;
  var p = projects[projIdx];
  var ids = ['proj-year', 'proj-location', 'proj-title', 'proj-desc'];
  
  gsap.to(ids.map(function(id) { return '#' + id; }), {
    opacity: 0, y: dir * 10, duration: 0.3, stagger: 0.03, ease: 'power2.in',
    onComplete: function() {
      pYear.textContent = p.year;
      pLoc.textContent = p.location;
      pTitle.innerHTML = p.title;
      pDesc.textContent = p.desc;
      gsap.fromTo(ids.map(function(id) { return '#' + id; }), { y: -dir * 10, opacity: 0 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out' }
      );
    }
  });
  pImgs.forEach(function(img, i) { img.classList.toggle('active', i === projIdx); });
  projDots.forEach(function(d, i) { d.classList.toggle('active', i === projIdx); });
}
function nextProject() { updateProject(projIdx + 1, 1); }
function prevProject() { updateProject(projIdx - 1, -1); }
if (pImgs.length > 0) setInterval(function() { updateProject(projIdx + 1, 1); }, 7000);

// Menu
var menuOpen = false;
function toggleMenu() { menuOpen ? closeMenu() : openMenu(); }
function openMenu() {
  menuOpen = true;
  var overlay = document.getElementById('menu-overlay');
  var btn = document.getElementById('menu-btn');
  if (overlay) overlay.classList.add('open');
  if (btn) btn.classList.add('menu-open');
}
function closeMenu() {
  menuOpen = false;
  var overlay = document.getElementById('menu-overlay');
  var btn = document.getElementById('menu-btn');
  if (overlay) overlay.classList.remove('open');
  if (btn) btn.classList.remove('menu-open');
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMenu(); });

// Flow Canvas
(function() {
  var canvas = document.getElementById('flow-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var width, height, time = 0;
  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height * 0.6;
  }
  window.addEventListener('resize', resize);
  resize();
  function draw() {
    ctx.clearRect(0, 0, width, height);
    time += 0.003;
    var gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(139,92,246,0.7)');
    gradient.addColorStop(0.5, 'rgba(217,70,239,0.5)');
    gradient.addColorStop(1, 'rgba(99,102,241,0.7)');
    ctx.strokeStyle = gradient;
    var numLines = 60;
    var centerY = height * 0.6;
    for (var i = 0; i < numLines; i++) {
      ctx.beginPath();
      var z = Math.sin(i * 0.1 + time) * 0.5 + 0.5;
      ctx.lineWidth = 0.5 + z * 1.5;
      ctx.globalAlpha = 0.25 + z * 0.4;
      for (var x = 0; x <= width; x += 12) {
        var nx = x / width;
        var wave1 = Math.sin(nx * 4 - time * 1.5 + i * 0.04) * 50 * nx;
        var wave2 = Math.cos(nx * 2.5 + time * 0.8 - i * 0.06) * 100 * (1 - nx);
        var pinch = Math.pow(nx - 0.5, 2);
        var spread = 150 * pinch + 10;
        var y = centerY + wave1 + wave2 + (i - numLines / 2) * spread * 0.025;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

// Globe Canvas
(function() {
  var canvas = document.getElementById('globe-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var w, h, time = 0;
  function resize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width;
    h = canvas.height = rect.height;
  }
  window.addEventListener('resize', resize);
  resize();

  var dots = [
    { lat: 72, lng: 0 }, { lat: 25, lng: 15 }, { lat: -15, lng: 152 }, { lat: 28, lng: 45 },
    { lat: -5, lng: 65 }, { lat: 18, lng: 88 }, { lat: -25, lng: 110 }, { lat: 8, lng: 135 },
    { lat: -12, lng: 155 }, { lat: 32, lng: 180 }, { lat: -18, lng: 200 }, { lat: 15, lng: 125 },
    { lat: -30, lng: 245 }, { lat: 32, lng: 270 }, { lat: -38, lng: 190 }, { lat: 35, lng: 315 },
    { lat: -10, lng: 335 }, { lat: 5, lng: 350 }
  ];

  function project(lat, lng, rotY) {
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (lng + rotY) * Math.PI / 180;
    var r = Math.min(w, h) * 0.34;
    var cxp = w * 0.5, cyp = h * 0.5;
    var x3 = r * Math.sin(phi) * Math.cos(theta);
    var y3 = -r * Math.cos(phi);
    var z3 = r * Math.sin(phi) * Math.sin(theta);
    return { x: cxp + x3, y: cyp + y3, z: z3, visible: z3 > -r * 0.15 };
  }
  
  function draw() {
    ctx.clearRect(0, 0, w, h);
    time += 0.006;
    var rotY = time * 18;
    var r = Math.min(w, h) * 0.34;
    var cxp = w * 0.5, cyp = h * 0.5;

    var glow = ctx.createRadialGradient(cxp, cyp, r * 0.2, cxp, cyp, r * 1.5);
    glow.addColorStop(0, 'rgba(100,140,255,0.08)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(cxp, cyp, r * 1.1, 0, Math.PI * 2); ctx.fill();

    for (var lat = -120; lat <= 120; lat += 20) {
      ctx.beginPath(); var first = true;
      for (var lng2 = 0; lng2 <= 360; lng2 += 5) {
        var p = project(lat, lng2, rotY);
        if (!p.visible) { first = true; continue; }
        if (first) { ctx.moveTo(p.x, p.y); first = false; } else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = 'rgba(' + window.themeRGB + ',0.25)'; ctx.lineWidth = 0.8; ctx.stroke();
    }
    for (var lng = 0; lng < 360; lng += 20) {
      ctx.beginPath(); var first2 = true;
      for (var lat2 = -90; lat2 <= 90; lat2 += 4) {
        var p2 = project(lat2, lng, rotY);
        if (!p2.visible) { first2 = true; continue; }
        if (first2) { ctx.moveTo(p2.x, p2.y); first2 = false; } else ctx.lineTo(p2.x, p2.y);
      }
      ctx.strokeStyle = 'rgba(' + window.themeRGB + ',0.25)'; ctx.lineWidth = 0.8; ctx.stroke();
    }

    dots.forEach(function(d) {
      var p = project(d.lat, d.lng, rotY);
      if (!p.visible) return;
      var fade = Math.max(0, Math.min(1, (p.z + r * 0.15) / (r * 0.5)));
      var pulse = Math.sin(time * 3 + d.lat) * 0.5 + 0.5;
      ctx.beginPath(); ctx.arc(p.x, p.y, 4 + pulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(160,190,255,' + (0.5 * fade * pulse) + ')'; ctx.lineWidth = 0.8; ctx.stroke();
      ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180,210,255,' + (0.9 * fade) + ')'; ctx.fill();
    });

    var pairs = [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8],
      [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [16, 17],
      [0, 2], [1, 3], [3, 5], [5, 7], [7, 9], [9, 11], [11, 13], [13, 15], [15, 17],
      [2, 4], [4, 6], [6, 8], [8, 10], [10, 12], [12, 14], [14, 16]
    ];
    pairs.forEach(function(pair) {
      var a = dots[pair[0]], b = dots[pair[1]];
      ctx.beginPath(); var first3 = true;
      for (var t = 0; t <= 40; t++) {
        var tN = t / 40;
        var latM = a.lat + (b.lat - a.lat) * tN;
        var lngM = a.lng + (b.lng - a.lng) * tN;
        var arc = Math.sin(tN * Math.PI) * 12;
        var pM = project(latM + arc * 0.3, lngM, rotY);
        if (!pM.visible) { first3 = true; continue; }
        if (first3) { ctx.moveTo(pM.x, pM.y); first3 = false; } else ctx.lineTo(pM.x, pM.y);
      }
      ctx.strokeStyle = 'rgba(120,180,255,0.4)'; ctx.lineWidth = 0.8; ctx.stroke();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// Parallax on mouse move
if (!isMobile) {
  document.addEventListener('mousemove', function(e) {
    var mx = (e.clientX / window.innerWidth - 0.5) * 2;
    var my = (e.clientY / window.innerHeight - 0.5) * 2;
    document.querySelectorAll('.hero-slide.active').forEach(function(slide) {
      gsap.to(slide, { x: mx * 8, y: my * 5, duration: 1.5, ease: 'power2.out' });
    });
  });
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="intro-loader" id="intro-loader">
<div className="loader-line">
<div className="loader-fill" id="loader-fill"></div>
</div>
</div>
<div className="noise"></div>
<div id="cursor" style={{left: '568px', top: '4px', display: 'none'}}></div>
<div id="cursor-ring" style={{left: '841.5px', top: '611.5px', display: 'none'}}></div>
<div id="cursor-label" style={{left: '568px', top: '40px', display: 'none'}}>Drag</div>

<nav className="top-nav" id="top-nav">
<div className="flex items-center gap-3">
<img alt="A-MAZE Logo" className="object-contain cursor-pointer" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6823c878-4d27-44a8-bb4f-97815ac9e806_320w.png" style={{height: '4rem', width: 'auto', filter: 'invert(var(--logo-invert))', transition: 'filter 0.4s ease'}}/>
<span className="cursor-pointer" onclick="window.location.href='/home'" role="button" style={{fontSize: '1.1rem', fontWeight: '400', letterSpacing: '0.15em', color: 'rgba(var(--rgb),0.9)', transition: 'color 0.4s ease'}}>A-MAZE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="uppercase text-xs font-normal tracking-widest" href="/about" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{color: 'rgba(var(--rgb),0.6)', textDecoration: 'none', transition: 'color 0.3s'}}>About</a>
<a className="uppercase text-xs font-normal tracking-widest" href="/whoweare" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{color: 'rgba(var(--rgb),0.6)', textDecoration: 'none', transition: 'color 0.3s'}}>Who we are</a>
<a className="uppercase text-xs font-normal tracking-widest" href="/services" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{color: 'rgba(var(--rgb),0.6)', textDecoration: 'none', transition: 'color 0.3s'}}>Services</a>
<a className="uppercase text-xs font-normal tracking-widest" href="/case-studies" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{color: 'rgba(var(--rgb),0.6)', textDecoration: 'none', transition: 'color 0.3s'}}>Case Studies</a>
<a className="uppercase text-xs font-normal tracking-widest" href="/contact" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{color: 'rgba(var(--rgb),1)', textDecoration: 'none', transition: 'color 0.3s'}}>Contact</a>
</div>
<div className="flex items-center gap-4">
<button aria-label="Toggle Theme" className="flex items-center justify-center p-2" id="theme-toggle" onclick="toggleTheme()" style={{background: 'transparent', border: 'none'}}>
<iconify-icon icon="solar:sun-linear" id="theme-icon" onmouseenter="this.style.color='rgba(var(--rgb), 1)'" onmouseleave="this.style.color='rgba(var(--rgb), 0.85)'" style={{color: 'rgba(var(--rgb), 0.85)', transition: 'color 0.4s ease'}} width="24"></iconify-icon>
</button>
<button aria-label="Menu" className="flex flex-col gap-[6px] items-center p-2" id="menu-btn" onclick="toggleMenu()" style={{background: 'transparent', border: 'none'}}>
<span className="ham-line"></span>
<span className="ham-line"></span>
<span className="ham-line"></span>
</button>
</div>
</nav>

<div className="grid-container" id="grid-container">

<div className="grid-cell cell-hero grid-pos-1" data-drag="true" data-pos="1" id="cell-hero" style={{touchAction: 'none', cursor: 'grab', userSelect: 'none'}}>
<div className="drag-handle" style={{touchAction: 'none'}}></div>
<div className="hero-slide active" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&amp', touchAction: 'none'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&amp', touchAction: 'none'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&amp', touchAction: 'none'}}></div>
<div className="hero-slide" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&amp', touchAction: 'none'}}></div>
<div className="hero-overlay" style={{touchAction: 'none'}}></div>
<div className="" style={{position: 'absolute', top: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: '2', touchAction: 'none'}}>
<div className="tag" style={{color: 'rgba(var(--rgb),0.6)', marginBottom: '0.75rem', touchAction: 'none'}}>A-MAZE Production</div>
<h1 className="font-medium tracking-tight" id="statement-title" style={{fontSize: 'clamp(2.5rem, 4.5vw, 4.8rem)', lineHeight: '1.02', letterSpacing: '-0.03em', color: 'var(--text)', transition: 'color 0.4s', touchAction: 'none'}}>
        Live<br style={{touchAction: 'none'}}/>Experiences
      </h1>
<p className="font-medium" id="statement-desc" style={{fontSize: 'clamp(0.8rem, 1vw, 0.95rem)', color: 'rgba(var(--rgb),0.75)', lineHeight: '1.6', maxWidth: '420px', marginTop: '1rem', transition: 'color 0.4s', touchAction: 'none'}}>
        From the FII to the Red Sea Global — we orchestrate monumental events across the globe.
      </p>
</div>
<div className="" style={{position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: '2', touchAction: 'none'}}>
<div className="" style={{borderTop: '1px solid rgba(var(--rgb),0.2)', paddingTop: '1.2rem', transition: 'border-color 0.4s', touchAction: 'none'}}>
<p className="font-normal" style={{fontSize: 'clamp(0.8rem, 1vw, 0.95rem)', color: 'rgba(var(--rgb),0.85)', lineHeight: '1.7', maxWidth: '100%', transition: 'color 0.4s', touchAction: 'none'}}>A-MAZE is a live experience agency crafting world-class events, cultural scenography, and immersive productions — from concept to curtain call.</p>
</div>
</div>
</div>

<div className="grid-cell cell-stats grid-pos-2" data-drag="true" data-pos="2" id="cell-stats" style={{touchAction: 'none', cursor: 'grab', userSelect: 'none'}}>
<div className="drag-handle" style={{touchAction: 'none'}}></div>
<canvas height="426" id="globe-canvas" style={{touchAction: 'none'}} width="355"></canvas>
<div className="cross-line-v" style={{touchAction: 'none'}}></div>
<div className="cross-line-h" style={{touchAction: 'none'}}></div>
<div className="" style={{position: 'absolute', top: '0px', left: '0px', right: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', zIndex: '5', touchAction: 'none'}}>
<span className="tag" style={{color: 'rgba(var(--rgb),0.6)', touchAction: 'none'}}>Global Impact</span>
<div style={{width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(var(--rgb),0.4)', transition: 'background-color 0.4s', touchAction: 'none'}}></div>
</div>
<div className="" style={{position: 'absolute', inset: '0px', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', zIndex: '4', touchAction: 'none'}}>
<div className="stat-quad" style={{paddingTop: '3rem', alignItems: 'flex-start', touchAction: 'none'}}>
<div className="stat-num" style={{fontSize: 'clamp(2rem, 3vw, 3.5rem)', touchAction: 'none'}}>64</div>
<div className="stat-label" style={{touchAction: 'none'}}>Events</div>
<div className="stat-sub" style={{touchAction: 'none'}}>Produced globally</div>
</div>
<div className="stat-quad" style={{paddingTop: '3rem', alignItems: 'flex-end', textAlign: 'right', touchAction: 'none'}}>
<div className="stat-num" style={{fontSize: 'clamp(2rem, 3vw, 3.5rem)', touchAction: 'none'}}>14</div>
<div className="stat-label" style={{touchAction: 'none'}}>Days</div>
<div className="stat-sub" style={{touchAction: 'none'}}>Avg delivery</div>
</div>
<div className="stat-quad" style={{alignItems: 'flex-start', touchAction: 'none'}}>
<div className="stat-num" style={{fontSize: 'clamp(2rem, 3vw, 3.5rem)', touchAction: 'none'}}>2.4<span style={{color: 'rgba(var(--rgb),0.6)', fontSize: '1rem', fontWeight: '400', transition: 'color 0.4s', touchAction: 'none'}}>M</span></div>
<div className="stat-label" style={{touchAction: 'none'}}>Attendees</div>
<div className="stat-sub" style={{touchAction: 'none'}}>Reached</div>
</div>
<div className="stat-quad" style={{alignItems: 'flex-end', textAlign: 'right', touchAction: 'none'}}>
<div className="stat-num" style={{fontSize: 'clamp(2rem, 3vw, 3.5rem)', touchAction: 'none'}}>5</div>
<div className="stat-label" style={{touchAction: 'none'}}>Years</div>
<div className="stat-sub" style={{touchAction: 'none'}}>Of excellence</div>
</div>
</div>
</div>

<div className="grid-cell cell-project-info grid-pos-3" data-drag="true" data-pos="3" id="cell-project-info" style={{touchAction: 'none', cursor: 'grab', userSelect: 'none'}}>
<div className="drag-handle" style={{touchAction: 'none'}}></div>
<div className="" style={{position: 'relative', display: 'flex', flexDirection: 'column', height: '100%', marginTop: '0.5rem', touchAction: 'none'}}>
<div className="" style={{touchAction: 'none'}}>
<div className="flex items-center gap-2" style={{marginBottom: '1rem', touchAction: 'none'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.8)', touchAction: 'none'}}></div>
<span className="tag" id="proj-year" style={{color: 'rgba(139, 92, 246, 0.9)', touchAction: 'none'}}>2024</span>
</div>
<div className="tag" id="proj-location" style={{color: 'rgba(var(--rgb),0.5)', marginBottom: '0.5rem', touchAction: 'none'}}>Riyadh, KSA</div>
<h2 className="font-medium tracking-tight" id="proj-title" style={{fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', lineHeight: '1.25', color: 'rgba(var(--rgb),0.95)', marginBottom: '0.75rem', transition: 'color 0.4s', touchAction: 'none'}}>
          Future Investment<br style={{touchAction: 'none'}}/>Initiative Forum
        </h2>
<p className="font-normal" id="proj-desc" style={{fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)', color: 'rgba(var(--rgb),0.65)', lineHeight: '1.6', marginBottom: '1.25rem', transition: 'color 0.4s', touchAction: 'none'}}>
          A landmark summit at the intersection of global capital and visionary leadership.
        </p>
</div>
<div className="flex items-center justify-between" style={{marginTop: 'auto', touchAction: 'none'}}>
<div className="flex gap-2" id="proj-dots" style={{touchAction: 'none'}}>
<div className="prog-dot active" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
<div className="prog-dot" style={{touchAction: 'none'}}></div>
</div>
<div className="flex gap-2" style={{touchAction: 'none'}}>
<button className="flex items-center justify-center" onclick="prevProject()" onmouseenter="this.style.borderColor='rgba(var(--rgb),0.6)'" onmouseleave="this.style.borderColor='rgba(var(--rgb),0.25)'" style={{width: '32px', height: '32px', borderRadius: '50%', background: 'transparent', border: '1px solid rgba(var(--rgb),0.25)', transition: 'border-color 0.3s', touchAction: 'none'}}>
<iconify-icon icon="solar:alt-arrow-left-linear" style={{color: 'rgba(var(--rgb),0.7)', transition: 'color 0.4s', touchAction: 'none'}} width="14"></iconify-icon>
</button>
<button className="flex items-center justify-center" onclick="nextProject()" onmouseenter="this.style.borderColor='rgba(var(--rgb),0.6)'" onmouseleave="this.style.borderColor='rgba(var(--rgb),0.25)'" style={{width: '32px', height: '32px', borderRadius: '50%', background: 'transparent', border: '1px solid rgba(var(--rgb),0.25)', transition: 'border-color 0.3s', touchAction: 'none'}}>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{color: 'rgba(var(--rgb),0.7)', transition: 'color 0.4s', touchAction: 'none'}} width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="grid-cell cell-project-img grid-pos-4" data-drag="true" data-pos="4" id="cell-project-img" style={{touchAction: 'none', cursor: 'grab', userSelect: 'none'}}>
<div className="drag-handle" style={{touchAction: 'none'}}></div>
<div className="proj-img active" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&amp', touchAction: 'none'}}></div>
<div className="proj-img-overlay" style={{touchAction: 'none'}}></div>
<div style={{position: 'absolute', bottom: '1.25rem', right: '1.25rem', zIndex: '2', touchAction: 'none'}}>
<button className="flex items-center gap-2" onmouseenter="this.style.background='rgba(var(--rgb),0.25)'" onmouseleave="this.style.background='rgba(var(--rgb),0.15)'" style={{padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(var(--rgb),0.15)', border: '1px solid rgba(var(--rgb),0.25)', transition: '0.3s', touchAction: 'none'}}>
<span style={{fontSize: '0.7rem', fontWeight: '500', color: 'rgba(var(--rgb),0.9)', letterSpacing: '0.08em', transition: 'color 0.4s', touchAction: 'none'}}>View</span>
<iconify-icon icon="solar:arrow-right-up-linear" style={{color: 'rgba(var(--rgb),0.7)', transition: 'color 0.4s', touchAction: 'none'}} width="12"></iconify-icon>
</button>
</div>
</div>

<div className="grid-cell cell-contact grid-pos-5" data-drag="true" data-pos="5" id="cell-contact" style={{touchAction: 'none', cursor: 'grab', userSelect: 'none'}}>
<div className="drag-handle" style={{touchAction: 'none'}}></div>
<canvas height="180" id="flow-canvas" style={{touchAction: 'none'}} width="355"></canvas>
<div className="" style={{position: 'relative', zIndex: '2', display: 'flex', flexDirection: 'column', height: '100%', touchAction: 'none'}}>
<div className="" style={{marginBottom: 'auto', touchAction: 'none'}}>
<div className="tag" style={{color: 'rgba(var(--rgb),0.5)', marginBottom: '0.75rem', touchAction: 'none'}}>Initiate a Project</div>
<h3 className="font-normal tracking-tight" style={{fontSize: 'clamp(1.3rem, 1.6vw, 1.5rem)', color: 'rgba(var(--rgb),0.95)', marginBottom: '0.5rem', transition: 'color 0.4s', touchAction: 'none'}}>
          Let's build<br style={{touchAction: 'none'}}/>something<br style={{touchAction: 'none'}}/>extraordinary.
        </h3>
</div>
<div className="" style={{marginTop: 'auto', touchAction: 'none'}}>
<div className="flex flex-wrap items-center gap-3" style={{marginBottom: '1.25rem', touchAction: 'none'}}>
<button className="flex gap-2 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='/mailto:Dominique@amazemenow.co'" onmouseenter="this.style.background='rgba(var(--rgb),0.25)'" onmouseleave="this.style.background='rgba(var(--rgb),0.15)'" role="button" style={{padding: '0.6rem 1.2rem', borderRadius: '9999px', background: 'rgba(var(--rgb),0.15)', border: '1px solid rgba(var(--rgb),0.25)', transition: '0.3s', touchAction: 'none'}}>
<span className="" style={{fontSize: '0.75rem', fontWeight: '500', color: 'rgba(var(--rgb),0.95)', letterSpacing: '0.05em', transition: 'color 0.4s', touchAction: 'none'}}>Submit your project</span>
<iconify-icon icon="solar:arrow-right-up-linear" style={{color: 'rgba(var(--rgb),0.8)', transition: 'color 0.4s', touchAction: 'none'}} width="14"></iconify-icon>
</button>
<button className="flex items-center gap-2" onmouseenter="this.style.borderColor='rgba(var(--rgb),0.5)'" onmouseleave="this.style.borderColor='rgba(var(--rgb),0.25)'" style={{padding: '0.6rem 1.2rem', borderRadius: '9999px', background: 'transparent', borderColor: 'rgba(var(--rgb),0.25)', transition: '0.3s', touchAction: 'none'}}>
<span className="" style={{fontSize: '0.75rem', fontWeight: '500', color: 'rgba(var(--rgb),0.85)', letterSpacing: '0.05em', transition: 'color 0.4s', touchAction: 'none'}}>Join our team</span>
<iconify-icon icon="solar:arrow-right-up-linear" style={{color: 'rgba(var(--rgb),0.7)', transition: 'color 0.4s', touchAction: 'none'}} width="14"></iconify-icon>
</button>
</div>
<div className="flex items-end justify-end" style={{touchAction: 'none'}}>
<span className="font-normal" style={{fontSize: '0.65rem', color: 'rgba(var(--rgb),0.4)', transition: 'color 0.4s', touchAction: 'none'}}>© 2025</span>
</div>
</div>
</div>
</div>
</div>

<div className="menu-overlay" id="menu-overlay">
<div style={{position: 'absolute', inset: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem'}}>
<nav className="flex flex-col items-center gap-4" style={{marginBottom: '3rem'}}>
<a className="menu-big-item text-center" href="/about" onclick="closeMenu()">About</a>
<a className="menu-big-item text-center" href="/whoweare" onclick="closeMenu()">Who we are</a>
<a className="menu-big-item text-center" href="/services" onclick="closeMenu()">Services</a>
<a className="menu-big-item text-center" href="/portfolio" onclick="closeMenu()">Case Studies</a>
<a className="menu-big-item text-center" href="/contact" onclick="closeMenu()">Contact</a>
</nav>
<div style={{height: '1px', width: '16rem', background: 'rgba(var(--rgb),0.2)', marginBottom: '2rem', transition: 'background-color 0.4s ease'}}></div>
<div className="flex gap-8" style={{fontSize: '0.75rem', fontWeight: '500', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(var(--rgb),0.6)', transition: 'color 0.4s ease'}}>
<a href="#" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{textDecoration: 'none', color: 'inherit', transition: '0.3s'}}>Instagram</a>
<a href="#" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{textDecoration: 'none', color: 'inherit', transition: '0.3s'}}>LinkedIn</a>
<a href="#" onmouseenter="this.style.color='rgba(var(--rgb),1)'" onmouseleave="this.style.color='rgba(var(--rgb),0.6)'" style={{textDecoration: 'none', color: 'inherit', transition: '0.3s'}}>Vimeo</a>
</div>
</div>
<button className="absolute top-[1.2rem] right-[2rem] md:top-[1.5rem] md:right-[3rem] flex items-center justify-center rounded-full bg-transparent" onclick="closeMenu()" onmouseenter="this.style.borderColor='rgba(var(--rgb),0.6)'" onmouseleave="this.style.borderColor='rgba(var(--rgb),0.25)'" style={{width: '3rem', height: '3rem', border: '1px solid rgba(var(--rgb),0.25)', transition: 'border-color 0.4s ease'}}>
<iconify-icon icon="solar:close-circle-linear" style={{color: 'rgba(var(--rgb),0.7)', transition: 'color 0.4s ease'}} width="24"></iconify-icon>
</button>
</div>


    </>
  );
}
