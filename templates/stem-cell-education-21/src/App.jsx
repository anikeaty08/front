import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<section className="w-full py-20 md:py-32 border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<header>
<span className="text-teal-600 font-semibold tracking-wide uppercase text-xs md:text-sm mb-2 block">Medical Education</span>
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-[1.1]">Definition of a Stem Cell</h2>
</header>

<div className="relative pl-6 border-l-4 border-teal-500 bg-teal-50/50 p-6 rounded-r-xl">
<i className="text-teal-300 w-8 h-8 absolute top-4 right-4 opacity-50" data-lucide="quote"></i>
<p className="text-lg md:text-xl font-medium text-teal-900 italic leading-relaxed">
                            "Stem cells are a special type of cells that have two important properties. They are able to make more cells like themselves. That is, they self-renew. And they can become other cells that do different things in a process known as differentiation. Stem cells are found in almost all tissues of the body. And they are needed for the maintenance of tissue as well as for repair after injury." (1)
                        </p>
<p className="mt-4 text-sm font-semibold text-teal-700">— MayoClinic.org</p>
</div>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
<p>
                            There are many types of stem cells. Embryonic (ESCs), Induced Pluripotent (iPSCs), Hematopoetic (HSCs) and Mesenchymal (MCSs).
                        </p>
<p className="font-medium text-zinc-900">
                            When you compare the different sources of stem cells, perinatal tissues clearly have the advantage over other sources at this time.
                        </p>
<p>
                            In the future, iPSCs will be the premier stem cell source but today if you want to get a stem cell treatment the best source is from perinatal tissues and in particular the UC-MSC from the umbilical cord and placental tissue is the #1 regenerative medicine cell.
                        </p>
</div>
</div>

<div className="relative h-full min-h-[500px] w-full bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 group">
<img alt="Microscopic view of cells" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent mix-blend-multiply"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
<i className="w-5 h-5 text-teal-600" data-lucide="microscope"></i>
<span className="text-sm font-semibold text-zinc-800">Cellular Differentiation</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-slate-50 border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">Mesenchymal Stem Cells</h2>
<p className="text-lg text-zinc-600 leading-relaxed text-left md:text-center">
                    Mesenchymal Stem Cells (MSCs) are found in bone marrow and in the perinatal tissues like the placenta and the wharton’s jelly/umbilical cord (UC-MSCs). MSCs are the ideal cell for regenerative medicine treatments. MSCs can form all three germ layers meaning that from MSCs can form bone, cartilage, muscle tissue, nerve tissue and organs.
                </p>
</div>

<div className="relative bg-white rounded-2xl shadow-sm border border-zinc-200 p-8 mb-12 overflow-hidden">
<div className="absolute top-4 right-4 text-xs text-zinc-400 max-w-[200px] text-right">
                    An MSCs was first defined by the International Society Cell and Gene therapy (ISCT). (2)
                </div>

<div className="aspect-[16/7] w-full bg-zinc-50 rounded-xl flex items-center justify-center border border-dashed border-zinc-300 relative overflow-hidden">
<img alt="Background pattern" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center">
<i className="w-12 h-12 text-teal-600 mx-auto mb-4" data-lucide="network"></i>
<span className="text-zinc-400 font-medium">The Mesengenic Process Diagram</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative group hover:border-teal-200 transition duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-serif font-bold text-xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">1</div>
<h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Adherence</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                        First, MSC must be plastic-adherent when maintained in standard culture conditions.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative group hover:border-teal-200 transition duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-serif font-bold text-xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">2</div>
<h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Expression</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                        Second, MSC must express CD105, CD73 and CD90, and lack expression of CD45, CD34, CD14 or CD11b, CD79α or CD19 and HLA-DR surface molecules.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 relative group hover:border-teal-200 transition duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center font-serif font-bold text-xl mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">3</div>
<h3 className="font-serif text-xl font-medium text-zinc-900 mb-3">Differentiation</h3>
<p className="text-zinc-600 text-lg leading-relaxed">
                        Third, MSC must differentiate to osteoblasts, adipocytes and chondroblasts in vitro.
                    </p>
</div>
</div>

<div className="bg-teal-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-8 items-start">
<div className="bg-white/10 p-4 rounded-xl shrink-0">
<i className="w-10 h-10 text-teal-200" data-lucide="shield-check"></i>
</div>
<div className="space-y-4">
<h3 className="text-2xl font-serif font-medium text-white">Immune Privileged</h3>
<p className="text-teal-50 text-lg leading-relaxed opacity-90">
                        MSCs have low expression of MHC Class II molecules and lack co-stimulatory molecules like CD80, CD86, and CD40, making them less likely to trigger immune responses. They are often described as "immune privileged." Immune priviledged means that MSCs do not need to "match" the donor and the recipient in the same manner that HSCs need to match making MSCs the ideal universal cell for regenerative medicine.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-white border-b border-zinc-100">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<header className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">Advantages of Umbilical Cord MSCs (UC-MSCs)</h2>
<p className="text-lg text-zinc-600 leading-relaxed text-left">
                    Although bone marrow and adipose tissue (fat) contain MSCs, the MSCs from perinatal sources and particularly from from the Wharton’s Jelly of the Umbilical cord tissue are superior sources of MSCs.
                </p>
</header>

<div className="space-y-6 mb-16">
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-50 transition">
<i className="w-6 h-6 text-teal-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-lg text-zinc-700 leading-relaxed">
                        MSCs by definition express the markers CD105, CD73 and CD90.
                    </p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-50 transition">
<i className="w-6 h-6 text-teal-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<div>
<p className="text-lg text-zinc-700 leading-relaxed font-medium">
                            However, MSCs from the umbilical cord also express Oct-4, Sox-2 and Nanog.
                        </p>
</div>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-50 transition">
<i className="w-6 h-6 text-teal-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-lg text-zinc-700 leading-relaxed">
                        Oct-4, Sox-2 and Nanog are markers that are known as embryonic stem cell markers and have to do with greater telomerase potential.
                    </p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-50 transition">
<i className="w-6 h-6 text-teal-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-lg text-zinc-700 leading-relaxed">
                        Telomerase control the stem cell’s ability to make perfect copies of itself which is also known as population doublings without senescing or dying.
                    </p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-50 transition">
<i className="w-6 h-6 text-teal-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-lg text-zinc-700 leading-relaxed">
                        Oct-4, Sox-2 and Nanog markers are considered Pluripotent ESCs markers and are not expressed on adult MSCs from bone marrow and adipose.
                    </p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg hover:bg-zinc-50 transition">
<i className="w-6 h-6 text-teal-600 mt-1 shrink-0" data-lucide="check-circle-2"></i>
<p className="text-lg text-zinc-700 leading-relaxed">
                        The expression of these ESCs markers make perinatal derived MSCs more proliferative with greater therapeutic potency than MSCs from adult sources (bone marrow and adipose tissue).
                    </p>
</div>
</div>

<div className="bg-zinc-900 rounded-xl p-8 md:p-10 shadow-xl border border-zinc-800 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-teal-300 to-teal-500"></div>
<h3 className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                    "Of all the MSCs sources the most widely studied and the ideal stem cell for regenerative medicine treatments is the <span className="text-teal-400 font-semibold">Umbilical Cord derived MSC or UC-MSCs</span>."
                </h3>
</div>
</div>
</section>

<section className="w-full py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 lg:px-8">
<header className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Development of Wharton’s Jelly derived UCM-MSCs</h2>
</header>

<figure className="mb-12 bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">

<div className="w-full aspect-[4/3] md:aspect-[2/1] bg-zinc-50 rounded-lg flex flex-col items-center justify-center border border-dashed border-zinc-300 mb-4 relative overflow-hidden">
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" src="https://images.unsplash.com/photo-1559757175-9e35f55390ea?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 grid grid-cols-3 gap-4 md:gap-12 text-center w-full px-4">
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-teal-200 bg-white flex items-center justify-center relative">
<span className="text-xs text-zinc-400">a</span>
</div>
<span className="text-xs md:text-sm font-semibold text-teal-800">Yolk Sac (ys)</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-teal-400 bg-white flex items-center justify-center relative">
<span className="text-xs text-zinc-400">b</span>
<i className="absolute -right-6 md:-right-10 text-teal-300 w-4 h-4 md:w-6 md:h-6" data-lucide="arrow-right"></i>
</div>
<span className="text-xs md:text-sm font-semibold text-teal-800">Migration to Fetal Liver</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-teal-600 bg-white flex items-center justify-center relative">
<span className="text-xs text-zinc-400">c</span>
</div>
<span className="text-xs md:text-sm font-semibold text-teal-800">Fetal Liver (fl)</span>
</div>
</div>
</div>
<figcaption className="text-center text-xs text-zinc-400 font-medium">
                    Image provided by Dr. Hanna Mikkola, Mikkola Lab UCLA • Perinatal Stem Cells
                </figcaption>
</figure>

<div className="prose prose-lg prose-zinc max-w-none text-zinc-600 leading-relaxed space-y-8 mb-16">
<p>
                    "During early embryogenesis, blood islands are first found in the yolk sac and later in the aorto-gonado-mesonephros (AGM) region. They then migrate through the early umbilical cord to the placenta. There is a second migration from the placenta again through the early umbilical cord to the fetal liver where blood islands are found and then finally to the fetal bone marrow where the hematopoietic stem cells (HSCs) reside. Included in these blood islands are early precursors of HSCs, as well as primitive mesenchymal- like stromal cells. 
                    <span className="text-zinc-900 font-semibold bg-teal-50/80 px-1 rounded box-decoration-clone">These migrations take place between day 4 and day 12 of embryological development. Researchers have postulated that during this migration to and from the placenta through the umbilical cord, these mesenchymal-like stromal stem cells become embedded in the Wharton's jelly at a very early embryological age. (3)</span>
</p>
<p>
                    It is believed by many that the formation of these cells at such an early embryonic state allows them to retain a resemblance to embryonic stem cells (ESCs), while still maintaining the properties of somatic mesenchymal stem cells found in bone marrow (BM-MSCs), as defined by the International Society for Cellular Therapy (ISCT) (2). 
                    <span className="text-zinc-900 font-semibold bg-teal-50/80 px-1 rounded box-decoration-clone">As such, these umbilical cord mesenchymal stem cells (UC-MSCs) are in reality cells that fall somewhere between ISCT definitions of ESCs, mesenchymal stem cells and stromal cells. (4)."</span>
</p>
</div>

<div className="bg-white rounded-xl shadow-lg border border-zinc-200 overflow-hidden mb-16 flex flex-col md:flex-row h-[400px]">

<div className="hidden md:flex flex-col w-20 bg-zinc-900 border-r border-zinc-800 items-center py-4 gap-4 shrink-0">
<div className="w-12 h-16 bg-zinc-800 rounded border border-zinc-700 shadow-sm opacity-50 hover:opacity-100 transition cursor-pointer"></div>
<div className="w-12 h-16 bg-white/10 rounded border border-zinc-700 shadow-sm ring-2 ring-teal-500 cursor-pointer"></div>
<div className="w-12 h-16 bg-zinc-800 rounded border border-zinc-700 shadow-sm opacity-50 hover:opacity-100 transition cursor-pointer"></div>
</div>

<div className="flex-1 bg-zinc-100 flex flex-col">

<div className="bg-zinc-800 h-10 flex items-center px-4 gap-2 border-b border-zinc-700">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="ml-auto flex items-center gap-3 text-zinc-400">
<i className="w-4 h-4" data-lucide="zoom-in"></i>
<i className="w-4 h-4" data-lucide="download"></i>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 md:p-8 flex justify-center">
<div className="bg-white shadow-xl w-full max-w-xl min-h-full p-8 md:p-12 relative">

<div className="border-b-2 border-teal-600 pb-2 mb-6 flex justify-between items-end">
<span className="text-[10px] uppercase font-bold text-zinc-400">Article In Press</span>
<span className="text-[10px] text-zinc-400">Placenta (2011) 1-5</span>
</div>
<div className="bg-zinc-50 p-4 border border-zinc-200 mb-8 flex justify-between items-center">
<div className="space-y-1">
<div className="h-2 w-32 bg-zinc-200 rounded"></div>
<div className="h-4 w-24 bg-zinc-800 rounded"></div>
</div>
<div className="w-12 h-12 bg-white border border-zinc-200 rounded flex items-center justify-center">
<i className="w-6 h-6 text-teal-600" data-lucide="file-text"></i>
</div>
</div>
<h4 className="font-serif text-2xl font-semibold text-zinc-900 mb-2">Wharton's Jelly stem cells: Future clinical applications</h4>
<p className="text-sm font-semibold text-zinc-600 mb-6">R.R. Taghizadeh, K.J. Cetrulo, C.L. Cetrulo</p>
<div className="grid grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<div className="h-1.5 w-full bg-zinc-100 rounded"></div>
<div className="h-1.5 w-3/4 bg-zinc-100 rounded"></div>
<div className="h-1.5 w-5/6 bg-zinc-100 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-zinc-100 rounded"></div>
<div className="h-1.5 w-full bg-zinc-100 rounded"></div>
<div className="h-1.5 w-2/3 bg-zinc-100 rounded"></div>
</div>
</div>
<div className="p-4 bg-teal-50 border-l-2 border-teal-500 text-[10px] text-zinc-600 leading-relaxed">
<span className="font-bold text-teal-800 block mb-1">ABSTRACT</span>
                                This review focuses on the therapeutic potential of stem cells harvested from the Wharton's jelly of the human umbilical cord. Recently, investigators have found that a potent stem cell population exists within the Wharton's jelly...
                            </div>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800">
<img alt="3D rendering of cells" className="w-full h-[400px] object-cover opacity-40" src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
<div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24 p-8">

<div className="text-center group cursor-default">
<h4 className="text-white font-medium text-lg mb-4 tracking-tight">Mesenchymal<br/><span className="text-zinc-400 text-sm">Stem Cells</span></h4>
<div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-indigo-400 shadow-[0_0_30px_rgba(129,140,248,0.3)] bg-black/50 relative transform group-hover:scale-105 transition duration-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex items-center justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
<span className="text-white text-xs font-bold uppercase tracking-wider">Cord Tissue</span>
</div>
</div>

<div className="hidden md:block w-32 h-px bg-gradient-to-r from-indigo-400/50 to-red-400/50 relative">
<div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-indigo-400"></div>
<div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-red-400"></div>
</div>

<div className="text-center group cursor-default">
<h4 className="text-white font-medium text-lg mb-4 tracking-tight">Hematopoietic<br/><span className="text-zinc-400 text-sm">Stem Cells</span></h4>
<div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-red-400 shadow-[0_0_30px_rgba(248,113,113,0.3)] bg-black/50 relative transform group-hover:scale-105 transition duration-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex items-center justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<span className="text-white text-xs font-bold uppercase tracking-wider">Cord Blood</span>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
