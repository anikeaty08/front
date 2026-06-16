import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Global state
        let currentCalculator = null;

        // Currency formatting
        function formatCurrency(input) {
            let value = input.value.replace(/[^\d]/g, '');
            if (value) {
                input.value = new Intl.NumberFormat('id-ID').format(parseInt(value));
            }
        }

        function parseCurrency(value) {
            return parseInt(value.replace(/[^\d]/g, '') || '0');
        }

        function formatIDR(amount) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        }

        // Navigation functions
        function showCalculator(type) {
            // Hide selection
            document.getElementById('calculator-selection').style.display = 'none';
            
            // Hide all calculators
            ['pbb-calculator', 'bphtb-calculator', 'regional-calculator'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            
            // Show selected calculator
            document.getElementById(type + '-calculator').classList.remove('hidden');
            document.getElementById(type + '-calculator').classList.add('slide-in');
            
            currentCalculator = type;
            
            // Track event
            trackEvent('calc_start', { tax_type: type, source: getSource() });
        }

        function showSelection() {
            // Hide all calculators
            ['pbb-calculator', 'bphtb-calculator', 'regional-calculator'].forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });
            
            // Show selection
            document.getElementById('calculator-selection').style.display = 'grid';
            currentCalculator = null;
        }

        // PBB Calculator
        function calculatePBB() {
            const njopInput = document.getElementById('pbb-njop').value;
            const isUnregistered = document.getElementById('pbb-pendataan').checked;
            
            if (!njopInput) return;
            
            const njop = parseCurrency(njopInput);
            if (njop <= 0) {
                trackEvent('calc_error', { error_code: 'invalid_input', tax_type: 'pbb' });
                return;
            }
            
            try {
                // Calculate NJOP PBB
                const NJOPTKP = 10000000; // 10 million
                const njopPBB = Math.max(njop - NJOPTKP, 0);
                
                // Determine percentage based on NJOP PBB
                let percentage;
                if (isUnregistered) {
                    percentage = 100;
                } else if (njopPBB < 50000000) percentage = 30;
                else if (njopPBB < 100000000) percentage = 40;
                else if (njopPBB < 250000000) percentage = 50;
                else if (njopPBB < 500000000) percentage = 55;
                else if (njopPBB < 1000000000) percentage = 60;
                else if (njopPBB < 2000000000) percentage = 75;
                else percentage = 80;
                
                const njopFinal = njopPBB * (percentage / 100);
                
                // Determine tariff based on NJOP Final
                let tariff;
                if (njopFinal < 50000000) tariff = 0.125;
                else if (njopFinal < 100000000) tariff = 0.150;
                else if (njopFinal < 250000000) tariff = 0.175;
                else if (njopFinal < 500000000) tariff = 0.200;
                else if (njopFinal < 1000000000) tariff = 0.230;
                else if (njopFinal < 2000000000) tariff = 0.320;
                else tariff = 0.350;
                
                const pokokPBB = Math.round(njopFinal * (tariff / 100));
                
                // Display results
                document.getElementById('pbb-njop-result').textContent = formatIDR(njopPBB);
                document.getElementById('pbb-percentage').textContent = percentage + '%';
                document.getElementById('pbb-njop-final').textContent = formatIDR(njopFinal);
                document.getElementById('pbb-tarif').textContent = tariff + '%';
                document.getElementById('pbb-pokok').textContent = formatIDR(pokokPBB);
                
                document.getElementById('pbb-result').classList.remove('hidden');
                document.getElementById('pbb-result').classList.add('slide-in');
                
                trackEvent('calc_success', { tax_type: 'pbb', amount: pokokPBB });
            } catch (error) {
                trackEvent('calc_error', { error_code: 'calculation_error', tax_type: 'pbb' });
            }
        }

        // BPHTB Calculator
        function handleWarisToggle() {
            const warisChecked = document.getElementById('bphtb-waris').checked;
            const transaksiContainer = document.getElementById('bphtb-transaksi-container');
            const transaksiInput = document.getElementById('bphtb-transaksi');
            
            if (warisChecked) {
                transaksiContainer.classList.add('opacity-50', 'pointer-events-none');
                transaksiInput.checked = false;
                transaksiInput.disabled = true;
            } else {
                transaksiContainer.classList.remove('opacity-50', 'pointer-events-none');
                transaksiInput.disabled = false;
            }
        }

        function calculateBPHTB() {
            const npopInput = document.getElementById('bphtb-npop').value;
            const isWaris = document.getElementById('bphtb-waris').checked;
            const isTransaksi = document.getElementById('bphtb-transaksi').checked;
            
            if (!npopInput) return;
            
            const npop = parseCurrency(npopInput);
            if (npop <= 0) {
                trackEvent('calc_error', { error_code: 'invalid_input', tax_type: 'bphtb' });
                return;
            }
            
            try {
                // Determine NPOPTKP
                let npoptkp;
                let infoText;
                
                if (isTransaksi && !isWaris) {
                    npoptkp = 0;
                    infoText = "Pernah Transaksi (NPOPTKP: Rp 0)";
                } else if (isWaris) {
                    npoptkp = 300000000; // 300 million
                    infoText = "Waris/Hibah Wasiat (NPOPTKP: Rp 300 jt)";
                } else {
                    npoptkp = 80000000; // 80 million
                    infoText = "Bukan Waris (NPOPTKP: Rp 80 jt)";
                }
                
                const dasarPengenaan = Math.max(npop - npoptkp, 0);
                const bphtbTerutang = Math.round(dasarPengenaan * 0.05);
                
                // Display results
                document.getElementById('bphtb-npoptkp').textContent = formatIDR(npoptkp);
                document.getElementById('bphtb-dasar').textContent = formatIDR(dasarPengenaan);
                document.getElementById('bphtb-terutang').textContent = formatIDR(bphtbTerutang);
                document.getElementById('bphtb-info-text').textContent = infoText;
                
                if (dasarPengenaan <= 0) {
                    document.getElementById('bphtb-info').innerHTML = `
                        <div class="flex items-start gap-2">
                            <i data-lucide="info" class="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0"></i>
                            <span class="text-sm text-blue-700">BPHTB tidak terutang karena NPOP tidak melebihi NPOPTKP</span>
                        </div>
                    `;
                    lucide.createIcons();
                }
                
                document.getElementById('bphtb-result').classList.remove('hidden');
                document.getElementById('bphtb-result').classList.add('slide-in');
                
                trackEvent('calc_success', { tax_type: 'bphtb', amount: bphtbTerutang });
            } catch (error) {
                trackEvent('calc_error', { error_code: 'calculation_error', tax_type: 'bphtb' });
            }
        }

        // Regional Tax Calculator
        function calculateRegional() {
            const typeSelect = document.getElementById('regional-type');
            const omzetInput = document.getElementById('regional-omzet').value;
            
            if (!typeSelect.value || !omzetInput) return;
            
            const omzet = parseCurrency(omzetInput);
            if (omzet <= 0) {
                trackEvent('calc_error', { error_code: 'invalid_input', tax_type: typeSelect.value });
                return;
            }
            
            try {
                const tariff = 10; // 10% for all regional taxes
                const pajakTerutang = Math.round(omzet * (tariff / 100));
                
                // Get tax type label
                const typeLabels = {
                    'pbjt_mamin': 'PBJT Makanan & Minuman',
                    'pbjt_penginapan': 'PBJT Jasa Penginapan',
                    'pbjt_parkir': 'PBJT Jasa Parkir',
                    'pbjt_listrik': 'PBJT Tenaga Listrik',
                    'walet': 'Pajak Sarang Burung Walet'
                };
                
                // Display results
                document.getElementById('regional-type-result').textContent = typeLabels[typeSelect.value];
                document.getElementById('regional-omzet-result').textContent = formatIDR(omzet);
                document.getElementById('regional-terutang').textContent = formatIDR(pajakTerutang);
                document.getElementById('regional-pay-button').textContent = `Cara Bayar ${typeLabels[typeSelect.value]}`;
                
                document.getElementById('regional-result').classList.remove('hidden');
                document.getElementById('regional-result').classList.add('slide-in');
                
                trackEvent('calc_success', { tax_type: typeSelect.value, amount: pajakTerutang });
            } catch (error) {
                trackEvent('calc_error', { error_code: 'calculation_error', tax_type: typeSelect.value });
            }
        }

        function openRegionalPayLink() {
            const typeSelect = document.getElementById('regional-type');
            const payLinks = {
                'pbjt_mamin': 'https://okus.go.id/cara-bayar-pbjt-mamin',
                'pbjt_penginapan': 'https://okus.go.id/cara-bayar-pbjt-penginapan',
                'pbjt_parkir': 'https://okus.go.id/cara-bayar-pbjt-parkir',
                'pbjt_listrik': 'https://okus.go.id/cara-bayar-pbjt-listrik',
                'walet': 'https://okus.go.id/cara-bayar-walet'
            };
            
            if (payLinks[typeSelect.value]) {
                window.open(payLinks[typeSelect.value], '_blank');
                trackEvent('open_pay_link', { tax_type: typeSelect.value });
            }
        }

        // QR Code Generator
        function generateQR(type) {
            const baseUrl = window.location.origin + window.location.pathname;
            const qrUrl = `${baseUrl}?calc=${type}&source=qr&qr_id=oku-selatan-${type}`;
            
            const canvas = document.getElementById('qr-canvas');
            const labels = {
                'pbb': 'QR Code - Kalkulator PBB',
                'bphtb': 'QR Code - Kalkulator BPHTB',
                'regional': 'QR Code - Kalkulator Pajak Daerah'
            };
            
            QRCode.toCanvas(canvas, qrUrl, {
                width: 200,
                margin: 2,
                color: {
                    dark: '#1f2937',
                    light: '#ffffff'
                }
            }, function (error) {
                if (!error) {
                    document.getElementById('qr-label').textContent = labels[type];
                }
            });
        }

        // Analytics functions
        function getSource() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('source') || 'direct';
        }

        function trackEvent(eventName, properties = {}) {
            // Umami tracking
            if (typeof umami !== 'undefined') {
                umami.track(eventName, properties);
            }
            
            // Console log for development
            console.log('Event:', eventName, properties);
        }

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            // Check for direct calculator access via URL
            const urlParams = new URLSearchParams(window.location.search);
            const calcType = urlParams.get('calc');
            
            if (calcType && ['pbb', 'bphtb', 'regional'].includes(calcType)) {
                showCalculator(calcType);
            }
            
            // Generate default QR code
            generateQR('pbb');
            
            // Initialize toggle handlers
            handleWarisToggle();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl mx-auto px-4 py-6">

<div className="text-center mb-8">
<h1 className="text-3xl text-slate-900 tracking-tight mb-2 font-jakarta font-medium">Kalkulator Pajak Daerah</h1>
<p className="text-slate-600 max-w-2xl mx-auto font-geist">Hitung PBB-P2, BPHTB, dan pajak daerah lainnya dengan mudah. Akses cepat via QR code dan dapatkan panduan cara bayar.</p>
<div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">Kabupaten OKU Selatan</span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-8" id="calculator-selection">

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-cyan-300 hover:shadow-lg transition-all cursor-pointer" onclick="showCalculator('pbb')">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-cyan-50 rounded-lg">
<svg className="lucide lucide-home w-6 h-6 text-cyan-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<span className="text-sm font-medium text-cyan-600 bg-cyan-50 px-2 py-1 rounded font-geist">Populer</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">PBB-P2</h3>
<p className="text-slate-600 text-sm mb-4 font-geist">Pajak Bumi dan Bangunan sektor Perdesaan dan Perkotaan</p>
<div className="text-sm text-slate-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calculator w-4 h-4" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
<span className="font-geist">Berdasarkan NJOP</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-green-300 hover:shadow-lg transition-all cursor-pointer" onclick="showCalculator('bphtb')">
<div className="p-3 bg-green-50 rounded-lg mb-4">
<svg className="lucide lucide-file-text w-6 h-6 text-green-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">BPHTB</h3>
<p className="text-slate-600 text-sm mb-4 font-geist">Bea Perolehan Hak atas Tanah dan Bangunan</p>
<div className="text-sm text-slate-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-percent w-4 h-4" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
<span className="font-geist">Tarif 5%</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer" onclick="showCalculator('regional')">
<div className="p-3 bg-amber-50 rounded-lg mb-4">
<svg className="lucide lucide-building-2 w-6 h-6 text-amber-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 font-geist">Pajak Daerah</h3>
<p className="text-slate-600 text-sm mb-4 font-geist">PBJT &amp; Pajak Sarang Burung Walet</p>
<div className="text-sm text-slate-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-list w-4 h-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
<span className="font-geist">5 Jenis Pajak</span>
</div>
</div>
</div>
</div>

<div className="hidden" id="pbb-calculator">
<div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
<div className="flex items-center gap-3 mb-6">
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" onclick="showSelection()">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-600" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="p-2 bg-cyan-50 rounded-lg">
<svg className="lucide lucide-home w-5 h-5 text-cyan-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 font-geist">Kalkulator PBB-P2</h2>
<p className="text-sm text-slate-600 font-geist">Pajak Bumi dan Bangunan sektor Perdesaan dan Perkotaan</p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8">
<div>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-geist">NJOP (Nilai Jual Objek Pajak)</label>
<div className="relative">
<span className="absolute left-3 top-3 text-slate-500 text-sm font-geist">Rp</span>
<input className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" id="pbb-njop" oninput="formatCurrency(this); calculatePBB()" placeholder="0" type="text"/>
</div>
<p className="text-xs text-slate-500 mt-1 font-geist">Masukkan nilai sesuai SPPT atau penilaian terbaru</p>
</div>
<div className="bg-slate-50 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<label className="text-sm font-medium text-slate-700 font-geist">Objek Pajak Belum Pendataan</label>
<p className="text-xs text-slate-500 font-geist">Persentase pengenaan NJOP menjadi 100%</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="pbb-pendataan" onchange="calculatePBB()" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
</label>
</div>
</div>
<button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-medium hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2 font-geist" onclick="calculatePBB()">
<svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                                Hitung PBB
                            </button>
</div>
</div>
<div className="hidden" id="pbb-result">
<div className="bg-cyan-50 rounded-xl p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-4 font-geist">Hasil Perhitungan</h3>
<div className="space-y-4">
<div className="flex justify-between py-2 border-b border-cyan-100">
<span className="text-sm text-slate-600 font-geist">NJOP PBB</span>
<span className="font-medium font-geist" id="pbb-njop-result">Rp 0</span>
</div>
<div className="flex justify-between py-2 border-b border-cyan-100">
<span className="text-sm text-slate-600 font-geist">Persentase Pengenaan</span>
<span className="font-medium font-geist" id="pbb-percentage">0%</span>
</div>
<div className="flex justify-between py-2 border-b border-cyan-100">
<span className="text-sm text-slate-600 font-geist">NJOP Final</span>
<span className="font-medium font-geist" id="pbb-njop-final">Rp 0</span>
</div>
<div className="flex justify-between py-2 border-b border-cyan-100">
<span className="text-sm text-slate-600 font-geist">Tarif PBB</span>
<span className="font-medium font-geist" id="pbb-tarif">0%</span>
</div>
<div className="flex justify-between py-3 bg-cyan-100 rounded-lg px-4">
<span className="font-semibold text-slate-900 font-geist">Pokok PBB</span>
<span className="font-bold text-cyan-600 text-lg font-geist" id="pbb-pokok">Rp 0</span>
</div>
</div>
<div className="mt-6">
<button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-geist" onclick="window.open('https://okus.go.id/cara-bayar-pbb', '_blank')">
<svg className="lucide lucide-external-link w-5 h-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                    Cara Bayar PBB
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="bphtb-calculator">
<div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
<div className="flex items-center gap-3 mb-6">
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" onclick="showSelection()">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-600" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="p-2 bg-green-50 rounded-lg">
<svg className="lucide lucide-file-text w-5 h-5 text-green-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 font-geist">Kalkulator BPHTB</h2>
<p className="text-sm text-slate-600 font-geist">Bea Perolehan Hak atas Tanah dan Bangunan</p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8">
<div>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-geist">NPOP (Nilai Perolehan Objek Pajak)</label>
<div className="relative">
<span className="absolute left-3 top-3 text-slate-500 text-sm font-geist">Rp</span>
<input className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500" id="bphtb-npop" oninput="formatCurrency(this); calculateBPHTB()" placeholder="0" type="text"/>
</div>
<p className="text-xs text-slate-500 mt-1 font-geist">Nilai transaksi atau NJOP, mana yang lebih tinggi</p>
</div>
<div className="space-y-4">
<div className="bg-slate-50 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<label className="text-sm font-medium text-slate-700 font-geist">Waris/Hibah Wasiat</label>
<p className="text-xs text-slate-500 font-geist">NPOPTKP = Rp 300.000.000</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="bphtb-waris" onchange="handleWarisToggle(); calculateBPHTB()" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-4" id="bphtb-transaksi-container">
<div className="flex items-center justify-between">
<div>
<label className="text-sm font-medium text-slate-700 font-geist">Sudah Pernah Transaksi BPHTB</label>
<p className="text-xs text-slate-500 font-geist">NPOPTKP = Rp 0</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="bphtb-transaksi" onchange="calculateBPHTB()" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
</label>
</div>
</div>
</div>
<button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-geist" onclick="calculateBPHTB()">
<svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                                Hitung BPHTB
                            </button>
</div>
</div>
<div className="hidden" id="bphtb-result">
<div className="bg-green-50 rounded-xl p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-4 font-geist">Hasil Perhitungan</h3>
<div className="space-y-4">
<div className="flex justify-between py-2 border-b border-green-100">
<span className="text-sm text-slate-600 font-geist">NPOPTKP</span>
<span className="font-medium font-geist" id="bphtb-npoptkp">Rp 80.000.000</span>
</div>
<div className="flex justify-between py-2 border-b border-green-100">
<span className="text-sm text-slate-600 font-geist">Dasar Pengenaan</span>
<span className="font-medium font-geist" id="bphtb-dasar">Rp 0</span>
</div>
<div className="flex justify-between py-2 border-b border-green-100">
<span className="text-sm text-slate-600 font-geist">Tarif</span>
<span className="font-medium font-geist">5%</span>
</div>
<div className="flex justify-between py-3 bg-green-100 rounded-lg px-4">
<span className="font-semibold text-slate-900 font-geist">BPHTB Terutang</span>
<span className="font-bold text-green-600 text-lg font-geist" id="bphtb-terutang">Rp 0</span>
</div>
</div>
<div className="mt-4 p-3 bg-cyan-50 rounded-lg" id="bphtb-info">
<div className="flex items-start gap-2">
<svg className="lucide lucide-info w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="text-sm text-cyan-700 font-geist" id="bphtb-info-text">Bukan Waris (NPOPTKP: Rp 80 jt)</span>
</div>
</div>
<div className="mt-6">
<button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-geist" onclick="window.open('https://okus.go.id/cara-bayar-bphtb', '_blank')">
<svg className="lucide lucide-external-link w-5 h-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                    Cara Bayar BPHTB
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="regional-calculator">
<div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
<div className="flex items-center gap-3 mb-6">
<button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" onclick="showSelection()">
<svg className="lucide lucide-arrow-left w-5 h-5 text-slate-600" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="p-2 bg-amber-50 rounded-lg">
<svg className="lucide lucide-building-2 w-5 h-5 text-amber-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
</div>
<div>
<h2 className="text-xl font-semibold text-slate-900 font-geist">Kalkulator Pajak Daerah</h2>
<p className="text-sm text-slate-600 font-geist">PBJT dan Pajak Sarang Burung Walet</p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8">
<div>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-geist">Jenis Pajak</label>
<select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500" id="regional-type" onchange="calculateRegional()">
<option className="font-geist" value="">Pilih Jenis Pajak</option>
<option className="font-geist" value="pbjt_mamin">PBJT Makanan &amp; Minuman</option>
<option className="font-geist" value="pbjt_penginapan">PBJT Jasa Penginapan</option>
<option className="font-geist" value="pbjt_parkir">PBJT Jasa Parkir</option>
<option className="font-geist" value="pbjt_listrik">PBJT Tenaga Listrik</option>
<option className="font-geist" value="walet">Pajak Sarang Burung Walet</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-geist" id="regional-omzet-label">Omzet</label>
<div className="relative">
<span className="absolute left-3 top-3 text-slate-500 text-sm font-geist">Rp</span>
<input className="w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500" id="regional-omzet" oninput="formatCurrency(this); calculateRegional()" placeholder="0" type="text"/>
</div>
<p className="text-xs text-slate-500 mt-1 font-geist" id="regional-omzet-help">Masukkan nilai omzet sesuai jenis pajak yang dipilih</p>
</div>
<button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 font-geist" onclick="calculateRegional()">
<svg className="lucide lucide-calculator w-5 h-5" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
                                Hitung Pajak
                            </button>
</div>
</div>
<div className="hidden" id="regional-result">
<div className="bg-amber-50 rounded-xl p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-4 font-geist">Hasil Perhitungan</h3>
<div className="space-y-4">
<div className="flex justify-between py-2 border-b border-amber-100">
<span className="text-sm text-slate-600 font-geist">Jenis Pajak</span>
<span className="font-medium font-geist" id="regional-type-result">-</span>
</div>
<div className="flex justify-between py-2 border-b border-amber-100">
<span className="text-sm text-slate-600 font-geist">Omzet</span>
<span className="font-medium font-geist" id="regional-omzet-result">Rp 0</span>
</div>
<div className="flex justify-between py-2 border-b border-amber-100">
<span className="text-sm text-slate-600 font-geist">Tarif</span>
<span className="font-medium font-geist">10%</span>
</div>
<div className="flex justify-between py-3 bg-amber-100 rounded-lg px-4">
<span className="font-semibold text-slate-900 font-geist">Pajak Terutang</span>
<span className="font-bold text-amber-600 text-lg font-geist" id="regional-terutang">Rp 0</span>
</div>
</div>
<div className="mt-6">
<button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2" onclick="openRegionalPayLink()">
<svg className="lucide lucide-external-link w-5 h-5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="font-geist" id="regional-pay-button">Cara Bayar</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 mt-8">
<h3 className="text-lg font-semibold text-slate-900 mb-4 font-geist">Akses Cepat via QR Code</h3>
<div className="grid md:grid-cols-2 gap-6">
<div>
<p className="text-slate-600 mb-4 font-geist">Scan QR code untuk akses langsung ke kalkulator pajak dari smartphone Anda.</p>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 bg-cyan-50 text-cyan-700 rounded-lg text-sm hover:bg-cyan-100 transition-colors font-geist" onclick="generateQR('pbb')">QR PBB</button>
<button className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm hover:bg-green-100 transition-colors font-geist" onclick="generateQR('bphtb')">QR BPHTB</button>
<button className="px-4 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm hover:bg-amber-100 transition-colors font-geist" onclick="generateQR('regional')">QR Pajak Daerah</button>
</div>
</div>
<div className="flex justify-center">
<div className="p-4 bg-slate-50 rounded-lg">
<canvas className="max-w-48 max-h-48" id="qr-canvas"></canvas>
<p className="text-center text-sm text-slate-600 mt-2 font-geist" id="qr-label">Pilih jenis QR code</p>
</div>
</div>
</div>
</div>

<div className="text-center mt-12 pt-8 border-t border-slate-200">
<p className="text-slate-500 text-sm font-geist">© 2024 Kabupaten OKU Selatan. Kalkulator untuk estimasi, bukan bukti pembayaran resmi.</p>
<div className="flex justify-center gap-6 mt-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>


    </>
  );
}
