import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Reveal } from '../components/Reveal';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Community() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-24">
      <Reveal className="mb-20">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-900/40 via-black to-purple-900/40 border border-white/10 p-12 text-center flex flex-col items-center">
          <Reveal delay={100} direction="up" width="w-auto">
            <iconify-icon icon="solar:users-group-two-rounded-bold" class="text-6xl text-blue-400 mb-6"></iconify-icon>
          </Reveal>
          
          <Reveal 
            text="Join the Community" 
            as="h1" 
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4" 
            width="w-auto" 
          />
          
          <Reveal delay={300} direction="up" width="w-auto">
            <p className="text-xl text-framer-muted max-w-2xl mb-8">
              Connect with thousands of designers and developers. Share your work, get feedback, and learn new tricks.
            </p>
          </Reveal>
          <Reveal delay={400} direction="up" width="w-auto">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Join Discord
            </button>
          </Reveal>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal delay={100} direction="up">
          <div className="bg-framer-panel border border-white/[0.06] rounded-2xl p-8 text-center h-full">
            <div className="text-4xl font-bold text-white mb-2">150k+</div>
            <div className="text-framer-muted">Active Members</div>
          </div>
        </Reveal>
        
        <Reveal delay={200} direction="up">
          <div className="bg-framer-panel border border-white/[0.06] rounded-2xl p-8 text-center h-full">
            <div className="text-4xl font-bold text-white mb-2">5,000+</div>
            <div className="text-framer-muted">Templates Created</div>
          </div>
        </Reveal>

        <Reveal delay={300} direction="up">
          <div className="bg-framer-panel border border-white/[0.06] rounded-2xl p-8 text-center h-full">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-framer-muted">Community Support</div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}