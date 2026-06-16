import Reveal from '../components/ui/Reveal';

const stats = [
  { label: 'Founded', value: '2020' },
  { label: 'Team Size', value: '45+' },
  { label: 'Patents', value: '12' },
  { label: 'Offices', value: '3' },
];

const leaders = [
  {
    name: 'Elena Rostova',
    role: 'Founder & CEO',
    bio: 'Former Lead Architect at major AAA studios. Pioneered real-time rendering pipelines used by millions.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80'
  },
  {
    name: 'Marcus Chen',
    role: 'Technical Director',
    bio: 'Spatial computing veteran with 8 patents in optical tracking and mixed reality hardware integration.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Creative',
    bio: 'Award-winning digital artist blurring the lines between cinematic storytelling and interactive media.',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80'
  }
];

export default function Studio() {
  return (
    <div className="w-full flex flex-col items-center pb-32 bg-black">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl px-4 md:px-8 pt-32 pb-20 flex flex-col items-center text-center relative">
        <Reveal>
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></span>
            <p className="text-xs font-medium tracking-widest text-purple-400 uppercase">The NextGen Identity</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 max-w-5xl">
            The NextGen <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Architects</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed mx-auto">
            NextGen is a vanguard collective of technologists, artists, and researchers dedicated to dismantling the boundaries of human-computer interaction.
          </p>
        </Reveal>
      </section>

      {/* Cinematic Immersive Shot */}
      <section className="w-full max-w-[1920px] relative h-[60vh] md:h-[75vh] bg-black overflow-hidden group border-y border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/065b87f5-b134-44bc-9ad1-858a8ce4b6c2/3840w.jpg" 
            alt="Programming Environment" 
            className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105 mix-blend-luminosity grayscale group-hover:grayscale-0" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
        
        {/* Data Overlay */}
        <div className="absolute bottom-8 right-8 md:right-12 z-20 text-[10px] font-mono text-white/40 text-right space-y-1">
          <p className="text-purple-400">NEXTGEN_STUDIO_01</p>
          <p>SYS.CORE_ALLOCATION: 94%</p>
          <p>RENDER_NODES: ACTIVE [42]</p>
          <p>LATENCY: &lt;12ms</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full max-w-7xl px-4 md:px-8 py-20 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={i * 100} className="flex flex-col items-center md:items-start border-l border-white/10 pl-6 group cursor-default">
              <span className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2 group-hover:text-purple-400 transition-colors duration-500">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-medium group-hover:text-white/60 transition-colors">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="w-full max-w-7xl px-4 md:px-8 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <Reveal className="lg:col-span-5 relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight sticky top-32">
            Born from the intersection of gaming and enterprise.
          </h2>
        </Reveal>
        
        <Reveal delay={200} className="lg:col-span-7 flex flex-col gap-8 relative z-10 text-white/60 leading-relaxed text-lg">
          <p>
            In 2020, we looked at the landscape of spatial computing and saw a divide. On one side, enterprise applications were functional but lacked soul. On the other, gaming environments were breathtaking but lacked real-world utility.
          </p>
          <p>
            <strong className="text-white font-medium">NextGen Immersive was founded to bridge that gap.</strong>
          </p>
          <p>
            Our studio brings together veterans from AAA gaming, enterprise software architecture, and avant-garde digital art. We don't just use industry-standard engines like Unity and Unreal—we extend them, writing custom render pipelines and network protocols to ensure our experiences run flawlessly across any device.
          </p>
          <p>
            Today, we are the trusted spatial computing partner for visionary brands, helping them navigate the complex transition from 2D interfaces to fully immersive 3D realities.
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-2">Our Mission</p>
              <p className="text-sm text-white/80">To architect digital realities that transcend the screen, making the impossible interactable.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-2">Our Approach</p>
              <p className="text-sm text-white/80">Design-led, hardware-agnostic, and obsessively optimized for performance.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* The Vision (Cinematic Quote) */}
      <section className="w-full py-40 flex items-center justify-center relative overflow-hidden bg-black border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80" 
            alt="Abstract Vision" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen scale-110" 
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <Reveal className="relative z-10 max-w-5xl px-4 text-center">
          <iconify-icon icon="solar:quote-right-bold" class="text-6xl text-purple-500/20 mb-8 block"></iconify-icon>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-12">
            "The transition to spatial computing is the most significant architectural shift since the birth of the internet. We are here to build its foundations."
          </h2>
          <div className="flex flex-col items-center">
            <span className="w-12 h-[1px] bg-purple-500/50 mb-4"></span>
            <span className="text-sm tracking-[0.2em] uppercase text-white/60 font-medium">The Studio Vision</span>
          </div>
        </Reveal>
      </section>

      {/* Leadership / Credibility */}
      <section className="w-full max-w-7xl px-4 md:px-8 py-32">
        <Reveal className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">NextGen Leadership</h2>
          <p className="text-white/60 max-w-2xl">
            Led by pioneers in real-time rendering, spatial design, and software engineering.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <Reveal key={i} delay={i * 150} className="group cursor-pointer">
              <div className="aspect-[3/4] w-full mb-6 relative overflow-hidden bg-white/5 border border-white/10 rounded-sm">
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                
                {/* Hover overlay data */}
                <div className="absolute top-4 left-4 text-[10px] tracking-widest text-white/0 group-hover:text-white/40 font-mono transition-colors duration-500">
                  ID: {1004 + i} // ACTIVE
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-white mb-1 group-hover:text-purple-400 transition-colors">{leader.name}</h3>
                <p className="text-xs uppercase tracking-widest text-white/40 font-medium mb-4">{leader.role}</p>
                <p className="text-sm text-white/60 leading-relaxed">{leader.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core Ethos Grid */}
      <section className="w-full max-w-7xl px-4 md:px-8 py-20 border-t border-white/10">
        <Reveal className="mb-12">
          <h2 className="text-2xl font-medium tracking-tight text-white">Our Method</h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal delay={100} className="bg-white/[0.02] border border-white/10 rounded-sm p-8 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/20 transition-all group min-h-[240px]">
            <iconify-icon icon="solar:pen-new-square-linear" class="text-3xl text-purple-400 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500"></iconify-icon>
            <div className="mt-8">
              <h3 className="text-white font-medium mb-2 tracking-tight">Design First</h3>
              <p className="text-sm text-white/50 leading-relaxed">UX-driven spatial architecture prioritizing human comfort and intuition.</p>
            </div>
          </Reveal>
          
          <Reveal delay={200} className="bg-white/[0.02] border border-white/10 rounded-sm p-8 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/20 transition-all group min-h-[240px]">
            <iconify-icon icon="solar:cpu-linear" class="text-3xl text-orange-400 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500"></iconify-icon>
            <div className="mt-8">
              <h3 className="text-white font-medium mb-2 tracking-tight">Hardware Agnostic</h3>
              <p className="text-sm text-white/50 leading-relaxed">Optimized rendering pipelines scaling from web browsers to flagship headsets.</p>
            </div>
          </Reveal>
          
          <Reveal delay={300} className="bg-white/[0.02] border border-white/10 rounded-sm p-8 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/20 transition-all group min-h-[240px]">
            <iconify-icon icon="solar:shield-network-linear" class="text-3xl text-blue-400 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500"></iconify-icon>
            <div className="mt-8">
              <h3 className="text-white font-medium mb-2 tracking-tight">Secure Systems</h3>
              <p className="text-sm text-white/50 leading-relaxed">Enterprise-grade network protocols handling sensitive data with precision.</p>
            </div>
          </Reveal>
          
          <Reveal delay={400} className="bg-white/[0.02] border border-white/10 rounded-sm p-8 flex flex-col justify-between hover:bg-white/[0.05] hover:border-white/20 transition-all group min-h-[240px]">
            <iconify-icon icon="solar:rocket-linear" class="text-3xl text-green-400 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500"></iconify-icon>
            <div className="mt-8">
              <h3 className="text-white font-medium mb-2 tracking-tight">Rapid Prototyping</h3>
              <p className="text-sm text-white/50 leading-relaxed">Iterative development cycles turning concepts into testable builds instantly.</p>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}