import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
netflix: {
red: '#E50914',
redHover: '#C11119',
black: '#000000',
dark: '#141414',
gray: '#808080',
lightGray: '#B3B3B3',
input: '#333333'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Simple Single Page Application Routing Logic
        function switchView(viewName) {
            // Hide all views
            document.getElementById('view-landing').classList.add('hidden');
            document.getElementById('view-signin').classList.add('hidden');
            document.getElementById('view-browse').classList.add('hidden');
            
            document.getElementById('view-landing').classList.remove('block');
            document.getElementById('view-signin').classList.remove('block');
            document.getElementById('view-browse').classList.remove('block');

            // Show selected view
            const selectedView = document.getElementById('view-' + viewName);
            selectedView.classList.remove('hidden');
            selectedView.classList.add('block');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Navbar Scroll Effect for Browse View
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('browse-nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black');
                nav.classList.remove('bg-gradient-to-b');
            } else {
                nav.classList.remove('bg-black');
                nav.classList.add('bg-gradient-to-b');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="block w-full" id="view-landing">

<div className="relative w-full h-[70vh] md:h-screen border-b-8 border-neutral-900">
<div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc93b/d3a7396f-273e-4562-96b4-813dbbf92800/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/80"></div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
<div className="text-netflix-red text-4xl md:text-5xl font-bold tracking-tighter uppercase cursor-pointer" onclick="switchView('landing')">Netflix</div>
<div className="flex gap-4">
<div className="hidden sm:flex items-center gap-2 bg-black/40 border border-white/30 rounded px-3 py-1 text-white text-sm backdrop-blur-sm">
<iconify-icon icon="solar:globe-linear"></iconify-icon>
<span>English</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="bg-netflix-red hover:bg-netflix-redHover text-white text-sm font-medium px-4 py-1.5 rounded transition-colors" onclick="switchView('signin')">Sign In</button>
</div>
</nav>

<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 -mt-20">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">Unlimited movies, TV shows, and more</h1>
<p className="text-lg md:text-2xl font-normal mt-4 text-white">Watch anywhere. Cancel anytime.</p>
<p className="text-lg md:text-xl font-normal mt-6 text-white">Ready to watch? Enter your email to create or restart your membership.</p>
<form className="w-full max-w-3xl flex flex-col md:flex-row gap-2 mt-6 items-center" onsubmit="event.preventDefault(); switchView('signin')">
<div className="relative w-full group">
<input className="floating-input block w-full px-4 pt-5 pb-2 text-white bg-black/60 border border-white/30 rounded text-base focus:border-white focus:ring-1 focus:ring-white focus:outline-none h-14 backdrop-blur-sm peer" id="email-hero" placeholder=" " required="" type="email"/>
<label className="absolute left-4 transition-all duration-200 pointer-events-none text-neutral-400" htmlFor="email-hero">Email address</label>
</div>
<button className="bg-netflix-red hover:bg-netflix-redHover text-white text-xl font-bold px-8 h-14 rounded flex items-center gap-2 whitespace-nowrap transition-colors mt-4 md:mt-0 w-full md:w-auto justify-center" type="submit">
                        Get Started
                        <iconify-icon className="text-2xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<section className="bg-black py-16 px-6 border-b-8 border-neutral-900">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Enjoy on your TV</h2>
<p className="text-lg md:text-xl text-neutral-300">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
</div>
<div className="relative">
<div className="relative z-10 overflow-hidden">
<img alt="TV" className="w-full relative z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
<div className="absolute top-[20%] left-[13%] right-[13%] bottom-[20%] z-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-16 px-6 border-b-8 border-neutral-900">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
<div className="order-2 md:order-1 relative">
<img alt="Mobile" className="w-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black border border-neutral-600 rounded-xl p-3 w-[80%] flex items-center gap-4 shadow-lg">
<img className="h-16 w-12 object-cover" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/>
<div className="flex-grow">
<div className="font-bold text-sm">Stranger Things</div>
<div className="text-xs text-blue-500">Downloading...</div>
</div>
<div className="animate-pulse">
<iconify-icon className="text-2xl text-white" icon="solar:download-linear"></iconify-icon>
</div>
</div>
</div>
<div className="order-1 md:order-2 text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Download your shows to watch offline</h2>
<p className="text-lg md:text-xl text-neutral-300">Save your favorites easily and always have something to watch.</p>
</div>
</div>
</section>

<section className="bg-black py-16 px-6 border-b-8 border-neutral-900">
<h2 className="text-3xl md:text-5xl font-bold text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto space-y-2">

<details className="group bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg md:text-2xl font-normal">What is Netflix?</span>
<iconify-icon className="text-3xl transition-transform group-open:rotate-45" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-lg md:text-xl font-normal text-neutral-200 border-t border-black">
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                    </div>
</details>

<details className="group bg-neutral-800 hover:bg-neutral-700 transition-colors duration-200">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="text-lg md:text-2xl font-normal">How much does Netflix cost?</span>
<iconify-icon className="text-3xl transition-transform group-open:rotate-45" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-lg md:text-xl font-normal text-neutral-200 border-t border-black">
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month. No extra costs, no contracts.
                    </div>
</details>
</div>
<div className="max-w-2xl mx-auto mt-12 text-center">
<p className="text-lg font-normal mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
<form className="flex flex-col md:flex-row gap-2" onsubmit="event.preventDefault(); switchView('signin')">
<div className="relative flex-grow">
<input className="floating-input block w-full px-4 pt-5 pb-2 text-white bg-black/40 border border-neutral-500 rounded text-base focus:border-white focus:ring-1 focus:ring-white focus:outline-none h-14 peer" id="email-faq" placeholder=" " type="email"/>
<label className="absolute left-4 transition-all duration-200 pointer-events-none text-neutral-400" htmlFor="email-faq">Email address</label>
</div>
<button className="bg-netflix-red hover:bg-netflix-redHover text-white text-xl font-medium px-6 h-14 rounded flex items-center justify-center gap-2 transition-colors">
                        Get Started
                        <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-black py-16 px-6 md:px-12 text-neutral-400 text-sm">
<div className="max-w-5xl mx-auto">
<p className="mb-8">Questions? Call 1-844-505-2993</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<a className="hover:underline" href="#">FAQ</a>
<a className="hover:underline" href="#">Help Center</a>
<a className="hover:underline" href="#">Account</a>
<a className="hover:underline" href="#">Media Center</a>
<a className="hover:underline" href="#">Investor Relations</a>
<a className="hover:underline" href="#">Jobs</a>
<a className="hover:underline" href="#">Redeem Gift Cards</a>
<a className="hover:underline" href="#">Buy Gift Cards</a>
<a className="hover:underline" href="#">Ways to Watch</a>
<a className="hover:underline" href="#">Terms of Use</a>
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Cookie Preferences</a>
<a className="hover:underline" href="#">Corporate Information</a>
<a className="hover:underline" href="#">Contact Us</a>
<a className="hover:underline" href="#">Speed Test</a>
<a className="hover:underline" href="#">Legal Notices</a>
</div>
<div className="flex items-center gap-2 bg-transparent border border-neutral-600 rounded w-fit px-3 py-1 mb-6">
<iconify-icon icon="solar:globe-linear"></iconify-icon>
<span>English</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<p className="text-xs">Netflix US</p>
</div>
</footer>
</div>

<div className="hidden w-full min-h-screen relative bg-black" id="view-signin">

<div className="hidden md:block absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc93b/d3a7396f-273e-4562-96b4-813dbbf92800/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover bg-center opacity-50"></div>
<div className="absolute inset-0 bg-black/40 hidden md:block"></div>

<header className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="text-netflix-red text-4xl md:text-5xl font-bold tracking-tighter uppercase cursor-pointer" onclick="switchView('landing')">Netflix</div>
</header>

<div className="relative z-10 min-h-[calc(100vh-100px)] flex items-center justify-center px-4 pb-20">
<div className="bg-black/80 md:bg-black/75 p-8 md:p-16 rounded md:w-[450px] w-full backdrop-blur-sm border border-neutral-800/50">
<h1 className="text-3xl font-semibold mb-8 text-white">Sign In</h1>
<form className="flex flex-col gap-4" onsubmit="event.preventDefault(); switchView('browse')">
<div className="relative w-full">
<input className="floating-input block w-full px-5 pt-5 pb-2 text-white bg-[#333] rounded text-base focus:bg-[#454545] focus:outline-none h-12 peer" id="email-login" placeholder=" " type="email" value="user@example.com"/>
<label className="absolute left-5 transition-all duration-200 pointer-events-none text-neutral-400" htmlFor="email-login">Email or phone number</label>
</div>
<div className="relative w-full">
<input className="floating-input block w-full px-5 pt-5 pb-2 text-white bg-[#333] rounded text-base focus:bg-[#454545] focus:outline-none h-12 peer" id="password-login" placeholder=" " type="password" value="password123"/>
<label className="absolute left-5 transition-all duration-200 pointer-events-none text-neutral-400" htmlFor="password-login">Password</label>
</div>
<button className="bg-netflix-red hover:bg-netflix-redHover text-white font-medium text-base py-3 rounded mt-6 transition-colors" type="submit">Sign In</button>
<div className="flex justify-between items-center text-[#b3b3b3] text-xs mt-1">
<div className="flex items-center gap-1">
<input className="accent-neutral-500 rounded bg-[#333]" id="remember" type="checkbox"/>
<label className="select-none" htmlFor="remember">Remember me</label>
</div>
<a className="hover:underline" href="#">Need help?</a>
</div>
</form>
<div className="mt-16 text-[#737373]">
<div className="text-base mb-4">
                        New to Netflix? <span className="text-white hover:underline cursor-pointer" onclick="switchView('landing')">Sign up now.</span>
</div>
<div className="text-xs">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className="text-blue-500 hover:underline" href="#">Learn more.</a>
</div>
</div>
</div>
</div>
</div>

<div className="hidden w-full min-h-screen bg-[#141414] fade-in" id="view-browse">

<nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/90 to-transparent px-4 md:px-12 py-4 flex items-center justify-between transition-all duration-300" id="browse-nav">
<div className="flex items-center gap-8">
<div className="text-netflix-red text-2xl md:text-3xl font-bold tracking-tighter uppercase cursor-pointer" onclick="switchView('browse')">Netflix</div>
<ul className="hidden md:flex items-center gap-5 text-sm font-medium text-neutral-300">
<li className="text-white cursor-pointer font-semibold">Home</li>
<li className="hover:text-neutral-400 cursor-pointer transition-colors">TV Shows</li>
<li className="hover:text-neutral-400 cursor-pointer transition-colors">Movies</li>
<li className="hover:text-neutral-400 cursor-pointer transition-colors">New &amp; Popular</li>
<li className="hover:text-neutral-400 cursor-pointer transition-colors">My List</li>
</ul>
</div>
<div className="flex items-center gap-5 text-white">
<iconify-icon className="text-xl cursor-pointer hover:text-neutral-300" icon="solar:magnifer-linear"></iconify-icon>
<span className="hidden md:block text-sm cursor-pointer hover:text-neutral-300">Children</span>
<iconify-icon className="text-xl cursor-pointer hover:text-neutral-300" icon="solar:bell-linear"></iconify-icon>
<div className="flex items-center gap-2 cursor-pointer group relative">
<img alt="Profile" className="w-8 h-8 rounded bg-yellow-500" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<iconify-icon className="text-xs transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>

<div className="absolute top-full right-0 mt-4 w-48 bg-black/95 border border-neutral-800 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
<div className="px-3 py-2 text-sm text-neutral-300 hover:underline hover:text-white cursor-pointer">Manage Profiles</div>
<div className="px-3 py-2 text-sm text-neutral-300 hover:underline hover:text-white cursor-pointer">Account</div>
<div className="px-3 py-2 text-sm text-neutral-300 hover:underline hover:text-white cursor-pointer">Help Center</div>
<div className="h-[1px] bg-neutral-700 my-2"></div>
<div className="px-3 py-2 text-sm text-white hover:underline cursor-pointer" onclick="switchView('landing')">Sign out of Netflix</div>
</div>
</div>
</div>
</nav>

<div className="relative w-full h-[56.25vw] max-h-[85vh] min-h-[500px]">

<div className="absolute inset-0 w-full h-full">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#141414] to-transparent"></div>
</div>

<div className="absolute top-[30%] left-4 md:left-12 max-w-xl space-y-4 md:space-y-6 z-10">
<div className="flex items-center gap-2 text-neutral-300 text-sm font-semibold tracking-wide uppercase">
<span className="text-netflix-red text-2xl font-black">N</span> SERIES
                </div>
<h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-none">STRANGER<br/>THINGS</h1>
<div className="flex items-center gap-3 text-white text-sm md:text-base font-medium">
<span className="text-green-400 font-bold">98% Match</span>
<span className="text-neutral-400">2022</span>
<span className="border border-neutral-500 px-1 text-xs">TV-MA</span>
<span className="text-neutral-400">4 Seasons</span>
<span className="border border-neutral-500 px-1 text-xs rounded-sm">HD</span>
</div>
<p className="text-white text-base md:text-lg font-normal drop-shadow-md line-clamp-3">
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                </p>
<div className="flex items-center gap-3 mt-4">
<button className="bg-white text-black hover:bg-neutral-200 transition-colors px-6 py-2 rounded flex items-center gap-2 font-bold text-base md:text-lg">
<iconify-icon className="text-2xl" icon="solar:play-bold"></iconify-icon>
                        Play
                    </button>
<button className="bg-gray-500/70 text-white hover:bg-gray-500/50 transition-colors px-6 py-2 rounded flex items-center gap-2 font-bold text-base md:text-lg backdrop-blur-sm">
<iconify-icon className="text-2xl" icon="solar:info-circle-linear"></iconify-icon>
                        More Info
                    </button>
</div>
</div>
</div>

<div className="relative z-20 pb-20 -mt-24 pl-4 md:pl-12 space-y-8 overflow-hidden">

<div className="group">
<h3 className="text-white text-lg md:text-xl font-semibold mb-3 group-hover:text-neutral-200 transition-colors cursor-pointer flex items-center gap-2">
                    Trending Now 
                    <iconify-icon className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</h3>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 pr-12">

<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>
</div>

<div className="group">
<h3 className="text-white text-lg md:text-xl font-semibold mb-3 group-hover:text-neutral-200 transition-colors cursor-pointer">Top 10 TV Shows in the U.S. Today</h3>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 pr-12">

<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative flex items-end">
<span className="absolute -left-4 bottom-0 text-8xl md:text-9xl font-black text-black drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] z-20 stroke-white" style={{WebkitTextStroke: '4px #555'}}>1</span>
<img className="w-full h-full object-cover z-10 ml-8 md:ml-12 rounded-r-md" src="https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative flex items-end">
<span className="absolute -left-4 bottom-0 text-8xl md:text-9xl font-black text-black drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] z-20 stroke-white" style={{WebkitTextStroke: '4px #555'}}>2</span>
<img className="w-full h-full object-cover z-10 ml-8 md:ml-12 rounded-r-md" src="https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[2/3] bg-neutral-800 rounded-md overflow-hidden relative flex items-end">
<span className="absolute -left-4 bottom-0 text-8xl md:text-9xl font-black text-black drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] z-20 stroke-white" style={{WebkitTextStroke: '4px #555'}}>3</span>
<img className="w-full h-full object-cover z-10 ml-8 md:ml-12 rounded-r-md" src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>
</div>

<div className="group">
<h3 className="text-white text-lg md:text-xl font-semibold mb-3 group-hover:text-neutral-200 transition-colors cursor-pointer">New Releases</h3>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 pr-12">
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[16/9] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-2 left-2">
<img className="h-3 md:h-4 w-auto drop-shadow-md" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[16/9] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="absolute bottom-2 left-2">
<img className="h-3 md:h-4 w-auto drop-shadow-md" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
</div>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[16/9] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="movie-card flex-shrink-0 w-32 md:w-56 aspect-[16/9] bg-neutral-800 rounded-md overflow-hidden relative cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
