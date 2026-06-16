import React, { useEffect, useRef, useState } from 'react';

export default function IssueTracking() {
  const visualRef = useRef(null);
  const frameRef = useRef(null);
  const rafRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
useEffect(() => {
  return () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };
}, []);
  const handleMouseMove = (e) => {
    if (!visualRef.current || !frameRef.current) return;
    if (window.innerWidth < 1024) return;

    const rect = visualRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width;
    const py = y / rect.height;

    const rotateY = (px - 0.5) * 10; // subtle horizontal tilt
    const rotateX = (0.5 - py) * 8; // subtle vertical tilt
    const translateX = (px - 0.5) * 12;
    const translateY = (py - 0.5) * 10;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      frameRef.current.style.transform = `
        perspective(1400px)
        rotateX(${15 + rotateX}deg)
        rotateY(${-18 + rotateY}deg)
        rotateZ(8deg)
        translate3d(${translateX}px, ${translateY}px, 0)
        scale(1.05)
      `;
    });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);

    if (!frameRef.current) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      frameRef.current.style.transform = `
        perspective(1400px)
        rotateX(15deg)
        rotateY(-18deg)
        rotateZ(8deg)
        translate3d(0px, 0px, 0)
        scale(1.05)
      `;
    });
  };

  const handleMouseEnter = () => {
    if (window.innerWidth < 1024) return;
    setIsHovering(true);
  };

  return (
    <section className="relative overflow-hidden antialiased selection:bg-white/20 bg-[#050505] py-32 border-t border-white/5">
      {/* Noise BG */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 min-h-[600px]">
        {/* Left Content */}
        <div className="w-full lg:w-5/12 z-20 relative reveal-left active">
          <div className="flex items-center gap-3 text-gray-400 mb-6 font-medium text-sm tracking-wide opacity-80">
            <span>v2.0</span>
            <span>Issue Tracking</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] text-white mb-6">
            Put engineering workflows on autopilot
          </h2>

          <p className="text-lg text-[#8A8F98] leading-relaxed mb-10 max-w-md">
            Optimized for speed and efficiency. Create tasks in seconds,
            discuss issues in context, and breeze through your work in views
            tailored to you and your team.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
              Start building
              <iconify-icon
                icon="solar:arrow-right-linear"
                className="text-lg"
              ></iconify-icon>
            </button>

            <button className="bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
              Read the docs
            </button>
          </div>
        </div>

        {/* Right Content / Floating Cards */}
        <div
          ref={visualRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 lg:left-[40%] z-10 flex items-center justify-center opacity-30 lg:opacity-100 overflow-hidden lg:overflow-visible pointer-events-none lg:pointer-events-auto"
        >
          <div
            ref={frameRef}
            className="relative w-[1000px] h-[800px] reveal-right delay-200 active transition-transform duration-500 ease-out will-change-transform"
            style={{
              transformStyle: 'preserve-3d',
              transform:
                'perspective(1400px) rotateX(15deg) rotateY(-18deg) rotateZ(8deg) scale(1.05)',
            }}
          >
            {/* Ambient glow */}
            <div
              className={`absolute inset-[18%] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${
                isHovering ? 'opacity-100' : 'opacity-60'
              }`}
              style={{
                background:
                  'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0) 70%)',
                transform: 'translateZ(-120px)',
              }}
            />

            {/* Card 1 */}
            <div
              className="absolute bg-[#111113]/80 backdrop-blur-md border border-white/[0.06] rounded-2xl p-4 w-[360px] shadow-2xl transition-transform duration-500 ease-out"
              style={{
                top: '5%',
                left: '0%',
                filter: 'blur(4px)',
                opacity: 0.6,
                transform: 'translateZ(-50px)',
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-xs font-medium tracking-wide">
                  DEV-1042
                </span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                  <iconify-icon
                    icon="solar:user-linear"
                    className="text-gray-400 text-[10px]"
                  ></iconify-icon>
                </div>
              </div>
              <p className="text-gray-300 text-sm font-medium mb-4">
                Reduce primary API latency
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="absolute bg-[#111113]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 w-[400px] shadow-2xl transition-transform duration-500 ease-out"
              style={{
                top: '22%',
                left: '15%',
                filter: 'blur(0px)',
                zIndex: 10,
                transform: isHovering ? 'translateZ(26px)' : 'translateZ(0px)',
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-xs font-medium tracking-wide">
                  DEV-1043
                </span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                  <iconify-icon
                    icon="solar:user-linear"
                    className="text-gray-400 text-[10px]"
                  ></iconify-icon>
                </div>
              </div>
              <p className="text-gray-200 text-base font-medium mb-5">
                Implement global caching layer
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-white/5 border border-white/5 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <iconify-icon
                    icon="solar:menu-dots-bold"
                    className="text-gray-500 text-[10px]"
                  ></iconify-icon>
                </div>
                <div className="bg-[#1c1414] border border-red-500/20 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)]"></span>
                  <span className="text-gray-400 text-xs font-medium">
                    Infrastructure
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="absolute bg-[#111113]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 w-[420px] shadow-2xl transition-transform duration-500 ease-out"
              style={{
                top: '45%',
                left: '25%',
                filter: 'blur(0.5px)',
                zIndex: 9,
                transform: isHovering ? 'translateZ(18px)' : 'translateZ(0px)',
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-500 text-xs font-medium tracking-wide">
                  DEV-091
                </span>
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                  <iconify-icon
                    icon="solar:user-linear"
                    className="text-gray-400 text-[10px]"
                  ></iconify-icon>
                </div>
              </div>
              <p className="text-gray-200 text-base font-medium mb-5">
                Fix dashboard hydration errors
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-white/5 border border-white/5 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <iconify-icon
                    icon="solar:menu-dots-bold"
                    className="text-gray-500 text-[10px]"
                  ></iconify-icon>
                </div>
                <div className="bg-[#1c1414] border border-red-500/20 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.6)]"></span>
                  <span className="text-gray-400 text-xs font-medium">Bug</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="absolute bg-[#111113]/80 backdrop-blur-md border border-white/[0.04] rounded-2xl p-4 w-[380px] shadow-2xl transition-transform duration-500 ease-out"
              style={{
                top: '8%',
                left: '65%',
                filter: 'blur(5px)',
                opacity: 0.5,
                transform: 'translateZ(-80px)',
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-xs font-medium tracking-wide">
                  DEV-2201
                </span>
              </div>
              <p className="text-gray-300 text-sm font-medium mb-4">
                Deprecate legacy v1 endpoints
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-white/5 border border-white/5 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-green-500"></span>
                  <span className="text-gray-400 text-xs">Maintenance</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="absolute bg-[#111113]/80 backdrop-blur-md border border-white/[0.05] rounded-2xl p-4 w-[340px] shadow-2xl transition-transform duration-500 ease-out"
              style={{
                top: '28%',
                left: '75%',
                filter: 'blur(2px)',
                opacity: 0.8,
                transform: isHovering ? 'translateZ(-6px)' : 'translateZ(-20px)',
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-xs font-medium tracking-wide">
                  DSGN-405
                </span>
              </div>
              <p className="text-gray-200 text-sm font-medium mb-4">
                Update core component library
              </p>
              <div className="flex items-center gap-2">
                <div className="bg-[#1a1712] border border-yellow-500/20 rounded-md px-2 py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_6px_rgba(234,179,8,0.5)]"></span>
                  <span className="text-gray-400 text-xs font-medium">
                    Design System
                  </span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="absolute bg-[#111113]/70 backdrop-blur-sm border border-white/[0.03] rounded-2xl p-4 w-[320px] shadow-xl transition-transform duration-500 ease-out"
              style={{
                top: '50%',
                left: '82%',
                filter: 'blur(6px)',
                opacity: 0.4,
                transform: 'translateZ(-100px)',
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 text-xs font-medium tracking-wide">
                  DEV-330
                </span>
              </div>
              <p className="text-gray-400 text-sm font-medium">
                Memory leak in background worker
              </p>
            </div>

            {/* Card 7 */}
            <div
              className="absolute bg-transparent p-4 w-[400px] transition-transform duration-500 ease-out"
              style={{
                top: '70%',
                left: '40%',
                filter: 'blur(8px)',
                opacity: 0.3,
                transform: 'translateZ(-90px)',
              }}
            >
              <span className="text-gray-600 text-xs font-medium tracking-wide block mb-2">
                DEV-401
              </span>
              <p className="text-gray-400 text-sm font-medium">
                Unhandled Promise Rejection
              </p>
            </div>

            {/* Card 8 */}
            <div
              className="absolute bg-transparent p-4 w-[300px] transition-transform duration-500 ease-out"
              style={{
                top: '35%',
                left: '-25%',
                filter: 'blur(6px)',
                opacity: 0.3,
                transform: 'translateZ(-70px)',
              }}
            >
              <p className="text-gray-300 text-sm font-medium mb-3">
                Refactor authentication flow
              </p>
              <div className="bg-[#12141c] border border-blue-500/20 rounded-md px-2 py-1 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-gray-400 text-xs">Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}