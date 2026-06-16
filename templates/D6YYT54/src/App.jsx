import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Initialize Lucide icons
        lucide.createIcons();
        
        // Donation functionality
        let selectedAmount = 25;
        
        document.querySelectorAll('.donation-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.donation-btn').forEach(b => {
                    b.classList.remove('bg-emerald-800', 'text-white');
                    b.classList.add('bg-emerald-100', 'text-emerald-800');
                });
                this.classList.add('bg-emerald-800', 'text-white');
                this.classList.remove('bg-emerald-100', 'text-emerald-800');
                selectedAmount = parseInt(this.dataset.amount);
                document.getElementById('donateBtn').textContent = `Donate $${selectedAmount}`;
                document.getElementById('customAmount').value = '';
            });
        });
        
        document.getElementById('customAmount').addEventListener('input', function() {
            if (this.value) {
                document.querySelectorAll('.donation-btn').forEach(b => {
                    b.classList.remove('bg-emerald-800', 'text-white');
                    b.classList.add('bg-emerald-100', 'text-emerald-800');
                });
                selectedAmount = parseInt(this.value) || 0;
                document.getElementById('donateBtn').textContent = `Donate $${selectedAmount}`;
            }
        });
        
        document.getElementById('comment').addEventListener('input', function() {
            document.getElementById('charCount').textContent = this.value.length;
        });
        
        document.getElementById('donateBtn').addEventListener('click', function() {
            document.getElementById('thankYou').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('thankYou').classList.add('hidden');
            }, 3000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 fixed w-full z-50 fade-in">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center">
<span className="text-white font-bold text-lg">EB</span>
</div>
<div>
<div className="text-xl font-bold tracking-tight text-emerald-800 playfair">Evan Blauvelt Memorial</div>
<div className="text-xs tracking-widest text-stone-600 font-medium">&amp; FUNDRAISER</div>
</div>
</div>
</div>
<nav className="hidden md:flex space-x-10">
<a className="text-stone-700 hover:text-emerald-800 transition-colors duration-300 font-medium tracking-wide" href="#home">Home</a>
<a className="text-stone-700 hover:text-emerald-800 transition-colors duration-300 font-medium tracking-wide" href="#about">About Evan</a>
<a className="text-stone-700 hover:text-emerald-800 transition-colors duration-300 font-medium tracking-wide" href="#events">Events</a>
<a className="text-stone-700 hover:text-emerald-800 transition-colors duration-300 font-medium tracking-wide" href="#donate">Donate</a>
</nav>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-800" id="home">
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-white">
<div className="mb-6 fade-in">
<div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
<span className="text-yellow-400 font-medium tracking-widest text-sm">IN LOVING MEMORY</span>
</div>
</div>
<h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 playfair fade-in fade-in-delay-1">
                        Evan Blauvelt
                        <span className="block text-3xl lg:text-4xl text-yellow-400 mt-4">Memorial &amp; Fundraiser</span>
</h1>
<p className="text-xl text-stone-200 mb-12 leading-relaxed fade-in fade-in-delay-2">
                        Honoring a devoted father, loving husband, and cherished friend. Join us in celebrating Evan's life and supporting his daughter Natasha's future.
                    </p>
<div className="flex flex-col sm:flex-row gap-6 fade-in fade-in-delay-3">
<button className="gold-gradient text-emerald-900 px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 tracking-wide flex items-center justify-center">
<i className="w-5 h-5 mr-3" data-lucide="clock"></i>
                            EVENTS
                        </button>
<button className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 tracking-wide flex items-center justify-center">
<i className="w-5 h-5 mr-3" data-lucide="star"></i>
                            DONATE
                        </button>
</div>
</div>
<div className="fade-in fade-in-delay-2">
<div className="relative">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
<img alt="Evan and his daughter Natasha" className="w-full h-96 object-cover rounded-xl shadow-2xl" src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="mt-4 text-center">
<p className="text-white/80 italic">Evan with his daughter Natasha</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="fade-in">
<div className="inline-block w-16 h-1 bg-yellow-400 mb-6"></div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800 mb-8 playfair">Support the Cause</h2>
<div className="text-xl text-stone-600 leading-relaxed space-y-6 max-w-3xl mx-auto">
<p>This site has been created in honor of Evan Blauvelt, a dear friend and loved one who passed away in 2023.</p>
<p>The site serves to honor Evan's memory and to promote a time each year when friends and loved ones come together to share memories and keep his legacy alive.</p>
<p className="font-medium text-emerald-800">Through these events, we also seek to raise money to contribute to Evan's daughter, Natasha's college savings fund.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="about">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in">
<div className="inline-block w-16 h-1 bg-yellow-400 mb-6"></div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800 mb-6 playfair">About Evan</h2>
</div>
<div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-stone-200 fade-in fade-in-delay-1">
<div className="prose prose-lg prose-stone max-w-none text-stone-700 leading-relaxed space-y-6">
<p className="text-xl font-medium text-emerald-800 mb-6">Evan Blauvelt passed away on November 15, 2023, at the age of 45. A devoted husband, loving father, cherished son, loyal brother, and treasured friend, Evan was the kind of person whose presence made others feel grounded, supported, and seen.</p>
<p>Born in Colorado and raised in Ramsey, NJ, Evan carried with him a deep love of the outdoors and an unshakable loyalty to his beloved Denver Broncos. He spent his happiest moments outside, skiing with his family, hiking wooded trails with his dogs (especially his chocolate Lab, Sierra), playing long rounds of golf, or cheering on his daughter, Natasha, from the sidelines of her soccer games. Watching her play brought him immeasurable pride and joy.</p>
<p>Evan's calm, steady nature was matched by his sharp wit and quiet humor. He didn't seek the spotlight, but he had a way of making everyone around him feel special, whether it was through a thoughtful gesture, an encouraging word, or simply his reliable presence. Friends remember him as someone who always showed up: to help, to listen, to laugh.</p>
<p>He was the beloved husband of Jacquelyn and the proud father of Natasha. He is also remembered with love by his parents, Howard and Dianne; his brother Ryan and sister-in-law Kerry-Ann; and his nieces and nephews, Juliana, Elijah, and Joshua.</p>
<p className="text-emerald-800 font-medium">Evan has left behind not just memories, but a legacy of kindness, humility, and generosity. For those who knew him well and for those who only just came to know his story, Evan's life continues to inspire connection, compassion, and community.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="events">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20 fade-in">
<div className="inline-block w-16 h-1 bg-yellow-400 mb-6"></div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800 mb-6 playfair">EB Memorial Tribute Events</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="group fade-in fade-in-delay-1">
<div className="bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-xl border border-stone-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
<div className="relative overflow-hidden">
<img alt="Golf Course" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=800&amp;h=300&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<div className="bg-emerald-800 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                                    ANNUAL GOLF
                                </div>
</div>
</div>
<div className="p-8">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
<i className="w-6 h-6 text-emerald-700" data-lucide="golf"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-emerald-800 playfair">Annual EB Memorial Golf Outing</h3>
<p className="text-stone-600">Fri, Sep 26 | Franklin</p>
</div>
</div>
<div className="flex gap-4">
<button className="text-emerald-800 hover:text-emerald-900 font-semibold underline">More info</button>
<button className="bg-emerald-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-900 transition-all duration-300">
                                    Buy Tickets
                                </button>
</div>
</div>
</div>
</div>

<div className="group fade-in fade-in-delay-2">
<div className="bg-gradient-to-br from-white to-stone-50 rounded-2xl overflow-hidden shadow-xl border border-stone-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
<div className="relative overflow-hidden">
<img alt="Gathering" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&amp;h=300&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<div className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                                    CELEBRATION
                                </div>
</div>
</div>
<div className="p-8">
<div className="flex items-center mb-6">
<div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
<i className="w-6 h-6 text-yellow-700" data-lucide="users"></i>
</div>
<div>
<h3 className="text-2xl font-bold text-emerald-800 playfair">EB Memorial Gathering</h3>
<p className="text-stone-600">Sat, Sep 27 | Ridgewood</p>
</div>
</div>
<div className="flex gap-4">
<button className="text-emerald-800 hover:text-emerald-900 font-semibold underline">More info</button>
<button className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-all duration-300">
                                    Buy Tickets
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-50" id="donate">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in">
<div className="inline-block w-16 h-1 bg-yellow-400 mb-6"></div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-emerald-800 mb-8 playfair">Support Natasha's College Fund</h2>
<p className="text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
                    Join us in making a difference in Natasha's life. Your support will ensure that Natasha has the means to pursue her aspirations and achieve success. Together, we can honor Evan's legacy by empowering his daughter through education and opportunity.
                </p>
</div>
<div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-stone-200 fade-in fade-in-delay-1">
<div className="grid md:grid-cols-4 gap-4 mb-8">
<button className="donation-btn bg-emerald-100 border-2 border-emerald-200 text-emerald-800 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-800 hover:text-white transition-all duration-300" data-amount="25">$25</button>
<button className="donation-btn bg-emerald-100 border-2 border-emerald-200 text-emerald-800 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-800 hover:text-white transition-all duration-300" data-amount="50">$50</button>
<button className="donation-btn bg-emerald-100 border-2 border-emerald-200 text-emerald-800 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-800 hover:text-white transition-all duration-300" data-amount="100">$100</button>
<button className="donation-btn bg-emerald-100 border-2 border-emerald-200 text-emerald-800 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-800 hover:text-white transition-all duration-300" data-amount="200">$200</button>
</div>
<div className="mb-8">
<input className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl text-lg focus:border-emerald-800 focus:outline-none" id="customAmount" placeholder="Other amount" type="number"/>
</div>
<div className="mb-8">
<label className="block text-stone-700 font-semibold mb-3">Comment (optional)</label>
<textarea className="w-full px-6 py-4 border-2 border-stone-200 rounded-xl focus:border-emerald-800 focus:outline-none resize-none" id="comment" maxlength="100" placeholder="Share a memory or message..." rows="4"></textarea>
<div className="text-right text-sm text-stone-500 mt-2">
<span id="charCount">0</span>/100
                    </div>
</div>
<div className="text-center">
<button className="gold-gradient text-emerald-900 px-12 py-4 rounded-xl font-bold text-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" id="donateBtn">
                        Donate $25
                    </button>
</div>
<div className="text-center mt-8 text-emerald-800 font-semibold text-lg hidden" id="thankYou">
                    Thank you for your generosity!
                </div>
</div>
</div>
</section>

<footer className="bg-emerald-900 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
<div className="text-center">
<div className="flex items-center justify-center space-x-3 mb-6">
<div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
<span className="text-emerald-900 font-bold text-lg">EB</span>
</div>
<div>
<div className="text-2xl font-bold tracking-tight text-white playfair">Evan Blauvelt Memorial</div>
<div className="text-xs tracking-widest text-stone-300 font-medium">&amp; FUNDRAISER</div>
</div>
</div>
<p className="text-stone-300 mb-8 text-lg italic">"A legacy of kindness, humility, and generosity"</p>
</div>
</div>
</footer>


    </>
  );
}
