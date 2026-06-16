import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = 0;
    let height = 0;
    let nodes = [];
    let beams = [];

    const resize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      nodes = Array.from({ length: 90 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: (Math.random() * 0.4) + 0.1,
        char: chars[Math.floor(Math.random() * chars.length)]
      }));

      beams = Array.from({ length: 25 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 100 + 50,
        speed: (Math.random() * 6) + 3,
        opacity: Math.random() * 0.5 + 0.3
      }));
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mouse = mouseRef.current;

      // 1. Upward Beams (Fast)
      beams.forEach(b => {
        b.y -= b.speed;
        if (b.y + b.length < 0) {
          b.y = height + 100;
          b.x = Math.random() * width;
        }

        let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
        g.addColorStop(0, `rgba(96, 165, 250, ${b.opacity})`);
        g.addColorStop(1, 'transparent');
        
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.lineTo(b.x, b.y + b.length);
        ctx.stroke();
      });

      // 2. Interactive Nodes (ASCII)
      ctx.font = '12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Proximity Lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        let n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          let n2 = nodes[j];
          let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(156, 163, 175, ${0.15 * (1 - d/120)})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        n.y += n.vy; // Slow drift
        
        if (n.y > height + 20) {
          n.y = -20;
          n.x = Math.random() * width;
        }

        let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        
        // Dynamic Character Swap
        if (dist < 180 || Math.random() > 0.98) {
          n.char = chars[Math.floor(Math.random() * chars.length)];
        }

        // Mouse Connection
        if (dist < 180) {
          ctx.strokeStyle = `rgba(96, 165, 250, ${0.5 * (1 - dist/180)})`;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
        ctx.fillText(n.char, n.x, n.y);
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    // Initialization sequence
    resize();
    initParticles();
    draw();

    // Event Listeners
    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });
    
    // Attach mouse events to the parent container to track across the whole right pane
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Canvas fade-in animation
    canvas.style.opacity = '0';
    canvas.style.transition = 'opacity 2s ease-in-out';
    canvas.style.transitionDelay = '0.2s';
    
    // Trigger reflow
    void canvas.offsetWidth;
    canvas.style.opacity = '1';

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default ParticleCanvas;