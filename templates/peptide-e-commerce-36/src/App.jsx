import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Modal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('research-modal');
            const closeBtn = document.getElementById('close-modal');

            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';

            closeBtn.addEventListener('click', () => {
                modal.classList.add('opacity-0');
                modal.classList.add('pointer-events-none');
                
                // Allow scrolling again
                document.body.style.overflow = 'auto';
                
                // Remove from DOM after transition for performance (optional)
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 transition-opacity duration-300" id="research-modal">
<div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 border border-gray-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-orange-300 to-amber-200"></div>
<div className="flex flex-col items-center text-center space-y-4">
<div className="h-12 w-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-2">
<i className="w-6 h-6" data-lucide="flask-conical"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Research Purposes Only</h2>
<p className="text-lg text-gray-500 leading-relaxed">
                    The products sold on this site are intended for laboratory research use only. They are not for human consumption, diagnostic, or therapeutic use. By entering, you confirm you are a qualified researcher.
                </p>
<button className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md" id="close-modal">
                    I Understand &amp; Agree
                </button>
</div>
</div>
</div>

<div className="bg-gray-900 text-white py-2.5 text-center px-4">
<p className="text-sm font-medium tracking-wide">
<span className="text-orange-300 mr-2">New Arrival</span> High-purity BPC-157 vials now in stock. <span className="underline decoration-gray-500 underline-offset-4 ml-2 cursor-pointer hover:text-gray-300">Shop collection</span>
</p>
</div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-200 via-orange-200 to-amber-200 flex items-center justify-center opacity-90">
<svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-opacity="0.5"></path>
<path d="M12 8V16M8 12H16" strokeLinecap="round"></path>
</svg>
</div>
<span className="text-xl font-medium tracking-tight text-gray-900">BioTide</span>
</div>

<div className="hidden md:flex items-center space-x-10">
<a className="text-lg font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#store">Store</a>
<a className="text-lg font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#about">About Us</a>
<a className="text-lg font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Lab Reports</a>
</div>

<div className="flex items-center gap-6">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="relative text-gray-500 hover:text-gray-900 transition-colors group">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-100 text-[10px] font-medium text-orange-600 group-hover:bg-orange-200">0</span>
</button>
<button className="md:hidden text-gray-500">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-600 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                Third-party tested purity &gt; 99%
            </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto">
                Elevate your wellness with <br/>
<span className="bg-gradient-to-r from-emerald-400 via-orange-300 to-amber-300 bg-clip-text text-transparent">scientific purity.</span>
</h1>
<p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                BioTide specializes in premium grade peptide vials for advanced research. Uncompromising quality control ensures consistent results for your laboratory needs.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white text-lg font-medium rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#store">
                    Explore Catalog
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 text-lg font-medium rounded-xl transition-all shadow-sm hover:bg-gray-50" href="#about">
                    Our Quality Process
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="store">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">Featured Compounds</h2>
<p className="text-lg text-gray-500">Laboratory grade peptides available for immediate shipping.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg">All</button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">Recovery</button>
<button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">Cognitive</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-md">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
<i className="w-10 h-10 text-gray-300" data-lucide="flask-round"></i>
</div>
</div>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur border border-gray-100 rounded text-xs font-medium text-emerald-600">In Stock</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">BPC-157 (5mg)</h3>
<p className="text-base text-gray-500 mt-1">Recovery &amp; Healing Research</p>
</div>
<span className="text-lg font-medium text-gray-900">$45.00</span>
</div>
<button className="mt-4 w-full py-2.5 rounded-lg border border-gray-200 text-gray-900 font-medium text-base hover:bg-gray-900 hover:text-white transition-colors">
                        Add to Cart
                    </button>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-md">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
<i className="w-10 h-10 text-gray-300" data-lucide="test-tube-2"></i>
</div>
</div>
<div className="absolute top-3 right-3 px-2 py-1 bg-orange-50 border border-orange-100 rounded text-xs font-medium text-orange-600">Best Seller</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">TB-500 (10mg)</h3>
<p className="text-base text-gray-500 mt-1">Cellular Mobility Research</p>
</div>
<span className="text-lg font-medium text-gray-900">$55.00</span>
</div>
<button className="mt-4 w-full py-2.5 rounded-lg border border-gray-200 text-gray-900 font-medium text-base hover:bg-gray-900 hover:text-white transition-colors">
                        Add to Cart
                    </button>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-md">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
<i className="w-10 h-10 text-gray-300" data-lucide="microscope"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">GHK-Cu (50mg)</h3>
<p className="text-base text-gray-500 mt-1">Copper Peptide Research</p>
</div>
<span className="text-lg font-medium text-gray-900">$38.00</span>
</div>
<button className="mt-4 w-full py-2.5 rounded-lg border border-gray-200 text-gray-900 font-medium text-base hover:bg-gray-900 hover:text-white transition-colors">
                        Add to Cart
                    </button>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 mb-4 transition-all duration-300 group-hover:shadow-md">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
<i className="w-10 h-10 text-gray-300" data-lucide="dna"></i>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Semaglutide (5mg)</h3>
<p className="text-base text-gray-500 mt-1">Metabolic Research</p>
</div>
<span className="text-lg font-medium text-gray-900">$89.00</span>
</div>
<button className="mt-4 w-full py-2.5 rounded-lg border border-gray-200 text-gray-900 font-medium text-base hover:bg-gray-900 hover:text-white transition-colors">
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">

<div className="aspect-square rounded-3xl bg-white border border-gray-200 shadow-xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 via-white to-orange-50 opacity-50"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
<i className="w-12 h-12 mb-4" data-lucide="image"></i>
<span className="text-sm font-medium">Upload Lab/Team Image</span>
</div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 max-w-xs hidden lg:block">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-100 rounded-full text-green-600">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-lg font-medium text-gray-900">Certified Purity</span>
</div>
<p className="text-base text-gray-500">Every batch undergoes rigorous HPLC and Mass Spectrometry testing.</p>
</div>
</div>
<div>
<h2 className="text-sm font-semibold tracking-wider text-orange-500 uppercase mb-3">About Biotide</h2>
<h3 className="text-4xl font-medium tracking-tight text-gray-900 mb-6">Pioneering the standard for research peptides.</h3>
<div className="space-y-6 text-lg text-gray-500">
<p>
                            At Biotide, we believe that successful research starts with reliable materials. Founded by biochemists, our mission is to provide the scientific community with reagents of the highest caliber.
                        </p>
<p>
                            We specialize exclusively in peptide synthesis and purification. Unlike general chemical suppliers, our focused approach allows us to maintain strict cold-chain storage and verify the integrity of every vial that leaves our facility.
                        </p>
<div className="pt-6 grid grid-cols-2 gap-8">
<div>
<h4 className="text-3xl font-medium text-gray-900 mb-1">99.8%</h4>
<p className="text-base text-gray-500">Average Purity</p>
</div>
<div>
<h4 className="text-3xl font-medium text-gray-900 mb-1">24h</h4>
<p className="text-base text-gray-500">Dispatch Time</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Join the research community</h2>
<p className="text-lg text-gray-500 mb-8">Receive the latest updates on new compound synthesis and stock availability.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 transition-all" placeholder="researcher@institute.edu" type="email"/>
<button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-200 to-orange-200 flex items-center justify-center">
<span className="text-gray-800 text-[10px] font-bold">B</span>
</div>
<span className="text-lg font-medium text-gray-900">BioTide</span>
</div>
<p className="text-base text-gray-500">Elevating wellness through scientific precision.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">All Peptides</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Bundles</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">COA Database</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-base text-gray-500 hover:text-gray-900 transition-colors" href="#">Research Disclaimer</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">© 2023 Biotide Wellness. All rights reserved. For Research Use Only.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
