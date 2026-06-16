import Reveal from '../ui/Reveal';

export default function Collaboration() {
  return (
    <section className="z-10 overflow-hidden bg-[#0a0a0a] w-full border-neutral-900/50 border-b py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 shadow-[0_0_15px_rgba(249,115,22,0.15)] backdrop-blur-md">
                <iconify-icon icon="solar:users-group-two-rounded-linear" class="text-base"></iconify-icon>
                Multiplayer Mode
              </div>
              <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 leading-tight">
                Build and debug
                <br />
                <span className="text-neutral-500">with your entire team.</span>
              </h2>
              <p className="text-neutral-400 text-lg font-light mb-8 max-w-md leading-relaxed">
                Invite stakeholders to view, comment, or edit workflows in real-time. See who's doing what with live presence indicators and version history.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {['Live cursor tracking and presence', 'Inline commenting and approvals', 'Granular permission controls'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-300 text-base font-light">
                    <div className="w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 shrink-0">
                      <iconify-icon icon="solar:check-circle-linear" class="text-base"></iconify-icon>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2 relative group perspective-1000">
            <Reveal scale={true}>
              <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none z-0 transform group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl transform rotate-y-[-2deg] rotate-x-[2deg] group-hover:rotate-0 transition-transform duration-700">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/b41ed9cc-930b-4625-9af2-4a478108704b/1600w.jpg" alt="Collaboration" className="w-full h-[400px] object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transform group-hover:scale-105 transition-all duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-80 pointer-events-none"></div>

                <div className="absolute top-6 left-6 flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-neutral-900 animate-float-slow" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User" />
                  <img className="w-10 h-10 rounded-full border-2 border-neutral-900 animate-float-fast" style={{ animationDelay: '1s' }} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="User" />
                  <div className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-sm text-white font-medium animate-float-med relative" style={{ animationDelay: '2s' }}>
                    +3
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}