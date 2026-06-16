import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function copyUPI() {
            const upi = document.getElementById('upi-val').innerText;
            const btn = document.getElementById('copy-btn');
            navigator.clipboard.writeText(upi).then(() => {
                const originalText = btn.innerText;
                btn.innerText = "COPIED";
                btn.classList.add('bg-green-600', 'text-white');
                btn.classList.remove('bg-slate-700', 'text-slate-300');
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('bg-green-600', 'text-white');
                    btn.classList.add('bg-slate-700', 'text-slate-300');
                }, 2000);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-200 bg-white">
<img alt="Jaipur Jewelry Logo" className="object-cover w-full h-full transform hover:scale-110 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Jaipur Jewelry</span>
</div>
<a className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-[#d4af37] transition-colors bg-white/50 px-3 py-1.5 rounded-full border border-slate-200/50 hover:border-[#d4af37]/30" href="https://wa.me/917378118254">
<iconify-icon className="text-lg" icon="solar:chat-round-linear"></iconify-icon>
<span>WhatsApp</span>
</a>
</div>
</nav>
<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
</span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Make A Different Look</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Specialist in Oxidised <br className="hidden sm:block"/> &amp; <span className="text-[#d4af37] italic pr-2">Anti-tarnish</span> Jewelry
            </h1>
<p className="text-lg text-slate-500 mb-10 font-light max-w-lg mx-auto leading-relaxed">
                Elevate your elegance with our curated collection. <br/>
<span className="font-serif italic text-slate-400">"शुद्धता और खूबसूरती का संगम"</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group h-12 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white transition-all hover:bg-[#d4af37] hover:shadow-lg hover:shadow-orange-500/20 active:scale-95" href="https://wa.me/917378118254?text=Hi, I want to see your collection">
                    Explore Collection <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="h-12 inline-flex items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-slate-600 border border-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95" onclick="document.getElementById('features').scrollIntoView()">
                    View Favorites
                </button>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 overflow-hidden pointer-events-none">
<div className="absolute top-20 left-[20%] w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-20 right-[20%] w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-[40%] w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
</div>
</header>
<section className="px-6 py-20 max-w-5xl mx-auto" id="features">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tight">Curated Collections</h2>
<p className="text-sm text-slate-500 mt-2">Handpicked designs for the modern aesthetic.</p>
</div>
<a className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] hover:text-slate-900 transition-colors flex items-center gap-1" href="https://wa.me/917378118254">
                View All on Whatsapp <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-100">
<img alt="Oxidised Necklace" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded">OXIDISED</span>
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-[#d4af37] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-2-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-slate-900 text-sm">Signature Peacock Set</h3>
<p className="text-xs text-slate-500 mt-1">Intricate craftsmanship</p>
</div>
<span className="text-sm font-semibold text-slate-900">₹499</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-100">
<img alt="Gold Hoops" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<span className="bg-[#d4af37]/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">ANTI-TARNISH</span>
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-[#d4af37] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-2-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-slate-900 text-sm">Daily Wear Hoops</h3>
<p className="text-xs text-slate-500 mt-1">Water resistant gold polish</p>
</div>
<span className="text-sm font-semibold text-slate-900">₹350</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4 border border-slate-100">
<img alt="Silver Jhumka" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded">SILVER REPLICA</span>
<div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-[#d4af37] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-2-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-slate-900 text-sm">Tribal Jhumkas</h3>
<p className="text-xs text-slate-500 mt-1">Lightweight statement piece</p>
</div>
<span className="text-sm font-semibold text-slate-900">₹299</span>
</div>
</div>
</div>
</section>
<section className="px-6 py-20 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<iconify-icon className="text-3xl text-[#d4af37] mb-4" icon="solar:stars-minimalistic-linear"></iconify-icon>
<h2 className="text-2xl font-serif text-slate-900">Trusted by 500+ Customers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative group hover:shadow-lg transition-shadow">
<iconify-icon className="absolute top-6 right-6 text-slate-200 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-slate-600 italic leading-relaxed mb-6">"ज्वेलरी की क्वालिटी बहुत अच्छी है। मैंने एंटी-तार्निश ब्रेसलेट लिया था, 3 महीने हो गए, चमक वैसी की वैसी है। Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">AS</div>
<div>
<div className="text-sm font-semibold text-slate-900">Anjali Sharma</div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider">Mumbai</div>
</div>
</div>
</div>
<div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative group hover:shadow-lg transition-shadow">
<iconify-icon className="absolute top-6 right-6 text-slate-200 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-slate-600 italic leading-relaxed mb-6">"Traditional look के लिए ऑक्सीडाइज्ड डिज़ाइन एकदम बेस्ट हैं। Packaging was very premium and delivery was fast to Ghatkopar."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-bold">PP</div>
<div>
<div className="text-sm font-semibold text-slate-900">Priya Patel</div>
<div className="text-[10px] text-slate-400 uppercase tracking-wider">Ghatkopar</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-slate-900 text-slate-400 py-16 px-6 border-t border-slate-800">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-slate-800 pb-12">
<div className="md:col-span-4">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="h-6 w-6 rounded bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="font-serif italic font-bold text-xs">J</span>
</div>
<span className="font-medium tracking-tight">Jaipur Jewelry</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-500">
                        Bringing the heritage of Jaipur craftsmanship to your doorstep. Premium oxidised and modern anti-tarnish jewelry.
                    </p>
<div className="flex gap-4">
<a className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors" href="https://wa.me/917378118254">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-4">
<h4 className="text-white text-sm font-semibold mb-6 tracking-wide">Quick Pay</h4>
<div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 uppercase">UPI ID</span>
<iconify-icon className="text-slate-400" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<code className="text-lg font-mono text-white tracking-wide" id="upi-val">7378118254</code>
<button className="ml-auto text-[10px] bg-slate-700 text-slate-300 px-2 py-1 rounded hover:bg-[#d4af37] hover:text-white transition-all" id="copy-btn" onclick="copyUPI()">
                                COPY
                            </button>
</div>
</div>
<div className="mt-6 flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-slate-500" icon="solar:map-point-linear"></iconify-icon>
<p className="text-sm text-slate-500">RCity Mall, Ghatkopar,<br/>Mumbai, Maharashtra</p>
</div>
</div>
<div className="md:col-span-4">
<h4 className="text-white text-sm font-semibold mb-6 tracking-wide">Policies</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#d4af37] mt-0.5" icon="solar:videocamera-record-linear"></iconify-icon>
<span>Unboxing video is <strong>mandatory</strong> for returns within 24 hours.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-600 mt-0.5" icon="solar:box-minimalistic-linear"></iconify-icon>
<span>Returns only accepted for manufacturing defects or damage in transit.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-600 mt-0.5" icon="solar:card-transfer-linear"></iconify-icon>
<span>Refunds processed within 5-7 working days.</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2024 Jaipur Jewelry. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
