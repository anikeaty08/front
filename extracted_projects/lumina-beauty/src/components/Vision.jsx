import React, { useEffect, useRef, useState } from 'react';

export default function Vision() {
  const [angle, setAngle] = useState(0);
  const reqRef = useRef();

  useEffect(() => {
    const animate = () => {
      setAngle(prev => prev - 0.0015);
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, []);

  const galleryImages = [
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ee26890-9bd9-4d93-8f94-048b2990e311_800w.webp",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/ee0cdf72-e975-4b8b-953b-bbc16f19091f/800w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/cc3d2108-b362-49c8-be76-9151dbe6bb4f/800w.png",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/9ed48c1f-0acf-4b10-8e06-fac0110fc4e9/800w.png",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/481dd8ea-7f5b-47db-bc09-6483cf2b1d89_800w.webp",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fedcf01-f4f0-4345-b582-f147431b175b_800w.webp",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a3fc9d01-917d-4f83-a4e0-a8c88159ce4c/800w.png",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a933fdc6-e5b0-49ff-b6f7-d7d2ce86436e_800w.webp",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/a3170edf-d122-41fe-a8cc-c921d6ba0c80/800w.png",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7fd7752f-00a8-4838-bb0a-6248ef01545b/800w.png",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63813241-51b1-4e36-a62f-b31896215806_800w.webp",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04522e44-7cdb-447b-a8d1-5b07b9220c3b_800w.webp"
  ];
  
  const radius = window.innerWidth < 768 ? 280 : 600;

  return (
    <section id="vision" className="relative pb-32 bg-[#EBECE7]">
      {/* Block 1: Rotating Cards */}
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-32 border-t border-zinc-200/50">
        <div className="text-black/50 relative z-10">Our heritage</div>
        
        <div className="relative w-full h-[600px] mt-12 mb-20 pointer-events-none perspective-[800px]">
          {galleryImages.map((imgUrl, i) => {
            const currentAngle = angle + (i / galleryImages.length) * Math.PI * 2;
            const x = Math.cos(currentAngle) * radius;
            const y = Math.sin(currentAngle) * radius;
            const rotation = (currentAngle * 180) / Math.PI + 90;

            return (
              <div 
                key={i}
                className="absolute top-1/2 left-1/2 w-40 md:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-white border border-white/80"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                <img src={imgUrl} alt="Beauty Evolution" className="w-full h-full object-cover" />
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center z-10 bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-sm border border-white">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">The daily ritual of beauty has remained manual for centuries. Until now.</h3>
        </div>
      </div>

      {/* Block 2: Hero Image Reveal */}
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-32 border-t border-zinc-200/50">
        <div className="text-black/50">The Turning Point</div>
        
        <div className="w-full max-w-6xl mx-auto px-6 aspect-[4/3] md:aspect-video rounded-[2.5rem] overflow-hidden my-16 shadow-2xl relative bg-white group cursor-pointer border border-white/50">
          <div className="absolute inset-0 bg-zinc-900/5 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none mix-blend-overlay"></div>
          <img 
            className="w-full h-full object-cover scale-105 transition-transform duration-[10s] group-hover:scale-100"
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fdb9443-dc20-4662-a14d-fcb09662d0d1_1600w.webp"
            alt="AI entering personal care"
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center z-10">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">As AI moves from pixels to atoms, a new era of consumer robotics in personal care begins.</h3>
        </div>
      </div>

      {/* Block 3: Grid Layout */}
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-32 border-t border-zinc-200/50">
        <div className="text-black/50">Our Vision</div>
        
        <div className="w-full max-w-5xl mx-auto h-auto my-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="h-64 md:h-96 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group bg-white">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95a6559d-388d-45c7-9ed3-b3d3fe4efa9a_800w.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 1" />
           </div>
           <div className="h-64 md:h-96 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group md:-translate-y-8 bg-white">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5e06e64-e12f-4afc-8da8-6e066dff92a7_800w.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 2" />
           </div>
           <div className="h-64 md:h-96 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative group bg-white">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Detail 3" />
           </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center z-10 mt-12">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">We are building a beauty filter and self-expression engine for the real world.</h3>
        </div>
      </div>
    </section>
  );
}