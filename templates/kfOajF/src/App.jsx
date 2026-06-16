import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'serif': ['Didot', 'Bodoni MT', 'serif'],
                        'sans': ['Helvetica Neue', 'Arial', 'sans-serif']
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.6s ease-in-out 0.2s both'
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        }
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
      

<section className="relative h-screen bg-black overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
<img alt="Fashion Photography" className="w-full h-full object-cover grayscale animate-fade-in" src="https://images.unsplash.com/photo-1506629905607-d9c841d04c89?w=1920&amp;h=1080&amp;fit=crop&amp;crop=center&amp;auto=format&amp;q=80"/>

<nav className="absolute top-8 left-0 right-0 z-20 animate-fade-in">
<div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
<div className="text-white font-serif text-2xl tracking-wider">THE NYCHE</div>
<div className="hidden md:flex space-x-12 text-white font-sans text-sm tracking-widest">
<a className="hover:text-yellow-500 transition-colors duration-300" href="#">FASHION</a>
<a className="hover:text-yellow-500 transition-colors duration-300" href="#">CULTURE</a>
<a className="hover:text-yellow-500 transition-colors duration-300" href="#">EDITORIAL</a>
</div>
</div>
</nav>

<div className="absolute inset-0 flex items-center justify-center z-10">
<div className="text-center text-white animate-fade-in">
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-thin tracking-wider mb-6">THE NYCHE</h1>
<p className="font-sans text-lg md:text-xl tracking-widest opacity-90">DEFINING MODERN MASCULINITY</p>
</div>
</div>
</section>

<main className="max-w-7xl mx-auto px-8 py-16">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 animate-fade-in">

<div className="lg:col-span-2">
<img alt="NYC Street Style" className="w-full h-96 object-cover grayscale mb-6 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&amp;h=600&amp;fit=crop&amp;crop=center&amp;auto=format&amp;q=80"/>
<h2 className="font-serif text-4xl md:text-5xl font-thin mb-4 leading-tight">Street Chronicles: New York's Underground Style Movement</h2>
<p className="font-sans text-gray-600 text-lg leading-relaxed">An exclusive look into the raw, unfiltered fashion emerging from Brooklyn's creative underground, where authenticity meets high fashion.</p>
</div>

<div className="space-y-8">
<div>
<h3 className="font-serif text-2xl font-thin mb-6 border-b border-black pb-2">Upcoming Stories</h3>
<div className="space-y-6">
<div className="border-b border-gray-200 pb-4">
<h4 className="font-sans text-sm font-medium mb-2">MILAN FASHION WEEK</h4>
<p className="font-sans text-xs text-gray-600">Behind the scenes with emerging designers reshaping Italian menswear</p>
</div>
<div className="border-b border-gray-200 pb-4">
<h4 className="font-sans text-sm font-medium mb-2">SUSTAINABLE LUXURY</h4>
<p className="font-sans text-xs text-gray-600">How eco-conscious brands are revolutionizing high-end fashion</p>
</div>
<div className="border-b border-gray-200 pb-4">
<h4 className="font-sans text-sm font-medium mb-2">TECH MEETS FASHION</h4>
<p className="font-sans text-xs text-gray-600">Wearable technology's influence on contemporary menswear</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">

<div>
<img alt="Editorial Fashion" className="w-full h-64 object-cover grayscale mb-4 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&amp;h=400&amp;fit=crop&amp;crop=center&amp;auto=format&amp;q=80"/>
<span className="font-sans text-xs tracking-widest text-gray-500 mb-2 block">EDITORIAL</span>
<h3 className="font-serif text-2xl font-thin">The Art of Minimalism</h3>
</div>

<div>
<img alt="Fashion Photography" className="w-full h-64 object-cover grayscale mb-4 hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&amp;h=400&amp;fit=crop&amp;crop=center&amp;auto=format&amp;q=80"/>
<span className="font-sans text-xs tracking-widest text-gray-500 mb-2 block">CULTURE</span>
<h3 className="font-serif text-3xl font-thin mb-4 leading-tight">Beyond the Runway: Fashion as Cultural Expression</h3>
<p className="font-sans text-gray-600 leading-relaxed">Exploring how contemporary menswear transcends clothing to become a powerful medium for social commentary and personal identity.</p>
</div>
</div>
</main>

    </>
  );
}
