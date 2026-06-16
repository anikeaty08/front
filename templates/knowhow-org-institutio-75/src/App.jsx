import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
black: '#212121',
blue: '#cafff9',
lime: '#c0ff87',
gray: '#eeecec',
dark: '#1a1a1a'
}
},
fontFamily: {
sans: ['Space Grotesk', 'sans-serif'],
}
}
}
}



      // 1. REBUILT CANVAS ATMOSPHERE (PURE BRAND COLORS)
      const canvas = document.getElementById('hero-canvas');
      const ctx = canvas.getContext('2d');
      let width, height;

      // Orbs definition - Pure colors only
      const orbs = [
        { x: 0, y: 0, r: 0, color: '#cafff9', opacity: 0.05, vx: 0.2, vy: 0.1 },
        { x: 0, y: 0, r: 0, color: '#cafff9', opacity: 0.03, vx: -0.1, vy: 0.2 },
        { x: 0, y: 0, r: 0, color: '#c0ff87', opacity: 0.02, vx: 0.1, vy: -0.1 }
      ];

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        orbs[0].x = width * 0.2; orbs[0].y = height * 0.3; orbs[0].r = height * 0.6;
        orbs[1].x = width * 0.8; orbs[1].y = height * 0.7; orbs[1].r = height * 0.5;
        orbs[2].x = width * 0.5; orbs[2].y = height * 0.5; orbs[2].r = height * 0.4;
      }

      function hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      }

      function animate() {
        ctx.fillStyle = '#212121';
        ctx.fillRect(0, 0, width, height);

        ctx.globalCompositeOperation = 'screen';

        const time = Date.now() * 0.0005;

        orbs.forEach((orb, i) => {
          const x = orb.x + Math.sin(time + i) * (width * 0.1);
          const y = orb.y + Math.cos(time * 0.8 + i) * (height * 0.1);

          const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.r);
          gradient.addColorStop(0, hexToRgba(orb.color, orb.opacity * 2));
          gradient.addColorStop(0.5, hexToRgba(orb.color, orb.opacity));
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, orb.r * 1.5, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.globalCompositeOperation = 'source-over';
        requestAnimationFrame(animate);
      }

      window.addEventListener('resize', resize);
      resize();
      animate();


      // 2. LOGO MORPHING (LIVING FLUIDITY)
      const logo = document.getElementById('hero-logo');
      const blurFilter = document.getElementById('anim-blur');
      let startTimestamp = null;
      const duration = 8500;

      // Start state
      logo.style.opacity = '1';

      // Easing: Slow start (fluid) -> Fast end (crystallize)
      function easeInCubic(x) {
          return x * x * x;
      }

      function animateLogo(timestamp) {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const progress = Math.min(elapsed / duration, 1);

          // Crystal Progress: 0 -> 1 (stays near 0 for long time)
          const crystal = easeInCubic(progress);
          // Fluid Chaos: 1 -> 0
          const chaos = 1 - crystal;

          // 1. BLUR BREATHING
          // Pulse the blur to make the matter feel alive
          const blurPulse = Math.sin(elapsed * 0.003) * 8 * chaos;
          const currentBlur = Math.max(0, (25 * chaos) + blurPulse);
          blurFilter.setAttribute('stdDeviation', `${currentBlur}`);

          // 2. TRACKING (The Lava Lamp Effect)
          // Wide oscillation to merge and split blobs
          const baseTracking = -0.3 + ((-0.05 - -0.3) * crystal);
          const trackingPulse = Math.sin(elapsed * 0.002) * 0.15 * chaos;
          const trackingJitter = Math.cos(elapsed * 0.005) * 0.02 * chaos;
          logo.style.letterSpacing = `${baseTracking + trackingPulse + trackingJitter}em`;

          // 3. MORPHING (Squash, Stretch, Skew)
          // Organic instability
          const squash = Math.sin(elapsed * 0.0025) * 0.12 * chaos;
          const skew = Math.sin(elapsed * 0.0015) * 4 * chaos; // +/- 4deg
          const floatY = Math.cos(elapsed * 0.002) * 15 * chaos; // +/- 15px

          const baseScaleY = 0.8 + (0.2 * crystal);
          const scaleY = baseScaleY + squash;
          const scaleX = 1 - (squash * 0.5);

          logo.style.transform = `translateY(${floatY}px) scale(${scaleX}, ${scaleY}) skewX(${skew}deg)`;

          if (progress < 1) {
              requestAnimationFrame(animateLogo);
          } else {
              // Final Crystallized State
              blurFilter.setAttribute('stdDeviation', '0');
              logo.style.letterSpacing = '-0.05em';
              logo.style.transform = 'none';
          }
      }

      setTimeout(() => {
          requestAnimationFrame(animateLogo);
      }, 500);

      // 3. MATERIC SCROLL HIGHLIGHT OBSERVER
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -15% 0px',
        threshold: 0.1
      };

      const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const randomDelay = Math.random() * 200;
            setTimeout(() => {
              entry.target.classList.add('active');
            }, randomDelay);
            highlightObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.organic-highlight').forEach(el => {
        highlightObserver.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-brand-gray/90 transition-opacity duration-1000" id="navbar">
<div className="text-lg font-medium tracking-tight uppercase group cursor-default">
        Knowhow.org
        <div className="h-[1px] w-0 group-hover:w-full bg-brand-lime transition-all duration-700 ease-out"></div>
</div>
<a className="text-xs font-normal hover:text-brand-blue transition-colors duration-300 border border-transparent hover:border-brand-blue/30 rounded-full px-4 py-2" href="#">
        Contact Us
      </a>
</nav>

<header className="relative w-full h-screen overflow-hidden flex flex-col justify-between">
<canvas className="absolute top-0 left-0 w-full h-full object-cover z-0" id="hero-canvas"></canvas>
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent z-0 pointer-events-none"></div>
<div className="relative z-10 w-full h-full flex flex-col px-6 md:px-12 pt-24 pb-12 md:pb-16 max-w-[1800px] mx-auto">
<div className="flex-1 flex flex-col justify-center items-start w-full">
<svg style={{position: 'absolute', width: '0', height: '0', pointerEvents: 'none'}}>
<defs>
<filter id="fluid-filter">
<fegaussianblur id="anim-blur" in="SourceGraphic" result="blur" stddeviation="10"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"></fecolormatrix>
<fecomposite in="SourceGraphic" in2="goo" operator="atop"></fecomposite>
</filter>
</defs>
</svg>
<div className="w-full relative select-none">
<div className="fluid-text-container origin-left w-full">

<h1 className="font-medium tracking-tighter text-brand-gray w-full leading-[0.85] opacity-0 text-[17vw] md:text-[min(13vw,17vh)]" id="hero-logo" style={{}}>
                KNOWHOW
                <span className="block ml-[0.5em] text-brand-blue">.ORG</span>
</h1>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-brand-gray/10 pt-8 opacity-0 translate-y-8 animate-[fadeInUp_1.5s_2.5s_forwards] w-full">
<div className="md:col-span-7">
<h2 className="text-3xl md:text-5xl lg:text-6xl text-brand-gray font-normal leading-tight track-tight-custom text-balance">
              A global platform for education,
              <span className="text-brand-lime inline-block">industry</span>
              , and place-based learning.
            </h2>
</div>
<div className="md:col-span-5 md:pl-12">
<p className="text-lg md:text-xl text-brand-blue/80 font-light leading-relaxed text-balance">
              Connecting universities, companies, and territories through
              dedicated knowledge infrastructures.
            </p>
</div>
</div>
</div>
</header>

<section className="relative w-full bg-brand-black overflow-hidden py-12 md:py-24 border-b border-brand-gray/5 z-20 group">

<button aria-label="Previous" className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 p-2 text-brand-gray/20 hover:text-brand-blue/80 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer outline-none" onclick="document.getElementById('slider-container').scrollBy({left: -window.innerWidth/2, behavior: 'smooth'})">
<iconify-icon height="40" icon="solar:arrow-left-linear" width="40"></iconify-icon>
</button>
<button aria-label="Next" className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 p-2 text-brand-gray/20 hover:text-brand-blue/80 transition-all duration-500 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer outline-none" onclick="document.getElementById('slider-container').scrollBy({left: window.innerWidth/2, behavior: 'smooth'})">
<iconify-icon height="40" icon="solar:arrow-right-linear" width="40"></iconify-icon>
</button>

<div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-brand-black via-brand-black/80 to-transparent z-10 pointer-events-none"></div>

<div className="flex items-center w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing" id="slider-container">

<div className="flex items-center gap-4 md:gap-8 pr-4 md:pr-8 shrink-0">
<img alt="Spark Three Interior" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Hall" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Library" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Atrium" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Collaborative" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1505566086550-58c0c0576974?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>

<div aria-hidden="true" className="flex items-center gap-4 md:gap-8 pr-4 md:pr-8 shrink-0">
<img alt="Spark Three Interior" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Hall" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Library" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Atrium" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<img alt="Spark Three Collaborative" className="h-[300px] md:h-[500px] w-auto aspect-[4/3] md:aspect-[16/9] object-cover rounded-sm grayscale-[0.3] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1505566086550-58c0c0576974?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
</div>
</section>

<section className="relative bg-brand-gray text-brand-black overflow-hidden">

<div className="absolute top-0 right-0 w-full md:w-[45%] h-full z-0">
<img alt="Institutional Infrastructure" className="w-full h-full object-cover grayscale opacity-90 brightness-[0.95] contrast-[1.1]" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-brand-gray via-transparent to-transparent opacity-80 md:opacity-0"></div>
</div>
<div className="max-w-[1800px] mx-auto relative z-10 px-6 md:px-12 py-24 md:py-40">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-7 flex flex-col gap-12 md:gap-24 md:pr-12">
<div>
<span className="inline-block py-1 px-3 border border-brand-black/20 rounded-full text-xs font-medium uppercase tracking-wider text-brand-black/60 mb-8">
                The Platform
              </span>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[1.05] track-tight-custom text-brand-black text-balance relative">
                Enabling
                <span className="organic-highlight highlight-lime">
                  high-impact
                </span>
<span className="organic-highlight highlight-lime">
                  initiatives
                </span>
                through
                <span className="organic-highlight highlight-blue">
                  infrastructure
                </span>
                , not instruction.
              </h2>
</div>
<div className="md:w-5/6">
<p className="text-lg md:text-xl leading-relaxed text-brand-black/80">
                Know-How is an
                <span className="organic-highlight highlight-blue">
                  international platform
                </span>
                designed to enable high-impact educational, cultural, and
                professional initiatives. It operates as an enabler and host,
                bringing together
                <span className="organic-highlight highlight-blue">
                  universities
                </span>
                ,
                <span className="organic-highlight highlight-blue">
                  industry partners
                </span>
                , and
                <span className="organic-highlight highlight-blue">
                  local ecosystems
                </span>
                within purpose-built knowledge infrastructures.
              </p>
</div>
</div>

<div className="md:col-span-5 relative h-full flex items-end pb-12 md:pb-0">
<div className="bg-white border border-brand-black/10 p-8 md:p-10 relative overflow-hidden group hover:border-brand-blue/50 transition-colors duration-500 shadow-2xl shadow-brand-black/5 md:-ml-24 md:mt-64 z-20 w-full md:max-w-md">
<div className="absolute top-0 right-0 w-40 h-40 bg-brand-blue/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="text-xs font-medium uppercase tracking-wider mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-black" height="16" icon="solar:info-circle-linear" width="16"></iconify-icon>
                Our Role
              </h3>
<p className="text-base md:text-lg text-brand-black/90 leading-relaxed relative z-10">
                Know-How is not a university and does not deliver academic
                programs directly. Its role is to provide the
                <span className="organic-highlight highlight-lime">
                  physical spaces
                </span>
                , operational framework, and local integration that allow
                partners to develop meaningful and scalable initiatives.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-40 px-6 md:px-12 bg-brand-black text-brand-gray overflow-hidden border-y border-brand-gray/5">
<svg className="absolute top-0 right-0 h-full w-2/3 opacity-[0.03] pointer-events-none" fill="none" viewbox="0 0 400 800">
<path d="M50 0 V800 M150 0 V800 M250 0 V800 M350 0 V800" stroke="white" strokeWidth="2"></path>
<rect fill="white" height="200" width="100" x="50" y="100"></rect>
<rect fill="white" height="300" width="100" x="250" y="400"></rect>
</svg>
<div className="max-w-[1800px] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-3">
<span className="inline-block py-1 px-3 border border-brand-gray/20 rounded-full text-xs font-medium uppercase tracking-wider text-brand-gray/60">
              The Infrastructure
            </span>
</div>
<div className="lg:col-span-9">
<h2 className="text-4xl md:text-6xl font-normal leading-tight track-tight-custom mb-12">
<span className="organic-highlight highlight-blue">
                Purpose-built spaces
              </span>
              for
              <br/>
<span className="organic-highlight highlight-lime delay-200">
                global education.
              </span>
</h2>
<div className="md:w-3/4 lg:w-2/3">
<p className="text-xl md:text-2xl font-light leading-relaxed text-brand-gray/70">
                Knowledge Centers are permanent,
                <span className="organic-highlight highlight-blue">
                  purpose-built infrastructures
                </span>
                designed to host international academic programs, executive
                education, applied research, and collaborative initiatives. They
                are
                <span className="organic-highlight highlight-blue">
                  flexible, technology-enabled spaces
                </span>
                created to foster interaction.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-40 px-6 md:px-12 bg-brand-gray text-brand-black">
<div className="max-w-[1800px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-8 border-b border-brand-black/10 pb-8">
<div>
<span className="inline-block py-1 px-3 border border-brand-black/20 rounded-full text-xs font-medium uppercase tracking-wider text-brand-black/60 mb-6">
              The Network
            </span>
<h2 className="text-4xl md:text-6xl font-normal track-tight-custom text-brand-black">
<span className="organic-highlight highlight-lime">
                Three cities.
              </span>
              One platform.
              <br className="hidden md:block"/>
<span className="organic-highlight highlight-blue delay-100">
                Growing globally.
              </span>
</h2>
</div>
<div className="hidden md:block">
<iconify-icon className="text-brand-black/20" height="48" icon="solar:globe-linear" width="48"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-40 group cursor-pointer">
<div className="lg:col-span-3 flex flex-col justify-between border-t border-brand-black/20 pt-6">
<div>
<div className="flex items-center gap-3 mb-4">
<h3 className="text-3xl font-medium uppercase tracking-tight">
                  Milan
                </h3>
<span className="bg-brand-lime text-brand-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                  Active
                </span>
</div>
<p className="text-sm font-normal text-brand-black/50 uppercase tracking-widest mb-2">
                The
                <span className="organic-highlight highlight-blue">
                  Founding Hub
                </span>
</p>
</div>
<div className="hidden lg:block mt-auto transform group-hover:translate-x-2 transition-transform duration-300">
<iconify-icon className="text-brand-black" height="32" icon="solar:arrow-right-linear" width="32"></iconify-icon>
</div>
</div>
<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
<div className="relative w-full aspect-square bg-neutral-200 overflow-hidden">
<img alt="Milan Hub" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-125 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-brand-black/20"></div>
<div className="absolute bottom-4 left-4 bg-brand-blue/90 backdrop-blur-md px-3 py-1 text-xs font-mono text-brand-black font-medium z-10">
                Spark Three • HUB.01
              </div>
</div>
<div>
<p className="text-lg text-brand-black/80 leading-relaxed">
                Milan is the first active Knowledge Center of the Know-How
                platform. Located within Milano Santa Giulia – Spark Business,
                one of Europe's most significant urban regeneration districts,
                the Milan hub sits in a dynamic ecosystem that already hosts
                major international headquarters, including Sky Italia and
                Saipem. Designed with a strong focus on sustainability,
                wellbeing, and connectivity, the Milan Knowledge Center serves
                as the founding hub of Know-How and the reference model for
                future international expansion.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-40 group opacity-80 hover:opacity-100 transition-opacity">
<div className="lg:col-span-3 flex flex-col justify-between border-t border-brand-black/20 pt-6">
<div>
<div className="flex items-center gap-3 mb-4">
<h3 className="text-3xl font-medium uppercase tracking-tight text-brand-black/90">
                  Madrid
                </h3>
<span className="border border-brand-black/20 text-brand-black/60 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                  Coming Soon
                </span>
</div>
<p className="text-sm font-normal text-brand-black/50 uppercase tracking-widest mb-2">
<span className="organic-highlight highlight-blue">
                  European Expansion
                </span>
</p>
</div>
</div>
<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
<div className="relative w-full aspect-square bg-neutral-200 overflow-hidden">
<img alt="Madrid Hub" className="absolute inset-0 w-full h-full object-cover grayscale-[0.1] group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-brand-black/10"></div>
</div>
<div>
<p className="text-lg text-brand-black/80 leading-relaxed">
                The Madrid Knowledge Center will be developed within LaFinca
                Business Park, a leading business and innovation campus in the
                Madrid metropolitan area. LaFinca is home to the Spanish
                headquarters of major global companies, including Microsoft
                Spain and Orange Spain, and hosts a vibrant international
                professional community. Within this environment, Know-How Madrid
                will serve as a hub for international initiatives connecting
                universities, industry, and institutions.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group opacity-80 hover:opacity-100 transition-opacity">
<div className="lg:col-span-3 flex flex-col justify-between border-t border-brand-black/20 pt-6">
<div>
<div className="flex items-center gap-3 mb-4">
<h3 className="text-3xl font-medium uppercase tracking-tight text-brand-black/90">
                  Singapore
                </h3>
<span className="border border-brand-black/20 text-brand-black/60 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                  Coming Soon
                </span>
</div>
<p className="text-sm font-normal text-brand-black/50 uppercase tracking-widest mb-2">
<span className="organic-highlight highlight-blue">
                  Asia-Pacific Gateway
                </span>
</p>
</div>
</div>
<div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
<div className="relative w-full aspect-square bg-neutral-200 overflow-hidden">
<img alt="Singapore Hub" className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] contrast-125 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-brand-black/20"></div>
</div>
<div>
<p className="text-lg text-brand-black/80 leading-relaxed">
                Singapore represents the next strategic step in Know-How's
                global development, extending the platform into one of Asia's
                most important gateways for education, innovation, and
                international exchange.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-64 px-6 md:px-12 bg-brand-black text-brand-gray border-t border-brand-gray/5 overflow-hidden">

<div className="absolute inset-0 opacity-[0.07] pointer-events-none">
<svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="20" id="grid-dots-global" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle className="text-brand-gray" cx="2" cy="2" fill="currentColor" r="1"></circle>
</pattern>
</defs>
<rect fill="url(#grid-dots-global)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-transparent z-0 pointer-events-none"></div>
<div className="max-w-[1800px] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
<div className="w-full">
<span className="inline-block py-1 px-3 border border-brand-gray/20 rounded-full text-xs font-medium uppercase tracking-wider text-brand-gray/60 mb-8">
              A Growing Network
            </span>
<h2 className="text-5xl md:text-7xl font-normal leading-[1.05] track-tight-custom mb-12 text-balance">
              Building the future of global education infrastructure.
            </h2>
<p className="text-xl md:text-3xl font-light leading-relaxed text-brand-gray/70 text-balance max-w-3xl">
              Know-How is designed as a
              <span className="organic-highlight highlight-lime">
                growing international network
              </span>
              of knowledge infrastructures around the globe, enabling partners
              to operate across
              <span className="organic-highlight highlight-blue">
                cities, cultures, and ecosystems
              </span>
              with consistency and quality.
            </p>
</div>

<div className="relative w-full aspect-[4/3] md:h-[60vh] min-h-[400px] flex items-center justify-center">
<svg className="w-full h-full overflow-visible" preserveaspectratio="xMidYMid meet" viewbox="400 80 480 320">

<path className="text-brand-gray/30" d="M485,175 Q600,100 780,300" fill="none" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="1.5"></path>
<line className="text-brand-gray/30" stroke="currentColor" strokeWidth="1.5" x1="470" x2="485" y1="180" y2="175"></line>

<g className="group">
<circle className="fill-brand-lime" cx="470" cy="180" r="4"></circle>
<circle className="stroke-brand-lime/30 fill-none animate-ping" cx="470" cy="180" r="12" style={{animationDuration: '3s'}}></circle>
<text className="text-[14px] fill-brand-gray font-mono uppercase tracking-widest font-medium opacity-80" text-anchor="middle" x="470" y="215">
                  Madrid
                </text>
</g>

<g className="group">
<circle className="fill-brand-lime" cx="485" cy="175" r="4"></circle>
<text className="text-[14px] fill-brand-gray font-mono uppercase tracking-widest font-medium opacity-80" text-anchor="middle" x="485" y="145">
                  Milan
                </text>
</g>

<g className="group">
<circle className="fill-brand-blue" cx="780" cy="300" r="4"></circle>
<circle className="stroke-brand-blue/30 fill-none animate-ping" cx="780" cy="300" r="12" style={{animationDuration: '3s', animationDelay: '1.5s'}}></circle>
<text className="text-[14px] fill-brand-gray font-mono uppercase tracking-widest font-medium opacity-80" text-anchor="middle" x="780" y="335">
                  Singapore
                </text>
</g>
</svg>
</div>
</div>
</div>
</section>
<footer className="bg-brand-black text-brand-gray pt-20 pb-10 px-6 md:px-12 border-t border-brand-gray/5">
<div className="max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<h4 className="text-xl font-medium uppercase tracking-tight mb-8">
              Knowhow.org
            </h4>
<p className="text-sm text-brand-gray/50 max-w-xs leading-relaxed">
              Connecting
              <span className="organic-highlight highlight-blue">education</span>
              ,
              <span className="organic-highlight highlight-blue">industry</span>
              , and
              <span className="organic-highlight highlight-blue">territories</span>
              .
            </p>
</div>
<div className="md:col-span-1">
<h5 className="text-xs font-medium uppercase tracking-wider text-brand-gray/40 mb-6">
              Navigation
            </h5>
<ul className="space-y-4 text-sm font-normal">
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  The Platform
                </a>
</li>
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  Infrastructure
                </a>
</li>
<li>
<a className="hover:text-brand-blue transition-colors" href="#">
                  The Network
                </a>
</li>
</ul>
</div>
<div className="md:col-span-1">
<h5 className="text-xs font-medium uppercase tracking-wider text-brand-gray/40 mb-6">
              Hubs
            </h5>
<ul className="space-y-4 text-sm font-normal">
<li>
<a className="hover:text-brand-lime transition-colors" href="#">
                  Milan
                </a>
</li>
<li>
<a className="hover:text-brand-lime transition-colors" href="#">
                  Madrid
                </a>
</li>
<li>
<a className="hover:text-brand-lime transition-colors" href="#">
                  Singapore
                </a>
</li>
</ul>
</div>
<div className="md:col-span-1">
<h5 className="text-xs font-medium uppercase tracking-wider text-brand-gray/40 mb-6">
              Contact
            </h5>
<a className="text-lg font-light hover:text-brand-blue transition-colors border-b border-brand-gray/20 pb-1 inline-block" href="mailto:partnerships@knowhow.org">
              partnerships@knowhow.org
            </a>
</div>
</div>
<div className="border-t border-brand-gray/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-brand-gray/40 font-mono">
<div>© 2025 Know-How. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-brand-gray transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-brand-gray transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

<style>
      @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
      }
    </style>



    </>
  );
}
