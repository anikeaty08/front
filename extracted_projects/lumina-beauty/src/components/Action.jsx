import React, { useRef, useState } from 'react';

const unsplashImages = [
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28465281-2247-40a2-9c75-adce648199f9_800w.webp",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95a6559d-388d-45c7-9ed3-b3d3fe4efa9a_800w.webp",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8b2ffe0-ad6d-4441-8ddb-9dfad8f6baa8_800w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d528b32-3392-48df-8646-5689fc503e5c_800w.webp",
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a41d3a65-8d6a-4d01-9658-ed45cbcdcce6_800w.webp"
];

const duplicateImages = [
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/0a4aa3d6-d721-49ae-8f1d-fae6a49994ee/800w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a2cc311-cdb6-49e8-b27d-8b5e61c376b0_800w.webp",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/4bb836a6-424a-4c2a-b6c2-d55647d45d00/800w.png"
];

export default function Action() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-32 overflow-hidden border-t border-zinc-200/50 bg-[#EAE8E3]">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
          Each look is calibrated to your unique facial geometry, skin tone, and vibe using cutting-edge computer vision.
        </h2>
      </div>

      <div 
        className="relative w-full mt-12 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-[20vw] pb-12 pt-4 items-center"
        >
          {unsplashImages.map((img, idx) => (
            <div 
              key={idx} 
              className="flex-none snap-center transition-transform duration-500 hover:scale-[1.03]"
            >
              <img 
                src={img} 
                alt="Makeup calibration look" 
                className="h-72 md:h-96 w-[14rem] md:w-[20rem] rounded-[2rem] shadow-xl border border-zinc-200/50 object-cover bg-white pointer-events-none select-none"
              />
            </div>
          ))}
          {/* Duplicate set for easy scrolling buffer */}
          {duplicateImages.map((img, idx) => (
            <div 
              key={`dup-${idx}`} 
              className="flex-none snap-center transition-transform duration-500 hover:scale-[1.03]"
            >
              <img 
                src={img} 
                alt="Makeup calibration look" 
                className="h-72 md:h-96 w-[14rem] md:w-[20rem] rounded-[2rem] shadow-xl border border-zinc-200/50 object-cover bg-white pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}