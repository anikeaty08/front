import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['Inter', 'sans-serif'],
},
colors: {
champagne: {
50: '#fcfaf8',
100: '#f7f3eb',
200: '#efe6d5',
},
dustyrose: {
100: '#f4ecea',
300: '#d49a89',
400: '#c38a79',
800: '#5c3a31',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#faf9f6]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0">
<a className="text-2xl font-medium text-stone-900 tracking-tighter font-serif" href="#">
              Party Palette
            </a>
</div>

<nav className="hidden md:flex space-x-10">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#specialties">
              Specialties
            </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#gallery">
              Gallery
            </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#consultation">
              Consultation
            </a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-full text-white bg-dustyrose-300 hover:bg-dustyrose-400 transition-all duration-200 ease-in-out shadow-sm" href="#contact">
              Inquire Now
            </a>
</div>

<div className="flex md:hidden">
<button className="text-stone-500 hover:text-stone-900 p-2" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-100 text-stone-600 text-xs font-medium mb-8 border border-champagne-200">
<iconify-icon className="" height="14" icon="solar:stars-linear" width="14"></iconify-icon>
              Bespoke Event Design
            </div>
<h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl tracking-tight text-stone-900 leading-[1.1] font-medium mb-6">
              Curating Unforgettable Milestones
            </h1>
<p className="text-lg text-stone-500 font-normal leading-relaxed mb-10 max-w-lg">
              Elevating life's most cherished moments through high-end balloon
              artistry, custom backdrops, and immersive floral installations.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-full text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-sm" href="#gallery">
                View Portfolio
              </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-full text-stone-700 bg-white border border-stone-200 hover:bg-stone-50 transition-all" href="#consultation">
                Discover Our Process
              </a>
</div>
</div>
<div className="relative w-full h-[500px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-sm border border-stone-100">
<img alt="Baby shower balloon arch backdrop" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1530103862676-de8892ebeea0?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="bg-gradient-to-tr from-champagne-100/20 to-transparent mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section className="bg-champagne-50 py-24 lg:py-32 border-y border-stone-100" id="specialties">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-stone-900 mb-4">
            Our Artistic Focus
          </h2>
<p className="text-base text-stone-500 font-normal">
            Specializing in cohesive, luxury decor elements that transform
            ordinary spaces into breathtaking experiences.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-dustyrose-300/30 transition-colors duration-300">
<div className="w-12 h-12 bg-champagne-100 rounded-2xl flex items-center justify-center mb-6 text-dustyrose-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:balloon-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-3">
              Balloon Artistry
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              Organic, sculptural balloon installations crafted with premium,
              custom-colored latex to match your exact palette.
            </p>
</div>

<div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-dustyrose-300/30 transition-colors duration-300">
<div className="w-12 h-12 bg-champagne-100 rounded-2xl flex items-center justify-center mb-6 text-dustyrose-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:gallery-wide-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-3">
              Custom Backdrops
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              Bespoke scenic walls, arched panels, and textured surfaces
              designed to frame your most important moments perfectly.
            </p>
</div>

<div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-dustyrose-300/30 transition-colors duration-300">
<div className="w-12 h-12 bg-champagne-100 rounded-2xl flex items-center justify-center mb-6 text-dustyrose-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-3">
              Floral Installations
            </h3>
<p className="text-sm text-stone-500 leading-relaxed">
              Lush, full-scale floral designs that weave romance and elegance
              throughout your venue, from cascading tablescapes to hanging
              gardens.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="gallery">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-stone-900 mb-4">
              A Curated Portfolio
            </h2>
<p className="text-base text-stone-500 font-normal">
              Glimpses into the sophisticated atmospheres we've crafted for baby
              showers, bridal events, and luxury birthdays.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-dustyrose-800 hover:text-dustyrose-400 transition-colors" href="#">
            View full gallery
            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
<div className="md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-auto md:h-[500px]">
<img alt="Baby shower dessert table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1557411732-1797a9171fcf?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px]">
<img alt="Elegant place setting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="md:col-span-4 group relative rounded-3xl overflow-hidden aspect-[4/5] md:h-[400px]">
<img alt="Luxury birthday cake detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/9] md:h-[400px]">
<img alt="Balloon and floral backdrop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-t border-stone-100" id="consultation">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative">
<div className="aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-sm relative z-10">
<img alt="Event designer arranging flowers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute top-12 -left-8 w-full h-full rounded-[2.5rem] bg-champagne-100 -z-10 hidden sm:block"></div>
</div>

<div className="order-1 lg:order-2 flex flex-col justify-center">
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight font-medium text-stone-900 mb-6 leading-tight">
              Event Consultation &amp;
              <br className="hidden lg:block"/>
              Creative Direction
            </h2>
<p className="text-base text-stone-500 mb-8 leading-relaxed">
              Our process begins long before the first balloon is inflated or
              flower is cut. We believe that truly spectacular events require a
              cohesive vision rooted in expert design principles.
            </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-dustyrose-100 flex items-center justify-center shrink-0 text-dustyrose-800">
<iconify-icon height="16" icon="solar:pen-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 tracking-tight mb-1">
                    Vision Boarding
                  </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                    Collaborative sessions to establish color palettes,
                    textures, and the overall mood of your milestone.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-dustyrose-100 flex items-center justify-center shrink-0 text-dustyrose-800">
<iconify-icon height="16" icon="solar:map-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 tracking-tight mb-1">
                    Spatial Design
                  </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                    Expert recommendations on layout, flow, and focal points to
                    maximize the impact of your venue.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-dustyrose-100 flex items-center justify-center shrink-0 text-dustyrose-800">
<iconify-icon height="16" icon="solar:diamond-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900 tracking-tight mb-1">
                    Material Curation
                  </h4>
<p className="text-sm text-stone-500 leading-relaxed">
                    Sourcing premium florals, custom props, and luxury linens
                    that align perfectly with the established aesthetic.
                  </p>
</div>
</li>
</ul>
<div>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-full text-white bg-dustyrose-300 hover:bg-dustyrose-400 transition-all shadow-sm" href="#contact">
                Schedule a Consultation
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-900 py-24 lg:py-32 relative overflow-hidden mt-auto" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-dustyrose-800/30 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium text-white mb-6">
          Ready to elevate your next event?
        </h2>
<p className="text-base text-stone-400 mb-12 max-w-2xl mx-auto font-normal">
          Let us transform your vision into a stunning reality. Inquire below to
          check availability and begin the design process.
        </p>
<form className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 max-w-2xl mx-auto text-left">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-medium text-stone-300 mb-2" htmlFor="name">
                Full Name
              </label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-dustyrose-300 focus:ring-1 focus:ring-dustyrose-300 transition-colors" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-300 mb-2" htmlFor="email">
                Email Address
              </label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-dustyrose-300 focus:ring-1 focus:ring-dustyrose-300 transition-colors" id="email" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-stone-300 mb-2" htmlFor="eventType">
              Event Type
            </label>
<div className="relative">
<select className="w-full appearance-none bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-dustyrose-300 focus:ring-1 focus:ring-dustyrose-300 transition-colors cursor-pointer" id="eventType">
<option disabled="" selected="" value="">
                  Select an event type...
                </option>
<option value="baby">Baby Shower</option>
<option value="bridal">Bridal Shower</option>
<option value="birthday">Luxury Birthday</option>
<option value="other">Other Milestone</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-medium text-stone-300 mb-2" htmlFor="details">
              Event Details &amp; Vision
            </label>
<textarea className="w-full bg-stone-800/50 border border-stone-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-dustyrose-300 focus:ring-1 focus:ring-dustyrose-300 transition-colors resize-none" id="details" placeholder="Tell us about dates, venue, and your inspiration..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-4 text-sm font-medium rounded-xl text-stone-900 bg-champagne-100 hover:bg-white transition-all shadow-sm" type="button">
            Submit Inquiry
          </button>
</form>
</div>
</section>

<footer className="bg-stone-900 border-t border-stone-800 py-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-serif text-xl tracking-tighter text-white font-medium">
          AURA
        </div>
<p className="text-xs text-stone-500">
          © 2024 Aura Event Decor. All rights reserved.
        </p>
<div className="flex space-x-4 text-stone-400">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
