import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function sharePage() {
            if (navigator.share) {
                navigator.share({
                    title: 'Segaville - Secret Gift Smansaville',
                    text: 'Kirim hadiah sederhana penuh makna untuk teman, sahabat, maupun guru tercinta via Segaville!',
                    url: window.location.href
                }).catch((error) => console.log('Error sharing', error));
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Tautan berhasil disalin ke clipboard!');
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#f5ebdd]/80 backdrop-blur-md border-b border-[#4a2c2a]/10">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight uppercase text-[#4a2c2a]" href="#">
                SEGAVILLE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#4a2c2a]/70">
<a className="hover:text-[#4a2c2a] transition-colors" href="#tentang">Tentang</a>
<a className="hover:text-[#4a2c2a] transition-colors" href="#layanan">Layanan</a>
<a className="hover:text-[#4a2c2a] transition-colors" href="#produk">Produk</a>
<a className="hover:text-[#4a2c2a] transition-colors" href="#kontak">Kontak</a>
</div>
<div className="flex items-center gap-3">
<button aria-label="Bagikan" className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-[#ffa0a0] text-[#4a2c2a] hover:bg-[#ff8a8a] transition-colors shadow-sm" onclick="sharePage()">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<a className="bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium px-4 py-2 rounded-full hover:bg-[#ff8a8a] transition-colors shadow-sm" href="#produk">
                    Pesan
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6">
<div className="max-w-3xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-[#4a2c2a]/10 text-xs font-medium text-[#4a2c2a]/80 shadow-sm">
<iconify-icon icon="solar:letter-opened-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Secret Gift Smansaville
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[#4a2c2a] leading-tight">
                Kirim hadiah sederhana penuh makna.
            </h1>
<p className="text-lg text-[#4a2c2a]/70 max-w-xl mx-auto">
                Kirim hadiah untuk teman, sahabat, maupun guru tercinta. Cara termudah untuk menyampaikan perasaan secara anonim maupun terbuka.
            </p>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-base font-medium px-6 py-3 rounded-full hover:bg-[#ff8a8a] transition-all hover:scale-105 active:scale-95 shadow-sm" href="#produk">
                    Lihat Pilihan Paket
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-base font-medium px-6 py-3 rounded-full hover:bg-[#ff8a8a] transition-all shadow-sm" onclick="sharePage()">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Bagikan
                </button>
</div>
</div>
</section>

<section className="py-20 bg-white/30 border-y border-[#4a2c2a]/10" id="tentang">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-[#4a2c2a]">
                    Tentang Segaville
                </h2>
<div className="space-y-4 text-base text-[#4a2c2a]/70 leading-relaxed">
<p>
                        Segaville adalah layanan pengiriman hadiah sederhana untuk menyampaikan pesan penuh makna. Hadiah dapat dikirim secara anonim maupun terbuka, sehingga memberikan kesan spesial bagi penerima.
                    </p>
<p>
                        Layanan ini cocok untuk teman, sahabat, guru tercinta, maupun seseorang yang spesial di hati, baik dalam momen perpisahan maupun sebagai bentuk apresiasi dan perhatian sederhana. 
                    </p>
<p>
                        Dengan konsep yang sederhana namun berkesan, Segaville hadir untuk membantu menciptakan kenangan indah melalui hadiah yang penuh makna 💌
                    </p>
</div>
</div>
<div className="relative rounded-2xl bg-white/40 border border-[#4a2c2a]/10 p-8 aspect-square flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#4a2c2a_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.07]"></div>
<iconify-icon className="text-[#4a2c2a]/20" icon="solar:gift-linear" strokeWidth="1" width="160"></iconify-icon>
</div>
</div>
</section>

<section className="py-20 px-6" id="layanan">
<div className="max-w-5xl mx-auto">
<div className="text-center space-y-4 mb-16">
<h2 className="text-3xl font-medium tracking-tight text-[#4a2c2a]">Cara Pesan</h2>
<p className="text-base text-[#4a2c2a]/70">Pesan hadiah pilihanmu dengan mudah dalam beberapa langkah sederhana.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/40 p-6 rounded-2xl border border-[#4a2c2a]/10 shadow-sm">
<div className="w-10 h-10 rounded-full bg-[#f5ebdd] border border-[#4a2c2a]/10 flex items-center justify-center text-[#4a2c2a] font-medium mb-4">1</div>
<h3 className="text-base font-medium text-[#4a2c2a] mb-2">Pilih Paket</h3>
<p className="text-sm text-[#4a2c2a]/70">Pilih paket yang diinginkan dari daftar produk kami.</p>
</div>
<div className="bg-white/40 p-6 rounded-2xl border border-[#4a2c2a]/10 shadow-sm">
<div className="w-10 h-10 rounded-full bg-[#f5ebdd] border border-[#4a2c2a]/10 flex items-center justify-center text-[#4a2c2a] font-medium mb-4">2</div>
<h3 className="text-base font-medium text-[#4a2c2a] mb-2">Klik Pesan &amp; Isi Format</h3>
<p className="text-sm text-[#4a2c2a]/70">Klik tombol pesan lalu isi format pemesanan yang terhubung ke WhatsApp.</p>
</div>
<div className="bg-white/40 p-6 rounded-2xl border border-[#4a2c2a]/10 shadow-sm">
<div className="w-10 h-10 rounded-full bg-[#f5ebdd] border border-[#4a2c2a]/10 flex items-center justify-center text-[#4a2c2a] font-medium mb-4">3</div>
<h3 className="text-base font-medium text-[#4a2c2a] mb-2">Pembayaran</h3>
<p className="text-sm text-[#4a2c2a]/70">Lakukan pembayaran (Online/Offline) dan kirim screenshot ke WA.</p>
</div>
</div>
<div className="mt-8 text-center text-sm font-medium text-[#4a2c2a]/70 flex items-center justify-center gap-2">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Pesanan diproses setelah pembayaran dikonfirmasi.
            </div>
</div>
</section>

<section className="py-20 px-6 bg-white/20 border-y border-[#4a2c2a]/10" id="produk">
<div className="max-w-5xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#4a2c2a] mb-4">Pilihan Paket</h2>
<p className="text-base text-[#4a2c2a]/70">Temukan paket yang paling pas untuk menyampaikan pesanmu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/40 rounded-2xl p-6 border border-[#4a2c2a]/10 flex flex-col hover:border-[#4a2c2a]/30 transition-colors duration-300">
<div className="mb-4">
<h3 className="text-xl font-normal tracking-tight text-[#4a2c2a] mb-2">Paket Hemat</h3>
<div className="text-2xl font-medium tracking-tight text-[#4a2c2a]">Rp 6.000</div>
</div>
<p className="text-sm text-[#4a2c2a]/70 mb-6 flex-grow">
                        Pilihan sederhana tapi tetap bermakna, cocok untuk menyampaikan perhatian dengan cara yang manis.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-[#4a2c2a]/80">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Permen</li>
</ul>
<a className="w-full inline-flex justify-center items-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium py-3 rounded-xl hover:bg-[#ff8a8a] transition-colors shadow-sm" href="https://wa.me/628116681618?text=halo%20min%20saya%20ingin%20order%20paket%20Hemat%20harga%20Rp%206.000%0Anama%20pengirim%20%3A%0Anama%20penerima%20%3A%0Auntuk%20(Siswa%2FGuru)%3A%0Akelas%20%3A%0Aisi%20surat%20%3A" target="_blank">
                        Pesan Paket Hemat
                        <iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="bg-white/40 rounded-2xl p-6 border border-[#4a2c2a]/10 flex flex-col hover:border-[#4a2c2a]/30 transition-colors duration-300">
<div className="mb-4">
<h3 className="text-xl font-normal tracking-tight text-[#4a2c2a] mb-2">Paket 1</h3>
<div className="text-2xl font-medium tracking-tight text-[#4a2c2a]">Rp 12.000</div>
</div>
<p className="text-sm text-[#4a2c2a]/70 mb-6 flex-grow">
                        Lebih lengkap untuk kesan yang lebih istimewa, siap memberikan kebahagiaan bagi penerima.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-[#4a2c2a]/80">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Bunga</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Permen</li>
</ul>
<a className="w-full inline-flex justify-center items-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium py-3 rounded-xl hover:bg-[#ff8a8a] transition-colors shadow-sm" href="https://wa.me/628116681618?text=halo%20min%20saya%20ingin%20order%20paket%201%20harga%20Rp%2012.000%0Anama%20pengirim%20%3A%0Anama%20penerima%20%3A%0Auntuk%20(Siswa%2FGuru)%3A%0Akelas%20%3A%0Aisi%20surat%20%3A" target="_blank">
                        Pesan Paket 1
                        <iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="bg-white/40 rounded-2xl p-6 border border-[#4a2c2a]/10 flex flex-col hover:border-[#4a2c2a]/30 transition-colors duration-300">
<div className="mb-4">
<h3 className="text-xl font-normal tracking-tight text-[#4a2c2a] mb-2">Paket 2</h3>
<div className="text-2xl font-medium tracking-tight text-[#4a2c2a]">Rp 15.000</div>
</div>
<p className="text-sm text-[#4a2c2a]/70 mb-6 flex-grow">
                        Manis dan menyenangkan dalam satu paket, cocok untuk berbagi kebahagiaan dengan cara yang manis.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-[#4a2c2a]/80">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Pocky</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Permen</li>
</ul>
<a className="w-full inline-flex justify-center items-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium py-3 rounded-xl hover:bg-[#ff8a8a] transition-colors shadow-sm" href="https://wa.me/628116681618?text=halo%20min%20saya%20ingin%20order%20paket%202%20harga%20Rp%2015.000%0Anama%20pengirim%20%3A%0Anama%20penerima%20%3A%0Auntuk%20(Siswa%2FGuru)%3A%0Akelas%20%3A%0Aisi%20surat%20%3A" target="_blank">
                        Pesan Paket 2
                        <iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="bg-white/40 rounded-2xl p-6 border border-[#4a2c2a]/10 flex flex-col hover:border-[#4a2c2a]/30 transition-colors duration-300">
<div className="mb-4">
<h3 className="text-xl font-normal tracking-tight text-[#4a2c2a] mb-2">Paket 3</h3>
<div className="text-2xl font-medium tracking-tight text-[#4a2c2a]">Rp 14.000</div>
</div>
<p className="text-sm text-[#4a2c2a]/70 mb-6 flex-grow">
                        Pilihan unik dengan kesan berbeda, cocok untuk memberikan kejutan sederhana namun berkesan.
                    </p>
<ul className="space-y-3 mb-8 text-sm text-[#4a2c2a]/80">
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Bricks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Permen</li>
</ul>
<a className="w-full inline-flex justify-center items-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium py-3 rounded-xl hover:bg-[#ff8a8a] transition-colors shadow-sm" href="https://wa.me/628116681618?text=halo%20min%20saya%20ingin%20order%20paket%203%20harga%20Rp%2014.000%0Anama%20pengirim%20%3A%0Anama%20penerima%20%3A%0Auntuk%20(Siswa%2FGuru)%3A%0Akelas%20%3A%0Aisi%20surat%20%3A" target="_blank">
                        Pesan Paket 3
                        <iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="bg-white/60 rounded-2xl p-6 border border-[#ffa0a0] flex flex-col md:col-span-2 lg:col-span-2 relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 bg-[#ffa0a0] text-[#4a2c2a] text-xs font-medium px-3 py-1 rounded-bl-lg">Paling Populer</div>
<div className="mb-4">
<h3 className="text-xl font-normal tracking-tight text-[#4a2c2a] mb-2">Paket Lengkap</h3>
<div className="text-3xl font-medium tracking-tight text-[#4a2c2a]">Rp 28.000</div>
</div>
<p className="text-sm text-[#4a2c2a]/70 mb-6 flex-grow max-w-md">
                        Satu paket utuh dengan berbagai kejutan yang siap membuat momen terasa jauh lebih spesial.
                    </p>
<div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm text-[#4a2c2a]/80">
<div className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Bunga</div>
<div className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Pocky</div>
<div className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Surat</div>
<div className="flex items-center gap-3"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Bricks</div>
<div className="flex items-center gap-3 col-span-2"><iconify-icon className="text-[#4a2c2a]/40" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon> Permen</div>
</div>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium px-8 py-3 rounded-xl hover:bg-[#ff8a8a] transition-colors shadow-sm" href="https://wa.me/628116681618?text=halo%20min%20saya%20ingin%20order%20paket%20Lengkap%20harga%20Rp%2028.000%0Anama%20pengirim%20%3A%0Anama%20penerima%20%3A%0Auntuk%20(Siswa%2FGuru)%3A%0Akelas%20%3A%0Aisi%20surat%20%3A" target="_blank">
                        Pesan Paket Lengkap
                        <iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white/30 border-b border-[#4a2c2a]/10">
<div className="max-w-3xl mx-auto text-center space-y-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-[#4a2c2a] mb-3">Pembayaran</h2>
<p className="text-base text-[#4a2c2a]/70">
                    Pembayaran bisa dilakukan secara online maupun offline.
                </p>
</div>
<div className="bg-white/50 rounded-2xl border border-[#4a2c2a]/10 p-8 text-left space-y-6 shadow-sm">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between pb-6 border-b border-[#4a2c2a]/10">
<div>
<div className="text-sm font-normal text-[#4a2c2a]/70 mb-1">Pembayaran Online (DANA)</div>
<div className="text-xl font-medium tracking-tight text-[#4a2c2a]">088279403184</div>
<div className="text-sm text-[#4a2c2a]/70">A.n: D**i Mis****ti</div>
</div>
<a className="inline-flex items-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-[#ff8a8a] transition-colors shadow-sm" href="https://link.dana.id/" target="_blank">
                        Bayar via DANA
                        <iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div>
<div className="text-sm font-normal text-[#4a2c2a]/70 mb-1">Pembayaran Offline</div>
<div className="text-base text-[#4a2c2a]">
                        Bisa langsung bayar di ruang OSIS/MPK.
                    </div>
</div>
</div>
<div className="inline-flex items-center gap-2 bg-[#ffa0a0]/10 text-[#4a2c2a] text-sm px-4 py-3 rounded-xl border border-[#ffa0a0]/30 text-left">
<iconify-icon className="shrink-0" icon="solar:gallery-send-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Setelah pembayaran online, kirim bukti screenshot ke WhatsApp kami.</span>
</div>
</div>
</section>

<footer className="pt-16 pb-8 px-6" id="kontak">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-16">
<div className="text-center md:text-left space-y-2">
<div className="text-lg font-medium tracking-tight text-[#4a2c2a]">SEGAVILLE</div>
<p className="text-sm text-[#4a2c2a]/70">Simple Gift, Big Meaning.</p>
</div>
<div className="bg-white/40 px-6 py-4 rounded-2xl border border-[#4a2c2a]/10 shadow-sm text-center md:text-left">
<div className="text-sm font-medium text-[#4a2c2a] mb-1">Ada pertanyaan?</div>
<p className="text-xs text-[#4a2c2a]/60 mb-3">Langsung chat admin kami.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#4a2c2a] hover:opacity-70 transition-opacity" href="https://wa.me/6283185088760" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    WA: 6283185088760
                </a>
</div>
</div>
<div className="max-w-5xl mx-auto border-t border-[#4a2c2a]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-[#4a2c2a]/50 font-normal">
                © 2026 Segaville - Simple Gift, Big Meaning
            </div>
<div className="flex items-center gap-4 text-[#4a2c2a]/50">
<span className="text-xs font-normal">Follow Us</span>
<a className="hover:text-[#4a2c2a] transition-colors" href="#">
<iconify-icon icon="solar:hashtag-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="hover:text-[#4a2c2a] transition-colors" href="#">
<iconify-icon icon="solar:camera-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
