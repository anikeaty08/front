import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b82f6,
        backgroundColor: 0x030712,
        points: 12,
        maxDistance: 24.00,
        spacing: 16.00,
        showDots: true
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl w-full">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
<div>
<h1 className="text-2xl md:text-3xl font-bold text-white">Network Operations Center</h1>
<p className="text-gray-400 text-sm">Real-time infrastructure monitoring and analytics</p>
</div>
<div className="flex items-center space-x-2 mt-4 md:mt-0">
<div className="flex items-center bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs">
<div className="w-2 h-2 rounded-full bg-green-400 mr-2 pulse"></div>
          System Operational
        </div>
<button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm transition">
          Refresh
        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800">
<div className="h-80 relative" id="vanta-canvas">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-2 inline-block">GLOBAL VIEW</span>
<h2 className="text-2xl font-bold text-white">Network Topology</h2>
<div className="h-1 w-12 bg-blue-400 mt-2 rounded-full"></div>
</div>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 z-10">
<div className="flex space-x-4 text-xs text-gray-300">
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></span>
<span>Primary Nodes</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-purple-400 mr-1.5"></span>
<span>Edge Nodes</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-gray-500 mr-1.5"></span>
<span>Connections</span>
</div>
</div>
</div>

<div className="absolute top-1/4 left-1/4 z-10">
<div className="w-3 h-3 bg-blue-400 rounded-full animate-ping absolute"></div>
<div className="w-3 h-3 bg-blue-400 rounded-full relative"></div>
</div>
<div className="absolute top-1/3 right-1/3 z-10">
<div className="w-3 h-3 bg-blue-400 rounded-full animate-ping absolute"></div>
<div className="w-3 h-3 bg-blue-400 rounded-full relative"></div>
</div>
<div className="absolute bottom-1/4 right-1/4 z-10">
<div className="w-3 h-3 bg-purple-400 rounded-full animate-ping absolute"></div>
<div className="w-3 h-3 bg-purple-400 rounded-full relative"></div>
</div>
</div>

<div className="grid grid-cols-4 divide-x divide-gray-800 border-t border-gray-800">
<div className="p-4">
<div className="text-xs text-gray-500 uppercase">Data Centers</div>
<div className="text-xl font-semibold text-white">12</div>
<div className="text-xs text-green-400">All Operational</div>
</div>
<div className="p-4">
<div className="text-xs text-gray-500 uppercase">Edge Nodes</div>
<div className="text-xl font-semibold text-white">128</div>
<div className="text-xs text-yellow-400">3 Degraded</div>
</div>
<div className="p-4">
<div className="text-xs text-gray-500 uppercase">Traffic</div>
<div className="text-xl font-semibold text-white">1.8 Tbps</div>
<div className="text-xs text-green-400">+12% from avg</div>
</div>
<div className="p-4">
<div className="text-xs text-gray-500 uppercase">Latency</div>
<div className="text-xl font-semibold text-white">28ms</div>
<div className="text-xs text-green-400">-3ms from avg</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">

<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-5">
<div className="flex justify-between items-start mb-4">
<div>
<span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400 inline-block">RELIABILITY</span>
<h3 className="text-lg font-semibold text-gray-200 mt-2">Network Uptime</h3>
</div>
<div className="text-right">
<div className="text-2xl font-bold text-white">99.982%</div>
<div className="text-xs text-green-400">+0.03% vs last month</div>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs">NORTH AMERICA</span>
<span className="text-gray-400 text-xs">99.99%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full" style={{width: '99.99%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs">EUROPE</span>
<span className="text-gray-400 text-xs">99.98%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full" style={{width: '99.98%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs">ASIA PACIFIC</span>
<span className="text-gray-400 text-xs">99.95%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 rounded-full" style={{width: '99.95%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs">SOUTH AMERICA</span>
<span className="text-gray-400 text-xs">99.92%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 rounded-full" style={{width: '99.92%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 p-5">
<div className="flex justify-between items-center mb-4">
<div>
<span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400 inline-block">ALERTS</span>
<h3 className="text-lg font-semibold text-gray-200 mt-2">Recent Issues</h3>
</div>
<span className="bg-red-900/30 text-red-400 px-2 py-1 rounded-md text-xs">3 Active</span>
</div>
<div className="space-y-3">
<div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
<div className="text-sm text-gray-300 font-medium">Edge Node Degraded</div>
<div className="ml-auto text-xs text-gray-500">12m ago</div>
</div>
<div className="text-xs text-gray-400 mt-1">Sydney-E4 reporting increased latency</div>
</div>
<div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-red-400 mr-2"></div>
<div className="text-sm text-gray-300 font-medium">Bandwidth Spike</div>
<div className="ml-auto text-xs text-gray-500">43m ago</div>
</div>
<div className="text-xs text-gray-400 mt-1">Unusual traffic pattern detected in EU-West</div>
</div>
<div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
<div className="flex items-center">
<div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
<div className="text-sm text-gray-300 font-medium">Maintenance Complete</div>
<div className="ml-auto text-xs text-gray-500">2h ago</div>
</div>
<div className="text-xs text-gray-400 mt-1">US-East router firmware updated successfully</div>
</div>
</div>
<button className="w-full mt-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition text-sm">
            View All Alerts
          </button>
</div>
</div>
</div>
</div>


    </>
  );
}
