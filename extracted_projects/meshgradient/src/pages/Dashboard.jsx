import React, { useState, useMemo, useEffect } from 'react'
import Header from '../components/Header'
import SystemModules from '../components/SystemModules'
import StatusWidget from '../components/StatusWidget'
import VisualizationWell from '../components/VisualizationWell'
import Console from '../components/Console'

export default function Dashboard() {
  const [nodes, setNodes] = useState([
    { id: 'm1', icon: 'solar:target-linear', label: 'Alpha Node', num: '01', color: '#f59e0b', x: 10, y: 10, size: 60, vx: 0.15, vy: 0.2 },
    { id: 'm2', icon: 'solar:target-linear', label: 'Beta Node', num: '02', color: '#ec4899', x: 90, y: 20, size: 70, vx: -0.2, vy: 0.15 },
    { id: 'm3', icon: 'solar:target-linear', label: 'Gamma Node', num: '03', color: '#8b5cf6', x: 20, y: 90, size: 80, vx: 0.25, vy: -0.1 },
    { id: 'm4', icon: 'solar:target-linear', label: 'Delta Node', num: '04', color: '#06b6d4', x: 80, y: 80, size: 60, vx: -0.15, vy: -0.25 },
  ])
  
  const [activeNodeId, setActiveNodeId] = useState(nodes[0].id)
  const [globalBlur, setGlobalBlur] = useState(45)
  const [blendMode, setBlendMode] = useState('normal')
  const [ditherOpacity, setDitherOpacity] = useState(15)
  const [ditherSize, setDitherSize] = useState(4)
  const [ditherAnimated, setDitherAnimated] = useState(true)
  const [ditherPattern, setDitherPattern] = useState('bayer')
  const [isAnimated, setIsAnimated] = useState(false)

  const updateNode = (id, key, value) => {
    setNodes(prev => prev.map(n => n.id === id ? { ...n, [key]: value } : n))
  }

  const handleRandomize = () => {
    // Randomize Colors
    setNodes(prev => prev.map(n => {
      const r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      const b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
      return { ...n, color: `#${r}${g}${b}` };
    }));
    
    // Randomize Pattern Form
    const patterns = ['bayer', 'grid', 'waves', 'vortex', 'petals'];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    setDitherPattern(randomPattern);

    // Randomize Global Diffusion (0 to 150)
    setGlobalBlur(Math.floor(Math.random() * 151));

    // Randomize Dither Opacity (0 to 100)
    setDitherOpacity(Math.floor(Math.random() * 101));
  }

  // Physics animation loop
  useEffect(() => {
    if (!isAnimated) return;
    let animationFrameId;
    
    const animate = () => {
      setNodes(prevNodes => prevNodes.map(n => {
        let newX = n.x + n.vx;
        let newY = n.y + n.vy;
        let newVx = n.vx;
        let newVy = n.vy;

        // Bounce off bounds
        if (newX <= 0 || newX >= 100) {
          newVx *= -1;
          newX = Math.max(0, Math.min(100, newX));
        }
        if (newY <= 0 || newY >= 100) {
          newVy *= -1;
          newY = Math.max(0, Math.min(100, newY));
        }

        return { ...n, x: newX, y: newY, vx: newVx, vy: newVy };
      }));
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAnimated]);

  const cssString = useMemo(() => {
    const gradients = nodes
      .map(n => `radial-gradient(circle at ${n.x.toFixed(1)}% ${n.y.toFixed(1)}%, ${n.color} 0%, transparent ${n.size}%)`)
      .join(',\n    ');
    
    let baseCss = `.mesh-gradient {\n  background-color: #050505;\n  background-image:\n    ${gradients};\n  filter: blur(${globalBlur}px);\n  mix-blend-mode: ${blendMode};\n}`;

    if (ditherOpacity > 0) {
      const frequency = (0.65 / Math.max(1, ditherSize * 0.5)).toFixed(2);
      const bgSize = `\n  background-size: ${ditherSize * 50}px ${ditherSize * 50}px;`;
      const animProps = ditherAnimated ? `\n  animation: dither-anim 0.2s infinite steps(2);` : '';
      const keyframes = ditherAnimated ? `\n\n@keyframes dither-anim {\n  0% { transform: translate(0, 0); }\n  100% { transform: translate(-2%, 2%); }\n}` : '';

      baseCss += `\n\n.mesh-gradient::after {\n  content: "";\n  position: absolute;\n  inset: -10%;\n  /* Note: Advanced patterns use WebGL. This CSS outputs standard procedural noise. */\n  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");\n  opacity: ${ditherOpacity / 100};\n  mix-blend-mode: overlay;\n  pointer-events: none;${bgSize}${animProps}\n}${keyframes}`;
    }

    return baseCss;
  }, [nodes, globalBlur, blendMode, ditherOpacity, ditherSize, ditherAnimated])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 relative">
      <main 
        className="w-full max-w-7xl mx-auto flex-1 flex flex-col z-10 relative rounded-[2.5rem]"
        style={{
          background: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
          boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.08), 0 0 0 1px rgba(0,0,0,0.8)',
          padding: '14px'
        }}
      >
        <div 
          className="flex-1 flex flex-col rounded-[1.75rem] bg-[#0a0a0a] overflow-hidden relative"
          style={{
            boxShadow: 'inset 0 4px 24px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)'
          }}
        >
          <div className="absolute inset-0 border border-white/5 rounded-[1.75rem] pointer-events-none z-50"></div>

          <Header />

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 z-10 relative">
            <div className="lg:col-span-4 flex flex-col justify-between gap-8 group h-[60vh] lg:h-auto overflow-y-auto lg:overflow-visible pr-2 custom-scrollbar">
              <SystemModules 
                nodes={nodes} 
                activeNodeId={activeNodeId} 
                setActiveNodeId={setActiveNodeId} 
                updateNode={updateNode} 
              />
              <StatusWidget 
                globalBlur={globalBlur}
                setGlobalBlur={setGlobalBlur}
                blendMode={blendMode}
                setBlendMode={setBlendMode}
                ditherOpacity={ditherOpacity}
                setDitherOpacity={setDitherOpacity}
                ditherSize={ditherSize}
                setDitherSize={setDitherSize}
                ditherAnimated={ditherAnimated}
                setDitherAnimated={setDitherAnimated}
                ditherPattern={ditherPattern}
                setDitherPattern={setDitherPattern}
                isAnimated={isAnimated}
                setIsAnimated={setIsAnimated}
                onRandomize={handleRandomize}
              />
            </div>

            <div className="lg:col-span-8 relative min-h-[50vh] lg:min-h-0">
              <VisualizationWell 
                nodes={nodes}
                globalBlur={globalBlur}
                blendMode={blendMode}
                activeNodeId={activeNodeId}
                setActiveNodeId={setActiveNodeId}
                updateNode={updateNode}
                ditherOpacity={ditherOpacity}
                ditherSize={ditherSize}
                ditherAnimated={ditherAnimated}
                ditherPattern={ditherPattern}
                isAnimated={isAnimated}
              />
            </div>
          </div>

          <Console cssString={cssString} />
          
        </div>
      </main>
    </div>
  )
}