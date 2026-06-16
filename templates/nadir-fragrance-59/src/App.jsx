import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Quiz Logic
        let quizAnswers = {
            'new-moon': 0,
            'crescent': 0,
            'half-moon': 0,
            'full-moon': 0
        };

        function selectAnswer(questionNum, phase) {
            quizAnswers[phase]++;
            
            // Hide current question
            document.querySelector(`[data-question="${questionNum}"]`).classList.add('hidden');
            
            if (questionNum < 6) {
                // Show next question
                setTimeout(() => {
                    document.querySelector(`[data-question="${questionNum + 1}"]`).classList.remove('hidden');
                }, 300);
            } else {
                // Show results
                showQuizResults();
            }
        }

        function showQuizResults() {
            const result = Object.keys(quizAnswers).reduce((a, b) => quizAnswers[a] > quizAnswers[b] ? a : b);
            window.quizResult = result;

            const resultData = {
                'new-moon': {
                    title: 'New Moon',
                    description: 'You are drawn to mystery and depth. Your essence is one of intrigue and transformation, finding beauty in shadows and the unknown.'
                },
                'crescent': {
                    title: 'Crescent',
                    description: 'You embody subtle elegance and quiet strength. Like the crescent moon, you reveal yourself gradually, with grace and intention.'
                },
                'half-moon': {
                    title: 'Half Moon',
                    description: 'You exist in perfect balance, harmonizing opposing forces. Your presence is calming, thoughtful, and deeply centered.'
                },
                'full-moon': {
                    title: 'Full Moon',
                    description: 'You are luminous and bold, unafraid to shine. Your energy is radiant, commanding attention with natural confidence.'
                }
            };

            setTimeout(() => {
                document.getElementById('result-title').textContent = resultData[result].title;
                document.getElementById('result-description').textContent = resultData[result].description;
                document.getElementById('quiz-results').classList.remove('hidden');
            }, 500);
        }

        // Product Modal Logic
        const products = {
            'new-moon': {
                title: 'New Moon',
                notes: 'Dark vetiver, black fig, midnight jasmine',
                top: 'Black pepper, dark bergamot',
                heart: 'Midnight jasmine, black fig',
                base: 'Vetiver, dark woods, shadow musk',
                image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
                poem: 'In the absence of light, we find ourselves. A fragrance born from shadow.',
                atmosphere: '<div class="absolute inset-0 bg-black/40"></div><div class="absolute inset-0 flex items-center justify-center"><div class="w-32 h-32 bg-black/50 rounded-full blur-3xl animate-pulse-glow"></div></div>'
            },
            'crescent': {
                title: 'Crescent',
                notes: 'Silver sage, white tea, grey amber',
                top: 'Silver sage, white tea',
                heart: 'Pale rose, grey lavender',
                base: 'Grey amber, soft musk, mineral accord',
                image: 'https://images.unsplash.com/photo-1595207171683-18d2e8f47e96?w=800&q=80',
                poem: 'A sliver of light breaks through. Subtle, refined, emerging with grace.',
                atmosphere: '<div class="absolute top-1/4 right-1/4 w-40 h-40 bg-white/40 rounded-full blur-3xl animate-pulse-glow"></div>'
            },
            'half-moon': {
                title: 'Half Moon',
                notes: 'Pale iris, lunar musk, stone accord',
                top: 'Pale iris, rain accord',
                heart: 'Lunar musk, white cedar',
                base: 'Stone accord, pale woods, cashmere',
                image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80',
                poem: 'Balance between darkness and light. A meditation on duality and harmony.',
                atmosphere: '<div class="absolute inset-0 flex items-center justify-center"><div class="w-48 h-48 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full blur-3xl animate-pulse-glow"></div></div>'
            },
            'full-moon': {
                title: 'Full Moon',
                notes: 'Luminous sandalwood, pearl accord, white suede',
                top: 'Pearl accord, white flowers',
                heart: 'Luminous sandalwood, magnolia',
                base: 'White suede, bright amber, moonstone accord',
                image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80',
                poem: 'Radiant and complete. The moon at its zenith, illuminating all.',
                atmosphere: '<div class="absolute inset-0 flex items-center justify-center"><div class="w-64 h-64 bg-white/60 rounded-full blur-3xl animate-pulse-glow"></div></div>'
            }
        };

        function openProductModal(productId) {
            const product = products[productId];
            document.getElementById('modal-title').textContent = product.title;
            document.getElementById('modal-notes').textContent = product.notes;
            document.getElementById('modal-top').textContent = product.top;
            document.getElementById('modal-heart').textContent = product.heart;
            document.getElementById('modal-base').textContent = product.base;
            document.getElementById('modal-image').src = product.image;
            document.getElementById('modal-poem').textContent = product.poem;
            document.getElementById('modal-atmosphere').innerHTML = product.atmosphere;
            
            const modal = document.getElementById('product-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';

            window.currentProduct = productId;
            
            lucide.createIcons();
        }

        function closeProductModal() {
            const modal = document.getElementById('product-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

        function addToCart() {
            closeProductModal();
            
            const product = products[window.currentProduct];
            document.getElementById('cart-item-name').textContent = product.title;
            
            const checkoutModal = document.getElementById('checkout-modal');
            checkoutModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            lucide.createIcons();
        }

        function closeCheckout() {
            const checkoutModal = document.getElementById('checkout-modal');
            checkoutModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="font-serif text-2xl tracking-tighter" style={{letterSpacing: '-0.05em'}}>NADIR</div>
<div className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#fragrances">Fragrances</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#journey">Scent Journey</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#philosophy">Philosophy</a>
</div>
<button className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors">
<i data-lucide="shopping-bag" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-sans">(0)</span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-lunar">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-glow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-300 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 text-center px-6 animate-fade-in-up">
<div className="mb-8 flex justify-center">
<div className="w-32 h-32 gradient-moon rounded-full animate-float"></div>
</div>
<h1 className="font-serif text-7xl md:text-8xl lg:text-9xl tracking-tighter mb-6 text-shadow-soft">Nadir</h1>
<p className="font-sans text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                The lowest point becomes the highest art. Lunar-inspired fragrances that capture the essence of twilight and shadow.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-4 bg-neutral-900 text-white font-sans text-sm tracking-wide hover:bg-neutral-800 transition-colors" href="#journey">
                    Begin Your Journey
                </a>
<a className="px-8 py-4 border border-neutral-900 text-neutral-900 font-sans text-sm tracking-wide hover:bg-neutral-900 hover:text-white transition-colors" href="#fragrances">
                    Explore Collection
                </a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<i className="text-neutral-400" data-lucide="chevron-down" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white" id="fragrances">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-4">The Collection</h2>
<p className="font-sans text-neutral-600 text-lg">Four phases of lunar beauty</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer" onclick="openProductModal('new-moon')">
<div className="relative aspect-[3/4] bg-gradient-to-b from-neutral-100 to-neutral-200 overflow-hidden mb-6">
<img alt="New Moon" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 bg-black/40 rounded-full blur-2xl animate-pulse-glow"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/50 to-transparent">
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">New Moon</h3>
<p className="font-sans text-sm text-white/80">Dark vetiver, black fig, midnight jasmine</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-sans text-sm text-neutral-500">50ml Eau de Parfum</span>
<span className="font-serif text-xl">$185</span>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal('crescent')">
<div className="relative aspect-[3/4] bg-gradient-to-b from-neutral-100 to-neutral-200 overflow-hidden mb-6">
<img alt="Crescent" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors duration-500"></div>
<div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/30 rounded-full blur-2xl animate-pulse-glow"></div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral-900/50 to-transparent">
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Crescent</h3>
<p className="font-sans text-sm text-white/80">Silver sage, white tea, grey amber</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-sans text-sm text-neutral-500">50ml Eau de Parfum</span>
<span className="font-serif text-xl">$185</span>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal('half-moon')">
<div className="relative aspect-[3/4] bg-gradient-to-b from-neutral-100 to-neutral-200 overflow-hidden mb-6">
<img alt="Half Moon" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-500/20 group-hover:bg-neutral-500/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-40 h-40 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral-800/50 to-transparent">
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Half Moon</h3>
<p className="font-sans text-sm text-white/80">Pale iris, lunar musk, stone accord</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-sans text-sm text-neutral-500">50ml Eau de Parfum</span>
<span className="font-serif text-xl">$185</span>
</div>
</div>

<div className="group cursor-pointer" onclick="openProductModal('full-moon')">
<div className="relative aspect-[3/4] bg-gradient-to-b from-neutral-100 to-neutral-200 overflow-hidden mb-6">
<img alt="Full Moon" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-48 bg-white/50 rounded-full blur-3xl animate-pulse-glow"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral-700/50 to-transparent">
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Full Moon</h3>
<p className="font-sans text-sm text-white/80">Luminous sandalwood, pearl accord, white suede</p>
</div>
</div>
<div className="flex justify-between items-center">
<span className="font-sans text-sm text-neutral-500">50ml Eau de Parfum</span>
<span className="font-serif text-xl">$185</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 gradient-lunar" id="journey">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-4">Your Scent Journey</h2>
<p className="font-sans text-neutral-600 text-lg">Discover your lunar phase through six questions</p>
</div>

<div className="bg-white border border-neutral-200 p-8 md:p-12" id="quiz-container">

<div className="quiz-question" data-question="1">
<div className="mb-8">
<span className="font-sans text-sm text-neutral-500 tracking-wide">QUESTION 1 OF 6</span>
<h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">When do you feel most alive?</h3>
</div>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(1, 'new-moon')">
<span className="font-sans text-lg">In the depths of night, when the world is silent</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(1, 'crescent')">
<span className="font-sans text-lg">At twilight, between light and shadow</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(1, 'half-moon')">
<span className="font-sans text-lg">In the balance of dawn and dusk</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(1, 'full-moon')">
<span className="font-sans text-lg">Under bright moonlight, fully illuminated</span>
</button>
</div>
</div>

<div className="quiz-question hidden" data-question="2">
<div className="mb-8">
<span className="font-sans text-sm text-neutral-500 tracking-wide">QUESTION 2 OF 6</span>
<h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">Which element calls to you?</h3>
</div>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(2, 'new-moon')">
<span className="font-sans text-lg">Earth — grounded, deep, mysterious</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(2, 'crescent')">
<span className="font-sans text-lg">Air — ethereal, fleeting, whispered</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(2, 'half-moon')">
<span className="font-sans text-lg">Water — fluid, reflective, calm</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(2, 'full-moon')">
<span className="font-sans text-lg">Light — radiant, clear, pure</span>
</button>
</div>
</div>

<div className="quiz-question hidden" data-question="3">
<div className="mb-8">
<span className="font-sans text-sm text-neutral-500 tracking-wide">QUESTION 3 OF 6</span>
<h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">Your ideal sanctuary is...</h3>
</div>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(3, 'new-moon')">
<span className="font-sans text-lg">A cave lit by candlelight</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(3, 'crescent')">
<span className="font-sans text-lg">A minimalist studio with filtered light</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(3, 'half-moon')">
<span className="font-sans text-lg">A garden at dusk, peaceful and serene</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(3, 'full-moon')">
<span className="font-sans text-lg">A rooftop bathed in moonlight</span>
</button>
</div>
</div>

<div className="quiz-question hidden" data-question="4">
<div className="mb-8">
<span className="font-sans text-sm text-neutral-500 tracking-wide">QUESTION 4 OF 6</span>
<h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">Select a texture</h3>
</div>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(4, 'new-moon')">
<span className="font-sans text-lg">Rough stone, ancient and weathered</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(4, 'crescent')">
<span className="font-sans text-lg">Brushed metal, cool and smooth</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(4, 'half-moon')">
<span className="font-sans text-lg">Polished marble, balanced and refined</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(4, 'full-moon')">
<span className="font-sans text-lg">Soft cashmere, luxurious and bright</span>
</button>
</div>
</div>

<div className="quiz-question hidden" data-question="5">
<div className="mb-8">
<span className="font-sans text-sm text-neutral-500 tracking-wide">QUESTION 5 OF 6</span>
<h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">How do you express yourself?</h3>
</div>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(5, 'new-moon')">
<span className="font-sans text-lg">Through silence and mystery</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(5, 'crescent')">
<span className="font-sans text-lg">With subtle gestures and whispers</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(5, 'half-moon')">
<span className="font-sans text-lg">Through thoughtful conversation</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(5, 'full-moon')">
<span className="font-sans text-lg">Boldly and unapologetically</span>
</button>
</div>
</div>

<div className="quiz-question hidden" data-question="6">
<div className="mb-8">
<span className="font-sans text-sm text-neutral-500 tracking-wide">QUESTION 6 OF 6</span>
<h3 className="font-serif text-3xl md:text-4xl mt-2 tracking-tight">What draws you to fragrance?</h3>
</div>
<div className="space-y-3">
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(6, 'new-moon')">
<span className="font-sans text-lg">The ability to transform and intrigue</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(6, 'crescent')">
<span className="font-sans text-lg">The delicate art of subtlety</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(6, 'half-moon')">
<span className="font-sans text-lg">The harmony of balanced notes</span>
</button>
<button className="quiz-option w-full text-left p-6 border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all" onclick="selectAnswer(6, 'full-moon')">
<span className="font-sans text-lg">The power to illuminate a room</span>
</button>
</div>
</div>

<div className="hidden text-center" id="quiz-results">
<div className="mb-8">
<div className="w-32 h-32 mx-auto mb-6 gradient-moon rounded-full"></div>
<h3 className="font-serif text-4xl md:text-5xl mb-4 tracking-tight" id="result-title">Your Lunar Phase</h3>
<p className="font-sans text-lg text-neutral-600 mb-8" id="result-description"></p>
</div>
<button className="px-8 py-4 bg-neutral-900 text-white font-sans text-sm tracking-wide hover:bg-neutral-800 transition-colors" onclick="openProductModal(window.quizResult)">
                        Discover Your Fragrance
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 bg-white" id="philosophy">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-8">The Philosophy</h2>
<div className="space-y-6 text-lg text-neutral-600 font-sans leading-relaxed">
<p>Nadir — the point in the celestial sphere directly below an observer. The lowest point, the shadow beneath the zenith. We find beauty in this descent, in the quiet moments when light gives way to darkness.</p>
<p>Our fragrances are inspired by the lunar cycle, each scent capturing a different phase of the moon's journey. From the void of the new moon to the luminescence of the full moon, we celebrate the poetry of transformation.</p>
<p>Crafted with rare ingredients and aged in darkness, each fragrance is a meditation on shadow, light, and the spaces between.</p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white py-16 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div>
<div className="font-serif text-2xl mb-4 tracking-tighter" style={{letterSpacing: '-0.05em'}}>NADIR</div>
<p className="text-neutral-400 text-sm font-sans">Lunar-inspired fragrances</p>
</div>
<div>
<h4 className="font-sans text-sm tracking-wide mb-4">SHOP</h4>
<ul className="space-y-2 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">All Fragrances</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discovery Sets</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Sets</a></li>
</ul>
</div>
<div>
<h4 className="font-sans text-sm tracking-wide mb-4">EXPERIENCE</h4>
<ul className="space-y-2 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#journey">Scent Journey</a></li>
<li><a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<h4 className="font-sans text-sm tracking-wide mb-4">CONNECT</h4>
<ul className="space-y-2 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-500 text-sm font-sans">© 2024 Nadir. All rights reserved.</p>
<div className="flex gap-6 text-sm text-neutral-500 font-sans">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 bg-black/80 z-50 hidden items-center justify-center p-4 backdrop-blur-sm" id="product-modal">
<div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto">
<div className="grid md:grid-cols-2">

<div className="relative aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200">
<img alt="" className="w-full h-full object-cover opacity-70" id="modal-image" src=""/>
<div className="absolute inset-0" id="modal-atmosphere"></div>
</div>

<div className="p-8 md:p-12 flex flex-col justify-between">
<div>
<button className="mb-8 text-neutral-400 hover:text-neutral-900 transition-colors" onclick="closeProductModal()">
<i data-lucide="x" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</button>
<h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-4" id="modal-title"></h2>
<p className="font-sans text-lg text-neutral-600 mb-8" id="modal-notes"></p>
<div className="mb-8 pb-8 border-b border-neutral-200">
<h3 className="font-sans text-sm tracking-wide mb-4 text-neutral-500">FRAGRANCE NOTES</h3>
<div className="space-y-3">
<div>
<span className="font-sans text-xs text-neutral-500 tracking-wide">TOP</span>
<p className="font-sans text-neutral-900" id="modal-top"></p>
</div>
<div>
<span className="font-sans text-xs text-neutral-500 tracking-wide">HEART</span>
<p className="font-sans text-neutral-900" id="modal-heart"></p>
</div>
<div>
<span className="font-sans text-xs text-neutral-500 tracking-wide">BASE</span>
<p className="font-sans text-neutral-900" id="modal-base"></p>
</div>
</div>
</div>
<p className="font-serif text-xl text-neutral-600 italic leading-relaxed mb-8" id="modal-poem"></p>
</div>
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-sans text-sm text-neutral-500">50ml Eau de Parfum</span>
<span className="font-serif text-3xl">$185</span>
</div>
<button className="w-full py-4 bg-neutral-900 text-white font-sans text-sm tracking-wide hover:bg-neutral-800 transition-colors" onclick="addToCart()">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-white z-50 hidden overflow-y-auto" id="checkout-modal">
<div className="max-w-4xl mx-auto p-6 md:p-12">
<div className="flex items-center justify-between mb-12">
<div className="font-serif text-2xl tracking-tighter" style={{letterSpacing: '-0.05em'}}>NADIR</div>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" onclick="closeCheckout()">
<i data-lucide="x" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="mb-12 text-center">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">A Poetic Journey</h2>
<p className="font-sans text-neutral-600">Your fragrance awaits</p>
</div>

<div className="bg-gradient-to-b from-neutral-50 to-white border border-neutral-200 p-8 mb-8">
<h3 className="font-sans text-sm tracking-wide mb-6 text-neutral-500">YOUR SELECTION</h3>
<div className="flex items-center gap-6 mb-6">
<div className="w-24 h-24 bg-neutral-200"></div>
<div className="flex-1">
<h4 className="font-serif text-2xl mb-1" id="cart-item-name"></h4>
<p className="font-sans text-sm text-neutral-600">50ml Eau de Parfum</p>
</div>
<span className="font-serif text-xl">$185</span>
</div>
<div className="border-t border-neutral-200 pt-6 flex justify-between items-center">
<span className="font-sans text-sm tracking-wide">TOTAL</span>
<span className="font-serif text-3xl">$185</span>
</div>
</div>

<div className="space-y-8">
<div>
<label className="font-sans text-sm text-neutral-500 tracking-wide mb-2 block">WHERE SHALL WE SEND YOUR MOONLIGHT?</label>
<input className="w-full p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans" placeholder="Email address" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-4">
<input className="p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans" placeholder="First name" type="text"/>
<input className="p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans" placeholder="Last name" type="text"/>
</div>
<div>
<input className="w-full p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans mb-4" placeholder="Address" type="text"/>
<div className="grid md:grid-cols-3 gap-4">
<input className="p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans" placeholder="City" type="text"/>
<input className="p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans" placeholder="State" type="text"/>
<input className="p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans" placeholder="Zip" type="text"/>
</div>
</div>
<div>
<label className="font-sans text-sm text-neutral-500 tracking-wide mb-2 block">A MESSAGE TO THE MOON (OPTIONAL)</label>
<textarea className="w-full p-4 border border-neutral-200 focus:border-neutral-900 focus:outline-none font-sans resize-none" placeholder="Gift message or special instructions" rows="3"></textarea>
</div>
<button className="w-full py-5 bg-neutral-900 text-white font-sans text-sm tracking-wide hover:bg-neutral-800 transition-colors">
                    Complete Your Journey
                </button>
<p className="text-center font-serif text-sm text-neutral-400 italic">
                    "In darkness, we find light. In descent, we find beauty."
                </p>
</div>
</div>
</div>


    </>
  );
}
