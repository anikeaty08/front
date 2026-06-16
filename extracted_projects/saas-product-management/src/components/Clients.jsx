import React from 'react';

export default function Clients() {
  const logos = [
    { text: "OpenAI", font: "font-sans", bold: true, size: "text-2xl" },
    { prefix: "$", text: "Cash App", font: "", bold: true, size: "text-2xl", hasPrefix: true },
    { text: "scale", font: "font-sans", bold: false, size: "text-3xl", weight: "font-medium" },
    { text: "ramp", font: "", bold: true, size: "text-2xl", lower: true, hasSvg: true, svgPath: "M2 18h6c0-5 4-9 9-9h5V6h-5C9 6 2 13 2 18z" },
  ];

  const bottomLogos = [
    { text: "Vercel", icon: "simple-icons:vercel", size: "text-2xl", weight: "font-bold" },
    { text: "coinbase", icon: null, font: "font-sans", size: "text-2xl", weight: "font-bold" },
    { text: "BOOM", icon: "simple-icons:boom", size: "text-2xl", weight: "font-bold", upper: true, tracking: "tracking-widest" },
    { text: "CURSOR", icon: "simple-icons:cursor", size: "text-2xl", weight: "font-bold", upper: true },
  ];

  const renderTopSet = () => (
    <>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <span className="text-2xl font-semibold text-white font-sans tracking-tight">OpenAI</span>
      </div>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <div className="w-8 h-8 bg-white rounded-[6px] flex items-center justify-center text-black font-bold text-lg leading-none">$</div>
          <span className="text-2xl font-semibold text-white tracking-tight">Cash App</span>
      </div>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <span className="text-3xl font-medium text-white font-sans tracking-tight">scale</span>
      </div>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <span className="text-2xl font-semibold text-white tracking-tight lowercase">ramp</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path d="M2 18h6c0-5 4-9 9-9h5V6h-5C9 6 2 13 2 18z"></path></svg>
      </div>
    </>
  );

  const renderBottomSet = () => (
    <>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M12 1L24 22H0L12 1Z"></path></svg>
          <span className="text-2xl font-bold text-white tracking-tight">Vercel</span>
      </div>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <span className="text-2xl font-bold text-white tracking-tight font-sans">coinbase</span>
      </div>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white"><path d="M12 2l2 8 8 2-8 2-2 8-2-8-8-2 8-2 2-8z" fill="white"></path></svg>
          <span className="text-2xl font-bold text-white tracking-widest uppercase">BOOM</span>
      </div>
      <div className="client-logo flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-6 h-6"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.8 4.5 8 12 4.2zM4 9.3l7 3.5v7.4l-7-3.5V9.3zm9 10.9v-7.4l7-3.5v7.4l-7 3.5z"></path></svg>
          <span className="text-2xl font-bold text-white tracking-tight uppercase">CURSOR</span>
      </div>
    </>
  );

  return (
    <div className="clients-section overflow-hidden z-10 bg-[#000000] w-full pt-24 pb-24 relative">
      <div className="clients-header text-center mb-20 px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Powering the world’s best product teams.</h2>
          <p className="text-lg md:text-xl text-[#8A8F98] font-normal leading-relaxed">From next-gen startups to established enterprises.</p>
      </div>

      <div className="ticker-row w-full overflow-hidden flex mb-16 relative reveal delay-100" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
          <div className="track track-right flex items-center gap-24 w-max">
              {renderTopSet()}
              {renderTopSet()}
              {renderTopSet()}
          </div>
      </div>

      <div className="ticker-row flex w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
          <div className="track track-left flex items-center gap-24 w-max">
              {renderBottomSet()}
              {renderBottomSet()}
              {renderBottomSet()}
          </div>
      </div>
    </div>
  );
}