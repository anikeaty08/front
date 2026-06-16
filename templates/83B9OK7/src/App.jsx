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
      

<section className="relative bg-cover bg-center h-screen" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp'}}>
<div className="absolute inset-0 bg-black bg-opacity-60"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">Södermalm Arkitekter</h1>
<p className="text-lg md:text-2xl text-gray-200 mb-8">Modern arkitektur i hjärtat av Stockholm</p>
<a className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded shadow hover:bg-gray-200 transition" href="#contact">Boka konsultation</a>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-4 text-gray-900">Om Oss</h2>
<p className="text-lg text-gray-700 mb-6">Vi är ett passionerat arkitektkontor i Södermalm, specialiserade på moderna och hållbara lösningar för bostäder, kontor och offentliga miljöer. Med fokus på estetik, funktion och miljö skapar vi unika projekt som speglar våra kunders visioner.</p>
<div className="flex gap-8 flex-col md:flex-row">
<div className="flex-1">
<h3 className="font-semibold text-lg mb-2">Vår Vision</h3>
<p className="text-gray-600">Att skapa inspirerande och långsiktiga miljöer där människor trivs och utvecklas.</p>
</div>
<div className="flex-1">
<h3 className="font-semibold text-lg mb-2">Vårt Team</h3>
<p className="text-gray-600">Ett dedikerat team av arkitekter, designers och projektledare med bred erfarenhet och lokal förankring.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Våra Tjänster</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
<div className="flex items-center justify-center mb-4">
<svg className="h-10 w-10 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14M3 21h18M3 21l9-9 9 9"></path></svg>
</div>
<h3 className="font-semibold text-xl mb-2">Bostadsarkitektur</h3>
<p className="text-gray-600">Vi designar moderna hem, villor och lägenheter med fokus på ljus, rymd och hållbarhet.</p>
</div>
<div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
<div className="flex items-center justify-center mb-4">
<svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2l9 7-9 7-9-7 9-7zm0 14v7"></path></svg>
</div>
<h3 className="font-semibold text-xl mb-2">Kommersiella Projekt</h3>
<p className="text-gray-600">Vi utvecklar arbetsplatser, butiker och restauranger med kreativa och funktionella lösningar.</p>
</div>
<div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
<div className="flex items-center justify-center mb-4">
<svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 3v18m9-9H3"></path></svg>
</div>
<h3 className="font-semibold text-xl mb-2">Renovering &amp; Ombyggnad</h3>
<p className="text-gray-600">Vi hjälper dig förverkliga renoveringar och ombyggnader med respekt för byggnadens historia.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Projekt</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-lg overflow-hidden shadow group">
<img alt="Modern Villa" className="w-full h-52 object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Villa Åsögatan</h4>
<p className="text-gray-600 text-sm">En ljus och öppen villa med utsikt över Södermalm.</p>
</div>
</div>
<div className="rounded-lg overflow-hidden shadow group">
<img alt="Office Space" className="w-full h-52 object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1503389152951-9c3d3e06d20b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Kontor Hornstull</h4>
<p className="text-gray-600 text-sm">Innovativ arbetsmiljö för ett techbolag.</p>
</div>
</div>
<div className="rounded-lg overflow-hidden shadow group">
<img alt="Renovation Project" className="w-full h-52 object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="p-4">
<h4 className="font-semibold text-lg mb-1">Renovering Mariatorget</h4>
<p className="text-gray-600 text-sm">Omsorgsfull renovering av sekelskifteslägenhet.</p>
</div>
</div>
</div>
<div className="text-center mt-8">
<a className="inline-block text-amber-600 font-semibold hover:underline" href="#contact">Se fler projekt →</a>
</div>
</div>
</section>

<section className="py-16 bg-gray-50" id="contact">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-6 text-gray-900">Kontakta Oss</h2>
<p className="mb-8 text-lg text-gray-700">Vill du diskutera ett projekt eller boka en konsultation? Fyll i formuläret nedan så återkommer vi snarast!</p>
<form className="bg-white rounded-lg shadow p-6 space-y-4">
<div>
<label className="block text-gray-700 mb-1" htmlFor="name">Namn</label>
<input className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500" id="name" placeholder="Ditt namn" type="text"/>
</div>
<div>
<label className="block text-gray-700 mb-1" htmlFor="email">E-post</label>
<input className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500" id="email" placeholder="Din e-post" type="email"/>
</div>
<div>
<label className="block text-gray-700 mb-1" htmlFor="message">Meddelande</label>
<textarea className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-amber-500" id="message" placeholder="Ditt meddelande" rows="4"></textarea>
</div>
<button className="bg-amber-600 text-white font-semibold px-6 py-2 rounded hover:bg-amber-700 transition" type="submit">Skicka</button>
</form>
</div>
</section>

<footer className="py-6 bg-gray-900 text-center text-gray-400">
<div>
      © 2024 Södermalm Arkitekter. Alla rättigheter förbehållna.
    </div>
</footer>

    </>
  );
}
