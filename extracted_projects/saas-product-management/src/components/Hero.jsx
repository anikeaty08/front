import React, { useEffect, useMemo, useRef } from "react";

export default function Hero() {
  const dashboardRef = useRef(null);

  const particles = useMemo(() => {
    return Array.from({ length: 42 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.6 + 0.8,
      left: Math.random() * 100,
      top: Math.random() * 70 + 6,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.55 + 0.15,
      blur: Math.random() > 0.55 ? Math.random() * 2.2 + 0.4 : 0,
    }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!dashboardRef.current) return;

      const scrollY = window.scrollY;
      const maxScroll = 600;
      const progress = Math.min(scrollY / maxScroll, 1);

      const startX = 20;
      const startY = -8;
      const startZ = 5;

      const currentX = startX - startX * progress;
      const currentY = startY - startY * progress;
      const currentZ = startZ - startZ * progress;

      dashboardRef.current.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg) rotateZ(${currentZ}deg)`;
    };

    const handleMouseMove = (event) => {
      if (!dashboardRef.current) return;

      const rect = dashboardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (event.clientX - cx) / rect.width;
      const dy = (event.clientY - cy) / rect.height;

      const rotateY = dx * 6 - 2;
      const rotateX = -(dy * 8) + 5;

      dashboardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(1deg)`;
    };

    const handleMouseLeave = () => {
      if (!dashboardRef.current) return;
      dashboardRef.current.style.transform =
        "rotateX(4.73333deg) rotateY(-1.89333deg) rotateZ(1.18333deg)";
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes heroFloatUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes beamPulse {
          0%, 100% {
            opacity: 0.75;
            transform: translateY(0px) scaleX(1);
          }
          50% {
            opacity: 1;
            transform: translateY(8px) scaleX(1.03);
          }
        }

        @keyframes ambientDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, 18px, 0) scale(1.04);
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity);
          }
          50% {
            opacity: calc(var(--particle-opacity) * 0.9);
          }
          100% {
            transform: translate3d(0, -38px, 0);
            opacity: 0;
          }
        }

        @keyframes softLine {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.75;
          }
        }

        .hero-fade-up {
          animation: heroFloatUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-particle {
          animation: particleFloat var(--duration) linear infinite;
          animation-delay: var(--delay);
          opacity: 0;
        }

        .beam-core {
          animation: beamPulse 8s ease-in-out infinite;
          transform-origin: center top;
        }

        .ambient-bloom {
          animation: ambientDrift 12s ease-in-out infinite;
        }

        .scan-line {
          animation: softLine 7s ease-in-out infinite;
        }
      `}</style>

      <main
        className="flex min-h-screen flex-col overflow-hidden antialiased selection:bg-purple-500/30 selection:text-purple-200 pt-32 pb-20 relative perspective-[2000px] items-center justify-start bg-[#03050C]"
        style={{
          maskImage:
            "linear-gradient(180deg, transparent, black 0%, black 30%, transparent)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent, black 0%, black 30%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-20"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(72,94,255,0.18) 0%, rgba(14,19,42,0.04) 35%, rgba(3,5,12,1) 70%)",
          }}
        />

        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 32%, rgba(3,5,12,0.84) 100%)",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025)_0,transparent_58%)]" />

          <div
            className="ambient-bloom absolute left-1/2 top-[-18%] h-[820px] w-[1080px] -translate-x-1/2 rounded-[100%] opacity-50"
            style={{
              background:
                "radial-gradient(circle at center, rgba(99,102,241,0.38) 0%, rgba(30,58,138,0.2) 38%, rgba(15,23,42,0.05) 60%, transparent 72%)",
              filter: "blur(110px)",
            }}
          />

          <div
            className="absolute inset-0 flex justify-center"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
            }}
          >
            <svg
              className="beam-core absolute top-0 h-[860px] w-full max-w-[1200px] opacity-95"
              viewBox="0 0 1000 800"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flare-core-react" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="28%" stopColor="#a5b4fc" stopOpacity="0.55" />
                  <stop offset="62%" stopColor="#4f46e5" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="flare-edge-react" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.5" />
                  <stop offset="45%" stopColor="#4f46e5" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M480,0 Q480,300 0,800 L1000,800 Q520,300 520,0 Z"
                fill="url(#flare-edge-react)"
                style={{ filter: "blur(42px)" }}
              />
              <path
                d="M495,0 Q495,210 250,800 L750,800 Q505,210 505,0 Z"
                fill="url(#flare-core-react)"
                style={{ filter: "blur(18px)" }}
              />
            </svg>

            <div
              className="scan-line absolute top-0 h-[560px] w-[2px] opacity-70"
              style={{
                background: "linear-gradient(to bottom, #ffffff, transparent)",
                filter: "blur(1px)",
              }}
            />
            <div
              className="scan-line absolute top-0 ml-[-42px] h-[430px] w-[1px] opacity-35"
              style={{
                background: "linear-gradient(to bottom, #a5b4fc, transparent)",
                filter: "blur(2px)",
                animationDelay: "0.8s",
              }}
            />
            <div
              className="scan-line absolute top-0 ml-[42px] h-[470px] w-[1px] opacity-35"
              style={{
                background: "linear-gradient(to bottom, #c7d2fe, transparent)",
                filter: "blur(2px)",
                animationDelay: "1.4s",
              }}
            />
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none">
            {particles.map((particle) => (
              <span
                key={particle.id}
                className="hero-particle absolute rounded-full bg-white"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  filter: particle.blur ? `blur(${particle.blur}px)` : "none",
                  ["--duration"]: `${particle.duration}s`,
                  ["--delay"]: `${particle.delay}s`,
                  ["--particle-opacity"]: `${particle.opacity}`,
                  boxShadow:
                    particle.size > 2
                      ? "0 0 10px rgba(255,255,255,0.28)"
                      : "0 0 6px rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          <div
            className="absolute bottom-0 left-1/2 h-[280px] w-[1100px] -translate-x-1/2"
            style={{
              background:
                "radial-gradient(circle at center, rgba(67,97,255,0.16) 0%, rgba(25,31,69,0.07) 38%, transparent 72%)",
              filter: "blur(70px)",
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col items-center text-center max-w-[1000px] px-6 mb-16 hero-fade-up">
          <h1 className="leading-[0.9] bg-clip-text md:text-[92px] text-6xl font-semibold text-transparent tracking-[-0.04em] bg-gradient-to-b from-white via-white to-white/60 mb-8 pt-2 pb-2">
            The new standard for
            <br />
            building software
          </h1>

          <p className="text-[21px] leading-[1.5] text-[#8A8F98] max-w-[640px] mx-auto mb-10 font-normal">
            Meet the system for modern software development.
            Streamline issues, projects, and product roadmaps.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative h-12 px-8 rounded-full bg-white text-black font-medium text-[15px] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/40 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out skew-x-12" />
              <span className="relative z-10 flex items-center gap-2">
                Start building
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>

            <a
              href="#"
              className="group flex items-center gap-2 text-[15px] text-[#8A8F98] hover:text-white transition-colors"
            >
              <span>New: Axis agent for Slack</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M4.5 9L7.5 6L4.5 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div
          className="flex w-full h-[800px] max-w-[1400px] z-10 pt-12 pb-0 relative perspective-[2000px] justify-center"
          style={{
            maskImage: "linear-gradient(180deg, transparent, black 0%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent, black 0%, black 80%, transparent)",
          }}
        >
          <div
            ref={dashboardRef}
            className="dashboard-wrapper absolute top-10 transition-transform duration-500 ease-out hover:scale-[1.02]"
            style={{
              transform: "rotateX(4.73333deg) rotateY(-1.89333deg) rotateZ(1.18333deg)",
              transformStyle: "preserve-3d",
              width: "1100px",
              height: "700px",
            }}
          >
            <div className="dashboard-container w-full h-full rounded-xl bg-[#0F1011] border border-white/10 flex overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] relative">
              <div className="w-[240px] bg-[#0A0A0A] border-r border-white/5 flex flex-col relative z-20">
                <div className="h-14 flex items-center px-5 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-sm" />
                </div>

                <div className="p-3">
                  <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-[#CCC] text-sm font-medium transition-colors">
                    <div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-bold border border-indigo-500/30">
                      O
                    </div>
                    <span>Axis Inc.</span>
                    <span className="ml-auto text-gray-500">⌄</span>
                  </button>
                </div>

                <div className="flex-1 px-3 flex flex-col gap-6 overflow-y-auto py-2">
                  <div className="flex flex-col gap-0.5">
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-white font-medium bg-white/10 rounded-md cursor-pointer shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <span className="text-white">☰</span>
                      <span className="flex-1">Inbox</span>
                      <span className="text-[10px] font-semibold bg-blue-500 text-white px-1.5 py-0.5 rounded-full">
                        4
                      </span>
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <span>◎</span>
                      My Issues
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <span>▤</span>
                      Views
                    </div>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <div className="px-2 text-[10px] font-semibold text-[#444] uppercase tracking-wider mb-1">
                      Favorites
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <div className="w-4 h-4 rounded-sm border border-[#5E6AD2]/30 flex items-center justify-center text-[9px] text-[#5E6AD2] font-bold">
                        R
                      </div>
                      Roadmap 2024
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <div className="w-4 h-4 rounded-sm border border-[#E2B340]/30 flex items-center justify-center text-[#E2B340] font-bold">
                        Q
                      </div>
                      Q4 Goals
                    </div>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <div className="px-2 text-[10px] font-semibold text-[#444] uppercase tracking-wider mb-1">
                      Your Teams
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <span className="w-1.5 h-1.5 rounded bg-[#5E6AD2]" />
                      Core Engine
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <span className="w-1.5 h-1.5 rounded bg-[#4DAF73]" />
                      Platform
                    </div>
                    <div className="px-2 py-1.5 flex items-center gap-2.5 text-sm text-[#888] hover:bg-white/5 hover:text-[#CCC] rounded-md cursor-pointer transition-colors">
                      <span className="w-1.5 h-1.5 rounded bg-[#E2B340]" />
                      Design System
                    </div>
                  </div>
                </div>

                <div className="p-3 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-3 px-2 py-1.5 hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-600 ring-1 ring-white/10" />
                    <div className="text-xs font-medium text-gray-300">Alicia V.</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col bg-[#0F1011] relative z-10">
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0F1011]/100 backdrop-blur-md">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded bg-[#5E6AD2] flex items-center justify-center text-white shadow-[0_0_10px_rgba(94,106,210,0.4)]">
                      ✦
                    </div>
                    <span className="text-[#888]">Core Engine</span>
                    <span className="text-[#444]">/</span>
                    <span className="font-medium text-white">Inbox</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      <div className="w-6 h-6 rounded-full ring-2 ring-[#0F1011] bg-zinc-500 opacity-70" />
                      <div className="w-6 h-6 rounded-full ring-2 ring-[#0F1011] bg-zinc-700 opacity-70" />
                    </div>
                    <button className="h-7 px-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-xs text-[#AAA] transition-colors">
                      Filter
                    </button>
                    <button className="h-7 w-7 bg-[#5E6AD2] hover:bg-[#4b55a8] rounded flex items-center justify-center text-white shadow-[0_0_10px_rgba(94,106,210,0.3)] transition-colors">
                      +
                    </button>
                  </div>
                </div>

                <div className="h-10 border-b border-white/5 flex items-center px-6 gap-6 text-[11px] text-[#666] font-medium tracking-wide bg-[#0A0A0A]/30">
                  <div className="flex items-center gap-2 text-white cursor-pointer hover:text-white transition-colors">
                    <span>≡</span>
                    List
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-[#CCC] transition-colors">
                    <span>▥</span>
                    Board
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer hover:text-[#CCC] transition-colors">
                    <span>◫</span>
                    Calendar
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4DAF73]" />
                    36 active issues
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                  <div className="grid grid-cols-[80px_1fr_100px_100px_100px] px-3 py-2 text-[10px] uppercase font-semibold text-[#555] tracking-wider border-b border-white/5 mb-1">
                    <div>ID</div>
                    <div>Title</div>
                    <div>Priority</div>
                    <div>Status</div>
                    <div className="text-right">Assignee</div>
                  </div>

                  {[
                    {
                      id: "ORB-101",
                      title: "Refactor sync engine",
                      tag: "Core",
                      priority: "High",
                      priorityColor: "#FF5F57",
                      status: "In Progress",
                      statusColor: "#E2B340",
                    },
                    {
                      id: "ORB-102",
                      title: "Design new auth flow",
                      tag: "UX",
                      priority: "Medium",
                      priorityColor: "#E2B340",
                      status: "Review",
                      statusColor: "#5E6AD2",
                    },
                    {
                      id: "ORB-103",
                      title: "Optimize metrics pipeline",
                      tag: "Infra",
                      priority: "High",
                      priorityColor: "#FF5F57",
                      status: "Backlog",
                      statusColor: "#666",
                    },
                    {
                      id: "ORB-104",
                      title: "Update Slack agent actions",
                      tag: "Ops",
                      priority: "Low",
                      priorityColor: "#4DAF73",
                      status: "Done",
                      statusColor: "#4DAF73",
                    },
                    {
                      id: "ORB-105",
                      title: "Consolidate roadmap notes",
                      tag: "PM",
                      priority: "Medium",
                      priorityColor: "#E2B340",
                      status: "In Progress",
                      statusColor: "#E2B340",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.id}
                      className="group grid grid-cols-[80px_1fr_100px_100px_100px] items-center px-3 py-2.5 text-[13px] border-b border-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-md cursor-pointer"
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <div className="font-mono text-[#666] text-xs">{item.id}</div>
                      <div className="text-[#E0E0E0] font-medium flex items-center gap-2">
                        {item.title}
                        <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-[#888] font-normal">
                          {item.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span style={{ color: item.priorityColor }}>↗</span>
                        <span className="text-xs" style={{ color: item.priorityColor }}>
                          {item.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full border flex items-center justify-center"
                          style={{ borderColor: item.statusColor }}
                        >
                          <div
                            className="w-1 h-1 rounded-full"
                            style={{ backgroundColor: item.statusColor }}
                          />
                        </div>
                        <span className="text-xs text-[#BBB]">{item.status}</span>
                      </div>
                      <div className="flex justify-end">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#2A2D35] to-[#5A3A2F] ring-1 ring-white/10" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-y-0 left-[240px] w-px bg-white/[0.03]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}