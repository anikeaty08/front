import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function navTo(viewId) {
            document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
            document.getElementById(viewId).classList.remove('hidden');
            document.getElementById(viewId).classList.add('flex');
            window.scrollTo(0,0);
        }

        function checkAge() {
            const age = document.getElementById('age-input').value;
            const warning = document.getElementById('age-warning');
            const zoneSelection = document.getElementById('zone-selection');
            
            if (age && age < 13) {
                warning.classList.remove('hidden');
                zoneSelection.classList.add('opacity-50', 'pointer-events-none');
            } else {
                warning.classList.add('hidden');
                zoneSelection.classList.remove('opacity-50', 'pointer-events-none');
            }
        }

        function handleLogin() {
            const age = document.getElementById('age-input').value;
            if (age && age < 13) {
                navTo('view-kids');
            } else {
                const selectedZone = document.querySelector('input[name="zone"]:checked').value;
                if (selectedZone === 'adult') navTo('view-adult');
                if (selectedZone === 'business') navTo('view-business');
            }
        }

        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            if(modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative min-h-screen flex flex-col" id="app">

<div className="view flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 items-center justify-center p-4" id="view-login">
<div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8">
<div className="flex justify-center mb-8">
<span className="tracking-tighter font-semibold text-2xl text-slate-900 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:planet-3-linear"></iconify-icon>
                        ZoneUp
                    </span>
</div>
<h1 className="text-xl font-medium tracking-tight text-center mb-2">Create your account</h1>
<p className="text-sm text-slate-500 text-center mb-6">Connect, create, and grow in your zone.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Age</label>
<input className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-400 transition-colors" id="age-input" oninput="checkAge()" placeholder="Enter your age" type="number"/>
<p className="text-xs text-orange-500 mt-1 hidden" id="age-warning">Users under 13 will be routed to the Children's Zone.</p>
</div>
<div id="zone-selection">
<label className="block text-xs font-medium text-slate-700 mb-2 mt-4">Select your zone</label>
<div className="grid grid-cols-2 gap-3">
<label className="custom-radio cursor-pointer relative">
<input checked="" className="peer sr-only" name="zone" type="radio" value="adult"/>
<div className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-center">
<iconify-icon className="text-xl text-slate-600 mb-1" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Adults</p>
</div>
</label>
<label className="custom-radio cursor-pointer relative">
<input className="peer sr-only" name="zone" type="radio" value="business"/>
<div className="p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-center">
<iconify-icon className="text-xl text-slate-600 mb-1" icon="solar:shop-linear"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Business</p>
</div>
</label>
</div>
</div>
<button className="w-full mt-6 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 rounded-lg transition-colors" onclick="handleLogin()" type="button">
                        Continue to ZoneUp
                    </button>
<button className="w-full mt-2 bg-transparent text-slate-400 hover:text-slate-600 text-xs py-2 transition-colors" onclick="navTo('view-admin')" type="button">
                        Admin Login (Mock)
                    </button>
</form>
</div>
<p className="text-xs text-slate-400 mt-8">© 2025 ZoneUp — Connect. Create. Grow.</p>
</div>

<div className="view hidden flex-col min-h-screen bg-amber-50 font-kids pb-20" id="view-kids">

<header className="sticky top-0 z-40 bg-amber-50/90 backdrop-blur-md border-b border-orange-100 px-4 py-3 flex justify-between items-center">
<span className="tracking-tighter font-semibold text-2xl text-orange-600">ZoneUp</span>
<button className="bg-gradient-to-r from-orange-400 to-amber-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm flex items-center gap-1 hover:opacity-90 transition-opacity" onclick="toggleModal('ai-modal-kids')">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Create with AI
                </button>
</header>

<main className="flex-1 w-full max-w-lg mx-auto p-4 space-y-6">

<article className="bg-white rounded-3xl p-4 shadow-sm border border-orange-50">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-semibold">T</div>
<div>
<h3 className="text-sm font-semibold text-slate-800">Tommy (10)</h3>
<p className="text-xs text-slate-400">2 hours ago</p>
</div>
</div>
</div>
<img alt="Cute dog" className="w-full h-64 object-cover rounded-2xl mb-3" src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700 mb-4 font-medium">Look at this cute puppy I saw today! 🐶✨</p>
<div className="flex gap-2">
<button className="bg-amber-100 hover:bg-amber-200 text-amber-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:star-linear"></iconify-icon> Super!
                        </button>
<button className="bg-green-100 hover:bg-green-200 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:smile-circle-linear"></iconify-icon> Haha
                        </button>
</div>
</article>
</main>

<nav className="fixed bottom-0 w-full bg-white border-t border-orange-100 flex justify-around p-3 z-40 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
<button className="p-2 text-orange-500 flex flex-col items-center"><iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon><span className="text-xs mt-1">Home</span></button>
<button className="p-2 text-slate-400 flex flex-col items-center"><iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon><span className="text-xs mt-1">Search</span></button>
<button className="p-2 text-slate-400 flex flex-col items-center"><iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon><span className="text-xs mt-1">Chat</span></button>
<button className="p-2 text-slate-400 flex flex-col items-center" onclick="navTo('view-login')"><iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon><span className="text-xs mt-1">Profile</span></button>
</nav>

<div className="hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-end sm:items-center justify-center p-4" id="ai-modal-kids">
<div className="bg-white w-full max-w-md rounded-3xl p-6 relative">
<button className="absolute top-4 right-4 text-slate-400" onclick="toggleModal('ai-modal-kids')"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
<h2 className="text-lg font-semibold text-orange-500 mb-2 flex items-center gap-2"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Magic Image Maker</h2>
<p className="text-sm text-slate-500 mb-4">Type what you want to see!</p>
<textarea className="w-full bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none" placeholder="A flying cat with rainbow wings..." rows="3"></textarea>
<div className="mt-4 h-48 bg-slate-100 rounded-xl border border-slate-200 border-dashed flex items-center justify-center text-slate-400 text-sm">
                        Image will appear here instantly!
                    </div>
<button className="w-full mt-4 bg-orange-400 text-white font-semibold py-2.5 rounded-xl">Share to Feed</button>
</div>
</div>
</div>

<div className="view hidden flex-col min-h-screen bg-slate-50 pb-16" id="view-adult">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center">
<span className="tracking-tighter font-semibold text-xl text-slate-900">ZoneUp</span>
<div className="flex gap-4">
<button className="text-slate-600 hover:text-slate-900"><iconify-icon className="text-xl" icon="solar:moon-linear"></iconify-icon></button>
<button className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1" onclick="toggleModal('ai-modal-adult')">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Create with AI
                    </button>
</div>
</header>

<div className="w-full max-w-xl mx-auto p-4 flex gap-4 overflow-x-auto hide-scrollbar border-b border-slate-100 bg-white">
<div className="flex flex-col items-center gap-1 min-w-[60px]">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-purple-500">
<img className="w-full h-full rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-slate-600 truncate w-full text-center">Your Story</span>
</div>

<div className="flex flex-col items-center gap-1 min-w-[60px]">
<div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-blue-500 to-purple-500">
<img className="w-full h-full rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-slate-600 truncate w-full text-center">Alex</span>
</div>
</div>

<main className="flex-1 w-full max-w-xl mx-auto py-6 space-y-8">

<article className="bg-white border-y sm:border sm:rounded-xl border-slate-200">
<div className="flex items-center justify-between p-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<h3 className="text-sm font-medium text-slate-900">sarah_designs</h3>
</div>
<button className="text-slate-400"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<img className="w-full h-96 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="p-3">
<div className="flex justify-between mb-2">
<div className="flex gap-4">
<button className="text-slate-900 hover:text-slate-600"><iconify-icon className="text-2xl" icon="solar:heart-linear"></iconify-icon></button>
<button className="text-slate-900 hover:text-slate-600"><iconify-icon className="text-2xl" icon="solar:chat-round-linear"></iconify-icon></button>
<button className="text-slate-900 hover:text-slate-600"><iconify-icon className="text-2xl" icon="solar:plain-linear"></iconify-icon></button>
</div>
<button className="text-slate-900 hover:text-slate-600"><iconify-icon className="text-2xl" icon="solar:bookmark-linear"></iconify-icon></button>
</div>
<p className="text-sm font-medium text-slate-900 mb-1">1,240 likes</p>
<p className="text-sm text-slate-800"><span className="font-medium mr-1">sarah_designs</span>Minimalist interior vibes today. Thoughts?</p>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">2 hours ago</p>
</div>
</article>

<article className="bg-white border-y sm:border sm:rounded-xl border-slate-200 p-4">
<div className="flex items-center gap-2 mb-3 text-xs font-medium text-blue-600 bg-blue-50 w-max px-2 py-1 rounded">
<iconify-icon icon="solar:tag-linear"></iconify-icon> Marketplace Listing
                    </div>
<div className="flex gap-4">
<img className="w-24 h-24 rounded-lg object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 flex flex-col justify-between">
<div>
<h4 className="text-sm font-medium text-slate-900">Sony WH-1000XM4 Headphones</h4>
<p className="text-xs text-slate-500 mt-1 line-clamp-2">Lightly used, perfect condition. Comes with case and cables.</p>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-sm font-semibold text-slate-900">$199.00</span>
<button className="bg-slate-900 text-white text-xs px-4 py-1.5 rounded-md font-medium">Buy Now</button>
</div>
</div>
</div>
</article>
</main>

<nav className="fixed bottom-0 w-full bg-white border-t border-slate-200 flex justify-around p-3 z-40">
<button className="text-slate-900"><iconify-icon className="text-2xl" icon="solar:home-2-bold"></iconify-icon></button>
<button className="text-slate-400 hover:text-slate-900"><iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-slate-900"><iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-slate-900"><iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-slate-900" onclick="navTo('view-login')"><iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon></button>
</nav>

<div className="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4" id="ai-modal-adult">
<div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="toggleModal('ai-modal-adult')"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
<h2 className="text-base font-medium text-slate-900 mb-1">Generate Image</h2>
<p className="text-xs text-slate-500 mb-4">Describe an image. It generates as you type.</p>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none" placeholder="A futuristic city at night..." rows="2"></textarea>
<div className="mt-4 h-64 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 animate-pulse"></div>
<span className="relative z-10">Generating...</span>
</div>
<div className="mt-4 flex justify-end gap-2">
<button className="px-4 py-2 text-sm text-slate-600 font-medium" onclick="toggleModal('ai-modal-adult')">Cancel</button>
<button className="px-4 py-2 bg-slate-900 text-white text-sm rounded-lg font-medium">Post to Feed</button>
</div>
</div>
</div>
</div>

<div className="view hidden flex-col min-h-screen bg-slate-50 pb-16" id="view-business">

<header className="sticky top-0 z-40 bg-[#0f172a] text-white px-4 py-3 flex justify-between items-center shadow-sm">
<span className="tracking-tighter font-semibold text-lg flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:buildings-linear"></iconify-icon> ZoneUp Biz
                </span>
<div className="flex items-center gap-4">
<button className="text-slate-300 hover:text-white"><iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon></button>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1 transition-colors" onclick="toggleModal('ai-modal-biz')">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Studio
                    </button>
</div>
</header>
<main className="flex-1 w-full max-w-3xl mx-auto p-4 lg:py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-1 space-y-4">
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
<div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center text-2xl mb-3 border border-slate-200">
                            ☕
                        </div>
<h2 className="text-base font-semibold text-slate-900">Artisan Coffee Co.</h2>
<p className="text-xs text-slate-500 mb-3">Premium roasted beans delivered to your door.</p>
<a className="text-xs text-blue-600 font-medium flex items-center gap-1" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon> artisancoffee.com</a>
<div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
<div>
<p className="text-xs text-slate-500">Followers</p>
<p className="text-sm font-semibold text-slate-900">12.4k</p>
</div>
<div>
<p className="text-xs text-slate-500">Sales (30d)</p>
<p className="text-sm font-semibold text-slate-900">342</p>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Performance Overview</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Store Views</span>
<span className="text-green-600 font-medium">+14%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-blue-600 h-1.5 rounded-full" style={{width: '70%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Engagement</span>
<span className="text-slate-900 font-medium">8.2%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-amber-500 h-1.5 rounded-full" style={{width: '45%'}}></div></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 space-y-4">

<div className="flex border-b border-slate-200">
<button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Shop Catalog</button>
<button className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900">Recent Posts</button>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
<div className="h-32 bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<h4 className="text-sm font-medium text-slate-900 truncate">Ethiopian Yirgacheffe</h4>
<p className="text-xs text-slate-500 mb-2">Light Roast • 12oz</p>
<div className="flex justify-between items-center">
<span className="text-sm font-semibold text-slate-900">$18.00</span>
<button className="text-blue-600 bg-blue-50 p-1.5 rounded hover:bg-blue-100"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
<div className="h-32 bg-slate-100 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<h4 className="text-sm font-medium text-slate-900 truncate">Colombian Supremo</h4>
<p className="text-xs text-slate-500 mb-2">Medium Roast • 12oz</p>
<div className="flex justify-between items-center">
<span className="text-sm font-semibold text-slate-900">$16.50</span>
<button className="text-blue-600 bg-blue-50 p-1.5 rounded hover:bg-blue-100"><iconify-icon icon="solar:cart-plus-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full bg-[#0f172a] text-slate-400 flex justify-around p-3 z-40 md:hidden">
<button className="text-white flex flex-col items-center"><iconify-icon className="text-xl" icon="solar:shop-2-bold"></iconify-icon><span className="text-[10px] mt-1">Store</span></button>
<button className="hover:text-white flex flex-col items-center"><iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon><span className="text-[10px] mt-1">Insights</span></button>
<button className="hover:text-white flex flex-col items-center"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon><span className="text-[10px] mt-1">Inbox</span></button>
<button className="hover:text-white flex flex-col items-center" onclick="navTo('view-login')"><iconify-icon className="text-xl" icon="solar:logout-linear"></iconify-icon><span className="text-[10px] mt-1">Exit</span></button>
</nav>

<div className="hidden fixed inset-0 z-50 bg-[#0f172a]/80 backdrop-blur-sm flex items-center justify-center p-4" id="ai-modal-biz">
<div className="bg-white w-full max-w-lg rounded-xl shadow-2xl relative overflow-hidden">
<div className="bg-blue-50 border-b border-blue-100 p-4 flex justify-between items-center">
<h2 className="text-sm font-semibold text-blue-900 flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:magic-stick-3-bold"></iconify-icon> AI Product Ad Generator</h2>
<button className="text-slate-400 hover:text-slate-600" onclick="toggleModal('ai-modal-biz')"><iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="p-5">
<label className="block text-xs font-medium text-slate-700 mb-1">Product Description</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded text-sm p-3 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none" placeholder="A bag of coffee beans sitting on a wooden table with morning sunlight..." rows="2"></textarea>
<div className="mt-4 bg-slate-100 aspect-video rounded border border-slate-200 flex flex-col items-center justify-center text-slate-400">
<iconify-icon className="text-3xl mb-2" icon="solar:gallery-wide-linear"></iconify-icon>
<span className="text-xs">Generated image preview</span>
</div>
</div>
<div className="bg-slate-50 border-t border-slate-100 p-4 flex justify-end gap-2">
<button className="px-4 py-2 text-xs font-medium text-slate-600" onclick="toggleModal('ai-modal-biz')">Close</button>
<button className="px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700">Add to Catalog</button>
</div>
</div>
</div>
</div>

<div className="view hidden flex flex-col md:flex-row min-h-screen bg-slate-50" id="view-admin">

<aside className="w-full md:w-64 bg-[#0a101f] text-slate-300 flex flex-col shrink-0">
<div className="p-5 flex items-center justify-between border-b border-white/10">
<span className="tracking-tighter font-semibold text-lg text-white flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:shield-keyhole-linear"></iconify-icon> Admin
                    </span>
<button className="md:hidden text-white" onclick="navTo('view-login')"><iconify-icon icon="solar:logout-linear"></iconify-icon></button>
</div>
<nav className="flex-1 p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-blue-600/10 text-blue-400 rounded-md text-sm font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon> Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Users
                    </a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md text-sm font-medium transition-colors flex justify-between" href="#">
<div className="flex items-center gap-3"><iconify-icon className="text-lg" icon="solar:flag-linear"></iconify-icon> Reports</div>
<span className="bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded">3 New</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon> Content Control
                    </a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon> Zone Config
                    </a>
</nav>
<div className="p-4 border-t border-white/10 text-xs">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center font-semibold">C</div>
<div>
<p className="text-white font-medium">Clovis</p>
<p className="text-slate-500 opacity-80">Admin</p>
</div>
</div>
<button className="text-slate-500 hover:text-white flex items-center gap-1 mt-2 transition-colors" onclick="navTo('view-login')"><iconify-icon icon="solar:logout-linear"></iconify-icon> Logout</button>
</div>
</aside>

<main className="flex-1 p-4 md:p-8 overflow-y-auto">
<header className="mb-8">
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Platform Overview</h1>
<p className="text-sm text-slate-500">Welcome back, Clovis. Here is what is happening today.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Users</p>
<iconify-icon className="text-slate-400 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900">45,231</h2>
<p className="text-xs text-green-600 mt-1 flex items-center gap-1"><iconify-icon icon="solar:arow-up-linear"></iconify-icon> +124 today</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Active Posts</p>
<iconify-icon className="text-slate-400 text-lg" icon="solar:gallery-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900">1.2M</h2>
<p className="text-xs text-green-600 mt-1 flex items-center gap-1"><iconify-icon icon="solar:arow-up-linear"></iconify-icon> +8,302 today</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pending Reports</p>
<iconify-icon className="text-red-400 text-lg" icon="solar:flag-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900">12</h2>
<p className="text-xs text-slate-500 mt-1">Requires attention</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Recent Users</h3>
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-blue-400" placeholder="Search users..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50 text-xs uppercase text-slate-500 font-medium">
<tr>
<th className="px-5 py-3 font-medium">User</th>
<th className="px-5 py-3 font-medium">Zone</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-xs">A</div>
<div>
<p className="font-medium text-slate-900">Alice Smith</p>
<p className="text-xs text-slate-500">alice@example.com</p>
</div>
</td>
<td className="px-5 py-3"><span className="px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-medium rounded">Children</span></td>
<td className="px-5 py-3"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active</span></td>
<td className="px-5 py-3 text-right">
<button className="text-slate-400 hover:text-blue-600 px-1"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-red-600 px-1"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-xs">M</div>
<div>
<p className="font-medium text-slate-900">Mark Johnson</p>
<p className="text-xs text-slate-500">mark.j@company.com</p>
</div>
</td>
<td className="px-5 py-3"><span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-medium rounded">Business</span></td>
<td className="px-5 py-3"><span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active</span></td>
<td className="px-5 py-3 text-right">
<button className="text-slate-400 hover:text-blue-600 px-1"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-red-600 px-1"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-5 py-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-semibold text-xs">B</div>
<div>
<p className="font-medium text-slate-900">BadUser99</p>
<p className="text-xs text-slate-500">hidden@email.com</p>
</div>
</td>
<td className="px-5 py-3"><span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-medium rounded">Adult</span></td>
<td className="px-5 py-3"><span className="flex items-center gap-1.5 text-red-500"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Suspended</span></td>
<td className="px-5 py-3 text-right">
<button className="text-slate-400 hover:text-blue-600 px-1"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-red-600 px-1"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>
</div>



    </>
  );
}
