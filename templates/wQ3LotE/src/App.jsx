import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen">

<aside className="w-64 bg-purple-100 border-r border-purple-200 flex flex-col">
<div className="py-6 px-8 flex items-center gap-2">
<svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6"></path>
</svg>
<span className="text-2xl font-semibold text-purple-700">MedixPro</span>
</div>
<nav className="flex-1 mt-8">
<ul className="space-y-2">
<li>
<a className="flex items-center gap-3 px-8 py-2 rounded-lg font-medium bg-purple-200 text-purple-800" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 12l9-9 9 9-9 9-9-9z"></path></svg>
              Dashboard
            </a>
</li>
<li>
<a className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-purple-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 21V7a2 2 0 0 0-2-2h-2V3H9v2H7a2 2 0 0 0-2 2v14"></path></svg>
              Patients
            </a>
</li>
<li>
<a className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-purple-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 12v4m8 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"></path></svg>
              Appointments
            </a>
</li>
<li>
<a className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-purple-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a7 7 0 1 0-14.8 0"></path></svg>
              Staff
            </a>
</li>
<li>
<a className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-purple-200 transition" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Reports
            </a>
</li>
</ul>
</nav>
<div className="mb-6 mt-auto px-8">
<button className="w-full bg-purple-500 text-white py-2 rounded-lg font-semibold hover:bg-purple-600 transition">+ Add Patient</button>
</div>
</aside>

<main className="flex-1 p-8">

<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
<h1 className="text-3xl font-bold text-purple-700">Dashboard</h1>
<div className="flex items-center gap-4">
<input className="px-4 py-2 rounded-full border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-200 bg-white text-gray-700" placeholder="Search patient..." type="text"/>
<img alt="Profile" className="w-10 h-10 rounded-full border-2 border-purple-300" src="https://randomuser.me/api/portraits/men/85.jpg"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
<div className="bg-white shadow-md rounded-xl p-6 border border-purple-100">
<div className="flex items-center gap-3 mb-2">
<svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4l3 3"></path></svg>
<span className="text-sm text-purple-500">Appointments</span>
</div>
<span className="text-2xl font-bold">128</span>
</div>
<div className="bg-white shadow-md rounded-xl p-6 border border-purple-100">
<div className="flex items-center gap-3 mb-2">
<svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 21V7a2 2 0 0 0-2-2h-2V3H9v2H7a2 2 0 0 0-2 2v14"></path></svg>
<span className="text-sm text-purple-500">Patients</span>
</div>
<span className="text-2xl font-bold">452</span>
</div>
<div className="bg-white shadow-md rounded-xl p-6 border border-purple-100">
<div className="flex items-center gap-3 mb-2">
<svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-purple-500">Doctors</span>
</div>
<span className="text-2xl font-bold">34</span>
</div>
<div className="bg-white shadow-md rounded-xl p-6 border border-purple-100">
<div className="flex items-center gap-3 mb-2">
<svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 14v6M8 14v6M12 14v6"></path></svg>
<span className="text-sm text-purple-500">Beds Available</span>
</div>
<span className="text-2xl font-bold">76</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<section className="col-span-2 bg-white shadow-md rounded-xl border border-purple-100 p-6 overflow-x-auto">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-purple-700">Recent Patients</h2>
<a className="text-purple-500 font-medium hover:underline text-sm" href="#">View all</a>
</div>
<table className="min-w-full text-sm">
<thead>
<tr className="bg-purple-50 text-purple-700">
<th className="py-3 px-4 font-bold text-left">Name</th>
<th className="py-3 px-4 font-bold text-left">Age</th>
<th className="py-3 px-4 font-bold text-left">Status</th>
<th className="py-3 px-4 font-bold text-left">Room</th>
</tr>
</thead>
<tbody className="text-gray-700">
<tr className="border-t border-purple-50">
<td className="py-2 px-4">Sophie Turner</td>
<td className="py-2 px-4">29</td>
<td className="py-2 px-4">
<span className="px-2 py-1 bg-green-100 text-green-600 rounded">Admitted</span>
</td>
<td className="py-2 px-4">204B</td>
</tr>
<tr className="border-t border-purple-50">
<td className="py-2 px-4">Michael Knight</td>
<td className="py-2 px-4">45</td>
<td className="py-2 px-4">
<span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Observation</span>
</td>
<td className="py-2 px-4">312A</td>
</tr>
<tr className="border-t border-purple-50">
<td className="py-2 px-4">Emma Watson</td>
<td className="py-2 px-4">34</td>
<td className="py-2 px-4">
<span className="px-2 py-1 bg-red-100 text-red-600 rounded">Critical</span>
</td>
<td className="py-2 px-4">115C</td>
</tr>
<tr className="border-t border-purple-50">
<td className="py-2 px-4">John Doe</td>
<td className="py-2 px-4">51</td>
<td className="py-2 px-4">
<span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">Discharged</span>
</td>
<td className="py-2 px-4">--</td>
</tr>
</tbody>
</table>
</section>

<section className="bg-white shadow-md rounded-xl border border-purple-100 p-6 flex flex-col">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-purple-700">Upcoming Appointments</h2>
<a className="text-purple-500 font-medium hover:underline text-sm" href="#">View all</a>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center">
<div>
<p className="font-medium text-gray-800">Dr. Alicia Woods</p>
<span className="text-sm text-gray-500">Cardiology - 10:30am</span>
</div>
<span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">Room 210</span>
</li>
<li className="flex justify-between items-center">
<div>
<p className="font-medium text-gray-800">Dr. Sam Rich</p>
<span className="text-sm text-gray-500">Dermatology - 11:00am</span>
</div>
<span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">Room 118</span>
</li>
<li className="flex justify-between items-center">
<div>
<p className="font-medium text-gray-800">Dr. Julia King</p>
<span className="text-sm text-gray-500">General - 12:00pm</span>
</div>
<span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">Room 305</span>
</li>
<li className="flex justify-between items-center">
<div>
<p className="font-medium text-gray-800">Dr. David Lin</p>
<span className="text-sm text-gray-500">Pediatrics - 1:30pm</span>
</div>
<span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">Room 226</span>
</li>
</ul>
</section>
</div>
</main>
</div>

    </>
  );
}
