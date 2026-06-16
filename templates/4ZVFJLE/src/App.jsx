import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      window.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">

<div className="w-full max-w-md rounded-3xl bg-neutral-800/90 ring-1 ring-white/10 shadow-2xl p-8 space-y-8">

<h2 className="text-2xl tracking-tight font-semibold text-white flex items-center gap-2">
<i className="w-6 h-6 stroke-indigo-300" data-lucide="sparkles"></i>
          New Event
        </h2>

<form className="space-y-6">

<div className="space-y-2">
<label className="font-medium text-sm">Event name</label>
<div className="flex items-center gap-3 bg-neutral-700/60 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
<i className="w-5 h-5 text-indigo-300" data-lucide="edit-3"></i>
<input className="flex-1 bg-transparent outline-none placeholder:text-neutral-400 text-sm" placeholder="Stargazing with friends" required="" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="font-medium text-sm">Date</label>
<div className="flex items-center gap-3 bg-neutral-700/60 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400 transition">
<i className="w-5 h-5 text-indigo-300" data-lucide="calendar"></i>
<input className="flex-1 bg-transparent outline-none text-sm" required="" type="date"/>
</div>
</div>

<div className="space-y-2">
<label className="font-medium text-sm">Media (optional)</label>
<label className="group flex flex-col items-center justify-center gap-2 border-2 border-dashed border-indigo-400/40 rounded-xl py-8 cursor-pointer hover:bg-neutral-700/40 transition" htmlFor="media">
<i className="w-6 h-6 text-indigo-300 group-hover:rotate-6 transition" data-lucide="upload-cloud"></i>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200">Add photo / video</span>
<input className="hidden" id="media" multiple="" type="file"/>
</label>
</div>

<div className="space-y-2">
<label className="font-medium text-sm">Comment / description</label>
<div className="bg-neutral-700/60 rounded-xl focus-within:ring-2 focus-within:ring-indigo-400 transition">
<textarea className="w-full bg-transparent resize-none p-4 outline-none placeholder:text-neutral-400 text-sm" placeholder="Tell us more about this cosmic occasion…" required="" rows="4"></textarea>
</div>
</div>

<button className="w-full bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 text-white text-sm font-semibold py-3 rounded-xl transition" type="submit">
            Save
          </button>
</form>
</div>
</div>


    </>
  );
}
