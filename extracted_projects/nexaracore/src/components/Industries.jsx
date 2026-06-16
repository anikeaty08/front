import React, { useState } from 'react';
import clsx from 'clsx';

const industriesData = {
  healthcare: {
    label: 'Health Care',
    title: 'Health Care',
    desc: 'Compelling medical animations and healthcare explainers. We simplify complex procedures into clear, empathetic visual narratives.',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f278718-4945-48d2-82b9-ba317e8535f8_800w.png',
    glowColor: 'bg-red-600/10',
    borderColor: 'border-red-500/30',
    shadowColor: 'shadow-[0_0_50px_rgba(220,38,38,0.2)]',
    decorBorder1: 'border-red-900/50',
  },
  fintech: {
    label: 'FinTech',
    title: 'FinTech',
    desc: 'High-impact video ads for financial technology products. We transform complex data into engaging stories that build trust.',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8e56a64-7a8b-4604-abff-2cd875b03093_800w.png',
    glowColor: 'bg-orange-600/10',
    borderColor: 'border-orange-500/30',
    shadowColor: 'shadow-[0_0_50px_rgba(249,115,22,0.2)]',
    decorBorder1: 'border-orange-900/50',
  },
  retail: {
    label: 'Retail & eCommerce',
    title: 'Retail & eCommerce',
    desc: 'Product showcases and promotional videos that drive conversions. Stunning visuals that highlight features and inspire purchase.',
    img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11acf8f4-821b-4d2f-b2a4-a8321d5c8b90_800w.png',
    glowColor: 'bg-rose-600/10',
    borderColor: 'border-rose-500/30',
    shadowColor: 'shadow-[0_0_50px_rgba(225,29,72,0.2)]',
    decorBorder1: 'border-rose-900/50',
  }
};

const indKeys = Object.keys(industriesData);

export default function Industries() {
  const [activeTab, setActiveTab] = useState('fintech');
  const activeData = industriesData[activeTab];

  return (
    <section className="bg-[#000000]/80 z-20 border-red-900/20 border-t pt-20 pb-20 relative">
      <div className="container md:px-12 mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-12 text-white">
          Architectures
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap border-b border-red-900/30 mb-12">
          {indKeys.map((key) => {
            const isActive = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={clsx(
                  "px-8 py-4 relative flex items-center gap-2 transition-colors",
                  isActive 
                    ? "text-xs font-medium text-red-400 border-b-2 border-red-500" 
                    : "text-xs font-medium text-zinc-500 hover:text-zinc-300"
                )}
              >
                {isActive && (
                  <div className="bg-gradient-to-t absolute top-0 right-0 bottom-0 left-0 from-red-500/10 via-red-500/0 to-red-500/0 pointer-events-none"></div>
                )}
                <span className="relative flex items-center gap-2 tracking-wide uppercase">
                  {isActive ? (
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-sm"></div>
                  ) : (
                    <div className="w-1 h-1 bg-zinc-600 rounded-sm"></div>
                  )}
                  {industriesData[key].label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Content Panel */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-medium tracking-widest uppercase text-red-400">
              FRAMEWORK FOR:
            </span>
            <h3 className="text-5xl font-medium tracking-tight text-white">{activeData.title}</h3>
            <p className="text-zinc-400 font-light leading-relaxed text-sm max-w-lg">
              {activeData.desc}
            </p>
            <div className="pt-6">
              <button className="btn-gradient px-8 py-3 rounded-xl text-xs font-medium tracking-wide text-white flex items-center gap-2">
                Establish Link
                <iconify-icon icon="solar:alt-arrow-right-linear" class="text-sm"></iconify-icon>
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] flex items-center justify-center">
            <div className={clsx("absolute inset-0 rounded-full blur-[100px]", activeData.glowColor)}></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 skeuo-card-inner rounded-full p-2">
              <img 
                key={activeData.img} 
                src={activeData.img} 
                alt={activeData.title}
                className={clsx("w-full h-full object-cover border rounded-full aura-img", activeData.borderColor, activeData.shadowColor)} 
              />
              <div className="absolute inset-0 aura-overlay rounded-full opacity-60"></div>
              <div className={clsx("absolute inset-0 rounded-full border scale-110 pointer-events-none", activeData.decorBorder1)}></div>
              <div className="border border-red-500/20 rounded-full absolute top-0 right-0 bottom-0 left-0 scale-125 pointer-events-none border-dashed opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}