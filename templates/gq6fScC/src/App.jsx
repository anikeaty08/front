import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'playfair': ['Playfair Display', 'serif'],
                        'inter': ['Inter', 'sans-serif'],
                    },
                    colors: {
                        'gold': '#FFD700',
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 fade-in">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="font-playfair font-semibold text-2xl tracking-tight">The Nyche</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium hover:text-gold transition-colors" href="#">Style</a>
<a className="text-sm font-medium hover:text-gold transition-colors" href="#">Culture</a>
<a className="text-sm font-medium hover:text-gold transition-colors" href="#">Editorial</a>
<a className="text-sm font-medium hover:text-gold transition-colors" href="#">About</a>
</div>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center fade-in">
<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'data:image/svg+xml,&lt', svg xmlns=%22http: '//www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22&gt'}}></div>
<div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
<h1 className="font-playfair font-semibold text-5xl md:text-6xl leading-tight tracking-tight mb-6">
                Where New York Style<br/>Meets Editorial Excellence
            </h1>
<p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                Discover the pulse of urban fashion through the lens of the city that never sleeps
            </p>
</div>
</section>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in">

<article className="lg:col-span-2 bg-black text-white p-8 lg:p-12 group cursor-pointer hover:bg-gray-900 transition-colors">
<div className="space-y-6">
<div className="text-gold text-sm font-medium tracking-wide uppercase">Featured</div>
<h2 className="font-playfair font-semibold text-3xl lg:text-4xl leading-tight tracking-tight">
                        The Evolution of Menswear: How Street Style Redefined Formal Fashion
                    </h2>
<p className="text-gray-300 text-base leading-relaxed">
                        From the sidewalks of SoHo to the boardrooms of Manhattan, explore how contemporary menswear has broken traditional boundaries to create a new language of professional style.
                    </p>
<div className="flex items-center space-x-4 text-sm text-gray-400">
<span>By Marcus Chen</span>
<span>•</span>
<span>8 min read</span>
</div>
</div>
</article>

<div className="bg-gray-50 p-8 lg:p-12 fade-in">
<div className="space-y-6">
<h3 className="font-playfair font-semibold text-2xl tracking-tight">Stay in the Loop</h3>
<p className="text-gray-600 text-sm leading-relaxed">
                        Get weekly insights on NYC fashion trends, exclusive interviews, and behind-the-scenes editorial content.
                    </p>
<form className="space-y-4">
<input className="w-full px-4 py-3 border border-gray-300 focus:border-gold focus:outline-none text-sm" placeholder="Enter your email" type="email"/>
<button className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition-colors text-sm font-medium">
                            Subscribe
                        </button>
</form>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 fade-in">

<div className="bg-gold text-black p-8 lg:p-12 group cursor-pointer hover:bg-yellow-400 transition-colors">
<div className="space-y-6">
<div className="text-4xl">👔</div>
<h3 className="font-playfair font-semibold text-2xl tracking-tight">Style</h3>
<p className="text-sm leading-relaxed">
                        Curated looks, trend reports, and style guides from the fashion capital of America.
                    </p>
<div className="text-sm font-medium">Explore Category →</div>
</div>
</div>

<article className="lg:col-span-2 border border-gray-200 p-8 lg:p-12 group cursor-pointer hover:border-gold transition-colors">
<div className="space-y-6">
<div className="text-gray-600 text-sm font-medium tracking-wide uppercase">Culture</div>
<h2 className="font-playfair font-semibold text-2xl lg:text-3xl leading-tight tracking-tight">
                        Inside the Ateliers: Meet the Designers Shaping NYC's Fashion Future
                    </h2>
<p className="text-gray-600 text-base leading-relaxed">
                        An exclusive look into the creative spaces where tomorrow's fashion is being born, featuring interviews with emerging designers in Brooklyn's fashion district.
                    </p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4 text-sm text-gray-500">
<span>By Sarah Rodriguez</span>
<span>•</span>
<span>12 min read</span>
</div>
<div className="text-sm font-medium text-gold">Read More →</div>
</div>
</div>
</article>
</div>
</main>

    </>
  );
}
