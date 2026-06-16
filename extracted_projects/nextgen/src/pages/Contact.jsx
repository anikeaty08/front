import Reveal from '../components/ui/Reveal';

export default function Contact() {
  return (
    <div className="w-full max-w-7xl px-4 md:px-8 py-32 flex flex-col items-center min-h-[70vh]">
      <Reveal>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">Connect with NextGen</h1>
        <p className="text-white/60 max-w-2xl text-center leading-relaxed mb-16">
          Ready to build the future? Connect with the NextGen team to discuss your next immersive project.
        </p>
      </Reveal>
      
      <Reveal delay={200} className="w-full max-w-xl">
        <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-white/40 uppercase tracking-wider font-medium ml-1">Name</label>
            <input type="text" className="w-full h-12 px-4 rounded-sm outline-none text-sm placeholder:text-white/20 transition-all focus:border-purple-500/50" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.05)' }} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-white/40 uppercase tracking-wider font-medium ml-1">Email</label>
            <input type="email" className="w-full h-12 px-4 rounded-sm outline-none text-sm placeholder:text-white/20 transition-all focus:border-purple-500/50" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.05)' }} />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-white/40 uppercase tracking-wider font-medium ml-1">Message</label>
            <textarea rows="5" className="w-full p-4 rounded-sm outline-none text-sm placeholder:text-white/20 transition-all focus:border-purple-500/50 resize-none" style={{ background: '#000000', border: '1px solid rgba(255,255,255,0.05)' }}></textarea>
          </div>
          <button type="submit" className="h-12 mt-4 rounded-sm text-xs font-medium tracking-wider uppercase text-white hover:brightness-110 transition-all" style={{ background: 'linear-gradient(180deg, #5b21b6 0%, #3b0764 100%)', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            Engage NextGen
          </button>
        </form>
      </Reveal>
    </div>
  );
}