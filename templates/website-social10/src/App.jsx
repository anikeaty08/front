import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Modal Toggle Function
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => {
                    modal.classList.add('visible');
                }, 10);
                document.body.style.overflow = 'hidden';
            } else {
                modal.classList.remove('visible');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300);
                document.body.style.overflow = '';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tight font-semibold text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<span className="font-bold tracking-tighter">R</span>
</div>
<span>Ramzan<span className="text-slate-400">Digital</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#process">Process</a>
<a className="hover:text-blue-600 transition-colors" href="#portfolio">Work</a>
<a className="hover:text-blue-600 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#contact">
                    Get a Quote
                </a>

<button className="md:hidden text-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-100 bg-white absolute w-full left-0 px-6 py-4 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-sm font-medium text-slate-600" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600" href="#portfolio">Work</a>
<a className="text-sm font-medium text-blue-600" href="#contact">Contact Us</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/50 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting New Clients in Faisalabad
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
                Scale your business with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">intelligent digital marketing.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                We specialize in high-conversion TikTok, Facebook, and YouTube ads, coupled with modern web development to turn clicks into customers.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100" href="#contact">
                    Start Your Growth
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300" href="#services">
                    View Services
                </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div>
<div className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">50+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Clients Served</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">300%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Avg. ROI</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">5M+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Ad Impressions</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Support</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Comprehensive digital solutions.</h2>
<p className="text-slate-500 font-light text-lg">Everything you need to establish a dominant online presence and drive consistent sales.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">TikTok Ads Marketing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leverage the viral power of TikTok. We create engaging video creatives and manage campaigns that capture attention and drive low-cost conversions.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Meta Ads (FB &amp; Insta)</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precise targeting on Facebook and Instagram. Perfect for lead generation, e-commerce sales, and retargeting previous visitors.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">YouTube Ads</h3>
<p className="text-sm text-slate-500 leading-relaxed">Build brand authority with skippable and non-skippable video ads targeting your ideal customer's viewing habits.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Website Development</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fast, SEO-optimized, and mobile-responsive websites designed to convert visitors into paying clients. Built on modern tech stacks.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Analytics &amp; Reporting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Transparent weekly reporting. We track every rupee spent to ensure you are getting a positive return on investment.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shop-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">E-Commerce Setup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Full Shopify or WooCommerce store setup, including product listing, payment gateway integration, and pixel setup.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Results-driven marketing focused on ROI.</h2>
<p className="text-slate-500 font-light mb-8 text-lg">We don't just run ads; we build sales funnels. Our process is designed to minimize waste and maximize profitability for your business in Faisalabad and beyond.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Data-Backed Strategy</h4>
<p className="text-sm text-slate-500">We analyze market trends and competitor data before spending a single rupee.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Creative Excellence</h4>
<p className="text-sm text-slate-500">Our team designs high-converting ad creatives and landing pages.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Continuous Optimization</h4>
<p className="text-sm text-slate-500">We monitor campaigns 24/7, tweaking bids and audiences for peak performance.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-2xl transform rotate-3"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
<div className="flex items-center justify-between mb-8">
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Campaign Performance</p>
<h3 className="text-xl font-medium text-slate-900">Weekly Growth</h3>
</div>
<div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> +24.5%
                        </div>
</div>

<div className="flex items-end justify-between gap-2 h-40">
<div className="w-full bg-slate-100 rounded-t-lg h-[40%] hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[60%] hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[50%] hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[75%] hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[65%] hover:bg-blue-100 transition-colors"></div>
<div className="w-full bg-blue-600 rounded-t-lg h-[90%] shadow-lg shadow-blue-200"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Ready to grow? Let's talk.</h2>
<p className="text-slate-500">Fill out the form below to receive a free consultation and quote for your project.</p>
</div>
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-10">
<form action="mailto:ramzanstar801@gmail.com" className="space-y-6" enctype="text/plain" method="post">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400" name="phone" placeholder="+92 300 1234567" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Service Interested In</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent appearance-none transition-all" name="service">
<option>TikTok Ads</option>
<option>Facebook/Instagram Ads</option>
<option>YouTube Ads</option>
<option>Website Development</option>
<option>Full Digital Marketing Package</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400" name="message" placeholder="Tell us about your business goals..." rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<input className="hidden" required="" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-white flex items-center justify-center transition-colors mt-0.5">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-500">I agree to the <button className="text-blue-600 hover:underline" onclick="toggleModal('privacy-modal')" type="button">Privacy Policy</button> and <button className="text-blue-600 hover:underline" onclick="toggleModal('terms-modal')" type="button">Terms &amp; Conditions</button>.</span>
</label>
<button className="w-full py-4 px-6 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-lg shadow-slate-200" type="submit">
                        Send Request
                    </button>
<p className="text-center text-xs text-slate-400 mt-4">We typically respond within 2 hours during business days.</p>
</form>
</div>
<div className="mt-12 flex flex-col items-center gap-2">
<p className="text-sm text-slate-500 font-medium">Contact Directly</p>
<a className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors" href="mailto:ramzanstar801@gmail.com">ramzanstar801@gmail.com</a>
<p className="text-sm text-slate-500">Faisalabad, Pakistan</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-lg tracking-tight font-semibold text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">R</div>
<span>Ramzan<span className="text-slate-400">Digital</span></span>
</a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Empowering businesses in Faisalabad with cutting-edge digital marketing strategies and web development.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">TikTok Ads</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Facebook Ads</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">SEO Services</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><button className="hover:text-blue-600 transition-colors text-left" onclick="toggleModal('privacy-modal')">Privacy Policy</button></li>
<li><button className="hover:text-blue-600 transition-colors text-left" onclick="toggleModal('terms-modal')">Terms &amp; Conditions</button></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© <span id="year"></span> Ramzan Digital Marketing Services. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="modal hidden fixed inset-0 z-[100] flex items-center justify-center p-4" id="privacy-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="toggleModal('privacy-modal')"></div>
<div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="toggleModal('privacy-modal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h2 className="text-2xl font-medium text-slate-900 mb-6">Privacy Policy</h2>
<div className="prose prose-sm prose-slate text-slate-500">
<p className="mb-4">At Ramzan Digital Marketing Services, we are committed to protecting your privacy. This policy outlines how we collect and use your information.</p>
<h4 className="text-slate-900 font-medium mt-4 mb-2">1. Information Collection</h4>
<p className="mb-4">We collect information you provide directly to us via our contact forms, including name, email, and phone number, solely for communication regarding our services.</p>
<h4 className="text-slate-900 font-medium mt-4 mb-2">2. Use of Information</h4>
<p className="mb-4">We use your information to provide quotes, deliver services, and communicate project updates. We do not sell your data to third parties.</p>
<h4 className="text-slate-900 font-medium mt-4 mb-2">3. Data Security</h4>
<p className="mb-4">We implement appropriate technical measures to protect your personal data against unauthorized access.</p>
</div>
<div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
<button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium" onclick="toggleModal('privacy-modal')">Close</button>
</div>
</div>
</div>

<div className="modal hidden fixed inset-0 z-[100] flex items-center justify-center p-4" id="terms-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onclick="toggleModal('terms-modal')"></div>
<div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="toggleModal('terms-modal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<h2 className="text-2xl font-medium text-slate-900 mb-6">Terms &amp; Conditions</h2>
<div className="prose prose-sm prose-slate text-slate-500">
<p className="mb-4">By accessing our website and using our services, you agree to the following terms.</p>
<h4 className="text-slate-900 font-medium mt-4 mb-2">1. Services</h4>
<p className="mb-4">Ramzan Digital Marketing Services provides digital advertising and web development services. Scope of work is defined in individual project agreements.</p>
<h4 className="text-slate-900 font-medium mt-4 mb-2">2. Payments</h4>
<p className="mb-4">Payment terms are agreed upon prior to project commencement. Usually, a deposit is required to begin work.</p>
<h4 className="text-slate-900 font-medium mt-4 mb-2">3. Liability</h4>
<p className="mb-4">While we strive for the best results, we cannot guarantee specific sales figures as digital marketing results vary based on market conditions.</p>
</div>
<div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
<button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium" onclick="toggleModal('terms-modal')">Close</button>
</div>
</div>
</div>


    </>
  );
}
