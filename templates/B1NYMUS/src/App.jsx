import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="square-container relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-between p-12">

<div className="text-center opacity-0 animate-fade-in">
<div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl mb-4">
<span className="text-slate-900 text-xl font-bold oswald">FN</span>
</div>
<h1 className="oswald text-5xl font-bold text-yellow-400 tracking-tight text-shadow">
                GAME DAY
            </h1>
<div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-2 rounded-full"></div>
</div>

<div className="flex justify-center gap-6 opacity-0 animate-scale-in delay-200">
<div className="glass-effect rounded-xl p-4 text-center hover-glow flex-1">
<div className="oswald text-lg font-semibold text-white mb-1">TEAM 1</div>
<div className="oswald text-3xl font-bold text-yellow-400">--</div>
</div>
<div className="glass-effect rounded-xl p-4 text-center hover-glow flex-1">
<div className="oswald text-lg font-semibold text-white mb-1">TEAM 2</div>
<div className="oswald text-3xl font-bold text-yellow-400">--</div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center items-center opacity-0 animate-slide-up delay-300">
<div className="w-64 h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border-2 border-slate-600 flex items-center justify-center text-slate-400 text-xl oswald font-medium mb-6 shadow-2xl">
<div>
<div className="w-12 h-12 mx-auto mb-2 opacity-50">
<i className="w-full h-full" data-lucide="user"></i>
</div>
                    PLAYER<br/>IMAGE
                </div>
</div>
<h2 className="oswald text-4xl font-bold text-yellow-400 tracking-tight text-center text-shadow">
                PLAYER NAME
            </h2>
</div>

<div className="opacity-0 animate-slide-up delay-400">
<div className="text-center border-t-2 border-yellow-400 pt-6">
<div className="flex justify-center items-start gap-2 mb-4">
<div className="text-yellow-400 text-4xl oswald font-bold">"</div>
<div className="oswald text-2xl font-bold text-yellow-400 tracking-tight">
                        FEATURED QUOTE
                    </div>
</div>
<p className="text-slate-300 text-lg leading-relaxed max-w-md mx-auto">
                    Add your standout quote or key statistic here.
                </p>
</div>
</div>

<div className="grid grid-cols-4 gap-3 opacity-0 animate-fade-in delay-500">
<div className="glass-effect rounded-lg p-3 text-center">
<div className="text-xl font-bold text-yellow-400 oswald">--</div>
<div className="text-xs text-slate-400 oswald">PTS</div>
</div>
<div className="glass-effect rounded-lg p-3 text-center">
<div className="text-xl font-bold text-yellow-400 oswald">--</div>
<div className="text-xs text-slate-400 oswald">AST</div>
</div>
<div className="glass-effect rounded-lg p-3 text-center">
<div className="text-xl font-bold text-yellow-400 oswald">--</div>
<div className="text-xs text-slate-400 oswald">REB</div>
</div>
<div className="glass-effect rounded-lg p-3 text-center">
<div className="text-xl font-bold text-yellow-400 oswald">--</div>
<div className="text-xs text-slate-400 oswald">STL</div>
</div>
</div>
</div>


    </>
  );
}
