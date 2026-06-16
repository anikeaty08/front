import React from 'react';

const Card = ({ icon, textStart, textHighlight, textEnd, avatarUrl, name, role }) => (
  <div className="w-[350px] md:w-[450px] relative rounded-xl border border-stone-200/80 bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between shrink-0">
    <div>
      <div className="mb-6 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-400">
        <iconify-icon icon={icon} width="16" height="16"></iconify-icon>
      </div>
      <p className="font-dm-sans text-xl font-light leading-snug text-stone-800 mb-8">
        "{textStart} <span className="font-medium text-stone-900">{textHighlight}</span>{textEnd}"
      </p>
    </div>
    <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
      <img src={avatarUrl} alt="Avatar" className="h-10 w-10 rounded-full object-cover" />
      <div>
        <p className="text-sm font-medium text-stone-900 font-sans">{name}</p>
        <p className="text-xs text-stone-500 font-sans">{role}</p>
      </div>
    </div>
  </div>
);

const FrictionSection = () => {
  const cards = [
    {
      icon: "lucide:trending-down",
      textStart: "We need to reduce our inference latency by",
      textHighlight: "40%",
      textEnd: " to meet real-time user demands.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      name: "Elena Rodriguez",
      role: "VP of Engineering"
    },
    {
      icon: "lucide:git-branch",
      textStart: "Managing version control across distributed research teams is becoming",
      textHighlight: "impossible",
      textEnd: ".",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      name: "Marcus Chen",
      role: "Lead AI Architect"
    },
    {
      icon: "lucide:zap",
      textStart: "New model deployment takes",
      textHighlight: "weeks",
      textEnd: ". We need a pipeline that delivers in minutes.",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
      name: "Sarah Lin",
      role: "Head of Infrastructure"
    },
    {
      icon: "lucide:shield-alert",
      textStart: "Data silos and compliance checks are preventing us from building a truly",
      textHighlight: "unified intelligence layer",
      textEnd: ".",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      name: "David Korn",
      role: "CISO"
    },
    {
      icon: "lucide:cpu",
      textStart: "Processing costs are spiraling. We need to optimize compute usage without sacrificing",
      textHighlight: "accuracy",
      textEnd: ".",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      name: "Jennifer Tso",
      role: "VP of Product"
    },
    {
      icon: "lucide:search",
      textStart: "Our security team is blocking deployment because we lack",
      textHighlight: "granular traceability",
      textEnd: " on model decisions.",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
      name: "Alex Morgan",
      role: "Head of Research"
    }
  ];

  return (
    <section className="md:px-12 md:py-32 text-stone-900 bg-[#EAE8E2] w-full pt-24 pr-6 pb-24 pl-6 relative overflow-hidden">
      {/* Vertical Lines Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <div className="mx-auto max-w-7xl h-full border-x border-stone-300/40 relative">
          <div className="absolute inset-y-0 left-1/2 w-px bg-stone-300/40 hidden md:block lg:hidden -ml-px"></div>
          <div className="absolute inset-y-0 left-1/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
          <div className="absolute inset-y-0 left-2/3 w-px bg-stone-300/40 hidden lg:block -ml-px"></div>
        </div>
      </div>

      <div className="z-10 w-full relative">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center max-w-7xl mx-auto reveal-item">
          <span className="rounded-full border border-stone-300/60 bg-white/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-stone-500 font-sans backdrop-blur-sm mb-8">
            The Friction Point
          </span>
          <h2 className="max-w-4xl text-4xl font-light tracking-tighter text-stone-900 md:text-6xl font-dm-sans">
            Is legacy infrastructure stifling your <span className="text-stone-400">cognitive potential?</span>
          </h2>
        </div>

        {/* Scrolling Cards Container */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] -mx-6 md:-mx-12 px-6 md:px-12 reveal-item delay-200">
          <div className="flex w-max animate-scroll-cards gap-6 py-4">
            {cards.map((card, i) => <Card key={i} {...card} />)}
            {/* Duplicates for Loop */}
            {cards.map((card, i) => (
              <div key={`dup-${i}`} aria-hidden="true">
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee (Text) */}
        <div className="mt-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] reveal-item delay-500 max-w-7xl mx-auto">
          <div className="flex w-max animate-scroll items-center gap-12 py-2">
            <div className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono">
              <span>Latency Constraints</span><span className="text-stone-300/40">•</span>
              <span>Data Governance</span><span className="text-stone-300/40">•</span>
              <span>Model Drift</span><span className="text-stone-300/40">•</span>
              <span>Compute Costs</span><span className="text-stone-300/40">•</span>
              <span>API Limitations</span><span className="text-stone-300/40">•</span>
              <span>Security Audits</span><span className="text-stone-300/40">•</span>
              <span>Version Control</span><span className="text-stone-300/40">•</span>
              <span>Infrastructure Dept</span><span className="text-stone-300/40">•</span>
              <span>Cold Starts</span><span className="text-stone-300/40">•</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-12 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400/80 font-mono" aria-hidden="true">
              <span>Latency Constraints</span><span className="text-stone-300/40">•</span>
              <span>Data Governance</span><span className="text-stone-300/40">•</span>
              <span>Model Drift</span><span className="text-stone-300/40">•</span>
              <span>Compute Costs</span><span className="text-stone-300/40">•</span>
              <span>API Limitations</span><span className="text-stone-300/40">•</span>
              <span>Security Audits</span><span className="text-stone-300/40">•</span>
              <span>Version Control</span><span className="text-stone-300/40">•</span>
              <span>Infrastructure Dept</span><span className="text-stone-300/40">•</span>
              <span>Cold Starts</span><span className="text-stone-300/40">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrictionSection;