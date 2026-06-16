import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Awards() {
  return (
    <section className="border-b border-black/10">
      <div className="px-6 md:px-12 py-16 flex items-end justify-between border-b border-black/10">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tighter uppercase text-zinc-900">
          Recognition
        </h2>
        <a href="#" className="px-6 py-3 border text-sm font-medium transition-colors flex items-center gap-2 mb-2 border-black/20 hover:bg-black hover:text-white">
          Press Kit
          <iconify-icon icon="solar:arrow-right-linear" class="text-lg"></iconify-icon>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/10">
        
        <div className="group transition-colors cursor-pointer hover:bg-black/5 pt-8 pr-8 pb-8 pl-8">
          <div className="flex h-40 border-b mb-6 items-center justify-center border-black/10">
            <iconify-icon icon="solar:cup-star-bold-duotone" class="text-6xl group-hover:scale-110 transition-transform duration-300 text-zinc-800"></iconify-icon>
          </div>
          <p className="text-[10px] font-bold uppercase mb-2 text-sky-600">Sony World</p>
          <h3 className="leading-tight transition-colors text-xl font-semibold mb-6 text-zinc-900">Photographer of the Year 2023</h3>
          <div className="flex items-center text-xs font-medium group-hover:text-black transition-colors text-black/50">
            View Gallery
            <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>

        <div className="group transition-colors cursor-pointer hover:bg-black/5 pt-8 pr-8 pb-8 pl-8">
          <div className="h-40 flex items-center justify-center border-b mb-6 border-black/10">
            <iconify-icon icon="solar:medal-star-bold-duotone" class="text-6xl group-hover:scale-110 transition-transform duration-300 text-zinc-800"></iconify-icon>
          </div>
          <p className="text-[10px] font-bold uppercase mb-2 text-sky-600">National Geographic</p>
          <h3 className="leading-tight transition-colors text-xl font-semibold mb-6 text-zinc-900">Best Storytelling</h3>
          <div className="flex items-center text-xs font-medium group-hover:text-black transition-colors text-black/50">
            Read more
            <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>

        <div className="p-8 group transition-colors cursor-pointer hover:bg-black/5">
          <div className="h-40 flex items-center justify-center border-b mb-6 border-black/10">
            <iconify-icon icon="solar:verified-check-bold-duotone" class="text-6xl group-hover:scale-110 transition-transform duration-300 text-zinc-800"></iconify-icon>
          </div>
          <p className="text-[10px] font-bold uppercase mb-2 text-sky-600">Magnum Photos</p>
          <h3 className="leading-tight transition-colors text-xl font-semibold mb-6 text-zinc-900">Nominee Member 2022</h3>
          <div className="flex items-center text-xs font-medium group-hover:text-black transition-colors text-black/50">
            Read more
            <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>

        <div className="p-8 group transition-colors cursor-pointer hover:bg-black/5">
          <div className="h-40 flex items-center justify-center border-b mb-6 border-black/10">
            <iconify-icon icon="solar:gallery-favourite-bold-duotone" class="text-6xl group-hover:scale-110 transition-transform duration-300 text-zinc-800"></iconify-icon>
          </div>
          <p className="text-[10px] font-bold uppercase mb-2 text-sky-600">LensCulture</p>
          <h3 className="leading-tight transition-colors text-xl font-semibold mb-6 text-zinc-900">Black & White Awards</h3>
          <div className="flex items-center text-xs font-medium group-hover:text-black transition-colors text-black/50">
            View List
            <ChevronRight className="w-3 h-3 ml-1" />
          </div>
        </div>

      </div>
    </section>
  );
}