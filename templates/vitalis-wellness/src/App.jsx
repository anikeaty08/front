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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Text Splitter Utility
            // Splits text into words wrapped in a span with overflow hidden
            const splitTextElements = document.querySelectorAll(".reveal-text");
            
            splitTextElements.forEach(element => {
                const text = element.innerText;
                const words = text.split(" ");
                let newHtml = "";
                
                words.forEach(word => {
                    newHtml += `<span class="word-wrapper"><span class="word">${word}</span></span> `;
                });
                
                element.innerHTML = newHtml;
            });

            // 2. Reveal Animation
            // Animates the inner .word spans up from 110% to 0%
            const revealElements = document.querySelectorAll(".reveal-text");
            
            revealElements.forEach(element => {
                const words = element.querySelectorAll(".word");
                
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.04
                });
            });

            // 3. Parallax Image Effect
            // Selects images inside .parallax-wrapper and moves them vertically
            const parallaxWrappers = document.querySelectorAll(".parallax-wrapper");
            
            parallaxWrappers.forEach(wrapper => {
                const img = wrapper.querySelector(".parallax-img");
                if (img) {
                    gsap.fromTo(img, 
                        { y: "-10%" },
                        {
                            y: "10%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: wrapper,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                }
            });

            // 4. Fade Up Miscellaneous Elements
            gsap.utils.toArray(".fade-up-element").forEach(element => {
                gsap.to(element, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });

            // 5. Button Reveal
            gsap.to("#hero-cta", {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 1, // Wait for text
                ease: "power3.out"
            });
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#F3F1EB]/80 backdrop-blur-md border-b border-[#1A2E22]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="hidden md:flex space-x-8 text-sm font-medium text-[#1A2E22]/70">
<a className="hover:text-[#1A2E22] transition-colors" href="#">Manifesto</a>
<a className="hover:text-[#1A2E22] transition-colors" href="#">Science</a>
<a className="hover:text-[#1A2E22] transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
<iconify-icon className="text-[#1A2E22]" icon="solar:leaf-linear" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase">Vitalis</span>
</div>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium hidden md:block" href="#">Login</a>
<button className="bg-[#1A2E22] text-[#F3F1EB] px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 group">
                        Get Started
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-[#F3F1EB]" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-6 h-6 rounded-full border border-[#F3F1EB]" src="https://i.pravatar.cc/100?img=5"/>
<img alt="User" className="w-6 h-6 rounded-full border border-[#F3F1EB]" src="https://i.pravatar.cc/100?img=8"/>
</div>
<span className="text-xs font-medium tracking-wide uppercase text-[#1A2E22]/60">Trusted by forward thinkers</span>
</div>

<div className="flex flex-wrap gap-6 md:gap-8 opacity-40 mb-12 justify-center px-4">
<iconify-icon className="md:w-10" height="32" icon="simple-icons:spacex" style={{color: 'rgb(26, 46, 34)'}} width="32"></iconify-icon>
<iconify-icon className="md:w-10" height="32" icon="simple-icons:uber" style={{color: 'rgb(26, 46, 34)'}} width="32"></iconify-icon>
<iconify-icon className="md:w-10" height="32" icon="simple-icons:nasa" style={{color: 'rgb(26, 46, 34)'}} width="32"></iconify-icon>
<iconify-icon className="md:w-10" height="32" icon="simple-icons:visa" style={{color: 'rgb(26, 46, 34)'}} width="32"></iconify-icon>
<iconify-icon className="md:w-10" height="32" icon="simple-icons:aboutdotme" style={{color: 'rgb(26, 46, 34)'}} width="32"></iconify-icon>
</div>

<div className="text-center max-w-4xl mx-auto mb-16">
<h1 className="reveal-text text-5xl md:text-7xl serif-font leading-[1.1] font-light tracking-tight mb-6">
                Engineered Nutrition for Systemic Wellness
            </h1>
<p className="text-lg text-[#1A2E22]/70 max-w-xl mx-auto leading-relaxed reveal-para delay-300">
                Whole-food formulations designed to optimize microbiome diversity and metabolic flexibility. 
                <span className="md:block">No prep. No fillers. Pure biological signal.</span>
</p>
<div className="mt-8 opacity-0" id="hero-cta">
<button className="bg-[#1A2E22] text-[#F3F1EB] px-8 py-3 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#1A2E22]/10">
                    View Menu
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
<img alt="Ingredients" className="w-full h-[120%] object-cover parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b511ecb7-fd0b-4418-a9f4-07e4c0225cbe_800w.webp"/>
<div className="absolute bottom-4 left-4 text-white z-10">
<p className="text-xs font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
<iconify-icon icon="solar:sun-2-bold-duotone"></iconify-icon> Daily calibration
                    </p>
</div>
</div>

<div className="md:col-span-4 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-[#1A2E22]/5">
<div className="">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-[#F3F1EB] flex items-center justify-center">
<img alt="Dish" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<iconify-icon className="text-[#1A2E22]/20 text-2xl" icon="solar:heart-angle-bold-duotone"></iconify-icon>
</div>
<h3 className="serif-font text-2xl mb-1">Macro-Bowl V2</h3>
<p className="text-xs text-[#1A2E22]/60">Rich in polyphenols for cognitive repair.</p>
</div>
<div className="space-y-3 mt-8">
<div className="flex justify-between text-xs border-b border-gray-100 pb-2">
<span className="text-gray-500">Protein</span>
<span className="font-medium">32g</span>
</div>
<div className="flex justify-between text-xs border-b border-gray-100 pb-2">
<span className="text-gray-500">Fiber</span>
<span className="font-medium">14g</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Net Carbs</span>
<span className="font-medium">12g</span>
</div>
</div>
</div>

<div className="md:col-span-4 rounded-2xl overflow-hidden relative group h-[300px] md:h-full parallax-wrapper">
<img alt="Wellness" className="w-full h-[120%] object-cover parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2676302-1a77-4ff3-8793-00c982641e2c_800w.webp"/>
<div className="absolute bottom-4 left-4 text-white max-w-[80%] z-10">
<p className="serif-font text-xl leading-tight">Complete nutritional density with 24 essential minerals.</p>
</div>
</div>
</div>
</main>

<section className="py-24 px-4 bg-white border-y border-[#1A2E22]/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="reveal-text serif-font text-3xl md:text-5xl leading-tight font-light text-[#1A2E22] tracking-tight">
                “A systemic protocol engineered to restore gut diversity and deliver sustained vitality without the glucose crash.”
            </h2>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-10">
<div>
<h3 className="serif-font text-3xl mb-2 reveal-text">Core Bio-actives</h3>
<p className="text-sm text-[#1A2E22]/60">Sourced from regenerative soil.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-[#1A2E22]/10 flex items-center justify-center hover:bg-[#1A2E22] hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-10">

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-8 group-hover:shadow-xl transition-all border border-[#1A2E22]/5 relative overflow-hidden">
<img alt="Beetroot" className="w-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7c7ed03-8755-42ae-999f-46d3e957058d_800w.webp"/>
<div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-xs font-medium bg-white/20 backdrop-blur px-3 py-1 rounded-full">Nitric Oxide Boost</span>
</div>
</div>
<h4 className="font-medium">Beetroot</h4>
<p className="text-xs text-[#1A2E22]/50">Blood flow support</p>
</div>

<div className="min-w-[280px] cursor-pointer">
<div className="w-full aspect-square bg-[#1A2E22] rounded-2xl mb-4 flex items-center justify-center p-8 shadow-2xl relative overflow-hidden">
<img alt="Broccoli" className="w-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a2605e1-058f-467a-bca2-16aacdb706a0_800w.webp"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
<p className="text-white text-xs leading-relaxed">
<span className="font-semibold block mb-1">Sulforaphane</span>
                            Activates Nrf2 pathway for cellular defense and detoxification.
                        </p>
</div>
</div>
<h4 className="font-medium">Sprouted Broccoli</h4>
<p className="text-xs text-[#1A2E22]/50">DNA protection</p>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-8 group-hover:shadow-xl transition-all border border-[#1A2E22]/5">
<img alt="Sweet Potato" className="w-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50741f2a-b261-4e30-b0d5-8741eaebcc43_800w.webp"/>
</div>
<h4 className="font-medium">Sweet Potato</h4>
<p className="text-xs text-[#1A2E22]/50">Resistant starch</p>
</div>

<div className="min-w-[200px] group cursor-pointer">
<div className="w-full aspect-square bg-white rounded-2xl mb-4 flex items-center justify-center p-8 group-hover:shadow-xl transition-all border border-[#1A2E22]/5">
<img alt="Avocado" className="w-full object-contain group-hover:scale-110 transition-transform duration-500" src="https://pngimg.com/d/avocado_PNG15516.png"/>
</div>
<h4 className="font-medium">Hass Avocado</h4>
<p className="text-xs text-[#1A2E22]/50">Monounsaturated fats</p>
</div>
</div>
</section>

<section className="relative h-[600px] md:h-[800px] w-full overflow-hidden parallax-wrapper">
<img alt="Nature" className="absolute inset-0 w-full h-[120%] object-cover parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/547c3ce0-1ee0-481b-b9ab-315feed727ac_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A2E22] via-transparent to-transparent opacity-80 z-0"></div>
<div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
<h2 className="reveal-text text-white serif-font text-4xl md:text-6xl mb-12 text-center">Quantify your <br/> biological progress.</h2>

<div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl transform translate-y-12 opacity-0 fade-up-element">
<div className="flex justify-between items-center mb-6">
<div className="text-white/80 text-xs uppercase tracking-wider">Live Biometrics</div>
<iconify-icon className="text-white" icon="solar:wifi-router-minimalistic-bold"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-white text-sm mb-2">
<span>Biological Age</span>
<span className="text-green-300">-3.2 years</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-200 to-green-400 w-[75%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-white text-sm mb-2">
<span>Vitalis Score</span>
<span>92/100</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-200 to-green-400 w-[92%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-transparent" src="https://i.pravatar.cc/100?img=12"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-transparent" src="https://i.pravatar.cc/100?img=15"/>
<div className="w-8 h-8 rounded-full bg-white text-[#1A2E22] flex items-center justify-center text-[10px] font-bold">+2k</div>
</div>
<div className="text-right">
<div className="text-white text-2xl font-serif">4.8x</div>
<div className="text-white/60 text-[10px]">Increased diversity</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[#1A2E22]/10 pb-6">
<h2 className="reveal-text serif-font text-4xl md:text-5xl">Weekly Rotation</h2>
<div className="flex space-x-6 text-sm font-medium mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
<button className="text-[#1A2E22] border-b-2 border-[#1A2E22] pb-1 whitespace-nowrap">Breakfast</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Lunch</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Dinner</button>
<button className="text-[#1A2E22]/40 hover:text-[#1A2E22] transition-colors pb-1 whitespace-nowrap">Functional Snacks</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-0">

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 rounded border border-[#1A2E22]/20 text-[10px] uppercase tracking-wider mb-2">Gluten-Free</span>
</div>
<h3 className="serif-font text-3xl group-hover:text-[#1A2E22]/70 transition-colors">Shrimp &amp; Quinoa</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Wild-caught shrimp with ancient grains, turmeric dressing, and fermented cabbage.</p>
<div className="mt-4 flex gap-4 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span>25 mins</span>
<span>•</span>
<span>520 kcal</span>
</div>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Strapatasada</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Greek-style scrambled eggs with heirloom tomatoes and grass-fed feta.</p>
</div>

<div className="group py-8 border-b border-[#1A2E22]/10 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
<h3 className="serif-font text-3xl">Miso Chicken</h3>
<p className="text-sm text-[#1A2E22]/60 mt-2">Pasture-raised chicken thigh, fermented miso glaze, bok choy.</p>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4">
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64">
<img alt="Food" className="w-full h-[120%] object-cover parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98495472-aacd-4d19-bf19-cd2454d9e387_800w.webp"/>
</div>
<div className="parallax-wrapper rounded-2xl overflow-hidden h-64 mt-12">
<img alt="Food" className="w-full h-[120%] object-cover parallax-img" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-12 flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon> Gluten-Free
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon> No Seed Oils
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon> Glyphosate-Free Oats
            </span>
<span className="px-4 py-2 rounded-full border border-[#1A2E22]/20 text-xs font-medium hover:bg-[#1A2E22] hover:text-white transition-colors cursor-pointer flex items-center gap-2">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold"></iconify-icon> Low-FODMAP
            </span>
</div>
</section>

<section className="text-[#F3F1EB] bg-[#1A2E22] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-16 items-center">
<div className="mb-12 md:mb-0">
<h2 className="reveal-text serif-font text-4xl md:text-5xl mb-6 text-white">No lock-ins. Just pure nutrition.</h2>
<p className="text-white/60 text-lg mb-8 max-w-md">Pause, skip, or cancel your subscription anytime. We earn your loyalty with every meal, not a contract.</p>
<div className="grid grid-cols-3 gap-4 mt-12">
<img alt="Lifestyle" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcf37426-79fe-435e-94d6-d4197e5a5994_800w.webp"/>
<img alt="Lifestyle" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a2605e1-058f-467a-bca2-16aacdb706a0_800w.webp"/>
<img alt="Lifestyle" className="h-24 w-full object-cover rounded-lg opacity-60 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe49f96-1c36-4800-8d69-bcddec308154_800w.webp"/>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 text-[10rem] font-serif text-white/5 select-none pointer-events-none">01</div>

<div className="bg-[#F3F1EB] text-[#1A2E22] rounded-3xl p-8 max-w-sm mx-auto shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-[#1A2E22] text-white flex items-center justify-center">
<iconify-icon icon="solar:link-circle-bold-duotone"></iconify-icon>
</div>
<div className="px-3 py-1 bg-stone-200 rounded-full text-[10px] font-bold uppercase tracking-wide">Best Value</div>
</div>
<h3 className="text-xl font-semibold mb-2">Protocol Membership</h3>
<p className="text-xs text-[#1A2E22]/60 mb-6">Full access to personalized nutrition planning and meal delivery.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span className="">Including 50+ curated recipes</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span className="">Quarterly gut-microbiome testing</span>
</li>
<li className="flex items-start gap-3 text-sm">
<iconify-icon className="mt-0.5 text-green-700" icon="solar:check-read-linear"></iconify-icon>
<span>1-on-1 Nutritionist Consults</span>
</li>
</ul>
<div className="flex items-end gap-2 mb-6">
<span className="text-4xl font-serif">£12</span>
<span className="text-sm text-[#1A2E22]/60 mb-1">/ week</span>
</div>
<button className="w-full bg-[#1A2E22] text-white py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">Start Membership</button>

<div className="mt-6 flex justify-center">
<div className="bg-stone-200 p-1 rounded-full flex relative w-max">
<button className="px-4 py-1 rounded-full text-xs font-medium bg-white shadow-sm z-10 transition-all">Weekly</button>
<button className="px-4 py-1 rounded-full text-xs font-medium text-[#1A2E22]/50 hover:text-[#1A2E22] z-10 transition-all">Monthly</button>
</div>
</div>
</div>

<div className="mt-8 flex justify-between gap-4 text-xs text-white/40 max-w-sm mx-auto">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">Sonya M. saved 3.2 hrs</div>
<div className="flex gap-x-2 gap-y-2 items-center">James T. improved recovery</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F3F1EB] pt-24 pb-24">
<div className="text-center mb-16 px-4">
<span className="border border-[#1A2E22]/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-wide">Outcomes</span>
<h2 className="reveal-text serif-font text-3xl md:text-4xl mt-6 mb-4">Engineered for measurable biological impact.</h2>
<p className="text-[#1A2E22]/60 text-sm">Join thousands who have reclaimed their metabolic potential with Vitalis.</p>
</div>
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5">
<div className="flex gap-1 text-[#1A2E22] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2">A systemic reset</h4>
<p className="text-sm text-[#1A2E22]/70 leading-relaxed mb-6">
                    "Within two weeks, the brain fog lifted completely. My HRV has increased by 15ms and my sleep scores are consistently in the 90s. It feels like my body is finally working with me."
                </p>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-[#1A2E22]/5">
<div className="flex items-center gap-2">
<span className="font-bold text-xl">4.9</span>
<span className="text-[10px] text-[#1A2E22]/50">Rating on Trustpilot</span>
</div>
<iconify-icon className="text-[#1A2E22]" icon="simple-icons:trustpilot" width="24"></iconify-icon>
</div>
</div>

<div className="bg-[#1A2E22] rounded-2xl overflow-hidden relative group h-[400px] md:h-auto text-white">
<img alt="Reviewer" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c483e84-eb3c-4503-8e7b-48588f5ecbdf_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-4 cursor-pointer hover:bg-white hover:text-[#1A2E22] transition-colors">
<iconify-icon className="ml-1" icon="solar:play-bold"></iconify-icon>
</div>
<p className="font-serif text-xl leading-snug mb-2">"The inflammation in my joints has completely subsided."</p>
<p className="text-xs text-white/70">Marcus T., Founding Member</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-[#1A2E22]/5 flex flex-col">
<div className="mb-4">
<h4 className="font-serif text-lg mb-2">Precision nutrition</h4>
<p className="text-sm text-[#1A2E22]/70">"Zero preparation, zero compromise. The nutrient density is palatable—I feel satiated for hours without the post-meal crash. It's transformed my workday efficiency."</p>
</div>
<div className="mt-auto">
<div className="flex gap-2 mb-4 overflow-hidden">
<img alt="Food" className="w-16 h-16 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b95db7a4-3b0e-4661-be97-9cbf9efa1aa3_320w.webp"/>
<img alt="Food" className="w-16 h-16 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/661b4347-5f6e-418c-9a62-f67f01a392c7_320w.webp"/>
<img alt="Food" className="w-16 h-16 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/870c42e5-6164-4e3e-95f0-1232a5f83b2f_320w.webp"/>
</div>
<div className="flex items-center gap-3">
<img alt="Nicole" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/100?img=9"/>
<div className="text-xs">
<div className="font-bold">Dr. Alisha V.</div>
<div className="text-[#1A2E22]/50">Functional MD</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#1A2E22] text-[#F3F1EB] pt-32 pb-0 relative">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="grid md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">System</p>
<p className="text-3xl font-serif mb-6 leading-tight tracking-tight">Precision nutrition for the modern mind.</p>
<div className="flex gap-4">
<button className="text-xs font-medium bg-[#F3F1EB] text-[#1A2E22] px-5 py-2.5 rounded-full hover:bg-white transition-colors">Get Started</button>
</div>
</div>
<div className="md:col-span-1">
<p className="text-xs font-bold uppercase tracking-widest mb-6 text-[#F3F1EB]/40">Connect</p>
<a className="block text-lg font-serif mb-2 hover:opacity-70 transition-opacity tracking-tight" href="mailto:hello@vitalis.com">hello@vitalis.com</a>
<p className="text-sm text-[#F3F1EB]/60 mb-6">+44 (0) 20 7123 4567</p>
<p className="text-[10px] text-[#F3F1EB]/40 leading-relaxed">180 Strand, TempleLondon WC2R 1EAUnited Kingdom</p>
</div>
<div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-12 md:gap-24 text-sm font-medium">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Explore</span>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Methodology</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Sourcing</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Journal</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold uppercase tracking-widest text-[#F3F1EB]/40 mb-2">Social</span>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Instagram</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">Twitter</a>
<a className="hover:text-[#F3F1EB]/70 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</div>

<div className="w-full text-center leading-none overflow-hidden border-t border-[#F3F1EB]/5">
<h1 className="text-[26vw] leading-[0.75] font-serif text-[#F3F1EB]/5 tracking-tighter select-none pointer-events-none -mb-[0.05em] pt-4 parallax-footer-text">
                Vitalis
            </h1>
</div>
</footer>



    </>
  );
}
