import React from 'react';

const ContentSection = () => {
  return (
    <section className="md:px-12 md:py-32 text-stone-800 bg-[#EAE8E2] w-full pt-20 pr-6 pb-20 pl-6 relative">
      {/* Section Tag */}
      <div className="mb-12 border-b border-stone-300/50 pb-6 md:mb-24 reveal-item">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
          <span className="tracking-tighter font-sans">// Because true power is intelligent foresight.</span>
          <button className="rounded-full border border-stone-400/30 p-2 hover:bg-stone-200 transition-colors">
            <iconify-icon icon="solar:arrow-left-linear" className="text-lg"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">
        {/* Left Column: Image */}
        <div className="flex flex-col gap-4 lg:col-span-4 lg:mt-24 reveal-item delay-100">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c8f3560-bcc7-441d-9d12-6eb2fbb9aeea_800w.webp" 
              alt="Architecture" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
            <span className="tracking-tighter font-sans">[01] Global Research Hub</span>
            <span className="tracking-tighter font-sans">©2025</span>
          </div>
        </div>

        {/* Right Column Area */}
        <div className="flex flex-col gap-20 lg:col-span-8">
          {/* Big Paragraph */}
          <p className="leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15] text-3xl font-light text-stone-900 tracking-tighter font-dm-sans reveal-item delay-200">
            At <span className="font-dm-sans font-light tracking-tighter">Etheria</span>, we see artificial intelligence as the ultimate architect of the future. Every element of our approach, from neural architecture to strategic implementation, is curated for impact.
          </p>

          {/* Sub Grid: Image + Text/Stats */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Middle Image */}
            <div className="flex flex-col gap-4 reveal-item delay-300">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f6c82f7-e18c-4dc9-82dc-96bb615bfa30_800w.webp" 
                  alt="Therapy Room" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
                <span className="tracking-tighter font-sans">[02] Neural Lab</span>
                <span className="tracking-tighter font-sans">©2025</span>
              </div>
            </div>

            {/* Right Text & Stats */}
            <div className="flex flex-col justify-between py-4">
              <div className="space-y-8 reveal-item delay-400">
                <p className="leading-relaxed text-lg text-stone-600 tracking-tighter font-sans">
                  We work with visionaries who embrace the transformative power of machine learning, those who value precision over noise, and believe that the future lives in the intelligence of their data.
                </p>
                <div className="flex gap-1 text-stone-400">
                  <iconify-icon icon="solar:star-linear" className="text-xs"></iconify-icon>
                  <iconify-icon icon="solar:star-linear" className="text-xs"></iconify-icon>
                  <iconify-icon icon="solar:star-linear" className="text-xs"></iconify-icon>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-end justify-between border-t border-stone-300/50 pt-12 reveal-item delay-500">
                <div className="flex gap-12">
                  <div>
                    <span className="text-5xl text-stone-900 font-dm-sans font-light tracking-tighter">96%</span>
                    <p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter font-sans">Model Accuracy</p>
                  </div>
                  <div>
                    <span className="text-5xl text-stone-900 font-dm-sans font-light tracking-tighter">99%</span>
                    <p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter font-sans">Deployment Success</p>
                  </div>
                </div>
                <button className="rounded-full border border-stone-400/30 p-3 hover:bg-stone-200 transition-colors">
                  <iconify-icon icon="solar:arrow-right-linear" className="text-xl"></iconify-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners */}
      <div className="reveal-item delay-200 border-stone-300/50 border-t mt-24 pt-12">
        <p className="uppercase text-xs text-stone-400 tracking-tighter font-sans mb-8">Trusted by teams at</p>
        <div className="group relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <div className="flex shrink-0 animate-scroll items-center gap-12 pr-12 opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
            <iconify-icon icon="logos:google" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:openai" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:microsoft" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:stripe" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:anthropic" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:linear" width="96" height="30"></iconify-icon>
          </div>
          <div className="flex shrink-0 animate-scroll items-center gap-12 pr-12 opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0" aria-hidden="true">
            <iconify-icon icon="logos:google" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:openai" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:microsoft" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:stripe" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:anthropic" width="96" height="30"></iconify-icon>
            <iconify-icon icon="logos:linear" width="96" height="30"></iconify-icon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;