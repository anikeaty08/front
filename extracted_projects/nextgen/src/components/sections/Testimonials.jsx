import Reveal from '../ui/Reveal';

const testimonials = [
  {
    quote: "The spatial audio engine they developed reduced our computational overhead by 40% while delivering unprecedented immersion. It's nothing short of architectural magic.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, Oculus",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    delay: 0
  },
  {
    quote: "NextGen completely overhauled our virtual production pipeline. Real-time rendering on LED volumes is now twice as fast, saving us millions in post-production.",
    author: "David Ross",
    role: "Technical Director, A24",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    delay: 150
  },
  {
    quote: "Their multiplayer netcode integration allowed us to hit 100+ concurrent users with sub-20ms latency. They don't just build apps; they architect ecosystems.",
    author: "Michael Chang",
    role: "Lead Producer, Epic Games",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    delay: 300
  }
];

export default function Testimonials() {
  return (
    <section className="w-full border-x border-white/10 border-t relative py-32 flex flex-col items-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
      </div>

      <Reveal className="relative z-10 flex flex-col items-center text-center px-4 w-full mb-20">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[1px] bg-orange-500/50"></span>
          <p className="text-xs tracking-[0.2em] uppercase text-orange-400 font-medium">Industry Voices</p>
          <span className="w-8 h-[1px] bg-orange-500/50"></span>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl leading-tight">
          Trusted by the vanguard of digital innovation.
        </h2>
      </Reveal>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <Reveal 
            key={i} 
            delay={item.delay} 
            className="p-8 rounded-sm border border-white/10 bg-black/50 backdrop-blur-sm hover:bg-white/[0.02] hover:border-white/20 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-xl"
          >
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <iconify-icon icon="solar:quote-left-bold" class="text-3xl text-white/10 mb-6 group-hover:text-purple-500/30 transition-colors duration-500"></iconify-icon>
            
            <p className="text-white/70 text-sm leading-relaxed mb-10 flex-1">
              "{item.quote}"
            </p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div>
                <p className="text-white font-medium text-sm tracking-tight">{item.author}</p>
                <p className="text-xs text-white/40 tracking-wider uppercase mt-1">{item.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}