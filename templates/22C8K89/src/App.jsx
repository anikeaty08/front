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
      

<div className="w-full max-w-2xl px-4">
<h1 className="text-2xl font-bold mb-2 text-gray-700">Order Progress</h1>
<p className="text-gray-500 mb-6">Track your order as it moves through each stage.</p>
</div>

<div className="w-full max-w-2xl px-4 mb-6" id="paymentNotification">

<div className="rounded-lg shadow border-l-4 border-green-500 bg-green-50 p-4 flex items-center gap-3" id="payment-success">
<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<h2 className="font-semibold text-green-700">Payment Confirmed</h2>
<p className="text-green-600 text-sm">Your payment has been received and verified. Thank you!</p>
</div>
</div>


</div>

<div className="w-full max-w-2xl px-4">
<ol className="relative border-l border-gray-200">

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="flex items-center mb-1 text-lg font-semibold text-blue-700">Order placed</h3>
<p className="text-gray-500 text-sm">Your order has been placed successfully.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-yellow-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-yellow-700">Pending payment confirmation</h3>
<p className="text-gray-500 text-sm">Awaiting payment to proceed with your order.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-green-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-green-700">Order accepted</h3>
<p className="text-gray-500 text-sm">Your order has been accepted. We will start processing soon.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-blue-700">Feasibility</h3>
<p className="text-gray-500 text-sm">Checking technical feasibility for your location.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-purple-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-purple-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-purple-700">Site survey</h3>
<p className="text-gray-500 text-sm">A site survey will be scheduled at your location.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-indigo-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-indigo-700">Civil works</h3>
<p className="text-gray-500 text-sm">Civil work required for installation is being prepared.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-pink-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-pink-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-pink-700">Installation</h3>
<p className="text-gray-500 text-sm">Installation of equipment is in progress.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-teal-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-teal-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-teal-700">Testing</h3>
<p className="text-gray-500 text-sm">System is being tested for quality and performance.</p>
</li>

<li className="mb-10 ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-orange-100 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-orange-500" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-orange-700">Handover</h3>
<p className="text-gray-500 text-sm">Project handover process initiated.</p>
</li>

<li className="ml-6">
<span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white">
<svg className="w-3 h-3 text-green-700" fill="currentColor" viewbox="0 0 20 20">
<circle cx="10" cy="10" r="10"></circle>
</svg>
</span>
<h3 className="mb-1 text-lg font-semibold text-green-800">Ready for service</h3>
<p className="text-gray-500 text-sm">System is ready and operational. Thank you!</p>
</li>
</ol>
</div>

<div className="w-full max-w-2xl px-4 mt-8">
<div className="bg-white rounded-lg shadow p-4">
<h2 className="font-semibold text-gray-700 mb-1">Email Notifications</h2>
<p className="text-gray-500 text-sm">You will receive email updates whenever your order status changes or payment is confirmed/failed.</p>
</div>
</div>

    </>
  );
}
