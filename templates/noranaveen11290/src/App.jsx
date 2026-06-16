import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
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



    document.getElementById('year').textContent = new Date().getFullYear();

    const blob = document.getElementById("cursor-blob");
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      blob.style.transform = `translate(${x}px, ${y}px)`;
    });

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if(entry.target.querySelector('.counter')) {
            startCounters(entry.target);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    function startCounters(parent) {
      const counters = parent.querySelectorAll('.counter');
      counters.forEach(counter => {
        if (counter.classList.contains('counted')) return;
        counter.classList.add('counted');
        
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 16); 
        
        let current = 0;
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.innerText = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target;
          }
        };
        updateCounter();
      });
    }

    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', (e) => {
      if(e.target.checked) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
    });

    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('photo-gallery');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, unhighlight, false);
    });

    function highlight(e) {
      dropzone.classList.add('border-[#3A6FF7]', 'bg-[#3A6FF7]/10');
    }

    function unhighlight(e) {
      dropzone.classList.remove('border-[#3A6FF7]', 'bg-[#3A6FF7]/10');
    }

    dropzone.addEventListener('drop', handleDrop, false);
    fileInput.addEventListener('change', function() { handleFiles(this.files) });

    function handleDrop(e) {
      let dt = e.dataTransfer;
      let files = dt.files;
      handleFiles(files);
    }

    function handleFiles(files) {
      ([...files]).forEach(uploadFile);
    }

    function uploadFile(file) {
      if (!file.type.startsWith('image/')) return;
      
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function() {
        let newImgContainer = document.createElement('div');
        newImgContainer.className = 'w-80 h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden shrink-0 relative group transform transition-transform hover:scale-105';
        
        let img = document.createElement('img');
        img.src = reader.result;
        img.className = 'w-full h-full object-cover';
        
        let overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center';
        overlay.innerHTML = '<span class="text-xs font-semibold px-3 py-1 bg-white text-black rounded-full">New Upload</span>';
        
        newImgContainer.appendChild(img);
        newImgContainer.appendChild(overlay);
        
        gallery.insertBefore(newImgContainer, gallery.firstChild);
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor-blob" style={{position: 'fixed', top: '-150px', left: '-150px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(58,111,247,0.15) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: '0', transition: 'transform 0.1s ease-out'}}></div>
<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold hover:opacity-70 transition-opacity relative z-10" href="#home">
        NN
      </a>
<div className="hidden md:flex items-center gap-8 text-sm tracking-wide font-medium relative z-10">
<a className="hover:text-[#3A6FF7] transition-colors" href="#about">About</a>
<a className="hover:text-[#3A6FF7] transition-colors" href="#projects">Projects</a>
<a className="hover:text-[#3A6FF7] transition-colors" href="#research">Research</a>
<a className="hover:text-[#3A6FF7] transition-colors" href="#impact">Impact</a>
<a className="hover:text-[#3A6FF7] transition-colors" href="#photography">Photography</a>
<a className="hover:text-[#3A6FF7] transition-colors" href="#academics">Academics</a>
</div>
<div className="flex items-center gap-6 relative z-10">
<label className="theme-toggle-switch">
<input id="theme-toggle" type="checkbox"/>
<span className="slider"></span>
</label>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full glass hover:bg-white/10 transition-all" href="#contact">
          Contact
          <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="relative z-10">
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20" id="home">
<div className="reveal max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-[#3A6FF7] animate-pulse"></span>
          Undergraduate Research Fellow
        </div>
<h1 className="text-5xl md:text-8xl tracking-tighter font-semibold mb-6 leading-tight">
          Nora Naveen
        </h1>
<p className="text-xl md:text-2xl tracking-tight font-medium opacity-70 max-w-2xl mb-12">
          Where curiosity turns into innovation.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 rounded-full bg-white text-[#0B1A33] text-sm font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2 light-theme:bg-[#0B1A33] light-theme:text-white" href="#projects">
            View My Work
            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-8 py-3 rounded-full glass text-sm font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#contact">
            Contact Me
          </a>
</div>
</div>
</section>
<section className="py-32 px-6" id="about">
<div className="max-w-5xl mx-auto reveal">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold mb-8">Engineering a better tomorrow.</h2>
<p className="text-base leading-relaxed opacity-70 mb-6">
              I am currently a junior at the Texas Academy of Mathematics and Science, working as an undergraduate research fellow in the department of biomedical engineering under Dr. Neda Habibi.
            </p>
<p className="text-base leading-relaxed opacity-70 mb-8">
              My work spans from hands-on hardware engineering to complex bibliometric analysis in neuropharmacology. I believe in a multidisciplinary approach to solving the medical and technological challenges of our generation.
            </p>
</div>
<div className="relative w-full aspect-square rounded-3xl glass p-8 flex flex-col justify-end overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="relative z-20">
<h3 className="text-xl tracking-tight font-semibold mb-2 text-white">Multidisciplinary Focus</h3>
<ul className="text-sm opacity-90 space-y-2 text-white/80">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Biomedical Engineering</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Hardware Development</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Neuropharmacology</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 relative" id="projects">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-4xl md:text-6xl tracking-tight font-semibold mb-4">Featured Projects</h2>
<p className="text-lg opacity-70">Hardware, software, and systems.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
<div className="tilt-card glass p-8 rounded-3xl h-[400px] flex flex-col transition-all duration-300 transform-style-3d hover:border-white/20">
<div className="mb-auto transform translate-z-10" style={{transform: 'translateZ(30px)'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-3">Ironman Arc Reactor Clock</h3>
<p className="text-sm opacity-70 leading-relaxed">Mini project building an arc reactor-shaped clock to practice soldering and 3D design. Adapted open-source STL files for component sizes; LED display fully configured with ESP32.</p>
</div>
<div className="flex flex-wrap gap-2 mt-6 transform translate-z-10" style={{transform: 'translateZ(20px)'}}>
<span className="text-xs px-3 py-1 rounded-full bg-white/5">ESP32</span>
<span className="text-xs px-3 py-1 rounded-full bg-white/5">3D Design</span>
</div>
</div>
<div className="tilt-card glass p-8 rounded-3xl h-[400px] flex flex-col transition-all duration-300 transform-style-3d hover:border-white/20">
<div className="mb-auto transform translate-z-10" style={{transform: 'translateZ(30px)'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:magnet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-3">Alternating Magnetic Field Generator</h3>
<p className="text-sm opacity-70 leading-relaxed">Confidential hardware engineering project focused on magnetic field generation for specialized applications. Further details available upon request.</p>
</div>
<div className="flex flex-wrap gap-2 mt-6 transform translate-z-10" style={{transform: 'translateZ(20px)'}}>
<span className="text-xs px-3 py-1 rounded-full bg-white/5">Hardware</span>
<span className="text-xs px-3 py-1 rounded-full bg-white/5">Engineering</span>
</div>
</div>
<div className="tilt-card glass p-8 rounded-3xl h-[400px] flex flex-col transition-all duration-300 transform-style-3d hover:border-white/20">
<div className="mb-auto transform translate-z-10" style={{transform: 'translateZ(30px)'}}>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-3">Helmholtz Magnetic Field Generator</h3>
<p className="text-sm opacity-70 leading-relaxed">Confidential development utilizing Helmholtz coil configurations for uniform magnetic field generation. Further details available upon request.</p>
</div>
<div className="flex flex-wrap gap-2 mt-6 transform translate-z-10" style={{transform: 'translateZ(20px)'}}>
<span className="text-xs px-3 py-1 rounded-full bg-white/5">Helmholtz Coils</span>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6" id="research">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-20 text-center">
<h2 className="text-4xl md:text-6xl tracking-tight font-semibold mb-4">Research &amp; Analysis</h2>
<p className="text-lg opacity-70">Advancing biomedical paradigms.</p>
</div>
<div className="space-y-32">
<div className="reveal relative flex flex-col md:flex-row items-start gap-12">
<div className="md:sticky top-32 md:w-1/2 glass rounded-3xl p-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<div className="flex items-center gap-4 w-full justify-center">
<div className="px-4 py-2 rounded-xl glass text-xs font-semibold">3D Spheroid Modeling</div>
<div className="h-px w-8 bg-white/20"></div>
<div className="px-4 py-2 rounded-xl glass text-xs font-semibold">ALP Activation</div>
</div>
<div className="h-8 w-px bg-white/20"></div>
<div className="px-4 py-2 rounded-xl glass border border-[#3A6FF7]/30 text-xs font-semibold shadow-[0_0_15px_rgba(58,111,247,0.3)]">Targeted Liver Cancer Therapy</div>
</div>
</div>
<div className="md:w-1/2 flex flex-col justify-center pt-8 md:pt-24">
<span className="text-[#3A6FF7] text-sm font-semibold tracking-wide uppercase mb-4">Biomedical Engineering — Habibi Lab</span>
<h3 className="text-3xl tracking-tight font-semibold mb-6">Modeling Fluidic Peptide Delivery in Hep3B Liver Cancer Cells</h3>
<p className="text-base opacity-70 leading-relaxed mb-8">
                Investigating ALP-activated peptides for targeted liver cancer therapy. This methodology leverages 3D spheroids and magnetic nanoparticle dispersion to closely simulate in-vivo environments, advancing the precision of therapeutic delivery.
              </p>
<div className="grid grid-cols-2 gap-6">
<div>
<h4 className="text-sm font-semibold mb-2">Methodology</h4>
<p className="text-xs opacity-70">3D Spheroid modeling with ALP activation tracking.</p>
</div>
<div>
<h4 className="text-sm font-semibold mb-2">Application</h4>
<p className="text-xs opacity-70">Hep3B cell targeted therapy evaluation.</p>
</div>
</div>
</div>
</div>
<div className="reveal relative flex flex-col md:flex-row-reverse items-start gap-12">
<div className="md:sticky top-32 md:w-1/2 glass rounded-3xl p-8 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<iconify-icon className="text-5xl text-[#3A6FF7] mb-4" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-full h-32 flex items-end justify-center gap-2">
<div className="w-6 bg-white/20 rounded-t-sm h-[40%]"></div>
<div className="w-6 bg-white/20 rounded-t-sm h-[60%]"></div>
<div className="w-6 bg-white/40 rounded-t-sm h-[80%]"></div>
<div className="w-6 bg-[#3A6FF7] rounded-t-sm h-[100%]"></div>
</div>
<div className="text-xs opacity-70 mt-4">Bibliometric Synthesis (RStudio)</div>
</div>
</div>
<div className="md:w-1/2 flex flex-col justify-center pt-8 md:pt-24">
<span className="text-[#3A6FF7] text-sm font-semibold tracking-wide uppercase mb-4">Neuroscience — ThinkNeuro</span>
<h3 className="text-3xl tracking-tight font-semibold mb-6">mGluR5 Modulation to Improve Cognitive Function in Schizophrenia</h3>
<p className="text-base opacity-70 leading-relaxed mb-8">
                Conducted an extensive team bibliometric analysis in neuropharmacology utilizing RStudio. This study synthesizes vast amounts of data to identify trends and validate mGluR5 as a viable target for cognitive symptom management.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6" id="impact">
<div className="max-w-7xl mx-auto">
<div className="glass rounded-3xl p-12 md:p-24 text-center reveal">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold mb-6">Creating Meaningful Change</h2>
<p className="text-base opacity-70 max-w-2xl mx-auto mb-16">
            Beyond engineering and research, I am deeply committed to community impact through technical leadership, fundraising, and health education.
          </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
<div>
<div className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-[#3A6FF7] flex items-center justify-center">
                $<span className="counter" data-target="3750">0</span>+
              </div>
<div className="text-sm font-medium opacity-70">Funds Raised for Housing</div>
</div>
<div>
<div className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-[#3A6FF7] flex items-center justify-center">
<span className="counter" data-target="162">0</span>
</div>
<div className="text-sm font-medium opacity-70">Miles Ran for Charity</div>
</div>
<div>
<div className="text-5xl md:text-7xl font-semibold tracking-tighter mb-2 text-[#3A6FF7] flex items-center justify-center">
<span className="counter" data-target="4">0</span>
</div>
<div className="text-sm font-medium opacity-70">Nonprofits Supported</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
<div className="p-6 glass rounded-2xl">
<h4 className="text-sm font-semibold mb-2">Project Pulmonary</h4>
<p className="text-xs opacity-70">Providing essential pulmonary rehab and education specifically tailored for firefighters.</p>
</div>
<div className="p-6 glass rounded-2xl">
<h4 className="text-sm font-semibold mb-2">Texas MedSearch</h4>
<p className="text-xs opacity-70">Initiative facilitating broader student access to critical medical research and resources.</p>
</div>
<div className="p-6 glass rounded-2xl">
<h4 className="text-sm font-semibold mb-2">Service Leadership</h4>
<p className="text-xs opacity-70">Orchestrated major fundraisers to support underprivileged student housing initiatives.</p>
</div>
<div className="p-6 glass rounded-2xl">
<h4 className="text-sm font-semibold mb-2">Digital Infrastructure</h4>
<p className="text-xs opacity-70">Developed comprehensive web platforms to support Project Pulmonary's outreach.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 overflow-hidden" id="photography">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 reveal">
<div>
<h2 className="text-4xl md:text-6xl tracking-tight font-semibold mb-4">Photography</h2>
<p className="text-lg opacity-70">Capturing perspectives through the lens.</p>
</div>
<a className="text-sm font-semibold px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors flex items-center gap-2" href="https://www.thewordsfaire.com/search?q=nora%20naveen" target="_blank">
          View Full Collection
          <iconify-icon icon="solar:external-link-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="relative w-full pb-16 reveal">
<div className="marquee-container gap-6 px-6" id="photo-gallery">
<div className="w-80 h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden shrink-0 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
<iconify-icon className="text-4xl opacity-20" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-80 h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden shrink-0 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent"></div>
<iconify-icon className="text-4xl opacity-20" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-80 h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden shrink-0 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-800/40 to-transparent"></div>
<iconify-icon className="text-4xl opacity-20" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-80 h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden shrink-0 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent"></div>
<iconify-icon className="text-4xl opacity-20" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-80 h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden shrink-0 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent"></div>
<iconify-icon className="text-4xl opacity-20" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="glass rounded-3xl p-12 text-center border-dashed border-2 border-white/20 transition-all hover:border-[#3A6FF7]/50 hover:bg-[#3A6FF7]/5 cursor-pointer relative" id="dropzone">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" id="fileInput" multiple="" type="file"/>
<div className="relative z-10 pointer-events-none">
<iconify-icon className="text-5xl mb-4 text-[#3A6FF7]" icon="solar:cloud-upload-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl tracking-tight font-semibold mb-2">Drag &amp; Drop Images</h3>
<p className="text-sm opacity-70">Upload directly to preview in gallery (simulate GitHub commit).</p>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 bg-black/20" id="academics">
<div className="max-w-4xl mx-auto reveal">
<h2 className="text-4xl md:text-6xl tracking-tight font-semibold mb-16 text-center">Academics</h2>
<div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
<div className="relative pl-8 md:pl-0 md:flex md:gap-12 md:items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#3A6FF7] ring-4 ring-[#0B1A33] group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-12 md:pt-0 pt-2 text-sm opacity-70 font-medium tracking-wide">
              Current
            </div>
<div className="md:w-1/2 md:pl-12 pt-1 md:pt-0">
<h3 className="text-xl tracking-tight font-semibold mb-2">Texas Academy of Mathematics and Science</h3>
<p className="text-sm opacity-70">Junior. Concentrating in advanced biomedical engineering and foundational neuropharmacology methodologies.</p>
</div>
</div>
<div className="relative pl-8 md:pl-0 md:flex md:gap-12 md:items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-white/30 ring-4 ring-[#0B1A33] group-hover:bg-white transition-colors"></div>
<div className="md:w-1/2 md:text-right md:pr-12 md:pt-0 pt-2 text-sm opacity-70 font-medium tracking-wide">
              Recent Honors
            </div>
<div className="md:w-1/2 md:pl-12 pt-1 md:pt-0">
<h3 className="text-xl tracking-tight font-semibold mb-2">Competitions &amp; Conferences</h3>
<ul className="text-sm opacity-70 space-y-2 mt-3">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Lead Presenter at Undergraduate Research Conference</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Excellence in Bibliometric Data Synthesis</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Advanced Hardware Prototyping Finalist</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 px-6" id="contact">
<div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-16 reveal">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl tracking-tight font-semibold mb-4">Let's Connect</h2>
<p className="text-sm opacity-70 mb-8 leading-relaxed">
              Feel free to reach out for collaborations, questions, or to request my resume. I'm always open to discussing engineering, research, and new opportunities.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault()">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3A6FF7]/50 transition-colors placeholder:text-white/30 light-theme:text-black light-theme:placeholder:text-black/40" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3A6FF7]/50 transition-colors placeholder:text-white/30 light-theme:text-black light-theme:placeholder:text-black/40" placeholder="Email" type="email"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3A6FF7]/50 transition-colors placeholder:text-white/30 light-theme:text-black light-theme:placeholder:text-black/40" placeholder="Organization (Optional)" type="text"/>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#3A6FF7]/50 transition-colors placeholder:text-white/30 resize-none light-theme:text-black light-theme:placeholder:text-black/40" placeholder="Message" rows="4"></textarea>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="flex-1 bg-white text-[#0B1A33] px-6 py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity light-theme:bg-[#0B1A33] light-theme:text-white">
                Send Message
              </button>
<button className="flex-1 glass px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors">
                Request Resume
              </button>
</div>
</form>
</div>
</div>
</section>
</main>
<footer className="py-8 border-t border-white/10 text-center relative z-10 glass rounded-t-[3rem]">
<div className="text-xl tracking-tighter font-semibold mb-2">NN</div>
<div className="text-xs opacity-50 mb-4">Built to create.</div>
<div className="text-xs opacity-30">© <span id="year"></span> Nora Naveen. All rights reserved.</div>
</footer>


    </>
  );
}
