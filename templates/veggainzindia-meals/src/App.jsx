import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPreOrderForm() {
            document.getElementById('comingSoonPage').classList.add('hidden');
            document.getElementById('preOrderPage').classList.remove('hidden');
            document.getElementById('preOrderPage').classList.add('flex');
        }

        function showComingSoon() {
            document.getElementById('preOrderPage').classList.add('hidden');
            document.getElementById('preOrderPage').classList.remove('flex');
            document.getElementById('comingSoonPage').classList.remove('hidden');
        }

        function closeSuccessModal() {
            document.getElementById('successModal').classList.add('hidden');
            document.getElementById('successModal').classList.remove('flex');
            showComingSoon();
        }

        document.getElementById('preOrderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('successModal').classList.remove('hidden');
            document.getElementById('successModal').classList.add('flex');
            this.reset();
        });

        // Mouse parallax effect for gradient orbs
        document.addEventListener('mousemove', function(e) {
            const orbs = document.querySelectorAll('.animate-float, .animate-float-reverse, .animate-float-slow');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 10;
                const xOffset = (x - 0.5) * speed;
                const yOffset = (y - 0.5) * speed;
                orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">

<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-green-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0s'}}></div>
<div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-lime-500/20 to-emerald-500/30 rounded-full blur-3xl animate-float-reverse" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-br from-green-400/25 to-teal-500/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '4s'}}></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-600/20 to-lime-400/15 rounded-full blur-3xl animate-pulse-glow"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<div className="absolute w-2 h-2 bg-emerald-400/60 rounded-full animate-particle" style={{left: '10%', animationDuration: '12s', animationDelay: '0s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-green-400/50 rounded-full animate-particle" style={{left: '20%', animationDuration: '18s', animationDelay: '2s'}}></div>
<div className="absolute w-3 h-3 bg-lime-400/40 rounded-full animate-particle" style={{left: '35%', animationDuration: '15s', animationDelay: '4s'}}></div>
<div className="absolute w-2 h-2 bg-emerald-300/50 rounded-full animate-particle" style={{left: '50%', animationDuration: '20s', animationDelay: '1s'}}></div>
<div className="absolute w-1 h-1 bg-green-300/60 rounded-full animate-particle" style={{left: '65%', animationDuration: '14s', animationDelay: '3s'}}></div>
<div className="absolute w-2.5 h-2.5 bg-teal-400/40 rounded-full animate-particle" style={{left: '80%', animationDuration: '16s', animationDelay: '5s'}}></div>
<div className="absolute w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-particle" style={{left: '90%', animationDuration: '22s', animationDelay: '2s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-3 h-3 bg-emerald-400/30 rounded-full animate-orbit" style={{animationDuration: '25s'}}></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-2 h-2 bg-lime-400/40 rounded-full animate-orbit" style={{animationDuration: '35s', animationDirection: 'reverse'}}></div>
</div>

<div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse-glow"></div>
<div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/15 to-transparent animate-pulse-glow" style={{animationDelay: '2s'}}></div>

<div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-emerald-500/10 rounded-bl-full"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 border-l border-b border-emerald-500/10 rounded-tr-full"></div>
</div>

<div className="min-h-screen flex flex-col relative z-10" id="comingSoonPage">

<header className="p-6 md:p-8">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shimmer-effect">
<span className="text-lg font-semibold text-neutral-950 tracking-tighter">VG</span>
</div>
<span className="text-xl font-semibold tracking-tight">VeggainzIndia</span>
</div>
</header>

<main className="flex-1 flex items-center justify-center px-6 pb-12">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8 backdrop-blur-sm">
<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
<span className="text-sm text-emerald-400 font-medium">Launching Soon</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
                    Fuel Your Gains,<br/>
<span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent animate-gradient">100% Plant-Powered</span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    High-protein vegetarian meals crafted for gym enthusiasts and health-conscious Indians. 
                    No compromise on taste, no compromise on gains.
                </p>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
<div className="text-center group">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400 group-hover:scale-110 transition-transform">40g+</div>
<div className="text-sm text-neutral-500 mt-1">Protein per meal</div>
</div>
<div className="text-center group">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400 group-hover:scale-110 transition-transform">100%</div>
<div className="text-sm text-neutral-500 mt-1">Vegetarian</div>
</div>
<div className="text-center group">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-400 group-hover:scale-110 transition-transform">0</div>
<div className="text-sm text-neutral-500 mt-1">Preservatives</div>
</div>
</div>

<button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 shimmer-effect" onclick="showPreOrderForm()">
<span>Pre-Order Now</span>
<span className="iconify w-5 h-5 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>

<p className="text-sm text-neutral-500 mt-6">
<span className="iconify inline w-4 h-4 mr-1" data-icon="lucide:gift" style={{strokeWidth: '1.5'}}></span>
                    Early bird offer: Get 20% off on your first order
                </p>
</div>
</main>

<section className="px-6 pb-16">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify w-6 h-6 text-emerald-400" data-icon="lucide:flame" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Macro-Optimized</h3>
<p className="text-sm text-neutral-400">Perfectly balanced macros for muscle building and recovery</p>
</div>
<div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify w-6 h-6 text-emerald-400" data-icon="lucide:leaf" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Fresh &amp; Natural</h3>
<p className="text-sm text-neutral-400">Made with fresh ingredients, delivered to your doorstep</p>
</div>
<div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-emerald-500/30 hover:bg-neutral-900/70 transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify w-6 h-6 text-emerald-400" data-icon="lucide:truck" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-2">Pan-India Delivery</h3>
<p className="text-sm text-neutral-400">Fast delivery across major cities in India</p>
</div>
</div>
</section>

<footer className="px-6 py-8 border-t border-neutral-800/50 backdrop-blur-sm">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-500">© 2024 VeggainzIndia. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-neutral-400 hover:text-emerald-400 transition-colors hover:scale-110 transform" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-400 hover:text-emerald-400 transition-colors hover:scale-110 transform" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:twitter" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-400 hover:text-emerald-400 transition-colors hover:scale-110 transform" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:linkedin" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</footer>
</div>

<div className="min-h-screen hidden flex-col relative z-10" id="preOrderPage">

<header className="p-6 md:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shimmer-effect">
<span className="text-lg font-semibold text-neutral-950 tracking-tighter">VG</span>
</div>
<span className="text-xl font-semibold tracking-tight">VeggainzIndia</span>
</div>
<button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors" onclick="showComingSoon()">
<span className="iconify w-5 h-5" data-icon="lucide:arrow-left" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Back</span>
</button>
</div>
</header>

<main className="flex-1 flex items-center justify-center px-6 py-12">
<div className="w-full max-w-lg">
<div className="bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-2xl shadow-emerald-500/5">
<div className="text-center mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Pre-Order Your Meals</h2>
<p className="text-neutral-400">Be the first to experience VeggainzIndia</p>
</div>
<form className="space-y-5" id="preOrderForm">

<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
<input className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10" placeholder="Enter your name" required="" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Email Address</label>
<input className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10" placeholder="you@example.com" required="" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10" placeholder="+91 98765 43210" required="" type="tel"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">City</label>
<input className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10" placeholder="Mumbai, Delhi, Bangalore..." required="" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-neutral-300 mb-2">Preferred Meal Plan</label>
<select className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 appearance-none cursor-pointer focus:shadow-lg focus:shadow-emerald-500/10" required="" style={{backgroundImage: 'url(\'data:image/svg+xml', charset=UTF-8,%3csvg xmlns=%27http: '//www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23737373%27 strokeWidth=%272%27 strokeLinecap=%27round%27 strokeLinejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem'}}>
<option className="text-neutral-500" disabled="" selected="" value="">Select a plan</option>
<option value="weekly">Weekly Plan (7 meals)</option>
<option value="biweekly">Bi-Weekly Plan (14 meals)</option>
<option value="monthly">Monthly Plan (30 meals)</option>
</select>
</div>

<button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] mt-6 shimmer-effect" type="submit">
                            Submit Pre-Order
                        </button>
</form>
<p className="text-xs text-neutral-500 text-center mt-6">
                        By submitting, you agree to receive updates about VeggainzIndia
                    </p>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm hidden items-center justify-center z-50 p-6" id="successModal">
<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-10 max-w-md w-full text-center shadow-2xl shadow-emerald-500/10">
<div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
<span className="iconify w-8 h-8 text-emerald-400" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-3">You're on the list!</h3>
<p className="text-neutral-400 mb-8">Thank you for your pre-order. We'll notify you as soon as we launch with your exclusive 20% discount.</p>
<button className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105" onclick="closeSuccessModal()">
                Back to Home
            </button>
</div>
</div>


    </>
  );
}
