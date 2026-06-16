import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function highlightSegment(id) {
      // Reset all items to default
      document.querySelectorAll('.legend-item').forEach(item => {
        item.classList.remove('bg-gray-50');
      });
      
      // Highlight the selected item
      document.getElementById(id).classList.add('bg-gray-50');
    }
    
    function resetHighlight() {
      document.querySelectorAll('.legend-item').forEach(item => {
        item.classList.remove('bg-gray-50');
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md w-full bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] p-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-gray-900">Deployment Analytics</h2>
<div className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">Last 30 days</div>
</div>
<div className="flex items-start justify-between mb-8">
<div className="space-y-1">
<p className="text-xs font-medium text-gray-500">Total Deployments</p>
<p className="text-2xl font-semibold text-gray-900">1,248</p>
<p className="text-xs text-green-500 flex items-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 10l7-7m0 0l7 7m-7-7v18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          12.5% from last month
        </p>
</div>
<div className="space-y-1 text-right">
<p className="text-xs font-medium text-gray-500">Average Build Time</p>
<p className="text-2xl font-semibold text-gray-900">38s</p>
<p className="text-xs text-green-500 flex items-center justify-end">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
          8.3% faster
        </p>
</div>
</div>

<div className="relative w-44 h-44 mx-auto mb-8 group">

<div className="pie-segment text-[#0070f3]" onmouseout="resetHighlight()" onmouseover="highlightSegment('production')" style={{-Percentage: '45%', -Rotation: '0'}}></div>
<div className="pie-segment text-[#7928ca]" onmouseout="resetHighlight()" onmouseover="highlightSegment('preview')" style={{-Percentage: '25%', -Rotation: '162'}}></div>
<div className="pie-segment text-[#50e3c2]" onmouseout="resetHighlight()" onmouseover="highlightSegment('development')" style={{-Percentage: '20%', -Rotation: '252'}}></div>
<div className="pie-segment text-[#f5a623]" onmouseout="resetHighlight()" onmouseover="highlightSegment('testing')" style={{-Percentage: '10%', -Rotation: '324'}}></div>

<div className="absolute inset-0 m-auto w-28 h-28 bg-white rounded-full flex items-center justify-center">
<div className="text-center">
<span className="block text-2xl font-bold text-gray-900">94.2%</span>
<span className="text-xs text-gray-500">Success Rate</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-y-4 gap-x-6">
<div className="flex items-center p-2 rounded-lg legend-item" id="production" onmouseout="resetHighlight()" onmouseover="highlightSegment('production')">
<div className="w-2.5 h-2.5 rounded-full bg-[#0070f3] mr-2 legend-dot"></div>
<div>
<p className="text-sm font-medium text-gray-900">Production</p>
<p className="text-xs text-gray-500">45% (563)</p>
</div>
</div>
<div className="flex items-center p-2 rounded-lg legend-item" id="preview" onmouseout="resetHighlight()" onmouseover="highlightSegment('preview')">
<div className="w-2.5 h-2.5 rounded-full bg-[#7928ca] mr-2 legend-dot"></div>
<div>
<p className="text-sm font-medium text-gray-900">Preview</p>
<p className="text-xs text-gray-500">25% (312)</p>
</div>
</div>
<div className="flex items-center p-2 rounded-lg legend-item" id="development" onmouseout="resetHighlight()" onmouseover="highlightSegment('development')">
<div className="w-2.5 h-2.5 rounded-full bg-[#50e3c2] mr-2 legend-dot"></div>
<div>
<p className="text-sm font-medium text-gray-900">Development</p>
<p className="text-xs text-gray-500">20% (249)</p>
</div>
</div>
<div className="flex items-center p-2 rounded-lg legend-item" id="testing" onmouseout="resetHighlight()" onmouseover="highlightSegment('testing')">
<div className="w-2.5 h-2.5 rounded-full bg-[#f5a623] mr-2 legend-dot"></div>
<div>
<p className="text-sm font-medium text-gray-900">Testing</p>
<p className="text-xs text-gray-500">10% (124)</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-100">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Updated 5 minutes ago</span>
<button className="text-xs font-medium text-[#0070f3] hover:underline">View detailed report →</button>
</div>
</div>
</div>


    </>
  );
}
