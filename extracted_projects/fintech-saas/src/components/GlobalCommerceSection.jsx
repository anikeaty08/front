import React, { useEffect, useRef, useState } from "react";

// --- Custom Animated Text Component ---
const AnimatedHeading = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = [
    { text: "The", delay: 0 },
    { text: "backbone", delay: 50, break: true },
    { text: "of", delay: 100 },
    { text: "global", delay: 150 },
    { text: "commerce", delay: 200 },
  ];

  return (
    <h1
      ref={ref}
      className="text-4xl md:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mx-auto max-w-3xl"
      style={{ color: "#0a2540" }}
    >
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden align-top mr-[0.25em] pb-[0.1em]">
            <span
              className={`inline-block transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "translate-y-0" : "translate-y-[110%]"
              }`}
              style={{ transitionDelay: `${w.delay}ms` }}
            >
              {w.text}
            </span>
          </span>
          {w.break && <br />}
        </React.Fragment>
      ))}
    </h1>
  );
};

// --- Custom Scroll-Triggered Counter Component ---
const Counter = ({ target, decimals = 0, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2000;
    let animationId;
    let hasAnimated = false;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuad
      const easeProgress = progress * (2 - progress);
      setValue(easeProgress * target);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animationId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [target]);

  const formatted =
    value >= target - 0.001
      ? target.toFixed(decimals)
      : value.toFixed(decimals);

  return <span ref={ref}>{formatted}{suffix}</span>;
};

// --- Main Component ---
export default function GlobalCommerceSection() {
  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const isPausedRef = useRef(isPaused);

  // Keep ref in sync for the animation loop
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  // Canvas Logic translated from Vanilla JS
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    let width, height;
    let rays = [];
    const numRays = 400;
    let animationFrameId;

    let mouse = { x: -1000, y: -1000, active: false };

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initRays();
    }

    class Ray {
      constructor() {
        this.originX = width / 2;
        this.originY = height + 50;
        // Spread slightly more than 180 degrees
        this.angle = Math.PI + Math.random() * Math.PI * 1.2 - Math.PI * 0.1;
        this.baseLength = Math.random() * (height * 0.8) + height * 0.2;
        this.currentLength = 0;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.005 + Math.random() * 0.01;
        this.vx = 0;
        this.vy = 0;
        this.baseEndX = this.originX + Math.cos(this.angle) * this.baseLength;
        this.baseEndY = this.originY + Math.sin(this.angle) * this.baseLength;
        this.endX = this.baseEndX;
        this.endY = this.baseEndY;
      }

      update(time) {
        if (isPausedRef.current) return;

        const breath = Math.sin(time * this.speed + this.phase) * 15;
        const animatedBaseLength = this.baseLength + breath;

        this.baseEndX = this.originX + Math.cos(this.angle) * animatedBaseLength;
        this.baseEndY = this.originY + Math.sin(this.angle) * animatedBaseLength;

        if (this.currentLength < animatedBaseLength) {
          this.currentLength += (animatedBaseLength - this.currentLength) * 0.05;
        }

        let px = this.originX + Math.cos(this.angle) * this.currentLength;
        let py = this.originY + Math.sin(this.angle) * this.currentLength;

        if (mouse.active) {
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const interactionRadius = 150;

          if (distance < interactionRadius) {
            const force = (interactionRadius - distance) / interactionRadius;
            const pushAngle = Math.atan2(dy, dx);
            const pushFactor = 8;
            this.vx -= Math.cos(pushAngle) * force * pushFactor;
            this.vy -= Math.sin(pushAngle) * force * pushFactor;
          }
        }

        const spring = 0.08;
        const friction = 0.85;

        this.vx += (this.baseEndX - this.endX) * spring;
        this.vy += (this.baseEndY - this.endY) * spring;

        this.vx *= friction;
        this.vy *= friction;

        this.endX += this.vx;
        this.endY += this.vy;

        if (!mouse.active && Math.abs(this.vx) < 0.1 && Math.abs(this.vy) < 0.1) {
          this.endX = px;
          this.endY = py;
        }
      }

      draw() {
        const gradient = ctx.createLinearGradient(
          this.originX,
          this.originY,
          this.endX,
          this.endY
        );
        gradient.addColorStop(0, "rgba(251, 191, 36, 0.4)");
        gradient.addColorStop(0.5, "rgba(96, 165, 250, 0.3)");
        gradient.addColorStop(1, "rgba(37, 99, 235, 0.6)");

        ctx.beginPath();
        ctx.moveTo(this.originX, this.originY);
        ctx.lineTo(this.endX, this.endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.endX, this.endY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(37, 99, 235, 0.8)";
        ctx.fill();
      }
    }

    function initRays() {
      rays = [];
      for (let i = 0; i < numRays; i++) {
        rays.push(new Ray());
      }
    }

    function animate(time) {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const bgGradient = ctx.createRadialGradient(
        width / 2, height, 0,
        width / 2, height, height
      );
      bgGradient.addColorStop(0, "rgba(253, 230, 138, 0.2)");
      bgGradient.addColorStop(0.5, "rgba(191, 219, 254, 0.15)");
      bgGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      rays
        .sort((a, b) => b.baseLength - a.baseLength)
        .forEach((ray) => {
          ray.update(time);
          ray.draw();
        });

      animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resize);
    resize();
    animationFrameId = requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getTextColor = (idx) => {
    if (hoverIndex === idx) return "text-[#0a2540]";
    if (idx === 0) return "text-[#0a2540]";
    if (idx === 1) return "text-slate-600";
    return "text-slate-400";
  };

  const stats = [
    { target: 135, suffix: "+", desc: "currencies and payment methods supported" },
    { prefix: "US$", target: 1.9, decimals: 1, suffix: "tn", desc: "in payments volume processed in 2025" },
    { target: 99.999, decimals: 3, suffix: "%", desc: "historical uptime for Stripe services" },
    { target: 200, suffix: "M+", desc: "active subscriptions managed on Stripe Billing" },
  ];

  return (
    <section className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <main className="relative max-w-6xl mx-auto border-x border-slate-200 min-h-screen flex flex-col pt-32">
        {/* Corner Squares */}
        <div className="absolute top-0 -left-[3px] w-1.5 h-1.5 bg-slate-200"></div>
        <div className="absolute top-0 -right-[3px] w-1.5 h-1.5 bg-slate-200"></div>
        <div className="absolute bottom-0 -left-[3px] w-1.5 h-1.5 bg-slate-200 z-20"></div>
        <div className="absolute bottom-0 -right-[3px] w-1.5 h-1.5 bg-slate-200 z-20"></div>

        {/* Hero Heading */}
        <section className="px-6 md:px-12 pb-24 text-center z-10 relative">
          <AnimatedHeading />
        </section>

        {/* Stats Section */}
        <section className="relative z-10 bg-white">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200"></div>
          
          {/* Dynamic Gradient Line */}
          <div
            className={`absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full md:w-1/4 transition-all duration-500 ease-out pointer-events-none ${
              hoverIndex !== null ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: `translateX(${hoverIndex !== null ? hoverIndex * 100 : 0}%)`,
            }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center relative">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                className="py-12 px-6 flex flex-col items-center justify-center cursor-default transition-colors duration-300 hover:bg-slate-50/50"
              >
                <div
                  className={`text-4xl md:text-5xl font-medium tracking-tight mb-2 flex items-baseline justify-center transition-colors duration-300 ${getTextColor(idx)}`}
                >
                  {stat.prefix && (
                    <span className="text-3xl md:text-4xl mr-0.5 font-normal text-slate-500">
                      {stat.prefix}
                    </span>
                  )}
                  <Counter
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm text-slate-500 font-normal leading-relaxed max-w-[180px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-slate-200"></div>
        </section>

        {/* Visualization Section */}
        <section
          className="relative flex-grow flex flex-col overflow-hidden min-h-[600px]"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 100%, rgba(253, 230, 138, 0.4) 0%, rgba(191, 219, 254, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          {/* Controls */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-8 h-8 rounded bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white transition-colors shadow-sm cursor-pointer"
              aria-label="Pause Animation"
            >
              <iconify-icon
                icon={isPaused ? "solar:play-linear" : "solar:pause-linear"}
                width="16"
                height="16"
                strokeWidth="1.5"
              ></iconify-icon>
            </button>
            <button
              className="w-8 h-8 rounded bg-white/80 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-white transition-colors shadow-sm cursor-pointer"
              aria-label="Toggle Theme"
            >
              <iconify-icon
                icon="solar:sun-linear"
                width="18"
                height="18"
                strokeWidth="1.5"
              ></iconify-icon>
            </button>
          </div>

          {/* Canvas Container */}
          <div className="absolute inset-0 z-10 w-full h-full flex items-end justify-center pointer-events-auto cursor-crosshair">
            <canvas ref={canvasRef} className="w-full h-full block"></canvas>
          </div>

          {/* Ambient glow at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </section>
      </main>
    </section>
  );
}