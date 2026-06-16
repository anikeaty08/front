import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            cyber: {
              bg: '#0a0c12',
              component: '#181c27',
              input: 'rgba(30, 35, 50, 0.6)',
              accent: '#00f0c0',
              accentAlt: '#ff2a6d',
              text: '#e0e7ff',
              secondary: '#a0aed0',
              border: '#3a3f5e'
            }
          },
          fontFamily: {
            mono: ['Fira Code', 'monospace'],
            display: ['Orbitron', 'sans-serif']
          },
          animation: {
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'scanline': 'scanline 5s linear infinite',
          },
          keyframes: {
            scanline: {
              '0%': { transform: 'translateY(-100%)' },
              '100%': { transform: 'translateY(100%)' }
            }
          }
        }
      }
    }
  


    // Simple particles effect
    document.addEventListener('DOMContentLoaded', function() {
      const particlesContainer = document.getElementById('particles');
      
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random color (cyber-accent or cyber-accentAlt)
        const color = Math.random() > 0.5 ? '#00f0c0' : '#ff2a6d';
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 50 + 20;
        
        particle.style.position = 'absolute';
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.borderRadius = '50%';
        particle.style.opacity = opacity;
        particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
        particle.style.animation = `float ${duration}s infinite linear`;
        
        particlesContainer.appendChild(particle);
      }
      
      // Add animation keyframes
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          100% { transform: translate(0, 0); }
        }
      `;
      document.head.appendChild(style);
      
      // Typewriter effect for terminal text
      const typewriterElements = document.querySelectorAll('.typewriter');
      typewriterElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        let i = 0;
        const interval = setInterval(() => {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
          } else {
            clearInterval(interval);
          }
        }, 100);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>
<div className="scanline"></div>
<header className="relative min-h-screen w-full cyber-grid overflow-hidden">
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-cyber-bg/30 border-b border-cyber-border/50">
<div className="flex items-center">
<div className="text-cyber-accent font-display text-2xl font-bold tracking-wider">NEXUS<span className="text-cyber-accentAlt">_</span></div>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-cyber-text hover:text-cyber-accent transition-colors duration-300" href="#">Home</a>
<a className="text-cyber-text hover:text-cyber-accent transition-colors duration-300" href="#">Solutions</a>
<a className="text-cyber-text hover:text-cyber-accent transition-colors duration-300" href="#">About</a>
<a className="text-cyber-text hover:text-cyber-accent transition-colors duration-300" href="#">Contact</a>
</div>
<div>
<button className="bg-transparent border border-cyber-accent text-cyber-accent hover:bg-cyber-accent/10 transition-all duration-300 px-4 py-2 rounded">
          Login
        </button>
</div>
</nav>
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-screen pt-20">
<div className="md:w-1/2 flex flex-col items-start justify-center z-10 md:pr-8">
<div className="inline-block bg-cyber-component/30 backdrop-blur-sm px-3 py-1 rounded border border-cyber-border/50 text-cyber-secondary mb-4">
<span className="text-cyber-accent">&gt;</span> The future is now
        </div>
<h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
<span className="cyber-glitch glow-text" data-text="QUANTUM">QUANTUM</span>
<span className="gradient-text">INTERFACE</span>
<span className="block text-cyber-secondary">TECHNOLOGY</span>
</h1>
<p className="text-cyber-secondary max-w-md mb-8">
          Access next-generation AI systems with our revolutionary quantum interface. Break through traditional computing limitations and unlock unprecedented capabilities.
        </p>
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
<button className="bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 px-8 rounded glow transition-all duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
<button className="bg-transparent border border-cyber-accentAlt text-cyber-accentAlt hover:bg-cyber-accentAlt/10 font-bold py-3 px-8 rounded transition-all duration-300">
            Learn More
          </button>
</div>
<div className="mt-10 grid grid-cols-3 gap-6">
<div className="flex flex-col items-center">
<div className="text-cyber-accent text-3xl font-bold">99%</div>
<div className="text-cyber-secondary text-sm">Efficiency</div>
</div>
<div className="flex flex-col items-center">
<div className="text-cyber-accent text-3xl font-bold">10x</div>
<div className="text-cyber-secondary text-sm">Performance</div>
</div>
<div className="flex flex-col items-center">
<div className="text-cyber-accent text-3xl font-bold">24/7</div>
<div className="text-cyber-secondary text-sm">Support</div>
</div>
</div>
</div>
<div className="md:w-1/2 flex justify-center items-center z-10 mt-10 md:mt-0">
<div className="relative w-full max-w-md">
<div className="absolute inset-0 bg-cyber-accent/20 blur-xl rounded-lg"></div>
<div className="relative bg-cyber-component border border-cyber-border rounded-lg overflow-hidden glow">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-accent to-cyber-accentAlt"></div>
<div className="p-6">
<div className="flex justify-between items-center mb-6">
<div className="text-cyber-accent font-display text-xl">NEXUS TERMINAL</div>
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-cyber-accentAlt animate-pulse"></div>
<div className="w-3 h-3 rounded-full bg-cyber-accent animate-pulse-slow"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-cyber-input p-4 rounded border border-cyber-border/50">
<div className="text-cyber-secondary text-sm mb-1">System Status</div>
<div className="text-cyber-accent typewriter">ONLINE</div>
</div>
<div className="bg-cyber-input p-4 rounded border border-cyber-border/50">
<div className="text-cyber-secondary text-sm mb-1">Quantum Cores</div>
<div className="w-full bg-cyber-border/30 rounded-full h-2">
<div className="bg-gradient-to-r from-cyber-accent to-cyber-accentAlt h-2 rounded-full w-3/4"></div>
</div>
</div>
<div className="bg-cyber-input p-4 rounded border border-cyber-border/50">
<div className="text-cyber-secondary text-sm mb-1">Neural Networks</div>
<div className="flex justify-between text-xs">
<span className="text-cyber-accent">ACTIVE</span>
<span className="text-cyber-secondary">12 CONNECTIONS</span>
</div>
</div>
</div>
<button className="w-full bg-cyber-accent hover:bg-cyber-accent/90 text-cyber-bg font-bold py-3 rounded mt-6 transition-all duration-300 glow hover:glow-alt">
                INITIALIZE SEQUENCE
              </button>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-10 left-0 w-full flex justify-center">
<div className="animate-bounce">
<svg className="w-6 h-6 text-cyber-accent" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
</svg>
</div>
</div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-cyber-bg/0 via-cyber-bg/0 to-cyber-bg/80"></div>
<div className="absolute inset-0" id="particles"></div>
</div>
</header>


    </>
  );
}
