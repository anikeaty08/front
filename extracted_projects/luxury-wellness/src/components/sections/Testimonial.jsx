import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Step into Serenique felt like entering another world. Every detail is crafted with such care & calm – I've never experienced such profound calm and relaxation.",
    author: "Brenda C.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    rating: "4.9"
  },
  {
    quote: "A truly transformative experience. The guided meditation sessions helped me find a center I didn't know I had lost. Highly recommended.",
    author: "Marcus T.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    rating: "5.0"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const current = testimonials[currentIndex];

  return (
    <section>
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 border-x border-[#d8cfbf] lg:grid-cols-12">
        <div className="border-b border-[#d8cfbf] p-4 lg:col-span-3 lg:border-b-0 lg:border-r">
          <div className="flex h-full flex-col justify-between gap-6">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">Where every story finds its safe space.</p>
            </div>
            <div className="flex items-center justify-between text-[#8d8375]">
              <button onClick={prevTestimonial} className="rounded-full border border-[#cfc5b4] p-2 hover:bg-[#cfc5b4]/20 transition">
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
              <button onClick={nextTestimonial} className="rounded-full border border-[#cfc5b4] p-2 hover:bg-[#cfc5b4]/20 transition">
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {testimonials.map((t, idx) => (
                <img
                  key={idx}
                  src={t.image}
                  alt={t.author}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.18em] text-[#7a7063]">
              <span>Happy Customer</span>
              <span>0{currentIndex + 1}/0{testimonials.length}</span>
            </div>
          </div>
        </div>

        <div className="border-b border-[#d8cfbf] p-6 sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-r flex flex-col justify-center relative overflow-hidden">
          <div className="mb-3 text-5xl leading-none text-[#2f281f] opacity-20 absolute top-8 left-8">“</div>
          <div className="relative z-10 min-h-[200px] flex flex-col justify-center">
            <blockquote 
              key={currentIndex} 
              className="max-w-4xl font-serif-custom text-4xl leading-[1.1] tracking-tight text-[#2f281f] sm:text-5xl animate-[fadeIn_0.5s_ease-out]"
            >
              {current.quote}
            </blockquote>
            <p className="mt-8 text-xl text-[#4d453c] font-medium">— {current.author}</p>
          </div>
        </div>

        <div className="p-6 lg:col-span-2">
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="ml-auto w-28 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
                alt="Interior detail"
                className="aspect-square w-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-4 text-sm text-[#6f6558]">
              <div className="flex items-center justify-between gap-3 border-b border-[#cfc5b4]/30 pb-2">
                <span>Professional</span>
                <span className="font-semibold text-[#2f281f]">{current.rating}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Relaxed</span>
                <span className="font-semibold text-[#2f281f]">5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}