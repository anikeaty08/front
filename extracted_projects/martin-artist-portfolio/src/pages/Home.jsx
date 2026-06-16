import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ArtworkCard from '../components/ui/ArtworkCard';
import Button from '../components/ui/Button';
import ShopCard from '../components/ui/ShopCard';

const featuredProducts = [
  {
    id: 1,
    title: 'Fracture',
    type: 'Archival Pigment Print',
    price: '$850',
    edition: 'Limited Edition of 50',
    image: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80'
  },
  {
    id: 2,
    title: 'The Geometry of Silence',
    type: 'Exhibition Catalog',
    price: '$65',
    edition: 'Hardcover, 240 pages',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80'
  }
];

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [introRef, introVisible] = useScrollReveal({ threshold: 0.1 });
  const [exhibitionsRef, exhibitionsVisible] = useScrollReveal({ threshold: 0.1 });
  const [shopRef, shopVisible] = useScrollReveal({ threshold: 0.1 });
  const [blogRef, blogVisible] = useScrollReveal({ threshold: 0.1 });

  // Simple parallax state based on scroll
  const [scrollY, setScrollY] = useState(0);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (product) => {
    setToastMessage(`${product.title} added to collection`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div className="w-full relative pt-24">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto">
          <h1 className={clsx(
            "text-[22vw] lg:text-[18vw] font-black leading-none text-3d tracking-tighter select-none z-10 transition-all duration-1000 ease-out",
            mounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"
          )}>
            MARTIN
          </h1>
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <span className={clsx(
              "font-script text-white text-[16vw] lg:text-[13vw] leading-none -rotate-6 ml-12 drop-shadow-2xl transition-all duration-1000 delay-300 ease-out",
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90 translate-x-10"
            )}>
              Elias
            </span>
          </div>
        </div>
        <p className={clsx(
          "mt-12 text-white/90 text-[10px] md:text-xs font-semibold tracking-[0.4em] uppercase z-10 transition-all duration-1000 delay-500",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}>
          Contemporary Abstract Artist
        </p>
      </section>

      {/* Introduction Container */}
      <section ref={introRef} className="relative w-full max-w-6xl mx-auto px-6 mt-12 lg:mt-24 mb-32 z-20">
        <div className={clsx(
          "relative transition-all duration-1000",
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}>
          <div className="bracket-top-left -ml-4 -mt-4 hidden md:block"></div>
          <div className="bracket-bottom-right -mr-4 -mb-4 hidden md:block"></div>
          
          <div className="bg-noise shadow-2xl relative w-full lg:w-[90%] lg:ml-auto flex flex-col pt-32 pb-12 px-8 lg:pt-24 lg:pb-20 lg:px-24">
            
            {/* Parallax Image */}
            <div 
              className="absolute -top-16 left-6 lg:-top-24 lg:-left-24 w-64 h-80 lg:w-80 lg:h-[420px] bg-white p-4 shadow-xl z-30 transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${Math.max(-50, scrollY * 0.05 - 20)}px)` }}
            >
              <div className="w-full h-full duotone-cyan relative overflow-hidden group">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a2cc311-cdb6-49e8-b27d-8b5e61c376b0_800w.webp" 
                  alt="Artist Portrait" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 ml-auto flex flex-col justify-center min-h-[300px]">
              <span className="text-[#12c2e9] text-xs italic font-serif mb-5 font-medium">Artistic Journey</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#e0281c] leading-tight mb-6 tracking-tight">
                ESSENCE <br /> OF LIGHT
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md font-serif">
                Exploring the boundaries where structured geometry dissolves into emotional chaos. Through layers of texture and vibrant color, each piece seeks to capture fleeting moments of clarity within the vast, complex human experience.
              </p>
              <div>
                <Button to="/about">Explore Story</Button>
              </div>
            </div>

            {/* Logos Row */}
            <div className="w-full border-t border-gray-200 mt-20 pt-12 flex flex-col md:flex-row justify-between items-center gap-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="font-serif text-center leading-tight text-gray-800">
                <span className="text-[9px] font-semibold tracking-[0.3em] block mb-1">THE</span>
                <span className="text-xl tracking-tight">METROPOLITAN</span><br/>
                <span className="text-xs font-semibold tracking-[0.2em]">MUSEUM</span>
              </div>
              <div className="font-script text-4xl text-gray-800">Gagosian Gallery</div>
              <div className="font-sans font-medium tracking-[0.2em] text-center flex flex-col items-center text-gray-800">
                <div className="border border-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-xs mb-3">MG</div>
                <span className="text-[10px]">MARIAN GOODMAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Paintings Section */}
      <section className="relative w-full max-w-6xl mx-auto px-6 py-20 z-20">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="w-px h-16 bg-white/20 mb-6"></div>
          <h3 className="text-white/90 text-xs font-semibold tracking-[0.4em] uppercase">Selected Works</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <ArtworkCard 
            image="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80" 
            title="Horizon" 
            year="2018" 
            delay={0} 
          />
          <ArtworkCard 
            image="https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80" 
            title="Structure" 
            year="2020" 
            delay={150} 
          />
          <ArtworkCard 
            image="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&q=80" 
            title="Fracture" 
            year="2022" 
            delay={300} 
          />
        </div>
        
        <div className="mt-20 text-center">
          <Button variant="outline" to="/artwork">View Full Gallery</Button>
        </div>
      </section>

      {/* Exhibitions Slider representation */}
      <section ref={exhibitionsRef} className="relative w-full py-32 z-20 overflow-hidden bg-black/40 border-y border-white/5 mt-20">
        <div className="text-center mb-20">
          <h3 className="text-white/80 text-[10px] font-semibold tracking-[0.4em] uppercase">Upcoming Exhibitions</h3>
        </div>

        <div className={clsx(
          "flex justify-center items-center w-[120%] -ml-[10%] min-h-[500px] relative transition-all duration-1000",
          exhibitionsVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {/* Left Slide */}
          <div className="w-1/4 h-[400px] bg-[#1e1b4b]/40 relative flex flex-col justify-end p-8 border-r border-white/10 opacity-50 backdrop-blur-sm">
            <div className="absolute top-8 left-8 text-white text-[10px] font-semibold uppercase tracking-widest leading-relaxed">Gagosian<br/>Gallery</div>
            <div className="text-white">
              <span className="text-7xl font-serif italic block leading-none">14</span>
              <span className="text-xs font-serif italic ml-2 text-white/70">October</span>
            </div>
          </div>

          {/* Center Active Slide */}
          <div className="w-1/2 max-w-4xl relative z-10 shadow-2xl scale-[1.02] mx-4">
            <div className="w-full h-[500px] duotone-cyan relative border border-white/10">
              <img src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=1200&q=80" alt="Exhibition Space" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-8 right-8 text-white text-[10px] font-semibold uppercase tracking-widest text-right z-20 leading-relaxed drop-shadow-md">The Whitney<br/>Museum</div>
            </div>
            
            {/* Overlapping Info Box */}
            <div 
              className="absolute -bottom-16 left-8 lg:left-16 bg-white p-10 lg:p-14 w-[85%] lg:w-[75%] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${Math.max(-20, (scrollY - 1800) * -0.05)}px)` }}
            >
              <h3 className="font-serif text-3xl lg:text-5xl text-[#f25c3b] leading-tight mb-8 tracking-tight">
                The geometry <br /> of silence
              </h3>
              <div className="flex items-baseline justify-between border-t border-gray-100 pt-6">
                <div className="flex items-baseline">
                  <span className="text-6xl lg:text-8xl font-serif italic text-gray-200 leading-none mr-4">03</span>
                  <span className="text-[#12c2e9] text-sm lg:text-base font-serif italic">November</span>
                </div>
                <Button to="/exhibitions" className="hidden sm:flex">Details</Button>
              </div>
            </div>
          </div>

          {/* Right Slide */}
          <div className="w-1/4 h-[400px] bg-[#1e1b4b]/40 relative flex flex-col justify-end p-8 border-l border-white/10 opacity-50 backdrop-blur-sm">
            <div className="absolute top-8 right-8 text-white text-[10px] font-semibold uppercase tracking-widest text-right leading-relaxed">Tate<br/>Modern</div>
            <div className="text-white text-right w-full">
              <span className="text-7xl font-serif italic block leading-none">21</span>
              <span className="text-xs font-serif italic mr-2 text-white/70">January</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Shop Section */}
      <section ref={shopRef} className="relative w-full max-w-6xl mx-auto px-6 mt-32 z-20">
        <div className={clsx(
          "text-center mb-16 flex flex-col items-center transition-all duration-1000",
          shopVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="w-px h-16 bg-white/20 mb-6 mx-auto"></div>
          <h3 className="text-white/80 text-[10px] font-semibold tracking-[0.4em] uppercase">Selected Editions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {featuredProducts.map((product, index) => (
            <ShopCard 
              key={product.id} 
              product={product} 
              delay={index * 150} 
              onAdd={handleAddToCart}
            />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button variant="outline" to="/shop">View Full Collection</Button>
        </div>
      </section>

      {/* Blog / Philosophy Section */}
      <section ref={blogRef} className="relative w-full max-w-6xl mx-auto px-6 mt-40 mb-40 z-20">
        <div className={clsx(
          "flex flex-col lg:flex-row relative items-center lg:items-stretch min-h-[600px] transition-all duration-1000",
          blogVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}>
          
          {/* Left Title Box */}
          <div className="bg-noise p-12 lg:p-20 shadow-xl z-20 w-full lg:w-[45%] relative mt-20 lg:mt-0 border border-gray-100 self-start lg:mt-12">
            <h2 className="font-serif text-6xl lg:text-[90px] leading-[0.9] mb-8 tracking-tighter">
              <span className="text-gradient-orange block pb-2">Form</span>
              <span className="text-[#d14b22] block">& Void</span>
            </h2>
            <div className="text-[#12c2e9] text-[10px] font-semibold tracking-[0.3em] uppercase flex items-center gap-3 mt-12 lg:mt-24">
              <span>OCT 12</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#12c2e9]"></span>
              <span>ESSAY</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[65%] h-[400px] lg:h-[600px] lg:absolute right-0 top-0 z-10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80" alt="Abstract Painting Detail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#e0281c]/10 mix-blend-multiply"></div>
          </div>

          {/* Overlapping Content Box */}
          <div className="bg-noise p-10 lg:p-14 shadow-2xl z-30 w-[90%] lg:w-[45%] relative -mt-16 lg:mt-0 lg:absolute lg:right-[10%] lg:bottom-10 border border-gray-100">
            <h3 className="font-serif text-[#e0281c] text-xl italic mb-6">
              The tension between structure and chaos
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-serif">
              In my recent series, I attempt to navigate the delicate boundary where deliberate geometry yields to spontaneous gesture. The canvas becomes an arena where logic and emotion continually negotiate for dominance.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 font-serif">
              The void is not empty space, but pregnant with potential, waiting to be activated by form.
            </p>
            <Button to="/blog/form-and-void" className="w-full sm:w-auto">Read Essay</Button>
            
            {/* Background watermark letter */}
            <div className="absolute -bottom-16 -right-6 text-[220px] font-script text-gray-100/50 leading-none select-none -z-10 pointer-events-none">
              E
            </div>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <div 
        className={clsx(
          "fixed bottom-8 right-8 z-50 bg-[#1e1b4b]/95 backdrop-blur-md border border-[#12c2e9]/30 text-white px-6 py-4 shadow-2xl flex items-center gap-4 transition-all duration-500",
          toastMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <iconify-icon icon="solar:check-circle-linear" class="text-[#12c2e9] text-xl"></iconify-icon>
        <span className="font-serif text-sm tracking-wide">{toastMessage}</span>
      </div>
    </div>
  );
};

export default Home;