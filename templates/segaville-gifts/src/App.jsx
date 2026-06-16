import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#f5ebdd]/80 backdrop-blur-md border-b border-[#4a2c2a]/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase" href="#">
                Segaville
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-[#4a2c2a]/80">
<a className="hover:text-[#4a2c2a] transition-colors" href="#tentang">Tentang</a>
<a className="hover:text-[#4a2c2a] transition-colors" href="#layanan">Layanan</a>
<a className="hover:text-[#4a2c2a] transition-colors" href="#kontak">Kontak</a>
</div>

<div className="md:hidden flex gap-4 text-xs font-medium text-[#4a2c2a]/80">
<a href="#tentang">Tentang</a>
<a href="#layanan">Layanan</a>
<a href="#kontak">Kontak</a>
</div>
</div>
</nav>
<main className="flex-grow pt-24 pb-20">

<section className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4a2c2a]/5 border border-[#4a2c2a]/10 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span>Secret Gift Smansaville</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#4a2c2a] leading-tight mb-6">
                Secret Gift<br/>Smansaville
            </h1>
<p className="text-base md:text-lg text-[#4a2c2a]/70 max-w-2xl mx-auto leading-relaxed">
                💌 Kirim hadiah sederhana penuh makna untuk teman, sahabat, maupun guru tercinta.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm px-8 py-3 rounded-full hover:opacity-90 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center" href="#paket">
                    Lihat Paket <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 border-t border-[#4a2c2a]/5" id="tentang">
<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Tentang Segaville</h2>
</div>
<div className="md:col-span-8 space-y-6 text-sm md:text-base text-[#4a2c2a]/80 leading-relaxed">
<p>
                        Segaville adalah layanan pengiriman hadiah sederhana untuk menyampaikan pesan penuh makna. Hadiah dapat dikirim secara anonim maupun terbuka, sehingga memberikan kesan spesial bagi penerima.
                    </p>
<p>
                        Layanan ini cocok untuk teman, sahabat, guru tercinta, maupun seseorang yang spesial di hati, baik dalam momen perpisahan maupun sebagai bentuk apresiasi dan perhatian sederhana. Dengan konsep yang sederhana namun berkesan, Segaville hadir untuk membantu menciptakan kenangan indah melalui hadiah yang penuh makna 💌
                    </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-[#4a2c2a]/5" id="layanan">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Cara Pesan</h2>
<p className="text-sm text-[#4a2c2a]/70">Pesan hadiah pilihanmu dengan mudah, hanya dalam beberapa langkah sederhana.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/30 border border-[#4a2c2a]/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffa0a0]/50 transition-colors">
<div className="absolute top-4 right-4 text-4xl font-semibold text-[#4a2c2a]">01</div>
<iconify-icon className="text-2xl text-[#ffa0a0] mb-4" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium mb-2 relative z-10">Pilih Paket</h3>
<p className="text-xs text-[#4a2c2a]/70 relative z-10">Pilih paket hadiah yang paling sesuai dengan keinginanmu.</p>
</div>
<div className="bg-white/30 border border-[#4a2c2a]/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffa0a0]/50 transition-colors">
<div className="absolute top-4 right-4 text-4xl font-semibold text-[#4a2c2a]">02</div>
<iconify-icon className="text-2xl text-[#ffa0a0] mb-4" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium mb-2 relative z-10">Klik Pesan</h3>
<p className="text-xs text-[#4a2c2a]/70 relative z-10">Tekan tombol pesan pada paket yang telah dipilih.</p>
</div>
<div className="bg-white/30 border border-[#4a2c2a]/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffa0a0]/50 transition-colors">
<div className="absolute top-4 right-4 text-4xl font-semibold text-[#4a2c2a]">03</div>
<iconify-icon className="text-2xl text-[#ffa0a0] mb-4" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium mb-2 relative z-10">Isi Format</h3>
<p className="text-xs text-[#4a2c2a]/70 relative z-10">Lengkapi data pengirim, penerima, dan pesan yang ingin disampaikan.</p>
</div>
<div className="bg-white/30 border border-[#4a2c2a]/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffa0a0]/50 transition-colors">
<div className="absolute top-4 right-4 text-4xl font-semibold text-[#4a2c2a]">04</div>
<iconify-icon className="text-2xl text-[#ffa0a0] mb-4" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium mb-2 relative z-10">Pembayaran</h3>
<p className="text-xs text-[#4a2c2a]/70 relative z-10">Lakukan pembayaran sesuai dengan nominal paket secara online/offline.</p>
</div>
<div className="bg-white/30 border border-[#4a2c2a]/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffa0a0]/50 transition-colors">
<div className="absolute top-4 right-4 text-4xl font-semibold text-[#4a2c2a]">05</div>
<iconify-icon className="text-2xl text-[#ffa0a0] mb-4" icon="solar:gallery-send-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium mb-2 relative z-10">Kirim Bukti</h3>
<p className="text-xs text-[#4a2c2a]/70 relative z-10">Kirim screenshot bukti pembayaran ke WhatsApp admin kami.</p>
</div>
<div className="bg-white/30 border border-[#4a2c2a]/5 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffa0a0]/50 transition-colors">
<div className="absolute top-4 right-4 text-4xl font-semibold text-[#4a2c2a]">06</div>
<iconify-icon className="text-2xl text-[#ffa0a0] mb-4" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium mb-2 relative z-10">Diproses</h3>
<p className="text-xs text-[#4a2c2a]/70 relative z-10">Pesanan akan segera diproses setelah pembayaran dikonfirmasi.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-[#4a2c2a]/5" id="paket">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 mb-4">
<span className="text-xl">🎁</span>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pilihan Paket Segaville</h2>
</div>
<p className="text-lg md:text-xl font-medium text-[#4a2c2a]">Penggunaan paperbag tersedia dengan tambahan biaya.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col bg-white/40 border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight">Paket Hemat</h3>
<p className="text-2xl font-medium mt-2">Rp 6.000</p>
</div>
<p className="text-xs text-[#4a2c2a]/70 mb-6 min-h-[60px]">
                        Pilihan sederhana yang tetap manis. Perpaduan permen dan surat cocok untuk menyampaikan pesan singkat dengan cara yang hangat dan menyenangkan.
                    </p>
<div className="flex-grow">
<ul className="space-y-3 text-sm text-[#4a2c2a]/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Permen</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
</ul>
</div>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-3 rounded-2xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%20Hemat%20(6K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                        Pesan <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-col bg-white/40 border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#ffa0a0]/20 text-[#4a2c2a] text-[10px] font-medium px-3 py-1 rounded-bl-xl uppercase tracking-wider z-10">Terlaris</div>
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight">Paket 1</h3>
<p className="text-2xl font-medium mt-2">Rp 18.000</p>
</div>
<p className="text-xs text-[#4a2c2a]/70 mb-6 min-h-[60px]">
                        Kombinasi manis dan elegan. Berisi pocky, bunga, dan surat yang mampu memberikan kesan spesial bagi penerimanya.
                    </p>
<div className="flex-grow">
<ul className="space-y-3 text-sm text-[#4a2c2a]/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Pocky</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bunga</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
</ul>
</div>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-3 rounded-2xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%201%20(18K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                        Pesan <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-col bg-white/40 border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight">Paket 2</h3>
<p className="text-2xl font-medium mt-2">Rp 17.000</p>
</div>
<p className="text-xs text-[#4a2c2a]/70 mb-6 min-h-[60px]">
                        Unik dan menarik perhatian. Bricks, bunga, dan surat menjadi pilihan tepat untuk memberikan hadiah yang berbeda namun tetap berkesan.
                    </p>
<div className="flex-grow">
<ul className="space-y-3 text-sm text-[#4a2c2a]/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bricks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bunga</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
</ul>
</div>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-3 rounded-2xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%202%20(17K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                        Pesan <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-col bg-white/40 border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight">Paket 3</h3>
<p className="text-2xl font-medium mt-2">Rp 13.000</p>
</div>
<p className="text-xs text-[#4a2c2a]/70 mb-6 min-h-[60px]">
                        Sederhana namun tetap berkesan. Perpaduan bricks, permen, dan surat cocok untuk kejutan kecil yang menyenangkan.
                    </p>
<div className="flex-grow">
<ul className="space-y-3 text-sm text-[#4a2c2a]/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bricks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Permen</li>
</ul>
</div>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-3 rounded-2xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%203%20(13K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                        Pesan <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-col bg-white/40 border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight">Paket 4</h3>
<p className="text-2xl font-medium mt-2">Rp 14.000</p>
</div>
<p className="text-xs text-[#4a2c2a]/70 mb-6 min-h-[60px]">
                        Manis dan praktis. Pocky, permen, dan surat menjadi pilihan tepat untuk memberikan kebahagiaan sederhana.
                    </p>
<div className="flex-grow">
<ul className="space-y-3 text-sm text-[#4a2c2a]/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Pocky</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Permen</li>
</ul>
</div>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-3 rounded-2xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%204%20(14K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                        Pesan <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-col bg-white/40 border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight">Paket 5</h3>
<p className="text-2xl font-medium mt-2">Rp 12.000</p>
</div>
<p className="text-xs text-[#4a2c2a]/70 mb-6 min-h-[60px]">
                        Bunga, permen, dan surat memberikan sentuhan hangat dengan tampilan yang tetap menarik.
                    </p>
<div className="flex-grow">
<ul className="space-y-3 text-sm text-[#4a2c2a]/80 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bunga</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Permen</li>
</ul>
</div>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-3 rounded-2xl hover:opacity-90 transition-opacity flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%205%20(12K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                        Pesan <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="md:col-span-2 lg:col-span-3 flex flex-col md:flex-row bg-[#4a2c2a] text-[#f5ebdd] border border-[#4a2c2a]/10 rounded-3xl p-8 hover:shadow-sm transition-all items-center mt-4">
<div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffa0a0]/20 text-[#ffa0a0] text-xs font-medium mb-4">
                            Rekomendasi Spesial
                        </div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Paket Lengkap</h3>
<p className="text-3xl font-medium mt-2 text-[#ffa0a0]">Rp 30.000</p>
<p className="text-sm text-[#f5ebdd]/70 mt-4 max-w-sm">
                            Pilihan terbaik untuk momen spesial. Berisi bunga, bricks, pocky, permen, dan surat—paket lengkap yang siap memberikan kesan mendalam.
                        </p>
</div>
<div className="md:w-1/2 w-full flex flex-col justify-between h-full">
<ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-[#f5ebdd]/90 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bunga</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Bricks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Pocky</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Surat</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ffa0a0] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Permen</li>
</ul>
<a className="w-full bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm py-4 rounded-2xl hover:bg-white hover:text-[#4a2c2a] transition-colors flex justify-center items-center gap-2" href="https://wa.me/6283185088760?text=Halo%20min%20saya%20ingin%20order%20Paket%20Lengkap%20(30K)%0ANama%20Pengirim:%0ANama%20Penerima:%0AUntuk%20(Siswa/Guru):%0AKelas:%0AIsi%20Surat:%0APaperbag%20(Iya/Tidak):" target="_blank">
                            Pesan Paket Lengkap <iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 border-t border-[#4a2c2a]/5">
<div className="bg-white/50 border border-[#4a2c2a]/10 rounded-3xl p-8 md:p-12 text-center">
<iconify-icon className="text-4xl text-[#4a2c2a]/40 mb-6" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight mb-4">Informasi Pembayaran</h2>
<p className="text-sm text-[#4a2c2a]/70 max-w-lg mx-auto mb-8">
                    Pembayaran bisa dilakukan secara online maupun offline ya. Untuk online bisa via DANA, dan untuk offline dapat hubungi admin kami.
                </p>
<div className="bg-[#f5ebdd]/80 border border-[#4a2c2a]/5 rounded-2xl p-6 max-w-sm mx-auto mb-8 text-left flex flex-col gap-1">
<p className="text-xs text-[#4a2c2a]/60 uppercase tracking-wider font-medium mb-1">Transfer DANA</p>
<p className="text-lg font-medium tracking-tight">088279403184</p>
<p className="text-sm text-[#4a2c2a]/80">A.n: D**i Mis****ti</p>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-[#ffa0a0] text-[#4a2c2a] font-medium text-sm px-8 py-3 rounded-full hover:opacity-90 transition-all mb-8" href="https://link.dana.id/" target="_blank">
                    Bayar Via DANA <iconify-icon icon="solar:card-send-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="pt-6 border-t border-[#4a2c2a]/10">
<p className="text-xs text-[#4a2c2a]/80 italic">
                        "Setelah melakukan pembayaran secara online, kirim bukti pembayaran mu, berupa screenshot ke WhatsApp kami yaa..."
                    </p>
<div className="mt-4 inline-block px-4 py-1.5 bg-[#4a2c2a] text-[#f5ebdd] text-[10px] uppercase tracking-wider rounded-full font-medium">
                        Pesanan diproses setelah pembayaran dikonfirmasi
                    </div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 border-t border-[#4a2c2a]/5 text-center" id="kontak">
<h2 className="text-2xl font-semibold tracking-tight mb-4">Kontak Kami</h2>
<p className="text-sm text-[#4a2c2a]/70 mb-8">Mau tanya produk atau info lainnya? Langsung chat admin kami di WhatsApp yaa.</p>
<a className="inline-flex items-center gap-4 bg-white border border-[#4a2c2a]/10 p-4 rounded-2xl hover:border-[#ffa0a0] transition-colors group" href="https://wa.me/6283185088760" target="_blank">
<div className="w-12 h-12 bg-[#ffa0a0]/20 text-[#ffa0a0] rounded-xl flex items-center justify-center group-hover:bg-[#ffa0a0] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left pr-4">
<p className="text-xs text-[#4a2c2a]/60 font-medium">Admin Segaville</p>
<p className="text-base font-medium">6283185088760</p>
</div>
</a>
</section>
</main>

<footer className="bg-[#4a2c2a] text-[#f5ebdd] py-12 border-t border-[#4a2c2a]/10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-lg font-medium tracking-tighter uppercase mb-2">Segaville</p>
<p className="text-xs text-[#f5ebdd]/60">Secret Gift Smansaville.</p>
</div>
<div className="flex flex-col items-center md:items-end">
<p className="text-xs font-medium text-[#f5ebdd]/60 mb-3 uppercase tracking-wider">Follow Us</p>
<div className="flex gap-4">
<a className="flex items-center gap-2 text-sm text-[#f5ebdd]/80 hover:text-[#ffa0a0] transition-colors" href="https://www.instagram.com/smansaville?igsh=MXcxaXl2NnZhYWllOQ==" target="_blank">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
                        @smansaville
                    </a>
<a className="flex items-center gap-2 text-sm text-[#f5ebdd]/80 hover:text-[#ffa0a0] transition-colors" href="https://www.instagram.com/osismpksmansaville?igsh=cmxocjQ0bHl4ZnJp" target="_blank">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
                        @osismpksmansaville
                    </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
