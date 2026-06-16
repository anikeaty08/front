import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // ParticlesJS config
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 55, "density": { "enable": true, "value_area": 900 } },
        "color": { "value": ["#1890ff","#10d5ff","#1e2f4c"] },
        "shape": {
          "type": "circle",
          "stroke": {"width":0,"color":"#fff"},
        },
        "opacity": {
          "value": 0.14,
          "random": true,
          "anim": { "enable": true, "speed": 0.7, "opacity_min": 0.06, "sync": false }
        },
        "size": {
          "value": 9,
          "random": true,
          "anim": { "enable": true, "speed": 2.5, "size_min": 2, "sync": false }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#1890ff",
          "opacity": 0.08,
          "width": 1.2
        },
        "move": {
          "enable": true,
          "speed": 0.7,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "attract": {"enable":false,"rotateX":600,"rotateY":1200}
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {"enable":true,"mode":"repulse"},
          "onclick": {"enable":true,"mode":"push"},
          "resize":true
        },
        "modes": {
          "repulse": {"distance":80,"duration":0.3},
          "push": {"particles_nb":4}
        }
      },
      "retina_detect": true
    });

    // Lucide icons
    window.lucide && lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="particles-js"></div>

<main className="relative z-10 w-full flex flex-col items-center pt-24 pb-16 px-4">
<div className="flex flex-col items-center max-w-2xl mx-auto text-center">
<h1 className="fade-in fade-in-1 font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl mb-3" style={{fontFamily: '\'Roboto\'', fontWeight: '600', letterSpacing: '-.025em'}}>
        See Arcanite in action
      </h1>
<p className="fade-in fade-in-2 text-lg md:text-xl mb-7 text-blue-300 font-normal" style={{fontFamily: '\'Roboto\''}}>
        Powerful tools to streamline your operations
      </p>
</div>
<div className="fade-in fade-in-3 w-full flex flex-col items-center">
<div className="flex flex-wrap justify-center gap-4 mb-8 features-row">
<span className="tag glass">Arcanite Agent</span>
<span className="tag glass" style={{background: 'linear-gradient(90deg,#1890ff33 0%,#10d5ff33 100%)'}}>Arcanite Connect</span>
<span className="tag glass">DragonVR</span>
<span className="tag glass">Arcanite Marketplace</span>
<span className="tag glass">Arcanite AI</span>
</div>
<div className="divider"></div>
</div>

<section className="hero-content fade-in fade-in-4 flex flex-row items-start gap-12 w-full max-w-5xl">

<div className="card glass rounded-2xl p-0 shadow-xl max-w-2xl w-full min-w-[320px] flex-1 flex flex-col" style={{overflow: 'hidden'}}>
<div style={{borderRadius: '18px 18px 0 0', overflow: 'hidden'}}>
<img alt="App Demo" className="w-full object-cover aspect-video min-h-[220px] fade-in fade-in-5" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=900&amp;q=80" style={{display: 'block', borderRadius: '18px 18px 0 0'}}/>
</div>
<div className="flex flex-col gap-2 p-6">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-white">Demo: Project Sales Dashboard</span>
</div>
<p className="text-blue-100 text-sm font-normal mb-2" style={{fontFamily: '\'Roboto\''}}>
            Experience a unified suite for project sales, analytics &amp; workflow automation.
          </p>
</div>
</div>

<div className="flex flex-col gap-4 flex-1 min-w-[250px]">

<div className="flex items-center gap-3 fade-in fade-in-2 group cursor-pointer hover:bg-[#0e2e4e]/40 transition rounded-xl px-4 py-3" style={{border: '1px solid #213c55', boxShadow: '0 2px 12px 0 #0e274c19'}}>
<svg className="gradient-check" fill="none" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gradient-check" x1="0" x2="24" y1="0" y2="24">
<stop stop-color="#1890ff"></stop>
<stop offset="1" stop-color="#0edfff"></stop>
</lineargradient>
</defs>
<path d="M5 13l4 4L19 7" strokeWidth="2"></path>
</svg>
<span className="text-white text-base font-normal group-hover:text-blue-300 transition">End-to-End Project Sales Management</span>
</div>
<div className="flex items-center gap-3 fade-in fade-in-3 group cursor-pointer hover:bg-[#0e2e4e]/40 transition rounded-xl px-4 py-3" style={{border: '1px solid #213c55'}}>
<svg className="gradient-check" fill="none" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24">
<use href="#check"></use>
<path d="M5 13l4 4L19 7" strokeWidth="2"></path>
</svg>
<span className="text-white text-base font-normal group-hover:text-blue-300 transition">Real-time Sales Analytics</span>
</div>
<div className="flex items-center gap-3 fade-in fade-in-4 group cursor-pointer hover:bg-[#0e2e4e]/40 transition rounded-xl px-4 py-3" style={{border: '1px solid #213c55'}}>
<svg className="gradient-check" fill="none" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24">
<use href="#check"></use>
<path d="M5 13l4 4L19 7" strokeWidth="2"></path>
</svg>
<span className="text-white text-base font-normal group-hover:text-blue-300 transition">Integrated Platform</span>
</div>
<div className="flex items-center gap-3 fade-in fade-in-5 group cursor-pointer hover:bg-[#0e2e4e]/40 transition rounded-xl px-4 py-3" style={{border: '1px solid #213c55'}}>
<svg className="gradient-check" fill="none" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24">
<use href="#check"></use>
<path d="M5 13l4 4L19 7" strokeWidth="2"></path>
</svg>
<span className="text-white text-base font-normal group-hover:text-blue-300 transition">Streamlined Sales Workflows</span>
</div>
<div className="flex items-center gap-3 fade-in fade-in-5 group cursor-pointer hover:bg-[#0e2e4e]/40 transition rounded-xl px-4 py-3" style={{border: '1px solid #213c55'}}>
<svg className="gradient-check" fill="none" height="24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24">
<use href="#check"></use>
<path d="M5 13l4 4L19 7" strokeWidth="2"></path>
</svg>
<span className="text-white text-base font-normal group-hover:text-blue-300 transition">Intuitive Interface</span>
</div>
</div>
</section>
</main>


    </>
  );
}
