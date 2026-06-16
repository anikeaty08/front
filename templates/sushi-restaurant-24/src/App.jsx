import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected tab
            document.getElementById('tab-' + tabId).classList.add('active');
            
            // Reset buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('text-[#E84D31]', 'border-b-2', 'border-[#E84D31]');
                btn.classList.add('text-stone-400');
            });
            
            // Highlight selected button
            const activeBtn = document.getElementById('btn-' + tabId);
            activeBtn.classList.remove('text-stone-400');
            activeBtn.classList.add('text-[#E84D31]', 'border-b-2', 'border-[#E84D31]');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-white/90">
<div className="flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#">HOME</a>
<a className="hover:text-white transition-colors" href="#">ABOUT US</a>
<a className="hover:text-white transition-colors" href="#">MENU</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">PAGES <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-white transition-colors" href="#">BLOGS</a>
</div>
<div className="flex items-center gap-2">
<div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full">
<i className="w-5 h-5 text-white" data-lucide="utensils"></i>
</div>
<span className="text-xl font-medium tracking-tight font-serif text-white">Sushi FZ</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">CART (0)</a>
<button className="flex items-center gap-2 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
                EXPLORE
            </button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-center items-center text-center text-white">

<div className="absolute inset-0 z-0">
<img alt="Sushi Hand" className="w-full h-full object-cover brightness-75" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/noise.png\')'}}></div>
</div>
<div className="relative z-10 px-6 max-w-5xl mx-auto pt-20">
<div className="flex justify-center items-center gap-4 mb-6 opacity-90">
<span className="text-sm tracking-widest uppercase">Delivery</span>
<div className="w-10 h-10 bg-stone-900/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
<img alt="icon" className="w-6 h-6" src="https://api.iconify.design/noto:sushi.svg"/>
</div>
<span className="text-sm tracking-widest uppercase">Sashimi</span>
</div>
<h1 className="text-7xl md:text-9xl tracking-tight leading-none mb-2 text-white drop-shadow-xl">
                SUSHI BAR
            </h1>
<p className="text-xl md:text-3xl tracking-wide font-light text-white/90 mb-10 font-serif italic">
                A Tradition of Japanese Foods.
            </p>
<button className="group bg-[#E84D31] hover:bg-[#D03C22] text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-900/20 flex items-center gap-2 mx-auto">
                Make A Reservation
                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent"></div>
</header>

<section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">

<div className="absolute top-10 left-0 hidden md:block opacity-80 rotate-[-15deg]">
<img alt="Bamboo" className="w-48 h-auto object-contain mix-blend-multiply rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute bottom-10 right-0 hidden md:block opacity-90 translate-y-12">
<img alt="Sushi Plate" className="w-64 h-auto object-contain rounded-xl shadow-2xl rotate-[5deg]" src="https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<span className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-6 block">Explore Our Sushi</span>
<p className="text-2xl md:text-4xl leading-snug font-serif text-stone-800 max-w-4xl mx-auto mb-6 tracking-tight">
            Whether you’re savoring delicate sashimi, signature sushi rolls, or a comforting bowl of ramen, all dishes are crafted with precision. Where Japanese hospitality meets modern elegance.
        </p>
<span className="text-[#E84D31] font-serif italic text-lg tracking-wide">寿司と刺身</span>
</section>

<section className="py-12 px-6 md:px-12 max-w-7xl mx-auto mb-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-center justify-between h-[400px] border border-stone-200 rounded-[100px] py-12 px-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 bg-white">
<h3 className="text-lg font-medium text-stone-600">Seasonal Flavors</h3>
<div className="w-20 h-20 text-stone-800">
<i className="w-full h-full stroke-1" data-lucide="fish"></i>
</div>
<div className="text-5xl font-serif text-[#E84D31]">80+</div>
</div>

<div className="flex flex-col items-center justify-between h-[400px] border border-stone-200 rounded-[100px] py-12 px-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 bg-white">
<h3 className="text-lg font-medium text-stone-600">Healthy Options</h3>
<div className="w-20 h-20 text-stone-800">
<i className="w-full h-full stroke-1" data-lucide="carrot"></i>
</div>
<div className="text-5xl font-serif text-[#E84D31]">120+</div>
</div>

<div className="relative h-[400px] rounded-[100px] overflow-hidden group">
<img alt="Reviews" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-between py-12 text-white">
<h3 className="text-lg font-medium">Positive Reviews</h3>
<div className="text-5xl font-serif text-white drop-shadow-md">96%</div>
</div>
</div>

<div className="flex flex-col items-center justify-between h-[400px] border border-stone-200 rounded-[100px] py-12 px-6 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 bg-white">
<h3 className="text-lg font-medium text-stone-600">Years of Experience</h3>
<div className="w-20 h-20 text-stone-800">
<i className="w-full h-full stroke-1" data-lucide="award"></i>
</div>
<div className="text-5xl font-serif text-[#E84D31]">12+</div>
</div>
</div>
<div className="text-center mt-12">
<button className="px-8 py-3 bg-[#E84D31] text-white rounded-md text-sm font-medium hover:bg-[#D03C22] transition-colors shadow-lg shadow-orange-500/20">
                More About Us
            </button>
</div>
</section>

<section className="py-24 bg-stone-100/50 relative" id="menu">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-serif tracking-tight text-stone-900 mb-4">
                    Freshness in Sushi. <br/><span className="italic text-stone-500">Authentic Taste.</span>
</h2>
<p className="text-lg text-stone-600 max-w-2xl mx-auto font-light">
                    Absolutely delightful! The sushi here is always fresh and beautifully presented, with a fantastic variety of rolls and sashimi to choose from.
                </p>
</div>

<div className="flex justify-center mb-12 border-b border-stone-200 w-fit mx-auto">
<button className="tab-btn px-8 py-4 text-lg font-serif text-[#E84D31] border-b-2 border-[#E84D31] transition-colors" id="btn-sashimi" onclick="switchTab('sashimi')">Sashimi</button>
<button className="tab-btn px-8 py-4 text-lg font-serif text-stone-400 hover:text-stone-800 transition-colors" id="btn-rolls" onclick="switchTab('rolls')">Rolls</button>
<button className="tab-btn px-8 py-4 text-lg font-serif text-stone-400 hover:text-stone-800 transition-colors" id="btn-specials" onclick="switchTab('specials')">Chef's Specials</button>
</div>

<div className="tab-content active grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" id="tab-sashimi">

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Maguro" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Maguro Sashimi</h4>
<span className="text-lg font-semibold text-[#E84D31]">$14</span>
</div>
<p className="text-stone-500 leading-relaxed">Fresh tuna slices served with hand-grated wasabi and aged soy sauce.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Sake" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Sake Sashimi</h4>
<span className="text-lg font-semibold text-[#E84D31]">$12</span>
</div>
<p className="text-stone-500 leading-relaxed">Fatty salmon, delicate and melting in the mouth, sourced from Norway.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Hamachi" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Hamachi</h4>
<span className="text-lg font-semibold text-[#E84D31]">$16</span>
</div>
<p className="text-stone-500 leading-relaxed">Yellowtail with a buttery texture and bold flavor profile.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Hotate" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Hotate Scallop</h4>
<span className="text-lg font-semibold text-[#E84D31]">$18</span>
</div>
<p className="text-stone-500 leading-relaxed">Sweet, creamy Hokkaido scallops served with lemon zest.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Tako" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Tako (Octopus)</h4>
<span className="text-lg font-semibold text-[#E84D31]">$11</span>
</div>
<p className="text-stone-500 leading-relaxed">Tender poached octopus slices with a hint of sea salt.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Ebi" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Ama Ebi</h4>
<span className="text-lg font-semibold text-[#E84D31]">$15</span>
</div>
<p className="text-stone-500 leading-relaxed">Sweet shrimp served raw, showcasing its natural sweetness.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Uni" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Uni (Sea Urchin)</h4>
<span className="text-lg font-semibold text-[#E84D31]">$22</span>
</div>
<p className="text-stone-500 leading-relaxed">Premium sea urchin roe, creamy and rich with ocean flavor.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Ikura" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Ikura</h4>
<span className="text-lg font-semibold text-[#E84D31]">$14</span>
</div>
<p className="text-stone-500 leading-relaxed">Marinated salmon roe that bursts with savory umami.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Saba" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Saba (Mackerel)</h4>
<span className="text-lg font-semibold text-[#E84D31]">$10</span>
</div>
<p className="text-stone-500 leading-relaxed">Cured mackerel with a distinct, rich taste and firm texture.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Tai" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Tai (Sea Bream)</h4>
<span className="text-lg font-semibold text-[#E84D31]">$13</span>
</div>
<p className="text-stone-500 leading-relaxed">Mild, white fish known for its clean taste and celebration status.</p>
</div>
</div>
</div>

<div className="tab-content grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" id="tab-rolls">

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Dragon" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1558985250-27a406d64cb3?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Dragon Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$18</span>
</div>
<p className="text-stone-500 leading-relaxed">Eel and cucumber topped with thin avocado slices.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="California" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">California Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$12</span>
</div>
<p className="text-stone-500 leading-relaxed">Crab meat, avocado, and cucumber with sesame seeds.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Spicy Tuna" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Spicy Tuna Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$14</span>
</div>
<p className="text-stone-500 leading-relaxed">Minced tuna mixed with spicy mayo and scallions.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Rainbow" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Rainbow Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$19</span>
</div>
<p className="text-stone-500 leading-relaxed">A colorful assortment of fish layered over a California roll.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Spider" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1558985250-27a406d64cb3?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Spider Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$17</span>
</div>
<p className="text-stone-500 leading-relaxed">Soft-shell crab tempura with avocado and eel sauce.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Tempura" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Shrimp Tempura</h4>
<span className="text-lg font-semibold text-[#E84D31]">$15</span>
</div>
<p className="text-stone-500 leading-relaxed">Crispy shrimp tempura rolled with crunch and cucumber.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Philly" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Philly Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$13</span>
</div>
<p className="text-stone-500 leading-relaxed">Smoked salmon, cream cheese, and cucumber.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Veggie" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Garden Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$11</span>
</div>
<p className="text-stone-500 leading-relaxed">Asparagus, avocado, cucumber, and pickled daikon.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Volcano" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Volcano Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$16</span>
</div>
<p className="text-stone-500 leading-relaxed">Baked scallops in spicy mayo on top of a California roll.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Caterpillar" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Caterpillar Roll</h4>
<span className="text-lg font-semibold text-[#E84D31]">$16</span>
</div>
<p className="text-stone-500 leading-relaxed">Eel inside, layered with avocado on top to resemble a caterpillar.</p>
</div>
</div>
</div>

<div className="tab-content grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" id="tab-specials">

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Omakase" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1582450871972-ab5ca641643d?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Chef's Omakase</h4>
<span className="text-lg font-semibold text-[#E84D31]">$85</span>
</div>
<p className="text-stone-500 leading-relaxed">A 12-piece journey through the season's best offerings.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Toro" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Bluefin Toro Tartare</h4>
<span className="text-lg font-semibold text-[#E84D31]">$32</span>
</div>
<p className="text-stone-500 leading-relaxed">Minced fatty tuna with caviar, gold flake, and truffle oil.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Wagyu" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">A5 Wagyu Nigiri</h4>
<span className="text-lg font-semibold text-[#E84D31]">$28</span>
</div>
<p className="text-stone-500 leading-relaxed">Lightly torched Japanese beef with sea salt and garlic chip.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Lobster" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1625937759420-26d7e003e04c?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Lobster Motoyaki</h4>
<span className="text-lg font-semibold text-[#E84D31]">$24</span>
</div>
<p className="text-stone-500 leading-relaxed">Baked lobster tail with spicy motoyaki sauce.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Carpaccio" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Hamachi Carpaccio</h4>
<span className="text-lg font-semibold text-[#E84D31]">$21</span>
</div>
<p className="text-stone-500 leading-relaxed">Thinly sliced yellowtail with jalapeño and ponzu sauce.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="FoieGras" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Foie Gras Nigiri</h4>
<span className="text-lg font-semibold text-[#E84D31]">$26</span>
</div>
<p className="text-stone-500 leading-relaxed">Pan-seared foie gras with balsamic glaze.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Chirashi" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Premium Chirashi</h4>
<span className="text-lg font-semibold text-[#E84D31]">$35</span>
</div>
<p className="text-stone-500 leading-relaxed">Assorted premium sashimi over sushi rice.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Kama" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Hamachi Kama</h4>
<span className="text-lg font-semibold text-[#E84D31]">$18</span>
</div>
<p className="text-stone-500 leading-relaxed">Grilled yellowtail collar, succulent and savory.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Pizza" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Sushi Pizza</h4>
<span className="text-lg font-semibold text-[#E84D31]">$16</span>
</div>
<p className="text-stone-500 leading-relaxed">Fried rice patty topped with salmon, tuna, and avocado.</p>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<img alt="Boat" className="w-24 h-24 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="flex-1 border-b border-stone-200 pb-4 group-hover:border-orange-200 transition-colors">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-2xl font-serif text-stone-800">Love Boat (for 2)</h4>
<span className="text-lg font-semibold text-[#E84D31]">$65</span>
</div>
<p className="text-stone-500 leading-relaxed">10 pcs sushi, 15 pcs sashimi, and 2 rolls.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 bg-white px-6 md:px-12 text-stone-800">
<div className="max-w-7xl mx-auto border-t border-stone-100 pt-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-5xl md:text-6xl font-serif tracking-tight mb-8 leading-tight text-stone-900">
                        Handcrafted Sushi, <br/> Made with Passion.
                    </h2>
<div className="grid grid-cols-2 gap-8 text-lg text-stone-500">
<div>
<h4 className="font-bold text-stone-800 uppercase tracking-widest text-xs mb-3">Find Us</h4>
<p>2-5-9 Shingashi, Itabashi</p>
<p>Tokyo, Japan</p>
<p className="mt-2 text-[#E84D31]">hello@sushifz.com</p>
</div>
<div>
<h4 className="font-bold text-stone-800 uppercase tracking-widest text-xs mb-3">Our Hours</h4>
<p>Mon: CLOSED</p>
<p>Tue - Fri: 11 AM — 10 PM</p>
<p>Sat - Sun: 12 PM — 7 PM</p>
</div>
</div>
</div>
<div className="flex flex-col justify-center items-start lg:items-end">
<p className="text-stone-500 max-w-md mb-8 lg:text-right leading-relaxed">
                        Craving sushi? We've got you covered! From classic rolls to chef's special creations, our menu is packed with fresh, flavorful, and mouthwatering Japanese delights.
                    </p>
<button className="bg-[#FDFBF7] border border-stone-200 hover:border-orange-200 text-stone-800 px-10 py-5 rounded-full w-full lg:w-auto text-center font-serif tracking-widest uppercase hover:bg-stone-50 transition-all duration-300 shadow-sm">
                        Make A Reservation
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-stone-100">
<div className="group">
<div className="mb-4 text-[#E84D31] group-hover:scale-110 transition-transform origin-left">
<i className="w-8 h-8" data-lucide="leaf"></i>
</div>
<h4 className="text-xl font-serif mb-2 text-stone-800">Fresh Ingredients</h4>
<p className="text-stone-500 text-base leading-relaxed">Sourced daily, our seafood and produce ensure unmatched quality and taste.</p>
</div>
<div className="group">
<div className="mb-4 text-[#E84D31] group-hover:scale-110 transition-transform origin-left">
<i className="w-8 h-8" data-lucide="flame"></i>
</div>
<h4 className="text-xl font-serif mb-2 text-stone-800">Authentic Flavors</h4>
<p className="text-stone-500 text-base leading-relaxed">Experience traditional Japanese sushi crafted with precision and passion.</p>
</div>
<div className="group">
<div className="mb-4 text-[#E84D31] group-hover:scale-110 transition-transform origin-left">
<i className="w-8 h-8" data-lucide="utensils-crossed"></i>
</div>
<h4 className="text-xl font-serif mb-2 text-stone-800">Signature Recipes</h4>
<p className="text-stone-500 text-base leading-relaxed">Our chefs blend classic techniques with modern creativity for unforgettable dishes.</p>
</div>
<div className="group">
<div className="mb-4 text-[#E84D31] group-hover:scale-110 transition-transform origin-left">
<i className="w-8 h-8" data-lucide="chef-hat"></i>
</div>
<h4 className="text-xl font-serif mb-2 text-stone-800">Master Sushi Chefs</h4>
<p className="text-stone-500 text-base leading-relaxed">With years of expertise, our chefs turn simple ingredients into culinary masterpieces.</p>
</div>
</div>
<div className="mt-20 text-center text-stone-400 text-sm">
                © 2023 Sushi FZ. All rights reserved. Designed with warmth.
            </div>
</div>
</section>


    </>
  );
}
