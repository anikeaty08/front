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
      

<nav className="bg-blue-900 text-white shadow">
<div className="container mx-auto flex justify-between items-center py-4 px-6">
<span className="text-2xl font-bold tracking-tight">SkilledWorks Portal</span>
<div className="space-x-6">
<a className="hover:underline" href="#post-job">Employers</a>
<a className="hover:underline" href="#view-jobs">Employees</a>
<a className="hover:underline" href="#admin">Admin</a>
</div>
</div>
</nav>

<section className="bg-blue-800 text-white py-16">
<div className="container mx-auto text-center px-4">
<h1 className="text-4xl md:text-5xl font-bold mb-4">Connecting Skilled Workers with Great Opportunities</h1>
<p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Employers, post your jobs. Employees, find your next skilled work and submit your CV. Admins, manage job listings with ease.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<a className="bg-white text-blue-800 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition" href="#post-job">Post a Job</a>
<a className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition" href="#view-jobs">Browse Jobs</a>
<a className="bg-gray-800 text-white font-semibold px-6 py-3 rounded shadow hover:bg-gray-900 transition" href="#admin">Admin Panel</a>
</div>
</div>
</section>
<main className="container mx-auto my-12 px-4 grid md:grid-cols-3 gap-12">

<section className="bg-white rounded-lg shadow-lg p-8 col-span-1" id="post-job">
<h2 className="text-2xl font-bold mb-4 text-blue-900">Post a Job <span className="text-blue-500">[Employers]</span></h2>
<form className="space-y-4">
<div>
<label className="block mb-1 font-semibold">Job Title</label>
<input className="w-full border rounded px-3 py-2" placeholder="e.g. Carpenter, Mason, Electrician" type="text"/>
</div>
<div>
<label className="block mb-1 font-semibold">Job Category</label>
<select className="w-full border rounded px-3 py-2">
<option>Carpenter</option>
<option>Mason</option>
<option>Electrician</option>
<option>Plumber</option>
<option>Painter</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block mb-1 font-semibold">Job Description</label>
<textarea className="w-full border rounded px-3 py-2" placeholder="Brief description of the job..." rows="3"></textarea>
</div>
<div>
<label className="block mb-1 font-semibold">Location</label>
<input className="w-full border rounded px-3 py-2" placeholder="e.g. Lagos, Abuja" type="text"/>
</div>
<div>
<label className="block mb-1 font-semibold">Contact Email</label>
<input className="w-full border rounded px-3 py-2" placeholder="employer@example.com" type="email"/>
</div>
<button className="w-full bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800 transition" type="submit">Post Job</button>
</form>
</section>

<section className="col-span-1 md:col-span-2" id="view-jobs">
<h2 className="text-2xl font-bold mb-4 text-blue-900">Available Skilled Jobs <span className="text-blue-500">[Employees]</span></h2>
<div className="space-y-6">

<div className="bg-white rounded-lg shadow flex flex-col md:flex-row items-start md:items-center p-6">
<div className="flex-1">
<h3 className="text-xl font-bold text-blue-800">Carpenter Needed</h3>
<span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Carpenter</span>
<p className="mt-2 text-gray-700">Seeking experienced carpenter for furniture making. Must be skilled and reliable.</p>
<div className="mt-1 text-sm text-gray-600">Location: Lagos</div>
</div>
<button className="mt-4 md:mt-0 ml-0 md:ml-8 bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition" onclick="document.getElementById('cv-modal').classList.remove('hidden')">Apply / Submit CV</button>
</div>

<div className="bg-white rounded-lg shadow flex flex-col md:flex-row items-start md:items-center p-6">
<div className="flex-1">
<h3 className="text-xl font-bold text-blue-800">Mason for Building Project</h3>
<span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-semibold">Mason</span>
<p className="mt-2 text-gray-700">Immediate opening for skilled mason. Previous experience required.</p>
<div className="mt-1 text-sm text-gray-600">Location: Abuja</div>
</div>
<button className="mt-4 md:mt-0 ml-0 md:ml-8 bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-700 transition" onclick="document.getElementById('cv-modal').classList.remove('hidden')">Apply / Submit CV</button>
</div>

</div>
</section>
</main>

<div className="hidden fixed inset-0 z-40 bg-black bg-opacity-40 flex items-center justify-center" id="cv-modal">
<div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-bold text-blue-900">Submit Your CV</h2>
<button className="text-gray-500 hover:text-gray-900" onclick="document.getElementById('cv-modal').classList.add('hidden')">×</button>
</div>
<form className="space-y-4">
<div>
<label className="block mb-1 font-semibold">Full Name</label>
<input className="w-full border rounded px-3 py-2" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block mb-1 font-semibold">Email Address</label>
<input className="w-full border rounded px-3 py-2" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block mb-1 font-semibold">Upload CV</label>
<input className="w-full border rounded px-3 py-2" type="file"/>
</div>
<button className="w-full bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800 transition" type="submit">Submit</button>
</form>
</div>
</div>

<section className="container mx-auto my-16 px-4" id="admin">
<div className="bg-white rounded-lg shadow-lg p-8">
<h2 className="text-2xl font-bold mb-4 text-blue-900">Admin Panel <span className="text-gray-500 text-base font-normal">[Manage Skilled Job Listings]</span></h2>
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead>
<tr>
<th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Job Title</th>
<th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Category</th>
<th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Location</th>
<th className="px-4 py-2 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
<th className="px-4 py-2"></th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-100">
<tr>
<td className="px-4 py-2">Carpenter Needed</td>
<td className="px-4 py-2">Carpenter</td>
<td className="px-4 py-2">Lagos</td>
<td className="px-4 py-2">
<span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Active</span>
</td>
<td className="px-4 py-2 space-x-2">
<button className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition">Edit</button>
<button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
</td>
</tr>
<tr>
<td className="px-4 py-2">Mason for Building Project</td>
<td className="px-4 py-2">Mason</td>
<td className="px-4 py-2">Abuja</td>
<td className="px-4 py-2">
<span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Active</span>
</td>
<td className="px-4 py-2 space-x-2">
<button className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition">Edit</button>
<button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
</td>
</tr>

</tbody>
</table>
</div>
<div className="mt-6">
<button className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800 transition">+ Add New Skilled Job</button>
</div>
</div>
</section>
<footer className="bg-blue-900 text-white text-center py-6 mt-16">
    © 2024 SkilledWorks Portal. All rights reserved.
  </footer>

    </>
  );
}
