import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // 1. Scroll Reveal Logic (Existing)
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

            // 2. Interactive Map Logic
            const originPoints = document.querySelectorAll('.origin-point');
            const originInfo = document.getElementById('origin-info');
            const originsData = {
                'ethiopia': { country: 'Yirgacheffe, Ethiopia', bean: 'Heirloom Varietals', notes: 'Jasmine, Bergamot, Earl Grey Finish.', price: '320 MVR' },
                'colombia': { country: 'Huila, Colombia', bean: 'Caturra, Castillo', notes: 'Caramel, Red Apple, Silky Body.', price: '280 MVR' }
            };

            originPoints.forEach(point => {
                point.addEventListener('click', () => {
                    const data = originsData[point.dataset.origin];
                    document.getElementById('origin-country').textContent = data.country;
                    document.getElementById('origin-bean').textContent = data.bean;
                    document.getElementById('origin-notes').textContent = data.notes;
                    document.getElementById('origin-price').textContent = `${data.price} / 250g`;
                    
                    originInfo.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                    originInfo.classList.add('opacity-100', 'translate-y-0');
                });
            });

            // 3. Roast Chamber Logic
            const roastSlider = document.getElementById('roastSlider');
            const roastTitle = document.getElementById('roast-title');
            const roastDesc = document.getElementById('roast-desc');
            const roastImage = document.getElementById('roast-image');

            const roastData = [
                { title: 'Light Roast', desc: 'Floral, Citrus, Tea-like brightness. Best for Pour Over.', filter: 'brightness(130%) sepia(0.1)' },
                { title: 'Medium-Light Roast', desc: 'Bright berry acidity, milk chocolate finish, delicate sweetness.', filter: 'brightness(110%) sepia(0.2)' },
                { title: 'Medium-Dark Roast', desc: 'Caramel, Nutty notes with a full body and low acidity.', filter: 'brightness(90%) sepia(0.4) contrast(110%)' },
                { title: 'Dark Roast', desc: 'Dark chocolate, smoky, bold punch. Perfect for Espresso.', filter: 'brightness(70%) sepia(0.5) contrast(120%)' }
            ];

            roastSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value);
                const data = roastData[val];
                roastTitle.textContent = data.title;
                roastDesc.textContent = data.desc;
                roastImage.style.filter = data.filter;
            });

            // 4. Brewing Tabs Logic
            const brewTabs = document.querySelectorAll('.brew-tab');
            const brewContents = document.querySelectorAll('.brew-content');

            brewTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Reset tabs
                    brewTabs.forEach(t => {
                        t.classList.remove('bg-[#1A1614]', 'text-[#D4A373]', 'active');
                        t.classList.add('text-[#E9EDC9]/60');
                    });
                    // Set active tab
                    tab.classList.remove('text-[#E9EDC9]/60');
                    tab.classList.add('bg-[#1A1614]', 'text-[#D4A373]', 'active');

                    // Show content
                    const targetId = tab.dataset.target;
                    brewContents.forEach(c => {
                        if(c.id === targetId) {
                            c.classList.remove('hidden');
                            c.classList.add('grid');
                        } else {
                            c.classList.add('hidden');
                            c.classList.remove('grid');
                        }
                    });
                });
            });

            // 5. Delivery Logic
            const deliveryBtn = document.getElementById('checkDeliveryBtn');
            const islandSelect = document.getElementById('islandSelect');
            const deliveryResult = document.getElementById('deliveryResult');

            const deliveryInfo = {
                'male': 'Next-Day Delivery: 40 MVR',
                'hulhumale': 'Next-Day Delivery: 50 MVR',
                'villimale': '2-Day Delivery: 60 MVR',
                'resort': 'Speedboat Transfer: Contact for MVR pricing'
            };

            deliveryBtn.addEventListener('click', () => {
                const val = islandSelect.value;
                if(val && deliveryInfo[val]) {
                    deliveryResult.textContent = deliveryInfo[val];
                    deliveryResult.classList.remove('opacity-0');
                    deliveryResult.classList.add('opacity-100');
                } else {
                    deliveryResult.textContent = 'Please select an island.';
                    deliveryResult.classList.remove('opacity-0');
                    deliveryResult.classList.add('opacity-100');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6 overflow-hidden">

<header className="relative w-full min-h-[90vh] rounded-[2rem] overflow-hidden bg-[#2F2A28]/30 shadow-2xl reveal active flex flex-col border border-[#2F2A28]">

<nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">

<div className="flex items-center gap-3">
<div className="text-[#D4A373] p-2 rounded-lg border border-[#D4A373]/30 bg-[#1A1614]/50 backdrop-blur-md">
<iconify-icon height="24" icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<span className="text-[#D4A373] text-xl font-oswald uppercase tracking-widest font-semibold">Island Roaster</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-[#1A1614]/80 backdrop-blur-md border border-[#D4A373]/20 rounded-full p-1.5 px-2 font-oswald uppercase tracking-widest text-sm">
<a className="px-5 py-2 text-[#E9EDC9]/80 hover:text-[#D4A373] hover:bg-[#2F2A28] rounded-full transition-colors duration-300" href="#story">Our Story</a>
<a className="px-5 py-2 text-[#E9EDC9]/80 hover:text-[#D4A373] hover:bg-[#2F2A28] rounded-full transition-colors duration-300" href="#process">Bean-to-Mug</a>
<a className="px-5 py-2 text-[#E9EDC9]/80 hover:text-[#D4A373] hover:bg-[#2F2A28] rounded-full transition-colors duration-300" href="#delivery">Delivery</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="group flex items-center gap-3 bg-[#D4A373] pl-5 pr-1.5 py-1.5 rounded-full hover:bg-[#E9EDC9] transition-all duration-300" href="#shop">
<span className="text-sm font-oswald uppercase tracking-widest text-[#1A1614] font-medium">Taste the Craft</span>
<span className="w-8 h-8 bg-[#1A1614] rounded-full flex items-center justify-center group-hover:bg-[#2F2A28] transition-colors duration-300">
<iconify-icon className="text-[#D4A373] group-hover:text-[#E9EDC9]" height="16" icon="solar:cart-large-minimalistic-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</nav>

<div className="flex-1 flex flex-col lg:flex-row relative z-10 w-full h-full">

<div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-12 lg:py-0">
<span className="reveal reveal-delay-1 inline-block text-[#D4A373] font-playfair italic text-3xl sm:text-4xl lg:text-5xl mb-6">
                        The Spirit of the Island
                    </span>
<h1 className="reveal reveal-delay-2 text-5xl sm:text-6xl lg:text-7xl text-[#E9EDC9] font-oswald uppercase tracking-tight leading-[1.1] mb-8 max-w-2xl">
                        A Commitment to Roasting Excellence in the Maldives.
                    </h1>
<a className="reveal reveal-delay-3 w-max group inline-flex items-center gap-4 bg-[#D4A373] text-[#1A1614] pl-8 pr-2 py-2 rounded-full hover:bg-[#E9EDC9] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4A373]/20" href="#shop">
<span className="text-base font-oswald uppercase tracking-widest font-semibold">Taste The Craft</span>
<span className="w-12 h-12 bg-[#1A1614] rounded-full flex items-center justify-center group-hover:bg-[#2F2A28] transition-colors duration-300">
<iconify-icon className="text-[#D4A373] group-hover:text-[#E9EDC9]" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</span>
</a>
</div>

<div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full reveal reveal-delay-2">
<div className="absolute inset-0 bg-gradient-to-r from-[#2F2A28]/30 lg:from-[#1A1614] via-transparent to-transparent z-10"></div>
<img alt="Premium Matte Black Coffee Pouch" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten scale-105" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] opacity-20 mix-blend-screen bg-cover bg-center mix-blend-lighten animate-pulse" style={{animationDuration: '8s'}}></div>
</div>
</div>
</header>

<section className="mt-32 px-4 sm:px-6 relative" id="story">
<div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none rounded-[3rem]">
<img alt="Burlap Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605556209503-4f964a78103c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
<div className="lg:col-span-5 reveal">
<h2 className="text-4xl sm:text-5xl font-playfair italic text-[#D4A373] mb-6 tracking-tight">
                        The Malé Origins
                    </h2>
<h3 className="text-3xl font-oswald uppercase tracking-tight text-[#E9EDC9] mb-8">
                        Grounded in Place
                    </h3>
<p className="text-[#E9EDC9]/70 text-lg leading-relaxed mb-6 font-medium">
                        Born from a desire to bring true specialty coffee to the heart of the Maldives. We recognized a gap between imported commercial beans and the rich, nuanced flavors of freshly roasted coffee.
                    </p>
</div>
<div className="lg:col-span-7 bg-[#2F2A28]/40 border border-[#D4A373]/10 p-8 sm:p-12 rounded-[2rem] backdrop-blur-sm reveal reveal-delay-1">
<p className="text-[#E9EDC9]/80 text-base leading-relaxed mb-6">
                        Establishing a roastery in Malé came with its own unique challenges—mastering the delicate balance of heat and airflow amidst the island humidity. Through countless trials, we perfected a roasting profile that honors both the bean's origin and our tropical home.
                    </p>
<p className="text-[#E9EDC9]/80 text-base leading-relaxed italic">
                        Today, Island Roaster is more than a brand; it’s a commitment to our community and heritage. Every batch is roasted to order, ensuring that the cup you brew captures the essence of uncompromising quality.
                    </p>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
<div className="bg-[#2F2A28]/30 p-10 rounded-3xl border border-[#D4A373]/20 text-center hover:bg-[#2F2A28]/60 transition-colors duration-500 reveal reveal-delay-1">
<div className="w-16 h-16 rounded-full bg-[#1A1614] text-[#D4A373] flex items-center justify-center mx-auto mb-6 border border-[#D4A373]/30 shadow-[0_0_15px_rgba(212,163,115,0.15)]">
<iconify-icon height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-oswald uppercase tracking-widest text-[#E9EDC9] mb-3">Sustainably Sourced</h4>
<p className="text-[#E9EDC9]/60 text-sm leading-relaxed">Direct relationships with heritage farms, ensuring fair compensation and environmental stewardship.</p>
</div>
<div className="bg-[#2F2A28]/30 p-10 rounded-3xl border border-[#D4A373]/20 text-center hover:bg-[#2F2A28]/60 transition-colors duration-500 reveal reveal-delay-2">
<div className="w-16 h-16 rounded-full bg-[#1A1614] text-[#D4A373] flex items-center justify-center mx-auto mb-6 border border-[#D4A373]/30 shadow-[0_0_15px_rgba(212,163,115,0.15)]">
<iconify-icon height="28" icon="solar:flame-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-oswald uppercase tracking-widest text-[#E9EDC9] mb-3">Expertly Roasted</h4>
<p className="text-[#E9EDC9]/60 text-sm leading-relaxed">Small-batch roasted in Malé to highlight the distinct terroir and unique flavor notes of every bean.</p>
</div>
<div className="bg-[#2F2A28]/30 p-10 rounded-3xl border border-[#D4A373]/20 text-center hover:bg-[#2F2A28]/60 transition-colors duration-500 reveal reveal-delay-3">
<div className="w-16 h-16 rounded-full bg-[#1A1614] text-[#D4A373] flex items-center justify-center mx-auto mb-6 border border-[#D4A373]/30 shadow-[0_0_15px_rgba(212,163,115,0.15)]">
<iconify-icon height="28" icon="solar:scooter-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-oswald uppercase tracking-widest text-[#E9EDC9] mb-3">Delivered Fresh</h4>
<p className="text-[#E9EDC9]/60 text-sm leading-relaxed">Packed immediately and delivered swiftly across the islands. Premium quality priced fairly in MVR.</p>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6 reveal" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div className="max-w-2xl">
<span className="text-[#D4A373] font-oswald uppercase text-xs sm:text-sm tracking-[0.2em] mb-4 block">The Coffee Collection</span>
<h2 className="text-4xl sm:text-5xl font-playfair italic text-[#E9EDC9] mb-6 tracking-tight">Curated Roasts</h2>
<p className="text-[#E9EDC9]/70 text-lg">Explore our signature small-batch roasts, expertly crafted for the Maldivian palate.</p>
</div>
<a className="inline-flex items-center gap-2 border border-[#D4A373]/30 px-6 py-3 rounded-full text-xs sm:text-sm font-oswald uppercase tracking-widest text-[#E9EDC9] hover:bg-[#D4A373] hover:text-[#1A1614] transition-colors duration-300 w-max shrink-0" href="#">
<iconify-icon height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
                        View Roasting Schedule
                    </a>
</div>
<div className="bg-[#2F2A28]/30 rounded-[2rem] border border-[#D4A373]/20 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center hover:border-[#D4A373]/40 transition-colors duration-500 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A373]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#D4A373]/10 transition-colors duration-700"></div>
<div className="w-full lg:w-1/2 z-10">
<div className="inline-flex items-center gap-2 bg-[#D4A373]/10 border border-[#D4A373]/20 text-[#D4A373] px-4 py-1.5 rounded-full text-xs font-oswald uppercase tracking-widest mb-6">
<iconify-icon height="14" icon="solar:star-fall-linear" width="14"></iconify-icon>
                            Bestseller
                        </div>
<h3 className="text-3xl sm:text-4xl font-oswald uppercase tracking-tight text-[#E9EDC9] mb-6">Signature Roasts</h3>
<p className="text-[#E9EDC9]/70 text-base sm:text-lg leading-relaxed mb-8">
                            From Single-Origin Ethiopians to our Island House Blend, find your perfect morning ritual.
                        </p>
<a className="group/btn inline-flex items-center gap-4 bg-[#D4A373] text-[#1A1614] pl-6 pr-2 py-2 rounded-full hover:bg-[#E9EDC9] transition-all duration-500 hover:shadow-xl hover:shadow-[#D4A373]/20 w-max" href="#delivery">
<span className="text-sm font-oswald uppercase tracking-widest font-semibold">Shop Whole Bean</span>
<span className="w-10 h-10 bg-[#1A1614] rounded-full flex items-center justify-center group-hover/btn:bg-[#2F2A28] transition-colors duration-300">
<iconify-icon className="text-[#D4A373] group-hover/btn:text-[#E9EDC9]" height="20" icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</span>
</a>
</div>
<div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#D4A373]/10 z-10">
<img alt="Signature Roasts Collection" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 sepia-[0.1]" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/80 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="mt-32 px-4 sm:px-6 reveal" id="process">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#D4A373] font-oswald uppercase text-sm tracking-[0.2em] mb-4 block">Roasted With Purpose</span>
<h2 className="text-4xl sm:text-5xl font-playfair italic text-[#E9EDC9] mb-6 tracking-tight">The Bean-to-Mug Journey</h2>
<p className="text-[#E9EDC9]/70 text-lg">Experience the meticulous craft behind every cup. Interact with our process below.</p>
</div>

<div className="bg-[#2F2A28]/30 rounded-[2rem] border border-[#D4A373]/20 p-6 sm:p-10 mb-8 relative overflow-hidden group">
<h3 className="text-2xl font-oswald uppercase tracking-widest text-[#D4A373] mb-8 flex items-center gap-3">
<span className="w-8 h-px bg-[#D4A373]/50 block"></span> Origin Selection
                </h3>
<div className="relative w-full h-[300px] sm:h-[400px] bg-[#1A1614] rounded-2xl border border-[#2F2A28] overflow-hidden">

<img alt="World Map Abstract" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-[45%] left-[55%] w-4 h-4 rounded-full bg-[#D4A373] shadow-[0_0_20px_#D4A373] cursor-pointer hover:scale-125 transition-transform origin-point" data-origin="ethiopia">
<div className="absolute -inset-2 rounded-full border border-[#D4A373] animate-ping opacity-50"></div>
</div>
<div className="absolute top-[50%] left-[25%] w-4 h-4 rounded-full bg-[#D4A373] shadow-[0_0_20px_#D4A373] cursor-pointer hover:scale-125 transition-transform origin-point" data-origin="colombia">
<div className="absolute -inset-2 rounded-full border border-[#D4A373] animate-ping opacity-50"></div>
</div>

<div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 bg-[#1A1614]/90 backdrop-blur-md border border-[#D4A373]/30 p-5 rounded-xl opacity-0 translate-y-4 transition-all duration-300 pointer-events-none" id="origin-info">
<span className="text-xs font-oswald uppercase tracking-widest text-[#D4A373] block mb-1" id="origin-country">Select an origin</span>
<h4 className="text-xl font-playfair text-[#E9EDC9] mb-2 tracking-tight" id="origin-bean">Discover Our Beans</h4>
<p className="text-[#E9EDC9]/70 text-sm mb-4" id="origin-notes">Click the golden markers on the map to explore our directly traded coffees.</p>
<div className="text-[#D4A373] font-oswald tracking-widest font-medium" id="origin-price">-- MVR / 250g</div>
</div>
</div>
</div>

<div className="bg-[#2F2A28]/30 rounded-[2rem] border border-[#D4A373]/20 p-6 sm:p-10 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-oswald uppercase tracking-widest text-[#D4A373] mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#D4A373]/50 block"></span> The Roast Chamber
                    </h3>
<p className="text-[#E9EDC9]/70 text-base mb-10">Slide to adjust the roast level. Witness how heat transforms the bean's character, crafted specifically for the Maldivian palate.</p>
<div className="mb-10">
<div className="flex justify-between text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-4">
<span>Light</span>
<span>Dark</span>
</div>
<input className="w-full" id="roastSlider" max="3" min="0" step="1" type="range" value="1"/>
</div>
<div className="bg-[#1A1614] border border-[#2F2A28] p-6 rounded-xl">
<span className="text-xs font-oswald uppercase tracking-[0.2em] text-[#D4A373] block mb-2">Tasting Notes</span>
<h4 className="text-2xl font-playfair text-[#E9EDC9] mb-2 tracking-tight" id="roast-title">Medium-Light Roast</h4>
<p className="text-[#E9EDC9]/70 text-sm italic" id="roast-desc">Bright berry acidity, milk chocolate finish, delicate sweetness.</p>
</div>
</div>
<div className="relative h-[400px] rounded-2xl overflow-hidden bg-[#1A1614] flex items-center justify-center border border-[#2F2A28]">

<img alt="Coffee Beans" className="absolute inset-0 w-full h-full object-cover mix-blend-lighten transition-all duration-700 brightness-110 sepia-[0.2]" id="roast-image" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#1A1614]/20 z-10"></div>
</div>
</div>

<div className="bg-[#2F2A28]/30 rounded-[2rem] border border-[#D4A373]/20 p-6 sm:p-10 mb-8">
<h3 className="text-2xl font-oswald uppercase tracking-widest text-[#D4A373] mb-8 flex items-center justify-center gap-3">
<span className="w-8 h-px bg-[#D4A373]/50 block"></span> Brewing Perfection <span className="w-8 h-px bg-[#D4A373]/50 block"></span>
</h3>

<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
<button className="brew-tab active px-6 py-3 rounded-full border border-[#D4A373]/30 font-oswald uppercase tracking-widest text-sm text-[#D4A373] bg-[#1A1614] hover:bg-[#D4A373] hover:text-[#1A1614] transition-colors duration-300" data-target="pourover">Pour Over</button>
<button className="brew-tab px-6 py-3 rounded-full border border-[#D4A373]/30 font-oswald uppercase tracking-widest text-sm text-[#E9EDC9]/60 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors duration-300" data-target="frenchpress">French Press</button>
<button className="brew-tab px-6 py-3 rounded-full border border-[#D4A373]/30 font-oswald uppercase tracking-widest text-sm text-[#E9EDC9]/60 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors duration-300" data-target="coldbrew">Cold Brew</button>
<button className="brew-tab px-6 py-3 rounded-full border border-[#D4A373]/30 font-oswald uppercase tracking-widest text-sm text-[#E9EDC9]/60 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors duration-300" data-target="espresso">Espresso</button>
</div>

<div className="max-w-4xl mx-auto">

<div className="brew-content grid grid-cols-1 sm:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-out]" id="pourover">
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:ruler-angular-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Grind Size</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">Medium-Fine</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:scale-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Ratio</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">1:16 (15g to 240g)</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:stopwatch-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Timing</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">2.5 - 3 Minutes</strong>
</div>
</div>

<div className="brew-content hidden grid-cols-1 sm:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-out]" id="frenchpress">
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:ruler-angular-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Grind Size</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">Coarse</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:scale-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Ratio</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">1:15 (20g to 300g)</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:stopwatch-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Timing</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">4 Minutes</strong>
</div>
</div>
<div className="brew-content hidden grid-cols-1 sm:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-out]" id="coldbrew">
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:ruler-angular-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Grind Size</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">Extra Coarse</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:scale-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Ratio</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">1:8 (Concentrate)</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:stopwatch-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Timing</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">16 - 20 Hours</strong>
</div>
</div>
<div className="brew-content hidden grid-cols-1 sm:grid-cols-3 gap-6 animate-[fadeIn_0.5s_ease-out]" id="espresso">
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:ruler-angular-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Grind Size</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">Fine</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:scale-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Ratio</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">1:2 (18g to 36g)</strong>
</div>
<div className="bg-[#1A1614] p-6 rounded-xl border border-[#2F2A28] text-center">
<iconify-icon className="text-[#D4A373] mb-4" height="32" icon="solar:stopwatch-linear" width="32"></iconify-icon>
<span className="block text-xs font-oswald uppercase tracking-widest text-[#D4A373] mb-1">Timing</span>
<strong className="text-[#E9EDC9] font-playfair text-xl">25 - 30 Seconds</strong>
</div>
</div>
</div>
</div>

<div className="bg-[#2F2A28]/30 rounded-[2rem] border border-[#D4A373]/20 p-8 sm:p-12 text-center max-w-4xl mx-auto" id="delivery">
<div className="w-16 h-16 rounded-full bg-[#1A1614] text-[#D4A373] flex items-center justify-center mx-auto mb-6 border border-[#D4A373]/30">
<iconify-icon height="32" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-playfair italic text-[#E9EDC9] mb-4 tracking-tight">Freshly Packed &amp; Delivered</h3>
<p className="text-[#E9EDC9]/70 text-base mb-8 max-w-lg mx-auto">Select your island below to check delivery times and logistics directly from our Malé roastery.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
<select className="w-full sm:w-2/3 bg-[#1A1614] border border-[#2F2A28] rounded-xl px-5 py-4 text-[#E9EDC9] focus:ring-1 focus:ring-[#D4A373] focus:border-[#D4A373] focus:outline-none transition-all duration-300 appearance-none font-oswald tracking-wide" id="islandSelect">
<option disabled="" selected="" value="">Select Island...</option>
<option value="male">Malé</option>
<option value="hulhumale">Hulhumalé</option>
<option value="villimale">Villimalé</option>
<option value="resort">Resort Islands</option>
</select>
<button className="w-full sm:w-1/3 bg-[#D4A373] text-[#1A1614] font-oswald uppercase tracking-widest font-semibold py-4 rounded-xl hover:bg-[#E9EDC9] transition-all duration-300" id="checkDeliveryBtn">
                        Check
                    </button>
</div>
<div className="mt-6 text-[#D4A373] font-oswald uppercase tracking-widest text-lg h-8 opacity-0 transition-opacity duration-300" id="deliveryResult">

</div>
</div>
</section>

<footer className="mt-32 py-12 px-6 flex flex-col md:flex-row items-center md:items-start justify-between border-t border-[#2F2A28]/40 gap-12 reveal text-center md:text-left">
<div className="space-y-6 flex flex-col items-center md:items-start">
<div className="flex items-center gap-3">
<div className="text-[#D4A373] p-1.5 rounded-lg border border-[#D4A373]/30 bg-[#1A1614]">
<iconify-icon height="20" icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<span className="text-[#E9EDC9] text-xl font-oswald uppercase tracking-widest font-medium">Island Roaster</span>
</div>
<p className="text-sm text-[#E9EDC9]/60 max-w-xs italic">A commitment to roasting excellence in the Maldives. Sustainable, fresh, unparalleled.</p>
</div>
<div className="flex gap-16 text-sm">
<div>
<h4 className="font-oswald uppercase tracking-widest text-[#D4A373] mb-5 text-base">Shop</h4>
<ul className="space-y-3 text-[#E9EDC9]/70">
<li><a className="hover:text-[#D4A373] transition-colors duration-300" href="#">Single Origin</a></li>
<li><a className="hover:text-[#D4A373] transition-colors duration-300" href="#">Signature Blends</a></li>
<li><a className="hover:text-[#D4A373] transition-colors duration-300" href="#">Brewing Gear</a></li>
</ul>
</div>
<div>
<h4 className="font-oswald uppercase tracking-widest text-[#D4A373] mb-5 text-base">Company</h4>
<ul className="space-y-3 text-[#E9EDC9]/70">
<li><a className="hover:text-[#D4A373] transition-colors duration-300" href="#story">Our Story</a></li>
<li><a className="hover:text-[#D4A373] transition-colors duration-300" href="#">Wholesale</a></li>
<li><a className="hover:text-[#D4A373] transition-colors duration-300" href="#">Contact</a></li>
</ul>
</div>
</div>
</footer>
<div className="text-center pb-8 text-xs font-oswald tracking-widest text-[#E9EDC9]/40 uppercase reveal">
            © 2024 Island Roaster Maldives. All rights reserved.
        </div>
</div>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>


    </>
  );
}
