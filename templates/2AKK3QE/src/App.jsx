import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const tabs = [
      { btn: "tab-home", page: "page-home" },
      { btn: "tab-book", page: "page-book" },
      { btn: "tab-events", page: "page-events" },
      { btn: "tab-leader", page: "page-leader" },
      { btn: "tab-quest", page: "page-quest" },
      { btn: "tab-signup", page: "page-signup" }
    ];
    tabs.forEach(({ btn, page }) => {
      document.getElementById(btn).addEventListener("click", () => {
        tabs.forEach(({ btn: b, page: p }) => {
          document.getElementById(p).classList.toggle("hidden", p !== page);
          document.getElementById(b).classList.toggle("text-green-700", b === btn);
          document.getElementById(b).classList.toggle("text-gray-400", b !== btn);
        });
        window.scrollTo(0,0);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-green-700 text-white flex items-center justify-between px-4 py-3">
<span className="text-2xl font-bold">Golfers Club</span>
<img alt="Golf" className="h-8 w-8" src="https://img.icons8.com/ios-filled/50/ffffff/golf.png"/>
</header>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-14 z-10">
<button className="flex flex-col items-center text-green-700 font-medium" id="tab-home">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 12l9-9 9 9"></path><path d="M9 21V9h6v12"></path></svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center text-gray-400" id="tab-book">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>
<span className="text-xs">Book</span>
</button>
<button className="flex flex-col items-center text-gray-400" id="tab-events">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M8 17l4 4 4-4m0-5V3m-8 4v5m9 4V3m-9 4V3"></path></svg>
<span className="text-xs">Events</span>
</button>
<button className="flex flex-col items-center text-gray-400" id="tab-leader">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 6v6l4 2"></path></svg>
<span className="text-xs">Leaderboard</span>
</button>
<button className="flex flex-col items-center text-gray-400" id="tab-quest">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="text-xs">Quest</span>
</button>
<button className="flex flex-col items-center text-gray-400" id="tab-signup">
<svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M16 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm2 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path></svg>
<span className="text-xs">Signup</span>
</button>
</nav>
<main className="pt-4 pb-20 px-2 max-w-md mx-auto">

<section className="space-y-8" id="page-home">

<div>
<div className="mb-1 px-1">
<h2 className="text-lg font-bold text-green-800">Upcoming Events</h2>
<p className="text-sm text-green-700">Join our latest tournaments and activities!</p>
</div>
<div className="flex space-x-4 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-green-200">

<div className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0">
<div className="flex items-center space-x-2 mb-2">
<img alt="Junior Cup" className="w-10 h-10" src="https://img.icons8.com/fluency/48/golf-ball.png"/>
<div>
<span className="font-semibold text-green-700">Junior Cup 2024</span>
<div className="text-xs text-gray-500">June 22, 8:00 AM</div>
</div>
</div>
<div className="text-sm text-gray-700 mb-2">A fun tournament for golfers under 18. Grab your spot!</div>
<span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Register</span>
</div>

<div className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0">
<div className="flex items-center space-x-2 mb-2">
<img alt="Ladies Night" className="w-10 h-10" src="https://img.icons8.com/color/48/golf-woman.png"/>
<div>
<span className="font-semibold text-green-700">Ladies Night</span>
<div className="text-xs text-gray-500">June 18, 6:00 PM</div>
</div>
</div>
<div className="text-sm text-gray-700 mb-2">Relaxing evening with friends. Free drinks for all ladies!</div>
<span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">Free Drinks</span>
</div>

<div className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0">
<div className="flex items-center space-x-2 mb-2">
<img alt="Cart Promo" className="w-10 h-10" src="https://img.icons8.com/color/48/golf-cart.png"/>
<div>
<span className="font-semibold text-green-700">Cart Rental Promo</span>
<div className="text-xs text-gray-500">All June</div>
</div>
</div>
<div className="text-sm text-gray-700 mb-2">20% off all cart rentals for Gold Members this month!</div>
<span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Members Only</span>
</div>
</div>
</div>

<div>
<div className="mb-1 px-1">
<h2 className="text-lg font-bold text-green-800">Who to Follow</h2>
<p className="text-sm text-green-700">Connect with top golfers and community stars.</p>
</div>
<div className="flex space-x-4 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-green-200">

<div className="min-w-[180px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col items-center">
<img alt="Chris" className="w-14 h-14 rounded-full mb-2" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<div className="font-semibold text-green-700">Chris Wu</div>
<div className="text-xs text-gray-500 mb-2">2x Club Champ</div>
<button className="bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Follow</button>
</div>

<div className="min-w-[180px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col items-center">
<img alt="Pat" className="w-14 h-14 rounded-full mb-2" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div className="font-semibold text-green-700">Pat Singh</div>
<div className="text-xs text-gray-500 mb-2">Longest Drive Winner</div>
<button className="bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Follow</button>
</div>

<div className="min-w-[180px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col items-center">
<img alt="Alex" className="w-14 h-14 rounded-full mb-2" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="font-semibold text-green-700">Alex Morgan</div>
<div className="text-xs text-gray-500 mb-2">Hole-in-One Ace</div>
<button className="bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Follow</button>
</div>

<div className="min-w-[180px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col items-center">
<img alt="Jamie" className="w-14 h-14 rounded-full mb-2" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="font-semibold text-green-700">Jamie Lee</div>
<div className="text-xs text-gray-500 mb-2">Eagle Leader</div>
<button className="bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Follow</button>
</div>
</div>
</div>

<div>
<div className="mb-1 px-1">
<h2 className="text-lg font-bold text-green-800">Book a Tee Time</h2>
<p className="text-sm text-green-700">Reserve your spot at top courses fast and easy.</p>
</div>
<div className="flex space-x-4 overflow-x-auto py-2 px-1 scrollbar-thin scrollbar-thumb-green-200">

<div className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col">
<div className="flex items-center mb-2">
<img alt="Green Valley" className="w-10 h-10 mr-2" src="https://img.icons8.com/emoji/48/000000/golf-course-emoji.png"/>
<div>
<div className="font-semibold text-green-700">Green Valley</div>
<div className="text-xs text-gray-500">Sat, Jun 15</div>
</div>
</div>
<div className="text-sm text-gray-700 mb-2">Beautiful 18-hole course, perfect for all levels.</div>
<button className="mt-auto bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Book Now</button>
</div>

<div className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col">
<div className="flex items-center mb-2">
<img alt="Royal Links" className="w-10 h-10 mr-2" src="https://img.icons8.com/color/48/golf-bag.png"/>
<div>
<div className="font-semibold text-green-700">Royal Links</div>
<div className="text-xs text-gray-500">Sun, Jun 16</div>
</div>
</div>
<div className="text-sm text-gray-700 mb-2">Challenging fairways and scenic views.</div>
<button className="mt-auto bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Book Now</button>
</div>

<div className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0 flex flex-col">
<div className="flex items mb-2">
<img alt="Sunset Golf" className="w-10 h-10 mr-2" src="https://img.icons8.com/fluency/48/golf-flag.png"/>
<div>
<div className="font-semibold text-green-700">Sunset Golf</div>
<div className="text-xs text-gray-500">Mon, Jun 17</div>
</div>
</div>
<div className="text-sm text-gray-700 mb-2">Twilight discounts and open to all players!</div>
<button className="mt-auto bg-green-700 text-white text-xs px-4 py-1 rounded hover:bg-green-800">Book Now</button>
</div>
</div>
</div>
</section>

<section className="hidden" id="page-book">
<h2 className="text-xl font-bold mb-3 text-green-800">Book a Game</h2>
<form className="bg-white p-4 rounded-lg shadow space-y-3">
<div>
<label className="block text-sm font-medium text-green-700">Course</label>
<input className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500" placeholder="Select course" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-green-700">Date</label>
<input className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-green-700">Time</label>
<input className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500" type="time"/>
</div>
<div>
<label className="block text-sm font-medium text-green-700">Players</label>
<select className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500">
<option>1 Player</option>
<option>2 Players</option>
<option>3 Players</option>
<option>4 Players</option>
</select>
</div>
<button className="w-full mt-2 bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800" type="submit">Book Now</button>
</form>
<div className="mt-6">
<h3 className="text-lg font-semibold text-green-800 mb-2">Upcoming Bookings</h3>
<ul className="space-y-2">
<li className="bg-green-100 rounded-lg p-3 flex justify-between items-center">
<div>
<span className="font-medium">Sunset Golf</span>
<span className="block text-xs text-green-700">Sat, Jun 15 - 7:30 AM</span>
</div>
<span className="text-green-700 font-bold">3/4</span>
</li>
</ul>
</div>
</section>
<section className="hidden" id="page-events">
<h2 className="text-xl font-bold mb-3 text-green-800">What's Happening</h2>
<div className="space-y-3">
<div className="bg-white rounded-lg p-4 shadow">
<h3 className="font-semibold text-green-700">Junior Cup 2024</h3>
<p className="text-sm text-gray-600">June 22, 8:00 AM - Green Valley</p>
<span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">Open for Registration</span>
</div>
<div className="bg-white rounded-lg p-4 shadow">
<h3 className="font-semibold text-green-700">Ladies Night</h3>
<p className="text-sm text-gray-600">June 18, 6:00 PM - Royal Links</p>
<span className="inline-block mt-2 px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">Free Drinks</span>
</div>
</div>
</section>
<section className="hidden" id="page-leader">
<h2 className="text-xl font-bold mb-3 text-green-800">Leaderboard</h2>
<ul className="bg-white rounded-lg shadow divide-y">
<li className="flex items-center justify-between p-3">
<span className="font-bold text-green-700">1.</span>
<span className="flex-1 ml-2">Alex Morgan</span>
<span className="font-medium">-3</span>
</li>
<li className="flex items-center justify-between p-3">
<span className="font-bold text-green-700">2.</span>
<span className="flex-1 ml-2">Jamie Lee</span>
<span className="font-medium">-2</span>
</li>
<li className="flex items-center justify-between p-3">
<span className="font-bold text-green-700">3.</span>
<span className="flex-1 ml-2">Chris Wu</span>
<span className="font-medium">-1</span>
</li>
</ul>
<div className="mt-4 text-center text-sm text-green-600">Congrats to this week's leaders!</div>
</section>
<section className="hidden" id="page-quest">
<h2 className="text-xl font-bold mb-3 text-green-800">Weekly Quest</h2>
<div className="bg-white p-4 rounded-lg shadow">
<h3 className="font-semibold text-green-700">Hit 3 Birdies!</h3>
<p className="text-gray-600 text-sm">Play any course. Log 3 birdies in your rounds this week to win a free golf ball set!</p>
<div className="mt-4 flex items-center">
<div className="w-3/4 h-3 bg-green-100 rounded-full overflow-hidden">
<div className="bg-green-500 h-3 rounded-full" style={{width: '66%'}}></div>
</div>
<span className="ml-3 text-green-700 font-bold">2/3</span>
</div>
<button className="mt-4 w-full bg-green-700 text-white py-2 rounded hover:bg-green-800">View My Progress</button>
</div>
</section>
<section className="hidden" id="page-signup">
<h2 className="text-xl font-bold mb-3 text-green-800">Sign Up</h2>
<form className="bg-white p-4 rounded-lg shadow space-y-3">
<div>
<label className="block text-sm font-medium text-green-700">Name</label>
<input className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-green-700">Email</label>
<input className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500" placeholder="you@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-green-700">Phone Number</label>
<input className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:border-green-500" placeholder="e.g. 555-123-4567" type="tel"/>
</div>
<button className="w-full mt-2 bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800" type="submit">Sign Up</button>
</form>
</section>
</main>



    </>
  );
}
