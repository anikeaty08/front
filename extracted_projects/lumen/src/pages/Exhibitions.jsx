import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const exhibitions = [
  {
    id: 1,
    year: "2024",
    status: "Upcoming",
    title: "Shadow & Form",
    location: "Tate Modern, London",
    dates: "Oct 12 - Nov 30",
    description: "A comprehensive retrospective of concrete architecture across Europe, featuring unprecedented large-format silver gelatin prints."
  },
  {
    id: 2,
    year: "2024",
    status: "Current",
    title: "Nordic Silence",
    location: "Fotografiska, Stockholm",
    dates: "Aug 01 - Oct 05",
    description: "An immersive audio-visual exhibition pairing minimalist landscapes with ambient soundscapes designed by local artists."
  },
  {
    id: 3,
    year: "2023",
    status: "Past",
    title: "The Human Gaze",
    location: "MoMA PS1, New York",
    dates: "Mar 15 - May 20",
    description: "Critically acclaimed portrait series exploring emotional vulnerability, presented in custom light-boxes."
  },
  {
    id: 4,
    year: "2022",
    status: "Past",
    title: "Light Fragments",
    location: "Tokyo Photographic Art Museum",
    dates: "Sep 10 - Nov 15",
    description: "Early experimental works involving long exposures, refractions, and kinetic lighting techniques."
  }
];

export default function Exhibitions() {
  return (
    <div className="min-h-screen pt-24 pb-32 border-b border-black/10">
      <div className="px-6 md:px-12 mb-16 md:mb-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-zinc-900">
          Exhibitions
        </h1>
        <p className="max-w-xl text-zinc-500 leading-relaxed md:text-lg">
          Physical spaces where prints breathe. Join us for upcoming gallery shows, immersive installations, and artist talks around the globe.
        </p>
      </div>

      <div className="border-t border-black/10 border-b">
        {exhibitions.map((exhibition) => (
          <div key={exhibition.id} className="group grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-12 border-b border-black/10 last:border-0 hover:bg-black/5 transition-colors cursor-pointer items-start">
            
            {/* Year & Status */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <span className="text-2xl font-mono font-light text-black/80">{exhibition.year}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 w-max border rounded ${
                exhibition.status === 'Upcoming' ? 'border-sky-500/30 text-sky-600 bg-sky-500/10' :
                exhibition.status === 'Current' ? 'border-emerald-500/30 text-emerald-600 bg-emerald-500/10' :
                'border-black/10 text-black/40'
              }`}>
                {exhibition.status}
              </span>
            </div>

            {/* Title & Description */}
            <div className="md:col-span-6 flex flex-col pr-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900 group-hover:text-sky-600 transition-colors">
                {exhibition.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-lg">
                {exhibition.description}
              </p>
            </div>

            {/* Location & Details */}
            <div className="md:col-span-3 flex flex-col gap-1 justify-center md:pt-2">
              <p className="font-semibold text-zinc-900">{exhibition.location}</p>
              <p className="text-sm text-zinc-500">{exhibition.dates}</p>
            </div>

            {/* Action */}
            <div className="md:col-span-1 flex justify-end md:justify-center md:pt-2 hidden md:flex">
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white group-hover:border-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 stroke-[1.5]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}