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
      
<h1 className="text-3xl font-bold mb-6 text-gray-800">Studio Craft Dashboard</h1>

<div className="grid grid-cols-1 md:grid-cols-6 gap-4">

<div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-gray-800">Recent Projects</h2>
<span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">New</span>
</div>
<p className="text-gray-600 mb-4">Continue where you left off with your latest design projects.</p>
<div className="flex flex-col space-y-3">
<div className="flex items-center p-3 bg-gray-50 rounded-lg">
<div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 mr-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-medium">Brand Guidelines</p>
<p className="text-sm text-gray-500">Updated 2 days ago</p>
</div>
</div>
<div className="flex items-center p-3 bg-gray-50 rounded-lg">
<div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center text-purple-600 mr-3">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-medium">Website Mockups</p>
<p className="text-sm text-gray-500">Updated yesterday</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-gray-800">Design Stats</h2>
<span className="text-sm text-gray-500">This week</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-gray-50 p-4 rounded-xl">
<p className="text-sm text-gray-500 mb-1">Projects</p>
<p className="text-2xl font-bold">12</p>
<p className="text-xs text-green-600">↑ 8% from last week</p>
</div>
<div className="bg-gray-50 p-4 rounded-xl">
<p className="text-sm text-gray-500 mb-1">Assets</p>
<p className="text-2xl font-bold">248</p>
<p className="text-xs text-green-600">↑ 12% from last week</p>
</div>
</div>
<div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
<p className="text-gray-400 text-sm">Activity chart will appear here</p>
</div>
</div>

<div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-gray-800">Team</h2>
<button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View all</button>
</div>
<div className="flex flex-col space-y-3">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
<span className="font-medium">JD</span>
</div>
<div>
<p className="font-medium">Jane Doe</p>
<p className="text-sm text-gray-500">UI Designer</p>
</div>
</div>
<div className="flex items-center">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
<span className="font-medium">JS</span>
</div>
<div>
<p className="font-medium">John Smith</p>
<p className="text-sm text-gray-500">UX Researcher</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold text-gray-800">Upcoming Deadlines</h2>
<button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Add new</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-gray-500 border-b">
<th className="pb-3 font-medium">Project</th>
<th className="pb-3 font-medium">Client</th>
<th className="pb-3 font-medium">Deadline</th>
<th className="pb-3 font-medium">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-3">Website Redesign</td>
<td className="py-3">Acme Inc.</td>
<td className="py-3">Nov 15, 2023</td>
<td className="py-3"><span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">In Progress</span></td>
</tr>
<tr className="border-b">
<td className="py-3">Mobile App UI</td>
<td className="py-3">TechStart</td>
<td className="py-3">Nov 22, 2023</td>
<td className="py-3"><span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">On Track</span></td>
</tr>
<tr>
<td className="py-3">Brand Identity</td>
<td className="py-3">Globex Corp</td>
<td className="py-3">Dec 1, 2023</td>
<td className="py-3"><span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">At Risk</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

    </>
  );
}
