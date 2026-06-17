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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="text-[#0D5A38] text-xl font-semibold tracking-tighter" href="#">ITTELA</a>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-500 hover:text-[#0D5A38] transition-colors" href="#mission">আমাদের লক্ষ্য</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#0D5A38] transition-colors" href="#programs">প্রোগ্রামসমূহ</a>
<a className="text-sm font-medium text-gray-500 hover:text-[#0D5A38] transition-colors" href="#impact">স্বচ্ছতা ও প্রভাব</a>
</nav>

<div className="flex items-center gap-4">
<a className="bg-[#A58228] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#8e6f21] transition-all shadow-sm" href="#donate">অনুদান দিন</a>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-32 overflow-hidden flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D5A38]/5 border border-[#0D5A38]/10 text-[#0D5A38] text-xs font-medium mb-8">
<iconify-icon height="16" icon="solar:heart-angle-linear" width="16"></iconify-icon>
<span>শিক্ষা ও সেবায় নিবেদিত একটি অলাভজনক প্রতিষ্ঠান</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 max-w-4xl leading-tight">
                শিক্ষার মাধ্যমে <span className="text-[#0D5A38]">ক্ষমতায়ন</span>,<br/> সেবার মাধ্যমে <span className="text-[#A58228]">সমাজকল্যাণ</span>
</h1>
<p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                ইত্তেলা একাডেমি সুবিধাবঞ্চিত শিশুদের জন্য বিশ্বমানের শিক্ষা নিশ্চিত করতে এবং দারিদ্র্য দূরীকরণে কার্যকরী দাতব্য প্রকল্প পরিচালনার মাধ্যমে একটি বৈষম্যহীন সমাজ গড়তে প্রতিশ্রুতিবদ্ধ।
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-[#0D5A38] text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-[#094229] transition-all shadow-md shadow-green-900/10 flex items-center justify-center gap-2" href="#donate">
                    আমাদের সমর্থন করুন <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="bg-white text-gray-700 border border-gray-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2" href="#programs">
                    কার্যক্রম জানুন
                </a>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-t border-gray-100" id="programs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">আধুনিক শিক্ষা ও দক্ষতা উন্নয়ন</h2>
<p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        প্রচলিত শিক্ষার পাশাপাশি আমরা শিক্ষার্থীদের এমন সব বিষয়ে দক্ষ করে তুলছি, যা তাদের ভবিষ্যতের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করবে।
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0D5A38]/20 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#0D5A38]/5 flex items-center justify-center text-[#0D5A38] mb-6 group-hover:bg-[#0D5A38] group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">প্রযুক্তি ও ডিজিটাল স্কিলস</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            বেসিক কম্পিউটিং থেকে শুরু করে প্রোগ্রামিং ও আধুনিক প্রযুক্তির ব্যবহারিক জ্ঞান, যা একুশ শতকের জন্য অপরিহার্য।
                        </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#A58228]/20 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#A58228]/10 flex items-center justify-center text-[#A58228] mb-6 group-hover:bg-[#A58228] group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:global-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">ভাষা ও যোগাযোগ</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            ইংরেজি ও অন্যান্য প্রয়োজনীয় ভাষায় সাবলীল যোগাযোগ সক্ষমতা বৃদ্ধি, যাতে তারা বিশ্বমঞ্চে নিজেদের তুলে ধরতে পারে।
                        </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0D5A38]/20 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#0D5A38]/5 flex items-center justify-center text-[#0D5A38] mb-6 group-hover:bg-[#0D5A38] group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">নৈতিক শিক্ষা ও নেতৃত্ব</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            পুথিগত বিদ্যার পাশাপাশি মানবিক মূল্যবোধ, নৈতিকতা এবং নেতৃত্বের গুণাবলী বিকাশে বিশেষ জোর প্রদান।
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="impact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-[#0D5A38] rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">

<div className="p-10 lg:p-16 lg:w-1/2 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-6 w-fit border border-white/10">
<iconify-icon height="16" icon="solar:chart-2-linear" width="16"></iconify-icon>
<span>আমাদের প্রভাব</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">
                            স্বচ্ছতা ও আস্থার <br/>একটি অনন্য দৃষ্টান্ত
                        </h2>
<p className="text-sm text-white/80 mb-12 leading-relaxed max-w-md">
                            আপনাদের প্রতিটি অনুদান সরাসরি সুবিধাবঞ্চিত মানুষের জীবনমান উন্নয়নে ব্যয় হয়। আমরা শতভাগ স্বচ্ছতার সাথে আমাদের আর্থিক কার্যক্রম পরিচালনা করি।
                        </p>
<div className="grid grid-cols-2 gap-y-10 gap-x-6">
<div>
<div className="text-4xl font-semibold tracking-tight text-[#A58228] mb-1">৫০০+</div>
<div className="text-xs text-white/70 font-medium tracking-wide">শিক্ষার্থী পড়াশোনা করছে</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-[#A58228] mb-1">১২+</div>
<div className="text-xs text-white/70 font-medium tracking-wide">সফল দাতব্য প্রকল্প</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-[#A58228] mb-1">১০০%</div>
<div className="text-xs text-white/70 font-medium tracking-wide">অনুদান স্বচ্ছতা নীতি</div>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-[#094229] p-10 lg:p-16 flex items-center justify-center relative">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#A58228 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full">
<iconify-icon className="text-[#A58228]/30 text-5xl absolute -top-4 -left-2" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-gray-700 text-sm leading-relaxed relative z-10">
                                "ইত্তেলা একাডেমির সহায়তায় আমি আজ শুধু পড়াশোনাই করছি না, বরং নিজের পায়ে দাঁড়ানোর স্বপ্ন দেখছি। এখানকার শিক্ষকরা আমাদের পরিবারের মতো।"
                            </p>
<div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#0D5A38]/10 flex items-center justify-center text-[#0D5A38] font-semibold text-sm">
                                    আ
                                </div>
<div>
<div className="text-sm font-semibold text-gray-900">আরিফ হোসেন</div>
<div className="text-xs text-gray-500">১০ম শ্রেণির শিক্ষার্থী</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="donate">
<div className="max-w-3xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#A58228]/10 text-[#A58228] mb-8 ring-8 ring-[#A58228]/5">
<iconify-icon height="32" icon="solar:hand-money-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                    একটি ছোট অবদান, একটি বড় পরিবর্তন
                </h2>
<p className="text-base text-gray-500 mb-10 leading-relaxed">
                    আপনার যাকাত, সাদাকাহ বা সাধারণ অনুদান একটি শিশুর ভবিষ্যৎ গড়তে এবং একটি দারিদ্র্যমুক্ত সমাজ বিনির্মাণে গুরুত্বপূর্ণ ভূমিকা রাখতে পারে। আজই যুক্ত হোন আমাদের এই যাত্রায়।
                </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#A58228] text-white text-lg font-medium px-10 py-4 rounded-full hover:bg-[#8e6f21] hover:shadow-lg hover:shadow-[#A58228]/20 transition-all hover:-translate-y-0.5" href="#">
<iconify-icon height="24" icon="solar:wallet-linear" width="24"></iconify-icon> 
                    এখনই অনুদান দিন
                </a>
<div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
                    নিরাপদ পেমেন্ট গেটওয়ে দ্বারা ১০০% সুরক্ষিত
                </div>
</div>
</section>
</main>

<footer className="py-12 border-t border-gray-100 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[#0D5A38] text-xl font-semibold tracking-tighter">ITTELA</div>
<p className="text-xs text-gray-500">
                © ২০২৪ ইত্তেলা একাডেমি। সর্বস্বত্ব সংরক্ষিত।
            </p>
<div className="flex gap-5 text-gray-400">
<a aria-label="Email" className="hover:text-[#0D5A38] transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a aria-label="Phone" className="hover:text-[#0D5A38] transition-colors" href="#">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
</a>
<a aria-label="Location" className="hover:text-[#0D5A38] transition-colors" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
