import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'XXXXXXXXXXXXXXX');
fbq('track', 'PageView');



!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
ttq.load('XXXXXXXXXXXXXXX');
ttq.page();
}(window, document, 'ttq');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for fade-in animations on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('section > div').forEach((el) => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-playfair text-xl tracking-tighter font-semibold text-white uppercase relative group" href="#">
                MAE
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00FF88] transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-[#F5F5F5]">
<a className="hover:text-white transition-colors" href="#about">Sistem</a>
<a className="hover:text-white transition-colors" href="#programs">Uzmanlık</a>
<a className="hover:text-white transition-colors" href="#results">Dönüşümler</a>
<a className="hover:text-white transition-colors" href="#pricing">Paketler</a>
<a className="hover:text-white transition-colors" href="#faq">SSS</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm text-[#F5F5F5] hover:text-[#00FF88] transition-colors" href="https://wa.me/905532180727?text=Merhaba,%20dönüşüm%20programları%20hakkında%20bilgi%20almak%20istiyorum." target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
                    İletişim
                </a>
<a className="bg-white text-[#0A0A0A] text-xs uppercase tracking-widest py-2.5 px-5 font-medium hover:bg-[#F5F5F5] transition-colors flex items-center gap-2" href="tel:05532180727">
<iconify-icon className="text-base" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    Hemen Ara
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0 bg-[#1E1E1E]">
<img alt="Elite Fitness Aesthetic" className="w-full h-full object-cover object-top opacity-40 animate-zoom mix-blend-luminosity" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse"></span>
<span className="text-xs text-[#F5F5F5] tracking-widest uppercase">Sınırlı Sayıda Danışan</span>
</div>
<h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
                Disiplinle Şekillenen Bir Vücut.<br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Kontrol Senin Elinde.</span>
</h1>
<p className="text-base md:text-xl text-[#F5F5F5] max-w-2xl mx-auto font-normal mb-10 leading-relaxed opacity-90">
                Mehmet Ali Erben ile profesyonel vücut dönüşüm süreci. Sadece ağırlık kaldırmak değil, bir kimlik inşası.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#00FF88] text-[#0A0A0A] py-4 px-8 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-[#00CC6A] hover:shadow-[0_0_25px_rgba(0,255,136,0.25)] flex items-center justify-center gap-2 group" href="#pricing">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
                    Değişime Başla
                </a>
<a className="w-full sm:w-auto border border-white/20 text-white py-4 px-8 text-sm font-medium tracking-wide uppercase hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 flex items-center justify-center gap-2" href="#results">
                    Dönüşümleri Gör
                    <iconify-icon className="text-lg" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-sm text-white/60">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FF88]" icon="solar:star-fall-linear"></iconify-icon>
                    1000+ Dönüşüm
                </div>
<div className="w-1 h-1 rounded-full bg-white/20"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FF88]" icon="solar:shield-check-linear"></iconify-icon>
                    Sürdürülebilir Sistem
                </div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#1E1E1E]/30 backdrop-blur-md py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center gap-3">
<iconify-icon className="text-2xl text-[#00FF88]" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-[#F5F5F5]">Kişiye Özel Program</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3">
<iconify-icon className="text-2xl text-[#00FF88]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-[#F5F5F5]">Kanıtlanmış Sistem</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3">
<iconify-icon className="text-2xl text-[#00FF88]" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-[#F5F5F5]">Sürekli Koçluk Desteği</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-3">
<iconify-icon className="text-2xl text-[#00FF88]" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-[#F5F5F5]">Gerçek Dönüşümler</span>
</div>
</div>
</div>
</div>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-tr from-[#00FF88]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
<img alt="Mehmet Ali Erben Coaching" className="relative z-10 w-full aspect-[4/5] object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 p-4">
<p className="font-playfair tracking-tight text-xl font-semibold text-white">Mehmet Ali Erben</p>
<p className="text-xs text-[#00FF88] uppercase tracking-widest mt-1">Elite Fitness Koçu</p>
</div>
</div>
<div>
<h2 className="font-playfair text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Sonuç Üreten Sistem</h2>
<p className="text-base text-[#F5F5F5]/80 mb-6 leading-relaxed">
                        Yıllar süren deneme yanılma süreçlerini unutun. Estetik, güçlü ve sağlıklı bir fiziğe ulaşmak şans eseri değil, doğru strateji ve sarsılmaz bir disiplinin sonucudur.
                    </p>
<p className="text-base text-[#F5F5F5]/80 mb-10 leading-relaxed">
                        Benim sistemim sıradan diyet listeleri veya ezbere antrenman programlarından ibaret değildir. Hayat tarzınıza entegre olan, sürdürülebilir ve tamamen hedefinize yönelik kişiselleştirilmiş bir dönüşüm haritasıdır. Bahaneleri ortadan kaldırır, sonuçlara odaklanırız.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#00FF88] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-[#F5F5F5]">Sadece estetik değil, fonksiyonel güç gelişimi.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#00FF88] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-[#F5F5F5]">Zaman kaybını önleyen net ve hedefe yönelik analiz.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#00FF88] mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-[#F5F5F5]">Motivasyona değil, disipline dayalı ilerleme takibi.</span>
</li>
</ul>
<div className="bg-[#1E1E1E]/50 border-l-2 border-[#00FF88] p-5">
<p className="text-sm italic text-white/90">"Burada standart programlar yok. Sınırlı sayıda danışanla, maksimum odaklanma ve garanti sonuç üzerine çalışıyoruz."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1E1E1E]/20 relative border-t border-white/5" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#00FF88] text-xs font-semibold tracking-widest uppercase mb-3 block">Hedefinize Uygun</span>
<h2 className="font-playfair text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Uzmanlık Alanları</h2>
<p className="text-sm text-[#F5F5F5]/70 max-w-xl mx-auto">Programlar kişiye özel olarak belirlenir. İhtiyacınız olan strateji, ilk analiz görüşmemizde netleşir.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#0A0A0A] border border-white/5 p-8 hover:border-[#00FF88]/30 transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden">
<iconify-icon className="text-4xl text-white/40 mb-6 group-hover:text-[#00FF88] group-hover:-translate-y-2 transition-all duration-500" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-playfair text-xl tracking-tight font-semibold text-white group-hover:-translate-y-2 transition-transform duration-500">Yağ Yakımı</h3>
<div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 delay-75">
<p className="text-sm text-[#F5F5F5]/60 leading-relaxed">Kas kütlesini koruyarak inatçı yağlardan kurtulun. Metabolizmayı hızlandıran stratejik beslenme ve antrenman.</p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 p-8 hover:border-[#00FF88]/30 transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden">
<iconify-icon className="text-4xl text-white/40 mb-6 group-hover:text-[#00FF88] group-hover:-translate-y-2 transition-all duration-500" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-playfair text-xl tracking-tight font-semibold text-white group-hover:-translate-y-2 transition-transform duration-500">Kas Geliştirme</h3>
<div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 delay-75">
<p className="text-sm text-[#F5F5F5]/60 leading-relaxed">Kuru kas kütlesi inşası için hipertrofi odaklı, bilime dayalı antrenman ve recovery planlaması.</p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 p-8 hover:border-[#00FF88]/30 transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden">
<iconify-icon className="text-4xl text-white/40 mb-6 group-hover:text-[#00FF88] group-hover:-translate-y-2 transition-all duration-500" icon="solar:accessibility-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-playfair text-xl tracking-tight font-semibold text-white group-hover:-translate-y-2 transition-transform duration-500">Vücut Şekillendirme</h3>
<div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 delay-75">
<p className="text-sm text-[#F5F5F5]/60 leading-relaxed">Estetik oranları yakalamak için zayıf bölgeleri hedef alan, postür düzelten heykeltıraş yaklaşımı.</p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 p-8 hover:border-[#00FF88]/30 transition-all duration-500 group flex flex-col h-full cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#00FF88] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-wider py-1 px-3">Premium</div>
<iconify-icon className="text-4xl text-white/40 mb-6 group-hover:text-[#00FF88] group-hover:-translate-y-2 transition-all duration-500" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-playfair text-xl tracking-tight font-semibold text-white group-hover:-translate-y-2 transition-transform duration-500">Online Koçluk</h3>
<div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-4 transition-all duration-500 delay-75">
<p className="text-sm text-[#F5F5F5]/60 leading-relaxed">Mesafe tanımaksızın, iletişim ve anlık müdahaleler ile %100 kişiselleştirilmiş takip sistemi.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-playfair text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Gerçek Sonuçlar</h2>
<p className="text-sm text-[#F5F5F5]/70 max-w-lg">Sözler değil, kanıtlar konuşur. Sisteme sadık kalan danışanların hayat değiştiren fiziksel ve zihinsel dönüşümleri.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0A0A0A] transition-colors"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0A0A0A] transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto hide-scroll pb-8 snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[400px] snap-center relative group">
<div className="aspect-[4/5] bg-[#1E1E1E] relative overflow-hidden">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full border-r border-white/10 relative">
<img alt="Önceki Hal" className="w-full h-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase px-2 py-1 tracking-widest">Önce</span>
</div>
<div className="w-1/2 h-full relative">
<img alt="Sonraki Hal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-[#00FF88] text-black text-[10px] uppercase px-2 py-1 tracking-widest font-semibold">Sonra</span>
</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-semibold text-white">Caner Y.</h4>
<span className="text-xs text-[#00FF88] border border-[#00FF88]/30 px-2 py-0.5">-12kg Yağ Yakımı</span>
</div>
<p className="text-sm text-[#F5F5F5]/60">"Daha önce defalarca deneyip pes etmiştim. Mehmet Ali hocanın sistemiyle disiplini öğrendim. Sonuç ortada."</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center relative group">
<div className="aspect-[4/5] bg-[#1E1E1E] relative overflow-hidden">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full border-r border-white/10 relative">
<img alt="Önceki Hal" className="w-full h-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase px-2 py-1 tracking-widest">Önce</span>
</div>
<div className="w-1/2 h-full relative">
<img alt="Sonraki Hal" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-[#00FF88] text-black text-[10px] uppercase px-2 py-1 tracking-widest font-semibold">Sonra</span>
</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-semibold text-white">Burak T.</h4>
<span className="text-xs text-[#00FF88] border border-[#00FF88]/30 px-2 py-0.5">+6kg Saf Kas</span>
</div>
<p className="text-sm text-[#F5F5F5]/60">"Ektomorf yapım yüzünden kilo alamıyordum. Beslenme ve antrenman planlaması sayesinde hacim kazandım."</p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center relative group">
<div className="aspect-[4/5] bg-[#1E1E1E] relative overflow-hidden">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full border-r border-white/10 relative">
<img alt="Önceki Hal" className="w-full h-full object-cover opacity-60 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase px-2 py-1 tracking-widest">Önce</span>
</div>
<div className="w-1/2 h-full relative">
<img alt="Sonraki Hal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-[#00FF88] text-black text-[10px] uppercase px-2 py-1 tracking-widest font-semibold">Sonra</span>
</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-semibold text-white">Ozan D.</h4>
<span className="text-xs text-[#00FF88] border border-[#00FF88]/30 px-2 py-0.5">Vücut Şekillendirme</span>
</div>
<p className="text-sm text-[#F5F5F5]/60">"Hedefim sadece zayıflamak değil fit görünmekti. Sistem ve yönlendirmeler kusursuz işledi."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1E1E1E]/20 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">Çalışma Süreci</h2>
<div className="relative">
<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-white/10"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-[#00FF88] flex items-center justify-center text-[#00FF88] font-playfair font-semibold text-lg mb-4 shadow-[0_0_15px_rgba(0,255,136,0.15)]">1</div>
<h4 className="text-sm font-semibold text-white mb-2">Analiz</h4>
<p className="text-xs text-[#F5F5F5]/60">Mevcut durum, hedefler ve yaşam tarzı değerlendirmesi.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-playfair font-semibold text-lg mb-4">2</div>
<h4 className="text-sm font-semibold text-white mb-2">Kişisel Plan</h4>
<p className="text-xs text-[#F5F5F5]/60">Sadece size özel beslenme ve antrenman stratejisinin inşası.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-playfair font-semibold text-lg mb-4">3</div>
<h4 className="text-sm font-semibold text-white mb-2">Uygulama</h4>
<p className="text-xs text-[#F5F5F5]/60">Disiplinli başlangıç ve sisteme adaptasyon süreci.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white font-playfair font-semibold text-lg mb-4">4</div>
<h4 className="text-sm font-semibold text-white mb-2">Takip</h4>
<p className="text-xs text-[#F5F5F5]/60">Haftalık check-in'ler, form kontrolü ve anlık revizyonlar.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#00FF88] text-[#0A0A0A] flex items-center justify-center font-playfair font-semibold text-lg mb-4 shadow-[0_0_20px_rgba(0,255,136,0.4)]">5</div>
<h4 className="text-sm font-semibold text-white mb-2">Dönüşüm</h4>
<p className="text-xs text-[#F5F5F5]/60">Yeni ve estetik bir kimliğe kalıcı olarak ulaşım.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative border-y border-white/5" id="pricing">
<div className="absolute inset-0 bg-[#00FF88]/[0.02] mix-blend-screen pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-[#00FF88] text-xs font-semibold tracking-widest uppercase mb-3 block">Sınırlı Kontenjan • Kişiye Özel Takip</span>
<h2 className="font-playfair text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Koçluk Paketleri</h2>
<p className="text-sm text-[#F5F5F5]/70 max-w-xl mx-auto">Hedefinize en uygun yolu seçin. Karar verdiğiniz an değişim başlar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="bg-[#1E1E1E]/40 border border-white/10 p-8 md:p-10 hover:border-[#00FF88]/30 transition-all duration-500 rounded-sm">
<h3 className="font-playfair text-2xl font-semibold text-white mb-2">Natural Paket</h3>
<div className="text-[#F5F5F5]/60 text-sm mb-8 flex items-center gap-3">
<span className="font-medium text-white">8 Hafta — 6.000 TL</span>
<span className="text-white/20">|</span>
<span className="font-medium text-white">12 Hafta — 7.500 TL</span>
</div>
<ul className="space-y-3.5 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Kişisel antrenman programı</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Beslenme planlaması</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Kardiyo planlaması</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Vitamin &amp; supplement önerisi</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Form analizi (foto/video)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Teknik düzeltme geri bildirimleri</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Haftalık kontrol</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Geri dönüşe göre plan güncelleme</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Haftalık teknik video analizi</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Makro güncellemesi (gelişime göre)</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Yaşam tarzına uygun planlama</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">Haftalık Q&amp;A destek</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm text-[#F5F5F5]">7/24 WhatsApp iletişim</span></li>
</ul>
<a className="w-full border border-white/20 text-white py-4 px-6 text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-[#0A0A0A] transition-colors flex items-center justify-center gap-2 group" href="https://wa.me/905532180727?text=Merhaba,%20Natural%20Paket%20hakkında%20bilgi%20almak%20istiyorum." target="_blank">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:whatsapp-linear"></iconify-icon>
                        WhatsApp'tan Başla
                    </a>
</div>

<div className="bg-[#1E1E1E] border border-[#00FF88]/40 p-8 md:p-10 shadow-[0_0_30px_rgba(0,255,136,0.1)] hover:shadow-[0_0_40px_rgba(0,255,136,0.2)] md:scale-[1.02] transition-all duration-500 relative rounded-sm">
<div className="absolute top-0 right-6 -translate-y-1/2 bg-[#00FF88] text-[#0A0A0A] text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 shadow-lg flex items-center gap-1.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                        En Çok Tercih Edilen
                    </div>
<h3 className="font-playfair text-2xl font-semibold text-[#00FF88] mb-2">İleri Seviye Paket</h3>
<div className="text-[#F5F5F5]/80 text-sm font-medium mb-8 flex items-center gap-3">
<span className="text-white">8 Hafta — 10.000 TL</span>
<span className="text-white/20">|</span>
<span className="text-white">14 Hafta — 13.500 TL</span>
</div>
<div className="text-xs font-semibold text-white/50 tracking-widest uppercase mb-4 pb-4 border-b border-white/10">Natural Paket + Ekstralar:</div>
<ul className="space-y-3.5 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:shield-check-bold"></iconify-icon><span className="text-sm font-medium text-white">Team Mali Extras</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:shield-check-bold"></iconify-icon><span className="text-sm text-[#F5F5F5]">Kişiye özel ileri seviye performans protokolü</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:shield-check-bold"></iconify-icon><span className="text-sm text-[#F5F5F5]">Süreç boyunca detaylı analiz ve ilerleme takibi</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:shield-check-bold"></iconify-icon><span className="text-sm text-[#F5F5F5]">Kan değerlerine göre gelişim değerlendirmesi</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:shield-check-bold"></iconify-icon><span className="text-sm text-[#F5F5F5]">Sporcu sağlığı odaklı haftalık ölçüm rehberi</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-lg text-[#00FF88] mt-0.5 shrink-0" icon="solar:shield-check-bold"></iconify-icon><span className="text-sm text-[#F5F5F5]">Düzenli kan tahlili kontrol listesi</span></li>
</ul>
<a className="w-full bg-[#00FF88] text-[#0A0A0A] py-4 px-6 text-sm font-semibold tracking-wide uppercase hover:bg-[#00CC6A] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all flex items-center justify-center gap-2 group" href="https://wa.me/905532180727?text=Merhaba,%20İleri%20Seviye%20Paket%20hakkında%20bilgi%20almak%20istiyorum." target="_blank">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:whatsapp-bold"></iconify-icon>
                        Üst Seviye Başla
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-playfair text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center">Sıkça Sorulan Sorular</h2>
<div className="space-y-4">
<details className="bg-[#1E1E1E]/40 border border-white/10 group rounded-none">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-sm text-white select-none">
                        Ne kadar sürede sonuç alırım?
                        <span className="text-[#00FF88] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
</summary>
<div className="p-6 pt-0 text-sm text-[#F5F5F5]/70 leading-relaxed border-t border-white/5 mt-2">
                        Sonuç alma süresi kişinin genetiğine, başlangıç formuna ve programa sadakatine göre değişir. Ancak sisteme eksiksiz uyulduğunda ilk 4 hafta içinde gözle görülür estetik ve enerji değişimleri başlar. Gerçek bir transformasyon için minimum 8-12 haftalık bir taahhüt öneriyoruz.
                    </div>
</details>
<details className="bg-[#1E1E1E]/40 border border-white/10 group rounded-none">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-sm text-white select-none">
                        Programlar kişiye özel mi?
                        <span className="text-[#00FF88] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
</summary>
<div className="p-6 pt-0 text-sm text-[#F5F5F5]/70 leading-relaxed border-t border-white/5 mt-2">
                        Kesinlikle. Kopyala-yapıştır programlar kullanmıyoruz. Yaşınız, cinsiyetiniz, iş hayatınız, sakatlık geçmişiniz, antrenman tecrübeniz ve hatta sevdiğiniz besinler göz önünde bulundurularak size en uygun, sürdürülebilir plan hazırlanır.
                    </div>
</details>
<details className="bg-[#1E1E1E]/40 border border-white/10 group rounded-none">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-sm text-white select-none">
                        Online koçluk gerçekten etkili mi?
                        <span className="text-[#00FF88] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
</summary>
<div className="p-6 pt-0 text-sm text-[#F5F5F5]/70 leading-relaxed border-t border-white/5 mt-2">
                        Evet, çoğu zaman yanınızda olan bir antrenörden daha etkilidir çünkü tüm gününüzü, beslenmenizi ve toparlanmanızı planlarız. Video analizleri ile formunuzu düzeltir, haftalık form takibi ile motivasyonunuzu ve disiplininizi en üst seviyede tutarız.
                    </div>
</details>
<details className="bg-[#1E1E1E]/40 border border-white/10 group rounded-none">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-sm text-white select-none">
                        Diyet zor mu? Sevdiğim yemekleri yiyebilecek miyim?
                        <span className="text-[#00FF88] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
</summary>
<div className="p-6 pt-0 text-sm text-[#F5F5F5]/70 leading-relaxed border-t border-white/5 mt-2">
                        Amacımız sizi aç bırakmak değil, doğru beslenmeyi öğretmektir. Makro besin takibi sistemi ile esnek diyet uyguluyoruz. Doğru porsiyon kontrolü ile hedefinize giden yolda sevdiğiniz yiyeceklere de yer verebilirsiniz. Sürdürülebilirlik en büyük kuralımızdır.
                    </div>
</details>
<details className="bg-[#1E1E1E]/40 border border-white/10 group rounded-none">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-sm text-white select-none">
                        Daha önce çok kez başarısız oldum, bu sefer işe yarar mı?
                        <span className="text-[#00FF88] text-xl transition-transform duration-300 group-open:rotate-45">+</span>
</summary>
<div className="p-6 pt-0 text-sm text-[#F5F5F5]/70 leading-relaxed border-t border-white/5 mt-2">
                        Önceki başarısızlıklarınız sizin suçunuz değil, uyguladığınız yanlış veya sürdürülemez yöntemlerin sonucudur. Burada sadece bir liste vermiyoruz; disiplin, alışkanlık yönetimi ve mindset üzerine çalışıyoruz. Kararlıysanız, sistem sizi başarıya götürecektir.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[#00FF88]/5"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-transparent opacity-80"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-playfair text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">Değişim Bir Kararla Başlar.</h2>
<p className="text-base text-[#F5F5F5]/80 mb-12 max-w-2xl mx-auto">Zaman geçiyor. Bekleyerek hiçbir şey değişmeyecek. Estetik, güçlü ve sağlıklı versiyonuna ulaşmak için ilk adımı şimdi at.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto bg-[#00FF88] text-[#0A0A0A] py-5 px-10 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-[#00CC6A] hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] flex items-center justify-center gap-2" href="https://wa.me/905532180727?text=Merhaba,%20dönüşüm%20programları%20hakkında%20bilgi%20almak%20ve%20başlamak%20istiyorum." target="_blank">
<iconify-icon className="text-xl" icon="solar:whatsapp-linear"></iconify-icon>
                    WhatsApp'tan Yaz
                </a>
<a className="w-full sm:w-auto text-white py-5 px-10 text-sm font-medium tracking-wide uppercase hover:text-[#00FF88] transition-colors flex items-center justify-center gap-2 group" href="tel:05532180727">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
                    0553 218 07 27
                </a>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-playfair text-xl tracking-tighter font-semibold text-white">MAE</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-[#F5F5F5]/60">
<a className="hover:text-white transition-colors" href="tel:05532180727">0553 218 07 27</a>
<span className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></span>
<a className="hover:text-white transition-colors" href="https://wa.me/905532180727" target="_blank">WhatsApp Destek</a>
</div>
<div className="flex items-center gap-4">
<a className="text-white/60 hover:text-[#00FF88] transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="text-white/60 hover:text-[#00FF88] transition-colors" href="#">
<iconify-icon className="text-2xl" icon="ic:baseline-tiktok"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left text-xs text-white/30">
            © 2024 Mehmet Ali Erben. Tüm Hakları Saklıdır.
        </div>
</footer>

<a className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#00FF88] text-[#0A0A0A] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300 group" href="https://wa.me/905532180727?text=Merhaba,%20web%20sitenizden%20ulaşıyorum." target="_blank">
<iconify-icon className="text-3xl group-hover:animate-pulse" icon="solar:whatsapp-bold"></iconify-icon>
</a>

<div className="fixed bottom-0 left-0 w-full bg-[#0A0A0A]/90 backdrop-blur-lg border-t border-white/10 p-4 flex md:hidden gap-3 z-40">
<a className="flex-1 bg-[#00FF88] text-[#0A0A0A] py-3 text-xs font-semibold tracking-wide uppercase flex items-center justify-center gap-2" href="#pricing">
            Paketleri İncele
        </a>
<a className="flex-1 border border-white/20 text-white py-3 text-xs font-medium tracking-wide uppercase flex items-center justify-center gap-2" href="https://wa.me/905532180727?text=Merhaba,%20dönüşümüne%20başlamak%20istiyorum." target="_blank">
<iconify-icon className="text-base" icon="solar:whatsapp-linear"></iconify-icon>
            İletişim
        </a>
</div>


    </>
  );
}
