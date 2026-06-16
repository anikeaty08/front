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
      
<div className="mb-8 text-center">
<h2 className="text-2xl font-bold text-white">Code Example</h2>
<p className="text-gray-300">A beautiful code block component styled to match your pricing cards.</p>
</div>

<div className="relative w-full max-w-2xl rounded-xl p-0.5">
<div className="code-border-anim"></div>
<div className="rounded-xl bg-[radial-gradient(at_88%_40%,#181925_0,transparent_85%),radial-gradient(at_49%_30%,#181925_0,transparent_85%),radial-gradient(at_14%_26%,#181925_0,transparent_85%),radial-gradient(at_0%_64%,#015c6e_0,transparent_85%),radial-gradient(at_41%_94%,#00b7e9_0,transparent_85%),radial-gradient(at_100%_99%,#103a42_0,transparent_85%)] shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset] p-6">
<div className="flex items-center justify-between pb-4">
<span className="text-white font-semibold text-base">app.js</span>
<button className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1fcdfc] text-[#181925] hover:bg-[#00b7e9] transition">Copy</button>
</div>
<pre className="overflow-x-auto bg-transparent text-sm leading-relaxed text-blue-100 rounded-lg p-0 m-0 whitespace-pre"><code>
<span className="text-[#1fcdfc]">import</span> <span className="text-[#e0e0e0]">{ useState }</span> <span className="text-[#1fcdfc]">from</span> <span className="text-[#f7b731]">'react'</span>;

<span className="text-[#1fcdfc]">function</span> <span className="text-[#ffd60a]">Counter</span>() {
  <span className="text-[#1fcdfc]">const</span> [count, setCount] = useState(<span className="text-[#f7b731]">0</span>);

  <span className="text-[#1fcdfc]">return</span> (
    <span className="text-[#ffd60a]">&lt;button</span> <span className="text-[#36ffb1]">onClick</span>=<span className="text-[#f7b731]">{</span>() =&gt; setCount(count + <span className="text-[#f7b731]">1</span>)<span className="text-[#f7b731]">}</span><span className="text-[#ffd60a]">&gt;</span>
      Clicked {count} times
    <span className="text-[#ffd60a]">&lt;/button&gt;</span>
  );
}
      </code></pre>
</div>
</div>


    </>
  );
}
