import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Custom Dropdown for style
    function dropdown(customId, btnId, valId, listId) {
      const cont = document.getElementById(customId);
      const btn  = document.getElementById(btnId);
      const val  = document.getElementById(valId);
      const list = document.getElementById(listId);
      let open = false;

      function closeDropdown(){
        open=false; list.classList.add("hidden");
        btn.classList.remove("border-indigo-500", "ring-1","ring-indigo-500");
      }
      btn.onclick = e => {
        e.stopPropagation();
        open = !open;
        if(open){
          list.classList.remove("hidden");
          btn.classList.add("border-indigo-500", "ring-1","ring-indigo-500");
        } else closeDropdown();
      };
      Array.from(list.children).forEach(li=>{
        li.onclick = e => {
          val.textContent = li.getAttribute('data-val');
          closeDropdown();
          cont.dispatchEvent(new CustomEvent('change'));
        }
      });
      document.addEventListener("mousedown", e=>{
        if(!cont.contains(e.target)) closeDropdown();
      });
      return {get value(){return val.textContent;}};
    }

    const styleDD   = dropdown("style-dd","style-btn","style-val","style-list");
    const emotionDD = dropdown("emotion-dd","emotion-btn","emotion-val","emotion-list");

    const form = document.getElementById('typoForm');
    const output = document.getElementById('promptOutput');
    const copyBtn = document.getElementById('copyBtn');

    function generatePrompt() {
      const text = document.getElementById('text').value.trim();
      const style = styleDD.value;
      const emotion = emotionDD.value;
      const extra = document.getElementById('extra').value.trim();
      const features = Array.from(form.querySelectorAll('input[name="features"]:checked')).map(f => f.value);
      let featureStr = features.length ? features.join(', ') : 'default font characteristics';
      let extraStr = extra ? ` ${extra}` : '';
      return `Typography prompt: "${text}".
Style: ${style}, Emotion: ${emotion},
Font features: ${featureStr}.${extraStr}`;
    }

    function updatePrompt(){ output.textContent = generatePrompt(); }
    form.addEventListener('input', updatePrompt);
    document.getElementById("style-dd").addEventListener('change', updatePrompt);
    document.getElementById("emotion-dd").addEventListener('change', updatePrompt);

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(output.textContent).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "Copy Prompt", 1200);
      });
    });

    updatePrompt();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md bg-zinc-900 rounded-lg shadow-xl border border-zinc-800 p-6">
<h1 className="text-lg font-semibold mb-1 text-indigo-400 tracking-tight">Typography Prompt Builder</h1>
<p className="text-zinc-400 mb-4 text-xs leading-relaxed">
      Easily assemble creative typography prompts for generative design and branding.
    </p>
<form autocomplete="off" className="space-y-3" id="typoForm">
<div>
<label className="block text-xs mb-1 text-zinc-400">What text?</label>
<input className="bg-zinc-800 rounded w-full px-3 py-2 text-sm border border-zinc-700 focus:border-indigo-500 outline-none" id="text" maxlength="64" placeholder="Type here" required="" type="text" value="The quick brown fox"/>
</div>
<div custom-dropdown="" id="style-dd">
<label className="block text-xs mb-1 text-zinc-400">Stylistic mood</label>
<button className="w-full flex justify-between items-center gap-2 bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm relative focus:border-indigo-500 outline-none" id="style-btn" type="button">
<span id="style-val">Minimalist</span>
<svg className="w-4 h-4 text-zinc-500" fill="none" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"></path></svg>
</button>
<ul className="hidden mt-1 bg-zinc-800 border border-indigo-500/80 rounded shadow-lg py-1 transition-all animate-fade-in outline-none" dropdown-list="" id="style-list">
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Minimalist">Minimalist</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Bold">Bold</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Retro">Retro</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Modern">Modern</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Playful">Playful</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Elegant">Elegant</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Brutalist">Brutalist</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Handwritten">Handwritten</li>
</ul>
</div>
<div custom-dropdown="" id="emotion-dd">
<label className="block text-xs mb-1 text-zinc-400">Emotion or vibe</label>
<button className="w-full flex justify-between items-center gap-2 bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-sm relative focus:border-indigo-500 outline-none" id="emotion-btn" type="button">
<span id="emotion-val">Energetic</span>
<svg className="w-4 h-4 text-zinc-500" fill="none" viewbox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"></path></svg>
</button>
<ul className="hidden mt-1 bg-zinc-800 border border-indigo-500/80 rounded shadow-lg py-1 transition-all animate-fade-in outline-none" dropdown-list="" id="emotion-list">
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Energetic">Energetic</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Calm">Calm</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Mysterious">Mysterious</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Tech-inspired">Tech-inspired</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Luxury">Luxury</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Friendly">Friendly</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Vintage">Vintage</li>
<li className="px-3 py-2 hover:bg-indigo-600/30 cursor-pointer text-sm" data-val="Futuristic">Futuristic</li>
</ul>
</div>
<div>
<label className="block text-xs mb-1 text-zinc-400">Font features</label>
<div className="flex flex-wrap gap-2 text-sm mt-1">
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="serif"/> Serif
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="sans-serif"/> Sans-serif
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="monospace"/> Monospace
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="all caps"/> All Caps
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="italic"/> Italic
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="condensed"/> Condensed
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="expanded"/> Expanded
          </label>
<label className="flex items-center gap-1">
<input className="accent-indigo-500" name="features" type="checkbox" value="high contrast"/> High Contrast
          </label>
</div>
</div>
<div>
<label className="block text-xs mb-1 text-zinc-400">Extra instructions <span className="text-zinc-500 font-light">(optional)</span></label>
<textarea className="w-full bg-zinc-800 rounded px-3 py-2 text-sm border border-zinc-700 focus:border-indigo-500 outline-none" id="extra" maxlength="120" placeholder="E.g. Use a geometric layout, avoid default fonts" rows="2"></textarea>
</div>
</form>
<div className="my-5 border-t border-zinc-800"></div>
<div>
<label className="text-xs block mb-2 text-zinc-400">Generated Prompt:</label>
<div className="bg-zinc-800 border border-zinc-700 text-zinc-100 rounded p-3 text-sm min-h-[56px] font-mono whitespace-pre" id="promptOutput"></div>
<button className="mt-3 px-4 py-1.5 bg-indigo-500 hover:bg-indigo-600 rounded font-medium text-xs text-white w-full shadow transition focus:outline-none" id="copyBtn" type="button">Copy Prompt</button>
</div>
</div>


    </>
  );
}
