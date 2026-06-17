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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="font-semibold text-lg tracking-tighter text-neutral-900" href="/">
                        READORA
                    </a>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-neutral-900" href="#">Home</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#katalog">Katalog</a>
</div>

<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors hidden sm:block" href="/login">Login</a>
<a className="bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors shadow-sm" href="/register">
                        Register
                    </a>
</div>
</div>
</div>
</nav>

<header className="relative overflow-hidden bg-white border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 space-y-6 text-center lg:text-left">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
                        Temukan Buku <br className="hidden lg:block"/> Favoritmu di Readora
                    </h1>
<p className="text-base text-neutral-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Jelajahi ribuan koleksi buku fiksi, non-fiksi, hingga literatur akademik. Tingkatkan wawasanmu dengan bacaan berkualitas setiap hari.
                    </p>
<div className="pt-2">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-sm group" href="#katalog">
                            Jelajahi Buku
                            <iconify-icon className="text-base group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full max-w-md lg:max-w-full relative">

<div className="aspect-square lg:aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl border border-neutral-200 shadow-sm flex items-center justify-center relative overflow-hidden">
<iconify-icon className="text-6xl text-neutral-300" icon="solar:book-linear"></iconify-icon>
<div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
</div>
</div>
</div>
</div>
</header>

<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-10">
<form action="/search" className="bg-white rounded-xl shadow-sm border border-neutral-200 p-1.5 flex items-center focus-within:border-neutral-400 focus-within:ring-1 focus-within:ring-neutral-400 transition-all" method="GET">
<div className="pl-3 pr-2 flex items-center text-neutral-400">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="flex-1 w-full bg-transparent border-none focus:ring-0 text-sm text-neutral-900 placeholder-neutral-400 outline-none py-2" name="query" placeholder="Cari judul, penulis, atau ISBN..." type="text"/>
<button className="bg-neutral-100 text-neutral-900 px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors ml-2" type="submit">
                Search
            </button>
</form>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" id="katalog">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Katalog Terbaru</h2>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1" href="/books">
                Lihat Semua <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            @foreach($books as $book)
            <div className="group flex flex-col bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-sm transition-all duration-200">

<div className="aspect-[3/4] bg-neutral-100 relative overflow-hidden border-b border-neutral-100">
<img alt="{{ $book-&gt;title }}" className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'storage/' . $book-&gt;cover_image) }}"/>
</div>

<div className="p-5 flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-900 line-clamp-2 leading-snug mb-1" title="{{ $book-&gt;title }}">
                        {{ $book-&gt;title }}
                    </h3>
<p className="text-xs text-neutral-500 mb-4 line-clamp-1">
                        {{ $book-&gt;author ?? 'Penulis Tidak Diketahui' }}
                    </p>
<div className="mt-auto">
<p className="text-base font-semibold tracking-tight text-neutral-900 mb-4">
                            Rp {{ number_format($book-&gt;price, 0, ',', '.') }}
                        </p>
<div className="flex gap-2">
<a className="flex-1 flex justify-center items-center px-3 py-2 bg-white border border-neutral-200 text-neutral-900 text-xs font-medium rounded-md hover:bg-neutral-50 transition-colors" href="/books/{{ $book-&gt;id }}">
                                Detail
                            </a>
<form action="/cart/add" className="flex-1" method="POST">
                                @csrf
                                <input name="book_id" type="hidden" value="{{ $book-&gt;id }}"/>
<button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-neutral-900 text-white text-xs font-medium rounded-md hover:bg-neutral-800 transition-colors" type="submit">
<iconify-icon className="text-sm" icon="solar:cart-large-2-linear"></iconify-icon> Add
                                </button>
</form>
</div>
</div>
</div>
</div>
            @endforeach
            
</div>
</section>

<section className="bg-white border-y border-neutral-200" id="about">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 mb-4">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:bookmark-circle-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">About Readora</h2>
<p className="text-base text-neutral-500 leading-relaxed">
                Berdiri sejak 2026, Readora berkomitmen untuk menyediakan akses literatur terbaik bagi semua kalangan. Kami percaya bahwa setiap buku memiliki cerita yang mampu mengubah perspektif. Temukan inspirasi barumu di setiap halaman yang kami sediakan.
            </p>
</div>
</section>

<section className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Hubungi Kami</h2>
<p className="text-sm text-neutral-500 mt-2">Ada pertanyaan? Jangan ragu untuk mengirim pesan.</p>
</div>
<form action="/contact" className="space-y-4" method="POST">
            @csrf
            
            <div className="space-y-1">
<label className="block text-xs font-medium text-neutral-700" htmlFor="name">Nama Lengkap</label>
<input className="block w-full rounded-md border border-neutral-200 px-3 py-2 text-sm placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 bg-white transition-all shadow-sm" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-700" htmlFor="email">Alamat Email</label>
<input className="block w-full rounded-md border border-neutral-200 px-3 py-2 text-sm placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 bg-white transition-all shadow-sm" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-700" htmlFor="message">Pesan</label>
<textarea className="block w-full rounded-md border border-neutral-200 px-3 py-2 text-sm placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 bg-white transition-all shadow-sm resize-y" id="message" name="message" placeholder="Tulis pesan Anda di sini..." required="" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" type="submit">
                    Kirim Pesan <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</section>

<footer className="bg-white border-t border-neutral-200 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="font-semibold text-sm tracking-tighter text-neutral-900">
                READORA
            </div>
<p className="text-xs text-neutral-500">
                © 2026 Readora BookStore. All rights reserved.
            </p>
<div className="flex space-x-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
