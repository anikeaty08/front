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
      
<header className="mb-8 text-center">
<h1 className="text-4xl font-extrabold text-pink-600 drop-shadow-lg">🎶 Music Fun Zone 🎶</h1>
<p className="text-xl text-blue-700 mt-2 font-medium">Sing, Play &amp; Learn!</p>
</header>
<main className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-8">

<div className="flex flex-col items-center gap-4">
<img alt="Album Art" className="w-32 h-32 rounded-full border-4 border-yellow-300 shadow-lg" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="text-center">
<h2 className="text-2xl font-bold text-pink-700">Twinkle Twinkle Little Star</h2>
<p className="text-lg text-blue-800">by <span className="font-medium">Kids Choir</span></p>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs text-blue-500 font-mono">1:15</span>
<div className="h-2 flex-1 bg-yellow-200 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-pink-400"></div>
</div>
<span className="text-xs text-blue-500 font-mono">2:43</span>
</div>
<div className="flex justify-center items-center gap-6 mt-3">
<button className="p-3 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 text-2xl shadow">⏮️</button>
<button className="p-4 rounded-full bg-pink-400 hover:bg-pink-500 text-white text-3xl shadow-lg">▶️</button>
<button className="p-3 rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 text-2xl shadow">⏭️</button>
</div>
</div>

<section className="mt-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-lg p-4 flex items-center gap-4 animate-pulse">
<span className="text-3xl">💡</span>
<div>
<h3 className="text-lg font-semibold text-yellow-700">Music Theory Tip!</h3>
<p className="text-blue-800 text-sm">This song uses the C major scale. Can you sing along using Do, Re, Mi, Fa, So?</p>
</div>
</section>

<div>
<h4 className="text-pink-600 mt-2 mb-2 font-bold">Playlist:</h4>
<ul className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
<li>
<button className="bg-yellow-200 rounded-xl px-4 py-2 font-semibold text-blue-800 shadow border-2 border-yellow-300 hover:bg-yellow-300 transition">ABC Song</button>
</li>
<li>
<button className="bg-blue-200 rounded-xl px-4 py-2 font-semibold text-pink-700 shadow border-2 border-blue-300 hover:bg-blue-300 transition">Baa Baa Black Sheep</button>
</li>
<li>
<button className="bg-pink-200 rounded-xl px-4 py-2 font-semibold text-blue-800 shadow border-2 border-pink-300 hover:bg-pink-300 transition">Old MacDonald</button>
</li>
<li>
<button className="bg-green-200 rounded-xl px-4 py-2 font-semibold text-yellow-700 shadow border-2 border-green-300 hover:bg-green-300 transition">Mary Had a Little Lamb</button>
</li>
</ul>
</div>
</main>
<footer className="mt-8 text-xs text-blue-400 text-center">
    © 2024 Music Fun Zone for Kids
  </footer>

    </>
  );
}
