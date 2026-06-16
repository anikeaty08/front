import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const editorialImages = [
  {
    url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    title: "Serenique Headquarters",
    alt: "Quiet architecture exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    title: "Sanctuary Lounge",
    alt: "Minimalist interior lounge"
  }
];

export default function Editorial() {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % editorialImages.length);
  const prevImg = () => setCurrentImg((prev) => (prev === 0 ? editorialImages.length - 1 : prev - 1));

  return (
    <section className="border-t border-[#d8cfbf]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 border-x border-[#d8cfbf] lg:grid-cols-12">
        <div className="border-b border-[#d8cfbf] p-4 lg:col-span-3 lg:border-b-0 lg:border-r bg-[#efe9db]">
          <div className="flex h-full flex-col justify-between gap-6">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">Through the luxury syntax of mind</p>
            </div>
            <div className="flex items-center justify-between text-[#8d8375]">
              <button onClick={prevImg} className="rounded-full border border-[#cfc5b4] p-2 hover:bg-[#cfc5b4]/20 transition">
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
              <button onClick={nextImg} className="rounded-full border border-[#cfc5b4] p-2 hover:bg-[#cfc5b4]/20 transition">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="overflow-hidden relative aspect-[4/5] w-full">
              {editorialImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={img.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${idx === currentImg ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">
              <span className="truncate pr-2">{editorialImages[currentImg].title}</span>
              <span className="shrink-0">0{currentImg + 1}/0{editorialImages.length}</span>
            </div>
          </div>
        </div>

        <div className="border-b border-[#d8cfbf] p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r bg-[#efe9db]">
          <p className="font-serif-custom text-4xl leading-[1.05] tracking-tight text-[#2f281f] sm:text-5xl">
            At <span className="italic">Serenique</span>, we see mental wellness as the finest form of self-care. Every element of our approach from the design of our spaces to the expertise of our practitioners.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
              alt="Minimal therapy room with soft natural light"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="flex flex-col justify-between gap-6">
              <p className="text-base leading-7 text-[#5a5146]">
                We work with individuals who embrace the poetic side of visual storytelling; those who value care over noise, and believe that meaning often lives in the quietest corners of an image.
              </p>
              <div>
                <div className="mb-6 text-3xl leading-none text-[#2f281f]">...</div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="font-serif-custom text-5xl leading-none tracking-tight text-[#2f281f]">94%</div>
                    <div className="mt-2 text-xs text-[#7a7063]">Feel more Relax</div>
                  </div>
                  <div>
                    <div className="font-serif-custom text-5xl leading-none tracking-tight text-[#2f281f]">97%</div>
                    <div className="mt-2 text-xs text-[#7a7063]">Feel more Balanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 lg:col-span-4 bg-[#efe9db]">
          <div className="flex h-full flex-col justify-end">
            <div className="mb-8 text-3xl leading-none text-[#2f281f]">...</div>
            <p className="text-base leading-7 text-[#5a5146]">
              At Serenique, every service is more than a session—it's a carefully crafted ritual designed to restore harmony between body, mind, and soul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}