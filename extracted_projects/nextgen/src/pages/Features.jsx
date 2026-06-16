import Reveal from '../components/ui/Reveal';
import clsx from 'clsx';

const features = [
  {
    icon: 'solar:soundwave-bold',
    title: 'Spatial Audio Engines',
    description: 'Implement HRTF (Head-Related Transfer Function) for true 3D soundscapes that react dynamically to the user’s physical environment and rotation.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    icon: 'solar:glasses-bold',
    title: 'Passthrough MR',
    description: 'Blend physical and digital realities seamlessly using high-resolution color passthrough, enabling context-aware virtual overlays.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    icon: 'solar:users-group-two-rounded-bold',
    title: 'Multi-User Sync',
    description: 'Low-latency multiplayer architecture utilizing WebRTC and custom delta-compression for shared spatial states across global networks.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    icon: 'solar:magic-stick-3-bold',
    title: 'Real-time Raytracing',
    description: 'Leverage the latest graphics APIs (WebGPU, Vulkan) to bring cinematic lighting, reflections, and ambient occlusion to standalone devices.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  {
    icon: 'solar:gamepad-bold',
    title: 'Advanced Haptics',
    description: 'Bridge the sensory gap with granular force-feedback integrations for wearable devices, gloves, and next-gen controllers.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20'
  },
  {
    icon: 'solar:chart-square-bold',
    title: 'Spatial Analytics',
    description: 'Track gaze vectors, physical movement heatmaps, and interaction funnels with our proprietary privacy-first XR analytics SDK.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20'
  }
];

export default function Features() {
  return (
    <div className="w-full flex flex-col items-center pb-32">
      
      {/* Header */}
      <section className="w-full max-w-7xl px-4 md:px-8 pt-32 pb-16 flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">NextGen Core v3.0</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">
            The NextGen Framework
          </h1>
          <p className="text-white/60 max-w-2xl leading-relaxed mx-auto text-lg">
            The NextGen proprietary stack bridges the gap between hardware capabilities and software elegance. Explore the technical features that power our immersive experiences.
          </p>
        </Reveal>
      </section>

      {/* Feature Bento Grid */}
      <section className="w-full max-w-7xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <Reveal 
              key={i} 
              delay={i * 100}
              className={clsx(
                "p-8 rounded-sm border bg-black/50 backdrop-blur-sm flex flex-col relative overflow-hidden group transition-all duration-500",
                "border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
              )}
            >
              {/* Subtle background glow on hover */}
              <div className={clsx(
                "absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2",
                feat.bg
              )}></div>

              <div className={clsx(
                "w-12 h-12 rounded-sm border flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
                feat.bg, feat.border
              )}>
                <iconify-icon icon={feat.icon} class={clsx("text-2xl drop-shadow-md", feat.color)}></iconify-icon>
              </div>

              <h3 className="text-xl font-medium tracking-tight text-white mb-3 relative z-10">{feat.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed relative z-10">
                {feat.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-white/20"></div>
                <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-white/20"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech Pipeline Visual */}
      <section className="w-full max-w-7xl px-4 md:px-8 py-20 mt-12 border-t border-white/10">
        <Reveal className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">NextGen Optimized Pipeline</h2>
          <p className="text-white/60 max-w-xl">We've automated the heavy lifting of 3D optimization so NextGen creators can focus entirely on the experience.</p>
        </Reveal>

        <Reveal delay={200} className="w-full bg-black border border-white/10 rounded-sm p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Background Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 11px)' }}></div>
          
          <div className="flex flex-col items-center relative z-10 flex-1">
            <div className="w-20 h-20 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center mb-4 relative">
              <iconify-icon icon="solar:box-minimalistic-bold" class="text-3xl text-purple-400"></iconify-icon>
              <span className="absolute -right-2 top-0 w-3 h-3 bg-purple-500 rounded-full animate-ping"></span>
            </div>
            <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-1">Raw Assets</h4>
            <p className="text-xs text-white/40">High-poly CAD & Scans</p>
          </div>

          {/* Connection Line */}
          <div className="hidden md:flex flex-1 h-[1px] bg-gradient-to-r from-purple-500/50 via-white/20 to-orange-500/50 relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">Process</div>
          </div>
          
          {/* Mobile Arrow */}
          <iconify-icon icon="solar:arrow-down-linear" class="md:hidden text-2xl text-white/20"></iconify-icon>

          <div className="flex flex-col items-center relative z-10 flex-1">
            <div className="w-20 h-20 rounded-full border border-orange-500/30 bg-orange-500/10 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <iconify-icon icon="solar:rocket-bold" class="text-3xl text-orange-400"></iconify-icon>
            </div>
            <h4 className="text-white font-medium text-sm tracking-widest uppercase mb-1">Real-time Ready</h4>
            <p className="text-xs text-white/40">Compressed & WebXR Ready</p>
          </div>
        </Reveal>
      </section>

    </div>
  );
}