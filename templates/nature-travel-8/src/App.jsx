import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-100 h-16 sticky top-0 z-40 w-full shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
<div className="max-w-screen-2xl mx-auto px-4 h-full flex items-center justify-between">

<div className="flex items-center gap-8">
<div className="flex items-center gap-2 text-gray-900">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm uppercase">Nature Travel Group</span>
</div>
<nav className="hidden md:flex h-16">
<a className="flex items-center px-1 border-b-2 border-[#0066CC] text-[#0066CC] text-sm font-medium h-full mr-6" href="#">Dashboard</a>
<a className="flex items-center px-1 border-b-2 border-transparent hover:text-gray-600 text-gray-500 text-sm h-full mr-6 transition-colors" href="#">Templates</a>
<a className="flex items-center px-1 border-b-2 border-transparent hover:text-gray-600 text-gray-500 text-sm h-full mr-6 transition-colors" href="#">Departures</a>
<a className="flex items-center px-1 border-b-2 border-transparent hover:text-gray-600 text-gray-500 text-sm h-full mr-6 transition-colors" href="#">Reports</a>
<a className="flex items-center px-1 border-b-2 border-transparent hover:text-gray-600 text-gray-500 text-sm h-full transition-colors" href="#">Settings</a>
</nav>
</div>

<div className="flex items-center gap-4">
<button className="relative text-gray-500 hover:text-gray-700">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500"></span>
</button>
<div className="flex items-center gap-2 cursor-pointer">
<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">YM</div>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</header>

<section className="bg-[#E6F2FF] py-10 border-b border-[#D6E6F7]">
<div className="max-w-screen-lg mx-auto px-4 text-center">
<h1 className="text-3xl text-[#333333] font-semibold tracking-tight mb-2">Trip Catalog Management</h1>
<p className="text-[#666666] text-base mb-8">Manage trip templates and group departures across NTB, NTA, NTE, NTN</p>
<div className="flex items-center justify-center gap-4">
<button className="flex items-center gap-2 bg-[#0066CC] hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Create New Trip Template
                </button>
<button className="flex items-center gap-2 bg-transparent border border-[#0066CC] text-[#0066CC] hover:bg-blue-50 px-5 py-3 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Schedule Departure
                </button>
</div>
</div>
</section>

<main className="flex-grow w-full max-w-screen-2xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">

<div className="bg-white rounded-lg p-3 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 card-shadow">

<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[#0066CC] text-white text-xs font-medium border border-[#0066CC]">All</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-gray-600 text-xs font-medium border border-[#00AA44] hover:bg-green-50 transition-colors">NTB</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-gray-600 text-xs font-medium border border-[#0066CC] hover:bg-blue-50 transition-colors">NTA</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-gray-600 text-xs font-medium border border-[#8B5CF6] hover:bg-purple-50 transition-colors">NTE</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-gray-600 text-xs font-medium border border-[#FF8800] hover:bg-orange-50 transition-colors">NTN</button>
</div>

<div className="relative flex-1 max-w-md w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 focus:border-[#0066CC] transition-all" placeholder="Search trips by name, destination, or species..." type="text"/>
</div>

<div className="flex items-center gap-3 w-full md:w-auto justify-end">
<div className="flex bg-gray-100 p-1 rounded-lg">
<button className="p-1.5 bg-white shadow-sm rounded text-gray-800"><iconify-icon icon="solar:gallery-grid-linear" strokeWidth="1.5" width="18"></iconify-icon></button>
<button className="p-1.5 text-gray-400 hover:text-gray-600"><iconify-icon icon="solar:list-linear" strokeWidth="1.5" width="18"></iconify-icon></button>
</div>
<div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 cursor-pointer bg-white hover:bg-gray-50">
<span className="text-xs text-gray-500">Sort:</span>
<span className="text-xs font-medium text-gray-800">Recent</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="bg-white p-5 rounded-lg card-shadow flex flex-col justify-between h-32 relative overflow-hidden group">
<iconify-icon className="absolute top-5 right-5 text-blue-100 group-hover:text-blue-200 transition-colors" icon="solar:documents-minimalistic-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<h3 className="text-3xl font-semibold text-gray-800 tracking-tight">24</h3>
<p className="text-sm text-gray-500 font-medium mt-1">Active Trip Templates</p>
</div>
<div className="flex items-center gap-1 text-[#00AA44] text-xs font-medium">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="2" width="14"></iconify-icon>
<span>+3 this month</span>
</div>
</div>

<div className="bg-white p-5 rounded-lg card-shadow flex flex-col justify-between h-32 relative overflow-hidden group">
<iconify-icon className="absolute top-5 right-5 text-gray-100 group-hover:text-gray-200 transition-colors" icon="solar:calendar-mark-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<h3 className="text-3xl font-semibold text-gray-800 tracking-tight">18</h3>
<p className="text-sm text-gray-500 font-medium mt-1">Departures Next 6 Months</p>
</div>
<div className="text-gray-400 text-xs">
<span className="font-medium text-gray-600">12 confirmed</span>, 6 provisional
                </div>
</div>

<div className="bg-white p-5 rounded-lg card-shadow flex flex-col justify-between h-32 relative overflow-hidden">
<iconify-icon className="absolute top-5 right-5 text-green-100" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xl font-semibold text-[#00AA44] tracking-tight">Synced</span>
<iconify-icon className="text-[#00AA44]" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-gray-500 font-medium">Website Sync Status</p>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs text-gray-400">Last sync: 2 hours ago</span>
<button className="text-xs border border-gray-200 hover:bg-gray-50 rounded px-2 py-1 text-gray-600 transition-colors">Sync Now</button>
</div>
</div>

<div className="bg-white p-5 rounded-lg card-shadow flex flex-col justify-between h-32 relative overflow-hidden group">
<iconify-icon className="absolute top-5 right-5 text-orange-100 group-hover:text-orange-200 transition-colors" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div>
<h3 className="text-3xl font-semibold text-gray-800 tracking-tight">5</h3>
<p className="text-sm text-gray-500 font-medium mt-1">Templates in Development</p>
</div>
<a className="flex items-center gap-1 text-[#0066CC] text-xs font-medium hover:underline" href="#">
<span>Review Drafts</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-8">

<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="bg-white rounded-lg card-shadow flex flex-col h-full transition-transform duration-200">
<div className="relative h-48 w-full">
<img alt="Mountain Gorilla" className="w-full h-full object-cover rounded-t-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c27ef935-2a71-44d2-bc3b-7565902dd391_800w.png"/>
<span className="absolute top-3 left-3 bg-[#00AA44] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">NTB</span>
<span className="absolute top-3 right-3 bg-[#00AA44] text-white text-[10px] font-bold px-3 py-1 rounded-full">Published</span>
</div>
<div className="p-4 flex-grow flex flex-col">
<div className="flex gap-2 mb-2 flex-wrap">
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">East Africa</span>
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Primate Focus</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">Uganda Ultimate Primate Safari</h3>
<p className="text-xs text-gray-400 mb-3">8 days / 7 nights</p>
<p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">Encounter Mountain Gorillas, Chimpanzees, and 13 primate species across Kibale and Bwindi...</p>
<div className="mt-auto space-y-3">
<div className="grid grid-cols-3 gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:calendar-linear" width="16"></iconify-icon>
<span>3 deps</span>
</div>
<div className="flex flex-col items-center w-full">
<div className="flex justify-between w-full mb-1 px-1">
<span className="text-[10px]">24/36</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="bg-[#FFAA00] h-full rounded-full" style={{width: '67%'}}></div>
</div>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px]">12 Jan</span>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 border border-gray-200 rounded text-xs font-medium py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-700">Edit Template</button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:eye-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon></button>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-lg card-shadow flex flex-col h-full transition-transform duration-200">
<div className="relative h-48 w-full">
<img alt="Jaguar" className="w-full h-full object-cover rounded-t-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6a46b10-4a8f-4a9f-8d86-3fca7b11519b_800w.jpg"/>
<span className="absolute top-3 left-3 bg-[#00AA44] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">NTB</span>
<span className="absolute top-3 right-3 bg-[#00AA44] text-white text-[10px] font-bold px-3 py-1 rounded-full">Published</span>
</div>
<div className="p-4 flex-grow flex flex-col">
<div className="flex gap-2 mb-2 flex-wrap">
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">South America</span>
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Birding</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">Pantanal Wildlife Expedition</h3>
<p className="text-xs text-gray-400 mb-3">10 days</p>
<p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">Explore the world's largest tropical wetland. Encounter Jaguars, Hyacinth Macaws, Giant Otters...</p>
<div className="mt-auto space-y-3">
<div className="grid grid-cols-3 gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:calendar-linear" width="16"></iconify-icon>
<span>2 deps</span>
</div>
<div className="flex flex-col items-center w-full">
<div className="flex justify-between w-full mb-1 px-1">
<span className="text-[10px]">18/24</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="bg-[#00AA44] h-full rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px]">2h ago</span>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 border border-gray-200 rounded text-xs font-medium py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-700">Edit Template</button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:eye-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon></button>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-lg card-shadow flex flex-col h-full transition-transform duration-200">
<div className="relative h-48 w-full">
<img alt="Polar Bear" className="w-full h-full object-cover rounded-t-lg" src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-[#8B5CF6] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">NTE</span>
<span className="absolute top-3 right-3 bg-[#00AA44] text-white text-[10px] font-bold px-3 py-1 rounded-full">Published</span>
</div>
<div className="p-4 flex-grow flex flex-col">
<div className="flex gap-2 mb-2 flex-wrap">
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Arctic</span>
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Expedition</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">Svalbard Arctic Expedition</h3>
<p className="text-xs text-gray-400 mb-3">11 days</p>
<p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">Arctic wilderness expedition aboard MS Spitsbergen. Polar bears, Arctic fox, walrus...</p>
<div className="mt-auto space-y-3">
<div className="grid grid-cols-3 gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:calendar-linear" width="16"></iconify-icon>
<span>1 dep</span>
</div>
<div className="flex flex-col items-center w-full">
<div className="flex justify-between w-full mb-1 px-1">
<span className="text-[10px]">14/16</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="bg-[#FF8800] h-full rounded-full" style={{width: '88%'}}></div>
</div>
<span className="text-[9px] text-[#FF8800] mt-0.5">Low Availability</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px]">1d ago</span>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 border border-gray-200 rounded text-xs font-medium py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-700">Edit Template</button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:eye-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon></button>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-lg card-shadow flex flex-col h-full transition-transform duration-200">
<div className="relative h-48 w-full">
<img alt="Orangutan" className="w-full h-full object-cover rounded-t-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7219e189-3270-4c35-8131-5ebc455133a7_800w.jpg"/>
<span className="absolute top-3 left-3 bg-[#0066CC] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">NTA</span>
<span className="absolute top-3 right-3 bg-[#FFAA00] text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full">Draft</span>
</div>
<div className="p-4 flex-grow flex flex-col">
<div className="flex gap-2 mb-2 flex-wrap">
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">SE Asia</span>
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Primate Focus</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">Sumatra Orangutan Adventure</h3>
<p className="text-xs text-gray-400 mb-3">14 days</p>
<p className="text-xs text-gray-600 mb-4 line-clamp-2 leading-relaxed">Conservation-focused journey through Sumatra's rainforests. Orangutan tracking, Leuser...</p>
<div className="mt-auto space-y-3">
<div className="grid grid-cols-3 gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="">Aug '27</span>
</div>
<div className="flex flex-col items-center w-full">
<div className="flex justify-between w-full mb-1 px-1">
<span className="text-[10px]">0/20</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="bg-gray-300 h-full rounded-full" style={{width: '0%'}}></div>
</div>
<span className="text-[9px] text-gray-400 mt-0.5">Not yet open</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="mb-1 text-gray-400" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px]">4h ago</span>
</div>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 border border-gray-200 rounded text-xs font-medium py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-700">Continue Edit</button>
<button className="text-gray-400 hover:text-[#0066CC] p-1"><iconify-icon icon="solar:eye-linear" width="18"></iconify-icon></button>
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon></button>
</div>
</div>
</div>
</article>

<article className="bg-white rounded-lg card-shadow flex flex-col h-full transition-transform duration-200">
<div className="relative h-48 w-full bg-gray-100">
<img alt="Madagascar Lemur" className="w-full h-full object-cover rounded-t-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c84d103b-c4e5-46c8-aa01-781550fd9fba_800w.png"/>
<span className="absolute top-3 left-3 bg-[#00AA44] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">NTB</span>
<span className="absolute top-3 right-3 bg-[#FF8800] text-white text-[10px] font-bold px-3 py-1 rounded-full">Content Dev</span>
</div>
<div className="p-4 flex-grow flex flex-col">
<div className="flex gap-2 mb-2 flex-wrap">
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Madagascar</span>
<span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Birding</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">Madagascar Wildlife Highlights</h3>
<p className="text-xs text-gray-400 mb-3">12 days</p>
<p className="text-xs text-gray-400 italic mb-4">Description pending...</p>
<div className="mt-auto space-y-3">
<div className="bg-orange-50 border border-orange-100 rounded p-2 flex items-center gap-2">
<iconify-icon className="text-[#FF8800]" icon="solar:danger-circle-linear" width="16"></iconify-icon>
<span className="text-[10px] text-orange-800 font-medium">Complete species lists</span>
</div>
<div className="flex items-center gap-2 pt-1">
<button className="flex-1 border border-gray-200 rounded text-xs font-medium py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-colors text-gray-700">Edit Template</button>
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon></button>
</div>
</div>
</div>
</article>

<article className="bg-gray-50 rounded-lg border border-gray-200 flex flex-col h-full grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
<div className="relative h-48 w-full">
<img alt="Lion" className="w-full h-full object-cover rounded-t-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b8d5b2d-05ce-4141-91d7-5baccee42ebe_800w.png"/>
<span className="absolute top-3 left-3 bg-[#0066CC] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">NTA</span>
<span className="absolute top-3 right-3 bg-[#999999] text-white text-[10px] font-bold px-3 py-1 rounded-full">Archived</span>
</div>
<div className="p-4 flex-grow flex flex-col">
<div className="flex gap-2 mb-2 flex-wrap">
<span className="text-[10px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">Southern Africa</span>
<span className="text-[10px] text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">Wildlife</span>
</div>
<h3 className="text-base font-semibold text-gray-600 mb-1 leading-tight">Southern Africa Wildlife Safari</h3>
<p className="text-xs text-gray-400 mb-3">Trip discontinued</p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-2 pt-1 mt-6">
<button className="flex-1 border border-gray-300 rounded text-xs font-medium py-1.5 text-gray-400 cursor-not-allowed">Edit Template</button>
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="solar:menu-dots-bold" width="18"></iconify-icon></button>
</div>
</div>
</div>
</article>
</div>

<div className="mt-10 text-center">
<p className="text-sm text-gray-500 mb-3">Showing 6 of 24 templates</p>
<button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors">Load More</button>
</div>
</div>

<aside className="lg:w-[300px] flex-shrink-0 w-full space-y-6">

<div className="bg-white rounded-lg p-5 card-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-gray-900 text-sm">Pending Tasks</h3>
<span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 text-gray-300 group-hover:text-[#0066CC] transition-colors">
<iconify-icon icon="solar:square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-xs text-gray-600 leading-snug group-hover:text-gray-900">Complete species list for Madagascar trip</span>
</li>
<li className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 text-gray-300 group-hover:text-[#0066CC] transition-colors">
<iconify-icon icon="solar:square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-xs text-gray-600 leading-snug group-hover:text-gray-900">Review SEO duplicates <span className="text-red-500 font-medium">(2 warnings)</span></span>
</li>
<li className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 text-gray-300 group-hover:text-[#0066CC] transition-colors">
<iconify-icon icon="solar:square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-xs text-gray-600 leading-snug group-hover:text-gray-900">Schedule Aug 2027 departures (5 trips)</span>
</li>
</ul>
</div>

<div className="bg-white rounded-lg p-5 card-shadow">
<h3 className="font-semibold text-gray-900 text-sm mb-4">Recent Activity</h3>
<div className="space-y-0 relative border-l border-gray-100 ml-1.5">

<div className="pl-4 pb-4 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-100 border-2 border-white ring-1 ring-[#0066CC]"></div>
<p className="text-xs text-gray-800 leading-snug mb-0.5"><span className="font-medium">Yolande</span> published 'Pantanal Birding'</p>
<span className="text-[10px] text-gray-400">2h ago</span>
</div>

<div className="pl-4 pb-4 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-100 border-2 border-white ring-1 ring-blue-300"></div>
<p className="text-xs text-gray-800 leading-snug mb-0.5"><span className="font-medium">Nadine</span> scheduled Sumatra departure</p>
<span className="text-[10px] text-gray-400">4h ago</span>
</div>

<div className="pl-4 pb-4 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-green-100 border-2 border-white ring-1 ring-[#00AA44]"></div>
<p className="text-xs text-gray-800 leading-snug mb-0.5">System synced to NTB website</p>
<span className="text-[10px] text-gray-400">4h ago</span>
</div>

<div className="pl-4 pb-4 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gray-100 border-2 border-white ring-1 ring-gray-300"></div>
<p className="text-xs text-gray-800 leading-snug mb-0.5"><span className="font-medium">Nicolette</span> updated Uganda capacity</p>
<span className="text-[10px] text-gray-400">6h ago</span>
</div>

<div className="pl-4 relative">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-100 border-2 border-white ring-1 ring-[#FF8800]"></div>
<p className="text-xs text-gray-800 leading-snug mb-0.5">New booking: Svalbard Jul 2026</p>
<span className="text-[10px] text-gray-400">8h ago</span>
</div>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
