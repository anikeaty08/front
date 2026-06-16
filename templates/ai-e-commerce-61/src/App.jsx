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
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#202023',
}
},
animation: {
float: 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", function() {
  
  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check Local Storage or System Preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  themeToggleBtn.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  });

  // Reveal Animation Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('will-reveal');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-up').forEach(el => {
    el.classList.add('will-reveal');
    observer.observe(el);
  });

  // Mockup Interactive Logic
  const mainImage = document.getElementById('preview-image');
  const loadingOverlay = document.getElementById('loading-overlay');
  
  // Data for image switching
  const imageDB = {
    'casual': {
      'front': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
      'side': 'https://images.unsplash.com/photo-1529139574466-a302c27524ed?q=80&w=1000&auto=format&fit=crop',
      'walking': 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop'
    },
    'formal': {
      'front': 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop',
      'side': 'https://images.unsplash.com/photo-1605900009774-7264f3d2f93d?q=80&w=1000&auto=format&fit=crop',
      'walking': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop'
    }
  };

  let currentStyle = 'casual';
  let currentPose = 'front';

  function updateImage() {
    loadingOverlay.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      mainImage.src = imageDB[currentStyle][currentPose];
      loadingOverlay.classList.add('opacity-0', 'pointer-events-none');
    }, 600);
  }

  // Handle Style Buttons
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Reset styles
      document.querySelectorAll('.style-btn').forEach(b => {
        b.classList.remove('border-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-500/10', 'text-indigo-600', 'dark:text-indigo-400');
        b.classList.add('border-zinc-200', 'dark:border-zinc-700', 'text-zinc-600', 'dark:text-zinc-400');
      });
      // Set active
      btn.classList.remove('border-zinc-200', 'dark:border-zinc-700', 'text-zinc-600', 'dark:text-zinc-400');
      btn.classList.add('border-indigo-500', 'bg-indigo-50', 'dark:bg-indigo-500/10', 'text-indigo-600', 'dark:text-indigo-400');
      
      currentStyle = btn.dataset.style;
      updateImage();
    });
  });

  // Handle Pose Buttons
  document.querySelectorAll('.pose-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pose-btn').forEach(b => {
        b.classList.remove('border-2', 'border-indigo-500', 'opacity-100');
        b.classList.add('border', 'border-zinc-200', 'dark:border-zinc-700', 'opacity-70');
      });
      btn.classList.remove('border', 'border-zinc-200', 'dark:border-zinc-700', 'opacity-70');
      btn.classList.add('border-2', 'border-indigo-500', 'opacity-100');
      
      currentPose = btn.dataset.pose;
      updateImage();
    });
  });

  // 3D Tilt Effect
  const tiltCard = document.querySelector('.tilt-container');
  if(tiltCard) {
    document.addEventListener('mousemove', (e) => {
      if(window.innerWidth < 768) return; 
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / 60;
      const y = (clientY - innerHeight / 2) / 60;
      tiltCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
  }
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
<span className="iconify" data-icon="lucide:aperture" data-width="20"></span>
</div>
<span className="font-semibold tracking-tight text-lg">Synthetix</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#product">Product</a>
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-white transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">

<button className="p-2 rounded-full text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none" id="theme-toggle">
<span className="iconify dark:hidden" data-icon="lucide:sun" data-width="20"></span>
<span className="iconify hidden dark:block" data-icon="lucide:moon" data-width="20"></span>
</button>
<div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 hidden sm:block"></div>
<button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-5 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-all shadow-xl shadow-zinc-500/10 dark:shadow-none transform hover:-translate-y-0.5">
          Get Started
        </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none -z-10 dark:bg-indigo-600/10 transition-colors duration-500"></div>
<div className="absolute inset-0 bg-grid opacity-[0.15] -z-10 mask-radial"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 reveal-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-[11px] font-semibold uppercase tracking-wider mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
          Generative Commerce 2.0
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 leading-[1.1] text-zinc-900 dark:text-white">
          Studio photography <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">without the studio</span>
</h1>
<p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Upload a flat lay. Synthetix instantly generates photorealistic models wearing your products. Infinite diversity, zero logistics.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-sm font-medium transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-1 flex items-center justify-center gap-2">
            Start Generating Free
            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-500 transition-all bg-white dark:bg-zinc-900 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
            See How It Works
          </button>
</div>
</div>

<div className="relative w-full max-w-6xl mx-auto perspective-[2000px] group reveal-up z-20" style={{perspective: '2000px'}}>
<div className="tilt-container tilt-card relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl overflow-hidden aspect-[16/10] md:aspect-[21/10] transition-colors duration-500">

<div className="h-12 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 bg-zinc-50/50 dark:bg-zinc-900/90 transition-colors">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="hidden md:flex bg-zinc-200 dark:bg-zinc-800 rounded-md px-3 py-1.5 text-[10px] text-zinc-500 font-mono items-center gap-2 w-64 justify-center transition-colors">
<span className="iconify" data-icon="lucide:lock" data-width="10"></span>
              synthetix.ai/studio/editor
            </div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
<span className="iconify text-indigo-600 dark:text-indigo-400" data-icon="lucide:user" data-width="12"></span>
</div>
</div>
</div>

<div className="flex h-[calc(100%-48px)]">

<div className="w-16 md:w-20 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col items-center py-6 gap-6 transition-colors">
<button className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:image-plus" data-width="20"></span>
</button>
<button className="w-10 h-10 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 flex items-center justify-center transition-colors">
<span className="iconify" data-icon="lucide:palette" data-width="20"></span>
</button>
<button className="w-10 h-10 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 flex items-center justify-center transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</button>
<button className="w-10 h-10 rounded-xl text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 flex items-center justify-center transition-colors mt-auto">
<span className="iconify" data-icon="lucide:settings" data-width="20"></span>
</button>
</div>

<div className="flex-1 bg-zinc-100/50 dark:bg-black/50 relative overflow-hidden flex items-center justify-center p-4 md:p-8 transition-colors">
<div className="absolute inset-0 bg-grid opacity-50 dark:opacity-20 pointer-events-none"></div>
<div className="relative h-full w-auto aspect-[4/5] md:aspect-[3/4] rounded-lg shadow-xl overflow-hidden group/canvas bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors">

<div className="absolute inset-0 bg-white/90 dark:bg-zinc-950/80 z-20 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-sm" id="loading-overlay">
<span className="iconify text-indigo-500 animate-spin mb-3" data-icon="lucide:loader-2" data-width="32"></span>
<span className="text-xs text-zinc-500 font-medium">Processing Pixels...</span>
</div>

<img alt="Model" className="h-full w-full object-cover transition-transform duration-700 group-hover/canvas:scale-105" id="preview-image" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 flex gap-2">
<div className="px-2 py-1 bg-white/90 dark:bg-black/60 backdrop-blur rounded text-[10px] font-semibold text-zinc-800 dark:text-white border border-zinc-200 dark:border-white/10 shadow-sm">
                     HQ Render
                   </div>
</div>
<div className="absolute bottom-4 right-4">
<button className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:maximize-2" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="w-64 border-l border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 flex flex-col gap-6 transition-colors overflow-y-auto hidden md:flex">
<div>
<h3 className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">Configuration</h3>
<div className="space-y-4">
<div>
<label className="text-[11px] text-zinc-500 font-medium mb-2 block">Model Style</label>
<div className="grid grid-cols-2 gap-2">
<button className="style-btn active px-3 py-2 rounded-lg border border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium text-center transition-all" data-style={{}}>
                        Casual
                      </button>
<button className="style-btn px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium text-center transition-all" data-style={{}}>
                        Formal
                      </button>
</div>
</div>
<div>
<label className="text-[11px] text-zinc-500 font-medium mb-2 block">Pose Reference</label>
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="pose-btn flex-none w-14 h-20 rounded border-2 border-indigo-500 overflow-hidden relative" data-pose="front">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200"/>
</button>
<button className="pose-btn flex-none w-14 h-20 rounded border border-zinc-200 dark:border-zinc-700 overflow-hidden relative opacity-70 hover:opacity-100" data-pose="side">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1529139574466-a302c27524ed?w=200"/>
</button>
<button className="pose-btn flex-none w-14 h-20 rounded border border-zinc-200 dark:border-zinc-700 overflow-hidden relative opacity-70 hover:opacity-100" data-pose="walking">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200"/>
</button>
</div>
</div>
<div>
<label className="text-[11px] text-zinc-500 font-medium mb-2 block">Background</label>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-white border border-zinc-300 cursor-pointer ring-2 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-200 cursor-pointer"></div>
<div className="w-6 h-6 rounded-full bg-zinc-800 cursor-pointer"></div>
<button className="w-6 h-6 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center text-zinc-400">
<span className="iconify" data-icon="lucide:plus" data-width="12"></span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-3 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                  Export Assets
                </button>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 md:-right-12 top-1/4 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-3 rounded-xl shadow-xl animate-float transition-colors hidden sm:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<div>
<p className="text-xs font-bold text-zinc-900 dark:text-white">Auto-Retouch</p>
<p className="text-[10px] text-zinc-500">Lighting adjusted</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800 transition-colors" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">Everything you need to scale</h2>
<p className="text-zinc-500">Powerful features designed for modern e-commerce teams.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm">
<div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-indigo-600 dark:text-indigo-400" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Instant Rendering</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
            Generate thousands of SKUs in minutes. Our GPU clusters handle the heavy lifting so you can focus on creativity.
          </p>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm">
<div className="w-12 h-12 bg-purple-50 dark:bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-purple-600 dark:text-purple-400" data-icon="lucide:shirt" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Smart Drape</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
            Proprietary cloth simulation ensures fabrics fall naturally on any body type, preserving texture and weight.
          </p>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-pink-500/50 dark:hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm">
<div className="w-12 h-12 bg-pink-50 dark:bg-pink-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-pink-600 dark:text-pink-400" data-icon="lucide:globe" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">Global Diversity</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
            Create inclusive campaigns with models representing every ethnicity, age, and size with a single click.
          </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden transition-colors">
<div className="max-w-4xl mx-auto text-center px-6 relative z-10 reveal-up">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-zinc-900 dark:text-white">Ready to transform your workflow?</h2>
<p className="text-lg text-zinc-500 mb-10 max-w-xl mx-auto">Join forward-thinking brands using Synthetix to create stunning product imagery faster than ever.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-xl">
          Get Started Now
          <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors">
          View Pricing
        </button>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black py-16 transition-colors">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12">

<div className="flex flex-col justify-between">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-indigo-600 text-white flex items-center justify-center">
<span className="iconify" data-icon="lucide:aperture" data-width="14"></span>
</div>
<span className="font-semibold tracking-tight text-zinc-900 dark:text-white">Synthetix</span>
</div>
<p className="text-sm text-zinc-500 mt-auto">© 2024 Synthetix Inc.</p>
</div>

<div className="flex gap-20">
<div>
<h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">Product</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">Generator</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">Style Transfer</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">API Access</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
