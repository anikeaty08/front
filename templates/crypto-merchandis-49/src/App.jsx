import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });

        // Simple SPA routing logic
        function switchPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(page => {
                page.classList.remove('active');
            });
            
            // Remove active class from nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active', 'text-white');
                link.classList.add('text-neutral-400');
            });

            // Show selected page
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Update nav link state (matching by onclick attribute for simplicity)
            const activeLinks = document.querySelectorAll(`.nav-link[onclick="switchPage('${pageId}')"]`);
            activeLinks.forEach(link => {
                link.classList.add('active', 'text-white');
                link.classList.remove('text-neutral-400');
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2" href="#" onclick="switchPage('product-page')">
<span className="text-xl font-semibold tracking-tight text-white">Freedom<span className="text-amber-500">crypto.ai</span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-base font-medium text-neutral-400 hover:text-white transition-colors active" onclick="switchPage('product-page')">Shop Merchandise</button>
<button className="nav-link text-base font-medium text-neutral-400 hover:text-white transition-colors" onclick="switchPage('terms-page')">Terms</button>
<button className="nav-link text-base font-medium text-neutral-400 hover:text-white transition-colors" onclick="switchPage('privacy-page')">Privacy</button>
<button className="nav-link text-base font-medium text-neutral-400 hover:text-white transition-colors" onclick="switchPage('cookies-page')">Cookies</button>
</nav>

<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center justify-center px-5 py-2.5 rounded-full border border-amber-500/30 text-amber-500 text-base font-medium hover:bg-amber-500/10 transition-colors">
                    Become a member
                </button>
<button className="md:hidden text-neutral-400 hover:text-white">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<main className="flex-grow pt-20">

<section className="page-section active pb-24" id="product-page">

<div className="max-w-7xl mx-auto px-6 py-8">
<nav className="flex text-base text-neutral-500">
<ol className="flex items-center space-x-2">
<li><a className="hover:text-amber-500 transition-colors" href="#">Home</a></li>
<li><i className="w-4 h-4" data-lucide="chevron-right"></i></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Merchandise</a></li>
<li><i className="w-4 h-4" data-lucide="chevron-right"></i></li>
<li className="text-neutral-300">Bitcoin Vs The World Hoodie</li>
</ol>
</nav>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-6">
<div className="aspect-square bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 relative group">
<img alt="Black Hoodie" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white">Bestseller</div>
</div>
<div className="grid grid-cols-4 gap-4">
<button className="aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-amber-500">
<img alt="Thumbnail 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors">
<img alt="Thumbnail 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors">
<img alt="Thumbnail 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors flex items-center justify-center text-neutral-500 hover:text-white">
<i className="w-8 h-8" data-lucide="play-circle"></i>
</button>
</div>
</div>

<div className="flex flex-col">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">Bitcoin Vs The World Premium Hoodie</h1>
<div className="flex items-center gap-4 mb-6">
<div className="text-3xl text-amber-500 font-semibold tracking-tight">$65.00</div>
<div className="flex items-center text-amber-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star-half"></i>
<span className="ml-2 text-base text-neutral-400">(128 reviews)</span>
</div>
</div>
<p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                        Show your stance in the digital evolution. This premium heavyweight hoodie features a minimalist, embroidered 'Bitcoin Vs The World' design. Crafted for ultimate comfort during those long nights analyzing charts.
                    </p>

<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-medium text-white">Select Size</h3>
<button className="text-base text-amber-500 hover:underline">Size Guide</button>
</div>
<div className="grid grid-cols-5 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-base font-medium text-neutral-400 peer-checked:border-amber-500 peer-checked:text-amber-500 peer-checked:bg-amber-500/10 hover:border-neutral-600 transition-all">S</div>
</label>
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-base font-medium text-neutral-400 peer-checked:border-amber-500 peer-checked:text-amber-500 peer-checked:bg-amber-500/10 hover:border-neutral-600 transition-all">M</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-base font-medium text-neutral-400 peer-checked:border-amber-500 peer-checked:text-amber-500 peer-checked:bg-amber-500/10 hover:border-neutral-600 transition-all">L</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="size" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-base font-medium text-neutral-400 peer-checked:border-amber-500 peer-checked:text-amber-500 peer-checked:bg-amber-500/10 hover:border-neutral-600 transition-all">XL</div>
</label>
<label className="cursor-pointer opacity-50">
<input className="peer sr-only" disabled="" name="size" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-base font-medium text-neutral-600 relative overflow-hidden">
                                    XXL
                                    <div className="absolute inset-0 border-t border-neutral-700 w-full rotate-45 origin-left scale-150"></div>
</div>
</label>
</div>
</div>

<div className="flex gap-4 mb-10">
<div className="flex items-center border border-neutral-800 rounded-xl bg-neutral-900/50 w-32">
<button className="w-10 h-12 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="minus"></i></button>
<input className="w-full h-full bg-transparent text-center text-white text-base font-medium focus:outline-none" readonly="" type="text" value="1"/>
<button className="w-10 h-12 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="flex-1 bg-amber-500 text-black font-semibold text-lg py-4 rounded-xl flex justify-center items-center gap-2 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.2)]">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
                            Add to Cart
                        </button>
</div>

<ul className="space-y-4 border-t border-neutral-900 pt-8">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-amber-500 shrink-0">
<i className="w-5 h-5" data-lucide="truck"></i>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Free Global Shipping</h4>
<p className="text-base text-neutral-500">On all orders over $100. Ships within 24 hours.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-amber-500 shrink-0">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Crypto Payments Accepted</h4>
<p className="text-base text-neutral-500">Pay securely with BTC, ETH, or Stablecoins via Web3 wallet.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-amber-500 shrink-0">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">30-Day Returns</h4>
<p className="text-base text-neutral-500">Not satisfied? Return it within 30 days for a full refund.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="page-section py-24" id="terms-page">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-amber-500 text-base font-medium mb-6">
                        Legal
                    </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Terms and Conditions</h1>
<p className="text-lg text-neutral-400">Last updated: October 24, 2023</p>
</div>
<div className="prose prose-invert prose-lg max-w-none">
<p className="text-lg text-neutral-300 leading-relaxed mb-8">
                        Please read these terms and conditions carefully before using Our Service. These terms govern your use of the Freedomcrypto.ai platform, community forums, and educational resources.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">1. Acknowledgment</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                    </p>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">2. Educational Purposes Only</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        The content provided on Freedomcrypto.ai, including but not limited to articles, videos, community discussions, and market insights, is for informational and educational purposes only. It does not constitute financial, investment, legal, or other professional advice.
                    </p>
<ul className="list-disc list-inside text-lg text-neutral-400 mb-6 space-y-2">
<li>We do not guarantee the accuracy, completeness, or timeliness of information.</li>
<li>Cryptocurrency investments are highly volatile and carry significant risk.</li>
<li>You are solely responsible for your own investment decisions.</li>
</ul>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">3. User Accounts</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
                    </p>
<div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 mt-12">
<h3 className="text-xl font-medium text-amber-500 mb-3 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
                            Important Disclaimer
                        </h3>
<p className="text-lg text-amber-500/80 leading-relaxed">
                            Past performance is not indicative of future results. Never invest more than you can afford to lose. The Company shall not be held liable for any financial losses incurred through the use of our platform.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section py-24" id="privacy-page">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-amber-500 text-base font-medium mb-6">
                        Legal
                    </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Privacy Policy</h1>
<p className="text-lg text-neutral-400">Effective Date: October 24, 2023</p>
</div>
<div className="prose prose-invert prose-lg max-w-none">
<p className="text-lg text-neutral-300 leading-relaxed mb-8">
                        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>
<p className="text-lg text-neutral-300 leading-relaxed mb-8">
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">1. Collecting and Using Your Personal Data</h2>
<h3 className="text-xl font-medium text-white mt-8 mb-4">Types of Data Collected</h3>
<h4 className="text-lg font-medium text-neutral-200 mt-6 mb-3">Personal Data</h4>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
<ul className="list-disc list-inside text-lg text-neutral-400 mb-6 space-y-2">
<li>Email address</li>
<li>First name and last name</li>
<li>Usage Data</li>
<li>Wallet Addresses (if connected voluntarily)</li>
</ul>
<h4 className="text-lg font-medium text-neutral-200 mt-6 mb-3">Usage Data</h4>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        Usage Data is collected automatically when using the Service. It may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">2. Web3 &amp; Blockchain Data</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        Given the nature of our platform, you may choose to connect a Web3 wallet. We do not store your private keys. Public wallet addresses and related on-chain transaction history associated with your interactions with our smart contracts are public by nature and recorded on the blockchain.
                    </p>
</div>
</div>
</section>

<section className="page-section py-24" id="cookies-page">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 text-amber-500 text-base font-medium mb-6">
                        Legal
                    </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Cookies Policy</h1>
<p className="text-lg text-neutral-400">Effective Date: October 24, 2023</p>
</div>
<div className="prose prose-invert prose-lg max-w-none">
<p className="text-lg text-neutral-300 leading-relaxed mb-8">
                        This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">1. What are Cookies?</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                    </p>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">2. The use of the Cookies</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        We use both Session and Persistent Cookies for the purposes set out below:
                    </p>
<div className="space-y-6 mt-8">
<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
<h3 className="text-xl font-medium text-white mb-2">Necessary / Essential Cookies</h3>
<p className="text-base text-neutral-400 mb-2"><span className="text-neutral-300 font-medium">Type:</span> Session Cookies</p>
<p className="text-base text-neutral-400 mb-2"><span className="text-neutral-300 font-medium">Administered by:</span> Us</p>
<p className="text-lg text-neutral-400 leading-relaxed">Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
<h3 className="text-xl font-medium text-white mb-2">Cookies Policy / Notice Acceptance Cookies</h3>
<p className="text-base text-neutral-400 mb-2"><span className="text-neutral-300 font-medium">Type:</span> Persistent Cookies</p>
<p className="text-base text-neutral-400 mb-2"><span className="text-neutral-300 font-medium">Administered by:</span> Us</p>
<p className="text-lg text-neutral-400 leading-relaxed">Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-white mt-12 mb-6">3. Your Choices Regarding Cookies</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
                    </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="text-xl font-semibold tracking-tight text-white">Freedom<span className="text-amber-500">crypto.ai</span></span>
</a>
<p className="text-base text-neutral-400 max-w-sm mb-8 leading-relaxed">
                        A community-led platform for crypto education, insights, and premium merchandise. No hype, just real learning.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-black transition-all" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
</div>
</div>

<div>
<h4 className="text-base font-semibold text-white mb-6">Platform</h4>
<ul className="space-y-4">
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#">Home</a></li>
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#">Insights</a></li>
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#">Exchanges</a></li>
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#" onclick="switchPage('product-page')">Merchandise</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#" onclick="switchPage('terms-page')">Terms &amp; Conditions</a></li>
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#" onclick="switchPage('privacy-page')">Privacy Policy</a></li>
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#" onclick="switchPage('cookies-page')">Cookies Policy</a></li>
<li><a className="text-base text-neutral-400 hover:text-amber-500 transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-6">Contact</h4>
<ul className="space-y-4">
<li className="text-base text-neutral-400 flex items-center gap-3">
<i className="w-4 h-4" data-lucide="mail"></i> hello@freedomcrypto.ai
                        </li>
<li className="text-base text-neutral-400 flex items-start gap-3">
<i className="w-4 h-4 mt-1" data-lucide="map-pin"></i> Web3 Innovation Center,<br/>Miami, FL 33101
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-base text-neutral-500">© 2023 Freedomcrypto.ai. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="text-base text-neutral-500 hover:text-white cursor-pointer">Status</span>
<span className="text-base text-neutral-500 hover:text-white cursor-pointer">Security</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
