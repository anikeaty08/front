import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            heading: ["Lora", "serif"],
            inter: ["Inter", "serif"],
          },
          colors: {
            pastel: {
              gray: "#f7f7fb",
              border: "#ececf4",
              label: "#cbd5e1"
            }
          }
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-lg mx-auto">
<div className="bg-white border border-pastel-border rounded-2xl flex flex-col overflow-hidden">
<div className="p-7 bg-pastel-gray rounded-t-2xl flex flex-col gap-5">
<div className="preview-sample mb-3">
<div className="flex flex-col items-center gap-3 w-full">
<div className="w-1/2 h-3 rounded bg-pastel-label"></div>
<div className="w-2/3 h-4 rounded bg-pastel-label"></div>
</div>
</div>
<div className="code-block mt-5">
&lt;div className="p-5 bg-gray-50 border rounded-lg"&gt;
  &lt;h2 className="text-lg font-medium mb-2"&gt;Minimal Card&lt;/h2&gt;
  &lt;p className="text-sm text-gray-500"&gt;
    Example UI component for modern apps.
  &lt;/p&gt;
&lt;/div&gt;
        </div>
</div>
<div className="w-full h-px bg-pastel-border opacity-60"></div>
<div className="p-7 bg-white">
<span className="inline-block px-3 py-1 mb-3 bg-pastel-label text-gray-700 rounded-full text-xs font-medium font-inter">Design &amp; Code</span>
<h1 className="text-[36px] sm:text-[40px] tight leading-[1.12] font-heading font-semibold text-gray-800 mb-2">Preview your Card</h1>
<p className="font-inter text-[15px] text-gray-500 mb-4 leading-relaxed">
          Visualize and refine your UI and matching code together, all in a single minimal space.
        </p>
<div className="flex justify-between items-center">
<a className="text-black font-inter hover:underline transition font-medium flex items-center text-[16px]" href="#">
            Edit Code
            <svg className="w-4 h-4 ml-1" fill="none" viewbox="0 0 24 24"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<span className="text-gray-400 font-inter text-[14px]">No plugins needed</span>
</div>
</div>
</div>
</div>

    </>
  );
}
