import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Primary Blue
600: '#0284c7',
900: '#0c4a6e', // Deep Navy
accent: '#f59e0b', // Amber/Construction Gold
},
surface: {
50: '#F9FAFB',
100: '#F3F4F6',
900: '#111827',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(14, 165, 233, 0.3)',
},
backgroundImage: {
'hero-pattern': "linear-gradient(to right bottom, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.8)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop')",
}
}
}
}



{
"@context": "https://schema.org",
"@type": "HomeAndConstructionBusiness",
"name": "A Better Handyman LLC",
"image": "https://a-betterhandyman.com/logo.png",
"@id": "https://a-betterhandyman.com",
"url": "https://a-betterhandyman.com",
"telephone": "+17575870845",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "8459 Chesapeake Blvd, Suite 102",
"addressLocality": "Norfolk",
"addressRegion": "VA",
"postalCode": "23518",
"addressCountry": "US"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 36.9189,
"longitude": -76.2417
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
"opens": "08:00",
"closes": "17:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Saturday",
"opens": "08:00",
"closes": "14:00"
}
],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.5",
"reviewCount": "404"
},
"founders": [
{ "@type": "Person", "name": "Joe Sullivan Jr" },
{ "@type": "Person", "name": "Shannon Sullivan" }
]
}



        // Project Estimator Logic
        const projectType = document.getElementById('projectType');
        const complexitySlider = document.getElementById('complexitySlider');
        const complexityLabel = document.getElementById('complexityLabel');
        const estimatedPrice = document.getElementById('estimatedPrice');
        const materialBtns = document.querySelectorAll('.material-btn');
        
        let materialMultiplier = 1;

        const basePrices = {
            '1': 100, // Small Repair
            '2': 300, // Paint/Drywall
            '3': 500, // Carpentry
            '4': 2000 // Remodel
        };

        function updateEstimate() {
            const base = basePrices[projectType.value];
            const complexity = parseInt(complexitySlider.value);
            
            // Complexity labels
            const labels = ['Simple', 'Standard', 'Moderate', 'Complex', 'Heavy Duty'];
            complexityLabel.innerText = labels[complexity - 1];

            // Calculation Logic (Simplified)
            let min = (base * complexity * 0.8 * materialMultiplier).toFixed(0);
            let max = (base * complexity * 1.2 * materialMultiplier).toFixed(0);

            estimatedPrice.innerText = `$${min} - $${max}`;
        }

        projectType.addEventListener('change', updateEstimate);
        complexitySlider.addEventListener('input', updateEstimate);

        materialBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Toggle UI
                materialBtns.forEach(b => {
                    b.classList.remove('border-brand-500', 'bg-brand-50', 'text-brand-700');
                    b.classList.add('border-slate-200', 'bg-white', 'text-slate-600');
                });
                e.target.classList.remove('border-slate-200', 'bg-white', 'text-slate-600');
                e.target.classList.add('border-brand-500', 'bg-brand-50', 'text-brand-700');
                
                // Set value
                materialMultiplier = parseFloat(e.target.dataset.val);
                updateEstimate();
            });
        });

        // Initialize
        updateEstimate();


        // Image Comparison Slider Logic
        function initComparisons() {
            var x, i;
            x = document.getElementsByClassName("img-comp-overlay");
            for (i = 0; i < x.length; i++) {
                compareImages(x[i]);
            }
            function compareImages(img) {
                var slider, clicked = 0, w, h;
                w = img.offsetWidth;
                h = img.offsetHeight;
                img.style.width = (w / 2) + "px";
                
                // Create slider
                slider = document.createElement("DIV");
                slider.setAttribute("class", "img-comp-slider");
                slider.innerHTML = '<iconify-icon icon="solar:arrows-left-right-linear" style="color:white"></iconify-icon>';
                img.parentElement.insertBefore(slider, img);
                slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
                slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
                
                slider.addEventListener("mousedown", slideReady);
                window.addEventListener("mouseup", slideFinish);
                slider.addEventListener("touchstart", slideReady);
                window.addEventListener("touchend", slideFinish);

                function slideReady(e) {
                    e.preventDefault();
                    clicked = 1;
                    window.addEventListener("mousemove", slideMove);
                    window.addEventListener("touchmove", slideMove);
                }
                function slideFinish() {
                    clicked = 0;
                }
                function slideMove(e) {
                    var pos;
                    if (clicked == 0) return false;
                    pos = getCursorPos(e);
                    if (pos < 0) pos = 0;
                    if (pos > w) pos = w;
                    slide(pos);
                }
                function getCursorPos(e) {
                    var a, x = 0;
                    e = (e.changedTouches) ? e.changedTouches[0] : e;
                    a = img.getBoundingClientRect();
                    x = e.pageX - a.left;
                    x = x - window.pageXOffset;
                    return x;
                }
                function slide(x) {
                    img.style.width = x + "px";
                    slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
                }
            }
        }
        
        // Run comparison on load
        window.onload = initComparisons;
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-900 text-white text-xs py-2 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1 opacity-90"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mon-Fri: 8am-5pm | Sat: 8am-2pm</span>
<span className="flex items-center gap-1 text-brand-accent font-medium"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Same-Day Service Available</span>
</div>
<div className="flex items-center gap-4">
<span className="opacity-80">License #2705136859</span>
<span className="opacity-80">BBB A+ Rating</span>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex justify-between items-center py-4">

<div className="flex flex-col">
<a className="font-display font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none" href="#">
                        A BETTER HANDYMAN
                    </a>
<span className="text-[10px] uppercase tracking-widest text-brand-500 font-semibold mt-0.5">Established 1997</span>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#gallery">Projects</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<a className="text-sm font-bold text-slate-900 hover:text-brand-600 flex items-center gap-1" href="tel:7575870845">
<iconify-icon className="text-brand-accent" icon="solar:phone-linear"></iconify-icon> (757) 587-0845
                        </a>
<span className="text-[10px] text-green-600 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available Now
                        </span>
</div>
<a className="bg-brand-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" href="#estimate">
                        Get Estimate
                    </a>
</div>

<button className="lg:hidden text-slate-900 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl" id="mobile-menu">
<div className="px-6 py-6 space-y-4">
<a className="block text-base font-medium text-slate-700" href="#services">Services</a>
<a className="block text-base font-medium text-slate-700" href="#reviews">Reviews</a>
<a className="block text-base font-medium text-slate-700" href="#gallery">Projects</a>
<div className="pt-4 border-t border-slate-100">
<a className="flex items-center gap-3 w-full justify-center bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg mb-3" href="tel:7575870845">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call Now
                    </a>
<a className="flex items-center gap-3 w-full justify-center bg-brand-accent text-white font-semibold py-3 rounded-lg" href="#estimate">
                        Request Estimate
                    </a>
</div>
</div>
</div>
</header>

<section className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center clip-slant pb-20">
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10 pt-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium mb-6 backdrop-blur-sm">
<iconify-icon className="text-brand-accent" icon="solar:medal-star-linear"></iconify-icon>
                    Voted #1 Handyman in Hampton Roads
                </div>
<h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6 tracking-tight">
                    Craftsmanship You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Trust.</span> <br/>
                    Service You Deserve.
                </h1>
<p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed font-light">
                    From leaky roofs to kitchen remodels, we bring 29 years of family-owned excellence to your doorstep. Licensed, bonded, and ready to help.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-accent hover:bg-amber-600 text-white font-semibold text-base px-8 py-3.5 rounded-lg shadow-glow transition-all flex items-center justify-center gap-2" href="#estimate">
                        Get Free Estimate <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium text-base px-8 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2" href="tel:7575870845">
<iconify-icon icon="solar:phone-linear"></iconify-icon> (757) 587-0845
                    </a>
</div>
<div className="mt-12 flex items-center gap-8 text-white/60 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400 text-lg" icon="solar:verified-check-linear"></iconify-icon>
                        BBB A+ Rated
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        Licensed &amp; Insured
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-400 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                        Family Owned
                    </div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-100 py-6 -mt-12 relative z-20 max-w-7xl mx-auto rounded-xl shadow-soft mx-4 sm:mx-6 lg:mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
<div>
<div className="text-3xl font-display font-bold text-slate-900 tracking-tight">29+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Years Experience</div>
</div>
<div>
<div className="text-3xl font-display font-bold text-slate-900 tracking-tight">404</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">5-Star Reviews</div>
</div>
<div>
<div className="text-3xl font-display font-bold text-slate-900 tracking-tight">2hr</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Avg Response</div>
</div>
<div>
<div className="text-3xl font-display font-bold text-slate-900 tracking-tight">100%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Satisfaction</div>
</div>
</div>
</div>

<section className="py-24 bg-surface-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-600 font-semibold tracking-wider uppercase text-xs">Our Expertise</span>
<h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">Comprehensive Home Solutions</h2>
<p className="mt-4 text-slate-600 text-lg font-light">From structural repairs to cosmetic upgrades, we handle every corner of your home with precision.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:home-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Exterior Services</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Roofing Repairs &amp; Inspections
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Siding (Vinyl &amp; Wood)
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Decks &amp; Fences
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Concrete &amp; Foundations
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:paint-roller-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Interior Remodeling</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Kitchen &amp; Bath Upgrades
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Drywall &amp; Painting
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Flooring &amp; Trim Work
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Carpentry
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-soft border border-slate-100 transition-all duration-300 hover:-translate-y-1 group">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors">
<iconify-icon className="text-2xl text-brand-600 group-hover:text-white transition-colors" icon="solar:hammer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Maintenance &amp; Repair</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Emergency Repairs
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Gutter &amp; Window Cleaning
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Waterproofing
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-brand-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Handyman Checklists
                        </li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-800 transition-colors" href="#estimate">
                    See full service list <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="gallery">

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-32 -z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Real Results, Real Quality</h2>
<p className="text-slate-600">Drag the slider to see the transformation.</p>

<div className="relative">
<div className="text-sm font-semibold text-slate-900 mb-2">Gutter Cleaning &amp; Restoration</div>
<div className="img-comp-container shadow-lg">
<div className="img-comp-img">
<img alt="Clean Gutter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="img-comp-img img-comp-overlay" style={{width: '50%'}}>
<img alt="Dirty Gutter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{filter: 'grayscale(100%) contrast(120%)'}}/>
</div>

</div>
</div>
</div>

<div className="bg-surface-50 p-8 rounded-2xl border border-slate-200 shadow-soft">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">Project Cost Estimator</h3>
<iconify-icon className="text-brand-500 text-2xl" icon="solar:calculator-minimalistic-linear"></iconify-icon>
</div>
<div className="space-y-6">

<div>
<label className="block text-xs font-semibold uppercase text-slate-500 mb-2">Project Type</label>
<select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" id="projectType">
<option value="1">Small Repair / Maintenance</option>
<option value="2">Painting / Drywall</option>
<option value="3">Carpentry / Installation</option>
<option value="4">Major Remodel</option>
</select>
</div>

<div>
<div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
<span>Complexity Level</span>
<span className="text-brand-600" id="complexityLabel">Standard</span>
</div>
<input className="accent-brand-500" id="complexitySlider" max="5" min="1" type="range" value="2"/>
</div>

<div className="grid grid-cols-2 gap-4">
<button className="material-btn border border-brand-500 bg-brand-50 text-brand-700 py-2 rounded-lg text-sm font-medium transition-all" data-val="1">Standard</button>
<button className="material-btn border border-slate-200 bg-white text-slate-600 py-2 rounded-lg text-sm font-medium hover:border-slate-300 transition-all" data-val="1.5">Premium</button>
</div>

<div className="mt-8 pt-6 border-t border-slate-200">
<p className="text-xs text-slate-500 mb-1">Estimated Price Range*</p>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-bold text-slate-900" id="estimatedPrice">$150 - $300</span>
</div>
<p className="text-[10px] text-slate-400 mt-2">*Rough estimate only. Final quote provided after onsite inspection.</p>
</div>
<a className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-all" href="#estimate">
                            Request Exact Quote
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="text-brand-accent font-semibold tracking-wider uppercase text-xs">Testimonials</span>
<h2 className="mt-3 text-3xl md:text-4xl font-display font-bold tracking-tight">Trusted by 400+ Locals</h2>
</div>
<div className="flex items-center gap-4 mt-6 md:mt-0">
<div className="text-right">
<div className="text-2xl font-bold text-white">4.5/5.0</div>
<div className="text-xs text-slate-400">Based on Birdeye Reviews</div>
</div>
<div className="flex text-brand-accent text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex text-brand-accent mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Amazing service, they showed up earlier than scheduled! Everyone was very nice and explained everything. Gutter cleaning was done in less than an hour, they also showed me before and after pictures."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-xs font-bold">DO</div>
<div>
<div className="text-sm font-semibold text-white">Damla Ozsari</div>
<div className="text-xs text-slate-500">Verified Customer</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex text-brand-accent mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Quick and efficient! They let me know when they were on their way and kept me up to date through text. I was provided before and after images which I thought was nice. Would definitely use them again!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">SS</div>
<div>
<div className="text-sm font-semibold text-white">Sara Saghir</div>
<div className="text-xs text-slate-500">Verified Customer</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
<div className="flex text-brand-accent mb-4"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon><iconify-icon icon="solar:star-bold" width="16"></iconify-icon></div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"High quality work- the crew was quick, efficient, and did great work! Would highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<div className="text-sm font-semibold text-white">Jack Duffy</div>
<div className="text-xs text-slate-500">Verified Customer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface-50" id="estimate">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-8">
<div>
<h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight mb-4">Let's Fix Your Home</h2>
<p className="text-slate-600">Fill out the form for a free estimate or call us directly. We respond to all inquiries within 2 hours during business hours.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-brand-600 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Visit Our Office</h4>
<p className="text-sm text-slate-500">8459 Chesapeake Blvd, Suite 102<br/>Norfolk, VA 23518</p>
<a className="text-xs font-medium text-brand-600 hover:underline mt-1 inline-block" href="https://maps.google.com" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-brand-600 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Call Us</h4>
<p className="text-sm text-slate-500">Main: <a className="text-slate-700 hover:text-brand-600 transition-colors" href="tel:7575870845">(757) 587-0845</a></p>
<p className="text-sm text-slate-500">Alt: <a className="text-slate-700 hover:text-brand-600 transition-colors" href="tel:7572899118">(757) 289-9118</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-brand-600 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Hours</h4>
<p className="text-sm text-slate-500">Mon-Fri: 8:00 AM - 5:00 PM</p>
<p className="text-sm text-slate-500">Sat: 8:00 AM - 2:00 PM</p>
<p className="text-sm text-slate-500">Sun: Closed</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="bg-white rounded-2xl shadow-soft p-8 border border-slate-100">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you! Your estimate request has been sent. We will contact you shortly.');">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" required="" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">Service Needed</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all">
<option>General Handyman</option>
<option>Roofing/Siding</option>
<option>Remodeling</option>
<option>Decks/Fences</option>
<option>Emergency Repair</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">Preferred Date</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-2">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none transition-all" placeholder="Describe your issue or project..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:paper-plane-send-linear"></iconify-icon> Send Request
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<div className="h-96 w-full relative z-0">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.528345123456!2d-76.2417!3d36.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDU1JzA4LjAiTiA3NsKwMTQnMzAuMSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(1)'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-12 md:w-80 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
<h4 className="font-semibold text-slate-900 mb-2 text-sm">Service Area</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Norfolk</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Virginia Beach</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Chesapeake</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Hampton</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Portsmouth</span>
<span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-600">Suffolk</span>
</div>
</div>
</div>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<a className="font-display font-bold text-2xl text-white tracking-tight leading-none mb-4 block" href="#">
                        A BETTER HANDYMAN
                    </a>
<p className="text-sm mb-6">Family owned and operated since 1997. We take pride in quality craftsmanship and honest pricing.</p>
<div className="flex gap-4">
<a className="text-white hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-500 transition-colors" href="#"><iconify-icon icon="logos:google-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Project Gallery</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Testimonials</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Handyman Repairs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gutter Cleaning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Roofing &amp; Siding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kitchen Remodeling</a></li>
<li><a className="hover:text-white transition-colors" href="#">Deck Construction</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Credentialed</h4>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
<iconify-icon className="text-brand-500 text-xl" icon="solar:shield-check-bold"></iconify-icon>
<div>
<div className="text-xs text-slate-400">VA License DPOR</div>
<div className="text-sm font-mono text-white">#2705136859</div>
</div>
</div>
<div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
<div className="text-brand-500 font-bold text-xl">BBB</div>
<div>
<div className="text-xs text-slate-400">Accredited Business</div>
<div className="text-sm font-semibold text-white">A+ Rating</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 A Better Handyman LLC. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 flex gap-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
<a className="flex-1 bg-slate-900 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2" href="tel:7575870845">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call
        </a>
<a className="flex-1 bg-brand-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2" href="#estimate">
            Estimate
        </a>
</div>



    </>
  );
}
