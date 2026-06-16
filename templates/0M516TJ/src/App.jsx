import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize Vanta waves background
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof VANTA !== 'undefined' && VANTA.WAVES) {
        VANTA.WAVES({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9ca3af,       // Darker gray-400 instead of gray-300
          shininess: 30.00,
          waveHeight: 3.00,      // Lower for more subtle waves
          waveWidth: 200.00,     // Higher for even finer waves
          waveSpeed: 0.75,
          zoom: 0.75,
          backgroundColor: 0xe5e7eb, // Darker gray-200 instead of slate-50
          waveShadow: 0x4b5563,      // Darker gray-600 instead of gray-500
        });
      }
      
      // Initialize Lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    // Add hover effects for interactive elements
    document.querySelectorAll('.group').forEach(element => {
      element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0" id="vanta-bg"><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '720px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1440" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1500px', height: '720px'}} width="3000"></canvas></div>

<div className="relative z-10 flex-1 flex flex-col bg-slate-50/40" style={{}}>

<nav className="border-b-8 border-black bg-white/90">
<div className="container mr-auto ml-auto pt-3 pr-4 pb-3 pl-4">
<div className="flex items-center justify-between">
<div className="uppercase text-[10px] font-semibold">To be named</div>
<div className="flex gap-4">
<a className="uppercase hover:underline hover:bg-black transition-colors text-[10px] pt-1 pr-2 pb-1 pl-2 hover:text-[#FF0000]" href="#apply">APPLY</a>
<a className="text-[10px] uppercase hover:underline hover:bg-black px-2 py-1 transition-colors hover:text-[#FF0000]" href="#spaces">SPACES</a>
<a className="text-[10px] uppercase hover:underline hover:bg-black px-2 py-1 transition-colors hover:text-[#FF0000]" href="#community">COMMUNITY</a>
</div>
</div>
</div>
</nav>

<section className="container bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white/50">
<div className="md:col-span-7 bg-white/75">
<h1 className="md:text-5xl uppercase leading-none text-3xl font-semibold tracking-tight mb-3">TO BE NAMED<br/></h1>
<div className="w-full h-1 bg-black mb-4"></div>
<p className="text-base mb-3" style={{lineHeight: '1.6'}}>
            WHERE BUILDERS, CREATORS &amp; INNOVATORS CONVERGE. 56,000 SQ FT OF POSSIBILITY IN SINGAPORE'S CBD.
          </p>
<p className="text-xs mb-4" style={{lineHeight: '1.6'}}>
            WE'RE TRANSFORMING A 1970S BRUTALIST TOWER INTO SINGAPORE'S MOST VIBRANT CREATIVE INNOVATION HUB. NOT JUST ANOTHER COWORKING SPACE — BUT A LIVING ECOSYSTEM WHERE AI PIONEERS WORK ALONGSIDE ARTISTS, WHERE VCS MENTOR BOOTSTRAPPED FOUNDERS.
          </p>
<a className="inline-block uppercase hover:bg-gray-800 transition-colors text-base font-semibold text-white bg-black border-black border-4 pt-2 pr-5 pb-2 pl-5" href="#apply" style={{}}>
            JOIN 350+ MEMBERS
          </a>
</div>
<div className="md:col-span-5 bg-white/50">
<div className="aspect-square relative border-gray-700 border-8 py-0" style={{}}>
<div className="absolute inset-0 flex items-center justify-center">
<img alt="Space placeholder" className="w-full h-full object-cover rounded-none" src="https://images.unsplash.com/photo-1573639644331-1e5e77310704?w=800&amp;q=80" style={{display: 'block'}}/>
</div>
<div className="absolute top-0 right-0 text-[10px] uppercase text-white bg-black pt-1 pr-3 pb-1 pl-3">SQ COLLECTIVE X STUDIO KINETIK</div>
</div>
</div>
</div>
</section>

<section className="container bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight mb-4">WHO WE'RE BUILDING FOR</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">

<div className="space-y-0">
<div className="border-8 border-black p-4 bg-white/90">
<div className="flex gap-3 mb-2 items-start">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold">🚀</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight">TECH BUILDERS</h3>
</div>
<p className="leading-relaxed text-xs">
              Pre-seed to Series A founders building the future of AI, fintech, and digital infrastructure. Join a community that understands the journey from zero to one.
            </p>
</div>
<div className="border-8 border-black border-t-0 p-4 bg-white/90">
<div className="flex items-start gap-3 mb-2">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold">🎨</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight">CREATIVE TECHNOLOGISTS</h3>
</div>
<p className="leading-relaxed text-xs">
              Artists, designers, and makers who see technology as a medium. Access workshops, equipment, and collaborators who speak both code and creativity.
            </p>
</div>
<div className="bg-white/90 border-black border-8 border-t-0 pt-4 pr-4 pb-10 pl-4">
<div className="flex items-start gap-3 mb-2">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold">🛠</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight">COMMUNITY ACTIVATORS</h3>
</div>
<p className="text-xs leading-relaxed">
              Event organizers, educators, and connectors who bring people together. Help us create 200+ moments of serendipity annually.
            </p>
</div>
</div>

<div className="space-y-0">
<div className="md:border-l-8 bg-white/90 border-black border-8 border-l-0 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-start gap-3 mb-2">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold">💼</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight">INNOVATION TEAMS</h3>
</div>
<p className="leading-relaxed text-xs">
              Forward-thinking companies and VCs who value ecosystem over isolation. Position your team at the nexus of Singapore's creative economy.
            </p>
</div>
<div className="md:border-l-8 bg-gray-100/90 border-black border-8 border-t-0 border-l-0 pt-4 pr-4 pb-20 pl-4" style={{}}>
<div className="flex items-start gap-3 mb-2">
<div className="w-6 h-6 flex text-xs font-bold text-white items-center justify-center">🏢</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight">CORPORATE INNOVATION HUBS</h3>
</div>
<p className="leading-relaxed text-xs mb-2">
              Keep your main headquarters while establishing a satellite innovation office where your teams can cross-pollinate with Singapore's most dynamic builders and creators. Unlike sterile AI centers of excellence, Shenton House offers authentic collision points where fintech meets fine art, where enterprise software teams learn from bootstrapped founders, and where your corporate innovation actually innovates.
            </p>
</div>
</div>
</div>
</section>

<section className="container bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" id="spaces" style={{opacity: '1', transform: 'translateY(0px)'}}>
<h2 className="md:text-3xl uppercase -translate-y-1 text-2xl font-semibold tracking-tight mt-4 mb-4">SPACE OPTIONS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="-translate-y-3 bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 translate-x-1 translate-y-1 scale-105 space-x-0">
<h3 className="uppercase text-base font-semibold mb-2">PRIVATE OFFICES</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="space-y-1 text-xs">
<div className="">From $4.0psf</div>
</div>
</div>
<div className="-translate-y-4 -translate-y-6 -translate-y-3 -translate-x-1 bg-white/90 border-black border-8 pt-4 pb-9 pl-4 translate-x-3 translate-y-1 scale-105">
<h3 className="uppercase -translate-y-1 text-base font-semibold mb-2 pr-4 pl-4 scale-105">FLEXIBLE WORKSPACES</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs space-y-1">
<div className="">HOT DESK (80 AVAILABLE): <span className="font-semibold">$250/MONTH</span></div>
<div className="">DEDICATED DESK: <span className="font-semibold">$400/MONTH</span></div>
</div>
</div>
<div className="-translate-y-4 -translate-y-6 -translate-y-1 -translate-y-3 bg-gray-100/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 translate-x-1 scale-105" style={{}}>
<h3 className="text-base font-semibold uppercase mb-2">CREATIVE PROGRAM</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs space-y-1">
<div className="">ARTIST RESIDENCY: <span className="font-semibold">FROM $300/MONTH</span></div>
<div className="">BUILDER FELLOWSHIP: <span className="font-semibold">FROM $150/MON</span></div>
<div className="">CREATIVE LABS: <span className="font-semibold">FROM $600/MONTH</span></div>
<div className="uppercase text-[10px] text-xs font-normal mt-2">Selection Criteria: Portfolio quality, community contribution plan, clear growth pathway</div>
<div className="inline-block uppercase hover:bg-gray-800 transition-colors text-base font-semibold text-white bg-black border-black border-4 mt-2 pt-1 pr-4 pb-1 pl-4" style={{}}>Apply</div><div className="uppercase text-[10px] italic mt-10 py-2">*HEAVILY SUBSIDIZED THROUGH ENTERPRISE CROSS-FUNDING</div>
</div>
</div><div className="-translate-x-1 -translate-y-6 bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 translate-x-3 scale-105 items-start">
<h3 className="uppercase text-base font-semibold mb-2">ENTERPRISE SUITES</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="space-y-1 text-xs">
<div className="font-semibold">From $6.0psf</div>
<div className="pt-2 pb-2 space-y-0"><span className="italic">2-year commitments receive preferred rates</span></div>
</div>
</div>
</div>
</section>

<section className="container bg-white/80 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" id="community" style={{opacity: '0', transform: 'translateY(20px)'}}>
<h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight mb-4">COMMUNITY MODEL</h2>
<div className="bg-white/90 border-black border-8 mt-8 pt-4 pr-4 pb-4 pl-4">
<h3 className="uppercase text-lg font-semibold mb-3">CROSS-SUBSIDIZATION MODEL</h3>
<div className="w-1/4 h-1 bg-black mb-3"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
<div className="">
<div className="mb-2">ENTERPRISE ANCHORS FUND CREATIVE SUBSIDIES. BUILDERS AND CREATIVES PROVIDE INSPIRATION &amp; COMMUNITY SERVICE.</div>
<div className="mb-2">BUILDER FELLOWSHIP CONTRIBUTIONS (300+ HOURS/MONTH) REDUCE OPERATIONAL COSTS</div>
</div>
<div className="">
<div className="mb-2">EVENT SPACE REVENUE SUPPORTS COMMUNITY PROGRAMMING</div>
<div className="mb-2">CURATED MIX ENSURES FINANCIAL SUSTAINABILITY WHILE MAXIMIZING SOCIAL IMPACT</div>
</div>
</div>
</div>
</section>

<section className="container bg-white/80 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" style={{opacity: '0', transform: 'translateY(20px)'}}>
<h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight mb-4">PROGRAMS</h2>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="group hover:bg-black transition-colors hover:text-white bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4" style={{transform: 'translateY(0px)'}}>
<h3 className="uppercase text-base font-semibold mb-2">WEEKLY</h3>
<div className="w-1/2 h-1 bg-black group-hover:bg-white mb-2"></div>
<div className="space-y-1 text-xs">
<div className="">DEMO FRIDAYS</div>
<div className="">FOUNDER COFFEE</div>
<div className="">OPEN STUDIO HOURS</div>
<div className="">INVESTOR OFFICE HOURS</div>
</div>
</div>
<div className="border-8 border-black p-4 group hover:bg-black transition-colors bg-white/90 hover:text-[#FF0000]" style={{transform: 'translateY(0px)'}}>
<h3 className="text-base font-semibold uppercase mb-2">MONTHLY</h3>
<div className="w-1/2 h-1 bg-black group-hover:bg-white mb-2"></div>
<div className="text-xs space-y-1">
<div className="">ART+TECH EXHIBITIONS</div>
<div className="">COMMUNITY SHOWCASE</div>
<div className="">CROSS-POLLINATION DINNERS</div>
<div className="">SKILLS WORKSHOPS</div>
</div>
</div>
<div className="group hover:bg-black transition-colors hover:text-[#FF0000] bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4" style={{transform: 'translateY(0px)'}}>
<h3 className="text-base font-semibold uppercase mb-2 group-hover:text-white">QUARTERLY</h3>
<div className="w-1/2 h-1 bg-black group-hover:bg-white mb-2"></div>
<div className="space-y-1 text-xs">
<div className="group-hover:text-white">STARTUP DEMO DAY</div>
<div className="group-hover:text-white">CREATIVE FESTIVAL</div>
<div className="group-hover:text-white">HACKATHONS &amp; BUILD WEEKENDS</div>
</div>
</div>
</div>
</section>

<section className="container bg-white/80 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" style={{opacity: '0', transform: 'translateY(20px)'}}>
<h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-4">MEMBER BENEFITS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">
<div className="border-8 border-black p-4 bg-white/90">
<div className="space-y-3 text-xs">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">24/7 BUILDING ACCESS ACROSS ALL 25 FLOORS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="">CROSS-TIER NETWORKING WITH 350+ BUILDERS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-book-open w-3.5 h-3.5" data-lucide="book-open" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="">EQUIPMENT LIBRARY INCLUDING MAKER TOOLS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-check w-3.5 h-3.5" data-lucide="calendar-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<span className="">MEETING ROOM CREDITS BASED ON TIER</span>
</div>
</div>
</div>
<div className="border-8 border-black p-4 bg-white/90">
<div className="space-y-3 text-xs">
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="">EVENT PRIORITY ACCESS TO 200+ PROGRAMS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-handshake w-3.5 h-3.5" data-lucide="handshake" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<span className="">MENTORSHIP MATCHING ACROSS EXPERIENCE</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-share-2 w-3.5 h-3.5" data-lucide="share-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="">COLLABORATION TOOLS &amp; SKILL SHARING</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-target w-3.5 h-3.5" data-lucide="target" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle className="" cx="12" cy="12" r="2"></circle></svg>
<span className="">REVENUE SHARE PROGRAMS FOR CREATORS</span>
</div>
</div>
</div>
</div>
</section>

<section className="container bg-white/60 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" id="apply" style={{opacity: '0', transform: 'translateY(20px)'}}>
<h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight mb-4">JOIN THE COMMUNITY</h2>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold uppercase mb-2">ENTERPRISE</h3>
<div className="w-1/2 h-1 bg-black mb-2"></div>
<div className="text-xs mb-3 space-y-1">
<div className="text-[#0000EE]">HELLO@SQ-COLLECTIVE.COM</div>
<div className="">PRIORITY REVIEW WITHIN 48HRS</div>
<div className="">12+ MONTH COMMITMENT</div>
<div className="">EXECUTIVE TEAM INTERVIEW</div>
</div>
<a className="inline-block bg-black text-white py-1 px-3 text-[10px] font-semibold uppercase hover:bg-gray-800 transition-colors" href="mailto:hello@shentonhouse.sg" style={{}}>
            APPLY NOW
          </a>
</div>
<div className="bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold uppercase mb-2">GROWTH TEAMS</h3>
<div className="w-1/2 h-1 bg-black mb-2"></div>
<div className="space-y-1 text-xs mb-3">
<div className="text-[#0000EE]">HELLO@SQ-COLLECTIVE.COM</div>
<div className="">1-WEEK APPLICATION PROCESS</div>
<div className="">6+ MONTH COMMITMENT</div>
<div className="">2-WEEK TRIAL AVAILABLE</div>
</div>
<a className="inline-block bg-black text-white py-1 px-3 text-[10px] font-semibold uppercase hover:bg-gray-800 transition-colors" href="mailto:growth@shentonhouse.sg" style={{}}>
            APPLY NOW
          </a>
</div>
<div className="border-8 border-black p-4 bg-gray-100/90" style={{}}>
<h3 className="text-base font-semibold uppercase mb-2">CREATIVE PROGRAM</h3>
<div className="w-1/2 h-1 bg-black mb-2"></div>
<div className="space-y-1 text-xs mb-3">
<div className="text-[#0000EE]">HELLO@SQ-COLLECTIVE.COM</div>
<div className="">MONTHLY SELECTION ROUNDS</div>
<div className="">PORTFOLIO SUBMISSION REQUIRED</div>
<div className="">COMMUNITY SERVICE COMMITMENT</div>
</div>
<a className="inline-block bg-black text-white py-1 px-3 text-[10px] font-semibold uppercase hover:bg-gray-800 transition-colors" href="mailto:create@shentonhouse.sg" style={{}}>
            APPLY NOW
          </a>
</div>
</div>
</section>
</div>


<footer className="relative z-10 text-white bg-black pt-8 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="">
<h3 className="text-sm font-semibold uppercase mb-3">CONTACT</h3>
<div className="text-xs space-y-1">
<div className="">ADDRESS</div>
<div className="">SINGAPORE 068805</div>
<div className="">HELLO@SQ-COLLECTIVE.COM</div>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold uppercase mb-3">COMMUNITY</h3>
<div className="text-xs space-y-1">
<div className="">350+ ACTIVE MEMBERS</div>
<div>56,000 SQ FT</div>
<div>25 FLOORS</div>
<div>200+ EVENTS ANNUALLY</div>
</div>
</div>
<div>
<h3 className="text-sm font-semibold uppercase mb-3">OPENING</h3>
<div className="text-xs space-y-1">
<div>Q2 2024</div>
<div>FOUNDING MEMBERS NOW</div>
<div>EARLY BIRD RATES</div>
<div>LIMITED AVAILABILITY</div>
</div>
</div>
</div>
<div className="border-t border-gray-700 mt-8 pt-4" style={{}}>
<div className="text-xs text-gray-400 text-center" style={{}}>
          © 2024 SHENTON HOUSE. BUILDING THE FUTURE OF WORK &amp; CREATIVITY IN SINGAPORE.
        </div>
</div>
</div>
</footer>

    </>
  );
}
