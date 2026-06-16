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
      
<div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
<div className="p-4 bg-blue-600 text-white">
<h1 className="text-xl font-bold">Embedded Content</h1>
</div>
<div className="p-2">
<div className="w-full h-[600px] border border-gray-300 rounded">
<iframe allowfullscreen="" className="w-full h-full" frameborder="0" src="https://sayufaufwtau.netlify.app"></iframe>
</div>
</div>
<div className="p-4 bg-gray-50 text-sm text-gray-600">
<p>This content is embedded from an external source.</p>
</div>
</div>

    </>
  );
}
