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
      
<nav className="bg-white shadow-md p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center mr-2">
<span className="text-white text-xl font-bold">BA</span>
</div>
<span className="font-semibold text-xl text-gray-800">Your Bank</span>
</div>
<a className="text-blue-600 hover:underline" href="/dashboard">Dashboard</a>
</nav>
<main className="max-w-3xl mx-auto pt-8 px-4">

<div className="bg-white rounded-xl shadow-md p-6 mb-8">
<div className="flex items-center mb-3">
<div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mr-4">
<svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 10h18M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2zm4 5v6m4-6v6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="text-gray-600 text-sm">Checking Account</div>
<div className="text-2xl font-bold text-gray-900 mt-1">$5,200.75</div>
<div className="text-gray-400 text-xs mt-1">Account Number: **** 1234</div>
</div>
</div>
<div className="flex space-x-4 mt-4">
<button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700">Transfer</button>
<button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-300">Deposit</button>
<button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-300">More</button>
</div>
</div>

<div className="flex items-center mb-3">
<input className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-200" placeholder="Search transactions..." type="text"/>
<select className="px-2 py-2 border-t border-b border-r border-gray-300 rounded-r-md focus:outline-none focus:ring focus:ring-blue-200">
<option>All</option>
<option>Deposit</option>
<option>Withdrawal</option>
<option>Payment</option>
</select>
</div>

<div className="bg-white rounded-xl shadow-md p-6">
<div className="mb-3 flex justify-between items-center">
<h2 className="text-lg font-semibold text-gray-800">Transaction History</h2>
<span className="text-xs text-gray-400">June 2024</span>
</div>
<div className="overflow-x-auto">
<table className="min-w-full">
<thead>
<tr>
<th className="text-left text-gray-500 text-sm font-medium pb-2">Date</th>
<th className="text-left text-gray-500 text-sm font-medium pb-2">Description</th>
<th className="text-left text-gray-500 text-sm font-medium pb-2">Type</th>
<th className="text-right text-gray-500 text-sm font-medium pb-2">Amount</th>
<th className="text-right text-gray-500 text-sm font-medium pb-2">Balance</th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-2 text-gray-700">06/11/2024</td>
<td className="py-2 text-gray-700">Grocery Store</td>
<td className="py-2 text-gray-700">Payment</td>
<td className="py-2 text-right text-red-500">- $84.99</td>
<td className="py-2 text-right text-gray-700">$5,200.75</td>
</tr>
<tr className="border-b">
<td className="py-2 text-gray-700">06/10/2024</td>
<td className="py-2 text-gray-700">Paycheck Deposit</td>
<td className="py-2 text-gray-700">Deposit</td>
<td className="py-2 text-right text-green-500">+ $1,500.00</td>
<td className="py-2 text-right text-gray-700">$5,285.74</td>
</tr>
<tr className="border-b">
<td className="py-2 text-gray-700">06/09/2024</td>
<td className="py-2 text-gray-700">Coffee Shop</td>
<td className="py-2 text-gray-700">Payment</td>
<td className="py-2 text-right text-red-500">- $5.75</td>
<td className="py-2 text-right text-gray-700">$3,785.74</td>
</tr>
<tr className="border-b">
<td className="py-2 text-gray-700">06/08/2024</td>
<td className="py-2 text-gray-700">ATM Withdrawal</td>
<td className="py-2 text-gray-700">Withdrawal</td>
<td className="py-2 text-right text-red-500">- $200.00</td>
<td className="py-2 text-right text-gray-700">$3,791.49</td>
</tr>
<tr>
<td className="py-2 text-gray-700">06/07/2024</td>
<td className="py-2 text-gray-700">Electricity Bill</td>
<td className="py-2 text-gray-700">Payment</td>
<td className="py-2 text-right text-red-500">- $120.00</td>
<td className="py-2 text-right text-gray-700">$3,991.49</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
<footer className="text-center text-xs text-gray-400 my-6">
    © 2024 Your Bank. All rights reserved.
  </footer>

    </>
  );
}
