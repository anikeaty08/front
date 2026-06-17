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



        lucide.createIcons();
    
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
      

<header className="w-full bg-white py-4 shadow-sm z-50 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-[#00a651]">
<i data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900 leading-none">Al Khozama</h1>
<p className="text-xs text-[#00a651]">International School, Dammam</p>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<div className="flex items-center gap-2 text-base text-gray-600">
<i className="w-4 h-4 text-[#00a651]" data-lucide="phone" strokeWidth="1.5"></i>
<span>013 8475113 / 013 8475112</span>
</div>
<div className="flex items-center gap-2 text-base text-gray-600">
<i className="w-4 h-4 text-[#00a651]" data-lucide="mail" strokeWidth="1.5"></i>
<span>admin@alkhozama.org</span>
</div>
<button className="bg-[#00a651] hover:bg-green-700 text-white px-6 py-2.5 rounded-md text-base font-semibold transition-colors">
                    Enquire Now
                </button>
</div>

<button className="md:hidden text-gray-600">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="relative w-full h-[600px] flex items-center pt-12 pb-32" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-2xl text-white">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-4">
                    Where Little Seeds Bloom into Excellence.
                </h2>
<p className="text-lg md:text-xl font-normal text-gray-100 mb-8 max-w-xl leading-relaxed">
                    Where Learning is Real and Joy is Concrete.<br/>
                    Building Confidence Through Discovery and Play.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-[#00a651] hover:bg-green-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors border border-[#00a651]">
                        Book a School Tour
                    </button>
<button className="bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors border border-white backdrop-blur-sm">
                        Call Us On : 013 8475113
                    </button>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-24">
<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 relative">

<div className="absolute inset-3 border-2 border-dashed border-[#d9f99d] rounded-[1.5rem] pointer-events-none"></div>
<div className="relative z-10 text-center mb-8 mt-4">
<h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Admissions Open for the Academic Year 2025-2026</h3>
<p className="text-base text-gray-600 max-w-2xl mx-auto">
                    Secure a seat in our nurturing "garden of learning."<br/>
                    Fill out the form below, and our admissions team will reach out to schedule a campus tour.
                </p>
</div>
<form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
<div className="space-y-4">
<input className="w-full border border-gray-200 rounded-md px-4 py-3 text-base outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all bg-gray-50/50" placeholder="Full Name*" type="text"/>
<input className="w-full border border-gray-200 rounded-md px-4 py-3 text-base outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all bg-gray-50/50" placeholder="Phone Number*" type="tel"/>
<input className="w-full border border-gray-200 rounded-md px-4 py-3 text-base outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all bg-gray-50/50" placeholder="Email Address*" type="email"/>
</div>
<div className="h-full">
<textarea className="w-full h-full min-h-[140px] border border-gray-200 rounded-md px-4 py-3 text-base outline-none focus:border-[#00a651] focus:ring-1 focus:ring-[#00a651] transition-all resize-none bg-gray-50/50" placeholder="Enquiry Message"></textarea>
</div>
<div className="md:col-span-2 flex justify-center mt-2">
<button className="bg-[#00a651] hover:bg-green-700 text-white px-10 py-3 rounded-md text-base font-semibold transition-colors" type="submit">
                        Submit
                    </button>
</div>
</form>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">

<div className="absolute inset-0 bg-[#fde047] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] scale-105 transform -rotate-6"></div>
<img alt="Boy playing with blocks" className="relative z-10 w-full h-[500px] object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Safe. Nurturing. Innovative.</h2>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
                        At Al Khozama, we believe that the earliest years are the key factors in foreseeing ultimate success in both school and personal life. Our Kindergarten is more than a school—it is a nurturing atmosphere filled with discovery and joy, where children work and play in an environment that is warm, safe, and appropriately challenging.
                    </p>
<p>
                        While we provide a robust foundation for more formal learning in higher grades, we remain committed to the philosophy that children should still get to be children. Our program is designed to expand their love of learning, their general knowledge, and their ability to reach out to the world with confidence and discipline.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24 border-y border-gray-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00a651] mb-2">20+</div>
<div className="text-base font-semibold text-gray-800">Years of Academic Legacy</div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00a651] mb-2">500+</div>
<div className="text-base font-semibold text-gray-800">Happy Vibrant Students</div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00a651] mb-2">20+</div>
<div className="text-base font-semibold text-gray-800">Innovative Programs</div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tight text-[#00a651] mb-2">12:1</div>
<div className="text-base font-semibold text-gray-800">Estimated Student-Staff Ratio</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-[#f8fafc] rounded-3xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
<div className="relative z-10">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Why Choose Al Khozama?</h2>
<p className="text-lg text-gray-600 mb-8 max-w-sm">
                        Designed to be a "Garden for Children," our campus provides a secure and natural environment where every corner is a classroom for discovery.
                    </p>
<button className="bg-[#00a651] hover:bg-green-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors">
                        Book a School Tour
                    </button>
</div>

<div className="absolute bottom-0 right-10 w-64 h-64 opacity-80 pointer-events-none flex items-end justify-end pb-4">
<svg className="w-full h-full text-yellow-500" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M100 200V100C100 80 120 70 140 70H150C160 70 170 60 170 50V30C170 20 160 10 150 10H130C120 10 110 20 110 30V50C110 60 100 70 90 70H70C50 70 30 80 30 100V200H100Z" fill="currentColor" fillOpacity="0.2"></path>
<circle cx="140" cy="40" fill="currentColor" r="10"></circle>
<circle cx="80" cy="120" fill="#f59e0b" r="15"></circle>
<circle cx="120" cy="150" fill="#f59e0b" r="12"></circle>
<circle cx="60" cy="170" fill="#f59e0b" r="10"></circle>
</svg>
</div>
</div>

<div className="flex flex-col justify-center space-y-10">
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
<img alt="Lab" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">XSEED Discovery Lab</h3>
<p className="text-base text-gray-600 leading-relaxed">A dedicated space where "Learning is Real." Equipped with age-appropriate tools for children to conduct their 5-step experiential activities, from soil testing to basic physics.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
<img alt="Books" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">The Phonics Reading Corner</h3>
<p className="text-base text-gray-600 leading-relaxed">A cozy, sun-lit sanctuary designed for our Primary Phonics program. Featuring acoustic padding and comfortable seating to foster a lifelong love for literacy and storytelling.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
<img alt="Play" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">The "Big Muscle" Play Zone</h3>
<p className="text-base text-gray-600 leading-relaxed">Indoor and outdoor zones featuring narrow balance beams, climbing frames, and soft-landing zones designed explicitly to refine gross motor skills and spatial awareness.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Enrichment Programs</h2>
<p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our kindergarten programs nurture curiosity, creativity, and confidence through a blend of structured learning and playful exploration, helping children build strong foundations for learning and life.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">

<div>
<div className="rounded-2xl overflow-hidden mb-6 h-56">
<img alt="Speech Therapy" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Speech &amp; Language Therapy</h3>
<p className="text-base text-gray-600">Focusing on articulation, syntactic strings, and the confidence to speak up.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden mb-6 h-56">
<img alt="ABA Therapy" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">ABA Therapy</h3>
<p className="text-base text-gray-600">Personalized behavioral support to enhance social integration and classroom independence.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden mb-6 h-56">
<img alt="Occupational Therapy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Occupational Therapy (OT)</h3>
<p className="text-base text-gray-600">Refining fine motor skills (writing/grip) and "Big Muscle" coordination for physical milestones.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden mb-6 h-56">
<img alt="Creative Arts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Creative Arts &amp; Expression</h3>
<p className="text-base text-gray-600">Daily sessions in our "Creative Studio" to foster "Holistic Bloom" through sensory art.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden mb-6 h-56">
<img alt="Karate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Karate &amp; Martial Arts</h3>
<p className="text-base text-gray-600">Building "Little Tigers" through discipline, focus, and core balance.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden mb-6 h-56">
<img alt="Music Program" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Music Program</h3>
<p className="text-base text-gray-600">Exploring auditory patterns and rhythm to support literacy and emotional joy.</p>
</div>
</div>
<div className="mt-12">
<button className="bg-[#00a651] hover:bg-green-700 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors">
                Enquire Now
            </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-12 text-center">What Our Parents Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#fcfdf8] border border-[#f4f7e1] p-8 rounded-3xl relative shadow-sm">
<i className="w-10 h-10 text-[#d9f99d] mb-4 fill-current" data-lucide="quote" strokeWidth="2"></i>
<p className="text-lg text-gray-700 mb-8 leading-relaxed min-h-[140px]">
                    As a working parent, the GPS-tracked transport and the warm, nurturing environment give me total peace of mind. It really is a 'Garden for Children' where they are kept safe and valued.
                </p>
<div className="flex items-center gap-4">
<img alt="Sarah M" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-base font-semibold text-gray-900">Sarah M</div>
<div className="text-sm text-gray-500">Pre-KG Parent</div>
</div>
</div>
</div>

<div className="bg-[#fcfdf8] border border-[#f4f7e1] p-8 rounded-3xl relative shadow-sm">
<i className="w-10 h-10 text-[#d9f99d] mb-4 fill-current" data-lucide="quote" strokeWidth="2"></i>
<p className="text-lg text-gray-700 mb-8 leading-relaxed min-h-[140px]">
                    The transition to formal schooling was so easy for my daughter thanks to the XSEED 5-step method. She doesn't just memorize facts; she explains the 'why' behind everything she learns. It's amazing to see a 5-year-old think so logically!
                </p>
<div className="flex items-center gap-4">
<img alt="Mrs. Amara K" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-base font-semibold text-gray-900">Mrs. Amara K</div>
<div className="text-sm text-gray-500">KG2 Parent</div>
</div>
</div>
</div>

<div className="bg-[#fcfdf8] border border-[#f4f7e1] p-8 rounded-3xl relative shadow-sm">
<i className="w-10 h-10 text-[#d9f99d] mb-4 fill-current" data-lucide="quote" strokeWidth="2"></i>
<p className="text-lg text-gray-700 mb-8 leading-relaxed min-h-[140px]">
                    Al Khozama truly lets 'children be children.' My son loves his Karate classes and music sessions. He comes home energized, disciplined, and genuinely excited to go back the next morning.
                </p>
<div className="flex items-center gap-4">
<img alt="Mr. David R" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-base font-semibold text-gray-900">Mr. David R</div>
<div className="text-sm text-gray-500">KG1 Parent</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Our Garden in Full Bloom.</h2>
<p className="text-lg text-gray-600 mb-12">A glimpse into the safe, joyful, and nurturing world we've built for our youngest learners.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
<img alt="Gallery 1" className="w-full aspect-square object-cover rounded-2xl" src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Gallery 2" className="w-full aspect-square object-cover rounded-2xl" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Gallery 3" className="w-full aspect-square object-cover rounded-2xl" src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Gallery 4" className="w-full aspect-square object-cover rounded-2xl" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Gallery 5" className="w-full aspect-square object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="Gallery 6" className="w-full aspect-square object-cover rounded-2xl" src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img alt="Gallery 7" className="w-full aspect-square object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Gallery 8" className="w-full aspect-square object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<button className="bg-[#00a651] hover:bg-green-700 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors">
            Book a Tour
        </button>
</section>

<section className="bg-[#f8fafc] py-24 mb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">Frequently<br/>Asked Questions</h2>
<p className="text-lg text-gray-600 mb-8 max-w-sm">
                    Your questions answered. We're here to ensure you feel confident and informed about every step of your child's journey.
                </p>
<button className="bg-[#00a651] hover:bg-green-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors">
                    Call Us On : 013 8475113
                </button>
</div>
<div className="lg:col-span-7 space-y-4">

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
<div className="flex justify-between items-center cursor-pointer mb-4">
<h3 className="text-lg font-semibold text-gray-900">What is the "XSEED 5-Step Method" used at Al Khozama?</h3>
<div className="bg-[#d9f99d] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-gray-800">
<i className="w-4 h-4" data-lucide="minus" strokeWidth="2"></i>
</div>
</div>
<p className="text-base text-gray-600 leading-relaxed pr-8">
                        It is a scientific teaching methodology that replaces rote memorization with experiential learning. Every lesson follows a cycle of Aim, Action, Analysis, Application, and Assessment, ensuring children truly understand a concept rather than just memorizing it.
                    </p>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-semibold text-gray-900">At what age can my child join Al Khozama?</h3>
<div className="bg-[#d9f99d] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-gray-800">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i>
</div>
</div>
<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-semibold text-gray-900">Is the school transportation safe for such young children?</h3>
<div className="bg-[#d9f99d] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-gray-800">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i>
</div>
</div>
<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-semibold text-gray-900">How do you integrate Speech and ABA therapy into the school day?</h3>
<div className="bg-[#d9f99d] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-gray-800">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i>
</div>
</div>
<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex justify-between items-center cursor-pointer">
<h3 className="text-lg font-semibold text-gray-900">Do you offer physical activities like Karate for all students?</h3>
<div className="bg-[#d9f99d] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-gray-800">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="w-full h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm relative border border-gray-200">

<img alt="Map Location" className="w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-3 rounded-full shadow-lg text-red-500">
<i className="w-8 h-8" data-lucide="map-pin" strokeWidth="2"></i>
</div>
</div>
</div>
<div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">Let's Start the Journey</h2>
<p className="text-lg text-gray-600 mb-10 max-w-md">
                    Visit our nursery or reach out to our admissions team for a personalized tour.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div className="space-y-8">
<div>
<div className="flex items-center gap-3 text-gray-900 font-semibold mb-2">
<i className="w-5 h-5 text-[#00a651]" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-lg">Location</span>
</div>
<p className="text-base text-gray-600">Dammam, Kingdom of Saudi Arabia.</p>
</div>
<div>
<div className="flex items-center gap-3 text-gray-900 font-semibold mb-2">
<i className="w-5 h-5 text-[#00a651]" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-lg">Phone Number</span>
</div>
<p className="text-base text-gray-600">013 8475113, 013 8475112</p>
</div>
<div>
<div className="flex items-center gap-3 text-gray-900 font-semibold mb-2">
<i className="w-5 h-5 text-[#00a651]" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-lg">Email Address</span>
</div>
<p className="text-base text-gray-600">admin@alkhozama.org</p>
</div>
</div>
<div>
<div className="flex items-center gap-3 text-gray-900 font-semibold mb-4">
<i className="w-5 h-5 text-[#00a651]" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-lg">Open Hours</span>
</div>
<div className="space-y-4">
<div>
<div className="text-base font-medium text-gray-800">Monday - Thursday</div>
<div className="text-sm text-gray-500">7:30AM - 03:30PM</div>
</div>
<div>
<div className="text-base font-medium text-gray-800">Friday</div>
<div className="text-sm text-gray-500">7:30AM - 11:30PM</div>
</div>
<div>
<div className="text-base font-medium text-gray-800">Saturday - Sunday</div>
<div className="text-sm text-gray-500">Closed</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
<section className="bg-[#00a651] rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-xl relative">

<div className="absolute top-10 left-10 text-yellow-300 pointer-events-none">
<svg fill="currentColor" height="40" viewbox="0 0 24 24" width="40"><path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z"></path></svg>
</div>
<div className="relative min-h-[400px]">

<div className="absolute inset-0 bg-[#fde047] rounded-br-[40%] rounded-tr-[20%] w-[90%] z-0"></div>
<img alt="Teacher and students" className="absolute inset-0 w-full h-full object-cover z-10 rounded-br-[30%]" src="https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-10 md:p-16 flex flex-col justify-center relative z-20">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-8">Get in Touch</h2>
<form className="space-y-4">
<input className="w-full bg-white text-gray-900 rounded-md px-4 py-3 text-base outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-400" placeholder="Full Name*" type="text"/>
<input className="w-full bg-white text-gray-900 rounded-md px-4 py-3 text-base outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-400" placeholder="Phone Number*" type="tel"/>
<input className="w-full bg-white text-gray-900 rounded-md px-4 py-3 text-base outline-none focus:ring-2 focus:ring-green-300 placeholder-gray-400" placeholder="Email Address*" type="email"/>
<textarea className="w-full bg-white text-gray-900 rounded-md px-4 py-3 text-base outline-none focus:ring-2 focus:ring-green-300 min-h-[120px] resize-none placeholder-gray-400" placeholder="Message"></textarea>
<div className="flex justify-end pt-2">
<button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#00a651] text-white px-8 py-2.5 rounded-md text-base font-semibold transition-colors" type="submit">
                            Submit
                        </button>
</div>
</form>
</div>
</section>

<div className="text-center mt-8 pb-8 text-sm text-gray-500">
            © 2026. All rights reserved. Al Khozama International School.
        </div>
</div>


    </>
  );
}
