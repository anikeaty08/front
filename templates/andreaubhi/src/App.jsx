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



/* <![CDATA[ */
var gform;gform||(document.addEventListener("gform_main_scripts_loaded",function(){gform.scriptsLoaded=!0}),document.addEventListener("gform/theme/scripts_loaded",function(){gform.themeScriptsLoaded=!0}),window.addEventListener("DOMContentLoaded",function(){gform.domLoaded=!0}),gform={domLoaded:!1,scriptsLoaded:!1,themeScriptsLoaded:!1,isFormEditor:()=>"function"==typeof InitializeEditor,callIfLoaded:function(o){return!(!gform.domLoaded||!gform.scriptsLoaded||!gform.themeScriptsLoaded&&!gform.isFormEditor()||(gform.isFormEditor()&&console.warn("The use of gform.initializeOnLoaded() is deprecated in the form editor context and will be removed in Gravity Forms 3.1."),o(),0))},initializeOnLoaded:function(o){gform.callIfLoaded(o)||(document.addEventListener("gform_main_scripts_loaded",()=>{gform.scriptsLoaded=!0,gform.callIfLoaded(o)}),document.addEventListener("gform/theme/scripts_loaded",()=>{gform.themeScriptsLoaded=!0,gform.callIfLoaded(o)}),window.addEventListener("DOMContentLoaded",()=>{gform.domLoaded=!0,gform.callIfLoaded(o)}))},hooks:{action:{},filter:{}},addAction:function(o,r,e,t){gform.addHook("action",o,r,e,t)},addFilter:function(o,r,e,t){gform.addHook("filter",o,r,e,t)},doAction:function(o){gform.doHook("action",o,arguments)},applyFilters:function(o){return gform.doHook("filter",o,arguments)},removeAction:function(o,r){gform.removeHook("action",o,r)},removeFilter:function(o,r,e){gform.removeHook("filter",o,r,e)},addHook:function(o,r,e,t,n){null==gform.hooks[o][r]&&(gform.hooks[o][r]=[]);var d=gform.hooks[o][r];null==n&&(n=r+"_"+d.length),gform.hooks[o][r].push({tag:n,callable:e,priority:t=null==t?10:t})},doHook:function(r,o,e){var t;if(e=Array.prototype.slice.call(e,1),null!=gform.hooks[r][o]&&((o=gform.hooks[r][o]).sort(function(o,r){return o.priority-r.priority}),o.forEach(function(o){"function"!=typeof(t=o.callable)&&(t=window[t]),"action"==r?t.apply(null,e):e[0]=t.apply(null,e)})),"filter"==r)return e[0]},removeHook:function(o,r,t,n){var e;null!=gform.hooks[o][r]&&(e=(e=gform.hooks[o][r]).filter(function(o,r,e){return!!(null!=n&&n!=o.tag||null!=t&&t!=o.priority)}),gform.hooks[o][r]=e)}});
/* ]]> */



var ctPublicFunctions = {"_ajax_nonce":"b802aac920","_rest_nonce":"44f3895120","_ajax_url":"\/wp-admin\/admin-ajax.php","_rest_url":"https:\/\/www.andreaubhi.com\/wp-json\/","data__cookies_type":"none","data__ajax_type":"admin_ajax","data__bot_detector_enabled":"1","data__frontend_data_log_enabled":1,"cookiePrefix":"","wprocket_detected":false,"host_url":"www.andreaubhi.com","text__ee_click_to_select":"Click to select the whole data","text__ee_original_email":"The complete one is","text__ee_got_it":"Got it","text__ee_blocked":"Blocked","text__ee_cannot_connect":"Cannot connect","text__ee_cannot_decode":"Can not decode email. Unknown reason","text__ee_email_decoder":"CleanTalk email decoder","text__ee_wait_for_decoding":"The magic is on the way!","text__ee_decoding_process":"Please wait a few seconds while we decode the contact data."}



var ctPublic = {"_ajax_nonce":"b802aac920","settings__forms__check_internal":"0","settings__forms__check_external":"0","settings__forms__force_protection":0,"settings__forms__search_test":"1","settings__data__bot_detector_enabled":"1","settings__sfw__anti_crawler":0,"blog_home":"https:\/\/www.andreaubhi.com\/","pixel__setting":"3","pixel__enabled":false,"pixel__url":null,"data__email_check_before_post":"1","data__email_check_exist_post":0,"data__cookies_type":"none","data__key_is_ok":true,"data__visible_fields_required":true,"wl_brandname":"Anti-Spam by CleanTalk","wl_brandname_short":"CleanTalk","ct_checkjs_key":1095944444,"emailEncoderPassKey":"6c47221195a7f8269b3e6165817f4243","bot_detector_forms_excluded":"W10=","advancedCacheExists":false,"varnishCacheExists":false,"wc_ajax_add_to_cart":false,"theRealPerson":{"phrases":{"trpHeading":"The Real Person Badge!","trpContent1":"The commenter acts as a real person and verified as not a bot.","trpContent2":"Passed all tests against spam bots. Anti-Spam by CleanTalk.","trpContentLearnMore":"Learn more"},"trpContentLink":"https:\/\/cleantalk.org\/the-real-person?utm_id=&amp;utm_term=&amp;utm_source=admin_side&amp;utm_medium=trp_badge&amp;utm_content=trp_badge_link_click&amp;utm_campaign=apbct_links","imgPersonUrl":"https:\/\/www.andreaubhi.com\/wp-content\/plugins\/cleantalk-spam-protect\/css\/images\/real_user.svg","imgShieldUrl":"https:\/\/www.andreaubhi.com\/wp-content\/plugins\/cleantalk-spam-protect\/css\/images\/shield.svg"}}



var _hsq = _hsq || [];
_hsq.push(["setContentType", "standard-page"]);



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
gold: '#C4B684',
darkGold: '#A39668',
dark: '#0f172a',
light: '#f8fafc',
}
},
boxShadow: {
'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
'float': '0 10px 40px -10px rgba(0,0,0,0.08)'
}
}
}
}



    /* <![CDATA[ */
    var leadin_wordpress = {"userRole":"visitor","pageType":"page","leadinPluginVersion":"11.3.21"};
    //# sourceURL=leadin-script-loader-js-js-extra
    /* ]]> */
    


    /* <![CDATA[ */
    wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
    //# sourceURL=wp-i18n-js-after
    /* ]]> */
    
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
      

<div className="bg-brand-dark text-white text-xs py-2 text-center tracking-wide border-b border-slate-800">
<span className="opacity-80">Welcome to Andrea Ubhi Cosmetic Dentistry • Award Winning Care in York</span>
</div>

<header className="sticky top-0 z-50 glass-panel border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a href="https://www.andreaubhi.com">
<img alt="Andrea Ubhi Logo" className="h-10 w-auto mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity" src="https://www.andreaubhi.com/wp-content/uploads/2024/09/au-logo.jpg"/>
</a>
</div>

<nav className="hidden lg:flex space-x-8">
<a className="text-sm font-medium text-slate-900 border-b-2 border-brand-gold pb-1" href="https://www.andreaubhi.com/meet-the-team/">About Us</a>
<div className="group relative">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1" href="https://www.andreaubhi.com/treatments/">
                            Treatments <iconify-icon className="text-xs opacity-50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>

<div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto p-2">
<a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md" href="#">Cosmetic Dentistry</a>
<a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md" href="#">Implants</a>
<a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-md" href="#">Invisalign</a>
</div>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://www.andreaubhi.com/smile-stories/">Smile Stories</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://www.andreaubhi.com/prices/">Prices</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="https://www.andreaubhi.com/contact/">Contact</a>
</nav>

<div className="hidden lg:flex items-center space-x-4">
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-darkGold transition-colors" href="tel:01904639667">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>01904 639667</span>
</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-sm transition-all" href="#contact-modal" onclick="document.getElementById('form-modal').classList.remove('hidden'); document.getElementById('form-modal').classList.add('flex');">
                        Book Consultation
                    </a>
</div>

<div className="lg:hidden">
<button className="text-slate-500 hover:text-slate-900" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow" id="content">

<section className="relative bg-white border-b border-slate-200">
<div className="absolute inset-0 z-0">
<img alt="Reception" className="w-full h-full object-cover opacity-20 grayscale-[20%]" src="https://www.andreaubhi.com/wp-content/uploads/2024/08/shutterstock_752886964-scaled-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-darkGold text-xs font-semibold tracking-wide uppercase mb-4 border border-brand-gold/20">
                    World Class Dentistry in York
                </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6">
                    Meet The Team
                </h1>
<p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed font-light">
                    Our Grade II listed building houses five state-of-the-art surgeries and a national award-winning team dedicated to conservative, beautiful, and quality dentistry.
                </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">A Warm Welcome from Dr. Andrea Ubhi</h2>
<div className="space-y-4 text-slate-600 font-light leading-relaxed">
<p>Dr Andrea Ubhi has been a pioneer in Cosmetic Dentistry since the late 90s. Awarded <strong className="text-slate-800 font-medium">Cosmetic Pioneer of the Year 2024</strong> and named one of the 10 Significant Leaders in Dentistry worldwide.</p>
<p>Andrea personally understands how cosmetic dentistry can be life-changing.</p>
<blockquote className="border-l-2 border-brand-gold pl-4 italic text-slate-800 my-6">
                                "Our aim is to provide conservative, beautiful and quality dentistry."
                            </blockquote>
<p>Our practice has won numerous awards including <strong className="text-slate-800 font-medium">Best Cosmetic Dental Clinic UK 2024</strong> and <strong className="text-slate-800 font-medium">Dental Practice of the Year York 2025</strong>.</p>
</div>

<div className="mt-10 pt-8 border-t border-slate-100">
<p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Award Winning Excellence</p>
<img alt="Awards" className="w-full max-w-md opacity-90 mix-blend-multiply" src="https://www.andreaubhi.com/wp-content/uploads/2024/10/AU-Awards_RGB_double-horizontal-Sept-2024-RGB-1-1024x285.jpg"/>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
<img alt="Dr Andrea Ubhi" className="relative rounded-xl shadow-float w-full object-cover aspect-[4/3] filter brightness-[1.02]" src="https://www.andreaubhi.com/wp-content/uploads/2022/10/AndreaUbhi-0257-768x530.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Our Clinicians</h2>
<p className="mt-2 text-slate-500 font-light">Meet the experts behind your smile.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-float transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr Andrea Ubhi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.andreaubhi.com/wp-content/uploads/2022/10/Untitled-design-712x475.png"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Dr Andrea Ubhi</h3>
<p className="text-sm text-brand-darkGold mt-1">Director &amp; Cosmetic Dentist</p>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-float transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr Adam Glassford" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.andreaubhi.com/wp-content/uploads/2022/10/adam-712x475.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Dr Adam Glassford</h3>
<p className="text-sm text-brand-darkGold mt-1">Cosmetic, Restorative &amp; Implant Surgeon</p>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-float transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr Elena Grecu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.andreaubhi.com/wp-content/uploads/2024/08/Elena-712x475.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Dr Elena Grecu (Bonciu)</h3>
<p className="text-sm text-brand-darkGold mt-1">Special Interest in Endodontics</p>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-float transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr Stephen Gibson" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.andreaubhi.com/wp-content/uploads/2022/10/steve-712x475.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Dr Stephen Gibson</h3>
<p className="text-sm text-brand-darkGold mt-1">Cosmetic &amp; Restorative Dentist</p>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-float transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr Tim Steel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.andreaubhi.com/wp-content/uploads/2022/10/tim-712x475.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Dr Tim Steel</h3>
<p className="text-sm text-brand-darkGold mt-1">Restorative Dentist</p>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden shadow-subtle hover:shadow-float transition-all duration-300 border border-slate-100">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr Tarun Mittal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.andreaubhi.com/wp-content/uploads/2022/10/tar-712x475.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900">Dr Tarun Mittal</h3>
<p className="text-sm text-brand-darkGold mt-1">Consultant &amp; Specialist Orthodontist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-50 rounded-2xl p-2 lg:p-12 items-center">

<div className="p-6">
<h2 className="text-2xl font-medium text-slate-900 mb-6">Visit our Practice</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm text-brand-darkGold">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Address</h4>
<p className="text-sm text-slate-600 mt-1">22 Goodramgate, York, YO1 7LG</p>
<p className="text-xs text-slate-500 mt-1">Next to ‘The Golden Slipper’ pub.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm text-brand-darkGold">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Opening Hours</h4>
<p className="text-sm text-slate-600 mt-1">Mon - Fri: 8.30 am to 5.30 pm</p>
<p className="text-xs text-slate-500 mt-1">Closed Weekends</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm text-brand-darkGold">
<iconify-icon icon="solar:train-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Arrival</h4>
<p className="text-sm text-slate-600 mt-1">10-15 min walk from York Station.</p>
<p className="text-xs text-slate-500 mt-1">Nearest parking: Fossbank (YO31 7PL)</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="text-sm font-medium text-brand-darkGold hover:text-slate-900 flex items-center gap-1 transition-colors" href="https://maps.google.com" target="_blank">
                                Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="h-[400px] w-full rounded-xl overflow-hidden shadow-subtle border border-slate-200">
<iframe allowfullscreen="allowfullscreen" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.2870816442946!2d-1.0814154838273216!3d53.96216958011281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487931a6167baa23%3A0xdd00bfea8a74e20b!2sAndrea%20Ubhi%20Dentistry!5e0!3m2!1sen!2suk!4v1667400431997!5m2!1sen!2suk" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<img alt="Logo" className="h-8 w-auto mb-6 opacity-80 mix-blend-screen filter grayscale brightness-200" src="https://www.andreaubhi.com/wp-content/uploads/2024/09/au-logo.jpg"/>
<p className="text-sm leading-relaxed">Pioneering cosmetic dentistry in the heart of York. Transforming smiles and confidence since 1999.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li>22 Goodramgate, York, YO1 7LG</li>
<li><a className="hover:text-white transition-colors" href="tel:01904639667">01904 639667</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:info@andreaubhi.com">info@andreaubhi.com</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Treatments</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Composite Bonding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-white transition-colors" href="#">Invisalign</a></li>
<li><a className="hover:text-white transition-colors" href="#">Teeth Whitening</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
<li>© 2026 Andrea Ubhi Ltd</li>
<li>Reg No. 9140071</li>
</ul>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4 animate-slide-in">

<div className="bg-white rounded-2xl rounded-br-none shadow-float p-4 max-w-xs border border-slate-100 relative mb-2">
<div className="text-sm text-slate-800">
<p className="font-medium">Hi 👋</p>
<p className="mt-1 text-slate-600">How can we help you today? Appointments, treatments, or questions?</p>
</div>

<span className="absolute -top-2 -right-2 bg-slate-100 text-[10px] px-2 py-0.5 rounded-full text-slate-500 border border-slate-200 uppercase tracking-widest">Demo</span>
</div>

<button className="bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
<iconify-icon height="28" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</button>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="hidden fixed inset-0 z-50 overflow-y-auto" id="form-modal" role="dialog">
<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

<div aria-hidden="true" className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="document.getElementById('form-modal').classList.remove('flex'); document.getElementById('form-modal').classList.add('hidden');"></div>
<span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>

<div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="document.getElementById('form-modal').classList.remove('flex'); document.getElementById('form-modal').classList.add('hidden');">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="sm:flex sm:items-start">
<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
<h3 className="text-xl leading-6 font-medium text-slate-900" id="modal-title">Get in Touch</h3>
<div className="mt-2">
<p className="text-sm text-slate-500 mb-4">Please fill out the form below and our team will get back to you shortly.</p>


<div className="gf_browser_chrome gform_wrapper" id="gform_wrapper_4" style={{display: 'block !important'}}>
<form action="/meet-the-team/#gf_4" className="space-y-4" enctype="multipart/form-data" id="gform_4" method="post" novalidate="" target="gform_ajax_frame_4">
<div className="gform_body">
<ul className="gform_fields top_label form_sublabel_below description_below validation_below" id="gform_fields_4">

<li className="gfield mb-4">
<label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
<input className="w-full border-slate-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm py-2 px-3 border" id="input_4_1" name="input_1" placeholder="Your Name" type="text"/>
</li>
<li className="gfield mb-4">
<label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
<input className="w-full border-slate-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm py-2 px-3 border" id="input_4_3" name="input_3" placeholder="07123 456789" type="tel"/>
</li>
<li className="gfield mb-4">
<label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
<input className="w-full border-slate-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm py-2 px-3 border" id="input_4_4" name="input_4" placeholder="you@example.com" type="email"/>
</li>
<li className="gfield mb-4">
<label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full border-slate-300 rounded-md shadow-sm focus:ring-brand-gold focus:border-brand-gold sm:text-sm py-2 px-3 border" id="input_4_5" name="input_5" placeholder="How can we help?" rows="4"></textarea>
</li>

<li className="gfield hidden"><input name="input_6" type="hidden" value="General"/></li>
</ul>
</div>
<div className="gform_footer top_label mt-6">
<input className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-900 text-base font-medium text-white hover:bg-slate-800 focus:outline-none sm:text-sm cursor-pointer" id="gform_submit_button_4" type="submit" value="Start Your Journey"/>

<input name="gform_ajax" type="hidden" value="form_id=4&amp;title=&amp;description=1&amp;tabindex=0&amp;theme=orbital&amp;styles=[]&amp;hash=06a8cff21454702dd1fad2777bad1488"/>
<input name="is_submit_4" type="hidden" value="1"/>
<input name="gform_submit" type="hidden" value="4"/>
<input name="gform_unique_id" type="hidden" value=""/>
<input name="state_4" type="hidden" value="WyJbXSIsIjYwYjk2OTNmYjU0ZTIwMTMyMzViNzMyMDhkNGY0NTg0Il0="/>
<input id="gform_target_page_number_4" name="gform_target_page_number_4" type="hidden" value="0"/>
<input id="gform_source_page_number_4" name="gform_source_page_number_4" type="hidden" value="1"/>
<input name="gform_field_values" type="hidden" value=""/>
</div>
</form>
</div>
<iframe id="gform_ajax_frame_4" name="gform_ajax_frame_4" src="about:blank" style={{display: 'none', width: '0px', height: '0px'}}></iframe>
</div>
</div>
</div>
</div>
</div>
</div>
</div>











    </>
  );
}
