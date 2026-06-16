import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let cart=[], total=0;

function add(name,price){
cart.push({name,price});
total+=price;
document.getElementById("cartCount").innerText=cart.length;
}

function openCheckout(){
document.getElementById("checkout").classList.remove("hidden");
let list=document.getElementById("items");
list.innerHTML="";
cart.forEach(i=>list.innerHTML+=`<div>${i.name} - Rs.${i.price}</div>`);
document.getElementById("total").innerText=total;
}

function closeCheckout(){
document.getElementById("checkout").classList.add("hidden");
}

function pay(){
let method=document.querySelector('input[name="pay"]:checked').value;
let name=document.getElementById("name").value;
document.getElementById("checkout").classList.add("hidden");
document.getElementById("invoice").classList.remove("hidden");
document.getElementById("invoiceText").innerText=
`Thank you ${name}!
Payment Method: ${method}
Total Paid: Rs. ${total}

(Order Saved Successfully)`;
cart=[]; total=0;
document.getElementById("cartCount").innerText=0;
}

function closeInvoice(){
document.getElementById("invoice").classList.add("hidden");
}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white text-xs font-medium py-2 text-center shadow-lg shadow-purple-900/20">
<div className="container mx-auto px-4 flex justify-center items-center gap-4">
<span>🚀 Free Shipping on Your First Order! No cap.</span>
<button className="bg-white text-purple-900 px-3 py-0.5 rounded-full text-xs font-bold hover:bg-zinc-100 transition-colors uppercase tracking-wide">Shop Now</button>
</div>
</div>

<nav className="fixed top-10 w-full z-40 border-b border-white/5 glass-panel">
<div className="container mx-auto px-4 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-400 flex items-center justify-center text-zinc-950 font-bold">AP</div>
                AadiPak.co
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#products">Drops</a>
<a className="hover:text-white transition-colors" href="#about">Our Vibe</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#contact">Hit Us Up</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
</button>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-48 pb-24 md:pt-60 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-purple-500/10 blur-3xl rounded-full pointer-events-none -z-10"></div>
<div className="container mx-auto px-4 text-center max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-500"></span> New Collection Dropped
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
                Upgrade Your Setup.<br/>
<span className="gradient-text">Level Up Your Vibe.</span>
</h1>
<p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                The trendiest gadgets and accessories for your room, desk, and life. Curated for the next generation of creators and dreamers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#products">
                    Shop The Drop
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-700 text-zinc-300 font-medium rounded-full hover:bg-zinc-800 transition-all" href="#about">
                    Why Us?
                </a>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-900/30">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Lightning Fast Shipping</h3>
<p className="text-sm text-zinc-400">We don't do slow. Get your gear before the trend fades.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-pink-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Aesthetic Guaranteed</h3>
<p className="text-sm text-zinc-400">Curated by teens, for teens. No boring boomer stuff allowed.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Quality Checked</h3>
<p className="text-sm text-zinc-400">We test everything. If it's not fire, we don't sell it.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="products">
<div className="container mx-auto px-4">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Trending Now</h2>
<p className="text-zinc-400 text-sm">Don't sleep on these.</p>
</div>
<a className="hidden md:flex text-sm font-medium text-purple-400 hover:text-purple-300 items-center gap-1 transition-colors" href="#">
                    View All <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all">
<div className="aspect-square bg-zinc-800 relative overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-indigo-900 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" icon="lucide:gamepad-2" width="80"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white border border-white/10">Hot</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white tracking-tight">Retro Pixel Speaker</h3>
<span className="text-white font-semibold">$49.99</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Bring the 8-bit aesthetic to your room with booming bass.</p>
<button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white text-white hover:text-black font-medium text-sm transition-all border border-white/10">Add to Cart</button>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all">
<div className="aspect-square bg-zinc-800 relative overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-pink-900 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" icon="lucide:cloud-rain" width="80"></iconify-icon>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white tracking-tight">RGB Cloud Lamp</h3>
<span className="text-white font-semibold">$34.99</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Literal mood lighting. Controls from your phone.</p>
<button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white text-white hover:text-black font-medium text-sm transition-all border border-white/10">Add to Cart</button>
</div>
</div>

<div className="group relative rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all">
<div className="aspect-square bg-zinc-800 relative overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-cyan-900 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" icon="lucide:smartphone" width="80"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-red-500/80 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white">Low Stock</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white tracking-tight">Holo-Case Pro</h3>
<span className="text-white font-semibold">$19.99</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Iridescent protection that changes color with the light.</p>
<button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white text-white hover:text-black font-medium text-sm transition-all border border-white/10">Add to Cart</button>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="text-sm font-medium text-purple-400 hover:text-purple-300 inline-flex items-center gap-1 transition-colors" href="#">
                    View All <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black">
<div className="container mx-auto px-4">
<div className="mb-8 text-xs text-zinc-500 uppercase tracking-widest">Product Template Preview</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="space-y-4">
<div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 via-zinc-900 to-black"></div>
<iconify-icon className="text-white/10 relative z-10" icon="lucide:headphones" strokeWidth="1" width="150"></iconify-icon>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square rounded-lg bg-zinc-900 border border-purple-500 cursor-pointer"></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/10 cursor-pointer hover:border-white/30 transition"></div>
<div className="aspect-square rounded-lg bg-zinc-900 border border-white/10 cursor-pointer hover:border-white/30 transition"></div>
</div>
</div>

<div>
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Crystal Clear Pods X1</h1>
<div className="flex items-center gap-4 mb-6">
<span className="text-2xl text-purple-400 font-semibold">$59.99</span>
<div className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20">In Stock</div>
</div>
<p className="text-zinc-400 leading-relaxed mb-6">
                        Stop hiding your tech. The X1s feature a fully transparent casing that shows off the raw engineering inside. With active noise cancellation that actually works and bass that hits different, these are the ultimate flex for your daily commute.
                    </p>
<div className="space-y-3 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-500 mt-0.5" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">24-hour battery life (for real).</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-500 mt-0.5" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">See-through cyber aesthetics.</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-500 mt-0.5" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-zinc-300">Sweat &amp; splash resistant.</span>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 bg-white text-black py-3.5 rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                            Buy Now
                        </button>
<button className="px-4 py-3.5 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 text-white transition-all">
<iconify-icon icon="lucide:heart" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="reviews">
<div className="container mx-auto px-4">
<h2 className="text-center text-3xl font-semibold tracking-tight text-white mb-16">The Internet has Spoken</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm mb-6 leading-relaxed">"Honestly, I was skeptical but the Cloud Lamp is literal fire. My TikToks look 10x better now. Shipping was super fast too."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"></div>
<div>
<div className="text-sm font-medium text-white">Sarah J.</div>
<div className="text-xs text-zinc-500">Verified Buyer</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm mb-6 leading-relaxed">"Best purchase I made all year. The transparent earbuds aren't just for looks, the bass actually thumps. Obsessed."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-300"></div>
<div>
<div className="text-sm font-medium text-white">Mike T.</div>
<div className="text-xs text-zinc-500">Verified Buyer</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star-half" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm mb-6 leading-relaxed">"Customer service actually replied to my DM in like 5 mins. That alone makes me wanna buy again. Gear is solid."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-300"></div>
<div>
<div className="text-sm font-medium text-white">Alex R.</div>
<div className="text-xs text-zinc-500">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black pointer-events-none -z-10"></div>
<div className="container mx-auto px-4 max-w-4xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Built by Aadi &amp; Pak.</h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-8">
                We started <strong>AadiPak.co</strong> because we were tired of seeing the same boring, overpriced tech everywhere. We wanted a place where you could find gear that actually fits your aesthetic without breaking the bank.
            </p>
<p className="text-lg text-zinc-400 leading-relaxed mb-10">
                We're just two friends hunting for the coolest drops on the internet and bringing them straight to you. No corporate BS, just vibes and good products. Thanks for supporting the dream! ✌️
            </p>
<div className="flex justify-center gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xl font-bold text-white">A</div>
<div className="w-16 h-16 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xl font-bold text-white">P</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="container mx-auto px-4 max-w-xl">
<div className="rounded-3xl border border-white/5 bg-zinc-900/30 p-8 md:p-12">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">Slide into our DMs</h2>
<p className="text-zinc-400 text-sm">Questions? Collabs? Just want to say hi?</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Your Email</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Message</label>
<textarea className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none" placeholder="What's on your mind?" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-zinc-200 transition-colors" type="button">
                        Send Message
                    </button>
</form>
<div className="mt-8 flex justify-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="20"></iconify-icon></a>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-semibold tracking-tighter">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px]">AP</div>
                AadiPak.co
            </div>
<div className="text-zinc-600 text-sm">
                © 2023 AadiPak.co. All rights reserved.
            </div>
</div>
</footer>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>AadiPak.co | Full Billing System</title>


<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
        body {
            font-family: Inter, sans-serif;
        }

        .glass {
            backdrop-filter: blur(12px);
            background: rgba(24, 24, 27, .6);
        }
    </style>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<h1 className="text-white font-bold text-lg">AadiPak.co</h1>
<button className="relative" onclick="openCheckout()">
<iconify-icon icon="lucide:shopping-cart" width="22"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-pink-500 text-xs px-1 rounded" id="cartCount">0</span>
</button>
</div>
</nav>

<section className="pt-32 pb-16 text-center">
<h1 className="text-5xl font-bold text-white">Next-Gen Gear</h1>
<p className="text-zinc-400 mt-3">Nepal Online Payment Ready 🇳🇵</p>
</section>

<section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
<div className="bg-zinc-900 rounded-xl p-5">
<h3 className="text-white font-semibold">Retro Pixel Speaker</h3>
<p className="text-sm text-zinc-400 mb-2">Rs. 6500</p>
<button className="w-full bg-white text-black py-2 rounded" onclick="add('Retro Pixel Speaker',6500)">Add to Cart</button>
</div>
<div className="bg-zinc-900 rounded-xl p-5">
<h3 className="text-white font-semibold">RGB Cloud Lamp</h3>
<p className="text-sm text-zinc-400 mb-2">Rs. 4500</p>
<button className="w-full bg-white text-black py-2 rounded" onclick="add('RGB Cloud Lamp',4500)">Add to Cart</button>
</div>
<div className="bg-zinc-900 rounded-xl p-5">
<h3 className="text-white font-semibold">Holo Case Pro</h3>
<p className="text-sm text-zinc-400 mb-2">Rs. 2500</p>
<button className="w-full bg-white text-black py-2 rounded" onclick="add('Holo Case Pro',2500)">Add to Cart</button>
</div>
</section>

<div className="hidden fixed inset-0 bg-black/80 z-50 flex items-center justify-center" id="checkout">
<div className="bg-zinc-900 p-6 rounded-xl w-full max-w-lg overflow-y-auto max-h-[90vh]">
<h2 className="text-xl text-white mb-4">Billing &amp; Checkout</h2>

<div className="text-sm space-y-1" id="items"></div>
<p className="mt-2 text-white font-semibold">Total: Rs. <span id="total">0</span></p>
<hr className="my-4 border-zinc-700"/>

<h3 className="text-white mb-2">Billing Details</h3>
<input className="w-full p-2 rounded bg-zinc-800 mb-2" id="name" placeholder="Full Name"/>
<input className="w-full p-2 rounded bg-zinc-800 mb-2" id="phone" placeholder="Phone Number"/>
<input className="w-full p-2 rounded bg-zinc-800 mb-4" id="address" placeholder="Delivery Address"/>

<h3 className="text-white mb-2">Payment Method</h3>
<div className="space-y-2">
<label className="flex items-center gap-2"><input checked="" name="pay" type="radio" value="eSewa"/> eSewa</label>
<label className="flex items-center gap-2"><input name="pay" type="radio" value="Khalti"/> Khalti</label>
<label className="flex items-center gap-2"><input name="pay" type="radio" value="IME Pay"/> IME Pay</label>
<label className="flex items-center gap-2"><input name="pay" type="radio" value="Cash on Delivery"/> Cash on Delivery</label>
</div>
<button className="mt-5 w-full bg-green-500 text-black py-2 rounded font-bold" onclick="pay()">
Confirm &amp; Pay
</button>
<button className="mt-2 w-full border border-zinc-600 py-2 rounded" onclick="closeCheckout()">
Cancel
</button>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/90 z-50 flex items-center justify-center" id="invoice">
<div className="bg-zinc-900 p-6 rounded-xl max-w-md w-full text-center">
<h2 className="text-xl text-green-400 mb-2">Payment Successful ✅</h2>
<p className="text-sm" id="invoiceText"></p>
<button className="mt-4 w-full bg-white text-black py-2 rounded" onclick="closeInvoice()">Done</button>
</div>
</div>



    </>
  );
}
