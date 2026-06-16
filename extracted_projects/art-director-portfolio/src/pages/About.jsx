import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-32 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8">
          Designing with purpose.
        </h1>
        <p className="text-xl md:text-2xl text-[#737373] font-light leading-relaxed max-w-2xl mx-auto">
          I'm Julian Vance, a multidisciplinary designer based in Singapore. I believe in the power of minimal, functional, and aesthetically pleasing design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
        <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/ae856dba-7305-4ac2-b14a-aa6b93966d3d/800w.png" 
            alt="Julian Working" 
            className="w-full aspect-[4/5] object-cover grayscale"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-3xl font-medium tracking-tight mb-4">My Approach</h3>
            <p className="text-[#737373] leading-relaxed">
              Every project starts with understanding the core problem. I strip away the unnecessary to reveal the essential, combining editorial typography with intuitive user experiences.
            </p>
          </div>
          <div className="w-full h-px bg-black/5"></div>
          <div>
            <h3 className="text-3xl font-medium tracking-tight mb-4">Capabilities</h3>
            <div className="flex flex-wrap gap-3">
              {['Art Direction', 'UI/UX Design', 'Brand Identity', 'Prototyping', 'Design Systems', '3D Motion'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-white border border-black/10 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}