import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-200 fixed top-0 left-0 z-30">
<div className="h-20 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tight text-gray-900">MedQ Bank</span>
</div>
<nav className="flex-1 pt-6">
<ul className="space-y-2">
<li>
<a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<svg className="lucide lucide-home w-5 h-5 mr-3 stroke-gray-500"></svg>
            Dashboard
          </a>
</li>
<li>
<a className="flex items-center px-6 py-2 text-gray-900 bg-gray-100 rounded-lg font-semibold" href="#">
<svg className="lucide lucide-book-open w-5 h-5 mr-3 stroke-gray-700"></svg>
            Question Banks
          </a>
</li>
<li>
<a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<svg className="lucide lucide-bar-chart w-5 h-5 mr-3 stroke-gray-500"></svg>
            Analytics
          </a>
</li>
<li>
<a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<svg className="lucide lucide-user w-5 h-5 mr-3 stroke-gray-500"></svg>
            Profile
          </a>
</li>
</ul>
</nav>
<div className="px-6 py-6 border-t border-gray-100">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
<svg className="lucide lucide-play-circle w-5 h-5 stroke-white"></svg>
        Start New Quiz
      </button>
</div>
</aside>

<div className="md:pl64 flex flex-col min-h-screen">

<header className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-white">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Question Bank</h1>
<p className="mt-1 text-gray-500 text-sm">Browse, search, and filter medical MCQ sets.</p>
</div>
<div className="flex items-center gap-4">
<button className="relative">
<svg className="lucide lucide-bell w-6 h-6 stroke-gray-500"></svg>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white"></span>
</button>
<img alt="Profile" className="w-9 h-9 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
</div>
</header>

<section className="px-4 md:px-8 py-6">
<div className="flex flex-col md:flex-row md:items-center gap-4">

<div className="relative flex-1">
<input className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium transition" placeholder="Search question banks..." type="text"/>
<svg className="lucide lucide-search w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none"></svg>
</div>

<div className="flex gap-2">
<div className="relative">
<select className="appearance-none px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm pr-8 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
<option>All Years</option>
<option>2024</option>
<option>2023</option>
<option>2022</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></svg>
</div>
<div className="relative">
<select className="appearance-none px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm pr-8 text-gray-700 font-medium focus:outline-none focus-2 focus:ring-blue-500">
<option>All Topics</option>
<option>Cardiology</option>
<option>Respiratory</option>
<option>Neurology</option>
<option>Gastroenterology</option>
</select>
<svg className="lucide lucide-chevron-down w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></svg>
</div>
</div>
</div>
</section>

<main className="flex-1 px-4 md:px-8 pb-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition hover:shadow-md flex flex-col">
<img alt="Cardiology" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-gray-900 text-lg tracking-tight">Cardiology</h3>
<span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">2023</span>
</div>
<p className="text-gray-500 text-sm mb-2 flex-1">320 questions · Avg. accuracy: 85%</p>
<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
<svg className="lucide lucide-clock w-4 h-4"></svg>
              Last taken: 2h ago
            </div>
<div className="flex gap-2 mt-auto">
<button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition">
<svg className="lucide lucide-play w-4 h-4 stroke-blue-700"></svg>
                Practice
              </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
<svg className="lucide lucide-eye w-4 h-4 stroke-gray-700"></svg>
                Review
              </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition hover:shadow-md flex flex-col">
<img alt="Respiratory" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80"/>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-gray-900 text-lg tracking-tight">Respiratory</h3>
<span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">2024</span>
</div>
<p className="text-gray-500 text-sm mb-2 flex-1">210 questions · Avg. accuracy: 79%</p>
<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
<svg className="lucide lucide-clock w-4 h-4"></svg>
              Last taken: 1d ago
            </div>
<div className="flex gap-2 mt-auto">
<button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition">
<svg className="lucide lucide-play w-4 h-4 stroke-blue-700"></svg>
                Practice
              </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
<svg className="lucide lucide-eye w-4 h-4 stroke-gray-700"></svg>
                Review
              </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition hover:shadow-md flex flex-col">
<img alt="Neurology" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-gray-900 text-lg tracking-tight">Neurology</h3>
<span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">2022</span>
</div>
<p className="text-gray-500 text-sm mb-2 flex-1">185 questions · Avg. accuracy: 82%</p>
<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
<svg className="lucide lucide-clock w-4 h-4"></svg>
              Last taken: 3d ago
            </div>
<div className="flex gap-2 mt-auto">
<button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition">
<svg className="lucide lucide-play w-4 h-4 stroke-blue-700"></svg>
                Practice
              </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
<svg className="lucide lucide-eye w-4 h-4 stroke-gray-700"></svg>
                Review
              </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition hover:shadow-md flex flex-col">
<img alt="Gastroenterology" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-gray-900 text-lg tracking-tight">Gastroenterology</h3>
<span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">2023</span>
</div>
<p className="text-gray-500 text-sm mb-2 flex-1">150 questions · Avg. accuracy: 75%</p>
<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
<svg className="lucide lucide-clock w-4 h-4"></svg>
              Last taken: 2d ago
            </div>
<div className="flex gap-2 mt-auto">
<button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition">
<svg className="lucide lucide-play w-4 h-4 stroke-blue-700"></svg>
                Practice
              </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
<svg className="lucide lucide-eye w-4 h-4 stroke-gray-700"></svg>
                Review
              </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition hover:shadow-md flex flex-col">
<img alt="Endocrinology" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80"/>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-gray-900 text-lg tracking-tight">Endocrinology</h3>
<span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">2024</span>
</div>
<p className="text-gray-500 text-sm mb-2 flex-1">142 questions · Avg. accuracy: 88%</p>
<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
<svg className="lucide lucide-clock w-4 h-4"></svg>
              Last taken: 5d ago
            </div>
<div className="flex gap-2 mt-auto">
<button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition">
<svg className="lucide lucide-play w-4 h-4 stroke-blue-700"></svg>
                Practice
              </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
<svg className="lucide lucide-eye w-4 h-4 stroke-gray-700"></svg>
                Review
              </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group transition hover:shadow-md flex flex-col">
<img alt="Renal Medicine" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="p-5 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-gray-900 text-lg tracking-tight">Renal Medicine</h3>
<span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 rounded font-medium">2022</span>
</div>
<p className="text-gray-500 text-sm mb-2 flex-1">115 questions · Avg. accuracy: 74%</p>
<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
<svg className="lucide lucide-clock w-4 h-4"></svg>
              Last taken: 4d ago
            </div>
<div className="flex gap-2 mt-auto">
<button className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition">
<svg className="lucide lucide-play w-4 h-4 stroke-blue-700"></svg>
                Practice
              </button>
<button className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition">
<svg className="lucide lucide-eye w-4 h-4 stroke-gray-700"></svg>
                Review
              </button>
</div>
</div>
</div>
</div>

<div className="mt-10 border-t border-gray-100 pt-6 flex justify-center">
<nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm">
<button className="px-3 py-2 rounded-l-lg border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
<svg className="lucide lucide-chevron-left w-4 h-4"></svg>
</button>
<button className="px-3 py-2 border-t border-b border-gray-200 bg-blue-50 text-blue-700 font-semibold">1</button>
<button className="px-3 py-2 border-t border-b border-gray-200 bg-white text-gray-600 hover:bg-gray-50">2</button>
<button className="px-3 py-2 border-t border-b border-gray-200 bg-white text-gray-600 hover:bg-gray-50">3</button>
<span className="px-3 py-2 border-t border-b border-gray-200 bg-white text-gray-400">...</span>
<button className="px-3 py-2 rounded-r-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
<svg className="lucide lucide-chevron-right w-4 h-4"></svg>
</button>
</nav>
</div>
</main>
</div>


    </>
  );
}
