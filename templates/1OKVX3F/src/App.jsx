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
      
<div className="gradient-border max-w-sm w-full">
<div className="card-inner">
<div className="flex items-center gap-4 mb-4">
<img alt="Profile" className="w-14 h-14 rounded-full shadow-md border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<h2 className="text-xl font-semibold text-gray-800">Alex Johnson</h2>
<p className="text-sm text-gray-500">Product Designer</p>
</div>
</div>
<div className="mb-4">
<p className="text-gray-600">
          “Design is not just what it looks like and feels like. Design is how it works.”
        </p>
</div>
<div className="flex justify-between items-center mt-6">
<button className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium shadow hover:bg-indigo-600 transition">Follow</button>
<span className="text-xs text-gray-400">Last active 2h ago</span>
</div>
</div>
</div>

    </>
  );
}
