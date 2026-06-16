import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            var printBtn = document.getElementById('apvillas-print-btn');
            
            if (printBtn) {
                printBtn.addEventListener('click', function() {
                    
                    // REMOVE OLD
                    var old = document.querySelector('.pdf-print-area');
                    if(old) old.remove();

                    // Clone the element to avoid altering the active view
                    var sourceElement = document.getElementById('property-document');
                    var printElement = sourceElement.cloneNode(true);
                    printElement.classList.add('pdf-print-area');
                    
                    // Strip styling that looks weird in PDFs
                    printElement.classList.remove('ring-1', 'ring-zinc-100', 'shadow-sm', 'rounded-xl');
                    
                    // Hide the cloned area offscreen
                    printElement.style.position = 'absolute';
                    printElement.style.left = '-9999px';
                    printElement.style.top = '0';
                    printElement.style.width = '1024px'; // Enforce a standard desktop width for rendering
                    document.body.appendChild(printElement);

                    // Configuration for PDF generation
                    var opt = {
                        margin:       [0.5, 0, 0.5, 0],
                        filename:     'AP_Villas_Majorelle.pdf',
                        image:        { type: 'jpeg', quality: 0.98 },
                        html2canvas:  { 
                            scale: 2, 
                            useCORS: true,
                            letterRendering: true,
                            windowWidth: 1024
                        },
                        pagebreak:    { mode: 'css', avoid: '.print-avoid' },
                        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
                    };

                    // Initial visual feedback
                    var originalText = printBtn.innerHTML;
                    printBtn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin" width="18" height="18"></iconify-icon> Formatting...';
                    printBtn.classList.add('opacity-80', 'cursor-not-allowed');

                    // Generate PDF
                    html2pdf().set(opt).from(printElement).save().then(function() {
                        // Restore button state
                        printBtn.innerHTML = originalText;
                        printBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                        // Clean up clone
                        printElement.remove();
                    }).catch(function(err) {
                        console.error('PDF Generation Error:', err);
                        printBtn.innerHTML = 'Error. Try Again.';
                        setTimeout(function() { printBtn.innerHTML = originalText; }, 3000);
                        printBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                        // Clean up clone
                        printElement.remove();
                    });
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full bg-[#ffffff]/90 backdrop-blur-md border-b border-zinc-100 z-50 no-print flex justify-center print:hidden">
<div className="max-w-5xl w-full px-6 h-16 flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-zinc-900 uppercase">AP Villas</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500 hidden sm:block">
<span>Where luxury meets authentic Moroccan charm</span>
</div>
<button className="bg-[#b57862] hover:bg-[#a06853] text-[#ffffff] px-4 py-2 rounded-md shadow-sm flex items-center gap-2 text-sm font-medium transition-colors duration-200" id="apvillas-print-btn">
<iconify-icon height="18" icon="solar:printer-linear" width="18"></iconify-icon>
                Download PDF
            </button>
</div>
</nav>

<main className="w-full max-w-5xl pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex justify-center print:pt-0 print:pb-0 print:px-0 print:block">

<div className="w-full bg-[#ffffff] shadow-sm ring-1 ring-zinc-100 rounded-xl overflow-hidden text-left relative print:shadow-none print:ring-0 print:rounded-none" id="property-document">

<div className="print-avoid print:break-inside-avoid p-8 border-b border-zinc-100 flex justify-between items-center bg-[#fefefe]">
<span className="text-xl font-semibold tracking-tighter text-zinc-900 uppercase">AP Villas</span>
<span className="text-xs font-medium text-[#b57862] uppercase tracking-widest">Exclusive Listing</span>
</div>

<section className="pdf-hero print-avoid print:break-inside-avoid relative w-full aspect-[21/9] bg-zinc-100 overflow-hidden">
<img alt="Villa Exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&amp;w=2081&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-8">
<h1 className="text-3xl font-semibold tracking-tight text-[#ffffff]">Villa Majorelle Palmeraie</h1>
<p className="text-sm text-zinc-200 mt-2 flex items-center gap-1.5">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                        Palmeraie, Marrakech
                    </p>
</div>
</section>

<section className="print-avoid print:break-inside-avoid p-8 border-b border-zinc-100 bg-[#fefefe]" id="single-overview-section">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium uppercase tracking-wider">
<iconify-icon className="text-[#b57862]" height="16" icon="solar:tag-price-linear" width="16"></iconify-icon>
                            Asking Price
                        </div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">€ 2,850,000</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium uppercase tracking-wider">
<iconify-icon className="text-[#b57862]" height="16" icon="solar:ruler-angular-linear" width="16"></iconify-icon>
                            Living Space
                        </div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">850 m²</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium uppercase tracking-wider">
<iconify-icon className="text-[#b57862]" height="16" icon="solar:bed-linear" width="16"></iconify-icon>
                            Bedrooms
                        </div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">6 Suites</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-xs text-zinc-500 font-medium uppercase tracking-wider">
<iconify-icon className="text-[#b57862]" height="16" icon="solar:bath-linear" width="16"></iconify-icon>
                            Bathrooms
                        </div>
<div className="text-xl font-semibold tracking-tight text-zinc-900">7 Full</div>
</div>
</div>
</section>

<section className="print-avoid print:break-inside-avoid p-8 border-b border-zinc-100" id="wpestate_property_description_section">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-[#b57862]" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
                    Property Description
                </h2>
<div className="text-sm text-zinc-500 leading-relaxed space-y-4 font-light">
<p>
                        Discover an unparalleled level of luxury in this magnificent villa located in the prestigious Palmeraie district. Designed to seamlessly blend traditional Moroccan architecture with contemporary comforts, Villa Majorelle offers a sanctuary of peace just minutes away from the vibrant heart of Marrakech. The property is surrounded by lush, mature gardens, providing complete privacy and spectacular views of the Atlas Mountains.
                    </p>
<p>
                        The interior features soaring ceilings, intricately carved cedar wood details, and authentic zellige tilework, all illuminated by abundant natural light. The sprawling ground floor includes multiple reception areas, a formal dining room, and a state-of-the-art kitchen. Each of the six master suites is an oasis of tranquility, complete with private terraces, fireplaces, and spa-like en-suite bathrooms.
                    </p>
<p>
                        Outdoors, the expansive terraces lead down to a stunning 20-meter heated infinity pool, complemented by a fully equipped outdoor kitchen, a sunken lounge area, and a traditional Moroccan Hammam. This is a rare opportunity to own a piece of architectural brilliance in one of the world's most sought-after locations.
                    </p>
</div>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 print-avoid print:break-inside-avoid">

<section className="p-8 border-b md:border-b-0 md:border-r border-zinc-100 bg-[#fefefe]" id="accordion_property_address">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-6">Location Information</h3>
<ul className="space-y-4 text-sm">
<li className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-zinc-500">City</span>
<span className="font-medium text-zinc-900">Marrakech</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-zinc-500">Area</span>
<span className="font-medium text-zinc-900">Palmeraie</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-zinc-500">Address</span>
<span className="font-medium text-zinc-900">Circuit de la Palmeraie</span>
</li>
<li className="flex justify-between items-center py-2">
<span className="text-zinc-500">Zip Code</span>
<span className="font-medium text-zinc-900">40000</span>
</li>
</ul>
</section>

<section className="p-8 border-b border-zinc-100 bg-[#fefefe]" id="accordion_property_details">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-6">Technical Details</h3>
<ul className="space-y-4 text-sm">
<li className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-zinc-500">Property ID</span>
<span className="font-medium text-zinc-900">APV-8492</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-zinc-500">Year Built</span>
<span className="font-medium text-zinc-900">2021</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-zinc-50">
<span className="text-zinc-500">Structure</span>
<span className="font-medium text-zinc-900">Masonry / Concrete</span>
</li>
<li className="flex justify-between items-center py-2">
<span className="text-zinc-500">Lot Size</span>
<span className="font-medium text-zinc-900">1.2 Hectares</span>
</li>
</ul>
</section>
</div>

<section className="print-avoid print:break-inside-avoid p-8 border-b border-zinc-100" id="accordion_features_details">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-6">Premium Amenities</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6">

<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Heated Pool
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Private Hammam
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Atlas Mountain Views
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Smart Home System
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Staff Quarters
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Covered Parking
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Central Air/Heating
                    </div>
<div className="flex items-center gap-2 text-sm text-zinc-700">
<iconify-icon className="text-[#b57862]" icon="solar:check-circle-linear"></iconify-icon>
                        Security System
                    </div>
</div>
</section>

<section className="pdf-gallery print-avoid print:break-inside-avoid p-8">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-[#b57862]" height="20" icon="solar:gallery-minimalistic-linear" width="20"></iconify-icon>
                    Property Gallery
                </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img alt="Gallery Image 1" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery Image 2" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Gallery Image 3" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Gallery Image 4" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="Gallery Image 5" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery Image 6" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery Image 7" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery Image 8" className="w-full aspect-[4/3] object-cover rounded-md bg-zinc-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="print-avoid print:break-inside-avoid bg-zinc-900 text-zinc-400 text-xs p-6 text-center">
                © AP Villas. All rights reserved. Document generated automatically.
             </div>
</div>
</main>


    </>
  );
}
