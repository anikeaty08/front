import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Select Elements
            const formatRadios = document.querySelectorAll('input[name="format"]');
            const classRadios = document.querySelectorAll('input[name="mailclass"]');
            const qtySlider = document.getElementById('qty-slider');
            
            const qtyDisplay = document.getElementById('qty-display');
            const summaryFormat = document.getElementById('summary-format');
            const summaryClass = document.getElementById('summary-class');
            const summaryQty = document.getElementById('summary-qty');
            const summaryTotal = document.getElementById('summary-total');
            const summaryPerPiece = document.getElementById('summary-per-piece');

            // Formatter for currency
            const currencyFormatter = new Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD',
                minimumFractionDigits: 2
            });

            // Calculate & Update UI
            function updateCalculator() {
                // Get chosen format
                const selectedFormat = document.querySelector('input[name="format"]:checked');
                const formatName = selectedFormat.getAttribute('data-name');
                const formatPrice = parseFloat(selectedFormat.getAttribute('data-price'));

                // Get chosen class
                const selectedClass = document.querySelector('input[name="mailclass"]:checked');
                const className = selectedClass.getAttribute('data-name');
                const classPrice = parseFloat(selectedClass.getAttribute('data-price'));

                // Get current quantity
                const qty = parseInt(qtySlider.value, 10);

                // Math calculations
                const pricePerPiece = formatPrice + classPrice;
                const total = pricePerPiece * qty;

                // Update text displays
                qtyDisplay.textContent = qty.toLocaleString() + ' pieces';
                summaryFormat.textContent = formatName;
                summaryClass.textContent = className;
                summaryQty.textContent = qty.toLocaleString();
                
                // Update money values
                summaryTotal.textContent = currencyFormatter.format(total);
                summaryPerPiece.textContent = `Just ${currencyFormatter.format(pricePerPiece)} per piece`;
            }

            // Attach Event Listeners
            formatRadios.forEach(radio => radio.addEventListener('change', updateCalculator));
            classRadios.forEach(radio => radio.addEventListener('change', updateCalculator));
            qtySlider.addEventListener('input', updateCalculator);

            // Initialize values on page load
            updateCalculator();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-emerald-600 flex items-center gap-1 uppercase" href="#">
                    MAILACARD
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Industries</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Templates</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Mailing Lists</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden sm:block" href="#">Sign In</a>
<a className="text-sm font-medium bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20" href="#">
                    Order Now
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-20 pb-24 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-medium mb-8">
<iconify-icon height="16" icon="solar:home-smile-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    #1 Choice for Real Estate &amp; Local Business
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
                    Design, print, and mail campaigns in minutes.
                </h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-normal">
                    Stop wasting time at the post office. Choose a template, upload your mailing list, and we handle the printing, postage, and delivery tracking.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 text-white text-sm font-medium rounded-xl hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-600/20 flex items-center justify-center gap-2">
                        Start Your Campaign
                        <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 text-sm font-medium rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm">
<iconify-icon height="20" icon="solar:gallery-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Browse Templates
                    </button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-24 relative z-20">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">

<div className="bg-slate-50/80 border-b border-slate-100 px-6 flex overflow-x-auto">
<div className="flex items-center min-w-max w-full">
<button className="flex-1 py-4 border-b-2 border-emerald-500 flex items-center justify-center gap-2 text-emerald-600 font-medium text-sm transition-colors cursor-default">
<span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-xs">1</span>
                            Product
                        </button>
<button className="flex-1 py-4 border-b-2 border-transparent hover:border-slate-200 flex items-center justify-center gap-2 text-slate-400 font-medium text-sm transition-colors">
<span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-xs">2</span>
                            Design
                        </button>
<button className="flex-1 py-4 border-b-2 border-transparent hover:border-slate-200 flex items-center justify-center gap-2 text-slate-400 font-medium text-sm transition-colors">
<span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-xs">3</span>
                            List
                        </button>
<button className="flex-1 py-4 border-b-2 border-transparent hover:border-slate-200 flex items-center justify-center gap-2 text-slate-400 font-medium text-sm transition-colors">
<span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center text-xs">4</span>
                            Review
                        </button>
</div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="lg:col-span-2 space-y-8">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Choose your mailer format</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="relative group cursor-pointer">
<input checked="" className="peer sr-only" data-name="4x6 Postcard" data-price="0.15" id="fmt-4x6" name="format" type="radio"/>
<label className="block w-full p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-slate-300 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50/30 cursor-pointer" htmlFor="fmt-4x6">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-slate-400 peer-checked:text-emerald-500 transition-colors" height="24" icon="solar:gallery-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border-2 border-slate-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-colors"></div>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">4x6 Postcard</h3>
<p className="text-xs text-slate-500">Standard &amp; cost-effective</p>
</label>
</div>

<div className="relative group cursor-pointer">
<input className="peer sr-only" data-name="6x9 Jumbo" data-price="0.25" id="fmt-6x9" name="format" type="radio"/>
<label className="block w-full p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-slate-300 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50/30 cursor-pointer" htmlFor="fmt-6x9">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-slate-400 peer-checked:text-emerald-500 transition-colors" height="24" icon="solar:gallery-wide-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border-2 border-slate-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-colors"></div>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">6x9 Jumbo</h3>
<p className="text-xs text-slate-500">Stand out in the mailbox</p>
</label>
</div>

<div className="relative group cursor-pointer">
<input className="peer sr-only" data-name="8.5x11 Letter" data-price="0.30" id="fmt-letter" name="format" type="radio"/>
<label className="block w-full p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-slate-300 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50/30 cursor-pointer" htmlFor="fmt-letter">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-slate-400 peer-checked:text-emerald-500 transition-colors" height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="w-4 h-4 rounded-full border-2 border-slate-200 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 transition-colors"></div>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">8.5x11 Letter</h3>
<p className="text-xs text-slate-500">Professional correspondence</p>
</label>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Mailing Class</h2>
<a className="text-xs text-emerald-600 hover:text-emerald-700 font-medium" href="#">Compare transit times</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="relative flex items-start gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center h-5">
<input checked="" className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" data-name="Standard Class" data-price="0.20" name="mailclass" type="radio" value="standard"/>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Standard Class</span>
<span className="block text-xs text-slate-500 mt-1">7-14 business days. Best for bulk marketing.</span>
</div>
</label>
<label className="relative flex items-start gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
<div className="flex items-center h-5">
<input className="w-4 h-4 text-emerald-600 border-slate-300 focus:ring-emerald-500" data-name="First Class" data-price="0.40" name="mailclass" type="radio" value="firstclass"/>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">First Class</span>
<span className="block text-xs text-slate-500 mt-1">3-5 business days. Required for personal info.</span>
</div>
</label>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-slate-900">Estimated Quantity</h2>
<span className="text-sm font-medium text-emerald-600" id="qty-display">5,000 pieces</span>
</div>
<input className="w-full" id="qty-slider" max="50000" min="100" step="100" type="range" value="5000"/>
<div className="flex justify-between text-xs text-slate-400 mt-2">
<span>100</span>
<span>50,000+</span>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-fit">
<h3 className="text-base font-medium text-slate-900 mb-4">Order Summary</h3>
<div className="space-y-3 mb-6">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Product</span>
<span className="font-medium text-slate-900" id="summary-format">4x6 Postcard</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Postage</span>
<span className="font-medium text-slate-900" id="summary-class">Standard Class</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Quantity</span>
<span className="font-medium text-slate-900" id="summary-qty">5,000</span>
</div>
</div>
<div className="border-t border-slate-200 pt-4 mb-6">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm text-slate-500">Estimated Total</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900" id="summary-total">$1,750.00</span>
</div>
<div className="flex justify-end text-xs text-slate-500" id="summary-per-piece">
                                Just $0.35 per piece
                            </div>
</div>
<button className="w-full py-3 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20 flex items-center justify-center gap-2">
                            Next: Add Design
                            <iconify-icon height="18" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Industry-Specific Templates</h2>
<p className="text-sm text-slate-500">Don't have a design? Start with one of our proven, high-converting templates.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
                        View all categories <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all" href="#">
<div className="h-32 bg-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-emerald-600/10 transition-colors"></div>
<iconify-icon className="text-emerald-600" height="40" icon="solar:home-angle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-slate-900 mb-1">Real Estate</h3>
<p className="text-xs text-slate-500">Just Listed, Just Sold, Market Updates</p>
</div>
</a>

<a className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all" href="#">
<div className="h-32 bg-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
<iconify-icon className="text-blue-600" height="40" icon="solar:wrench-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-slate-900 mb-1">Home Services</h3>
<p className="text-xs text-slate-500">HVAC, Roofing, Landscaping, Plumbing</p>
</div>
</a>

<a className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all" href="#">
<div className="h-32 bg-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-orange-600/5 group-hover:bg-orange-600/10 transition-colors"></div>
<iconify-icon className="text-orange-500" height="40" icon="solar:shop-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-slate-900 mb-1">Retail &amp; E-commerce</h3>
<p className="text-xs text-slate-500">Promotions, Grand Openings, Win-back</p>
</div>
</a>

<a className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all" href="#">
<div className="h-32 bg-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-purple-600/5 group-hover:bg-purple-600/10 transition-colors"></div>
<iconify-icon className="text-purple-600" height="40" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-slate-900 mb-1">Healthcare &amp; Dental</h3>
<p className="text-xs text-slate-500">New Patient Offers, Reminders</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center md:text-left">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-emerald-600" height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Targeted Mailing Lists</h3>
<p className="text-sm text-slate-500 leading-relaxed">Upload your own CSV or build a highly-targeted list using our demographic mapping tool based on zip codes, income, and home value.</p>
</div>
<div className="text-center md:text-left">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-orange-500" height="24" icon="solar:printer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Premium Print Quality</h3>
<p className="text-sm text-slate-500 leading-relaxed">All postcards are printed on thick, glossy 14pt cardstock with full-color double-sided printing included at no extra charge.</p>
</div>
<div className="text-center md:text-left">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0">
<iconify-icon className="text-blue-500" height="24" icon="solar:map-point-wave-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">USPS Tracking Included</h3>
<p className="text-sm text-slate-500 leading-relaxed">Log into your dashboard to see exactly when your mail hits the post office and track its progress down to the mailbox delivery date.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-300 py-12 mt-auto border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Products</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Postcards</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Letters</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Snap Packs</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Self Mailers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Mailing Lists</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Design Services</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">EDDM</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">API Integration</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Resources</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Template Library</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Support Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:phone-linear" width="16"></iconify-icon>
                            1-800-555-MAIL
                        </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                            support@mailacard.com
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-emerald-500 uppercase">MAILACARD</span>
</div>
<div className="text-xs text-slate-500">
                    © 2024 MailACard Web2Print Solutions. All rights reserved.
                </div>
</div>
</div>
</footer>



    </>
  );
}
