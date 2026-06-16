import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config={darkMode:'class',theme:{extend:{fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},
colors:{surface:{900:'#0c0c0c',800:'#141414'},accent:{500:'#4ade80',600:'#22c55e'}},borderRadius:{xl2:'1.25rem'}}}};



  lucide.createIcons();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-16 pl-4">


<div className="relative w-full max-w-2xl lg:max-w-3xl mt-12 mr-auto ml-auto">

<div className="annotation annotation-left" style={{top: '60px'}}>TECHNICAL<br/>BLOG POST<br/>STRUCTURE</div>
<div className="annotation-line" style={{top: '75px', right: 'calc(100% - 20px)', width: '40px'}}></div>
<div className="annotation annotation-left" style={{top: '180px'}}>DEVELOPMENT<br/>INSIGHTS &amp;<br/>METADATA</div>
<div className="annotation-line" style={{top: '195px', right: 'calc(100% - 20px)', width: '40px'}}></div>
<div className="annotation annotation-left" style={{top: '380px'}}>PROJECT<br/>TIMELINE</div>
<div className="annotation-line" style={{top: '395px', right: 'calc(100% - 20px)', width: '40px'}}></div>

<div className="annotation annotation-right" style={{top: '20px'}}>ARTICLE<br/>HEADER</div>
<div className="annotation-line" style={{top: '35px', left: 'calc(100% - 20px)', width: '40px'}}></div>
<div className="annotation annotation-right" style={{top: '100px'}}>CONTENT<br/>CATEGORIZATION</div>
<div className="annotation-line" style={{top: '115px', left: 'calc(100% - 20px)', width: '40px'}}></div>
<div className="annotation annotation-right" style={{top: '160px'}}>TECHNICAL<br/>SPECIFICATIONS</div>
<div className="annotation-line" style={{top: '175px', left: 'calc(100% - 20px)', width: '40px'}}></div>
<div className="annotation annotation-right" style={{top: '520px'}}>VISUAL<br/>CONTENT</div>
<div className="annotation-line" style={{top: '535px', left: 'calc(100% - 20px)', width: '40px'}}></div>

<div className="window sm:p-6 lg:p-8 relative z-10 bg-zinc-900 border-zinc-800 pt-4 pr-4 pb-4 pl-4">

<div className="border-zinc-800 border-b mb-6 pb-4">
<h2 className="sm:text-xl flex items-center gap-2 text-lg font-normal mb-2">I can't believe how good Claude 4 is at generating responsive UI.</h2>
<p className="sm:text-sm text-xs text-zinc-400 mb-3">Okay, many are asking how to get to SUPER nice designs. Here's a trick I use and it works on any design.</p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<span className="">Aug 15, 2024</span>
<span className="">8 min read</span>
<span className="">Technical Deep Dive</span>
</div>
</div>

<div className="mb-6">
<div className="grid-row">
<div className="label">Category</div>
<div className="value">
<span className="flex items-center gap-1 text-sm text-gray-300">UI Prompting</span>
</div>
</div>
<div className="grid-row">
<div className="label">Author</div>
<div className="value">
<div className="w-6 h-6 flex items-center justify-center bg-zinc-700 rounded-full">
<span className="text-xs font-semibold text-white">MT</span>
</div>
<span className="text-sm text-white">Meng To</span>
<span className="w-2 h-2 rounded-full bg-green-400"></span>
</div>
</div>
<div className="grid-row">
<div className="label">Topics</div>
<div className="value">
<span className="hover:bg-gray-600 cursor-pointer transition-colors text-xs bg-gray-700 rounded pt-1 pr-2 pb-1 pl-2">AI</span>
<span className="hover:bg-gray-600 cursor-pointer transition-colors text-xs bg-gray-700 rounded pt-1 pr-2 pb-1 pl-2">Prompting</span>
<span className="hover:bg-gray-600 cursor-pointer transition-colors text-xs bg-gray-700 rounded pt-1 pr-2 pb-1 pl-2">Image to HMTL</span>
</div>
</div>
</div>


<div className="border-zinc-800 border-t pt-6">
<h3 className="flex items-center gap-2 text-sm font-medium mb-4">UI Prompting</h3>

<div className="overflow-hidden bg-zinc-800/50 border-zinc-800 border rounded-lg mb-4">
<div className="aspect-video flex items-center justify-center relative">
<div className="absolute inset-1 flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1634635720982-88d440c3f4a7?w=2160&amp;q=80)] bg-cover border-zinc-800 border rounded-md">
</div>
</div>
</div>

<div className="mb-6 space-y-4">
<p className="leading-relaxed text-sm text-gray-300">It's done with a screenshot of a layout, pasted into Aura. I already embedded a ton of prompting into Aura for image to HTML. </p>
<p className="leading-relaxed text-sm text-gray-400">BUT you can also use ChatGPT's o3 (paid), which has the best vision, with this prompt:   </p>
<p className="leading-relaxed text-sm text-gray-400">"Generate the HTML with TailwindCSS and javascript and use lucide icons. In the end, create a downloadable html file. Make sure to respect the fonts, the rounded corners, containers, padding, design systems. In the style of {FAV SITES} (don't mention names). Checkboxes, sliders, dropdowns, toggles should be custom. Adapt all texts for {YOUR APP}: {APP DESC}. Be extremely accurate with fonts. "</p>
<p className="leading-relaxed text-sm text-gray-400">Can add more design details where you feel AI is lacking. Avoid illustrations, tons of effects, animations -- those
          won't work. You can add them later in Aura as an asset. Focus on simple, effective layouts, grids, typography, info
          architecture, responsive design, etc.</p>
<p className="leading-relaxed text-sm text-gray-400">Save HTML, view them until you're satisfied. Don't pay attention to broken images, bad icons, these can be fixed easily.
            KEEP good layouts with good typography and colors. That's the hardest to edit. As a designer, you want to focus on your
            creativity, post-gen, not on fighting with auto layout. Such as picking the right font weight, images, avatars, copy,
            adding animations, effects, etc. I like the 90% ai/10% human rule.</p>
<p className="leading-relaxed text-sm text-gray-400">With a strong html as attachment, Aura will generate a really good result. From there, use Design mode to fix texts,
              images, colors. Use the Prompt builder to add animation. Use the Code Mode for editing code/adding new code, new
              buttons, links etc. Knowing Tailwind will help a ton.</p>
<p className="leading-relaxed text-sm text-gray-400">Yep, if you know HTML, you can build an entire landing page in Aura. No React needed, just a single file.</p>
</div>

<div className="flex items-center justify-between border-zinc-800/50 border-t pt-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-700 rounded-full">
<span className="text-sm font-semibold text-white">AR</span>
</div>
<div className="">
<div className="text-sm font-medium text-white">Meng TO</div>
<div className="text-xs text-gray-400">Designer and creator of Aura</div>
</div>
</div>
<div className="text-right">
<div className="text-gray-300 font-instrument-serif mb-1">Meng To</div>
<div className="text-xs text-gray-500">Published: June 5, 2025</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
