import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white shadow-sm">
<div className="py-3 bg-[#349d91] text-white text-center text-sm">
<p>OUR SUMMER SALE IS NOW ON | 20% OFF YOUR DREAM KITCHEN. <a className="underline font-medium" href="#">BOOK YOUR FREE DESIGN APPOINTMENT HERE</a></p>
</div>
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<a className="flex items-center" href="#">
<img alt="Harvey Jones" className="h-8" src="https://www.harveyjones.com/wp-content/uploads/2024/11/hj_logo.svg" />
</a>
<nav className="hidden lg:flex items-center space-x-8">
<a className="text-gray-800 hover:text-[#349d91] font-medium" href="#">Our Kitchens</a>
<a className="text-gray-800 hover:text-[#349d91] font-medium" href="#">Gallery</a>
<a className="text-gray-800 hover:text-[#349d91] font-medium" href="#">About</a>
<a className="text-gray-800 hover:text-[#349d91] font-medium" href="#">Showrooms</a>
<a className="text-gray-800 hover:text-[#349d91] font-medium" href="#">Request Brochure</a>
<a className="px-5 py-2.5 bg-[#a4864c] text-white rounded hover:bg-[#8d7341] transition-colors" href="#">Book Appointment</a>
</nav>
<button className="lg:hidden text-gray-800">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>
<main>

<div className="container mx-auto px-4 py-4 text-sm">
<div className="flex items-center text-gray-500">
<a className="hover:text-[#349d91]" href="#">Home</a>
<span className="mx-2">/</span>
<a className="hover:text-[#349d91]" href="#">Our Kitchens</a>
<span className="mx-2">/</span>
<a className="hover:text-[#349d91]" href="#">Slim Shaker Kitchens</a>
<span className="mx-2">/</span>
<span className="text-gray-800">Oak Slim Shaker Kitchen</span>
</div>
</div>

<div className="w-full h-[80vh] relative overflow-hidden">
<img alt="washed oak slim shaker straight on" className="w-full h-full object-cover" src="https://www.harveyjones.com/wp-content/uploads/2025/02/24-HJ_SSKL_S01_EST-B_F02-scaled.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
<div className="container mx-auto px-4 pb-12 text-white">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-2">Oak Slim Shaker Kitchen</h1>
<p className="text-xl md:text-2xl opacity-90 max-w-3xl">A refined classic, Slim Shaker design starting from just £25,000</p>
</div>
</div>
</div>

<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg relative group">
<img alt="washed oak slim shaker with window" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.harveyjones.com/wp-content/uploads/2025/02/24-HJ_SSKL_S01_EST-A_F02-scaled.jpg" />
<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>
<div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg relative group">
<img alt="washed oak slim shaker with closed dresser" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.harveyjones.com/wp-content/uploads/2025/02/24-HJ_SSKL_S01_DRESSER-CLOSED_F02-scaled.jpg" />
<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>
</div>
<div className="mt-6">
<div className="aspect-w-16 aspect-h-6 overflow-hidden rounded-lg relative group">
<img alt="washed oak slim shaker with open dresser" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.harveyjones.com/wp-content/uploads/2025/02/24-HJ_SSKL_S01_DRESSER-OPEN_F02-scaled.jpg" />
<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#e8f2f1] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#d0e8e5]">
<i className="w-8 h-8 text-[#349d91]" data-lucide="paintbrush"></i>
</div>
<h3 className="text-xl font-medium mb-3">Natural Wood Finish</h3>
<p className="text-gray-600">Beautiful washed oak finish that highlights the natural grain and warmth of the wood while providing a timeless aesthetic.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#e8f2f1] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#d0e8e5]">
<i className="w-8 h-8 text-[#349d91]" data-lucide="layout"></i>
</div>
<h3 className="text-xl font-medium mb-3">Slim Frame Design</h3>
<p className="text-gray-600">Refined proportions create a minimalist look while maintaining the character of traditional Shaker cabinetry.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#e8f2f1] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#d0e8e5]">
<i className="w-8 h-8 text-[#349d91]" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium mb-3">Versatile Styling</h3>
<p className="text-gray-600">Can be paired with hand-painted cabinetry for a two-tone effect or maintained in its natural wood tone for different looks.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#e8f2f1] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#d0e8e5]">
<i className="w-8 h-8 text-[#349d91]" data-lucide="book-open"></i>
</div>
<h3 className="text-xl font-medium mb-3">Traditional Joinery</h3>
<p className="text-gray-600">Hand-built using time-honored woodworking techniques that ensure exceptional durability and longevity.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#e8f2f1] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#d0e8e5]">
<i className="w-8 h-8 text-[#349d91]" data-lucide="circle-dot"></i>
</div>
<h3 className="text-xl font-medium mb-3">Complementary Hardware</h3>
<p className="text-gray-600">Pairs beautifully with aged brass fixtures and premium hardware to enhance the natural wood tones.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#e8f2f1] flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-[#d0e8e5]">
<i className="w-8 h-8 text-[#349d91]" data-lucide="infinity"></i>
</div>
<h3 className="text-xl font-medium mb-3">Adaptable Design</h3>
<p className="text-gray-600">Works equally well in classic and contemporary homes, adapting to different interior styles.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4 max-w-4xl">
<h2 className="text-3xl font-semibold tracking-tight mb-8">A Refined Classic, Slim Shaker Design</h2>
<div className="prose prose-lg max-w-none">
<p>The Oak Slim Shaker Kitchen combines natural wood warmth with the sleek sophistication of a modern Shaker kitchen. Its slim-framed doors and understated aesthetic appeal to those who appreciate natural materials and functional design.</p>
<p>This handcrafted kitchen showcases organic textures and timeless charm. The Slim Shaker frame's refined proportions create a minimalist look, making it perfect for both classic and contemporary interiors. Whether paired with hand-painted cabinetry for a two-tone effect or finished in its natural wood tone, the Oak Slim Shaker Kitchen offers versatility and sophistication.</p>
<h3 className="text-2xl font-semibold tracking-tight mt-8 mb-4">Craftsmanship That Stands the Test of Time</h3>
<p>At Harvey Jones, we handcraft every kitchen with precision and care. Using traditional joinery techniques, we ensure lasting durability. With over 45 years of expertise, we create bespoke kitchens designed to stand the test of time.</p>
<p>Each cabinet highlights the natural beauty of oak while offering practical storage solutions. Whether you prefer a full wood aesthetic or a painted and oak combination, our designers will create a kitchen that suits your style.</p>
<p>The organic warmth of Washed Oak adds a welcoming feel to any kitchen. It pairs effortlessly with quartz worktops, honed natural stone, or aged brass fixtures, bringing depth and sophistication. Additionally, the subtle detailing of the Slim Shaker design keeps the space feeling modern yet timeless, making it ideal for both classic and contemporary homes.</p>
<p>Whether you're designing an open-plan kitchen or a cosy space, this kitchen adapts to suit your needs. Its versatile design complements various interior styles, from rustic charm to minimalist elegance.</p>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Our Commitment</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="flex flex-col">
<div className="rounded-lg overflow-hidden mb-6">
<img alt="Harvey Jones illustrated design-led mood board" className="w-full h-auto transition-transform duration-500 hover:scale-105" loading="lazy" src="https://www.harveyjones.com/wp-content/uploads/2025/01/Harvey-Jones-Design-Led.jpg" />
</div>
<div className="mb-4">
<h3 className="text-xl font-medium mb-2">Decades of Design Experience</h3>
</div>
<p className="text-gray-700">We create spaces that you will cherish for a lifetime – where design meets functionality seamlessly. Our diverse collections showcases both timeless and modern styles, ensuring there is a Harvey Jones bespoke kitchen just for you.</p>
</div>

<div className="flex flex-col">
<div className="rounded-lg overflow-hidden mb-6">
<img alt="Harvey Jones illustrated tailored cabinetry measurements" className="w-full h-auto transition-transform duration-500 hover:scale-105" loading="lazy" src="https://www.harveyjones.com/wp-content/uploads/2025/01/Harvey-Jones-Tailored-to-You.jpg" />
</div>
<div className="mb-4">
<h3 className="text-xl font-medium mb-2">Tailored to You</h3>
</div>
<p className="text-gray-700">As your dedicated design partner, we take the time to truly understand your vision. Your style, needs, and budget guide us as we transform your vision into reality. The results? A luxury kitchen that feels distinctly yours.</p>
</div>

<div className="flex flex-col">
<div className="rounded-lg overflow-hidden mb-6">
<img alt="Harvey Jones illustrated quality cabinetry joinery" className="w-full h-auto transition-transform duration-500 hover:scale-105" loading="lazy" src="https://www.harveyjones.com/wp-content/uploads/2025/01/Harvey-Jones-Anchored-in-Design.jpg" />
</div>
<div className="mb-4">
<h3 className="text-xl font-medium mb-2">Built to Last</h3>
</div>
<p className="text-gray-700">Your kitchen will reflect our unwavering commitment to quality. With almost 50 years of experience woven into your home, each cabinet is crafted with time-honoured joinery techniques and stunning finishes that will stand the test of time.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Built on Quality</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
<div className="rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:shadow-xl">
<img alt="Beige kitchen island with white worktop" className="w-full" src="https://www.harveyjones.com/wp-content/uploads/2022/11/Bespoke-Kitchens-scaled.jpg" />
</div>
<div>
<h3 className="text-2xl font-medium mb-6">Uncompromising Craftsmanship</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e8f2f1] flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-5 h-5 text-[#349d91]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Fully Hand-Built Cabinets</h4>
<p className="text-gray-600">Each cabinet is a fully hand-built piece of furniture, carefully and precisely constructed for unrivalled durability.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e8f2f1] flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-5 h-5 text-[#349d91]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Superior Construction</h4>
<p className="text-gray-600">Six-sided cubes that are biscuit-jointed, glued and screwed for maximum rigidity and longevity.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e8f2f1] flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-5 h-5 text-[#349d91]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Premium Hinges & Fittings</h4>
<p className="text-gray-600">Doors joined with solid wood-to-wood bonds and secured with the highest quality hinges that will never drop or fall out of alignment.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#e8f2f1] flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-5 h-5 text-[#349d91]" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1">10-Year Guarantee</h4>
<p className="text-gray-600">We're so confident in our quality that every kitchen comes with our comprehensive 10-year cabinetry guarantee.</p>
</div>
</div>
</div>
<a className="inline-block mt-8 px-6 py-3 bg-[#349d91] text-white rounded font-medium hover:bg-opacity-90 transition-colors" href="#">Learn More About Our Quality</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-2">Our Kitchens, Your Home</h2>
<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Get inspired by these wonderful projects from our customers and followers.</p>
<div className="relative">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative overflow-hidden rounded-lg">
<img alt="Harvey Jones Shaker Arbor kitchen display" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://www.harveyjones.com/wp-content/uploads/2025/01/HARVEY-JONES-Chester-Dec-2024_4167-CLOSED-min-2-scaled-e1737046852504.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4 text-white">
<p className="text-sm font-medium">Two Tone Shaker Kitchen</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg">
<img alt="Freestanding oak kitchen island" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://www.harveyjones.com/wp-content/uploads/2022/11/A-low-3.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4 text-white">
<p className="text-sm font-medium">Oak Kitchen Island Inspiration</p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg">
<img alt="Hampton kitchen design featuring white cabinetry" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://www.harveyjones.com/wp-content/uploads/2024/05/24-04-24_RyanWicks_HarveyJones-Brighton_0097-1-Web-2048px.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4 text-white">
<p className="text-sm font-medium">Contemporary Country Hampton kitchen</p>
</div>
</div>
<div className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5">
<i className="w-4 h-4" data-lucide="play"></i>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg">
<img alt="slim shaker kitchen in washed oak with floor to ceiling window" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" src="https://www.harveyjones.com/wp-content/uploads/2025/05/Harvey-Jones-Bicester-March-2025_6382-FF.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<div className="p-4 text-white">
<p className="text-sm font-medium">Slim Shaker Kitchens</p>
</div>
</div>
</div>
</div>

<div className="text-center mt-10">
<a className="inline-block px-6 py-3 border border-gray-300 rounded-md text-gray-800 font-medium hover:bg-gray-50 transition-colors" href="#">View More Inspiration</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#e8f2f1]">
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Start Your Kitchen Journey Today</h2>
<p className="text-lg text-gray-700 mb-8">Our experienced designers are ready to help you create your perfect kitchen. Book a free design appointment or request a brochure to see more of our beautiful kitchens.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-3.5 bg-[#349d91] text-white rounded font-medium hover:bg-opacity-90 transition-colors" href="#">Book a Design Appointment</a>
<a className="px-8 py-3.5 bg-white text-gray-800 rounded font-medium hover:bg-gray-50 transition-colors" href="#">Request a Brochure</a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white pt-16 pb-8">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="text-lg font-medium mb-4">About Harvey Jones</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Craftsmanship</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-4">Our Kitchens</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Slim Shaker Range</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Shaker Range</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Hampton Range</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Arbor Range</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Original Range</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Linear Range</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-4">Resources</h3><div>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Kitchen Design Guide</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">FAQs</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Kitchen Trends</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Customer Stories</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium mb-4">Connect With Us</h3>
<ul className="space-y-2">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Find a Showroom</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Request a Brochure</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Book an Appointment</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#">Customer Support</a></li>
</ul>
<div className="mt-6">
<h4 className="text-sm uppercase tracking-wider mb-3">Follow Us</h4>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="pinterest"></i>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<img alt="Harvey Jones" className="h-6" src="https://www.harveyjones.com/wp-content/uploads/2024/11/hj_logo_white.svg" />
</div>
<div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="hidden md:inline">|</span>
<a className="hover:text-white transition-colors" href="#">Terms & Conditions</a>
<span className="hidden md:inline">|</span>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
<span className="hidden md:inline">|</span>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
<p className="text-gray-500 text-sm text-center mt-6">© 2025 Harvey Jones Ltd. All rights reserved. Registered in England & Wales No. 12345678.</p>
</div>
</div>
</div></footer>



    </>
  );
}
