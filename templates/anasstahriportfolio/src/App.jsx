import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

    // ── Theme ──
    const root = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('anass-theme') || 'dark';
    root.setAttribute('data-theme', savedTheme);
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('anass-theme', next);
    });

    // ── Modal type ──
    function selectType(btn) {
      btn.closest('div').querySelectorAll('.type-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    }

    // ══════════════════════════════════════════
    //  UNIFIED LIGHTBOX — images + videos
    // ══════════════════════════════════════════
    const imageItems = [
      { type: 'image', src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2000&auto=format&fit=crop', alt: 'Luxury van production shot' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2000&auto=format&fit=crop', alt: 'Chef plating food' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop', alt: 'Restaurant dish presentation' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2000&auto=format&fit=crop', alt: 'Breakfast table photography' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop', alt: 'Portrait in a car' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop', alt: 'Architectural night scene' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2000&auto=format&fit=crop', alt: 'Desert road in Morocco' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2000&auto=format&fit=crop', alt: 'City street composition' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1578301979108-0eebc8b7f2cf?q=80&w=2000&auto=format&fit=crop', alt: 'Arabic calligraphy design artwork' },
    ];

    const videoItems = [
      { type: 'video', src: '', poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop', title: 'Atlas Brand Film' },
      { type: 'video', src: '', poster: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=1200&auto=format&fit=crop', title: 'City Motion Reel' },
      { type: 'video', src: '', poster: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop', title: 'Hospitality Feature' },
    ];

    const lightbox    = document.getElementById('lightbox');
    const lbImg       = document.getElementById('lightbox-img');
    const lbVid       = document.getElementById('lightbox-video');
    const lbCounter   = document.getElementById('lightbox-counter');
    const lbLabel     = document.getElementById('lightbox-label');
    const lbWrap      = document.getElementById('lightbox-media-wrap');

    let lbItems  = [];
    let lbIndex  = 0;

    function renderLbItem(index) {
      const item = lbItems[index];
      lbIndex = index;
      lbCounter.textContent = `${index + 1} / ${lbItems.length}`;

      if (item.type === 'image') {
        lbVid.style.display = 'none';
        lbVid.pause();
        lbVid.src = '';
        lbImg.style.display = 'block';
        lbImg.src  = item.src;
        lbImg.alt  = item.alt;
        lbLabel.classList.remove('visible');
      } else {
        lbImg.style.display = 'none';
        lbImg.src = '';
        lbVid.style.display = 'block';
        // Use poster image as stand-in since we don't have actual video files
        // When real video URLs are added, assign to lbVid.src
        lbVid.poster = item.poster;
        lbVid.src = item.src || '';
        lbLabel.textContent = item.title;
        lbLabel.classList.add('visible');
      }
    }

    function openLightbox(index, section) {
      lbItems = section === 'image' ? imageItems : videoItems;
      renderLbItem(index);
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox(e) {
      if (e) e.stopPropagation();
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      lbVid.pause();
      setTimeout(() => {
        lbImg.src = '';
        lbVid.src = '';
        lbLabel.classList.remove('visible');
      }, 350);
    }

    function lbNav(dir) {
      const next = (lbIndex + dir + lbItems.length) % lbItems.length;
      renderLbItem(next);
    }

    function handleLightboxBgClick(e) {
      if (e.target === lightbox) closeLightbox(e);
    }

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowRight') lbNav(1);
      if (e.key === 'ArrowLeft')  lbNav(-1);
    });

    // Scroll-to-zoom on images
    lightbox.addEventListener('wheel', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (lbImg.style.display === 'none') return;
      e.preventDefault();
      const current = parseFloat(lbImg.style.transform?.replace('scale(','') || '1');
      const next = Math.min(4, Math.max(1, current + (e.deltaY > 0 ? -0.25 : 0.25)));
      lbImg.style.transform = `scale(${next})`;
    }, { passive: false });

    lbImg.addEventListener('dblclick', () => { lbImg.style.transform = 'scale(1)'; });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main>

<section style={{padding: '2.5rem 0 2rem'}}>
<div className="content-wrap">
<div className="profile-card">

<div className="cover-band" style={{height: '8rem'}}></div>

<div style={{padding: '0 2rem 2.5rem', marginTop: '-3.5rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>

<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem'}}>

<div style={{display: 'flex', alignItems: 'flex-start', gap: '1.5rem'}}>
<div style={{flexShrink: '0', borderRadius: '9999px', padding: '3px', background: 'linear-gradient(135deg, #d4d4d4, #737373, #404040)'}}>
<div style={{width: '7rem', height: '7rem', borderRadius: '9999px', overflow: 'hidden', border: '2px solid var(--border)'}}>
<img alt="Anass portrait" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
</div>
<div style={{paddingTop: '3.5rem'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap'}}>
<h1 className="bio-name" style={{fontSize: 'clamp(1.375rem, 4vw, 1.875rem)', fontWeight: '500', letterSpacing: '-0.02em'}}>
                        anasstahri</h1>
<span className="profile-badge">Visual Portfolio</span>
</div>
<p className="bio-text" style={{marginTop: '0.625rem', fontSize: '0.9375rem', fontWeight: '300', lineHeight: '1.65', maxWidth: '38rem'}}>
                      International content creator and cinematographer crafting refined visuals across travel, food,
                      hospitality, architecture, and branded storytelling.
                    </p>
</div>
</div>

<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', paddingBottom: '0.25rem'}}>

<button aria-label="Toggle theme" className="theme-toggle" id="theme-toggle-btn" title="Toggle light/dark mode">
<span className="theme-toggle-icon icon-moon">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</span>
<span className="theme-toggle-icon icon-sun">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><circle cx="12" cy="12" r="5"></circle><line x1="12" x2="12" y1="1" y2="3"></line><line x1="12" x2="12" y1="21" y2="23"></line><line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line><line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line><line x1="1" x2="3" y1="12" y2="12"></line><line x1="21" x2="23" y1="12" y2="12"></line><line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line><line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line></svg>
</span>
</button>
<label className="btn-primary cursor-pointer" htmlFor="modal-toggle">
<i data-lucide="send" style={{width: '1rem', height: '1rem'}}></i>
                    Contact
                  </label>
<a className="btn-ghost" href="#packages">
<i data-lucide="briefcase" style={{width: '1rem', height: '1rem'}}></i>
                    View Packages
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="sticky tab-bar" style={{top: '0', zIndex: '30'}}>
<div className="content-wrap">
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)'}}>
<a className="tab-link active" href="#pictures" id="tab-pictures" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', height: '3.5rem', fontSize: '0.8125rem', fontWeight: '500', textDecoration: 'none', borderBottom: '2px solid var(--text-primary)'}}>
<i data-lucide="grid-3x3" style={{width: '1rem', height: '1rem'}}></i> Pictures
          </a>
<a className="tab-link" href="#videos" id="tab-videos" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', height: '3.5rem', fontSize: '0.8125rem', fontWeight: '300', textDecoration: 'none'}}>
<i data-lucide="clapperboard" style={{width: '1rem', height: '1rem'}}></i> Videos
          </a>
<a className="tab-link" href="#packages" id="tab-packages" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', height: '3.5rem', fontSize: '0.8125rem', fontWeight: '300', textDecoration: 'none'}}>
<i data-lucide="layout-panel-top" style={{width: '1rem', height: '1rem'}}></i> Packages
          </a>
</div>
</div>
</div>

<section id="pictures" style={{padding: '4rem 0 3rem'}}>
<div className="content-wrap">
<div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem'}}>
<div>
<p className="section-label">Main content area</p>
<h2 className="section-title">Pictures</h2>
</div>
<p style={{fontSize: '0.875rem', fontWeight: '300', color: 'var(--text-muted)'}}>Click any tile to expand.</p>
</div>
<div className="picture-grid">
<div className="picture-tile" onclick="openLightbox(0,'image')">
<img alt="Luxury van production shot" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(1,'image')">
<img alt="Chef plating food" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(2,'image')">
<img alt="Restaurant dish presentation" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(3,'image')">
<img alt="Breakfast table photography" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(4,'image')">
<img alt="Portrait in a car" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(5,'image')">
<img alt="Architectural night scene" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(6,'image')">
<img alt="Desert road in Morocco" src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(7,'image')">
<img alt="City street composition" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
<div className="picture-tile" onclick="openLightbox(8,'image')">
<img alt="Arabic calligraphy design artwork" src="https://images.unsplash.com/photo-1578301979108-0eebc8b7f2cf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="picture-tile-overlay"></div>
<div className="zoom-hint"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg></div>
</div>
</div>
</div>
</section>

<section id="videos" style={{padding: '4rem 0 3rem'}}>
<div className="content-wrap">
<div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2rem'}}>
<div>
<h2 className="section-title">Videos</h2>
<p className="section-sub">A dedicated row of motion-focused cards — click to watch.</p>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem'}}>
<div className="video-card" onclick="openLightbox(0,'video')">
<div className="video-card-thumb">
<img alt="Brand film preview" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="video-card-overlay"></div>
<div className="video-play-btn">
<i data-lucide="play" style={{width: '1rem', height: '1rem', marginLeft: '2px'}}></i></div>
</div>
<div className="video-card-body">
<h3>Atlas Brand Film</h3>
<p>Commercial storytelling and cinematic motion direction.</p>
</div>
</div>
<div className="video-card" onclick="openLightbox(1,'video')">
<div className="video-card-thumb">
<img alt="Travel reel preview" src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="video-card-overlay"></div>
<div className="video-play-btn">
<i data-lucide="play" style={{width: '1rem', height: '1rem', marginLeft: '2px'}}></i></div>
</div>
<div className="video-card-body">
<h3>City Motion Reel</h3>
<p>Short-form edits designed for modern social platforms.</p>
</div>
</div>
<div className="video-card" onclick="openLightbox(2,'video')">
<div className="video-card-thumb">
<img alt="Architecture video preview" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="video-card-overlay"></div>
<div className="video-play-btn">
<i data-lucide="play" style={{width: '1rem', height: '1rem', marginLeft: '2px'}}></i></div>
</div>
<div className="video-card-body">
<h3>Hospitality Feature</h3>
<p>Refined edits highlighting atmosphere, design, and experience.</p>
</div>
</div>
</div>
</div>
</section>

<section id="packages" style={{padding: '4rem 0 5rem'}}>
<div className="content-wrap">
<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem'}}>
<div>
<h2 className="section-title">Packages</h2>
<p className="section-sub" style={{maxWidth: '42rem'}}>Clearly defined service cards — easy to compare and
              navigate.</p>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem'}}>
<div className="package-card">
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
<h3>Pictures</h3>
<span className="package-pill">Starter</span>
</div>
<p>Ideal for profile updates, food photography, destination imagery, and polished lifestyle content.</p>
<ul style={{marginTop: '1.375rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: '1'}}>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Curated image set
              </li>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Color correction
              </li>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Optimized for
                portfolio and social use</li>
</ul>
<label className="btn-ghost cursor-pointer" htmlFor="modal-toggle" style={{marginTop: '1.625rem'}}>Inquire</label>
</div>
<div className="package-card featured">
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
<h3>Videos</h3>
<span className="package-pill featured">Recommended</span>
</div>
<p>Best for cinematic reels, short brand films, interviews, hospitality, and creator-led campaigns.</p>
<ul style={{marginTop: '1.375rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: '1'}}>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Creative direction
                and shot planning</li>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Edit, color, and
                delivery</li>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Vertical and
                horizontal exports</li>
</ul>
<label className="btn-primary cursor-pointer" htmlFor="modal-toggle" style={{marginTop: '1.625rem'}}>Select Package</label>
</div>
<div className="package-card">
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
<h3>Full Package</h3>
<span className="package-pill">Premium</span>
</div>
<p>A combined visual system for brands needing both photography and motion with cohesive direction.</p>
<ul style={{marginTop: '1.375rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: '1'}}>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Unified creative
                concept</li>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Mixed deliverables
                across formats</li>
<li className="package-feature">
<i className="package-check" data-lucide="check" style={{width: '1rem', height: '1rem'}}></i> Built for polished
                profile presentation</li>
</ul>
<label className="btn-ghost cursor-pointer" htmlFor="modal-toggle" style={{marginTop: '1.625rem'}}>Inquire</label>
</div>
</div>
</div>
</section>
</main>

<footer>
<div className="content-wrap" style={{paddingTop: '2.25rem', paddingBottom: '2.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0.875rem'}}>
<span className="footer-logo">anasstahri</span>
<span className="dot-sep">•</span>
<span className="footer-sub">Visual portfolio profile</span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '1.25rem'}}>
<a aria-label="Instagram" className="footer-icon" href="#"><i data-lucide="instagram" style={{width: '1.25rem', height: '1.25rem'}}></i></a>
<a aria-label="Mail" className="footer-icon" href="#"><i data-lucide="mail" style={{width: '1.25rem', height: '1.25rem'}}></i></a>
<a aria-label="Play" className="footer-icon" href="#"><i data-lucide="play-square" style={{width: '1.25rem', height: '1.25rem'}}></i></a>
</div>
</div>
</footer>

<input className="hidden" id="modal-toggle" type="checkbox"/>
<div className="fixed inset-0 z-[100] items-center justify-center p-4 sm:p-6 flex" id="contact-modal">
<label className="modal-overlay-bg" htmlFor="modal-toggle"></label>
<div className="modal-panel">
<label htmlFor="modal-toggle" style={{position: 'absolute', top: '1.25rem', right: '1.25rem', cursor: 'pointer', color: 'var(--text-muted)', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2rem', height: '2rem', borderRadius: '9999px', background: 'var(--pill-bg)'}}>
<i data-lucide="x" style={{width: '1.125rem', height: '1.125rem'}}></i>
</label>
<h3 className="modal-title">Start a project</h3>
<p className="modal-sub">Share your idea and preferred content type. We'll respond with a tailored approach.</p>
<div style={{marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.375rem'}}>
<div>
<label className="form-label">Project type</label>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem'}}>
<button className="type-btn selected" onclick="selectType(this)" type="button">Pictures</button>
<button className="type-btn" onclick="selectType(this)" type="button">Videos</button>
<button className="type-btn" onclick="selectType(this)" type="button">Package</button>
</div>
</div>
<div>
<label className="form-label">Name</label>
<input className="form-input" placeholder="Your name" type="text"/>
</div>
<div>
<label className="form-label">Email</label>
<input className="form-input" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="form-label">Project details</label>
<textarea className="form-textarea" placeholder="Tell us about the style, deliverables, and timeline." rows="4"></textarea>
</div>
<button className="btn-primary" style={{width: '100%', height: '3rem', fontSize: '0.9375rem'}} type="button">Send inquiry</button>
</div>
</div>
</div>

<div id="lightbox" onclick="handleLightboxBgClick(event)">

<button aria-label="Close" id="lightbox-close" onclick="closeLightbox(event)">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>

<button aria-label="Previous" className="lb-arrow" id="lb-prev" onclick="lbNav(-1)">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>

<div id="lightbox-media-wrap">
<img alt="" draggable="false" id="lightbox-img" src="" style={{display: 'none'}}/>
<video controls="" id="lightbox-video" playsinline="" style={{display: 'none'}}></video>
</div>

<button aria-label="Next" className="lb-arrow" id="lb-next" onclick="lbNav(1)">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>

<div id="lightbox-label"></div>

<div id="lightbox-counter"></div>
</div>


    </>
  );
}
