import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl tracking-tight text-stone-900 font-medium font-serif-display" href="#" onclick="showHome()">
                Luxe Aesthetic Lab
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-stone-900 transition-colors" href="#about" onclick="showHome()">About</a>
<a className="text-sm font-medium hover:text-stone-900 transition-colors" href="#services" onclick="showHome()">Services</a>
<a className="text-sm font-medium hover:text-stone-900 transition-colors" href="#testimonials" onclick="showHome()">Reviews</a>
<a className="text-sm font-medium hover:text-stone-900 transition-colors" href="#faq" onclick="showHome()">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-3 border-r border-stone-200 pr-4">
<a className="hover:text-stone-900 transition-colors" href="https://www.instagram.com/luxeaestheticlab" target="_blank">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
<a className="hidden sm:block bg-stone-900 text-stone-50 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-sm" href="https://www.vagaro.com/luxeaestheticlab" target="_blank">
                    Book A Visit
                </a>
</div>
</div>
</header>

<main className="page-transition" id="main-view">

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Luxe Aesthetic Lab Spa Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-stone-900/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center max-w-3xl px-6">
<span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium tracking-wide mb-6 uppercase">
                    Est. East Meadow, NY
                </span>
<h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight leading-tight">
                    Your Journey, Your Skin,<br/>Our Expertise.
                </h1>
<p className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Experience the ultimate in personalized care. We are a results-oriented aesthetic lab tailored to your unique skin physiology.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-white text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors" href="#services">
                        View Services
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative h-[500px] rounded-sm overflow-hidden bg-stone-100">
<img alt="Sophia Skincare Specialist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl text-stone-900 mb-6 tracking-tight font-medium">Not a traditional spa. <br/>A results-oriented lab.</h2>
<div className="space-y-6 text-lg font-light leading-relaxed">
<p>
                            Luxe Aesthetic Lab is a boutique skincare studio specializing in advanced, personalized facial treatments. We focus on skin revision for concerns such as acne, reactive pigmentation, and age management.
                        </p>
<p>
                            Led by Sophia, our skilled esthetician with over a decade of experience, we craft customized skincare solutions tailored to your unique needs.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl text-stone-900 tracking-tight font-medium">Our Services</h2>
<p className="text-stone-500 mt-4 max-w-xl">Curated treatments designed to restore, rebuild, and maintain your skin's natural barrier. Select a service to learn more.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer block" onclick="openService('24k')">
<div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-6 relative">
<img alt="24k Gold Facial" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512290923902-8a92f6350ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<h3 className="text-2xl font-serif-display text-[#BFA15F] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                            24k Gold Hydro Facial <i className="w-5 h-5 text-[#BFA15F]" data-lucide="chevron-right"></i>
</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-3">
                            The ultimate hydration experience combining exfoliation, extraction, and 24k gold infusion.
                        </p>
<p className="text-[#BFA15F] font-medium text-sm">$265</p>
</div>

<div className="group cursor-pointer block" onclick="openService('custom')">
<div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Custom Facial" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<h3 className="text-2xl font-serif-display text-[#BFA15F] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                            Custom Facial <i className="w-5 h-5 text-[#BFA15F]" data-lucide="chevron-right"></i>
</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-3">
                            A tailored treatment targeting your individual skin concerns with personalized care.
                        </p>
<p className="text-[#BFA15F] font-medium text-sm">$185</p>
</div>

<div className="group cursor-pointer block" onclick="openService('glow')">
<div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Glow Detox Facial" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<h3 className="text-2xl font-serif-display text-[#BFA15F] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                            Glow Detox Facial <i className="w-5 h-5 text-[#BFA15F]" data-lucide="chevron-right"></i>
</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-3">
                            Deep cleansing and balancing treatment to clear congestion and restore radiance.
                        </p>
<p className="text-[#BFA15F] font-medium text-sm">$150</p>
</div>

<div className="group cursor-pointer block" onclick="openService('dmk')">
<div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-6 relative">
<img alt="DMK Enzyme Therapy" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<h3 className="text-2xl font-serif-display text-[#BFA15F] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                            DMK Skin Revision <i className="w-5 h-5 text-[#BFA15F]" data-lucide="chevron-right"></i>
</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-3">
                            Advanced paramedical skin revision working at a cellular level to rebuild skin function.
                        </p>
<p className="text-[#BFA15F] font-medium text-sm">From $250</p>
</div>

<div className="group cursor-pointer block" onclick="openService('brows')">
<div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Ombre Brows" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588006173599-2aeb8dc3c0a9?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<h3 className="text-2xl font-serif-display text-[#BFA15F] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                            Ombré Brow &amp; Microblading <i className="w-5 h-5 text-[#BFA15F]" data-lucide="chevron-right"></i>
</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-3">
                            Semi-permanent makeup solutions tailored to your bone structure for effortless beauty.
                        </p>
<p className="text-[#BFA15F] font-medium text-sm">From $500</p>
</div>

<div className="group cursor-pointer block" onclick="openService('addons')">
<div className="aspect-[4/3] w-full overflow-hidden bg-stone-100 mb-6 relative">
<img alt="Add On Services" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606166167812-d8db6ab410dc?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<h3 className="text-2xl font-serif-display text-[#BFA15F] mb-3 flex items-center gap-2 group-hover:gap-3 transition-all">
                            Add-On Services <i className="w-5 h-5 text-[#BFA15F]" data-lucide="chevron-right"></i>
</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-3">
                            Enhance your treatment with LED Therapy, Dermaplaning, or Microcurrent.
                        </p>
<p className="text-[#BFA15F] font-medium text-sm">From $40</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 border-t border-stone-200" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl text-stone-900 mb-4 tracking-tight font-medium">Client Love</h2>
<p className="text-stone-500">See what our beautiful clients have to say about their journey.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-xl border border-stone-100">
<div className="flex gap-1 mb-4 text-[#BFA15F]">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-stone-600 mb-6 italic leading-relaxed">"Sophia was a pleasure to work with! She thoroughly explained each treatment. My skin texture and color look so much better."</p>
<p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Jaclyn Hugh</p>
</div>
<div className="bg-white p-8 rounded-xl border border-stone-100">
<div className="flex gap-1 mb-4 text-[#BFA15F]">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-stone-600 mb-6 italic leading-relaxed">"The best facial I have ever had. The attention to detail and peaceful atmosphere made it a truly luxury experience."</p>
<p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Marica Sim</p>
</div>
<div className="bg-white p-8 rounded-xl border border-stone-100">
<div className="flex gap-1 mb-4 text-[#BFA15F]">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-stone-600 mb-6 italic leading-relaxed">"I did the DMK enzyme therapy and it completely changed my skin. The clinic is beautiful and clean."</p>
<p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">Sarah Jenkins</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl text-center text-stone-900 mb-12 tracking-tight font-medium">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-xl border border-stone-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-900">
<span>What is your cancellation policy?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-stone-500 px-6 pb-6 text-sm leading-relaxed">
                            We kindly ask for at least 24 hours notice for cancellations. Late cancellations may be subject to a fee.
                        </div>
</details>
<details className="group bg-stone-50 rounded-xl border border-stone-100">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-900">
<span>How do I book an appointment?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i></span>
</summary>
<div className="text-stone-500 px-6 pb-6 text-sm leading-relaxed">
                            You can book directly through our Vagaro link or by clicking the 'Book A Visit' button in the menu.
                        </div>
</details>
</div>
</div>
</section>
</main>


<div className="hidden min-h-screen bg-white pt-20 pb-24 page-transition" id="service-24k">
<div className="max-w-7xl mx-auto px-6">
<button className="mb-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium" onclick="showHome()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Services
            </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="order-2 lg:order-1">
<h1 className="text-4xl md:text-5xl font-serif-display text-stone-900 mb-2">24k Gold Hydro Facial</h1>
<p className="text-xl text-[#BFA15F] font-medium mb-8">$265 • 90 Minutes</p>
<div className="prose prose-stone text-stone-600 font-light leading-relaxed mb-8">
<p className="mb-4">
                            Indulge in the ultimate luxury with our signature 24k Gold Hydro Facial. This multi-step treatment combines the deep cleaning power of hydro-technology with the anti-aging benefits of pure 24k gold.
                        </p>
<p className="mb-4">
                            Gold has been used for centuries to reduce inflammation and boost luminosity. This facial includes a double cleanse, hydro-extraction to clear pores, a gentle enzyme exfoliation, and a 24k gold infusion mask that penetrates deep into the dermis.
                        </p>
<h3 className="text-lg font-medium text-stone-900 mt-6 mb-3">Key Benefits</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Increases skin elasticity and firmness</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Reduces appearance of fine lines</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Brightens complexion instantly</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Deeply hydrates dehydrated skin</li>
</ul>
</div>
<a className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#BFA15F] transition-colors" href="https://www.vagaro.com/luxeaestheticlab" target="_blank">
                        Book This Treatment
                    </a>
</div>
<div className="order-1 lg:order-2 h-[500px]">
<img alt="24k Gold Facial Detail" className="w-full h-full object-cover rounded-sm shadow-xl" src="https://images.unsplash.com/photo-1512290923902-8a92f6350ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-white pt-20 pb-24 page-transition" id="service-custom">
<div className="max-w-7xl mx-auto px-6">
<button className="mb-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium" onclick="showHome()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Services
            </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="order-2 lg:order-1">
<h1 className="text-4xl md:text-5xl font-serif-display text-stone-900 mb-2">Customized Facial</h1>
<p className="text-xl text-[#BFA15F] font-medium mb-8">$185 • 80 Minutes</p>
<div className="prose prose-stone text-stone-600 font-light leading-relaxed mb-8">
<p className="mb-4">
                            Not sure what your skin needs? The Customized Facial is our "Smart Skin Reset." It is completely tailored to your skin's current condition on the day of your appointment.
                        </p>
<p className="mb-4">
                            Whether you are dealing with hormonal breakouts, seasonal dryness, or dullness, your esthetician will select the appropriate cleansers, exfoliants, masks, and serums to bring your skin back to balance.
                        </p>
<h3 className="text-lg font-medium text-stone-900 mt-6 mb-3">What to Expect</h3>
<p className="mb-4">
                            A thorough skin analysis followed by a deep cleanse, steam, extractions (if needed), a custom-blended mask, and a relaxing facial massage to stimulate blood flow.
                        </p>
</div>
<a className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#BFA15F] transition-colors" href="https://www.vagaro.com/luxeaestheticlab" target="_blank">
                        Book This Treatment
                    </a>
</div>
<div className="order-1 lg:order-2 h-[500px]">
<img alt="Custom Facial Detail" className="w-full h-full object-cover rounded-sm shadow-xl" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-white pt-20 pb-24 page-transition" id="service-glow">
<div className="max-w-7xl mx-auto px-6">
<button className="mb-8 flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium" onclick="showHome()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Services
            </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="order-2 lg:order-1">
<h1 className="text-4xl md:text-5xl font-serif-display text-stone-900 mb-2">Glow Detox Facial</h1>
<p className="text-xl text-[#BFA15F] font-medium mb-8">$150 • 65 Minutes</p>
<div className="prose prose-stone text-stone-600 font-light leading-relaxed mb-8">
<p className="mb-4">
                            Perfect for city living or congested skin. The Glow Detox Facial focuses on deep pore cleansing and removing environmental impurities that cause dullness.
                        </p>
<p className="mb-4">
                            Using activated charcoal and clay-based modalities, we draw out toxins while infusing oxygenating serums to breathe new life into your skin.
                        </p>
<h3 className="text-lg font-medium text-stone-900 mt-6 mb-3">Perfect For</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Oily or combination skin types</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Blackhead congestion</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Dull, tired-looking skin</li>
</ul>
</div>
<a className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-[#BFA15F] transition-colors" href="https://www.vagaro.com/luxeaestheticlab" target="_blank">
                        Book This Treatment
                    </a>
</div>
<div className="order-1 lg:order-2 h-[500px]">
<img alt="Glow Detox Detail" className="w-full h-full object-cover rounded-sm shadow-xl" src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen bg-stone-900 text-stone-100 pt-20 pb-24 page-transition" id="service-dmk">
<div className="max-w-7xl mx-auto px-6">
<button className="mb-8 flex items-center gap-2 text-stone-400 hover:text-white transition-colors text-sm font-medium" onclick="showHome()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Services
            </button>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="order-2 lg:order-1">
<span className="inline-block py-1 px-3 rounded-full border border-[#BFA15F] text-[#BFA15F] text-xs font-medium tracking-wide mb-6 uppercase">
                        Advanced Paramedical
                    </span>
<h1 className="text-4xl md:text-5xl font-serif-display text-white mb-2">DMK Enzyme Therapy</h1>
<p className="text-xl text-stone-400 font-medium mb-8">From $250 • 120 Minutes</p>
<div className="prose prose-invert text-stone-300 font-light leading-relaxed mb-8">
<p className="mb-4">
                            DMK is not just a facial; it is skin revision. It works on the principle that if you restore homeostasis in the skin cells, they will function optimally.
                        </p>
<p className="mb-4">
                            The unique enzyme mask hardens on the face, creating a "plasmatic effect" (visible capillary dilation) which floods the skin with oxygen-rich blood, flushing away toxins and stimulating collagen production.
                        </p>
<h3 className="text-lg font-medium text-white mt-6 mb-3">Treats Conditions Like:</h3>
<ul className="space-y-2 mb-6 text-stone-300">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Severe Acne &amp; Scarring</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Rosacea &amp; Redness</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Hyperpigmentation &amp; Melasma</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BFA15F]" data-lucide="check"></i> Premature Aging</li>
</ul>
</div></div></div></div></div>
    </>
  );
}
