import Reveal from '../components/ui/Reveal';

const projects = [
  { id: '01', title: 'Neon Topography', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg' },
  { id: '02', title: 'Glass Oasis', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/005600e5-f6ab-4e59-bc86-eaeb02797dfa_1600w.jpg' },
  { id: '03', title: 'Fintech Immersive', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfef5098-c30f-4cd9-b4ac-04b2673ab943_1600w.jpg' },
  { id: '04', title: 'Monolith VR', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg' },
  { id: '05', title: 'Azure Waves', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg' },
  { id: '06', title: 'Micro Spaces', img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg' }
];

export default function Work() {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-32 flex flex-col items-center min-h-[70vh]">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">NextGen Portfolio</h1>
        <p className="text-white/60 max-w-2xl text-center leading-relaxed">
          Explore the NextGen portfolio of immersive experiences, spatial computing applications, and boundary-pushing digital environments.
        </p>
      </Reveal>
      
      {/* Featured Case Study Section */}
      <Reveal delay={200} className="w-full mt-20 relative rounded-sm overflow-hidden group border border-white/10 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-orange-900/10 z-0"></div>
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80" 
          alt="Featured Project" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative z-20 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[400px]">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></span>
              <span className="text-xs font-medium tracking-widest text-purple-400 uppercase">Featured Case Study</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Nexus Echoes: Spatial Audio Environments
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              We partnered with a leading hardware manufacturer to create a responsive, web-based spatial audio visualizer. Users can physically navigate through soundscapes in real-time using any XR headset or modern browser, resulting in unprecedented engagement metrics.
            </p>
            <button className="h-12 px-8 rounded-sm text-xs font-medium tracking-wider text-white uppercase transition-all duration-300 relative overflow-hidden group/btn" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}>
              <span className="relative z-10">Read the Case Study</span>
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-black font-medium z-20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300">Read the Case Study</span>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto self-start lg:self-center">
            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-sm flex flex-col gap-1 w-full lg:w-48 shadow-lg">
              <span className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">300%</span>
              <span className="text-xs text-white/40 uppercase tracking-widest font-medium mt-1">Session Lift</span>
            </div>
            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-sm flex flex-col gap-1 w-full lg:w-48 shadow-lg">
              <span className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">1.2M</span>
              <span className="text-xs text-white/40 uppercase tracking-widest font-medium mt-1">Active Users</span>
            </div>
            <div className="bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-sm flex flex-col gap-1 w-full lg:w-48 shadow-lg">
              <span className="text-3xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">14</span>
              <span className="text-xs text-white/40 uppercase tracking-widest font-medium mt-1">Global Awards</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Portfolio Grid Header */}
      <div className="w-full mt-32 mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-4">
        <Reveal>
          <h2 className="text-2xl font-medium tracking-tight text-white">All Projects</h2>
        </Reveal>
        <Reveal delay={100} className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <div className="flex gap-6 text-xs uppercase tracking-wider font-medium text-white/40 whitespace-nowrap">
            <button className="text-white hover:text-white transition-colors">All</button>
            <button className="hover:text-white transition-colors">WebXR</button>
            <button className="hover:text-white transition-colors">VisionOS</button>
            <button className="hover:text-white transition-colors">Virtual Prod</button>
          </div>
        </Reveal>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, i) => (
          <Reveal 
            key={project.id} 
            delay={i * 100} 
            className="aspect-square border border-white/10 flex flex-col justify-end bg-black hover:bg-white/[0.05] transition-all duration-500 cursor-pointer relative overflow-hidden group shadow-lg"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
            
            <div className="relative z-20 p-8 flex justify-between items-end w-full">
              <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="text-white/40 font-medium text-sm tracking-widest">{project.id}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}