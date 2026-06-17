import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-slate-50 border-b border-slate-200 relative z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-2 sm:space-y-0">
<div className="flex items-center space-x-6">
<a className="flex items-center gap-1.5 hover:text-slate-900 transition-colors" href="tel:401-467-7700">
<iconify-icon className="text-slate-400" icon="solar:phone-linear"></iconify-icon>
                    401-467-7700
                </a>
<a className="flex items-center gap-1.5 hover:text-slate-900 transition-colors hidden sm:flex" href="mailto:info@mastroelectric.com">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
                    info@mastroelectric.com
                </a>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                555 Elmwood Ave, Providence, RI 02907
            </div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex-shrink-0" href="#">MASTRO</a>
<div className="hidden lg:flex flex-wrap justify-end items-center gap-x-6 gap-y-2 pl-8">
<a className="text-xs font-medium text-slate-900 hover:text-slate-500 transition-colors tracking-wide uppercase" href="#">Home</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Residential Lighting</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Commercial Lighting</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Electrical Supplies</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Ventilation</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Paddle Fans</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Electric Heat</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Contact</a>
</div>

<button className="lg:hidden text-slate-500 hover:text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden bg-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-slate-200 opacity-20 blur-[100px]"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Serving Providence since 1946
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto">
                Precision lighting &amp; <br className="hidden sm:block"/> electrical supplies.
            </h1>
<p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto font-normal">
                Your premier source for high-quality residential and commercial electrical products, expert design services, and dedicated support.
            </p>
</div>
</section>

<section className="py-12 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative flex flex-col justify-between p-6 h-64 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:bg-slate-100 transition-colors cursor-pointer">
<div className="text-slate-400 group-hover:text-slate-900 transition-colors">
<iconify-icon height="28" icon="solar:bed-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Bedroom</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Lighting, cooling, and heating equipment in Providence, RI</p>
</div>
</div>

<div className="group relative flex flex-col justify-between p-6 h-64 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:bg-slate-100 transition-colors cursor-pointer">
<div className="text-slate-400 group-hover:text-slate-900 transition-colors">
<iconify-icon height="28" icon="solar:chef-hat-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Kitchen</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Lighting, cooling, and heating equipment in Providence, RI</p>
</div>
</div>

<div className="group relative flex flex-col justify-between p-6 h-64 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:bg-slate-100 transition-colors cursor-pointer">
<div className="text-slate-400 group-hover:text-slate-900 transition-colors">
<iconify-icon height="28" icon="solar:sofa-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Living Room</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Lighting, cooling, and heating equipment in Providence, RI</p>
</div>
</div>

<div className="group relative flex flex-col justify-between p-6 h-64 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:bg-slate-100 transition-colors cursor-pointer">
<div className="text-slate-400 group-hover:text-slate-900 transition-colors">
<iconify-icon height="28" icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900">Living Room 2</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">Lighting, cooling, and heating equipment in Providence, RI</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">

<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
<iconify-icon height="20" icon="solar:lightbulb-minimalistic-linear" width="20"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-4">Lighting Supplies in Providence, Rhode Island</h2>
<p className="text-sm text-slate-600 leading-relaxed">
                        Since 1946, Mastro Electric Supply Co., Inc., of Providence, Rhode Island, has provided lighting services and lighting supplies. We are an electrical supply company offering quality products, and we have a large residential and commercial lighting retail division to help serve your needs.
                    </p>
</div>

<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-4">Full-Service Lighting Company</h2>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        At our company, we know you have a choice for your commercial and home lighting equipment, and we believe that we can meet and exceed all of your expectations. We offer a wide range of electrical products, and we have several locations for your convenience.
                    </p>
<p className="text-sm text-slate-600 leading-relaxed">
                        When you need a lighting fixture, system, or electrical component we don't have in stock, we will do everything we can to locate it for you. We have consultants available to assist you in selecting the right products for your needs, and we also provide lighting design services.
                    </p>
</div>

<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-900">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-slate-900 mb-4">About Us</h2>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                        With more than 65 years of experience, our company has maintained one goal. We strive to ensure your 100% satisfaction every time. Our knowledgeable and friendly customer service and competitive, affordable rates have helped make us the largest independent lighting retailer in Rhode Island.
                    </p>
<p className="text-sm text-slate-600 leading-relaxed">
                        Contact us in Providence, Rhode Island, and see why customers keep coming back for more of our excellent lighting services.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-16 border-b border-slate-200 pb-12">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Home</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Residential Lighting</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Commercial Lighting</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Electrical Supplies</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Ventilation</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Paddle Fans</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Electric Heat</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide uppercase" href="#">Contact</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

<div>
<h4 className="text-sm font-medium tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear" width="18"></iconify-icon> 
                        Main Showroom
                    </h4>
<address className="not-italic text-sm text-slate-500 space-y-1.5">
<p>555 Elmwood Avenue</p>
<p>Providence, RI 02907-1810</p>
<p className="pt-2 text-slate-600">Tel: (401) 467-7700</p>
<p className="text-slate-600">Fax: (401) 467-7709</p>
</address>
</div>

<div>
<h4 className="text-sm font-medium tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear" width="18"></iconify-icon> 
                        Mastro Electric Supply Co
                    </h4>
<address className="not-italic text-sm text-slate-500 space-y-1.5">
<p>37 S Broad Street</p>
<p>Pawcatuck, CT 06379-7909</p>
<p className="pt-2 text-slate-600">Tel: (860) 599-1336</p>
<p className="text-slate-600">Fax: (860) 599-8099</p>
</address>
</div>

<div>
<h4 className="text-sm font-medium tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear" width="18"></iconify-icon> 
                        The Electric Connection
                    </h4>
<address className="not-italic text-sm text-slate-500 space-y-1.5">
<p>823 W Main Road</p>
<p>Middletown, RI 02842-6402</p>
<p className="pt-2 text-slate-600">Tel: (401) 841-5597</p>
<p className="text-slate-600">Fax: (401) 848-0010</p>
</address>
</div>

<div>
<h4 className="text-sm font-medium tracking-tight text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:buildings-linear" width="18"></iconify-icon> 
                        The Electric Connection
                    </h4>
<address className="not-italic text-sm text-slate-500 space-y-1.5">
<p>558 Kingstown Road</p>
<p>Wakefield, RI 02879-3610</p>
<p className="pt-2 text-slate-600">Tel: (401) 788-9590</p>
<p className="text-slate-600">Fax: (401) 782-9062</p>
</address>
</div>
</div>

<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 font-medium" href="mailto:info@mastroelectric.com">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon> 
                    info@mastroelectric.com
                </a>
<p className="text-xs text-slate-400 text-center md:text-right max-w-2xl leading-relaxed">
                    Images provided on this website are for personal, non-commercial use. Republication, retransmission, or reproduction of such images is strictly prohibited.
                </p>
</div>
</div>
</footer>

    </>
  );
}
