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
      
<header>
<div className="logo">Laundry Mama Kayla</div>
<a className="header-btn" href="https://wa.me/6281226829104" rel="noopener" target="_blank">
<iconify-icon height="18" icon="lucide:message-circle" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Chat WhatsApp
        </a>
</header>
<section className="hero">
<div className="hero-info-container">
<div className="info-pill">
<iconify-icon height="16" icon="lucide:map-pin" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Seturan, Sleman
            </div>
<div className="info-pill">
<iconify-icon height="16" icon="lucide:clock" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Buka 08.00 - 20.00
            </div>
<div className="info-pill">
<iconify-icon height="16" icon="lucide:phone" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                0812-2682-9104
            </div>
</div>
<h1>BERSIH, RAPI, WANGI SEPANJANG HARI</h1>
<p>Layanan laundry profesional di Seturan. Pakaian bersih higienis, setrika rapi, dan siap antar-jemput ke depan kostan Anda!</p>
<a className="btn-main" href="https://wa.me/6281226829104?text=Halo%20Mama%20Kayla,%20saya%20mau%20pesan%20laundry" rel="noopener" target="_blank">PESAN ANTAR JEMPUT SEKARANG</a>
</section>
<section className="section" style={{backgroundColor: 'var(--light-grey)'}}>
<h2 className="section-title">Daftar Layanan &amp; Harga Hemat</h2>
<div className="grid">
<div className="card-orange">
<h3>Cuci Setrika Kiloan</h3>
<ul className="price-list">
<li><span>Reguler (2-3 Hari)</span> <span>Rp 6.000/kg</span></li>
<li><span>One Day (24 Jam)</span> <span>Rp 8.000/kg</span></li>
<li><span>Express (6 Jam)</span> <span>Rp 12.000/kg</span></li>
<li><span>Express (3 Jam)</span> <span>Rp 16.000/kg</span></li>
</ul>
</div>
<div className="card-orange">
<h3>Bedcover &amp; Selimut</h3>
<ul className="price-list">
<li><span>Bedcover Besar</span> <span>Rp 25.000</span></li>
<li><span>Bedcover Kecil</span> <span>Rp 20.000</span></li>
<li><span>Selimut Tebal</span> <span>Rp 15.000</span></li>
<li><span>Sprei (1 Set)</span> <span>Rp 10.000</span></li>
</ul>
</div>
<div className="card-orange">
<h3>Sepatu &amp; Dry Clean</h3>
<ul className="price-list">
<li><span>Fast Clean Shoes</span> <span>Rp 25.000</span></li>
<li><span>Deep Clean Shoes</span> <span>Rp 30.000</span></li>
<li><span>Dry Clean Jas/Gaun</span> <span>Kontak WA</span></li>
</ul>
<p style={{marginTop: '20px', fontSize: '0.9rem', fontWeight: '600', color: 'var(--headline-yellow)'}}>* Sepatu dijamin bersih dalam 2 hari!</p>
</div>
</div>
</section>
<section className="section">
<h2 className="section-title">Lokasi Outlet Seturan</h2>
<div className="map-container">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.088393987276!2d110.41448697591466!3d-7.776629677194796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x2ae1b6749319691!2sJl.%20Seturan%20Raya%2C%20Caturtunggal%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1708320000000!5m2!1sid!2sid" style={{border: '0'}} width="100%">
</iframe>
</div>
</section>
<footer>
<div className="footer-brand">Laundry Mama Kayla</div>
<div className="footer-address">
            Jl. Seturan Raya No.135B (Dekat Jl. Sawo), Caturtunggal,<br/>
            Kec. Depok, Kabupaten Sleman, DIY 55281
        </div>
<div style={{fontWeight: '800', fontSize: '1.1rem', marginBottom: '30px'}}>
            Buka Setiap Hari: 08.00 - 20.00 WIB
        </div>
<a className="btn-main" href="https://wa.me/6281226829104" rel="noopener" style={{background: 'var(--headline-yellow)', color: 'var(--tosca-dark)'}} target="_blank">HUBUNGI KAMI SEKARANG</a>
<p style={{fontSize: '0.8rem', marginTop: '40px', opacity: '0.7'}}>© 2026 Laundry Mama Kayla. Estetik &amp; Profesional.</p>
</footer>

    </>
  );
}
