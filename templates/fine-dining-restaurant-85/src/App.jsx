import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Tab Logic
        function switchTab(tabName) {
            // Hide all content
            document.querySelectorAll('.menu-content').forEach(el => el.classList.add('hidden'));
            // Remove active styles
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('text-white', 'border-white');
                el.classList.add('text-zinc-500', 'border-transparent');
            });

            // Show selected
            document.getElementById(`content-${tabName}`).classList.remove('hidden');
            const btn = document.getElementById(`tab-${tabName}`);
            btn.classList.remove('text-zinc-500', 'border-transparent');
            btn.classList.add('text-white', 'border-white');
        }

        // Mobile Menu
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isOpen = false;

        menuBtn.addEventListener('click', () => {
            isOpen = !isOpen;
            if (isOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:x" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="1.5"></iconify-icon>';
            }
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                isOpen = false;
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="1.5"></iconify-icon>';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-medium tracking-tighter text-white z-50" href="#">LUMIÈRE</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#about">Our Story</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="px-4 py-2 bg-white text-zinc-950 rounded-md hover:bg-zinc-200 transition-colors" href="#reserve">Book a Table</a>
</div>

<button className="md:hidden z-50 text-white" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center space-y-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-medium text-zinc-300 mobile-link" href="#menu">Menu</a>
<a className="text-2xl font-medium text-zinc-300 mobile-link" href="#about">Our Story</a>
<a className="text-2xl font-medium text-zinc-300 mobile-link" href="#gallery">Gallery</a>
<a className="text-2xl font-medium text-white mobile-link" href="#reserve">Reservations</a>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Restaurant Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto fade-in">
<div className="flex items-center justify-center gap-2 mb-6 text-zinc-400 text-xs tracking-[0.2em] uppercase font-medium">
<span className="w-8 h-[1px] bg-zinc-600"></span>
<span>Est. 2024</span>
<span className="w-8 h-[1px] bg-zinc-600"></span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Culinary Artistry <br/> meets Atmosphere.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light mb-10 max-w-xl mx-auto leading-relaxed">
                Experience a symphony of flavors in a setting designed for the senses. Modern gastronomy rooted in tradition.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 rounded-md font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#reserve">
<span>Reserve Now</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-700 text-zinc-300 rounded-md font-medium hover:border-zinc-500 hover:text-white transition-colors" href="#menu">
                    View Menu
                </a>
</div>
</div>
</header>

<section className="border-b border-white/5 bg-zinc-950">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 max-w-7xl mx-auto">
<div className="p-10 flex flex-col items-center text-center">
<iconify-icon className="text-zinc-500 mb-4" icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">Opening Hours</h3>
<p className="text-sm text-zinc-400 leading-loose">
                    Mon-Sun: 5pm - 11pm<br/>
                    Happy Hour: 5pm - 7pm
                </p>
</div>
<div className="p-10 flex flex-col items-center text-center">
<iconify-icon className="text-zinc-500 mb-4" icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">Location</h3>
<p className="text-sm text-zinc-400 leading-loose">
                    142 Obsidian Ave.<br/>
                    Metropolis, NY 10012
                </p>
</div>
<div className="p-10 flex flex-col items-center text-center">
<iconify-icon className="text-zinc-500 mb-4" icon="lucide:phone" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">Contact</h3>
<p className="text-sm text-zinc-400 leading-loose">
                    +1 (555) 000-0000<br/>
                    reservations@lumiere.com
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950" id="menu">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">The Menu</h2>
<p className="text-zinc-500">Seasonal ingredients, expertly crafted.</p>
</div>

<div className="flex justify-center mb-12 border-b border-zinc-800">
<button className="tab-btn px-6 py-3 text-sm font-medium text-white border-b-2 border-white transition-colors" id="tab-starters" onclick="switchTab('starters')">Starters</button>
<button className="tab-btn px-6 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors" id="tab-mains" onclick="switchTab('mains')">Mains</button>
<button className="tab-btn px-6 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors" id="tab-drinks" onclick="switchTab('drinks')">Wine &amp; Cocktails</button>
</div>

<div className="menu-content space-y-8 fade-in" id="content-starters">

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Wagyu Beef Carpaccio</h4>
<span className="text-zinc-500 text-sm">$24</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Truffle oil, parmesan shavings, capers, arugula, toasted pine nuts.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Scallop Ceviche</h4>
<span className="text-zinc-500 text-sm">$21</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Yuzu vinaigrette, chili threads, cilantro, avocado mousse.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Burrata &amp; Heirloom</h4>
<span className="text-zinc-500 text-sm">$19</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Balsamic glaze, basil pesto, grilled sourdough.</p>
</div>
</div>
<div className="menu-content space-y-8 hidden fade-in" id="content-mains">

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Pan-Seared Sea Bass</h4>
<span className="text-zinc-500 text-sm">$38</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Saffron risotto, asparagus, lemon butter sauce.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Duck Confit</h4>
<span className="text-zinc-500 text-sm">$34</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Braised red cabbage, potato gratin, cherry reduction.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Wild Mushroom Risotto</h4>
<span className="text-zinc-500 text-sm">$28</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Porcini, chanterelle, truffle oil, aged parmesan (V).</p>
</div>
</div>
<div className="menu-content space-y-8 hidden fade-in" id="content-drinks">

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Smoked Old Fashioned</h4>
<span className="text-zinc-500 text-sm">$18</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Bourbon, maple syrup, angostura bitters, hickory smoke.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Botanical Gin Fizz</h4>
<span className="text-zinc-500 text-sm">$16</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Empress gin, elderflower liqueur, egg white, lemon.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-zinc-200 font-medium group-hover:text-white transition-colors">Cabernet Sauvignon '18</h4>
<span className="text-zinc-500 text-sm">$14 / $52</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Napa Valley, oak aged, bold notes of blackberry.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Crafting Memories <br/> Through Taste.</h2>
<p className="text-zinc-400 leading-relaxed">
                        Lumière was born from a desire to create a sanctuary where time slows down. Our philosophy is simple: source the finest local ingredients and treat them with respect.
                    </p>
<p className="text-zinc-400 leading-relaxed">
                        The architecture reflects our cuisine—minimal, focused, and elegant. Every corner of the restaurant is designed to offer an intimate atmosphere, perfect for conversation and connection.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<span className="block text-3xl font-medium text-white mb-1">20+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Years Experience</span>
</div>
<div>
<span className="block text-3xl font-medium text-white mb-1">3</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Michelin Stars</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Chef plating" className="rounded-lg w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Fine dining dish" className="rounded-lg w-full h-64 object-cover translate-y-8 grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="reserve">
<div className="max-w-xl mx-auto relative z-10">
<div className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="text-center mb-10">
<iconify-icon className="text-white mb-4" icon="lucide:calendar-days" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Book a Table</h2>
<p className="text-sm text-zinc-400">Secure your experience with us.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase font-medium ml-1">Date</label>
<div className="relative">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none" type="date"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase font-medium ml-1">Time</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-500 transition-colors appearance-none cursor-pointer">
<option>5:00 PM</option>
<option>6:00 PM</option>
<option>7:00 PM</option>
<option>8:00 PM</option>
<option>9:00 PM</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase font-medium ml-1">Guests</label>
<div className="flex items-center justify-between bg-zinc-950 border border-zinc-800 rounded-lg p-3">
<button className="w-8 h-8 flex items-center justify-center rounded text-zinc-400 hover:bg-zinc-800 hover:text-white transition" type="button">
<iconify-icon icon="lucide:minus" width="16"></iconify-icon>
</button>
<span className="text-sm text-white font-medium">2 People</span>
<button className="w-8 h-8 flex items-center justify-center rounded text-zinc-400 hover:bg-zinc-800 hover:text-white transition" type="button">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase font-medium ml-1">Contact</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="Email Address" type="email"/>
</div>
<button className="w-full bg-white text-black py-4 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors mt-4" type="submit">
                        Confirm Reservation
                    </button>
</form>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<h2 className="text-xl font-medium tracking-tighter text-white mb-8">LUMIÈRE</h2>
<div className="flex space-x-6 mb-12">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap justify-center gap-8 text-xs text-zinc-500 uppercase tracking-wider mb-12">
<a className="hover:text-zinc-300 transition-colors" href="#">Press</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Careers</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
<p className="text-zinc-600 text-xs">© 2024 Lumière Restaurant. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
