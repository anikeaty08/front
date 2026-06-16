import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function saveContact() {
            const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Mohamed Gedi Ainashe
TITLE:Director General
ORG:Civil Service Commission - Republic of Somaliland
TEL;TYPE=CELL:+25263446604
TEL;TYPE=WORK:+252634245692
EMAIL:caynaashe45@gmail.com
ADR;TYPE=WORK:;;Hargeisa;Somaliland
END:VCARD`;

            const blob = new Blob([vcard], { type: 'text/vcard' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Mohamed_Gedi_Ainashe.vcf';
            a.click();
            URL.revokeObjectURL(url);
            showToast('Contact saved successfully!', 'success');
        }

        function shareCard() {
            if (navigator.share) {
                navigator.share({
                    title: 'Mohamed Gedi Ainashe - Director General',
                    text: 'Digital Business Card - Civil Service Commission',
                    url: window.location.href
                }).catch(() => {});
            } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showToast('Link copied to clipboard!', 'info');
                });
            }
        }

        function toggleQR() {
            const modal = document.getElementById('qrModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        function closeQR(e) {
            if (e && e.target !== e.currentTarget && !e.target.closest('button')) return;
            const modal = document.getElementById('qrModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }

        function showExchange() {
            showToast('Exchange feature coming soon!', 'info');
        }

        function showToast(message, type = 'info') {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            const colors = {
                success: 'bg-green-700',
                info: 'bg-gray-800',
                error: 'bg-red-600'
            };
            const icons = {
                success: 'solar:check-circle-linear',
                info: 'solar:info-circle-linear',
                error: 'solar:danger-triangle-linear'
            };
            toast.className = `toast pointer-events-auto flex items-center gap-3 ${colors[type]} text-white px-5 py-3 rounded-2xl shadow-2xl text-sm font-medium`;
            toast.innerHTML = `<iconify-icon icon="${icons[type]}" width="18" style="color: white;" stroke-width="1.5"></iconify-icon>${message}`;
            container.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }

        // Close modal on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeQR();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md mx-auto">

<div className="bg-white rounded-3xl card-shadow overflow-hidden relative">

<div className="hero-gradient relative overflow-hidden">
<div className="pattern-overlay absolute inset-0"></div>

<div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-5"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white opacity-5"></div>
<div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white opacity-10"></div>
<div className="relative z-10 px-6 pt-8 pb-20 text-center">

<div className="animate-fade-up delay-1 inline-flex items-center gap-2 bg-white/10 glass rounded-full px-4 py-1.5 mb-6">
<div className="w-5 h-5 rounded-full border border-white/40 flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-white/60"></div>
</div>
<span className="text-white/90 text-xs font-medium tracking-wide uppercase">GOLAHA GUURTIDDA JSL</span>
</div>

<div className="animate-fade-up delay-2">
<h1 className="sm:text-5xl leading-none text-4xl font-medium text-white tracking-tighter font-condensed mb-1">
                        Somaliland Parliament House of Elders
                        </h1>
<p className="text-green-200/80 text-sm font-medium tracking-widest uppercase">Guddida Arrimaha Dibadda, Qorsheynta, Iskaashiga Caalamiga &amp; Maalgashiga</p>
</div>
</div>
</div>

<div className="relative -mt-14 px-6">

<div className="animate-scale delay-3 flex justify-center mb-4">
<div className="relative">
<div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
<span className="text-white text-3xl font-semibold font-serif-custom">MB</span>
</div>
<div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-3 border-white flex items-center justify-center shadow-md">
<iconify-icon icon="solar:verified-check-bold" style={{color: 'white'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="animate-fade-up delay-4 text-center mb-6">
<h2 className="sm:text-3xl text-2xl font-semibold text-gray-900 tracking-tight font-serif-custom mb-1">Hon. Abdiqadir Mohamed
                    Hassan Indho-Indho</h2>
<div className="flex items-center justify-center gap-2 mb-3">
<span className="font-condensed text-base sm:text-lg text-red-600 tracking-wide uppercase font-medium">Chairpman of the Committee on Foreign Affairs,Planning,
                        International Cooperation &amp; Investment </span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="font-condensed text-base sm:text-lg text-red-600 tracking-wide uppercase font-medium"></span>
</div>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
Guddoomiyaha Guddida Arrimaha Dibadda, Qorsheynta, Iskaashiga Caalamiga &amp; Maalgashiga
                    </p>
</div>

<div className="animate-fade-up delay-5 grid grid-cols-2 gap-3 mb-8">
<button className="action-btn flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-2xl py-3.5 px-4 text-sm font-medium shadow-lg shadow-green-700/25" onclick="saveContact()">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5" style={{color: 'white'}} width="18"></iconify-icon>
                        Save Contact
                    </button>
<button className="action-btn flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 rounded-2xl py-3.5 px-4 text-sm font-medium border border-gray-200 shadow-sm" onclick="shareCard()">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" style={{color: '#c9a54e'}} width="18"></iconify-icon>
                        Share Card
                    </button>
</div>
</div>

<div className="px-6 mb-6 animate-fade-up delay-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-px bg-gray-200"></div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Contact</span>
<div className="flex-1 h-px bg-gray-200"></div>
</div>
<div className="space-y-2">

<a className="contact-item flex items-center gap-4 p-3.5 rounded-2xl hover:bg-green-50/60 group cursor-pointer" href="https://wa.me/25263446604">
<div className="w-11 h-11 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{color: '#15803d'}} width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">+252 63 4240289</p>
<p className="text-xs text-gray-400">WhatsApp</p>
</div>
<iconify-icon className="group-hover:text-green-600 transition-colors flex-shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{color: '#d1d5db'}} width="16"></iconify-icon>
</a>

<a className="contact-item flex items-center gap-4 p-3.5 rounded-2xl hover:bg-amber-50/60 group cursor-pointer" href="tel:+252634245692">
<div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" style={{color: '#c9a54e'}} width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 group-hover:text-amber-700 transition-colors">+252 (0) 63 4424289</p>
<p className="text-xs text-gray-400">Mobile</p>
</div>
<iconify-icon className="group-hover:text-amber-600 transition-colors flex-shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{color: '#d1d5db'}} width="16"></iconify-icon>
</a>

<a className="contact-item flex items-center gap-4 p-3.5 rounded-2xl hover:bg-blue-50/60 group cursor-pointer" href="mailto:caynaashe45@gmail.com">
<div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" style={{color: '#3b82f6'}} width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors truncate">chair.fac@guurtigovsomaliland.org</p>
<p className="text-xs text-gray-400">Email</p>
</div>
<iconify-icon className="group-hover:text-blue-600 transition-colors flex-shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{color: '#d1d5db'}} width="16"></iconify-icon>
</a>

<div className="contact-item flex items-center gap-4 p-3.5 rounded-2xl hover:bg-purple-50/60 group cursor-pointer">
<div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-100 transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" style={{color: '#8b5cf6'}} width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Hargeisa, Somaliland</p>
<p className="text-xs text-gray-400">Office Location</p>
</div>
<iconify-icon className="group-hover:text-purple-600 transition-colors flex-shrink-0" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{color: '#d1d5db'}} width="16"></iconify-icon>
</div>
</div>
</div>

<div className="px-6 mb-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-px bg-gray-200"></div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Social</span>
<div className="flex-1 h-px bg-gray-200"></div>
</div>
<div className="flex items-center justify-center gap-3">
<a className="action-btn w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white flex items-center justify-center shadow-lg shadow-pink-500/20" href="#">
<iconify-icon icon="mdi:instagram" width="22"></iconify-icon>
</a>
<a className="action-btn w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shadow-lg shadow-black/20" href="#">
<iconify-icon icon="ri:twitter-x-fill" width="18"></iconify-icon>
</a>
<a className="action-btn w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20" href="#">
<iconify-icon icon="mdi:facebook" width="22"></iconify-icon>
</a>
<a className="action-btn w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-700/20" href="#">
<iconify-icon icon="mdi:linkedin" width="22"></iconify-icon>
</a>
<a className="action-btn w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-600/20" href="#">
<iconify-icon icon="mdi:whatsapp" width="22"></iconify-icon>
</a>
</div>
</div>

<div className="px-6 mb-6">
<div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center">
<div className="qr-hover relative inline-block cursor-pointer mb-3" onclick="toggleQR()">
<div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 inline-block">
<img alt="QR Code" className="w-32 h-32 sm:w-36 sm:h-36" src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&amp;data=BEGIN:VCARD%0AVERSION:3.0%0AFN:Mohamed%20Gedi%20Ainashe%0ATITLE:Director%20General%0AORG:Civil%20Service%20Commission%0ATEL:+25263446604%0ATEL:+252634245692%0AEMAIL:caynaashe45@gmail.com%0AEND:VCARD&amp;color=15803d&amp;bgcolor=ffffff"/>
</div>
<div className="qr-overlay absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl opacity-0">
<div className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" style={{color: '#374151'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Tap to enlarge</span>
</div>
</div>
</div>
<p className="text-xs text-gray-500 font-medium">Scan to save contact instantly</p>
</div>
</div>

<div className="px-6 mb-6">
<button className="action-btn w-full flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white rounded-2xl py-4 px-6 text-sm font-medium shadow-xl shadow-gray-900/20" onclick="showExchange()">
<iconify-icon icon="solar:card-transfer-linear" strokeWidth="1.5" style={{color: 'white'}} width="20"></iconify-icon>
                    Exchange Contact Info
                    <div className="ml-auto w-6 h-6 rounded-full bg-white/15 flex items-center justify-center">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" style={{color: 'white'}} width="14"></iconify-icon>
</div>
</button>
</div>

<div className="px-6 pb-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-gray-400">Digital Business Card</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-gray-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Verified</span>
</div>
</div>
</div>
</div>

<div className="text-center mt-4 mb-2">
<p className="text-xs text-gray-400">PARLIAMENT HOUSE OF ELDERS (GUURTI)</p>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="qrModal" onclick="closeQR(event)">
<div className="modal-backdrop absolute inset-0 bg-black/60 glass"></div>
<div className="modal-content relative bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" onclick="closeQR()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{color: '#6b7280'}} width="20"></iconify-icon>
</button>
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Scan QR Code</h3>
<p className="text-sm text-gray-500 mt-1">Point your camera to save contact</p>
</div>
<div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 inline-block mb-4">
<img alt="QR Code" className="w-56 h-56" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data=BEGIN:VCARD%0AVERSION:3.0%0AFN:Mohamed%20Gedi%20Ainashe%0ATITLE:Director%20General%0AORG:Civil%20Service%20Commission%0ATEL:+25263446604%0ATEL:+252634245692%0AEMAIL:caynaashe45@gmail.com%0AEND:VCARD&amp;color=15803d&amp;bgcolor=ffffff"/>
</div>
<p className="text-xs text-gray-400">Mohamed Gedi Ainashe • Director General</p>
</div>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 items-center pointer-events-none" id="toastContainer"></div>


    </>
  );
}
