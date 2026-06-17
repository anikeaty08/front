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
      
{
"@context": "https://schema.org",
"@type": "Church",
"name": "Grace Church",
"url": "https://www.gracechurchaustin.example.com",
"logo": "https://www.gracechurchaustin.example.com/logo.png",
"image": "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1200",
"description": "A welcoming Christian church in Austin focused on biblical teaching, community, and spiritual growth.",
"address": {
"@type": "PostalAddress",
"streetAddress": "123 Faith Avenue",
"addressLocality": "Austin",
"addressRegion": "TX",
"postalCode": "78701",
"addressCountry": "US"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 30.2672,
"longitude": -97.7431
},
"telephone": "+1-555-0198",
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Sunday",
"opens": "08:30",
"closes": "13:00"
}
]
}



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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a aria-label="Grace Church – Faith Community" className="flex items-center gap-2 text-slate-900" href="#">
<iconify-icon className="text-xl text-amber-500" icon="solar:sun-2-linear"></iconify-icon>
<span className="tracking-tighter font-semibold text-lg uppercase">GRACE</span>
</a>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#ministries">Ministries</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#sermons">Watch Sermons Online</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#events">Events</a>
<a className="text-sm font-medium hover:text-blue-600 transition-colors" href="#give">Give</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all" href="#visit">
                        Plan Your Visit
                    </a>
<button aria-label="Open menu" className="md:hidden p-2 text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden bg-white pt-20 pb-24 md:pt-32 md:pb-40">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center opacity-5"></div>
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Gathering this Sunday in Austin
                </span>
<h1 className="text-4xl md:text-6xl tracking-tight font-semibold text-slate-900 mb-6">
                    Welcome to Grace Church <br className="hidden md:block"/>
<span className="text-blue-600">A Christian Church in Austin</span>
</h1>
<p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10">
                    Join us for uplifting worship, authentic community, and spiritual growth every week. No matter where you are in your faith journey, you belong here.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all" href="#visit">
                        Plan Your Visit
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-all" href="#sermons">
<iconify-icon className="mr-2 text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Online
                    </a>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-6">About Grace Church</h2>
<p className="text-base md:text-lg leading-relaxed text-slate-600">
                    Grace Church is a vibrant Christian faith community located in the heart of Austin. We are dedicated to creating a warm, welcoming environment where families, youth, and individuals from all walks of life can encounter God. Our mission is to love God, love people, and make a lasting impact in our city and beyond. Whether you are exploring faith for the first time or looking for a new church home, we invite you to be part of what God is doing at Grace Church in Austin.
                </p>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100" id="visit">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-4">Service Times &amp; Location</h2>
<p className="text-sm text-slate-500 mb-8">Join us for our Sunday service in Austin. Expect a warm welcome, contemporary worship, and Bible-based teaching.</p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="p-2 bg-white rounded-lg border border-slate-200 text-blue-600 shadow-sm">
<iconify-icon className="text-xl block" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Sunday Gatherings</h3>
<p className="text-sm text-slate-500 mt-1">9:00 AM &amp; 11:00 AM</p>
<p className="text-xs text-slate-400 mt-1">Grace Kids programming available at both services.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-white rounded-lg border border-slate-200 text-blue-600 shadow-sm">
<iconify-icon className="text-xl block" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Midweek Youth &amp; Groups</h3>
<p className="text-sm text-slate-500 mt-1">Wednesdays at 7:00 PM</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-white rounded-lg border border-slate-200 text-amber-500 shadow-sm">
<iconify-icon className="text-xl block" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">What to Expect</h3>
<p className="text-sm text-slate-500 mt-1">Come as you are. Services last about 75 minutes. Ample free parking is available on-site with dedicated visitor spots near the entrance.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm">
<div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden relative flex items-center justify-center">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="relative text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-slate-100 shadow-sm mx-4">
<iconify-icon className="text-2xl text-blue-600 mb-2" icon="solar:map-point-linear"></iconify-icon>
<h4 className="text-sm font-medium text-slate-900">Grace Church Main Campus</h4>
<p className="text-xs text-slate-500 mt-1">123 Faith Avenue<br/>Austin, TX 78701</p>
<a className="mt-3 inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700" href="#">
                                    Get Directions <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Our Mission &amp; Beliefs</h2>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">Rooted in Bible-based teaching, we exist to bring hope to our city and build a strong Christian faith community.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-amber-50/50 border border-amber-100/50">
<iconify-icon className="text-2xl text-amber-600 mb-4 block" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-2">Our Mission</h3>
<p className="text-sm text-slate-600">To lead people into a growing relationship with Jesus Christ by creating environments where people are encouraged and equipped to pursue intimacy with God.</p>
</div>
<div className="p-8 rounded-2xl bg-blue-50/50 border border-blue-100/50">
<iconify-icon className="text-2xl text-blue-600 mb-4 block" icon="solar:heart-linear"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-2">Core Values</h3>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Authentic Community</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Biblical Truth</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Compassionate Service</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Next Generation Focus</li>
</ul>
</div>
<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-2xl text-slate-700 mb-4 block" icon="solar:book-bookmark-linear"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-2">What We Believe</h3>
<p className="text-sm text-slate-600">We hold to historic Christian orthodoxy. We believe the Bible is the inspired Word of God, the ultimate authority for our faith and practice. <a className="text-blue-600 hover:underline" href="#">Read full statement</a></p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden" id="sermons">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4">Watch Sermons Online</h2>
<p className="text-base text-slate-400 max-w-xl">Catch up on recent messages, or tune in live on Sundays. Explore Bible-based teaching designed to encourage and challenge you.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300" href="#">
                        View Sermon Archive <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 group cursor-pointer">
<div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
<img alt="Sunday Sermon: Finding Peace in Chaos | Grace Church" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-white ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
<span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded mb-3">Latest Message</span>
<h3 className="text-2xl tracking-tight font-semibold">Sunday Sermon: Finding Peace in Chaos</h3>
<p className="text-sm text-slate-300 mt-2 line-clamp-2">In this week's message, Pastor David explores Philippians 4 and how we can anchor our minds in God's truth during uncertain times.</p>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">Previous Messages</h4>
<a className="flex gap-4 group items-center p-3 -mx-3 rounded-xl hover:bg-slate-800/50 transition-colors" href="#">
<div className="relative w-24 aspect-video bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
<img alt="The Power of Community" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<iconify-icon className="absolute inset-0 m-auto text-white text-xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">The Power of Community</h5>
<p className="text-xs text-slate-500 mt-1">Oct 15, 2023</p>
</div>
</a>
<a className="flex gap-4 group items-center p-3 -mx-3 rounded-xl hover:bg-slate-800/50 transition-colors" href="#">
<div className="relative w-24 aspect-video bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Faith That Moves Mountains" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<iconify-icon className="absolute inset-0 m-auto text-white text-xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">Faith That Moves Mountains</h5>
<p className="text-xs text-slate-500 mt-1">Oct 08, 2023</p>
</div>
</a>
<a className="flex gap-4 group items-center p-3 -mx-3 rounded-xl hover:bg-slate-800/50 transition-colors" href="#">
<div className="relative w-24 aspect-video bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Walking in Grace" className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<iconify-icon className="absolute inset-0 m-auto text-white text-xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">Walking in Grace</h5>
<p className="text-xs text-slate-500 mt-1">Oct 01, 2023</p>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="ministries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Our Ministries</h2>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto">Discover a place for everyone. From kids church near you to vibrant youth programs in Austin, find your community.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Kids Ministry</h3>
<p className="text-sm text-slate-500 mb-4">A safe, fun environment where children learn about Jesus at their level.</p>
<span className="text-xs font-medium text-blue-600 inline-flex items-center">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:flame-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Youth Programs</h3>
<p className="text-sm text-slate-500 mb-4">Empowering middle and high schoolers to navigate life with faith and purpose.</p>
<span className="text-xs font-medium text-amber-600 inline-flex items-center">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:music-note-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Worship Ministry</h3>
<p className="text-sm text-slate-500 mb-4">Join our team of musicians and vocalists leading our congregation in praise.</p>
<span className="text-xs font-medium text-slate-600 inline-flex items-center">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="group block p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Small Groups</h3>
<p className="text-sm text-slate-500 mb-4">Connect with others, study the Bible, and grow together in community groups.</p>
<span className="text-xs font-medium text-emerald-600 inline-flex items-center">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100" id="events">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-2">Upcoming Events in Austin</h2>
<p className="text-sm text-slate-500">Connect, serve, and grow with our local church family.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm" href="#">
                        View Calendar
                    </a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-medium text-blue-600 mb-3 bg-blue-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Nov 12, 2023
                        </div>
<h3 className="text-base font-medium text-slate-900 mb-2">Newcomer's Lunch</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">New to Grace Church? Join the pastors for a free lunch to learn more about our vision and how to get involved.</p>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 flex items-center gap-1" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-medium text-blue-600 mb-3 bg-blue-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Nov 18, 2023
                        </div>
<h3 className="text-base font-medium text-slate-900 mb-2">Community Outreach Day</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Partner with local nonprofits as we spend a Saturday serving our neighbors in downtown Austin.</p>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 flex items-center gap-1" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 text-xs font-medium text-blue-600 mb-3 bg-blue-50 w-fit px-2 py-1 rounded">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Dec 01, 2023
                        </div>
<h3 className="text-base font-medium text-slate-900 mb-2">Women's Christmas Retreat</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">A weekend of worship, teaching, and connection as we prepare our hearts for the Advent season.</p>
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 flex items-center gap-1" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Meet Our Pastors</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto mb-16">Dedicated leaders committed to serving our community and guiding us in our faith journey.</p>
<div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
<div>
<img alt="Pastor David Smith, Lead Pastor" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-sm border border-slate-100" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<h3 className="text-lg font-medium text-slate-900">David Smith</h3>
<p className="text-xs text-blue-600 font-medium mb-3">Lead Pastor</p>
<p className="text-sm text-slate-500">Passionate about teaching the Bible in a way that is practical and transforms everyday life.</p>
</div>
<div>
<img alt="Pastor Sarah Jenkins, Community Pastor" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-sm border border-slate-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<h3 className="text-lg font-medium text-slate-900">Sarah Jenkins</h3>
<p className="text-xs text-blue-600 font-medium mb-3">Community Pastor</p>
<p className="text-sm text-slate-500">Dedicated to fostering deep, authentic relationships through small groups and outreach.</p>
</div>
<div>
<img alt="Pastor Michael Chen, Worship Pastor" className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-sm border border-slate-100" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<h3 className="text-lg font-medium text-slate-900">Michael Chen</h3>
<p className="text-xs text-blue-600 font-medium mb-3">Worship Pastor</p>
<p className="text-sm text-slate-500">Leads our congregation in vibrant, spirit-filled worship every Sunday morning.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-amber-50/40 border-y border-amber-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-2">Stories of Life Change</h2>
<p className="text-sm text-slate-500">Real experiences from our church family.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-amber-100" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-slate-600 italic mb-6 relative z-10">"Finding Grace Church was an answer to prayer. The community here embraced my family from day one, and the teaching has helped me grow closer to God than ever before."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-sm font-medium">EM</div>
<div>
<p className="text-sm font-medium text-slate-900">Emily M.</p>
<p className="text-xs text-slate-500">Attending since 2021</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-amber-100" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-sm text-slate-600 italic mb-6 relative z-10">"The youth program completely transformed my teenager's perspective on faith. We are so grateful for the dedicated leaders who pour into the next generation."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-sm font-medium">JD</div>
<div>
<p className="text-sm font-medium text-slate-900">James &amp; Sarah D.</p>
<p className="text-xs text-slate-500">Parents</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900">Latest Articles &amp; Resources</h2>
<a className="text-sm font-medium text-blue-600 hover:underline hidden sm:block" href="#">View all resources</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group block" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden">
<img alt="Bible study tips" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<p className="text-xs text-slate-400 mb-1">Bible Study</p>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">5 Practical Bible Study Tips for Beginners</h3>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden">
<img alt="How to grow spiritually" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-xs text-slate-400 mb-1">Spiritual Growth</p>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">How to Grow Spiritually in a Busy World</h3>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden">
<img alt="Finding purpose" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<p className="text-xs text-slate-400 mb-1">Devotional</p>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">Finding Your God-Given Purpose</h3>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] bg-slate-100 rounded-xl mb-4 overflow-hidden">
<img alt="Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<p className="text-xs text-slate-400 mb-1">Church Life</p>
<h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">Why Local Community Matters More Than Ever</h3>
</a>
</div>
</div>
</section>

<section className="py-12 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center" id="give">
<h2 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">Give Online</h2>
<p className="text-sm text-slate-500 mb-6">Your generosity helps us continue our mission and serve the Austin community. Giving is simple, secure, and impactful.</p>
<a className="inline-flex w-max items-center justify-center px-6 py-2 text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm" href="#">
                            Give Now <iconify-icon className="ml-2 text-amber-400" icon="solar:heart-bold"></iconify-icon>
</a>
</div>

<div className="bg-blue-600 p-8 rounded-2xl shadow-sm flex flex-col justify-center text-white">
<h2 className="text-2xl tracking-tight font-semibold mb-2">Stay Connected</h2>
<p className="text-sm text-blue-100 mb-6">Get weekly updates on events, new sermons, and church news directly to your inbox.</p>
<form className="flex gap-2">
<input className="flex-1 px-4 py-2 rounded-full text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50 border-0" placeholder="Email address" required="" type="email"/>
<button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-full text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-sm" type="submit">
                                Subscribe
                            </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-4xl tracking-tight font-semibold text-slate-900 mb-6">Join Us This Sunday</h2>
<p className="text-lg text-slate-500 mb-10">We can't wait to welcome you to Grace Church. Plan your visit today and let us know you're coming so we can greet you at the door!</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all" href="#visit">
                        Plan Your Visit
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a aria-label="Grace Church" className="flex items-center gap-2 text-slate-900 mb-4" href="#">
<iconify-icon className="text-xl text-amber-500" icon="solar:sun-2-linear"></iconify-icon>
<span className="tracking-tighter font-semibold text-base uppercase">GRACE</span>
</a>
<p className="text-xs text-slate-500 mb-4">A Christian church in Austin dedicated to worship, community, and growing in faith together.</p>
<div className="flex gap-4">
<a aria-label="Facebook" className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon></a>
<a aria-label="Instagram" className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a aria-label="YouTube" className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon className="text-lg" icon="solar:videocamera-linear"></iconify-icon></a>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-4">Quick Links</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Our Beliefs</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Watch Sermons Online</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Give Online</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900 mb-4">Ministries</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Kids Church</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Youth Programs</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Small Groups</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Serve</a></li>
</ul>
</div>
<div id="contact">
<h3 className="text-sm font-medium text-slate-900 mb-4">Contact</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-slate-400" icon="solar:map-point-linear"></iconify-icon>
<span>123 Faith Avenue<br/>Austin, TX 78701</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:phone-linear"></iconify-icon>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-blue-600" href="mailto:hello@gracechurch.example.com">hello@gracechurch.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Grace Church. All rights reserved.</p>
<div className="flex gap-4 text-xs text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
