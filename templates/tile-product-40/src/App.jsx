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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e5e5] transition-all duration-300">

<div className="bg-[#e1dfd8] text-[#1a1a1a] text-[10px] md:text-xs uppercase tracking-widest text-center py-2 px-4 border-b border-[#d2d0c9]">
      Customers rate us 4.8/5 based on 2085 reviews
    </div>
<div className="px-6 md:px-12 h-[4.5rem] flex justify-between items-center">
<div className="flex items-center gap-6 cursor-pointer group w-1/3">
<iconify-icon className="transition-transform group-hover:scale-110" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-normal hidden md:block">Menu</span>
</div>
<a className="w-1/3 flex justify-center" href="/">
<img alt="Baked Tiles" className="h-7 md:h-9 object-contain" src="//www.bakedtiles.co.uk/cdn/shop/files/BT_Logo_Blue_Hug.svg"/>
</a>
<div className="flex items-center justify-end gap-6 w-1/3">
<a className="hidden md:block transition-transform hover:scale-110" href="/search"><iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon></a>
<a className="hidden md:block transition-transform hover:scale-110" href="#swym-wishlist"><iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon></a>
<a className="flex items-center gap-2 transition-transform hover:scale-110" href="/cart">
<iconify-icon icon="solar:cart-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<span className="text-[10px] w-4 h-4 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center -ml-2 -mt-2">0</span>
</a>
</div>
</div>
</header>

<main className="pt-[6.5rem]">
<div className="flex flex-col lg:flex-row border-b border-[#e5e5e5] max-w-[1800px] mx-auto">

<div className="w-full lg:w-[60%] lg:border-r border-[#e5e5e5] bg-[#fbfaf8]">
<div className="flex flex-col space-y-[1px] bg-[#e5e5e5]">
<div className="bg-[#fbfaf8] relative w-full aspect-[4/3] md:aspect-square lg:aspect-auto lg:h-[85vh] overflow-hidden">
<img alt="Marrakesh Terracotta Brick Light" className="w-full h-full object-cover" src="https://www.bakedtiles.co.uk/cdn/shop/files/Marrakesh-Terracotta-Brick-Light-Matt-5cm-x-15cm_987cc5f9.webp?v=1757562787"/>
</div>
<div className="bg-[#fbfaf8] relative w-full aspect-[4/3] md:aspect-square lg:aspect-auto lg:h-[85vh] overflow-hidden">
<img alt="Marrakesh Terracotta Brick Light Details" className="w-full h-full object-cover" src="https://www.bakedtiles.co.uk/cdn/shop/files/Marrakesh-Terracotta-Brick-Light-Matt-5cm-x-15cm-2_c4398fc5.webp?v=1757562801"/>
</div>
<div className="bg-[#fbfaf8] relative w-full aspect-[4/3] md:aspect-square lg:aspect-auto lg:h-[85vh] overflow-hidden">
<img alt="Marrakesh Terracotta Brick Install" className="w-full h-full object-cover" src="https://www.bakedtiles.co.uk/cdn/shop/files/Marrakesh-Terracotta-Brick-Light-Matt-5cm-x-15cm-3.webp?v=1757562804"/>
</div>
<div className="bg-[#fbfaf8] relative w-full aspect-[4/3] md:aspect-square lg:aspect-auto lg:h-[85vh] overflow-hidden">
<img alt="Marrakesh Terracotta Space" className="w-full h-full object-cover" src="https://www.bakedtiles.co.uk/cdn/shop/files/Marrakesh-Terracotta-Brick-Light-Matt-5cm-x-15cm-4_bb975064.webp?v=1755834262"/>
</div>
</div>
</div>

<div className="w-full lg:w-[40%] bg-white relative">
<div className="lg:sticky lg:top-[6.5rem] p-6 md:p-10 lg:p-12 lg:h-[calc(100vh-6.5rem)] overflow-y-auto no-scrollbar pb-32 lg:pb-12">

<nav className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-6 flex gap-2 items-center flex-wrap">
<a className="hover:text-black transition" href="/">Home</a>
<span>/</span>
<a className="hover:text-black transition" href="/collections">Baked Tiles Marrakesh Collection</a>
<span>/</span>
<span className="text-[#1a1a1a]">Marrakesh Terracotta Brick</span>
</nav>

<div className="flex items-center gap-1.5 mb-3">
<div className="flex gap-0.5 text-[#5C6872]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-normal">3 reviews</span>
</div>

<h1 className="font-serif text-5xl md:text-5xl text-[#1a1a1a] leading-[0.95] tracking-tight mb-2">Marrakesh Terracotta Brick Light Matt</h1>
<p className="text-sm text-gray-500 mb-6 font-normal">5cm x 15cm</p>

<div className="mb-8">
<div className="flex items-end gap-3 mb-1">
<div className="text-2xl font-normal">£61.32 <span className="text-sm text-gray-500 font-light">/m²</span></div>
<div className="text-sm text-gray-400 line-through mb-1">RRP: £71.98/m²</div>
</div>
<p className="text-xs text-gray-500 uppercase tracking-widest mt-2">£0.46 <span className="lowercase tracking-normal text-gray-400">per tile - in stock</span></p>
</div>

<div className="text-sm leading-relaxed text-gray-600 mb-8 font-light space-y-4">
<p>The Marrakesh Terracotta Brick Light Matt tile brings a touch of understated Moroccan elegance to any space. With its soft, earthy tones and matte finish, this tile effortlessly captures the essence of traditional terracotta. Perfectly suited for both traditional and contemporary settings, it offers a versatile design element that can seamlessly integrate into various interiors.</p>
<p>Whether you're looking to enhance an indoor living area or an outdoor patio, these tiles provide a charming foundation. Their compact 5 x 15cm size makes them ideal for creative layouts such as herringbone or classic brick patterns.</p>
<p>Designed for practicality, these tiles require no sealing, making them a hassle-free choice for busy homes. Additionally, with a slip rating of PTV 42, they offer excellent anti-slip properties, ensuring safety in both wet and dry conditions.</p>
<p><strong className="font-medium text-[#1a1a1a]">Designer Tip:</strong> Don't leave your grout colour to your tiler! For a light contrast, consider using a light grout, or for a more cohesive look, opt for a neutral grout that complements the terracotta hues.</p>
<p className="text-xs text-gray-400"><strong className="font-medium text-gray-500">Please note:</strong> Cut samples from this collection will be smaller than those advertised. If the original tile is 5 x 15cm, the sample will be approximately 5 x 7.5cm. These samples will still provide a good overall idea of colour, texture, and glaze.</p>
</div>

<div className="bg-[#fbfaf8] p-6 border border-[#e5e5e5] mb-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-xs uppercase tracking-widest font-medium">Order by</h3>
<div className="flex gap-4">
<label className="flex items-center gap-1.5 cursor-pointer text-xs">
<input checked="" className="accent-black" name="order_type" type="radio"/> Surface area (m²)
                </label>
<label className="flex items-center gap-1.5 cursor-pointer text-xs">
<input className="accent-black" name="order_type" type="radio"/> Tiles
                </label>
</div>
</div>
<div className="flex gap-4 mb-4">
<div className="w-full">
<label className="block text-[10px] text-gray-500 mb-2 uppercase tracking-widest">Required surface area (m²)</label>
<input className="w-full bg-white text-sm" min="0.1" step="0.1" type="number" value="1"/>
</div>
</div>
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<input checked="" className="accent-black w-3.5 h-3.5" id="wastage" type="checkbox"/>
<label className="text-xs text-gray-600 cursor-pointer pt-0.5 select-none" htmlFor="wastage">Add 10% for cuts and wastage</label>
</div>
<button className="w-full bg-[#1a1a1a] text-white h-14 flex items-center justify-center text-xs md:text-sm uppercase tracking-widest font-medium hover:bg-black transition group">
<span>Order</span>
<span className="mx-3 opacity-30">|</span>
<span>£61.32</span>
<iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-[10px] text-center text-gray-500 mt-3">If your order is time-sensitive, please contact us to confirm quantity.</p>
</div>

<div className="flex gap-3 mb-10">
<button className="flex-1 bg-white border border-[#1a1a1a] text-[#1a1a1a] h-12 flex items-center justify-center text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#fbfaf8] transition font-medium">
              Cut Tile Sample (Free)
            </button>
<button className="flex-1 bg-white border border-[#e5e5e5] text-gray-600 h-12 flex items-center justify-center text-[10px] md:text-xs uppercase tracking-widest hover:border-gray-300 transition font-medium">
              Full Sample (£0.46)
            </button>
</div>

<div className="border-t border-[#e5e5e5]">

<details className="group border-b border-[#e5e5e5]">
<summary className="flex justify-between items-center cursor-pointer py-5">
<span className="text-xs uppercase tracking-widest font-medium">Specification</span>
<iconify-icon className="icon-chevron transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-gray-600 leading-relaxed font-light">
<div className="grid grid-cols-2 gap-y-3 mb-4">
<div className="text-gray-400">Tile Property</div><div className="text-right md:text-left text-[#1a1a1a]">Porcelain</div>
<div className="text-gray-400">Tile Finish</div><div className="text-right md:text-left text-[#1a1a1a]">Matt</div>
<div className="text-gray-400">Tile Size</div><div className="text-right md:text-left text-[#1a1a1a]">5cm x 15cm</div>
<div className="text-gray-400">Tile Thickness</div><div className="text-right md:text-left text-[#1a1a1a]">10mm</div>
<div className="text-gray-400">Weight Per Tile</div><div className="text-right md:text-left text-[#1a1a1a]">0.16 kg</div>
<div className="text-gray-400">Weight Per Box</div><div className="text-right md:text-left text-[#1a1a1a]">10.35 kg</div>
<div className="text-gray-400">Tiles Per Box</div><div className="text-right md:text-left text-[#1a1a1a]">66</div>
<div className="text-gray-400">Tiles Per m²</div><div className="text-right md:text-left text-[#1a1a1a]">133.3</div>
</div>
<div className="pt-3 border-t border-gray-100 flex justify-between">
<div className="text-gray-400">Slip Resistance Rating</div>
<div className="text-right md:text-left text-[#1a1a1a] flex gap-2">
<span className="bg-gray-100 px-2 py-0.5 text-xs rounded-sm">PTV42</span>
<span className="bg-gray-100 px-2 py-0.5 text-xs rounded-sm">R10</span>
</div>
</div>
</div>
</details>

<details className="group border-b border-[#e5e5e5]">
<summary className="flex justify-between items-center cursor-pointer py-5">
<span className="text-xs uppercase tracking-widest font-medium">Suitable for…</span>
<iconify-icon className="icon-chevron transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-gray-600 leading-relaxed font-light">
<ul className="list-disc pl-4 space-y-2 marker:text-gray-300">
<li>Fireplace</li>
<li>Floors</li>
<li>Outside (Frostproof &amp; Anti-Slip)</li>
<li>Underfloor Heating</li>
<li>Walls</li>
<li>Wet Room Floors</li>
</ul>
</div>
</details>

<details className="group border-b border-[#e5e5e5]">
<summary className="flex justify-between items-center cursor-pointer py-5">
<span className="text-xs uppercase tracking-widest font-medium">Shipping Information</span>
<iconify-icon className="icon-chevron transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="pb-5 text-sm text-gray-600 leading-relaxed font-light space-y-4">
<p><strong className="font-medium text-[#1a1a1a]">Important delivery information:</strong> To ensure you receive your order at a time that suits you, we never dispatch your items without confirming a convenient date with you. One of our team members will be in touch via email to arrange your delivery, so please keep an eye out for it in your inbox.</p>
<p>From the point of order, in-stock items are usually delivered within 3-5 working days, but please call us if you need your order sooner, and we’ll try our best to accommodate.</p>
<p><strong className="font-medium text-[#1a1a1a]">Out of stock items:</strong> Once your order is placed, we will confirm an ETA for any out-of-stock items, if part of your order is out of stock, the in-stock items will be reserved until the full order is available. If you would like to arrange two deliveries, please call us.</p>
</div>
</details>
</div>
</div>
</div>
</div>

<section className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-b border-[#e5e5e5]">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-3 tracking-tight">Perfect Pairings</h2>
<p className="text-gray-500 font-light text-[10px] md:text-xs uppercase tracking-widest">Don't forget the essentials</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<a className="group block cursor-pointer" href="#">
<div className="aspect-square bg-[#fbfaf8] mb-4 overflow-hidden relative border border-[#e5e5e5] p-6 flex items-center justify-center">
<img alt="Peach Beige Grout" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://www.bakedtiles.co.uk/cdn/shop/files/Kerakoll-Fugabella-Color-Grout-32-Peach-Beige-3Kg_2fc7de91.webp?v=1756708492"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[9px] uppercase tracking-widest font-medium shadow-sm border border-gray-100">Grout</div>
</div>
<h3 className="text-xs font-normal text-[#1a1a1a] mb-1 leading-snug">Kerakoll Fugabella Color Grout 32 Peach Beige 3Kg</h3>
<p className="text-sm text-gray-500 font-light">£12.50</p>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-square bg-[#fbfaf8] mb-4 overflow-hidden relative border border-[#e5e5e5] p-6 flex items-center justify-center">
<img alt="Pale Umber Grout" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://www.bakedtiles.co.uk/cdn/shop/files/Kerakoll-Fugabella-Color-Grout-31-Pale-Umber-3Kg_5f8cde88.webp?v=1756708489"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[9px] uppercase tracking-widest font-medium shadow-sm border border-gray-100">Grout</div>
</div>
<h3 className="text-xs font-normal text-[#1a1a1a] mb-1 leading-snug">Kerakoll Fugabella Color Grout 31 Pale Umber 3Kg</h3>
<p className="text-sm text-gray-500 font-light">£12.50</p>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-square bg-[#fbfaf8] mb-4 overflow-hidden relative border border-[#e5e5e5] p-6 flex items-center justify-center">
<img alt="Gel Adhesive" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://www.bakedtiles.co.uk/cdn/shop/files/H40-Gel-Adhesive-20kg-Grey.webp?v=1754034293"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[9px] uppercase tracking-widest font-medium shadow-sm border border-gray-100">Adhesive</div>
</div>
<h3 className="text-xs font-normal text-[#1a1a1a] mb-1 leading-snug">H40 Gel Adhesive 20kg - Grey</h3>
<p className="text-sm text-gray-500 font-light">£24.50</p>
</a>

<a className="group block cursor-pointer" href="#">
<div className="aspect-square bg-[#fbfaf8] mb-4 overflow-hidden relative border border-[#e5e5e5] p-6 flex items-center justify-center">
<img alt="Silicone" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://www.bakedtiles.co.uk/cdn/shop/files/Kerakoll-Silicone-Colour-43-Sand-Stone-Beige-310ML.webp?v=1754028113"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[9px] uppercase tracking-widest font-medium shadow-sm border border-gray-100">Silicone</div>
</div>
<h3 className="text-xs font-normal text-[#1a1a1a] mb-1 leading-snug">Kerakoll Silicone Colour 43 Sand Stone Beige 310ml</h3>
<p className="text-sm text-gray-500 font-light">£16.00</p>
</a>
</div>
</section>

<section className="bg-[#e1dfd8] text-[#1a1a1a] py-24 px-6 md:px-12 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">Need help or style advice?</h2>
<p className="font-light text-sm md:text-base opacity-80 mb-10 leading-relaxed">At Baked Tiles, we know that choosing tiles is about more than just picking a colour or style, it’s about creating a space that feels like home. That’s why we offer a range of tailored design services to help bring your vision to life.</p>
<div className="flex flex-col justify-center items-center">
<a className="bg-[#1a1a1a] text-white h-14 px-10 flex items-center justify-center text-[10px] md:text-xs uppercase tracking-widest hover:bg-black transition font-medium" href="#">
            Book Appointment
          </a>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-20 pb-10 px-6 md:px-12 border-t border-[#e5e5e5]">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<img alt="Baked Tiles" className="h-8 mb-8 object-contain" src="//www.bakedtiles.co.uk/cdn/shop/files/BT_Logo_Blue_Hug.svg"/>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#1a1a1a] transition" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#1a1a1a] transition" href="#"><iconify-icon icon="mdi:pinterest" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#1a1a1a] transition" href="#"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-normal mb-6 text-[#1a1a1a]">About Baked Tiles</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition" href="#">About us</a></li>
<li><a className="hover:text-black transition" href="#">Our Showroom</a></li>
<li><a className="hover:text-black transition" href="#">Blog</a></li>
<li><a className="hover:text-black transition" href="#">Reviews</a></li>
<li><a className="hover:text-black transition" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-normal mb-6 text-[#1a1a1a]">Help &amp; Support</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition" href="#">Help Centre</a></li>
<li><a className="hover:text-black transition" href="#">Tile Visualiser</a></li>
<li><a className="hover:text-black transition" href="#">Delivery &amp; Returns</a></li>
<li><a className="hover:text-black transition" href="#">Trade Accounts</a></li>
<li><a className="hover:text-black transition" href="#">Video Guides</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-normal mb-6 text-[#1a1a1a]">Legal</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition" href="#">Refund Policy</a></li>
<li><a className="hover:text-black transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-[1800px] mx-auto border-t border-[#e5e5e5] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
<p>© 2026 Baked Tiles. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#e5e5e5] p-4 lg:hidden z-40 flex gap-4 items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<div className="flex-1">
<div className="text-sm font-medium text-[#1a1a1a]">£61.32 <span className="text-[10px] text-gray-500 font-light uppercase tracking-wider">/m²</span></div>
</div>
<button className="bg-[#1a1a1a] text-white px-8 h-12 flex items-center justify-center text-[10px] uppercase tracking-widest font-medium hover:bg-black transition">
      Order Now
    </button>
</div>

    </>
  );
}
