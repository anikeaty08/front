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
      
<div className="bg-white p-6 rounded-lg shadow-sm max-w-md w-full">
<div className="flex justify-between items-center mb-6">
<h2 className="text-lg font-semibold text-gray-900">Financial Overview</h2>
<div className="text-sm text-gray-500">March 2023</div>
</div>
<div className="flex justify-center mb-6">
<div className="pie-chart">
<div className="slice slice-1" title="Income: 45%"></div>
<div className="slice slice-2" title="Expenses: 25%"></div>
<div className="slice slice-3" title="Savings: 20%"></div>
<div className="slice slice-4" title="Investments: 10%"></div>
<div className="inner-circle">
<div className="text-5xl font-semibold text-gray-900 leading-none">941</div>
<div className="text-gray-600 font-medium">Transactions</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="stat-card p-4 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer">
<div className="text-sm text-gray-500 mb-1">Income</div>
<div className="text-2xl font-semibold">$24,562</div>
<div className="flex items-center mt-1 text-xs text-green-600">
<svg className="w-3 h-3 mr-1" fill="none" viewbox="0 0 24 24">
<path d="M5 15l7-7 7 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>+8.2%</span>
</div>
</div>
<div className="stat-card p-4 bg-gray-50 rounded-lg border border-gray-100 cursor-pointer">
<div className="text-sm text-gray-500 mb-1">Expenses</div>
<div className="text-2xl font-semibold">$12,248</div>
<div className="flex items-center mt-1 text-xs text-red-600">
<svg className="w-3 h-3 mr-1" fill="none" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>+2.4%</span>
</div>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
<div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
<div className="flex-1">
<div className="text-sm font-medium">Salary Deposit</div>
<div className="text-xs text-gray-500">Mar 25, 2023</div>
</div>
<div className="text-sm font-medium text-green-600">+$4,250.00</div>
</div>
<div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
<div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
<div className="flex-1">
<div className="text-sm font-medium">Amazon.com</div>
<div className="text-xs text-gray-500">Mar 22, 2023</div>
</div>
<div className="text-sm font-medium text-red-600">-$349.95</div>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-medium transition-colors text-sm">
            View All Transactions
        </button>
</div>

    </>
  );
}
