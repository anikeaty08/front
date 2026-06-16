import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Product data
      const products = [
        {
          title: "Structured Minimalist Blazer",
          price: "$485",
          stock: "Almost Sold Out",
          stockColor: "text-neutral-500",
          description: "Sharp tailoring meets contemporary comfort in this expertly crafted blazer. Made from premium wool blend with clean lines and a structured silhouette that works seamlessly from office to evening.",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f3c86a4-80b4-4a49-b8e1-90d97dd42d93_800w.jpg"
        },
        {
          title: "Asymmetric Drape Dress",
          price: "$720",
          stock: "In Stock",
          stockColor: "text-green-600",
          description: "Fluid silhouette with architectural details that create movement and interest. This piece features an asymmetric hemline and draping that flatters every body type while maintaining contemporary elegance.",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1b56f8e-aa02-4cd2-8f19-6bfb1ccad521_800w.jpg"
        },
        {
          title: "Oversized Wool Coat",
          price: "$1,250",
          stock: "Sold Out",
          stockColor: "text-red-600",
          description: "Statement outerwear for the modern wardrobe. This oversized coat features premium wool construction with clean lines and a dramatic silhouette that makes every outfit feel intentional and sophisticated.",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56689fe6-e240-471a-ba5f-e0795592a8c4_800w.jpg"
        },
        {
          title: "Wide Leg Trousers",
          price: "$395",
          stock: "In Stock",
          stockColor: "text-green-600",
          description: "Effortless elegance in premium fabric. These wide-leg trousers offer comfort and style with a flattering high-waisted cut and fluid drape that works beautifully for both casual and formal occasions.",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a6ef607-2253-484f-b957-1afb4a1f2d62_800w.jpg"
        },
        {
          title: "Cashmere Knit Sweater",
          price: "$650",
          stock: "Limited Stock",
          stockColor: "text-neutral-500",
          description: "Luxury comfort in timeless design. Crafted from the finest cashmere with a relaxed fit and clean aesthetic that embodies effortless sophistication and all-day wearability.",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3c2511d-906f-428c-8556-5ca787aecab6_800w.jpg"
        },
        {
          title: "Signature Leather Bag",
          price: "$890",
          stock: "In Stock",
          stockColor: "text-green-600",
          description: "Handcrafted luxury meets functionality. This signature piece features premium leather construction with thoughtful details and a timeless design that elevates any ensemble while providing practical daily use.",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/098f8555-dd14-4a50-a4d5-d70ececfb834_800w.jpg"
        }
      ];

      function openProductModal(index) {
        const modal = document.getElementById('productModal');
        const modalImage = document.getElementById('modalProductImage');
        const modalTitle = document.getElementById('modalProductTitle');
        const modalPrice = document.getElementById('modalProductPrice');
        const modalStock = document.getElementById('modalProductStock');
        const modalDescription = document.getElementById('modalProductDescription');

        const product = products[index];
        
        modalImage.src = product.image;
        modalImage.alt = product.title;
        modalTitle.textContent = product.title;
        modalPrice.textContent = product.price;
        modalStock.textContent = product.stock;
        modalStock.className = `text-xs uppercase tracking-tight ${product.stockColor}`;
        modalDescription.textContent = product.description;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      function closeProductModal() {
        const modal = document.getElementById('productModal');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }

      // Close modal with escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeProductModal();
        }
      });
    


      // Collection data
      const collections = [
        {
          title: "Ethereal Dreams",
          description: "Soft abstract gradients inspired by the liminal space between consciousness and dreams. This collection explores the boundary between reality and imagination through fluid forms and gentle transitions.",
          season: "Spring/Summer 2024",
          style: "Abstract Minimalism",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a6ef607-2253-484f-b957-1afb4a1f2d62_800w.jpg"
        },
        {
          title: "Light Fragments",
          description: "Capturing the delicate interplay of light and shadow, this collection celebrates the ephemeral nature of illumination. Each piece represents a moment frozen in time.",
          season: "Spring/Summer 2024",
          style: "Contemporary Light",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/feb7c87d-0796-4ecc-8a97-c29b57e6930c_800w.jpg"
        },
        {
          title: "Geometric Whispers",
          description: "A study in minimalist geometry where clean lines meet organic sensibilities. This collection speaks to the mathematical beauty found in nature's simplest forms.",
          season: "Fall/Winter 2024",
          style: "Geometric Minimal",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/615f7999-3b42-40ac-ab02-5ed31b61c27e_800w.jpg"
        },
        {
          title: "Solitude Studies",
          description: "Finding beauty in isolation and contemplation. This collection explores the powerful emotions that emerge from moments of quiet reflection and introspection.",
          season: "Fall/Winter 2024",
          style: "Atmospheric",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4968ecb8-3736-4f9e-8f4c-b4a0b91e0150_800w.jpg"
        },
        {
          title: "Portrait Intimacy",
          description: "An intimate exploration of human emotion through close portraiture. Each piece captures the subtle nuances of expression and the stories written in light and shadow.",
          season: "Spring/Summer 2024",
          style: "Portrait Contemporary",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91a0dad7-9c65-4417-b2ca-dae54b5c8663_800w.jpg"
        },
        {
          title: "Chromatic Bold",
          description: "A celebration of bold color and confident expression. This collection challenges traditional palettes with vibrant hues that demand attention and inspire confidence.",
          season: "Spring/Summer 2024",
          style: "Color Forward",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc8893de-36bd-49f8-afa3-07376be74e11_800w.jpg"
        },
        {
          title: "Spectrum Flow",
          description: "Where color transcends boundaries and flows like music made visible. This collection represents the full spectrum of human emotion through dynamic color relationships.",
          season: "Fall/Winter 2024",
          style: "Gradient Contemporary",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b290643c-4949-4088-ad45-44b86498d53f_800w.jpg"
        },
        {
          title: "Surface Tension",
          description: "Exploring the subtle textures and surfaces that surround us daily. This collection finds extraordinary beauty in the ordinary through careful observation and minimal intervention.",
          season: "Fall/Winter 2024",
          style: "Textural Minimal",
          image: "https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f3c86a4-80b4-4a49-b8e1-90d97dd42d93_800w.jpg"
        }
      ];

      function openModal(index) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDescription = document.getElementById('modalDescription');
        const modalSeason = document.getElementById('modalSeason');
        const modalStyle = document.getElementById('modalStyle');

        const collection = collections[index];
        
        modalImage.src = collection.image;
        modalImage.alt = collection.title;
        modalTitle.textContent = collection.title;
        modalDescription.textContent = collection.description;
        modalSeason.textContent = collection.season;
        modalStyle.textContent = collection.style;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        const modal = document.getElementById('imageModal');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }

      // Close modal with escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal();
        }
      });

      // Initialize lucide
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 bg-white/80 border-neutral-200 border-b top-0 right-0 left-0 backdrop-blur-sm">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<div className="text-xl font-semibold tracking-tight cursor-pointer" onclick="window.location.href='/home'" role="button">MAZERA</div>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight" href="/home">Home</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight" href="/women">Women</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight" href="/men">Men</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-600 tracking-tight" href="/about">About</a>
</div>
</div>
<div className="flex items-center gap-4">
<nav className="hidden sm:flex items-center gap-3 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition-colors tracking-tight" href="#">BE</a>
<span className="text-neutral-300">/</span>
<a className="hover:text-neutral-900 transition-colors tracking-tight" href="#">DR</a>
<span className="text-neutral-300">/</span>
<a className="hover:text-neutral-900 transition-colors tracking-tight" href="#">X</a>
</nav>
</div>
</div>
</div>
</nav>

<main className="relative">
<section className="sm:px-6 max-w-[1200px] mr-auto ml-auto pr-5 pl-5 space-y-6">
<div className="sm:pt-36 md:pt-44 lg:pt-48 text-center pt-32 space-y-6">
<h1 className="text-[48px] sm:text-[80px] md:text-[120px] lg:text-[168px] leading-[0.85] font-semibold tracking-tight max-w-[12ch] mr-auto ml-auto">MAZERA<span className="align-super text-[0.3em] font-medium ml-1">™</span></h1>
<p className="sm:mt-6 sm:text-lg md:text-xl text-base text-neutral-600 tracking-tight mt-5">Defining tomorrow's runway.</p><div className="relative inline-block group">
<button className="cursor-pointer flex transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 shadow-[5px_5px_0px_black] gap-x-2 gap-y-2 items-center justify-center">
  Check it out!
  <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
</svg>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</section><section className="sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-20 pl-4">
<div className="relative mt-8 sm:mt-12">
<style>
      @keyframes marquee-left {
        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }
      }
    </style>
<div className="mx-auto max-w-6xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 sm:pr-4 pr-2 gap-x-2 gap-y-2">
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion designer" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a6ef607-2253-484f-b957-1afb4a1f2d62_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion enthusiast" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/feb7c87d-0796-4ecc-8a97-c29b57e6930c_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Style innovator" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/615f7999-3b42-40ac-ab02-5ed31b61c27e_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion creative" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4968ecb8-3736-4f9e-8f4c-b4a0b91e0150_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91a0dad7-9c65-4417-b2ca-dae54b5c8663_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Design visionary" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc8893de-36bd-49f8-afa3-07376be74e11_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion revolutionary" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b290643c-4949-4088-ad45-44b86498d53f_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Style maven" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f3c86a4-80b4-4a49-b8e1-90d97dd42d93_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion insider" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Creative director" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion pioneer" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Luxury designer" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Style curator" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion influencer" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Contemporary artist" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion trendsetter" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fb2fc17e-3dfe-4779-a63f-3a3cc4d6f8e0_800w.jpg"/>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion designer" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a6ef607-2253-484f-b957-1afb4a1f2d62_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion enthusiast" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/feb7c87d-0796-4ecc-8a97-c29b57e6930c_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Style innovator" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/615f7999-3b42-40ac-ab02-5ed31b61c27e_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion creative" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4968ecb8-3736-4f9e-8f4c-b4a0b91e0150_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion professional" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91a0dad7-9c65-4417-b2ca-dae54b5c8663_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Design visionary" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img 0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg"="" alt="Fashion revolutionary" assets="" className="w-full h-20 sm:h-28 lg:h-36 object-cover" object="" public="" srcuwj-all.supabase.co="" storage="" v1=""/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Style maven" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion insider" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Creative director" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion pioneer" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Luxury designer" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Style curator" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion influencer" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Contemporary artist" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg"/>
</div>
<div className="overflow-hidden border-8 border-black bg-neutral-100 rounded-[28px]"><img alt="Fashion trendsetter" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-10 sm:mt-14 md:mt-16 overflow-hidden">
</section>

<section className="relative h-screen w-full overflow-hidden mt-16 sm:mt-24">
<div className="absolute inset-0">
<img alt="Fashion collection showcase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/175a874e-b37a-4c0c-afb5-ee62ae85424c_800w.jpg"/>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="z-10 flex h-full relative items-center justify-center">
<button className="font-montserrat text-lg border-2 border-white rounded-md px-6 py-3 bg-white/10 backdrop-blur-sm text-white shadow-[5px_5px_0px_rgba(255,255,255,0.2)] cursor-pointer text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-white/20">
            Shop New Collection
            <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:mt-32 lg:mt-20 max-w-7xl mt-0 mr-auto ml-auto pr-4 pl-4" data-element-id="aura-emfzljit3">
<div className="sm:pt-20 border-neutral-200 border-0 pt-16">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">Best Sellers</h2>
<p className="text-lg text-neutral-600 tracking-tight max-w-2xl mx-auto">Our most coveted pieces that define contemporary fashion and continue to sell out worldwide.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">

<div className="group cursor-pointer" onclick="openProductModal(0)">
<div className="overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 bg-white border-black border-8 rounded-[28px]">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
<img alt="Minimalist Blazer" className="group-hover:scale-105 transition-transform duration-300 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f3c86a4-80b4-4a49-b8e1-90d97dd42d93_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Structured Minimalist Blazer</h3>
<p className="text-neutral-600 text-sm tracking-tight mb-3">Sharp tailoring meets contemporary comfort</p>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">$485</span>
<span className="text-xs uppercase text-neutral-500 tracking-tight">Almost Sold Out</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal(1)">
<div className="border-8 border-black bg-white overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-[28px]">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
<img alt="Asymmetric Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1b56f8e-aa02-4cd2-8f19-6bfb1ccad521_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Asymmetric Drape Dress</h3>
<p className="text-neutral-600 text-sm tracking-tight mb-3">Fluid silhouette with architectural details</p>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">$720</span>
<span className="text-xs uppercase text-green-600 tracking-tight">In Stock</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal(2)">
<div className="border-8 border-black bg-white overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-[28px]">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
<img alt="Oversized Coat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/56689fe6-e240-471a-ba5f-e0795592a8c4_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Oversized Wool Coat</h3>
<p className="text-neutral-600 text-sm tracking-tight mb-3">Statement outerwear for the modern wardrobe</p>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">$1,250</span>
<span className="text-xs uppercase text-red-600 tracking-tight">Sold Out</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal(3)">
<div className="border-8 border-black bg-white overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-[28px]">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
<img alt="Wide Leg Trousers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a6ef607-2253-484f-b957-1afb4a1f2d62_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Wide Leg Trousers</h3>
<p className="text-neutral-600 text-sm tracking-tight mb-3">Effortless elegance in premium fabric</p>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">$395</span>
<span className="text-xs uppercase text-green-600 tracking-tight">In Stock</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal(4)">
<div className="border-8 border-black bg-white overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-[28px]">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
<img alt="Knit Sweater" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3c2511d-906f-428c-8556-5ca787aecab6_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Cashmere Knit Sweater</h3>
<p className="text-neutral-600 text-sm tracking-tight mb-3">Luxury comfort in timeless design</p>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">$650</span>
<span className="text-xs uppercase text-neutral-500 tracking-tight">Limited Stock</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal(5)">
<div className="border-8 border-black bg-white overflow-hidden transition-transform group-hover:translate-x-1 group-hover:translate-y-1 rounded-[28px]">
<div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
<img alt="Statement Accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/098f8555-dd14-4a50-a4d5-d70ececfb834_800w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight mb-2">Signature Leather Bag</h3>
<p className="text-neutral-600 text-sm tracking-tight mb-3">Handcrafted luxury meets functionality</p>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">$890</span>
<span className="text-xs uppercase text-green-600 tracking-tight">In Stock</span>
</div>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<div className="flex justify-center">
<button className="cursor-pointer flex gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-1.5 pr-2 pb-1.5 pl-2 shadow-[5px_5px_0px_black] gap-x-2 gap-y-2 items-center justify-center">
          Shop Best Sellers
          <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="productModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeProductModal()"></div>

<div className="relative h-full flex items-center justify-center p-6">
<div className="relative max-w-4xl w-full bg-white border-8 border-black rounded-[28px] max-h-[90vh] overflow-hidden">

<div className="grid lg:grid-cols-2 h-full min-h-[500px] lg:min-h-[600px]">

<div className="bg-neutral-50 rounded-l-[20px] overflow-hidden">
<img alt="" className="w-full h-full object-cover" id="modalProductImage" src=""/>
</div>

<div className="p-8 lg:p-10 flex flex-col justify-center">
<div className="space-y-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2" id="modalProductTitle">Product Title</h2>
<p className="text-xl font-medium mb-1" id="modalProductPrice">$0</p>
<p className="text-xs uppercase tracking-tight text-neutral-500" id="modalProductStock">Stock Status</p>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight mb-3 text-neutral-700 uppercase">Description</h3>
<p className="text-neutral-600 leading-relaxed tracking-tight mb-6" id="modalProductDescription">Product description goes here...</p>
</div>
<div className="space-y-4">
<div>
<h3 className="text-sm font-medium tracking-tight mb-3 text-neutral-700 uppercase">Size</h3>
<div className="flex gap-2">
<button className="border-2 border-black px-3 py-1 text-sm rounded-md bg-white hover:bg-neutral-100 transition-colors">XS</button>
<button className="border-2 border-black px-3 py-1 text-sm rounded-md bg-white hover:bg-neutral-100 transition-colors">S</button>
<button className="border-2 border-black px-3 py-1 text-sm rounded-md bg-white hover:bg-neutral-100 transition-colors">M</button>
<button className="border-2 border-black px-3 py-1 text-sm rounded-md bg-white hover:bg-neutral-100 transition-colors">L</button>
<button className="border-2 border-black px-3 py-1 text-sm rounded-md bg-white hover:bg-neutral-100 transition-colors">XL</button>
</div>
</div>
</div>
<div className="flex gap-3 pt-4">
<button className="cursor-pointer flex gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-[5px_5px_0px_black] items-center justify-center flex-1">
                    Add to Cart
                    <svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" fill-rule="evenodd"></path>
</svg>
</button>
<button className="cursor-pointer transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] text-sm font-bold font-montserrat text-center bg-white border-black border-2 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-[5px_5px_0px_black] flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<button className="fixed top-6 right-6 z-[101] w-12 h-12 bg-black text-white rounded-full flex items-center justify-center transition-all duration-200 hover:bg-neutral-800 hover:scale-110 shadow-lg" onclick="closeProductModal()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

</div>
</section>

<section className="relative h-screen w-full overflow-hidden mt-16 sm:mt-24">
<div className="z-10 flex h-full relative items-center justify-center">
<button className="font-montserrat text-lg border-2 border-white rounded-md px-6 py-3 bg-white/10 backdrop-blur-sm text-white shadow-[5px_5px_0px_rgba(255,255,255,0.2)] cursor-pointer text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px] hover:bg-white/20">
            Shop New Collection
            <svg className="w-6 h-6 transition-all duration-300 ease-in-out" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
</svg>
</button>
</div><div className="absolute inset-0">
<img alt="Fashion model showcase" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/229f88ef-302d-48b7-83ec-782f2e90a099_800w.jpg"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
</section><section className="sm:px-6 lg:px-8 sm:mt-32 lg:mt-20 max-w-7xl mt-24 mr-auto ml-auto pr-4 pl-4">
<div className="sm:pt-20 border-neutral-200 border-0 pt-16 pb-16">
<div className="mb-10 sm:mb-12 flex items-center justify-between">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">About MAZERA<span className="text-neutral-300">.</span></h2>
<a className="hidden sm:flex items-center gap-2 text-neutral-900 text-sm font-medium tracking-tight hover:underline" href="/about">
      Learn more
      <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
<div className="">
<p className="text-lg sm:text-xl text-neutral-600 leading-relaxed tracking-tight mb-6">We are a creative collective pushing the boundaries of contemporary fashion design. Our vision transcends traditional runway expectations.</p>
<p className="text-base text-neutral-600 leading-relaxed tracking-tight">Founded in 2021, MAZERA represents a new generation of designers who believe fashion should provoke thought, challenge norms, and inspire transformation. Each collection tells a story of human emotion and artistic expression.</p>
</div>
<div className="space-y-8">
<div className="border-l-4 border-black pl-6">
<h3 className="text-xl font-medium tracking-tight mb-2">Our Philosophy</h3>
<p className="text-neutral-600 tracking-tight">Fashion as art. Art as expression. Expression as transformation.</p>
</div>
<div className="border-l-4 border-black pl-6">
<h3 className="text-xl font-medium tracking-tight mb-2">Recognition</h3>
<p className="text-neutral-600 tracking-tight">Featured in Vogue, Harper's Bazaar, and Elle. Winner of the 2023 Emerging Designer Award.</p>
</div>
<div className="border-l-4 border-black pl-6">
<h3 className="text-xl font-medium tracking-tight mb-2">Global Presence</h3>
<p className="text-neutral-600 tracking-tight">Showrooms in New York, London, Paris, and Tokyo. Available in 50+ boutiques worldwide.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 gap-x-6 gap-y-6">

<div className="relative border-black border-8 bg-violet-100 rounded-[28px] overflow-hidden h-80 sm:h-96 flex flex-col">
<div className="px-6 pt-6">
<span className="text-neutral-700 text-sm tracking-tight">( 001 )</span>
</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-globe-2 w-12 h-12 sm:w-14 sm:h-14 text-neutral-900" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="px-6 pb-6">
<h3 className="text-sm font-medium uppercase tracking-tight mb-2">Worldwide Delivery</h3>
<p className="text-neutral-600 text-sm tracking-tight">Exclusive pieces shipped globally within 3–5 business days.</p>
</div>
</div>

<div className="relative border-black border-8 bg-lime-100 rounded-[28px] overflow-hidden h-80 sm:h-96 flex flex-col">
<div className="px-6 pt-6">
<span className="text-neutral-700 text-sm tracking-tight">( 002 )</span>
</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-scissors w-12 h-12 sm:w-14 sm:h-14 text-neutral-900" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<div className="px-6 pb-6">
<h3 className="text-sm font-medium uppercase tracking-tight mb-2">Bespoke Tailoring</h3>
<p className="text-neutral-600 text-sm tracking-tight">Personal styling consultations and made-to-measure craftsmanship.</p>
</div>
</div>

<div className="relative border-black border-8 bg-rose-100 rounded-[28px] overflow-hidden h-80 sm:h-96 flex flex-col">
<div className="px-6 pt-6">
<span className="text-neutral-700 text-sm tracking-tight">( 003 )</span>
</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-leaf w-12 h-12 sm:w-14 sm:h-14 text-neutral-900" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="px-6 pb-6">
<h3 className="text-sm font-medium uppercase tracking-tight mb-2">Sustainable Luxury</h3>
<p className="text-neutral-600 text-sm tracking-tight">Ethically sourced materials and carbon‑neutral production.</p>
</div>
</div>

<div className="relative border-black border-8 bg-amber-100 rounded-[28px] overflow-hidden h-80 sm:h-96 flex flex-col">
<div className="px-6 pt-6">
<span className="text-neutral-700 text-sm tracking-tight">( 004 )</span>
</div>
<div className="flex-1 flex items-center justify-center">
<svg className="lucide lucide-infinity w-12 h-12 sm:w-14 sm:h-14 text-neutral-900" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<div className="px-6 pb-6">
<h3 className="text-sm font-medium uppercase tracking-tight mb-2">Lifetime Care</h3>
<p className="text-neutral-600 text-sm tracking-tight">Complimentary alterations and dedicated maintenance for every piece.</p>
</div>
</div>
</div>
</div>
</section>




<footer className="sm:px-6 lg:px-8 sm:mt-32 lg:mt-20 max-w-7xl mt-24 mr-auto ml-auto pr-4 pl-4">
<div className="border-neutral-200 border-t pt-4 pb-4">
<div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-6 items-start justify-between">
<div className="">
<div className="text-2xl font-semibold tracking-tight mb-2">MAZERA<span className="align-super text-[0.6em] font-medium ml-1">™</span></div>
<p className="text-neutral-600 text-sm tracking-tight">© 2024 MAZERA. All rights reserved.</p>
</div>
<div className="flex gap-8 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors tracking-tight" href="#">Privacy</a>
<a className="hover:text-neutral-900 transition-colors tracking-tight" href="#">Terms</a>
<a className="hover:text-neutral-900 transition-colors tracking-tight" href="#">Careers</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[100] hidden" id="imageModal">

<div className="absolute inset-0 bg-black/60 modal-backdrop" onclick="closeModal()"></div>

<div className="relative h-full flex items-center justify-center p-4 sm:p-8">
<div className="relative max-w-5xl w-full bg-white border-8 border-black max-h-[90vh]">

<button className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-black text-white flex items-center justify-center transition-all duration-200 hover:bg-neutral-800" onclick="closeModal()">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="grid lg:grid-cols-2 h-full min-h-[500px] lg:min-h-[600px]">

<div className="bg-neutral-50">
<img alt="" className="w-full h-full object-cover" id="modalImage" src=""/>
</div>

<div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
<div className="space-y-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1" id="modalTitle">Collection Name</h2>
<p className="text-neutral-500 text-sm tracking-tight uppercase">MAZERA™ 2024</p>
</div>
<div className="space-y-4">
<div>
<h3 className="text-base font-medium tracking-tight mb-2">Description</h3>
<p className="text-neutral-600 text-sm leading-relaxed tracking-tight" id="modalDescription">Collection description goes here...</p>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<div>
<h3 className="text-xs font-medium tracking-tight mb-1 text-neutral-400 uppercase">Season</h3>
<p className="text-neutral-900 text-sm tracking-tight" id="modalSeason">Spring/Summer 2024</p>
</div>
<div>
<h3 className="text-xs font-medium tracking-tight mb-1 text-neutral-400 uppercase">Style</h3>
<p className="text-neutral-900 text-sm tracking-tight" id="modalStyle">Minimalist</p>
</div>
</div>
</div>
<div className="flex gap-3 pt-4 border-t border-neutral-200">
<button className="font-montserrat text-sm border-2 border-black rounded-md px-4 py-2 bg-white shadow-[5px_5px_0px_black] cursor-pointer text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px]">
                    View Collection
                    <svg className="w-4 h-4 transition-all duration-300 ease-in-out" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
</svg>
</button>
<button className="font-montserrat text-sm border-2 border-black rounded-md px-4 py-2 bg-white shadow-[5px_5px_0px_black] cursor-pointer text-center font-bold flex items-center justify-center gap-2 transition-all duration-300 ease hover:shadow-none hover:translate-y-[3px] hover:translate-x-[3px]">
                    Lookbook
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
