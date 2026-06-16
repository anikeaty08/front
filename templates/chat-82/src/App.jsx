import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "BookingHost",
"description": "Kompleksowe zarządzanie najmem krótkoterminowym w Polsce. 2000+ apartamentów, 15 miast.",
"url": "https://bookinghost.com",
"telephone": "+48221131400",
"email": "info@bookinghost.com",
"address": {
"@type": "PostalAddress",
"streetAddress": "ul. Nakielska 3",
"addressLocality": "Warszawa",
"postalCode": "01-106",
"addressCountry": "PL"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 52.2297,
"longitude": 21.0122
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
"opens": "08:00",
"closes": "18:00"
},
"sameAs": [
"https://www.booking.com",
"https://www.airbnb.com"
],
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.8",
"reviewCount": "2000"
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Slider: Opinie O nas
(function(){
  var idx = 0, total = 6, vis = 3, pages = 2;
  window.onasRevSlide = function(dir) {
    var track = document.getElementById('onas-rev-track');
    if (!track) return;
    idx = (idx + dir + pages) % pages;
    var items = track.children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = (Math.floor(i / vis) === idx) ? '' : 'none';
    }
    var dots = document.getElementById('onas-rev-dots');
    if (dots) {
      dots.children[0].style.background = idx === 0 ? '#00c4c0' : '#ebebeb';
      dots.children[1].style.background = idx === 1 ? '#00c4c0' : '#ebebeb';
    }
  };
  document.addEventListener('DOMContentLoaded', function() {
    var track = document.getElementById('onas-rev-track');
    if (!track) return;
    for (var i = 3; i < track.children.length; i++) track.children[i].style.display = 'none';
  });
})();
// Slider: Media O nas
(function(){
  var idx = 0, pages = 2, vis = 3;
  window.onasMedSlide = function(dir) {
    var track = document.getElementById('onas-med-track');
    if (!track) return;
    idx = (idx + dir + pages) % pages;
    var items = track.children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = (Math.floor(i / vis) === idx) ? '' : 'none';
    }
    var dots = document.getElementById('onas-med-dots');
    if (dots) {
      dots.children[0].style.background = idx === 0 ? '#00c4c0' : '#ebebeb';
      dots.children[1].style.background = idx === 1 ? '#00c4c0' : '#ebebeb';
    }
  };
  document.addEventListener('DOMContentLoaded', function() {
    var track = document.getElementById('onas-med-track');
    if (!track) return;
    for (var i = 3; i < track.children.length; i++) track.children[i].style.display = 'none';
  });
})();



var allPages = ['home','uslugi','cennik','onas','blog','faq','kontakt','casestudy','deweloperzy','warszawa','krakow','gdansk','wroclaw','poznan','remote','zapisz-sie','lokalizacje','inwestor','najem','lodz','zakopane','sopot','gdynia','katowice','lublin','karpacz','rzeszow','szczecin','torun'];
function showPage(id) {
  allPages.forEach(function(p) {
    var el = document.getElementById('pg-' + p);
    if (el) el.classList.remove('active');
  });
  var target = document.getElementById('pg-' + id);
  if (target) target.classList.add('active');
  // Ukryj header i footer na stronie zapisz-sie
  var header = document.querySelector('header');
  var footer = document.querySelector('footer');
  var isForm = (id === 'zapisz-sie');
  if (header) header.style.display = isForm ? 'none' : '';
  if (footer) footer.style.display = isForm ? 'none' : '';
  // Aktywne podświetlenie w menu
  document.querySelectorAll('.nav-link').forEach(function(a) {
    a.classList.remove('active');
    if (a.getAttribute('data-nav') === id) a.classList.add('active');
  });
  window.scrollTo(0,0);
}
document.addEventListener('DOMContentLoaded', function() {
  showPage('home');
});
// Kalkulator
function calcProfit() {
  var rev = parseFloat(document.getElementById('calc-revenue').value) || 0;
  var occ = parseFloat(document.getElementById('calc-occ').value) / 100 || 0;
  var gross = Math.round(rev * occ);
  var comm = Math.round(gross * 0.20);
  var net = gross - comm;
  document.getElementById('calc-gross').textContent = gross.toLocaleString('pl-PL') + ' zł';
  document.getElementById('calc-comm').textContent = comm.toLocaleString('pl-PL') + ' zł';
  document.getElementById('calc-net').textContent = net.toLocaleString('pl-PL') + ' zł';
}
// FAQ accordion
function toggleFaq(btn) {
  var answer = btn.nextElementSibling;
  var icon = btn.querySelector('iconify-icon');
  var isOpen = answer.classList.contains('open');
  document.querySelectorAll('.faq-answer.open').forEach(function(a) {
    a.classList.remove('open');
    a.previousElementSibling.querySelector('iconify-icon').style.transform = '';
  });
  if (!isOpen) {
    answer.classList.add('open');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}
// FAQ search
function searchFaq(q) {
  var term = q.toLowerCase();
  document.querySelectorAll('.faq-item').forEach(function(item) {
    var text = item.textContent.toLowerCase();
    item.style.display = text.includes(term) ? '' : 'none';
  });
}
// Blog filter
function filterBlog(cat, el) {
  document.querySelectorAll('.blog-filter-btn').forEach(function(btn) {
    btn.className = 'blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#f8f8f8] text-[#222222] hover:bg-[#ebebeb] border border-[#ebebeb] transition-colors';
  });
  if(el) el.className = 'blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#00c4c0] text-white';
  document.querySelectorAll('.blog-card').forEach(function(card) {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}
// Contact tabs
function switchContact(tab) {
  ['wlasciciel','gosc','deweloper'].forEach(function(t) {
    var panel = document.getElementById('contact-' + t);
    var btn = document.getElementById('tab-' + t);
    if (panel) panel.classList.toggle('hidden', t !== tab);
    if (btn) {
      btn.className = t === tab
        ? 'px-5 py-2.5 rounded-full text-sm font-medium bg-[#00c4c0] text-white transition-all'
        : 'px-5 py-2.5 rounded-full text-sm font-medium bg-[#f8f8f8] text-[#222222] hover:bg-[#ebebeb] transition-all';
    }
  });
}
// FAQ category filter v2
function filterFaq2(cat, btn) {
  document.querySelectorAll('.faq-cat').forEach(function(b) {
    b.className = 'faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#222222] hover:bg-[#f8f8f8] transition-all';
  });
  if(btn) btn.className = 'faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium bg-[#00c4c0] text-white transition-all';
  document.querySelectorAll('#faq-list .faq-item').forEach(function(item) {
    item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
  });
}
function scrollReviews(dir) {
  var track = document.getElementById('reviews-track');
  if (track) track.scrollBy({ left: dir * 340, behavior: 'smooth' });
}
// Segment switcher
function switchSegment(seg, btn) {
  ['prywatny','inwestor','portfel','zagraniczny'].forEach(function(s) {
    var el = document.getElementById('seg-' + s);
    if (el) el.classList.add('hidden');
  });
  var active = document.getElementById('seg-' + seg);
  if (active) active.classList.remove('hidden');
  document.querySelectorAll('.seg-tab').forEach(function(b) {
    b.className = 'seg-tab px-5 py-2.5 rounded-full text-sm font-medium bg-white border border-[#ebebeb] text-[#444444] hover:bg-[#f0f0f0] transition-all';
  });
  if (btn) btn.className = 'seg-tab px-5 py-2.5 rounded-full text-sm font-medium bg-[#00c4c0] text-white transition-all';
  var imgs = {
    prywatny: 'https://res.cloudinary.com/depa0audz/image/upload/v1774342542/ChatGPT_Image_24_mar_2026_09_54_02_ilx3eh.png',
    inwestor: 'https://res.cloudinary.com/depa0audz/image/upload/v1774343431/ChatGPT_Image_24_mar_2026_10_10_17_ko7dtt.png',
    portfel: 'https://res.cloudinary.com/depa0audz/image/upload/v1774343692/ChatGPT_Image_24_mar_2026_10_14_37_m0oqne.png',
    zagraniczny: 'https://res.cloudinary.com/depa0audz/image/upload/v1774343808/ChatGPT_Image_24_mar_2026_10_16_34_eha55f.png'
  };
  var imgEl = document.getElementById('seg-img');
  if (imgEl && imgs[seg]) imgEl.src = imgs[seg];
}
// Formularz zapisz-sie
function zsGoStep(n) {
  document.getElementById('zs-step-2').style.display = n===2 ? 'block' : 'none';
  document.getElementById('zs-step-3').style.display = n===3 ? 'block' : 'none';
  document.getElementById('zs-success').style.display = 'none';
  // Auto-fill email z hero formularza
  if (n===3) {
    var heroEmail = document.getElementById('hero-email');
    var zsEmail = document.getElementById('zs-email');
    if (heroEmail && zsEmail && heroEmail.value) zsEmail.value = heroEmail.value;
  }
  var dot2 = document.getElementById('zs-dot-2');
  var dot3 = document.getElementById('zs-dot-3');
  var line2 = document.getElementById('zs-line-2');
  var label3 = document.getElementById('zs-label-3');
  if (n===3) {
    dot2.style.background='#00c4c0'; dot2.style.color='white'; dot2.innerHTML='✓';
    dot3.style.background='#00c4c0'; dot3.style.color='white'; dot3.innerHTML='3';
    line2.style.background='#00c4c0';
    label3.style.color='#00c4c0';
  } else {
    dot2.style.background='#00c4c0'; dot2.style.color='white'; dot2.innerHTML='2';
    dot3.style.background='#ebebeb'; dot3.style.color='#999'; dot3.innerHTML='3';
    line2.style.background='#ebebeb';
    label3.style.color='#999';
  }
  window.scrollTo(0,0);
}
function zsSubmit() {
  var btn = document.getElementById('zs-submit-btn');
  btn.textContent = 'Analizujemy Twoje mieszkanie...';
  btn.disabled = true; btn.style.opacity='0.7';
  setTimeout(function() {
    document.getElementById('zs-step-3').style.display='none';
    document.getElementById('zs-success').style.display='block';
    // Ukryj progress bar
    var progress = document.querySelector('#pg-zapisz-sie .text-center');
    if (progress) progress.style.display='none';
  }, 1800);
}
// Formularz wielokrokowy
function goToStep(n) {
  [1,2,3].forEach(function(i) {
    document.getElementById('form-step-'+i).style.display = i===n ? 'block' : 'none';
    var dot = document.getElementById('step-dot-'+i);
    if (dot) {
      if (i < n) {
        dot.style.background = '#00c4c0';
        dot.style.color = 'white';
        dot.innerHTML = '✓';
      } else if (i === n) {
        dot.style.background = '#00c4c0';
        dot.style.color = 'white';
        dot.innerHTML = i;
      } else {
        dot.style.background = '#ebebeb';
        dot.style.color = '#999';
        dot.innerHTML = i;
      }
    }
    var line = document.getElementById('step-line-'+i);
    if (line) line.style.background = i < n ? '#00c4c0' : '#ebebeb';
  });
}
function submitForm() {
  var btn = document.getElementById('submit-btn');
  btn.textContent = 'Analizujemy Twoje mieszkanie...';
  btn.disabled = true;
  btn.style.opacity = '0.7';
  setTimeout(function() {
    document.getElementById('form-step-3').style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  }, 1800);
}
// Autocomplete adresu
var polishCities = ['Warszawa','Kraków','Gdańsk','Wrocław','Poznań','Łódź','Katowice','Sopot','Gdynia','Zakopane','Lublin','Karpacz','Rzeszów','Szczecin','Toruń'];
var polishStreets = ['ul. Marszałkowska','ul. Nowy Świat','ul. Długa','ul. Floriańska','ul. Świdnicka','ul. Piotrkowska','ul. Półwiejska','al. Jerozolimskie','ul. Mokotowska','ul. Krucza','ul. Chmielna','ul. Złota','ul. Prosta','ul. Hoża','ul. Wilcza'];
function showSuggestions(val) {
  var box = document.getElementById('addr-suggestions');
  if (!val || val.length < 3) { box.style.display='none'; return; }
  var suggestions = [];
  polishStreets.forEach(function(s) {
    if (s.toLowerCase().indexOf(val.toLowerCase()) !== -1 || val.toLowerCase().indexOf(s.split(' ')[1].toLowerCase()) !== -1) {
      polishCities.slice(0,3).forEach(function(c) { suggestions.push(s + ', ' + c); });
    }
  });
  if (!suggestions.length) {
    polishCities.forEach(function(c) {
      if (c.toLowerCase().indexOf(val.toLowerCase()) !== -1) suggestions.push(val + ', ' + c);
    });
  }
  suggestions = suggestions.slice(0,5);
  if (!suggestions.length) { box.style.display='none'; return; }
  box.innerHTML = suggestions.map(function(s) {
    return '<div onclick="selectAddress(\'' + s.replace(/'/g,"\\'") + '\')" style="padding:10px 16px;font-size:13px;color:#222;cursor:pointer;border-bottom:1px solid #f0f0f0;" onmouseover="this.style.background=\'#f0fcfb\'" onmouseout="this.style.background=\'\'">📍 ' + s + '</div>';
  }).join('');
  box.style.display = 'block';
}
function selectAddress(val) {
  document.getElementById('address-input').value = val;
  document.getElementById('addr-suggestions').style.display = 'none';
}
var reviewsIdx = 0;
function moveReviews(dir) {
  var track = document.getElementById('reviews-track');
  if (!track) return;
  var cards = track.children;
  if (!cards.length) return;
  var cardW = cards[0].offsetWidth + 24;
  var maxIdx = Math.max(0, cards.length - 3);
  reviewsIdx = Math.max(0, Math.min(reviewsIdx + dir, maxIdx));
  track.style.transform = 'translateX(-' + (reviewsIdx * cardW) + 'px)';
  var btns = document.querySelectorAll('.reviews-btn');
  if (btns[0]) { btns[0].disabled = reviewsIdx <= 0; btns[0].style.opacity = reviewsIdx <= 0 ? '0.3' : '1'; }
  if (btns[1]) { btns[1].disabled = reviewsIdx >= maxIdx; btns[1].style.opacity = reviewsIdx >= maxIdx ? '0.3' : '1'; }
}
// Slider: Opinie O nas
(function(){
  var idx = 0, pages = 2, vis = 3;
  window.onasRevSlide = function(dir) {
    var track = document.getElementById('onas-rev-track');
    if (!track) return;
    idx = (idx + dir + pages) % pages;
    var items = track.children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = (Math.floor(i / vis) === idx) ? '' : 'none';
    }
    var dots = document.getElementById('onas-rev-dots');
    if (dots) {
      dots.children[0].style.background = idx === 0 ? '#00c4c0' : '#ebebeb';
      dots.children[1].style.background = idx === 1 ? '#00c4c0' : '#ebebeb';
    }
  };
  document.addEventListener('DOMContentLoaded', function() {
    var track = document.getElementById('onas-rev-track');
    if (!track) return;
    for (var i = 3; i < track.children.length; i++) track.children[i].style.display = 'none';
  });
})();
// Slider: Media O nas
(function(){
  var idx = 0, pages = 2, vis = 3;
  window.onasMedSlide = function(dir) {
    var track = document.getElementById('onas-med-track');
    if (!track) return;
    idx = (idx + dir + pages) % pages;
    var items = track.children;
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = (Math.floor(i / vis) === idx) ? '' : 'none';
    }
    var dots = document.getElementById('onas-med-dots');
    if (dots) {
      dots.children[0].style.background = idx === 0 ? '#00c4c0' : '#ebebeb';
      dots.children[1].style.background = idx === 1 ? '#00c4c0' : '#ebebeb';
    }
  };
  document.addEventListener('DOMContentLoaded', function() {
    var track = document.getElementById('onas-med-track');
    if (!track) return;
    for (var i = 3; i < track.children.length; i++) track.children[i].style.display = 'none';
  });
})();
document.addEventListener('DOMContentLoaded', function() {
  showPage('home');
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#ebebeb]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#" onclick="showPage('home');return false;"><svg height="32" id="Layer_1" style={{display: 'block'}} version="1.1" viewbox="0 0 74.3 13.2" x="0" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0"><style type="text/css">.st0{clip-path:url(#SVGID_2_)}.st1{fill:#47afad}</style><title>Artboard 1</title><defs><path d="M-50-175.6h173V99.1H-50z" id="SVGID_1_"></path></defs><clippath id="SVGID_2_"><use overflow="visible" xlink:href="#SVGID_1_"></use></clippath><g className="st0"><path className="st1" d="M.8 1h3.3c.4 0 .8 0 1.1.1.3 0 .7.2 1 .3.3.1.6.4.8.7.2.3.3.7.3 1.1 0 .4-.1.9-.4 1.2-.3.4-.7.6-1.1.7.3 0 .5.1.8.2.2.2.4.3.5.5.2.2.3.4.4.7.1.2.2.5.2.8 0 .4-.1.8-.3 1.2-.2.2-.5.5-.8.7-.3.2-.7.3-1.1.4-.4.1-.7.1-1.1.1H.8V1zm2 3.5h1.4c.1 0 .3 0 .4-.1.1 0 .3-.1.4-.2.1 0 .2-.1.3-.2.1-.1.1-.3.1-.4 0-.3-.1-.6-.4-.7-.2-.2-.3-.2-.5-.2H2.8v1.8zm0 3.6H5c.1 0 .3-.1.4-.2l.3-.3c.1-.1.1-.3.1-.5s0-.4-.2-.5c-.1-.1-.2-.2-.4-.3-.1 0-.3-.1-.5-.1H2.8v1.9zm5.4-1.4c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.9.4-1.9.4-2.7.1-.4-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1-.2-.4-.2-.8-.2-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1m5.4 0c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.8.3-1.8.3-2.6 0-.5-.1-.8-.3-1.2-.6-.3-.3-.5-.6-.7-1-.1-.4-.2-.8-.2-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1M22.9.4h1.8v5.7l2.1-2.4H29l-2.3 2.7 2.4 3.3h-2.3l-2.1-3v3h-1.8zm11 3.3h1.8v.8c.1-.1.2-.2.2-.4.1-.1.2-.2.4-.3.2-.1.3-.2.5-.2.2-.1.4-.1.6-.1.4 0 .8.1 1.1.2.3.1.5.3.7.6.2.3.3.6.3.9.1.4.1.7.1 1.1v3.3h-1.8V6.3c0-.2 0-.3-.1-.5-.1-.3-.5-.6-.8-.5-.2 0-.4 0-.6.1-.1.1-.3.2-.3.4-.1.2-.1.3-.2.5v3.6h-1.9V3.7zM47 9.2c.1.9-.2 1.9-.9 2.6-.7.6-1.7 1-2.6.9-.5 0-1.1-.1-1.6-.2s-1-.4-1.4-.7l1-1.5.9.6c.3.1.7.2 1 .2.5 0 .9-.1 1.2-.4.3-.3.4-.7.4-1.1V9c-.2.3-.5.5-.8.6-.3.1-.6.2-.9.2-.4 0-.8-.1-1.2-.2-.4-.1-.7-.4-.9-.6-.3-.3-.5-.6-.6-1-.3-.8-.3-1.6 0-2.4.1-.4.3-.7.5-1 .2-.3.5-.5.9-.7.4-.2.8-.3 1.2-.3.2 0 .5 0 .7.1.2.1.4.1.6.2.2.1.3.2.5.3l.3.3v-.8H47v5.5zm-4.6-2.5c0 .2 0 .4.1.6.1.2.2.3.3.5.1.1.3.2.5.3.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.3-.2.5-.3.1-.1.2-.3.3-.5.1-.4.1-.8 0-1.1-.2-.2-.3-.4-.4-.5-.1-.1-.3-.3-.5-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.3.2-.5.3-.1.1-.2.3-.3.5v.5"></path><path d="M48.3 1h1.9v3.3h3.7V1h2v8.7h-2V6h-3.7v3.7h-1.9zm8.6 5.7c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.8.3-1.8.3-2.6 0-.4-.1-.8-.4-1.1-.6-.3-.3-.5-.6-.7-1-.3-.4-.4-.8-.3-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1m8.9-1.2c-.2-.3-.6-.5-1-.5-.2 0-.3 0-.5.1-.1.1-.2.2-.2.4 0 .1.1.3.2.3.2.1.4.2.6.2l.8.2c.3.1.5.2.8.3.2.1.4.3.6.5 0 .3.1.6.1.9 0 .4-.1.7-.2 1-.2.2-.4.5-.7.6-.3.2-.6.3-.9.3-.3.1-.7.1-1 .1-.4 0-.9-.1-1.3-.2s-.8-.3-1.1-.6L65 7.9c.2.2.3.4.6.5.2.1.5.2.7.2.2 0 .4 0 .6-.1.2 0 .3-.2.3-.3 0-.2-.1-.3-.2-.4-.2-.1-.4-.2-.6-.2l-.8-.2c-.3-.1-.5-.2-.8-.3-.2-.1-.4-.3-.6-.5-.1-.3-.2-.6-.2-1 0-.3.1-.6.2-.9.1-.3.3-.5.6-.6.2-.2.5-.3.8-.4.3-.1.6-.1.9-.1.4 0 .8.1 1.2.2.4.1.7.3 1 .6l-1.1 1.1zm6.3-.3h-1.6v2.4c0 .1.1.2.1.4.1.1.2.2.3.2.2.1.3.1.5.1h.4c.1 0 .3-.1.4-.1v1.5c-.2.1-.4.1-.6.1h-.7c-.3 0-.6 0-.9-.1-.2-.1-.5-.2-.7-.3-.2-.1-.4-.3-.5-.6-.1-.3-.2-.6-.2-.8V5.2h-1.2V3.7h1.2V2h1.8v1.8h1.6l.1 1.4zM32.9 3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5"></path><path d="M32.2 3.8l.2 7h-2l.2-7z"></path></g></svg></a>
<nav className="hidden md:flex items-center gap-1">
<a className="nav-link text-sm font-medium text-[#222222] hover:text-[#0f0f0f] px-4 py-2 rounded-full hover:bg-[#f8f8f8] transition-colors" data-nav="uslugi" href="#" onclick="showPage('uslugi');return false;">Usługi</a>
<a className="nav-link text-sm font-medium text-[#222222] hover:text-[#0f0f0f] px-4 py-2 rounded-full hover:bg-[#f8f8f8] transition-colors" data-nav="cennik" href="#" onclick="showPage('cennik');return false;">Cennik</a>
<a className="nav-link text-sm font-medium text-[#222222] hover:text-[#0f0f0f] px-4 py-2 rounded-full hover:bg-[#f8f8f8] transition-colors" data-nav="casestudy" href="#" onclick="showPage('casestudy');return false;">Case studies</a>
<a className="nav-link text-sm font-medium text-[#222222] hover:text-[#0f0f0f] px-4 py-2 rounded-full hover:bg-[#f8f8f8] transition-colors" data-nav="onas" href="#" onclick="showPage('onas');return false;">O nas</a>
</nav>
<div className="flex items-center gap-3">

<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white text-sm font-semibold py-3 px-6 rounded-full transition-all whitespace-nowrap" href="#" onclick="showPage('kontakt');return false;">Bezpłatna wycena</a>
<a className="hidden md:flex items-center gap-2 border border-[#0f0f0f] hover:border-[#00c4c0] text-sm font-semibold text-[#0f0f0f] hover:text-[#00c4c0] transition-all py-3 px-5 rounded-full whitespace-nowrap" href="tel:221131400">
<svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="15"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
</div>
</header>
<div className="page active" id="pg-home">




<section style={{position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden'}}>

<img alt="Przytulny apartament zarządzany przez BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774433092/ChatGPT_Image_25_mar_2026_11_04_35_vo57pj.png" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}/>

<div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right,rgba(20,35,40,0.55) 0%,rgba(20,35,40,0.25) 55%,rgba(20,35,40,0.1) 100%)'}}></div>
<div className="w-full max-w-7xl mx-auto px-6" style={{position: 'relative', zIndex: '1', display: 'grid', gridTemplateColumns: '580px 1fr', gap: '48px', alignItems: 'center', minHeight: '92vh', paddingTop: '0', paddingBottom: '40px'}}>

<div style={{background: 'white', borderRadius: '24px', padding: '44px', boxShadow: '0 24px 64px rgba(0,0,0,0.2)'}}>

<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#f0fcfb', border: '1px solid #c0e8e8', color: '#1a2e35', fontSize: '11px', fontWeight: '600', padding: '5px 11px', borderRadius: '100px'}}>
<svg fill="#f59e0b" height="10" viewbox="0 0 24 24" width="10"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          4.8/5 ocena właścicieli
        </span>
<span style={{fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0'}}>2 000+ apt · 15 miast</span>
</div>
<h1 style={{fontSize: '34px', fontWeight: '800', color: '#000000', lineHeight: '1.15', marginBottom: '12px', letterSpacing: '-0.02em'}}>
        Zarabiaj <span style={{color: '#00c4c0'}}>37% więcej</span><br/>na najmie krótkoterminowym.
      </h1>
<p style={{fontSize: '16px', color: '#333', lineHeight: '1.5', marginBottom: '8px'}}>
        Kompleksowe zarządzanie apartamentami w całej Polsce
      </p>
<p style={{fontSize: '16px', fontWeight: '700', color: '#000', marginBottom: '24px'}}>
        Sprawdź ile możesz zarobić na swoim mieszkaniu
      </p>

<div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
<div>
<label style={{display: 'block', fontSize: '11px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em'}}>Adres nieruchomości</label>
<div style={{position: 'relative'}}>
<input autocomplete="off" id="address-input" onblur="setTimeout(()=&gt;document.getElementById('addr-suggestions').style.display='none',200)" onblur2="this.style.borderColor='#e8e8e8'" onfocus="this.style.borderColor='#00c4c0'" oninput="showSuggestions(this.value)" placeholder="np. ul. Marszałkowska 10, Warszawa" style={{width: '100%', background: '#f8f8f8', border: '1.5px solid #e8e8e8', borderRadius: '12px', padding: '13px 16px', fontSize: '14px', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box'}} type="text"/>
<div id="addr-suggestions" style={{display: 'none', position: 'absolute', top: '100%', left: '0', right: '0', background: 'white', border: '1px solid #ebebeb', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', zIndex: '50', overflow: 'hidden', marginTop: '4px'}}></div>
</div>
</div>
<div>
<label style={{display: 'block', fontSize: '11px', fontWeight: '700', color: '#1a1a1a', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.05em'}}>Liczba pokoi</label>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px'}}>
<label style={{cursor: 'pointer'}}><input checked="" className="room-radio" name="rooms" style={{display: 'none'}} type="radio"/><div className="room-btn" style={{border: '1.5px solid #e8e8e8', background: 'white', borderRadius: '10px', padding: '11px 4px', textAlign: 'center', fontSize: '13px', fontWeight: '500', color: '#555', cursor: 'pointer'}}>Studio</div></label>
<label style={{cursor: 'pointer'}}><input className="room-radio" name="rooms" style={{display: 'none'}} type="radio"/><div className="room-btn" style={{border: '1.5px solid #e8e8e8', background: 'white', borderRadius: '10px', padding: '11px 4px', textAlign: 'center', fontSize: '13px', fontWeight: '500', color: '#555', cursor: 'pointer'}}>1 pok.</div></label>
<label style={{cursor: 'pointer'}}><input className="room-radio" name="rooms" style={{display: 'none'}} type="radio"/><div className="room-btn" style={{border: '1.5px solid #e8e8e8', background: 'white', borderRadius: '10px', padding: '11px 4px', textAlign: 'center', fontSize: '13px', fontWeight: '500', color: '#555', cursor: 'pointer'}}>2 pok.</div></label>
<label style={{cursor: 'pointer'}}><input className="room-radio" name="rooms" style={{display: 'none'}} type="radio"/><div className="room-btn" style={{border: '1.5px solid #e8e8e8', background: 'white', borderRadius: '10px', padding: '11px 4px', textAlign: 'center', fontSize: '13px', fontWeight: '500', color: '#555', cursor: 'pointer'}}>3+</div></label>
</div>
</div>
<div>
<label style={{display: 'block', fontSize: '11px', fontWeight: '700', color: '#1a1a1a', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.05em'}}>E-mail</label>
<input id="hero-email" onblur="this.style.borderColor='#e8e8e8'" onfocus="this.style.borderColor='#00c4c0'" placeholder="twoj@email.pl" style={{width: '100%', background: '#f8f8f8', border: '1.5px solid #e8e8e8', borderRadius: '12px', padding: '13px 16px', fontSize: '14px', outline: 'none', transition: 'border-color .2s', boxSizing: 'border-box'}} type="email"/>
</div>
<button onclick="showPage('zapisz-sie')" onmouseout="this.style.background='#00c4c0'" onmouseover="this.style.background='#00b0ac'" style={{width: '100%', background: '#00c4c0', color: 'white', fontWeight: '700', fontSize: '16px', padding: '16px', borderRadius: '100px', border: 'none', cursor: 'pointer', transition: 'background .2s', boxShadow: '0 8px 24px rgba(0,196,192,0.3)', marginTop: '4px'}}>
          Sprawdź swój zysk – bezpłatnie →
        </button>
<p style={{textAlign: 'center', fontSize: '12px', color: '#999', margin: '0'}}>
          Wolisz zadzwonić? <a href="tel:221131400" style={{fontWeight: '700', color: '#0f0f0f', textDecoration: 'none'}}>22 113 14 00</a> · Pon–Pt 8–18
        </p>
</div>
</div>

<div></div>
</div>
</section>
<style>
  .room-radio:checked + .room-btn { border-color:#00c4c0 !important; background:#f0fcfb !important; color:#00c4c0 !important; font-weight:600 !important; }
  .room-btn:hover { border-color:#00c4c0 !important; }
  @media (max-width:768px) {
    /* Hero */
    #pg-home section:first-of-type > div { grid-template-columns:1fr !important; }

    /* Mapa – stack na mobile */
    .map-grid { grid-template-columns:1fr !important; }

    /* Tabela krótki vs długi – scroll poziomy */
    .table-scroll { overflow-x:auto; -webkit-overflow-scrolling:touch; }
    .table-scroll > div { min-width:600px; }

    /* Opinie slider – 1 karta na mobile */
    #reviews-track > div { flex:0 0 calc(100% - 0px) !important; }
    #onas-rev-track > div { flex:0 0 calc(100% - 0px) !important; }

    /* Sekcja technologii */
    .tech-grid { grid-template-columns:1fr !important; }
    .tech-grid .order-switch { order:0 !important; }

    /* Kroki */
    .steps-grid { grid-template-columns:1fr 1fr !important; }

    /* Nagłówki */
    h2 { font-size:1.75rem !important; }
    h1 { font-size:2rem !important; }

    /* Padding sekcji */
    section { padding-left:16px !important; padding-right:16px !important; }

    /* Inwestor – hero split stack */
    #pg-inwestor .hero-split { flex-direction:column !important; height:auto !important; }
    #pg-inwestor .hero-split > div:first-child { flex:none !important; width:100% !important; padding:40px 20px 24px !important; }
    #pg-inwestor .hero-split > div:last-child { flex:none !important; width:100% !important; padding:0 20px 32px !important; height:260px !important; }
    #pg-inwestor .hero-split > div:last-child img { border-radius:12px !important; }

    /* Inwestor – hero wrapper height */
    #pg-inwestor > div:first-child { height:auto !important; }

    /* Inwestor – pasek liczb 2 kolumny */
    #pg-inwestor .hero-stats { grid-template-columns:1fr 1fr !important; }
    #pg-inwestor .hero-stats > div { border-right:none !important; border-bottom:1px solid #ebebeb; padding:16px 8px !important; }

    /* Remote – hero split stack */
    #pg-remote .hero-split { flex-direction:column !important; height:auto !important; }
    #pg-remote .hero-split > div:first-child { flex:none !important; width:100% !important; padding:40px 20px 24px !important; }
    #pg-remote .hero-split > div:last-child { flex:none !important; width:100% !important; padding:0 20px 32px !important; height:260px !important; }
    #pg-remote .hero-split > div:last-child img { border-radius:12px !important; }
    #pg-remote > div:first-child { height:auto !important; }
    #pg-remote .hero-stats { grid-template-columns:1fr 1fr !important; }
    #pg-remote .hero-stats > div { border-right:none !important; border-bottom:1px solid #ebebeb; padding:16px 8px !important; }

    /* Remote – sekcja Dla kogo – stack kolumn */
    #pg-remote section > div > div[style*="grid-template-columns:1fr 1fr"] { grid-template-columns:1fr !important; gap:32px !important; }
  }
</style>



<div style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '32px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#ebebeb]">
<div className="text-center pt-4 md:pt-0 md:px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-xs text-[#444444]">apartamentów w zarządzaniu</div>
</div>
<div className="text-center pt-4 md:pt-0 md:px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-xs text-[#444444]">obsłużonych rezerwacji</div>
</div>
<div className="text-center pt-4 md:pt-0 md:px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-xs text-[#444444]">średni wzrost przychodów</div>
</div>
<div className="text-center pt-4 md:pt-0 md:px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div>
<div className="text-xs text-[#444444]">ocena właścicieli</div>
</div>
</div>
</div>
</div>



<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele o współpracy z BookingHost</h2>
<p className="text-[#888] mb-5">1 800+ właścicieli nam zaufało</p>
<div className="inline-flex items-center gap-2 bg-[#f0fcfb] border border-[#00c4c0]/30 rounded-full px-5 py-2">
<svg fill="none" height="14" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>
<span className="text-xs font-semibold text-[#1a2e35]">35% nowych klientów dołącza z polecenia</span>
</div>
</div>
<div style={{overflow: 'hidden'}}>
<div id="reviews-track" style={{display: 'flex', gap: '24px', transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 16px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222222] leading-relaxed mb-5 italic">Z czystym sercem polecam. Robią wszystko — ja nic nie muszę.</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774438828/ChatGPT_Image_25_mar_2026_12_40_08_ppvt5s.png"/></div>
<div><p className="text-sm font-semibold text-[#0f0f0f]">Judyta K.</p><p className="text-xs text-[#444444]">Właścicielka · Warszawa · od 2019</p></div>
</div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 16px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222222] leading-relaxed mb-5 italic">Spokojnie sypiam, a przelew przychodzi co miesiąc.</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774438854/ChatGPT_Image_25_mar_2026_12_40_46_s9hvjf.png"/></div>
<div><p className="text-sm font-semibold text-[#0f0f0f]">Karol W.</p><p className="text-xs text-[#444444]">Właściciel · Kraków · od 2020</p></div>
</div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 16px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222222] leading-relaxed mb-5 italic">Oddałem mieszkanie i zapomniałem o problemach.</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774438882/ChatGPT_Image_25_mar_2026_12_41_11_tksnsv.png"/></div>
<div><p className="text-sm font-semibold text-[#0f0f0f]">Marek T.</p><p className="text-xs text-[#444444]">Właściciel 3 apt. · Gdańsk · od 2021</p></div>
</div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 16px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222222] leading-relaxed mb-5 italic">Nie spodziewałam się że to takie proste. Wszystkim się zajmują.</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774438916/ChatGPT_Image_25_mar_2026_12_41_43_jbk7kt.png"/></div>
<div><p className="text-sm font-semibold text-[#0f0f0f]">Anna W.</p><p className="text-xs text-[#444444]">Właścicielka · Warszawa · od 2022</p></div>
</div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 16px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222222] leading-relaxed mb-5 italic">Polecam każdemu kto ma mieszkanie i nie chce się tym zajmować.</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774438941/ChatGPT_Image_25_mar_2026_12_42_13_e34kox.png"/></div>
<div><p className="text-sm font-semibold text-[#0f0f0f]">Piotr K.</p><p className="text-xs text-[#444444]">Właściciel · Wrocław · od 2021</p></div>
</div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 16px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222222] leading-relaxed mb-5 italic">Nareszcie ktoś kto dotrzymuje słowa. Polecam.</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"><img className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774438973/ChatGPT_Image_25_mar_2026_12_42_40_nbetsz.png"/></div>
<div><p className="text-sm font-semibold text-[#0f0f0f]">Emil K.</p><p className="text-xs text-[#444444]">Właściciel · Poznań · od 2023</p></div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<button className="reviews-btn w-10 h-10 rounded-full border border-[#ebebeb] flex items-center justify-center transition-all" disabled="" onclick="moveReviews(-1)" style={{opacity: '0.3', cursor: 'default'}}>
<svg fill="none" height="14" stroke="#444" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>
<button className="reviews-btn w-10 h-10 rounded-full border border-[#ebebeb] hover:border-[#00c4c0] flex items-center justify-center transition-all" onclick="moveReviews(1)">
<svg fill="none" height="14" stroke="#444" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>
</section>



<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Realne wyniki</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przykładowe zarobki z prawdziwych mieszkań</h2>
<p className="text-[#222222]">Sprawdź ile zarabiają właściciele, którzy powierzyli nam swoje mieszkania</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-8">
<div className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] shadow-sm">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Apartament na wynajem krótkoterminowy Śródmieście Warszawa – wyniki BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774441786/ChatGPT_Image_25_mar_2026_13_29_32_hhc9hr.png"/>
</div>
<div className="p-6">
<p className="text-xs text-[#00c4c0] font-medium uppercase tracking-wide mb-1">Śródmieście, Warszawa · Studio 42m²</p>
<div className="flex items-end justify-between mt-3">
<div><p className="text-xs text-[#888]">Przed (najem długi)</p><p className="text-base font-medium text-[#888] line-through">2 800 zł/mies.</p></div>
<div className="text-right"><p className="text-xs text-[#00c4c0]">Z BookingHost</p><p className="text-2xl font-semibold text-[#0f0f0f]">4 650 zł</p></div>
</div>
<div className="mt-3 pt-3 border-t border-[#ebebeb] flex items-center justify-between">
<span className="text-xs text-[#444444]">+1 850 zł więcej każdego miesiąca</span>
<span className="bg-[#f0fcfb] text-[#00c4c0] text-xs font-bold px-2.5 py-1 rounded-full">+66%</span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] shadow-sm">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Apartament na wynajem krótkoterminowy Kazimierz Kraków – wyniki BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774442203/ChatGPT_Image_25_mar_2026_13_36_34_deisjs.png"/>
</div>
<div className="p-6">
<p className="text-xs text-[#00c4c0] font-medium uppercase tracking-wide mb-1">Kazimierz, Kraków · 2 pokoje 55m²</p>
<div className="flex items-end justify-between mt-3">
<div><p className="text-xs text-[#888]">Przed (najem długi)</p><p className="text-base font-medium text-[#888] line-through">3 500 zł/mies.</p></div>
<div className="text-right"><p className="text-xs text-[#00c4c0]">Z BookingHost</p><p className="text-2xl font-semibold text-[#0f0f0f]">5 400 zł</p></div>
</div>
<div className="mt-3 pt-3 border-t border-[#ebebeb] flex items-center justify-between">
<span className="text-xs text-[#444444]">+1 900 zł więcej każdego miesiąca</span>
<span className="bg-[#f0fcfb] text-[#00c4c0] text-xs font-bold px-2.5 py-1 rounded-full">+54%</span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] shadow-sm">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Apartament na wynajem krótkoterminowy Gdańsk Przymorze – wyniki BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774439900/ChatGPT_Image_25_mar_2026_12_58_10_yya9xv.png"/>
</div>
<div className="p-6">
<p className="text-xs text-[#00c4c0] font-medium uppercase tracking-wide mb-1">Przymorze, Gdańsk · Studio 38m²</p>
<div className="flex items-end justify-between mt-3">
<div><p className="text-xs text-[#888]">Przed (najem długi)</p><p className="text-base font-medium text-[#888] line-through">2 400 zł/mies.</p></div>
<div className="text-right"><p className="text-xs text-[#00c4c0]">Z BookingHost</p><p className="text-2xl font-semibold text-[#0f0f0f]">4 100 zł</p></div>
</div>
<div className="mt-3 pt-3 border-t border-[#ebebeb] flex items-center justify-between">
<span className="text-xs text-[#444444]">+1 700 zł więcej każdego miesiąca</span>
<span className="bg-[#f0fcfb] text-[#00c4c0] text-xs font-bold px-2.5 py-1 rounded-full">+71%</span>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#00c4c0] hover:text-[#0f0f0f] transition-colors" href="#" onclick="showPage('casestudy');return false;">
        Zobacz więcej przykładów <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
</a>
</div>
</div>
</section>



<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p>
</div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>
        Zobacz pełny zakres usług
        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
</a>
</div>
</div>
</section>



<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Nasza technologia</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Zarabiasz więcej i kontrolujesz wszystko</h2>
<p className="text-[#444] max-w-xl mx-auto">Jedyny w Polsce autorski algorytm cenowy dla STR. Panel właściciela daje Ci pełen wgląd — z telefonu, z każdego miejsca.</p>
</div>

<div className="tech-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '80px'}}>
<div>
<span style={{display: 'inline-block', background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px'}}>Autorski algorytm BookingHost</span>
<h3 style={{fontSize: '28px', fontWeight: '700', color: '#0f0f0f', lineHeight: '1.2', marginBottom: '16px'}}>Nasz autorski algorytm do zarządzania cenami zarabia dla Ciebie</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.7', marginBottom: '24px'}}>Kilka razy dziennie nasz algorytm analizuje popyt, eventy w mieście i ceny konkurencji — i ustawia optymalną cenę bez Twojego udziału. Efekt: średnio <strong>+37% przychodów</strong> więcej niż przy samodzielnym wynajmie.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Ceny aktualizowane automatycznie, całą dobę</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Reaguje na eventy, konkurencję i sezonowość w czasie rzeczywistym</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Analizuje dziesiątki zmiennych — dzień tygodnia, eventy, sezonowość i konkurencję</span>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
<div style={{background: 'white', borderRadius: '14px', padding: '16px', textAlign: 'center', border: '1px solid #ebebeb'}}>
<div style={{fontSize: '26px', fontWeight: '800', color: '#00c4c0'}}>+37%</div>
<div style={{fontSize: '11px', color: '#666', marginTop: '4px'}}>wzrost przychodów</div>
</div>
<div style={{background: 'white', borderRadius: '14px', padding: '16px', textAlign: 'center', border: '1px solid #ebebeb'}}>
<div style={{fontSize: '26px', fontWeight: '800', color: '#00c4c0'}}>84%</div>
<div style={{fontSize: '11px', color: '#666', marginTop: '4px'}}>średnie obłożenie</div>
</div>
<div style={{background: 'white', borderRadius: '14px', padding: '16px', textAlign: 'center', border: '1px solid #ebebeb'}}>
<div style={{fontSize: '26px', fontWeight: '800', color: '#00c4c0'}}>10+</div>
<div style={{fontSize: '11px', color: '#666', marginTop: '4px'}}>portali rezerwacyjnych</div>
</div>
</div>
</div>
<div style={{borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)'}}>
<img alt="Właścicielka sprawdza przychody z wynajmu na telefonie – BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774437665/ChatGPT_Image_25_mar_2026_12_20_53_v15mtc.png" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}}/>
</div>
</div>

<div style={{height: '1px', background: '#e0e0e0', marginBottom: '80px'}}></div>

<div className="tech-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
<div style={{position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', aspectRatio: '4/3'}}>
<img alt="Panel właściciela BookingHost – przychody i rezerwacje" src="https://res.cloudinary.com/depa0audz/image/upload/v1774445245/chcce_aby_dokdnie_to_co_ci_wys_Nano_Banana_2_00805_jxuqjn.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%', opacity: '0.6'}}/>

<div style={{position: 'absolute', top: '20px', left: '20px', background: 'white', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
<div style={{fontSize: '11px', color: '#888', marginBottom: '4px'}}>Przychód · Czerwiec</div>
<div style={{fontSize: '22px', fontWeight: '800', color: '#0f0f0f'}}>5 840 zł</div>
<div style={{fontSize: '11px', color: '#00c4c0', fontWeight: '600', marginTop: '2px'}}>↑ +23% vs maj</div>
</div>
<div style={{position: 'absolute', bottom: '20px', right: '20px', background: 'white', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
<div style={{fontSize: '11px', color: '#888', marginBottom: '4px'}}>Obłożenie</div>
<div style={{fontSize: '22px', fontWeight: '800', color: '#0f0f0f'}}>84%</div>
<div style={{fontSize: '11px', color: '#444', marginTop: '2px'}}>Ostatnie 30 dni</div>
</div>
<div style={{position: 'absolute', top: '20px', right: '20px', background: '#1a2e35', borderRadius: '12px', padding: '10px 14px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
<div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#00c4c0'}}></div>
<span style={{fontSize: '11px', color: 'white', fontWeight: '600'}}>3 aktywne rezerwacje</span>
</div>
</div>
</div>
<div>
<span style={{display: 'inline-block', background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px'}}>Panel właściciela</span>
<h3 style={{fontSize: '28px', fontWeight: '700', color: '#0f0f0f', lineHeight: '1.2', marginBottom: '16px'}}>Pełna kontrola<br/>z każdego miejsca na świecie</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.7', marginBottom: '24px'}}>Każda rezerwacja, każdy przelew, każda zmiana stanu mieszkania — widoczne w czasie rzeczywistym w Twoim panelu. Z telefonu, z laptopa, z Londynu czy Warszawy.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Wszystkie rezerwacje z 10+ portali w jednym miejscu</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Comiesięczne zestawienia i faktury online</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Rezerwacje właścicielskie jednym kliknięciem</span>
</div>
</div>
<a href="#" onclick="showPage('kontakt');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00c4c0', color: 'white', fontWeight: '700', fontSize: '14px', padding: '14px 28px', borderRadius: '100px', textDecoration: 'none'}}>
          Sprawdź swój zysk – bezpłatnie →
        </a>
</div>
</div>
</div>
</section>



<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Obsługiwane miasta</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Zarządzamy najmem krótkoterminowym w całej Polsce</h2>
<p className="text-[#444] max-w-xl mx-auto">W każdym mieście posiadamy lokalny zespół, który na co dzień dba o Twoje mieszkanie i Twoich gości.</p>
</div>
<div className="map-grid" style={{display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', alignItems: 'center'}}>

<div style={{position: 'relative'}}>
<img alt="Mapa Polski – BookingHost lokalne biura" src="https://res.cloudinary.com/depa0audz/image/upload/v1774452962/ChatGPT_Image_25_mar_2026_16_34_31_i9b6rv.png" style={{width: '100%', display: 'block', borderRadius: '16px'}}/>
</div>

<div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px'}}>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Warszawa</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Kraków</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Trójmiasto</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Wrocław</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Poznań</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Łódź</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Katowice</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Zakopane / Tatry</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Szczecin / Wybrzeże</p>
</div>
<div style={{background: 'white', border: '1px solid #ebebeb', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<p style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f', margin: '0'}}>Lublin · Rzeszów · Toruń</p>
</div>
</div>

<div style={{background: 'linear-gradient(135deg,#1a2e35,#2a4a55)', borderRadius: '20px', padding: '24px', color: 'white'}}>
<p style={{fontSize: '14px', color: 'white', fontWeight: '600', marginBottom: '6px'}}>Lokalny zespół na miejscu</p>
<p style={{fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.6', marginBottom: '16px'}}>Nie zarządzamy zdalnie. W każdym mieście mamy własny zespół na miejscu — koordynatorów, sprzątaczki i opiekunów, którzy znają każde mieszkanie osobiście.</p>
<div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
<div style={{display: 'flex'}}>
<div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#00c4c0', border: '2px solid #1a2e35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'white'}}>AK</div>
<div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#2db8b5', border: '2px solid #1a2e35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'white', marginLeft: '-8px'}}>MN</div>
<div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#009e9b', border: '2px solid #1a2e35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'white', marginLeft: '-8px'}}>JW</div>
</div>
<p style={{fontSize: '12px', color: 'rgba(255,255,255,0.7)'}}>Ponad <strong style={{color: 'white'}}>200+ osób</strong> zaangażowanych w całość operacji</p>
</div>
</div>
</div>
</div>
</div>
</section>




<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Krótki vs długi najem</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Dlaczego właściciele wybierają najem krótkoterminowy?</h2>
<p className="text-[#444] max-w-xl mx-auto">Sprawdź co zyskujesz zmieniając model najmu.</p>
</div>
<div className="table-scroll"><div style={{borderRadius: '20px', overflow: 'hidden', border: '1.5px solid #e0e0e0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)'}}>

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#1a2e35'}}>
<div style={{padding: '18px 24px', fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,0.5)'}}>Kryterium</div>
<div style={{padding: '18px 24px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)'}}>
<div style={{fontSize: '10px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '.12em', color: 'rgba(255,255,255,0.5)', marginBottom: '4px'}}>NAJEM</div>
<div style={{fontSize: '15px', fontWeight: '600', color: 'rgba(255,255,255,0.6)'}}>Długoterminowy</div>
</div>
<div style={{padding: '18px 24px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,196,192,0.15)'}}>
<div style={{fontSize: '11px', color: '#00c4c0', marginBottom: '4px'}}>NAJEM</div>
<div style={{fontSize: '15px', fontWeight: '600', color: 'white'}}>Krótkoterminowy</div>
<div style={{fontSize: '10px', color: '#00c4c0', fontWeight: '600', marginTop: '2px'}}>z BookingHost</div>
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'white', borderTop: '1px solid #f0f0f0'}}>
<div style={{padding: '16px 24px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', display: 'block'}}><span style={{fontWeight: '600', display: 'block', marginBottom: '4px'}}>Przychód</span><span style={{fontSize: '12px', color: '#555', fontWeight: '400'}}>Ile miesięcznie zarabia Twoje mieszkanie</span></div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #f0f0f0', fontSize: '14px', color: '#444'}}>Stały czynsz — zarabiasz tyle samo<br/>niezależnie od sezonu</div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #f0f0f0', background: '#f0fcfb', fontSize: '14px', color: '#0a7a78', fontWeight: '600'}}>Od 10 do 45%<br/>wyższy przychód</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#fafafa', borderTop: '1px solid #f0f0f0'}}>
<div style={{padding: '16px 24px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', display: 'block'}}><span style={{fontWeight: '600', display: 'block', marginBottom: '4px'}}>Stan mieszkania</span><span style={{fontSize: '12px', color: '#555', fontWeight: '400'}}>Jak często i kto kontroluje nieruchomość</span></div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #ebebeb', fontSize: '14px', color: '#444'}}>Widzisz mieszkanie raz w roku —<br/>szkody kumulują się latami</div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #ebebeb', background: '#f0fcfb', fontSize: '14px', color: '#0a7a78', fontWeight: '600'}}>Weryfikacja po każdym gościu —<br/>średnio co 4 dni</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'white', borderTop: '1px solid #f0f0f0'}}>
<div style={{padding: '16px 24px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', display: 'block'}}><span style={{fontWeight: '600', display: 'block', marginBottom: '4px'}}>Przestoje</span><span style={{fontSize: '12px', color: '#555', fontWeight: '400'}}>Ile miesięcy w roku mieszkanie nie zarabia</span></div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #f0f0f0', fontSize: '14px', color: '#444'}}>Co roku 2–3 miesiące przestoju<br/>i koszty odświeżenia</div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #f0f0f0', background: '#f0fcfb', fontSize: '14px', color: '#0a7a78', fontWeight: '600'}}>Mieszkanie zarabia latami<br/>bez przerwy</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#fafafa', borderTop: '1px solid #f0f0f0'}}>
<div style={{padding: '16px 24px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', display: 'block'}}><span style={{fontWeight: '600', display: 'block', marginBottom: '4px'}}>Ryzyko finansowe</span><span style={{fontSize: '12px', color: '#555', fontWeight: '400'}}>Co się dzieje gdy najemca przestaje płacić</span></div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #ebebeb', fontSize: '14px', color: '#444'}}>Eksmisja niepłacącego najemcy<br/>trwa od 6 do 18 miesięcy</div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #ebebeb', background: '#f0fcfb', fontSize: '14px', color: '#0a7a78', fontWeight: '600'}}>Goście płacą z góry —<br/>brak ryzyka</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'white', borderTop: '1px solid #f0f0f0'}}>
<div style={{padding: '16px 24px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', display: 'block'}}><span style={{fontWeight: '600', display: 'block', marginBottom: '4px'}}>Dostęp do mieszkania</span><span style={{fontSize: '12px', color: '#555', fontWeight: '400'}}>Czy możesz wejść do własnego mieszkania</span></div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #f0f0f0', fontSize: '14px', color: '#444'}}>Brak dostępu przez<br/>cały okres najmu</div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #f0f0f0', background: '#f0fcfb', fontSize: '14px', color: '#0a7a78', fontWeight: '600'}}>Wynajmujesz kiedy chcesz —<br/>blokujesz terminy sam</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#fafafa', borderTop: '1px solid #f0f0f0'}}>
<div style={{padding: '16px 24px', fontSize: '14px', fontWeight: '500', color: '#0f0f0f', display: 'block'}}><span style={{fontWeight: '600', display: 'block', marginBottom: '4px'}}>Bezpieczeństwo</span><span style={{fontSize: '12px', color: '#555', fontWeight: '400'}}>Kto jest chroniony przez prawo</span></div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #ebebeb', fontSize: '14px', color: '#444'}}>Prawo chroni najemcę,<br/>ryzyko po stronie właściciela</div>
<div style={{padding: '16px 24px', textAlign: 'center', borderLeft: '1px solid #ebebeb', background: '#f0fcfb', fontSize: '14px', color: '#0a7a78', fontWeight: '600'}}>Prawo hotelarskie —<br/>pełna kontrola właściciela</div>
</div>

<div style={{background: '#1a2e35', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px'}}>
<p style={{fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: '0'}}>Masz pytania? Umów się na bezpłatną rozmowę z konsultantem.</p>
<a href="#" onclick="showPage('kontakt');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00c4c0', color: 'white', fontWeight: '600', fontSize: '13px', padding: '12px 24px', borderRadius: '100px', textDecoration: 'none', whiteSpace: 'nowrap', marginRight: '8px'}}>
          Bezpłatna konsultacja →
        </a>
</div>
</div></div>
</div>
</section>



<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie — bezpłatnie i bez zobowiązań</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja mieszkania</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Publikujemy na Airbnb, Booking.com i 10+ portalach — algorytm dostosowuje ceny do sezonu, eventów i popytu</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p>
</div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie które mogłoby zarabiać więcej?</h2>
<p className="text-lg text-white/75 mb-10">Dołącz do 2 000+ właścicieli. Bezpłatna wycena — odpowiadamy w 24h.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('kontakt');return false;">
        Sprawdź swój zysk – bezpłatnie
      </a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<div className="page" id="pg-uslugi">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>

<div style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Nasze usługi</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Kompleksowe zarządzanie wynajmem mieszkań</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Zajmujemy się wszystkim. Bez Twojego czasu, bez stresu, bez niespodzianek.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('kontakt');return false;">
            Sprawdź swój zysk – bezpłatnie →
          </a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Właściciel apartamentu zadowolony z przychodów – BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774463139/ChatGPT_Image_25_mar_2026_19_25_22_f5bnco.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">obsłużonych rezerwacji</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div>
<div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div>
</div>
</div>
</div>
</div>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 space-y-28">
<div className="text-center mb-4">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Zakres współpracy</span>
<h2 className="text-4xl font-semibold tracking-tight text-[#0f0f0f]">Pełna obsługa w jednym pakiecie</h2>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Marketing i rezerwacje</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Twoje mieszkanie widoczne dla milionów podróżujących na całym świecie</h2>
<p className="text-[#222222] leading-relaxed mb-5">Publikujemy Twoją ofertę na wszystkich największych portalach jednocześnie – Airbnb, Booking.com i 10 innych. Profesjonalne zdjęcia i opis mieszkania sprawiają że goście rezerwują chętniej i płacą więcej.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Profesjonalna sesja zdjęciowa wliczona w usługę</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Profesjonalny opis mieszkania – tak żeby goście chcieli rezerwować</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Synchronizacja kalendarzy w czasie rzeczywistym – zero podwójnych rezerwacji</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Stałe aktualizowanie oferty na podstawie danych rynkowych</li>
</ul>

<div className="bg-[#f8f8f8] border border-[#ebebeb] rounded-xl p-5">
<p className="text-sm text-[#222222] leading-relaxed italic">„Nie spodziewałem się że to tak dobrze działa. Polecam każdemu kto ma wolne mieszkanie i nie wie co z nim zrobić."</p>
<p className="text-xs text-[#00c4c0] font-medium mt-2">— Marek T., właściciel · Warszawa · od 2023</p>
</div>
</div>

<div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
<img alt="Apartament BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774469185/ChatGPT_Image_25_mar_2026_21_06_16_zlcpij.png"/>
<div className="absolute inset-0 bg-[#1a2e35]/60"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<img alt="Portale rezerwacyjne" src="https://res.cloudinary.com/depa0audz/image/upload/v1774468896/ChatGPT_Image_25_mar_2026_21_01_31_whqxhm.png" style={{width: '85%', objectFit: 'contain'}}/>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Właściciel sprawdza ceny wynajmu – algorytm cenowy BookingHost" className="w-full h-full object-cover object-center" src="https://res.cloudinary.com/depa0audz/image/upload/v1774469432/ChatGPT_Image_25_mar_2026_21_10_20_ldhigv.png"/>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Optymalizacja cen</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Twoje mieszkanie zawsze wynajęte po najwyższej możliwej cenie</h2>
<p className="text-[#222222] leading-relaxed mb-5">Nasz algorytm cenowy śledzi rynek przez całą dobę i automatycznie podnosi ceny gdy rośnie popyt – przed świętami, koncertami, targami i innymi wydarzeniami w okolicy.</p>

<div className="bg-[#f0fcfb] border border-[#00c4c0]/20 rounded-xl p-5 mb-5">
<p className="text-xs font-semibold text-[#00c4c0] uppercase tracking-wide mb-2">Przykład z życia</p>
<p className="text-sm text-[#222222] leading-relaxed">W lipcu 2024 podczas Open'er Festival w Gdyni algorytm podniósł ceny automatycznie o 280%. Właściciel zarobił w 5 dni tyle co normalnie w miesiąc.</p>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Aktualizacja cen kilka razy dziennie</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Automatyczne wykrywanie eventów lokalnych i szczytów popytu</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Średnio +37% przychodów vs stała cena</li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Obsługa gości 24/7</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Obsługujemy gości całą dobę – w każdym języku, o każdej porze</h2>
<p className="text-[#222222] leading-relaxed mb-5">Odbieramy wiadomości i telefony od gości całą dobę – w nocy, w weekendy i w święta. Odpowiadamy średnio w 4 minuty, w ponad 80 językach.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Bezproblemowy check-in – gość wchodzi do mieszkania bez żadnych komplikacji</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Weryfikacja gości przed każdym przyjazdem</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Obsługa reklamacji i trudnych sytuacji</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>250 000+ obsłużonych rezerwacji, średni czas odpowiedzi 4 minuty</li>
</ul>

<div className="bg-[#f8f8f8] border border-[#ebebeb] rounded-xl p-5">
<p className="text-sm text-[#222222] leading-relaxed italic">„Spokój ducha to coś czego nie da się przecenić. Wiemy że nasze mieszkanie jest w dobrych rękach."</p>
<p className="text-xs text-[#00c4c0] font-medium mt-2">— Marek W., właściciel · Kraków · od 2024</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Obsługa gości 24/7 – BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774470842/ChatGPT_Image_25_mar_2026_21_33_49_ftznrb.png"/>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Sprzątanie apartamentów – BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774471389/Porza%CC%A8dek_w_nowoczesnym_salonie_go56by.png"/>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Sprzątanie i utrzymanie</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Twoje mieszkanie zawsze czyste i gotowe na kolejnego gościa</h2>
<p className="text-[#222222] leading-relaxed mb-5">Po każdym wyjeździe gościa przeprowadzamy sprzątanie i kontrolę stanu mieszkania z dokumentacją fotograficzną. Każdą usterkę zgłaszamy i naprawiamy zanim przyjedzie kolejny gość.</p>
<div className="bg-[#f0fcfb] border border-[#00c4c0]/20 rounded-xl p-5 mb-5">
<p className="text-xs font-semibold text-[#00c4c0] uppercase tracking-wide mb-2">Gwarancja przejrzystości</p>
<p className="text-sm text-[#222222] leading-relaxed">Sprawdzamy każde pomieszczenie – sypialnia, łazienka, salon, kuchnia. Usterki zgłaszamy i naprawiamy zanim wpłyną na ocenę apartamentu.</p>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Pranie pościeli i ręczników w standardzie hotelowym</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Uzupełnianie środków czystości i kosmetyków gościnnych</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Koordynacja napraw i usterek</li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Panel właściciela</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Masz pełen wgląd w swoje przychody – z telefonu, o każdej porze</h2>
<p className="text-[#222222] leading-relaxed mb-5">W panelu właściciela widać wszystkie rezerwacje, przychody i rozliczenia w czasie rzeczywistym. Przejrzysty podgląd bez potrzeby kontaktu z nami.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Wszystkie rezerwacje z każdego portalu w jednym miejscu</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Comiesięczne zestawienia przychodów i faktury</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Blokowanie własnych terminów jednym kliknięciem</li>
<li className="flex items-start gap-3 text-sm text-[#222222]"><svg className="flex-shrink-0 mt-0.5" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16"><polyline points="20 6 9 17 4 12"></polyline></svg>Historia weryfikacji stanu mieszkania po każdym pobycie</li>
</ul>
</div>
<div className="rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Panel właściciela BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774444613/laptop_screen_facing_the_viewe_Nano_Banana_2_97883_u7r1rb.jpg"/>
</div>
</div>
</div>
</section>

<section className="bg-[#f8f8f8] border-b border-[#ebebeb] py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Dlaczego nam ufają</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Zaufanie budowane konkretnymi działaniami</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white rounded-2xl p-8 border border-[#ebebeb]">
<div className="w-14 h-14 rounded-2xl bg-[#f0fcfb] flex items-center justify-center mb-6"><svg fill="none" height="26" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Twoje mieszkanie zawsze pod kontrolą</h3>
<p className="text-sm text-[#444444] leading-relaxed">Po każdym wymeldowaniu sprawdzamy stan mieszkania i robimy dokumentację fotograficzną. Wiesz dokładnie w jakim stanie jest Twoja nieruchomość.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-[#ebebeb]">
<div className="w-14 h-14 rounded-2xl bg-[#f0fcfb] flex items-center justify-center mb-6"><svg fill="none" height="26" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg></div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Widzisz każdą złotówkę w czasie rzeczywistym</h3>
<p className="text-sm text-[#444444] leading-relaxed">Każda rezerwacja, każdy przychód widoczny w panelu natychmiast po potwierdzeniu. Pełna przejrzystość bez żadnych niespodzianek na koniec miesiąca.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-[#ebebeb]">
<div className="w-14 h-14 rounded-2xl bg-[#f0fcfb] flex items-center justify-center mb-6"><svg fill="none" height="26" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Dedykowany opiekun zawsze dostępny</h3>
<p className="text-sm text-[#444444] leading-relaxed">Masz jedną osobę kontaktową która zna Twoje mieszkanie i historię współpracy. Zawsze wiesz do kogo dzwonić.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-[#ebebeb]">
<div className="w-14 h-14 rounded-2xl bg-[#f0fcfb] flex items-center justify-center mb-6"><svg fill="none" height="26" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg></div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Nasz zespół jest fizycznie w Twoim mieście</h3>
<p className="text-sm text-[#444444] leading-relaxed">W każdym z 15 miast mamy własnych ludzi na miejscu. Nie zarządzamy zdalnie z biura – zawsze ktoś jest blisko Twojego mieszkania gdy coś się dzieje.</p>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Sprawdź ile zarobi Twoje mieszkanie</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('kontakt');return false;">Zamów bezpłatną wycenę</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<div className="page" id="pg-cennik">

<h1 className="sr-only">Cennik zarządzania najmem krótkoterminowym – BookingHost</h1>

<section className="bg-white border-b border-[#ebebeb]" style={{minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center'}}>
<div className="max-w-4xl mx-auto px-6 w-full py-12">
<div className="bg-[#f8f8f8] border border-[#ebebeb] rounded-3xl overflow-hidden">

<div className="flex items-center justify-between px-10 py-8 border-b border-[#ebebeb]">
<div>
<p className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] mb-2">Pełne zarządzanie</p>
<h2 className="text-2xl font-semibold tracking-tight text-[#0f0f0f]">Wszystko w jednym pakiecie</h2>
</div>
<div className="text-right">
<div className="text-6xl font-semibold tracking-tight text-[#0f0f0f]"><span className="text-3xl font-medium text-[#222222]">od </span>15<span className="text-[#00c4c0] text-4xl">%</span></div>
<p className="text-sm text-[#222222] mt-1">w zależności od modelu współpracy</p>
</div>
</div>

<div className="px-10 py-8">
<p className="text-sm font-medium text-[#0f0f0f] mb-5">Co jest wliczone:</p>
<div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Profesjonalna sesja zdjęciowa i opisy w 7 językach</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Publikacja i synchronizacja na 10+ portalach</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Algorytm cenowy AI – średnio +37% przychodów</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Obsługa gości 24/7 – telefony, wiadomości, check-in</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Koordynacja sprzątania i prania po każdej rezerwacji</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Zgłaszanie i koordynacja usterek i napraw</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Comiesięczny przelew i rozliczenie z fakturą</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Panel właściciela – rezerwacje i przychody online</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Dedykowany opiekun – jeden kontakt do wszystkiego</div>
<div className="flex items-center gap-3 text-sm text-[#222222]"><svg fill="none" height="15" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="15"><polyline points="20 6 9 17 4 12"></polyline></svg>Możliwość blokowania własnych terminów</div>
</div>
</div>

<div className="px-10 py-7 bg-white border-t border-[#ebebeb] flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-[#222222]">Skontaktuj się z nami – omówimy model współpracy dopasowany do Twoich potrzeb</p>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-medium py-3 px-7 rounded-full transition-all text-sm whitespace-nowrap flex items-center gap-2" href="#" onclick="showPage('kontakt');return false;">
          Rozpocznij bezpłatnie
          <svg fill="none" height="14" stroke="white" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Sprawdź potencjał swojego mieszkania</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Przygotujemy bezpłatny raport z szacowanymi przychodami dla Twojego mieszkania. Bez zobowiązań, w 24 godziny.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('kontakt');return false;">
        Zamów bezpłatny raport
      </a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<div className="page" id="pg-onas">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{position: 'relative', flex: '1', minHeight: '0'}}>
<img alt="Zespół BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774301794/grill_party_-32_ame4or.jpg" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%'}}/>
<div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to right, rgba(26,46,53,0.85) 50%, rgba(26,46,53,0.4) 100%)'}}></div>
<div style={{position: 'relative', zIndex: '10', maxWidth: '1280px', margin: '0 auto', padding: '0 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
<span style={{fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#00c4c0', display: 'block', marginBottom: '16px'}}>O nas</span>
<h1 style={{fontSize: '48px', fontWeight: '600', color: '#ffffff', lineHeight: '1.05', marginBottom: '20px', maxWidth: '600px'}}>Budujemy przyszłość zarządzania najmem w Polsce</h1>
<p style={{fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.65', maxWidth: '560px'}}>Od 2016 roku pomagamy właścicielom zarabiać więcej na najmie krótkoterminowym – bez angażowania ich czasu.</p>
</div>
</div>

<div style={{background: '#ffffff', borderTop: '1px solid #ebebeb', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">15</div><div className="text-sm text-[#444444]">miast w Polsce</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">10<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">lat na rynku</div></div>
</div>
</div>
</div>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Nasza historia</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-5">Z praktycznego doświadczenia, nie z teorii</h2>
<p className="text-[#222222] leading-relaxed mb-4">BookingHost powstał z faktycznego wyzwania zarządzania najmem nieruchomości w Polsce, Portugalii i Brazylii. Wiara i przekonanie, że można to robić lepiej – zwiększając zyski z najmu – leży u naszych korzeni.</p>
<p className="text-[#222222] leading-relaxed mb-4">Praktyczne doświadczenie pozwoliło nam opracować skuteczny model pracy. Wykorzystujemy algorytmy sztucznej inteligencji do zarządzania ceną najmu i stawiamy na pełną transparentność – udostępniając moduł właściciela gdzie każdy właściciel może w czasie rzeczywistym śledzić swoje przychody.</p>
<p className="text-[#222222] leading-relaxed">Dziś jesteśmy jedną z największych firm zarządzających najmem krótkoterminowym w Polsce, z lokalnym zespołem w każdym mieście.</p>
</div>
<div className="rounded-2xl overflow-hidden aspect-[4/3]"><img alt="Biuro BookingHost" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774715194/ChatGPT_Image_28_mar_2026_17_26_28_qga5wp.png" style={{objectPosition: 'center top'}}/></div>
</div>
</section>
<section className="py-20 bg-[#f8f8f8]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Wartości</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Co nas wyróżnia</h2>
</div>

<div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm mb-6">
<div style={{height: '360px', overflow: 'hidden', position: 'relative'}}>
<img alt="Zaufanie i bezpieczeństwo" src="https://res.cloudinary.com/depa0audz/image/upload/v1774717219/ChatGPT_Image_28_mar_2026_18_00_10_msykcu.png" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{height: '360px', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 40px'}}>
<h3 className="text-xl font-semibold text-[#0f0f0f] mb-3">Zaufanie i bezpieczeństwo</h3>
<p className="text-sm text-[#444] leading-relaxed">Twój majątek jest w dobrych rękach. Pełna transparentność rozliczeń, regularny monitoring stanu mieszkania po każdej rezerwacji i weryfikacja każdego gościa przed zameldowaniem.</p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm mb-6">
<div style={{height: '360px', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 40px'}}>
<h3 className="text-xl font-semibold text-[#0f0f0f] mb-3">Technologia i innowacja</h3>
<p className="text-sm text-[#444] leading-relaxed">Autorskie algorytmy do dynamicznego zarządzania ceną, Panel Właściciela dostępny 24/7 i automatyzacja procesów, które dotychczas wymagały godzin pracy manualnej. Technologia, która realnie zwiększa Twoje przychody.</p>
</div>
<div style={{height: '360px', overflow: 'hidden', position: 'relative'}}>
<img alt="Technologia" src="https://res.cloudinary.com/depa0audz/image/upload/v1774444613/laptop_screen_facing_the_viewe_Nano_Banana_2_97883_u7r1rb.jpg" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm">
<div style={{height: '360px', overflow: 'hidden', position: 'relative'}}>
<img alt="Mapa Polski" src="https://res.cloudinary.com/depa0audz/image/upload/v1774452962/ChatGPT_Image_25_mar_2026_16_34_31_i9b6rv.png" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{height: '360px', background: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 40px'}}>
<h3 className="text-xl font-semibold text-[#0f0f0f] mb-3">Lokalność i relacje</h3>
<p className="text-sm text-[#444] leading-relaxed">Lokalne zespoły w 15 miastach – nie zarządzamy zdalnie z jednego biura. Zawsze mamy kogoś na miejscu, kto zna Twoje miasto i Twoje mieszkanie. Bliskość, która ma znaczenie.</p>
</div>
</div>
</div>
</section>
<section className="py-20 bg-white border-b border-[#ebebeb]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Zespół</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Ludzie za BookingHost</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="aspect-[4/3]"><img alt="Andrzej Stecki" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774717841/WhatsApp_Image_2026-03-25_at_16.16.37_sfwbbj.jpg" style={{objectPosition: 'center 20%'}}/></div>
<div className="p-6">
<h3 className="text-lg font-semibold text-[#0f0f0f] mb-1">Andrzej Stecki</h3>
<p className="text-sm text-[#00c4c0] font-medium mb-3">CEO</p>
<p className="text-sm text-[#222222] leading-relaxed">Założyciel BookingHost. Zbudował firmę od zera – od pierwszego apartamentu w Warszawie do 2 000+ nieruchomości w całej Polsce.</p>
<div className="mt-3" id="bio-andrzej" style={{display: 'none'}}>
<p className="text-sm text-[#444] leading-relaxed">Urodzony lider i wizjoner z udokumentowaną historią w budowaniu firm świadczących najwyższej jakości usługi. Doświadczony przedsiębiorca od lat łączący Internet z branżą nieruchomości w Polsce i Stanach Zjednoczonych, finalista konkursu Ernst &amp; Young na przedsiębiorcę roku. Budowane przez niego firmy wyróżniają solidne fundamenty oparte o nowoczesne technologie.</p>
</div>
<button className="text-xs text-[#00c4c0] font-medium mt-3 hover:underline focus:outline-none" onclick="var b=document.getElementById('bio-andrzej');var t=this;if(b.style.display==='none'){b.style.display='block';t.textContent='Zwiń ↑';}else{b.style.display='none';t.textContent='Czytaj więcej ↓';}">Czytaj więcej ↓</button>
</div>
</div>
<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="aspect-[4/3]"><img alt="Artur Stecki" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774719931/ChatGPT_Image_28_mar_2026_18_45_19_joejzj.png" style={{objectPosition: 'center 20%'}}/></div>
<div className="p-6">
<h3 className="text-lg font-semibold text-[#0f0f0f] mb-1">Artur Stecki</h3>
<p className="text-sm text-[#00c4c0] font-medium mb-3">CTO</p>
<p className="text-sm text-[#222222] leading-relaxed">Architekt rozwiązań software'owych z długoletnim doświadczeniem. Odpowiada za technologię i rozwój produktu.</p>
<div className="mt-3" id="bio-artur" style={{display: 'none'}}>
<p className="text-sm text-[#444] leading-relaxed">W BookingHost odpowiedzialny za utrzymanie i ciągły rozwój naszych nowatorskich technologii. Architekt rozwiązań z długoletnim praktycznym doświadczeniem w rozwoju i wdrażaniu rozwiązań software'owych. Przez lata budował dedykowane rozwiązania dla branży e-commerce oraz start-upów, wykorzystując różne technologie i języki programowania.</p>
</div>
<button className="text-xs text-[#00c4c0] font-medium mt-3 hover:underline focus:outline-none" onclick="var b=document.getElementById('bio-artur');var t=this;if(b.style.display==='none'){b.style.display='block';t.textContent='Zwiń ↑';}else{b.style.display='none';t.textContent='Czytaj więcej ↓';}">Czytaj więcej ↓</button>
</div>
</div>
<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="aspect-[4/3]"><img alt="Piotr Haman" className="w-full h-full object-cover" src="https://res.cloudinary.com/depa0audz/image/upload/v1774717927/WhatsApp_Image_2026-03-25_at_16.33.18_1_ve2o2a.jpg" style={{objectPosition: 'center top'}}/></div>
<div className="p-6">
<h3 className="text-lg font-semibold text-[#0f0f0f] mb-1">Piotr Haman</h3>
<p className="text-sm text-[#00c4c0] font-medium mb-3">COO</p>
<p className="text-sm text-[#222222] leading-relaxed">Kierownik operacyjny z bogatym doświadczeniem w zarządzaniu procesami biznesowymi i operacyjnymi.</p>
<div className="mt-3" id="bio-piotr" style={{display: 'none'}}>
<p className="text-sm text-[#444] leading-relaxed">Skupiony na efektywności, jakości usług oraz rozwoju zespołów. W codziennej pracy łączy strategiczne podejście z praktycznym zarządzaniem operacjami, dbając o płynność procesów i najwyższy standard obsługi klientów.</p>
</div>
<button className="text-xs text-[#00c4c0] font-medium mt-3 hover:underline focus:outline-none" onclick="var b=document.getElementById('bio-piotr');var t=this;if(b.style.display==='none'){b.style.display='block';t.textContent='Zwiń ↑';}else{b.style.display='none';t.textContent='Czytaj więcej ↓';}">Czytaj więcej ↓</button>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 bg-[#f8f8f8]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Historia</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Oś czasu</h2>
</div>
<div className="overflow-x-auto">
<svg style={{width: '100%', minWidth: '700px', fontFamily: 'Inter,sans-serif', fontSize: '13px'}} viewbox="0 0 900 260" xmlns="http://www.w3.org/2000/svg">

<line stroke="#00c4c0" strokeWidth="3.5" x1="20" x2="880" y1="130" y2="130"></line>

<line stroke="#cccccc" strokeWidth="1.5" x1="80" x2="80" y1="124" y2="80"></line>
<text fill="#555" fontSize="12" text-anchor="middle" x="80" y="65">Pierwsze własne</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="80" y="80">apartamenty</text>
<circle cx="80" cy="130" fill="white" r="7" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="80" y="158">2012</text>

<line stroke="#cccccc" strokeWidth="1.5" x1="220" x2="220" y1="137" y2="175"></line>
<circle cx="220" cy="130" fill="white" r="7" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="220" y="108">2017</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="220" y="190">Pomysł na zarządzanie</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="220" y="205">dla innych właścicieli</text>

<line stroke="#cccccc" strokeWidth="1.5" x1="360" x2="360" y1="124" y2="80"></line>
<text fill="#333" fontSize="12" font-weight="600" text-anchor="middle" x="360" y="65">Założenie</text>
<text fill="#333" fontSize="12" font-weight="600" text-anchor="middle" x="360" y="80">BookingHost</text>
<circle cx="360" cy="130" fill="#00c4c0" r="8" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="360" y="158">2018</text>

<line stroke="#cccccc" strokeWidth="1.5" x1="490" x2="490" y1="137" y2="175"></line>
<circle cx="490" cy="130" fill="white" r="7" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="490" y="108">2019</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="490" y="190">Pierwsze umowy</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="490" y="205">z właścicielami</text>

<line stroke="#cccccc" strokeWidth="1.5" x1="620" x2="620" y1="124" y2="70"></line>
<text fill="#555" fontSize="12" text-anchor="middle" x="620" y="42">Dynamiczny wzrost</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="620" y="56">20+ apartamentów</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="620" y="70">miesięcznie</text>
<circle cx="620" cy="130" fill="white" r="7" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="620" y="158">2020</text>

<line stroke="#cccccc" strokeWidth="1.5" x1="740" x2="740" y1="137" y2="175"></line>
<circle cx="740" cy="130" fill="white" r="7" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="740" y="108">2021</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="740" y="190">Własny algorytm AI</text>
<text fill="#555" fontSize="12" text-anchor="middle" x="740" y="205">i Panel Właściciela</text>

<line stroke="#cccccc" strokeWidth="1.5" x1="860" x2="860" y1="124" y2="70"></line>
<text fill="#333" fontSize="12" font-weight="600" text-anchor="middle" x="860" y="42">2 000+</text>
<text fill="#333" fontSize="12" font-weight="600" text-anchor="middle" x="860" y="56">nieruchomości</text>
<text fill="#333" fontSize="12" font-weight="600" text-anchor="middle" x="860" y="70">w obsłudze</text>
<circle cx="860" cy="130" fill="#00c4c0" r="8" stroke="#00c4c0" strokeWidth="2.5"></circle>
<text fill="#00c4c0" fontSize="14" font-weight="700" text-anchor="middle" x="860" y="158">2026</text>
</svg>
</div>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<span style={{fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '.15em', color: '#00c4c0', display: 'block', marginBottom: '12px'}}>Zaufanie</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">1 800+ właścicieli nam zaufało</h2>
<p className="text-[#444]">Oto co mówią o współpracy z BookingHost</p>
</div>
<div style={{overflow: 'hidden'}}>
<div id="onas-rev-track" style={{display: 'flex', gap: '20px', transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 14px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', marginBottom: '12px', fontSize: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222] leading-relaxed mb-5 italic">Z czystym sercem polecam. Robią wszystko — ja nic nie muszę.</p>
<div className="flex items-center gap-3"><div style={{width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0'}}><img src="https://res.cloudinary.com/depa0audz/image/upload/v1774438828/ChatGPT_Image_25_mar_2026_12_40_08_ppvt5s.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div><div><p className="text-xs font-semibold text-[#0f0f0f]">Judyta K.</p><p className="text-xs text-[#888]">Właścicielka · Warszawa · od 2019</p></div></div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 14px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', marginBottom: '12px', fontSize: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222] leading-relaxed mb-5 italic">Spokojnie sypiam, a przelew przychodzi co miesiąc.</p>
<div className="flex items-center gap-3"><div style={{width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0'}}><img src="https://res.cloudinary.com/depa0audz/image/upload/v1774438854/ChatGPT_Image_25_mar_2026_12_40_46_s9hvjf.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div><div><p className="text-xs font-semibold text-[#0f0f0f]">Karol W.</p><p className="text-xs text-[#888]">Właściciel · Kraków · od 2020</p></div></div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 14px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', marginBottom: '12px', fontSize: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222] leading-relaxed mb-5 italic">Nie spodziewałam się że to takie proste. Wszystkim się zajmują.</p>
<div className="flex items-center gap-3"><div style={{width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0'}}><img src="https://res.cloudinary.com/depa0audz/image/upload/v1774438916/ChatGPT_Image_25_mar_2026_12_41_43_jbk7kt.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div><div><p className="text-xs font-semibold text-[#0f0f0f]">Anna W.</p><p className="text-xs text-[#888]">Właścicielka · Warszawa · od 2022</p></div></div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 14px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', marginBottom: '12px', fontSize: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222] leading-relaxed mb-5 italic">Oddałem mieszkanie i zapomniałem o problemach.</p>
<div className="flex items-center gap-3"><div style={{width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0'}}><img src="https://res.cloudinary.com/depa0audz/image/upload/v1774438882/ChatGPT_Image_25_mar_2026_12_41_11_tksnsv.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div><div><p className="text-xs font-semibold text-[#0f0f0f]">Marek T.</p><p className="text-xs text-[#888]">Właściciel 3 apt. · Gdańsk · od 2021</p></div></div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 14px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', marginBottom: '12px', fontSize: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222] leading-relaxed mb-5 italic">Polecam każdemu kto ma mieszkanie i nie chce się tym zajmować.</p>
<div className="flex items-center gap-3"><div style={{width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0'}}><img src="https://res.cloudinary.com/depa0audz/image/upload/v1774438941/ChatGPT_Image_25_mar_2026_12_42_13_e34kox.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div><div><p className="text-xs font-semibold text-[#0f0f0f]">Piotr K.</p><p className="text-xs text-[#888]">Właściciel · Wrocław · od 2021</p></div></div>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#ebebeb]" style={{flex: '0 0 calc(33.333% - 14px)', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px'}}>
<div style={{color: '#f59e0b', marginBottom: '12px', fontSize: '16px'}}>★★★★★</div>
<p className="text-sm text-[#222] leading-relaxed mb-5 italic">Nareszcie ktoś kto dotrzymuje słowa. Polecam.</p>
<div className="flex items-center gap-3"><div style={{width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: '0'}}><img src="https://res.cloudinary.com/depa0audz/image/upload/v1774438973/ChatGPT_Image_25_mar_2026_12_42_40_nbetsz.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/></div><div><p className="text-xs font-semibold text-[#0f0f0f]">Emil K.</p><p className="text-xs text-[#888]">Właściciel · Poznań · od 2023</p></div></div>
</div>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '32px'}}>
<button onclick="onasRevSlide(-1)" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ebebeb', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>
<span id="onas-rev-dots" style={{display: 'flex', gap: '8px'}}>
<span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0'}}></span>
<span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#ebebeb'}}></span>
</span>
<button onclick="onasRevSlide(1)" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ebebeb', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>
</section>

<section className="py-20 bg-[#f8f8f8]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<span style={{fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '.15em', color: '#00c4c0', display: 'block', marginBottom: '12px'}}>Media o nas</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Piszą o BookingHost</h2>
</div>
<div style={{overflow: 'hidden'}}>
<div id="onas-med-track" style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px'}}>
<a className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-md transition-shadow block" href="https://www.rp.pl/nieruchomosci/art41413341-najem-krotkoterminowy-promil-rynku-do-uporzadkowania" style={{textDecoration: 'none'}} target="_blank">
<div style={{height: '120px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', borderBottom: '1px solid #ebebeb'}}>
<img alt="Rzeczpospolita" src="https://res.cloudinary.com/depa0audz/image/upload/v1774721580/Rz_logo_big_txt_v1_isfric.svg" style={{maxHeight: '60px', maxWidth: '100%', objectFit: 'contain'}}/>
</div>
<div style={{padding: '20px'}}><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#0f0f0f'}}>Rzeczpospolita</span><span style={{fontSize: '11px', color: '#888'}}>Listopad 2024</span></div><p style={{fontSize: '12px', color: '#444', lineHeight: '1.6'}}>Andrzej Stecki, prezes BookingHost, komentuje regulacje najmu krótkoterminowego i jego wpływ na rynek nieruchomości w Polsce.</p></div>
</a>
<a className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-md transition-shadow block" href="https://www.pb.pl/bookinghost-nabiera-rozpedu-1221824" style={{textDecoration: 'none'}} target="_blank">
<div style={{height: '120px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', borderBottom: '1px solid #ebebeb'}}>
<img alt="Puls Biznesu" src="https://res.cloudinary.com/depa0audz/image/upload/v1774721736/s-225-x_qtki0i.webp" style={{maxHeight: '80px', maxWidth: '100%', objectFit: 'contain'}}/>
</div>
<div style={{padding: '20px'}}><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#0f0f0f'}}>Puls Biznesu</span><span style={{fontSize: '11px', color: '#888'}}>Październik 2024</span></div><p style={{fontSize: '12px', color: '#444', lineHeight: '1.6'}}>Andrzej Stecki komentuje zarobki z najmu krótkoterminowego – nawet do 30 tys. zł miesięcznie w szczycie sezonu.</p></div>
</a>
<a className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-md transition-shadow block" href="https://www.money.pl/firma/wiadomosci/masz-mieszkania-pod-bookingcom-i-airbnb-ale-nie-masz-kiedy-nimi-zarzadzac-oni-zrobia-to-za-ciebie-6466255346976385a.html" style={{textDecoration: 'none'}} target="_blank">
<div style={{height: '120px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'}}>
<img alt="Money.pl" src="https://res.cloudinary.com/depa0audz/image/upload/v1774721886/bmV5LnN2TQw3VzpdYUlAGXQPbg0-Wj0AOVspF3wQTk8jF3ZMYVYLHiIaPxovRgsOeVgjACtLTB4gUm4T_toit32.svg" style={{maxHeight: '80px', maxWidth: '100%', objectFit: 'contain'}}/>
</div>
<div style={{padding: '20px'}}><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#0f0f0f'}}>Money.pl</span><span style={{fontSize: '11px', color: '#888'}}>Styczeń 2020</span></div><p style={{fontSize: '12px', color: '#444', lineHeight: '1.6'}}>„Masz mieszkania pod Booking.com i Airbnb, ale nie masz kiedy nimi zarządzać? Oni zrobią to za ciebie."</p></div>
</a>
<a className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-md transition-shadow block" href="https://www.isbtech.pl/2023/07/bookinghost-wchodzi-na-kolejne-rynki-w-polsce/" style={{textDecoration: 'none'}} target="_blank">
<div style={{height: '120px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', borderBottom: '1px solid #ebebeb'}}>
<img alt="ISBtech.pl" src="https://res.cloudinary.com/depa0audz/image/upload/v1774722182/ISBtech_logo_ihj4kb.webp" style={{maxHeight: '80px', maxWidth: '100%', objectFit: 'contain'}}/>
</div>
<div style={{padding: '20px'}}><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#0f0f0f'}}>ISBtech.pl</span><span style={{fontSize: '11px', color: '#888'}}>Lipiec 2023</span></div><p style={{fontSize: '12px', color: '#444', lineHeight: '1.6'}}>„BookingHost wchodzi na kolejne rynki w Polsce" – o ekspansji i własnych rozwiązaniach AI.</p></div>
</a>
<a className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-md transition-shadow block" href="https://biznes.interia.pl/gospodarka/news-malo-mieszkan-wysokie-ceny-samorzadowcy-znalezli-winnego-ape,nId,7877898" style={{textDecoration: 'none'}} target="_blank">
<div style={{height: '120px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', borderBottom: '1px solid #ebebeb'}}>
<img alt="Interia Biznes" src="https://res.cloudinary.com/depa0audz/image/upload/v1774722270/Zrzut_ekranu_2026-03-28_o_19.24.21_j77vxv.png" style={{maxHeight: '80px', maxWidth: '100%', objectFit: 'contain'}}/>
</div>
<div style={{padding: '20px'}}><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#0f0f0f'}}>Interia Biznes</span><span style={{fontSize: '11px', color: '#888'}}>Grudzień 2024</span></div><p style={{fontSize: '12px', color: '#444', lineHeight: '1.6'}}>Prezes BookingHost komentuje wpływ najmu krótkoterminowego na ceny mieszkań i rynek nieruchomości.</p></div>
</a>
<a className="bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-md transition-shadow block" href="https://investmap.pl/bookinghost-otwiera-dzialalnosc-w-kolejnych-polskich-miastach.a304843" style={{textDecoration: 'none'}} target="_blank">
<div style={{height: '120px', background: '#292929', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px'}}>
<img alt="Investmap.pl" src="https://res.cloudinary.com/depa0audz/image/upload/v1774722363/Zrzut_ekranu_2026-03-28_o_19.25.54_axow9p.png" style={{maxHeight: '80px', maxWidth: '100%', objectFit: 'contain'}}/>
</div>
<div style={{padding: '20px'}}><div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}><span style={{fontSize: '14px', fontWeight: '700', color: '#0f0f0f'}}>Investmap.pl</span><span style={{fontSize: '11px', color: '#888'}}>Lipiec 2023</span></div><p style={{fontSize: '12px', color: '#444', lineHeight: '1.6'}}>Artykuł o ekspansji BookingHost i potencjale rynku najmu krótkoterminowego w Polsce po pandemii.</p></div>
</a>
</div>
</div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '32px'}}>
<button onclick="onasMedSlide(-1)" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ebebeb', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="15 18 9 12 15 6"></polyline></svg>
</button>
<span id="onas-med-dots" style={{display: 'flex', gap: '8px'}}>
<span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0'}}></span>
<span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#ebebeb'}}></span>
</span>
<button onclick="onasMedSlide(1)" style={{width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ebebeb', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#444'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Dołącz do ponad 2 000 właścicieli</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('kontakt');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>



<div className="page" id="pg-blog">
<div className="bg-[#f8f8f8] border-b border-[#ebebeb] py-16">
<div className="max-w-7xl mx-auto px-6">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Blog</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Wiedza o najmie krótkoterminowym</h1>
<p className="text-lg text-[#222222]">Porady, analizy rynku i case studies dla właścicieli mieszkań.</p>
</div>
</div>
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex gap-2 flex-wrap mb-10">
<button className="blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#00c4c0] text-white" onclick="filterBlog('all',this)">Wszystkie</button>
<button className="blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#f8f8f8] text-[#222222] hover:bg-[#ebebeb] border border-[#ebebeb] transition-colors" onclick="filterBlog('porady',this)">Porady</button>
<button className="blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#f8f8f8] text-[#222222] hover:bg-[#ebebeb] border border-[#ebebeb] transition-colors" onclick="filterBlog('rynek',this)">Rynek</button>
<button className="blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#f8f8f8] text-[#222222] hover:bg-[#ebebeb] border border-[#ebebeb] transition-colors" onclick="filterBlog('technologia',this)">Technologia</button>
<button className="blog-filter-btn px-4 py-2 rounded-full text-sm font-medium bg-[#f8f8f8] text-[#222222] hover:bg-[#ebebeb] border border-[#ebebeb] transition-colors" onclick="filterBlog('casestudy2',this)">Case study</button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" id="blog-grid">
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="porady"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Porady</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Najem krótkoterminowy poza sezonem – jak budować stabilne rezerwacje przez cały rok?</h3><p className="text-xs text-[#444444]">Marzec 2025</p></div></div>
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="rynek"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Rynek</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Workation i dłuższe pobyty – nowy typ gościa w najmie krótkoterminowym</h3><p className="text-xs text-[#444444]">Luty 2025</p></div></div>
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="porady"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Porady</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Jak stworzyć apartament, do którego goście chcą wracać?</h3><p className="text-xs text-[#444444]">Styczeń 2025</p></div></div>
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="porady"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Porady</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Apartament premium vs budżetowy – różne strategie wynajmu</h3><p className="text-xs text-[#444444]">Grudzień 2024</p></div></div>
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="technologia"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Technologia</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Jak algorytmy AI zmieniają zarządzanie ceną w najmie krótkoterminowym</h3><p className="text-xs text-[#444444]">Listopad 2024</p></div></div>
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="rynek"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Rynek</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Nowe regulacje najmu krótkoterminowego w Polsce 2026 – co musisz wiedzieć?</h3><p className="text-xs text-[#444444]">Październik 2024</p></div></div>
<div className="blog-card bg-white border border-[#ebebeb] rounded-2xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer" data-cat="technologia"><div className="aspect-[16/9]"><img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&amp;q=80"/></div><div className="p-6"><span className="text-xs font-medium text-[#00c4c0] uppercase tracking-wide">Technologia</span><h3 className="text-base font-semibold text-[#0f0f0f] mt-2 mb-2 leading-snug">Smart home w apartamencie na wynajem – co warto wdrożyć?</h3><p className="text-xs text-[#444444]">Wrzesień 2024</p></div></div>
</div>
</div>
</section>
</div>



<div className="page" id="pg-faq">
<div className="bg-[#f8f8f8] border-b border-[#ebebeb] py-16">
<div className="max-w-7xl mx-auto px-6">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">FAQ</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] mb-6">Często zadawane pytania</h1>
<input className="w-full max-w-md bg-white border border-[#ebebeb] rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#00c4c0] focus:ring-1 focus:ring-[#00c4c0]" oninput="searchFaq(this.value)" placeholder="Szukaj pytania..." type="text"/>
</div>
</div>
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[200px_1fr] gap-12">

<div className="flex flex-col gap-2">
<button className="faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium bg-[#00c4c0] text-white transition-all" onclick="filterFaq2('all',this)">Wszystkie</button>
<button className="faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#222222] hover:bg-[#f8f8f8] transition-all" onclick="filterFaq2('wspolpraca',this)">Współpraca i umowa</button>
<button className="faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#222222] hover:bg-[#f8f8f8] transition-all" onclick="filterFaq2('zarobki',this)">Zarobki i rozliczenia</button>
<button className="faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#222222] hover:bg-[#f8f8f8] transition-all" onclick="filterFaq2('obsluga',this)">Obsługa i sprzątanie</button>
<button className="faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#222222] hover:bg-[#f8f8f8] transition-all" onclick="filterFaq2('technologia',this)">Technologia i panel</button>
<button className="faq-cat text-left px-4 py-2.5 rounded-xl text-sm font-medium text-[#222222] hover:bg-[#f8f8f8] transition-all" onclick="filterFaq2('bezpieczenstwo',this)">Bezpieczeństwo</button>
</div>

<div className="space-y-3" id="faq-list">
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="wspolpraca"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Co dokładnie zapewnia BookingHost?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">BookingHost zapewnia kompleksową obsługę Twojego apartamentu: marketing i publikację na wszystkich głównych portalach (Booking.com, Airbnb, Expedia, VRBO), obsługę gości 24/7 w 7 językach, check-in i check-out, profesjonalne sprzątanie i pranie po każdej rezerwacji, zarządzanie usterkami, comiesięczne rozliczenie i Panel Właściciela online.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="wspolpraca"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Na jaki okres jest podpisywana umowa?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Umowa podpisywana jest na czas nieokreślony, jednak nie krótszy niż 4 pełne miesiące kalendarzowe z jednomiesięcznym okresem wypowiedzenia. Nie jesteś związany wieloletnią umową – jeśli nie będziesz zadowolony z wyników, możesz zakończyć współpracę z jednomiesięcznym wypowiedzeniem.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="wspolpraca"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Jak szybko mogę być online?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Od podpisania umowy do pierwszej publikacji zazwyczaj 1–2 tygodnie. W tym czasie organizujemy sesję zdjęciową, przygotowujemy opisy w kilku językach i publikujemy ofertę na wszystkich portalach. W pilnych przypadkach możemy uruchomić apartament w 5–7 dni.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="wspolpraca"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Czy przejmiecie moje istniejące rezerwacje?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Tak, w momencie przejęcia zarządzania przejmujemy wszystkie istniejące rezerwacje. Goście nie odczują żadnej zmiany w obsłudze – wszystko dzieje się płynnie i transparentnie.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="wspolpraca"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Co muszę zapewnić ze swojej strony?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Nasz zespół odwiedzi mieszkanie, oceni jego stan i wyda szczegółowe rekomendacje dotyczące przygotowania. Najczęściej chodzi o podstawowe wyposażenie, odpowiednie oświetlenie i drobne porządki. Dostarczymy Ci przejrzyste wytyczne w formie elektronicznej.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="zarobki"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Ile kosztuje zarządzanie i jak wyliczana jest prowizja?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Pobieramy 20% od każdej zrealizowanej rezerwacji. Brak stałych miesięcznych opłat i brak opłat wstępnych – płacisz tylko gdy zarabiasz. Prowizja naliczana jest od przychodu brutto z rezerwacji.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="zarobki"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Kiedy i jak otrzymam wypłatę?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Rozliczenia odbywają się miesięcznie. Na początku każdego miesiąca otrzymujesz szczegółowe zestawienie rezerwacji z poprzedniego miesiąca oraz przelew na Twoje konto. Wszystkie rozliczenia i faktury są dostępne w Panelu Właściciela.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="zarobki"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>W jaki sposób ustalane są ceny? Ile zarobię?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Ceny aktualizowane są automatycznie przez nasz algorytm AI uwzględniający: dzień tygodnia, sezonowość, obłożenie w okolicy, lokalne wydarzenia i dziesiątki innych zmiennych. Efekt to średnio 37% wyższe przychody niż przy stałej cenie. Bezpłatna wycena pokaże Ci konkretną prognozę dla Twojego mieszkania.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="obsluga"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Co jest wliczone w usługę sprzątania?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Po każdej rezerwacji nasz zespół wykonuje: pranie ręczników i pościeli, kompleksowe sprzątanie, kontrolę stanu urządzeń. Uzupełniamy też środki czystości, papier toaletowy, worki na śmieci oraz zestaw kosmetyków (szampon, żel, mydełka) i podstawowe produkty powitalne.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="obsluga"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Na jakich portalach będzie widoczna moja oferta?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Publikujemy na wszystkich największych portalach: Booking.com, Airbnb, Expedia, VRBO i Google. Kalendarze synchronizowane są w czasie rzeczywistym – zero ryzyka podwójnych rezerwacji.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="technologia"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Gdzie mogę kontrolować swoje rezerwacje?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Wszystkie rezerwacje z każdego portalu widoczne są w Panelu Właściciela dostępnym na panel.bookinghost.com. Znajdziesz tam też comiesięczne rozliczenia, statystyki, faktury i możliwość blokowania własnych terminów. Panel działa na telefonie i komputerze.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="technologia"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Czy zapewniacie profesjonalną sesję zdjęciową?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Tak. Rozumiemy, że zdjęcia mają kluczowe znaczenie dla rezerwacji. Nasz fotograf wnętrz przeprowadzi profesjonalną sesję zdjęciową Twojego apartamentu. Koszt sesji wliczony jest w usługę.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="bezpieczenstwo"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Co jeśli gość uszkodzi mieszkanie?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Wszystkie rezerwacje objęte są kaucją gościa pobieraną przez portale rezerwacyjne. W przypadku szkód natychmiast uruchamiamy procedurę reklamacyjną i pomagamy odzyskać koszty naprawy. Statystycznie tylko 0,2% rezerwacji kończy się jakąkolwiek szkodą – i są to zazwyczaj drobne usterki.</div></div>
<div className="faq-item border border-[#ebebeb] rounded-2xl overflow-hidden" data-cat="bezpieczenstwo"><button className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-semibold text-[#0f0f0f] hover:bg-[#f8f8f8] transition-colors" onclick="toggleFaq(this)"><span>Czy mogę sam korzystać z apartamentu?</span><svg className="flex-shrink-0 transition-transform" fill="none" height="18" stroke="#4a4a4a" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="18"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div className="faq-answer px-6 pb-5 text-sm text-[#222222] leading-relaxed">Tak. Poprzez Panel Właściciela możesz w każdej chwili zablokować wybrane terminy dla siebie lub bliskich. Własne pobyty są bezpłatne i nieograniczone – wystarczy zarezerwować termin z odpowiednim wyprzedzeniem.</div></div>
</div>
</div>
</section>
<div className="bg-[#f8f8f8] border-t border-[#ebebeb] py-16 text-center">
<div className="max-w-xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Masz więcej pytań?</h2>
<p className="text-[#222222] mb-6">Skontaktuj się z nami – odpowiemy w ciągu 2 godzin</p>
<div className="flex gap-3 justify-center flex-wrap">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-medium py-3 px-6 rounded-full transition-all text-sm" href="#" onclick="showPage('kontakt');return false;">Wyślij zapytanie</a>
<a className="bg-white border border-[#ebebeb] text-[#0f0f0f] font-medium py-3 px-6 rounded-full transition-all text-sm hover:bg-[#f8f8f8]" href="tel:221131400">22 113 14 00</a>
</div>
</div>
</div>
</div>



<div className="page" id="pg-kontakt">
<div className="bg-[#f8f8f8] border-b border-[#ebebeb] py-16">
<div className="max-w-7xl mx-auto px-6">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Kontakt</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] mb-6">Porozmawiajmy o Twoim mieszkaniu</h1>
<div className="flex flex-wrap gap-4 mt-8">
<div className="flex items-center gap-3 bg-white border border-[#ebebeb] rounded-2xl px-5 py-4"><svg fill="#f59e0b" height="18" viewbox="0 0 24 24" width="18"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><div><p className="text-xs text-[#222222]">Ocena właścicieli</p><p className="text-sm font-semibold text-[#0f0f0f]">4.8/5</p></div></div>
<div className="flex items-center gap-3 bg-white border border-[#ebebeb] rounded-2xl px-5 py-4"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><div><p className="text-xs text-[#222222]">Czas odpowiedzi</p><p className="text-sm font-semibold text-[#0f0f0f]">Oddzwaniamy w 2h</p></div></div>
<div className="flex items-center gap-3 bg-white border border-[#ebebeb] rounded-2xl px-5 py-4"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg><div><p className="text-xs text-[#222222]">Apartamentów</p><p className="text-sm font-semibold text-[#0f0f0f]">2 000+</p></div></div>
<div className="flex items-center gap-3 bg-white border border-[#ebebeb] rounded-2xl px-5 py-4"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg><div><p className="text-xs text-[#222222]">Miast</p><p className="text-sm font-semibold text-[#0f0f0f]">15</p></div></div>
</div>
</div>
</div>
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-[#0f0f0f] mb-6">Jak chcesz się z nami skontaktować?</h2>
<div className="flex gap-2 mb-8 flex-wrap">
<button className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#00c4c0] text-white transition-all" id="tab-wlasciciel" onclick="switchContact('wlasciciel',this)">Właściciel</button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#f8f8f8] border border-[#ebebeb] text-[#222222] hover:bg-[#ebebeb] transition-all" id="tab-gosc" onclick="switchContact('gosc',this)">Gość</button>
<button className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#f8f8f8] border border-[#ebebeb] text-[#222222] hover:bg-[#ebebeb] transition-all" id="tab-deweloper" onclick="switchContact('deweloper',this)">Deweloper</button>
</div>
<div id="contact-wlasciciel">
<p className="text-sm text-[#222222] mb-5">Zadzwoń lub wypełnij formularz – oddzwonimy w ciągu 2 godzin.</p>
<a className="flex items-center gap-4 bg-[#f8f8f8] border border-[#ebebeb] rounded-2xl px-6 py-4 mb-3 hover:border-[#00c4c0] transition-colors" href="tel:221131400">
<div className="w-10 h-10 rounded-full bg-[#f0fcfb] flex items-center justify-center flex-shrink-0"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg></div>
<div><p className="text-xs text-[#222222]">Telefon dla właścicieli · Pon–Pt 8:00–18:00, Sob 9:00–15:00</p><p className="text-base font-semibold text-[#0f0f0f]">22 113 14 00</p></div>
</a>
<a className="flex items-center gap-4 bg-[#f8f8f8] border border-[#ebebeb] rounded-2xl px-6 py-4 hover:border-[#00c4c0] transition-colors" href="/cdn-cgi/l/email-protection#6801060e07280a07070301060f00071b1c460b0705">
<div className="w-10 h-10 rounded-full bg-[#f0fcfb] flex items-center justify-center flex-shrink-0"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
<div><p className="text-xs text-[#222222]">E-mail</p><p className="text-base font-semibold text-[#0f0f0f]"><span className="__cf_email__" data-cfemail="a4cdcac2cbe4c6cbcbcfcdcac3cccbd7d08ac7cbc9">[email protected]</span></p></div>
</a>
</div>
<div className="hidden" id="contact-gosc">
<p className="text-sm text-[#222222] mb-5">Masz pytanie dotyczące rezerwacji lub pobytu? Nasz zespół jest dostępny 24/7.</p>
<a className="flex items-center gap-4 bg-[#f8f8f8] border border-[#ebebeb] rounded-2xl px-6 py-4 hover:border-[#00c4c0] transition-colors" href="tel:221131414">
<div className="w-10 h-10 rounded-full bg-[#f0fcfb] flex items-center justify-center flex-shrink-0"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg></div>
<div><p className="text-xs text-[#222222]">Telefon dla gości · 24/7</p><p className="text-base font-semibold text-[#0f0f0f]">22 113 14 14</p></div>
</a>
</div>
<div className="hidden" id="contact-deweloper">
<p className="text-sm text-[#222222] mb-5">Pomagamy deweloperom sprzedawać szybciej i budować oferty inwestycyjne. Napisz do nas.</p>
<a className="flex items-center gap-4 bg-[#f8f8f8] border border-[#ebebeb] rounded-2xl px-6 py-4 hover:border-[#00c4c0] transition-colors" href="/cdn-cgi/l/email-protection#562637242238332425163439393d3f38313e3925227835393b">
<div className="w-10 h-10 rounded-full bg-[#f0fcfb] flex items-center justify-center flex-shrink-0"><svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
<div><p className="text-xs text-[#222222]">E-mail dla deweloperów</p><p className="text-base font-semibold text-[#0f0f0f]"><span className="__cf_email__" data-cfemail="98e8f9eaecf6fdeaebd8faf7f7f3f1f6fff0f7ebecb6fbf7f5">[email protected]</span></p></div>
</a>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-[#0f0f0f] mb-1">Napisz do nas</h3>
<p className="text-sm text-[#222222] mb-7">Oddzwonimy w ciągu 2 godzin w dni robocze</p>
<div className="space-y-4">
<div><label className="block text-xs font-medium text-[#1a1a1a] mb-1.5">E-mail *</label><input className="w-full bg-[#f8f8f8] border border-[#ebebeb] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c4c0] focus:ring-1 focus:ring-[#00c4c0]" placeholder="jan@email.pl" type="email"/></div>
<div><label className="block text-xs font-medium text-[#1a1a1a] mb-1.5">Adres nieruchomości</label><input className="w-full bg-[#f8f8f8] border border-[#ebebeb] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c4c0] focus:ring-1 focus:ring-[#00c4c0]" placeholder="np. ul. Złota 44, Warszawa" type="text"/></div>
<div>
<label className="block text-xs font-medium text-[#1a1a1a] mb-2">Preferowana forma kontaktu</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 text-sm text-[#222222] cursor-pointer"><input checked="" className="accent-[#00c4c0]" name="contact_pref" type="radio"/> Telefon</label>
<label className="flex items-center gap-2 text-sm text-[#222222] cursor-pointer"><input className="accent-[#00c4c0]" name="contact_pref" type="radio"/> E-mail</label>
</div>
</div>
<div><label className="block text-xs font-medium text-[#1a1a1a] mb-1.5">Wiadomość</label><textarea className="w-full bg-[#f8f8f8] border border-[#ebebeb] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c4c0] focus:ring-1 focus:ring-[#00c4c0] resize-none" placeholder="Opisz krótko czego szukasz..." rows="3"></textarea></div>
<button className="w-full bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-medium py-4 rounded-full transition-all text-sm" onclick="this.textContent='✓ Wysłano! Odezwiemy się wkrótce';this.style.background='#00b0ac';this.disabled=true;">Wyślij zapytanie – oddzwonimy w 2h</button>
</div>
</div>
</div>
</section>
</div>
<div className="page" id="pg-casestudy">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Realne wyniki</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Case studies –<br/>prawdziwe liczby</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Konkretne wyniki z mieszkań które zarządzamy. Żadnych teorii – tylko twarde dane przed i po.</p>
<div className="bg-[#f8f8f8] border border-[#ebebeb] rounded-xl p-5" style={{maxWidth: '480px'}}>
<p className="text-sm text-[#222222] leading-relaxed italic mb-3">„Oddałam mieszkanie BookingHost i od tego momentu przestałam się tym w ogóle zajmować. Wszystko działa samo."</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#00c4c0] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">MK</div>
<span className="text-xs text-[#444444]">Monika K. · właścicielka · Wrocław</span>
</div>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Apartament zarządzany przez BookingHost – case study" src="https://res.cloudinary.com/depa0audz/image/upload/v1774713499/ChatGPT_Image_28_mar_2026_16_58_10_h4pi83.png" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średni wzrost przychodów</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">aktywnych apartamentów</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">15</div>
<div className="text-sm text-[#444444]">miast w Polsce</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div>
<div className="text-sm text-[#444444]">średnia ocena gości</div>
</div>
</div>
</div>
</div>

<section style={{padding: '80px 0', background: '#fff'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>

<div style={{background: '#f8f8f8', border: '1px solid #ebebeb', borderRadius: '24px', overflow: 'hidden', marginBottom: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
<div style={{height: '100%', minHeight: '360px', overflow: 'hidden'}}>
<img alt="Apartament Warszawa Śródmieście case study" src="https://res.cloudinary.com/depa0audz/image/upload/v1774441786/ChatGPT_Image_25_mar_2026_13_29_32_hhc9hr.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '48px'}}>
<div style={{display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px'}}>Warszawa</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px'}}>42 m²</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px'}}>Studio</span>
</div>
<h2 style={{fontFamily: '\'Inter\',sans-serif', fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: '800', color: '#0f0f0f', marginBottom: '20px', lineHeight: '1.3'}}>Śródmieście Warszawa – wzrost o 28% w pierwszym kwartale</h2>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px'}}>
<div style={{background: '#fff', border: '1px solid #ebebeb', borderRadius: '12px', padding: '16px'}}>
<div style={{fontSize: '12px', color: '#4a4a4a', marginBottom: '4px'}}>Przed BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '22px', fontWeight: '800', color: '#4a4a4a', textDecoration: 'line-through'}}>3 600 zł/mies.</div>
</div>
<div style={{background: '#f0fcfb', border: '1.5px solid #00c4c0', borderRadius: '12px', padding: '16px'}}>
<div style={{fontSize: '12px', color: '#00c4c0', marginBottom: '4px'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '22px', fontWeight: '800', color: '#00c4c0'}}>4 600 zł/mies.</div>
</div>
</div>
<div style={{background: '#00c4c0', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', textAlign: 'center'}}>
<span style={{fontFamily: '\'Inter\',sans-serif', fontSize: '15px', fontWeight: '700', color: '#fff'}}>+1 000 zł więcej każdego miesiąca · +28% wzrost</span>
</div>
<p style={{fontSize: '14px', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '16px', fontStyle: 'italic'}}>"Przekazałam mieszkanie BookingHost i po prostu przestałam się tym przejmować. Raz w miesiącu sprawdzam przelew na koncie."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<div style={{width: '36px', height: '36px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '13px', color: '#00c4c0'}}>AK</div>
<div style={{fontSize: '13px', fontWeight: '600', color: '#0f0f0f'}}>Anna K. <span style={{color: '#4a4a4a', fontWeight: '400'}}>· właścicielka od 2023</span></div>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'inline-block', marginTop: '20px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '600', padding: '12px 24px', borderRadius: '50px', textDecoration: 'none'}}>
          Sprawdź swój zysk – bezpłatnie →
        </a>
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px'}}>
<div style={{border: '1px solid #ebebeb', borderRadius: '20px', overflow: 'hidden'}}>
<div style={{height: '180px', overflow: 'hidden'}}>
<img alt="Apartament Kraków Kazimierz" src="https://res.cloudinary.com/depa0audz/image/upload/v1774442203/ChatGPT_Image_25_mar_2026_13_36_34_deisjs.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '24px'}}>
<div style={{display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>Kraków</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>55 m²</span>
</div>
<h3 style={{fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.3'}}>Kazimierz, Kraków – sezonowość pod kontrolą</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '10px', marginBottom: '12px'}}>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#4a4a4a'}}>Przed</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '700', color: '#4a4a4a', textDecoration: 'line-through'}}>3 500 zł</div>
</div>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#00c4c0'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '800', color: '#00c4c0'}}>5 400 zł</div>
</div>
</div>
<div style={{textAlign: 'center', background: '#f0fcfb', borderRadius: '8px', padding: '8px', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '700', color: '#00c4c0', border: '1.5px solid #00c4c0'}}>+22% wzrost przychodów</div>
<p style={{fontSize: '13px', lineHeight: '1.6', color: '#1a1a1a', marginTop: '14px', fontStyle: 'italic'}}>"Miałem obawy czy to w ogóle zadziała, ale po pierwszym miesiącu byłem mile zaskoczony. Obsługa gości jest naprawdę sprawna."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
<div style={{width: '30px', height: '30px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '11px', color: '#00c4c0', flexShrink: '0'}}>TM</div>
<span style={{fontSize: '12px', color: '#4a4a4a'}}>właściciel · Kraków</span>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', marginTop: '14px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 16px', borderRadius: '50px', textDecoration: 'none', textAlign: 'center'}}>
            Sprawdź swój zysk →
          </a>
</div>
</div>
<div style={{border: '1px solid #ebebeb', borderRadius: '20px', overflow: 'hidden'}}>
<div style={{height: '180px', overflow: 'hidden'}}>
<img alt="Apartament Gdańsk Przymorze" src="https://res.cloudinary.com/depa0audz/image/upload/v1774439900/ChatGPT_Image_25_mar_2026_12_58_10_yya9xv.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '24px'}}>
<div style={{display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>Gdańsk</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>38 m²</span>
</div>
<h3 style={{fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.3'}}>Przymorze, Gdańsk – z najmu długiego na krótki</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '10px', marginBottom: '12px'}}>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#4a4a4a'}}>Przed</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '700', color: '#4a4a4a', textDecoration: 'line-through'}}>2 400 zł</div>
</div>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#00c4c0'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '800', color: '#00c4c0'}}>4 100 zł</div>
</div>
</div>
<div style={{textAlign: 'center', background: '#f0fcfb', borderRadius: '8px', padding: '8px', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '700', color: '#00c4c0', border: '1.5px solid #00c4c0'}}>+35% wzrost przychodów</div>
<p style={{fontSize: '13px', lineHeight: '1.6', color: '#1a1a1a', marginTop: '14px', fontStyle: 'italic'}}>"Najlepsza decyzja była taka żeby w ogóle nie zajmować się tym samemu. BookingHost przejął wszystko i spokojnie śpię."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
<div style={{width: '30px', height: '30px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '11px', color: '#00c4c0', flexShrink: '0'}}>PS</div>
<span style={{fontSize: '12px', color: '#4a4a4a'}}>właścicielka · Gdańsk</span>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', marginTop: '14px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 16px', borderRadius: '50px', textDecoration: 'none', textAlign: 'center'}}>
            Sprawdź swój zysk →
          </a>
</div>
</div>
<div style={{border: '1px solid #ebebeb', borderRadius: '20px', overflow: 'hidden'}}>
<div style={{height: '180px', overflow: 'hidden'}}>
<img alt="Apartament Wrocław Stare Miasto" src="https://res.cloudinary.com/depa0audz/image/upload/v1774441010/ChatGPT_Image_25_mar_2026_13_16_42_jiftj1.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '24px'}}>
<div style={{display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>Wrocław</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>48 m²</span>
</div>
<h3 style={{fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.3'}}>Stare Miasto, Wrocław – inwestor po raz pierwszy</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '10px', marginBottom: '12px'}}>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#4a4a4a'}}>Przed</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '700', color: '#4a4a4a', textDecoration: 'line-through'}}>3 000 zł</div>
</div>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#00c4c0'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '800', color: '#00c4c0'}}>4 350 zł</div>
</div>
</div>
<div style={{textAlign: 'center', background: '#f0fcfb', borderRadius: '8px', padding: '8px', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '700', color: '#00c4c0', border: '1.5px solid #00c4c0'}}>+45% wzrost przychodów</div>
<p style={{fontSize: '13px', lineHeight: '1.6', color: '#1a1a1a', marginTop: '14px', fontStyle: 'italic'}}>"Kupiłem mieszkanie pod inwestycję i od razu oddałem je BookingHost. Najlepsza decyzja finansowa w tym roku."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
<div style={{width: '30px', height: '30px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '11px', color: '#00c4c0', flexShrink: '0'}}>MK</div>
<span style={{fontSize: '12px', color: '#4a4a4a'}}>inwestor · Wrocław</span>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', marginTop: '14px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 16px', borderRadius: '50px', textDecoration: 'none', textAlign: 'center'}}>
            Sprawdź swój zysk →
          </a>
</div>
</div>
<div style={{border: '1px solid #ebebeb', borderRadius: '20px', overflow: 'hidden'}}>
<div style={{height: '180px', overflow: 'hidden'}}>
<img alt="Apartament Poznań centrum" src="https://res.cloudinary.com/depa0audz/image/upload/v1774441417/ChatGPT_Image_25_mar_2026_13_23_18_jnkrok.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '24px'}}>
<div style={{display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>Poznań</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>62 m²</span>
</div>
<h3 style={{fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.3'}}>Centrum Poznania – mieszkanie 3-pokojowe</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '10px', marginBottom: '12px'}}>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#4a4a4a'}}>Przed</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '700', color: '#4a4a4a', textDecoration: 'line-through'}}>4 200 zł</div>
</div>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#00c4c0'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '800', color: '#00c4c0'}}>5 900 zł</div>
</div>
</div>
<div style={{textAlign: 'center', background: '#f0fcfb', borderRadius: '8px', padding: '8px', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '700', color: '#00c4c0', border: '1.5px solid #00c4c0'}}>+18% wzrost przychodów</div>
<p style={{fontSize: '13px', lineHeight: '1.6', color: '#1a1a1a', marginTop: '14px', fontStyle: 'italic'}}>"Doceniam że mam jednego opiekuna z którym mogę porozmawiać. Nie muszę dzwonić na infolinię i tłumaczyć od nowa."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
<div style={{width: '30px', height: '30px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '11px', color: '#00c4c0', flexShrink: '0'}}>RB</div>
<span style={{fontSize: '12px', color: '#4a4a4a'}}>właściciel · Poznań</span>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', marginTop: '14px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 16px', borderRadius: '50px', textDecoration: 'none', textAlign: 'center'}}>
            Sprawdź swój zysk →
          </a>
</div>
</div>
<div style={{border: '1px solid #ebebeb', borderRadius: '20px', overflow: 'hidden'}}>
<div style={{height: '180px', overflow: 'hidden'}}>
<img alt="Apartament Katowice centrum" src="https://res.cloudinary.com/depa0audz/image/upload/v1774441575/ChatGPT_Image_25_mar_2026_13_26_06_saezbs.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '24px'}}>
<div style={{display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>Katowice</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>45 m²</span>
</div>
<h3 style={{fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.3'}}>Centrum, Katowice – apartament w centrum biznesowym</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '10px', marginBottom: '12px'}}>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#4a4a4a'}}>Przed</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '700', color: '#4a4a4a', textDecoration: 'line-through'}}>2 900 zł</div>
</div>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#00c4c0'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '800', color: '#00c4c0'}}>5 100 zł</div>
</div>
</div>
<div style={{textAlign: 'center', background: '#f0fcfb', borderRadius: '8px', padding: '8px', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '700', color: '#00c4c0', border: '1.5px solid #00c4c0'}}>+41% wzrost przychodów</div>
<p style={{fontSize: '13px', lineHeight: '1.6', color: '#1a1a1a', marginTop: '14px', fontStyle: 'italic'}}>"W miesiącach z targami i kongresami różnica w przychodach jest naprawdę widoczna. Warto było spróbować."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
<div style={{width: '30px', height: '30px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '11px', color: '#00c4c0', flexShrink: '0'}}>EW</div>
<span style={{fontSize: '12px', color: '#4a4a4a'}}>właścicielka · Katowice</span>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', marginTop: '14px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 16px', borderRadius: '50px', textDecoration: 'none', textAlign: 'center'}}>
            Sprawdź swój zysk →
          </a>
</div>
</div>
<div style={{border: '1px solid #ebebeb', borderRadius: '20px', overflow: 'hidden'}}>
<div style={{height: '180px', overflow: 'hidden'}}>
<img alt="Apartament Łódź inwestycja" src="https://res.cloudinary.com/depa0audz/image/upload/v1774441313/ChatGPT_Image_25_mar_2026_13_21_44_d4kmjp.png" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
</div>
<div style={{padding: '24px'}}>
<div style={{display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap'}}>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>Łódź</span>
<span style={{background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px'}}>33 m²</span>
</div>
<h3 style={{fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.3'}}>Śródmieście Łódź – właściciel z zagranicy</h3>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: '#f8f8f8', borderRadius: '10px', marginBottom: '12px'}}>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#4a4a4a'}}>Przed</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '700', color: '#4a4a4a', textDecoration: 'line-through'}}>1 800 zł</div>
</div>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20"><polyline points="9 18 15 12 9 6"></polyline></svg>
<div style={{textAlign: 'center'}}>
<div style={{fontSize: '11px', color: '#00c4c0'}}>Z BookingHost</div>
<div style={{fontFamily: '\'Inter\',sans-serif', fontSize: '18px', fontWeight: '800', color: '#00c4c0'}}>2 950 zł</div>
</div>
</div>
<div style={{textAlign: 'center', background: '#f0fcfb', borderRadius: '8px', padding: '8px', fontFamily: '\'Inter\',sans-serif', fontSize: '14px', fontWeight: '700', color: '#00c4c0', border: '1.5px solid #00c4c0'}}>+26% wzrost przychodów</div>
<p style={{fontSize: '13px', lineHeight: '1.6', color: '#1a1a1a', marginTop: '14px', fontStyle: 'italic'}}>"Mieszkam za granicą i nie mógłbym tego ogarnąć sam. Panel pokazuje mi wszystko — czuję że mam kontrolę."</p>
<div style={{display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px'}}>
<div style={{width: '30px', height: '30px', background: '#f0fcfb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '\'Inter\',sans-serif', fontWeight: '700', fontSize: '11px', color: '#00c4c0', flexShrink: '0'}}>JN</div>
<span style={{fontSize: '12px', color: '#4a4a4a'}}>właściciel · Łódź</span>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', marginTop: '14px', background: '#00c4c0', color: 'white', fontFamily: '\'Inter\',sans-serif', fontSize: '13px', fontWeight: '600', padding: '10px 16px', borderRadius: '50px', textDecoration: 'none', textAlign: 'center'}}>
            Sprawdź swój zysk →
          </a>
</div>
</div>
</div>
</div>
</section>

<section style={{background: 'linear-gradient(135deg, #1a2e35 0%, #2a6678 60%, #00c4c0 100%)', padding: '80px 0', textAlign: 'center'}}>
<div style={{maxWidth: '700px', margin: '0 auto', padding: '0 24px'}}>
<h2 style={{fontFamily: '\'Inter\',sans-serif', fontSize: 'clamp(28px,3.5vw,40px)', fontWeight: '800', color: '#fff', marginBottom: '16px'}}>Dołącz do 2 000 właścicieli i zarabiaj więcej</h2>
<p style={{fontSize: '18px', color: 'rgba(255,255,255,0.65)', marginBottom: '36px'}}>Sprawdź ile możesz zarobić – bezpłatna wycena w 24h, bez zobowiązań.</p>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap'}}>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00c4c0', color: '#fff', fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '700', padding: '16px 36px', borderRadius: '50px', textDecoration: 'none'}}>
        Sprawdź swój zysk – bezpłatnie
        <svg fill="none" height="18" stroke="white" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18"><polyline points="9 18 15 12 9 6"></polyline></svg>
</a>
<a href="tel:221131400" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: '#fff', fontFamily: '\'Inter\',sans-serif', fontSize: '17px', fontWeight: '600', padding: '16px 28px', borderRadius: '50px', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.3)'}}>
<svg fill="white" height="18" viewbox="0 0 24 24" width="18"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"></path></svg>
        22 113 14 00
      </a>
</div>
</div>
</section>
</div>

<div className="page" id="pg-deweloperzy">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>

<div className="hero-split" style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '64px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Dla deweloperów</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Twoi klienci kupują szybciej,<br/>gdy widzą konkretny zwrot.</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Daj klientom konkretną odpowiedź na pytanie o zwrot — dostarczamy prognozy ROI i przejmujemy zarządzanie gdy lokal jest gotowy.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#dew-form" onclick="document.getElementById('dew-form').scrollIntoView({behavior:'smooth'});return false;">
            Umów konsultację →
          </a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 0px'}}>
<img alt="Inwestycja deweloperska – BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774736423/ChatGPT_Image_28_mar_2026_23_20_13_axhz3u.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', borderRadius: '16px'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">15</div>
<div className="text-sm text-[#444444]">miast w Polsce</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średnio wyższych przychodów</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">10<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">lat na rynku</div>
</div>
</div>
</div>
</div>

<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Dlaczego BookingHost</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Operator, który wyróżnia Twoją inwestycję</h2>
<p className="text-[#888] text-sm mt-2 max-w-xl mx-auto">Trzy powody, dla których deweloperzy wybierają nas przed podpisaniem umów z klientami.</p>
</div>

<div className="dew-chess-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '100px'}}>
<div>
<div style={{width: '48px', height: '48px', background: '#f0fcfb', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '12px'}}>Skala i zasięg</div>
<h3 style={{fontSize: '32px', fontWeight: '600', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.2', letterSpacing: '-0.02em'}}>2 000+ apartamentów<br/>w 15 miastach</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.75', maxWidth: '440px'}}>Budujesz w Warszawie, Krakowie, Trójmieście? Jesteśmy tam. W każdym z 15 miast mamy lokalny zespół gotowy przejąć inwestycję gdy lokale są gotowe do wynajmu — bez szukania operatora przez Twoich klientów.</p>
</div>
<div className="dew-chess-img" style={{borderRadius: '24px', overflow: 'hidden'}}>
<img alt="Skala BookingHost – mapa Polski" src="https://res.cloudinary.com/depa0audz/image/upload/v1774452962/ChatGPT_Image_25_mar_2026_16_34_31_i9b6rv.png" style={{width: '100%', display: 'block'}}/>
</div>
</div>

<div className="dew-chess-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '100px'}}>
<div className="dew-chess-img" style={{borderRadius: '24px', overflow: 'hidden', maxHeight: '520px'}}>
<img alt="Algorytm cenowy BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774730526/math-example-bg_sr9fsi.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block'}}/>
</div>
<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
<div style={{width: '48px', height: '48px', background: '#f0fcfb', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '12px'}}>Technologia własna</div>
<h3 style={{fontSize: '32px', fontWeight: '600', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.2', letterSpacing: '-0.02em'}}>Jedyny w Polsce<br/>autorski algorytm cenowy</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.75', maxWidth: '440px'}}>Nasz algorytm aktualizuje ceny kilka razy dziennie na podstawie popytu, eventów i konkurencji. Efekt: średnio +37% wyższych przychodów. Żaden inny operator w Polsce nie ma własnego algorytmu.</p>
</div>
</div>

<div className="dew-chess-row" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
<div>
<div style={{width: '48px', height: '48px', background: '#f0fcfb', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>
</div>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '12px'}}>Szybkość startu</div>
<h3 style={{fontSize: '32px', fontWeight: '600', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.2', letterSpacing: '-0.02em'}}>Przejmujemy gdy<br/>lokal jest gotowy do wynajmu</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.75', maxWidth: '440px'}}>Wchodzimy na etapie wykańczania — doradzamy przy wyposażeniu, organizujemy home staging i sesję zdjęciową. Pierwsze rezerwacje w 7 dni od publikacji.</p>
</div>
<div className="dew-chess-img" style={{borderRadius: '24px', overflow: 'hidden', maxHeight: '520px'}}>
<img alt="Szybki start zarządzania apartamentem" src="https://res.cloudinary.com/depa0audz/image/upload/v1774735149/ChatGPT_Image_28_mar_2026_22_59_02_ivmgny.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block'}}/>
</div>
</div>
</div>
</section>

<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '100px 0'}}>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak współpracujemy</span>
<h2 className="text-4xl font-semibold tracking-tight text-[#0f0f0f]">Od etapu projektu po pełne zarządzanie</h2>
<p className="text-[#888] text-base mt-4 max-w-xl mx-auto">Wchodzimy na każdym etapie inwestycji — im wcześniej, tym więcej możemy dla Ciebie zrobić.</p>
</div>
<div className="dew-timeline" style={{display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '640px', margin: '0 auto'}}>

<div style={{display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'stretch'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{width: '56px', height: '56px', background: '#00c4c0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '20px', flexShrink: '0'}}>1</div>
<div style={{width: '2px', flex: '1', background: '#ebebeb', marginTop: '8px'}}></div>
</div>
<div style={{padding: '8px 0 64px 32px'}}>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '10px'}}>Etap planowania</div>
<h3 style={{fontSize: '26px', fontWeight: '600', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.2'}}>Analiza i doradztwo</h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '560px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Analiza potencjału najmu w Twojej lokalizacji</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Rekomendacje wykończenia i wyposażenia zwiększające przychody z najmu</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Prognoza przychodów oparta na danych z 2 000+ apartamentów</div>
</div>
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'stretch'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{width: '56px', height: '56px', background: '#00c4c0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '20px', flexShrink: '0'}}>2</div>
<div style={{width: '2px', flex: '1', background: '#ebebeb', marginTop: '8px'}}></div>
</div>
<div style={{padding: '8px 0 64px 32px'}}>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '10px'}}>Etap sprzedaży</div>
<h3 style={{fontSize: '26px', fontWeight: '600', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.2'}}>Argument dla Twoich klientów</h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '560px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Materiały PDF z wyliczeniami ROI dla nabywców</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Symulacje przychodów dla konkretnych lokali</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Gwarancja zarządzania jako argument sprzedażowy</div>
</div>
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: '80px 1fr', alignItems: 'stretch'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{width: '56px', height: '56px', background: '#00c4c0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '20px', flexShrink: '0'}}>3</div>
</div>
<div style={{padding: '8px 0 0 32px'}}>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '10px'}}>Po odbiorze kluczy</div>
<h3 style={{fontSize: '26px', fontWeight: '600', color: '#0f0f0f', marginBottom: '16px', lineHeight: '1.2'}}>Pełne zarządzanie gdy lokal jest gotowy</h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '560px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Doradzamy przy wykończeniu i wyposażeniu pod wynajem krótkoterminowy</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Jeden standard obsługi dla całej inwestycji</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '15px', color: '#444', lineHeight: '1.6'}}><span style={{width: '20px', height: '20px', background: '#f0fcfb', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', marginTop: '2px'}}><svg fill="none" height="10" stroke="#00c4c0" strokeLinecap="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></span>Panel zarządzania dla każdego nabywcy od razu</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Argument sprzedażowy</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-5">Co dostaje Twój klient<br/>razem z kluczami</h2>
<p className="text-[#444] leading-relaxed mb-6">Nabywca mieszkania w Twojej inwestycji nie kupuje tylko lokalu — kupuje gotowy produkt inwestycyjny. To przyspiesza decyzję zakupową i podnosi wartość całej oferty.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
<div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', background: '#f0fcfb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>
</div>
<div>
<div style={{fontSize: '15px', fontWeight: '600', color: '#0f0f0f', marginBottom: '4px'}}>Prognoza przychodów i ROI</div>
<div style={{fontSize: '14px', color: '#444', lineHeight: '1.6'}}>Wyliczenia oparte na danych z porównywalnych mieszkań w tej samej lokalizacji. Nabywca widzi konkretne liczby, nie obietnice.</div>
</div>
</div>
<div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', background: '#f0fcfb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></svg>
</div>
<div>
<div style={{fontSize: '15px', fontWeight: '600', color: '#0f0f0f', marginBottom: '4px'}}>Panel zarządzania inwestycją od pierwszego dnia</div>
<div style={{fontSize: '14px', color: '#444', lineHeight: '1.6'}}>Każdy nabywca dostaje dostęp do panelu gdzie śledzi rezerwacje, przychody i stan lokalu w czasie rzeczywistym.</div>
</div>
</div>
<div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
<div style={{width: '40px', height: '40px', background: '#f0fcfb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
</div>
<div>
<div style={{fontSize: '15px', fontWeight: '600', color: '#0f0f0f', marginBottom: '4px'}}>Gotowe materiały sprzedażowe</div>
<div style={{fontSize: '14px', color: '#444', lineHeight: '1.6'}}>PDF z prognozami, symulacjami i opisem modelu zarządzania — gotowy do wręczenia klientowi na spotkaniu sprzedażowym.</div>
</div>
</div>
</div>
</div>
<div style={{background: '#1a2e35', borderRadius: '24px', padding: '40px'}}>
<div style={{fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', color: '#00c4c0', marginBottom: '24px'}}>Przykładowa symulacja</div>
<div style={{fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px'}}>Lokal inwestycyjny · 42m² · Warszawa Śródmieście</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px'}}>
<div style={{background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px'}}>
<div style={{fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px'}}>Najem długoterminowy</div>
<div style={{fontSize: '22px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', textDecoration: 'line-through'}}>2 800 zł</div>
<div style={{fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '2px'}}>miesięcznie</div>
</div>
<div style={{background: 'rgba(0,196,192,0.15)', border: '1px solid rgba(0,196,192,0.3)', borderRadius: '12px', padding: '16px'}}>
<div style={{fontSize: '11px', color: '#00c4c0', marginBottom: '6px'}}>Z BookingHost</div>
<div style={{fontSize: '22px', fontWeight: '700', color: '#00c4c0'}}>4 650 zł</div>
<div style={{fontSize: '11px', color: 'rgba(0,196,192,0.7)', marginTop: '2px'}}>miesięcznie</div>
</div>
</div>
<div style={{background: 'rgba(0,196,192,0.1)', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px'}}>
<div style={{fontSize: '13px', fontWeight: '700', color: '#00c4c0'}}>+1 850 zł / mies. · +66% więcej</div>
</div>
<div style={{fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: '1.6'}}>Dane oparte na wynikach porównywalnych mieszkań zarządzanych przez BookingHost w tej lokalizacji.</div>
</div>
</div>
</div>
</section>

<section id="dew-form" style={{background: '#f8f8f8', padding: '80px 0'}}>
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Kontakt</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Porozmawiajmy o Twojej inwestycji</h2>
<p className="text-[#444]">Oddzwonimy w ciągu 24 godzin z wstępną analizą potencjału.</p>
</div>
<div className="bg-white rounded-2xl p-8 border border-[#ebebeb] shadow-sm">
<div className="dew-form-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
<div>
<label className="text-xs font-semibold text-[#0f0f0f] block mb-2 uppercase tracking-wide">Imię i nazwisko *</label>
<input onblur="this.style.borderColor='#ebebeb'" onfocus="this.style.borderColor='#00c4c0'" placeholder="Jan Kowalski" style={{border: '1.5px solid #ebebeb', borderRadius: '12px', padding: '12px 16px', width: '100%', fontSize: '14px', boxSizing: 'border-box', outline: 'none'}} type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-[#0f0f0f] block mb-2 uppercase tracking-wide">Firma *</label>
<input onblur="this.style.borderColor='#ebebeb'" onfocus="this.style.borderColor='#00c4c0'" placeholder="Nazwa dewelopera / firmy" style={{border: '1.5px solid #ebebeb', borderRadius: '12px', padding: '12px 16px', width: '100%', fontSize: '14px', boxSizing: 'border-box', outline: 'none'}} type="text"/>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px'}}>
<div>
<label className="text-xs font-semibold text-[#0f0f0f] block mb-2 uppercase tracking-wide">Telefon *</label>
<input onblur="this.style.borderColor='#ebebeb'" onfocus="this.style.borderColor='#00c4c0'" placeholder="+48 600 000 000" style={{border: '1.5px solid #ebebeb', borderRadius: '12px', padding: '12px 16px', width: '100%', fontSize: '14px', boxSizing: 'border-box', outline: 'none'}} type="tel"/>
</div>
<div>
<label className="text-xs font-semibold text-[#0f0f0f] block mb-2 uppercase tracking-wide">E-mail *</label>
<input onblur="this.style.borderColor='#ebebeb'" onfocus="this.style.borderColor='#00c4c0'" placeholder="jan@firma.pl" style={{border: '1.5px solid #ebebeb', borderRadius: '12px', padding: '12px 16px', width: '100%', fontSize: '14px', boxSizing: 'border-box', outline: 'none'}} type="email"/>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px'}}>
<div>
<label className="text-xs font-semibold text-[#0f0f0f] block mb-2 uppercase tracking-wide">Liczba lokali w inwestycji</label>
<input onblur="this.style.borderColor='#ebebeb'" onfocus="this.style.borderColor='#00c4c0'" placeholder="np. 50, 120, 200" style={{border: '1.5px solid #ebebeb', borderRadius: '12px', padding: '12px 16px', width: '100%', fontSize: '14px', boxSizing: 'border-box', outline: 'none'}} type="text"/>
</div>
<div>
<label className="text-xs font-semibold text-[#0f0f0f] block mb-2 uppercase tracking-wide">Lokalizacja inwestycji *</label>
<input onblur="this.style.borderColor='#ebebeb'" onfocus="this.style.borderColor='#00c4c0'" placeholder="Miasto / dzielnica" style={{border: '1.5px solid #ebebeb', borderRadius: '12px', padding: '12px 16px', width: '100%', fontSize: '14px', boxSizing: 'border-box', outline: 'none'}} type="text"/>
</div>
</div>
<button className="w-full text-white font-semibold py-4 rounded-full text-sm" onclick="this.textContent='Wysyłanie...';setTimeout(()=&gt;{this.textContent='Wysłano – oddzwonimy w 24h ✓';this.style.background='#1a2e35';},1500);" style={{background: '#00c4c0', border: 'none', cursor: 'pointer', fontSize: '15px'}}>
        Wyślij zapytanie – oddzwonimy w 24h
      </button>
<p className="text-center text-xs text-[#888] mt-3">Lub zadzwoń bezpośrednio: <a href="tel:221131400" style={{color: '#00c4c0', fontWeight: '600'}}>22 113 14 00</a></p>
</div>
</div>
</section>
</div>

<div className="page" id="pg-lokalizacje">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Obsługiwane miasta</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarządzamy najmem<br/>w całej Polsce</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>W 15 miastach mamy lokalne biura i własne zespoły. Niezależnie od lokalizacji – możesz liczyć na pełną obsługę.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('kontakt');return false;">
            Sprawdź swój zysk – bezpłatnie →
          </a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Mapa Polski – BookingHost lokalizacje" src="https://res.cloudinary.com/depa0audz/image/upload/v1774452962/ChatGPT_Image_25_mar_2026_16_34_31_i9b6rv.png" style={{width: '100%', height: '100%', objectFit: 'contain', borderRadius: '16px'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">15</div>
<div className="text-sm text-[#444444]">miast w Polsce</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średni wzrost przychodów</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div>
<div className="text-sm text-[#444444]">średnia ocena gości</div>
</div>
</div>
</div>
</div>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-14">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-4">Jesteśmy tam, gdzie Twój apartament</h2>
<p className="text-lg text-[#444] leading-relaxed">Przez ponad 10 lat działania rozwinęliśmy model efektywnego zarządzania, który pozwala nam działać w każdym miejscu w Polsce – od dużych metropolii po nadmorskie kurorty i górskie miejscowości.</p>
</div>
<div className="w-full">
<h3 className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wider mb-6">Obsługiwane lokalizacje</h3>
<div className="grid grid-cols-3 gap-6">
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('warszawa');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Warszawa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737063/gklkfohzf6oku5u9scl2.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Warszawa</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('krakow');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Kraków" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737095/utw7munn8zqjxaidxh7q.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Kraków</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('gdansk');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Gdańsk" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737302/qwtexcb5sll28fohvt51.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Gdańsk</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('wroclaw');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Wrocław" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737124/download_feibu8.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Wrocław</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('poznan');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Poznań" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737396/owg9toj5nwmwtib6ahyb.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Poznań</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('lodz');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Łódź" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737277/njuu6hietibp9mon1isj.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Łódź</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('zakopane');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Zakopane" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737813/ChatGPT_Image_28_mar_2026_23_43_25_smq6nz.png"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Zakopane</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('sopot');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Sopot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737848/ChatGPT_Image_28_mar_2026_23_43_54_z6rcne.png"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Sopot</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('gdynia');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Gdynia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737880/ChatGPT_Image_28_mar_2026_23_44_27_kmhuml.png"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Gdynia</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('katowice');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Katowice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737547/pa85n1r5vnxiql9kjptq.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Katowice</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('lublin');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Lublin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737439/qoqlp7ykl8ogfaylddmp.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Lublin</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('szczecin');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Szczecin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737495/dzbrdfk8t8goybgdleph.jpg"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Szczecin</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('rzeszow');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Rzeszów" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737935/ChatGPT_Image_28_mar_2026_23_45_24_zptpa1.png"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Rzeszów</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('karpacz');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Karpacz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774738018/ChatGPT_Image_28_mar_2026_23_46_42_jkneab.png"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Karpacz</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
<a className="group bg-white rounded-2xl overflow-hidden border border-[#ebebeb] hover:shadow-lg hover:border-[#00c4c0]/30 transition-all block" href="#" onclick="showPage('torun');return false;">
<div className="overflow-hidden" style={{aspectRatio: '4/3'}}>
<img alt="Toruń" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737987/ChatGPT_Image_28_mar_2026_23_46_15_fbtkmm.png"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold text-[#0f0f0f]">Toruń</h3>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" fill="none" height="16" stroke="#00c4c0" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</div>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Sprawdź ile zarobisz w swoim mieście</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24h – nasz lokalny ekspert przygotuje indywidualną prognozę.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<div className="page" id="pg-warszawa">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Warszawa</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Warszawie</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Największy rynek najmu krótkoterminowego w Polsce. Ruch biznesowy przez cały rok – konferencje, targi, delegacje – minimalizuje sezonowość i zapewnia stabilne przychody.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">
            Bezpłatna wycena w Warszawie →
          </a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Warszawa" src="https://res.cloudinary.com/depa0audz/image/upload/v1774738540/ChatGPT_Image_28_mar_2026_23_55_20_ow6dfi.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'left center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">obsłużonych rezerwacji</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div>
<div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div>
</div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Warszawy o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do setek zadowolonych właścicieli w Warszawie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Mieszkanie na Mokotowie stało puste przez pół roku. Teraz generuje więcej niż przy długoterminowym. Żałuję że nie zaczęłam wcześniej."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-[#00c4c0] flex items-center justify-center flex-shrink-0"><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MN</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Magdalena N.</p><p className="text-xs text-[#444444]">Właścicielka · Mokotów · od 2023</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Pracuję za granicą, mieszkanie w Warszawie zarządzało się samo. Raporty co miesiąc, przelew punktualnie. Pełen profesjonalizm."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-[#1a2e35] flex items-center justify-center flex-shrink-0"><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>RB</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Robert B.</p><p className="text-xs text-[#444444]">Właściciel · Śródmieście · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Mam dwa mieszkania na Woli. Jedno zarządzam sam, drugie przez BookingHost. To przez BookingHost zarabia o 40% więcej. Wniosek sam się nasuwa."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-[#2a6678] flex items-center justify-center flex-shrink-0"><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>TW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Tomasz W.</p><p className="text-xs text-[#444444]">Właściciel 2 apt. · Wola · od 2021</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Warszawie</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Warszawie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Warszawie — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Warszawy</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Warszawie?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Warszawa</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Warszawa to największy i najbardziej stabilny rynek najmu krótkoterminowego w Polsce. W przeciwieństwie do miast typowo turystycznych, stolica generuje popyt przez cały rok — konferencje, targi, delegacje biznesowe i turystyka kulturalna sprawiają, że obłożenie w Warszawie nie spada nawet poza sezonem letnim.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najwyższe przychody osiągają mieszkania w <strong>Śródmieściu</strong>, na <strong>Woli</strong> i <strong>Mokotowie</strong> — dzięki bliskości biurowców i hoteli konferencyjnych. Coraz lepsze wyniki notuje też <strong>Praga-Północ</strong> i <strong>Żoliborz</strong>, gdzie rośnie liczba gości szukających lokalnego klimatu poza centrum.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Warszawie od lat — nasz lokalny zespół zna specyfikę każdej dzielnicy. Wiemy kiedy podnieść cenę przed targami w EXPO XXI, jak reagować na wydarzenia w Pałacu Kultury i które dzielnice przyciągają gości biznesowych, a które turystycznych.</p>
</div>
</section>
</div>
<div className="page" id="pg-krakow">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Kraków</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Krakowie</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Turystyczna stolica Polski z milionami gości rocznie. Kazimierz, Stare Miasto i Podgórze generują jedne z najwyższych przychodów w kraju przez cały rok.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Krakowie →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Kraków" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737095/utw7munn8zqjxaidxh7q.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Kraków o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Kraków</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Mam studio na Kazimierzu. Sezon trwa cały rok — goście przyjeżdżają nawet w grudniu. BookingHost wycisnął z tego maksimum."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>KM</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Krzysztof M.</p><p className="text-xs text-[#444444]">Właściciel · Kazimierz · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Bałam się oddać mieszkanie w centrum obcym ludziom. Po roku nie wyobrażam sobie wracać do najmu długoterminowego."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>EW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Ewa W.</p><p className="text-xs text-[#444444]">Właścicielka · Stare Miasto · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Podpisałem umowę na próbę na 3 miesiące. Minęły 4 lata. Nie ma o czym rozmawiać — wyniki mówią same za siebie."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>PZ</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Paweł Z.</p><p className="text-xs text-[#444444]">Właściciel 2 apt. · Podgórze · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Kraków</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Krakowie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Krakowie — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Krakowa</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Krakowie?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Kraków</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Kraków to jedno z najchętniej odwiedzanych miast w Europie — i jeden z najsilniejszych rynków najmu krótkoterminowego w Polsce. Turystyka kulturalna, studenci, konferencje i eventy sprawiają że popyt nie zna sezonu.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najwyższe stawki osiągają lokale na <strong>Kazimierzu</strong>, <strong>Starym Mieście</strong> i w okolicach <strong>Rynku Głównego</strong>. Rosnące wyniki notuje też <strong>Podgórze</strong> — coraz popularniejsze wśród gości szukających autentycznej atmosfery.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Krakowie od lat — nasz lokalny zespół zna rytm miasta: wie kiedy podbić ceny przed Crachami, Misteriami Jasnogórskimi czy Wiankami, i jak reagować na nagłe wzrosty popytu.</p>
</div>
</section>
</div>
<div className="page" id="pg-gdansk">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Gdańsk</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Gdańsku</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Trójmiasto łączy turystykę morską z ruchem biznesowym przez cały rok. Letni szczyt nad Bałtykiem i stały popyt korporacyjny to idealne połączenie dla właściciela.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Gdańsku →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Gdańsk" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737302/qwtexcb5sll28fohvt51.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Gdańsk o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Gdańsk</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Mieszkanie w centrum Gdańska zarabiało słabo na długoterminowym. Teraz w sezonie letnim generuje dwukrotność tego co wcześniej."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AN</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Agnieszka N.</p><p className="text-xs text-[#444444]">Właścicielka · Śródmieście · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Lokalny zespół naprawdę zna Trójmiasto. Ceny reagują na każdy event — Fala, Opener, Jarmark Dominikański. Widać różnicę."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MB</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Michał B.</p><p className="text-xs text-[#444444]">Właściciel · Wrzeszcz · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Dwa mieszkania, zero stresu. Raporty co miesiąc, przelew punktualnie. Dokładnie to czego szukałam."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>KS</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Katarzyna S.</p><p className="text-xs text-[#444444]">Właścicielka 2 apt. · Oliwa · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Gdańsk</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Gdańsku</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Gdańsku — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm uwzględnia sezonowość Trójmiasta</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Gdańsku?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Gdańsk</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Gdańsk to jedno z najchętniej odwiedzanych miast w Polsce — z unikalnym połączeniem turystyki morskiej, historycznego Starego Miasta i silnego rynku korporacyjnego. Sezon letni generuje spektakularne wyniki, ale popyt biznesowy utrzymuje obłożenie przez cały rok.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najwyższe przychody osiągają lokale w <strong>Śródmieściu</strong> i przy <strong>Długim Targu</strong>. Świetne wyniki notują też mieszkania we <strong>Wrzeszczu</strong> i <strong>Oliwie</strong> — popularne wśród gości biznesowych i studentów.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Gdańsku od lat — znamy rytm Trójmiasta. Wiemy kiedy maksymalizować ceny przed Openerem, Jarmarkiem Dominikańskim czy Falą, i jak utrzymać wysokie obłożenie poza sezonem.</p>
</div>
</section>
</div>
<div className="page" id="pg-wroclaw">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Wrocław</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu we Wrocławiu</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Wrocław to miasto kongresów i turystyki kulturowej z jednym z najpiękniejszych rynków w Polsce. Wysoka dynamika wzrostu rynku STR i silny popyt biznesowy przez cały rok.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena we Wrocławiu →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Wrocław" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737124/download_feibu8.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Wrocław o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Wrocław</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Wrocław rośnie w siłę każdego roku. BookingHost reaguje na ten wzrost — moje przychody poszły w górę o ponad 50% w dwa lata."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>TP</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Tomasz P.</p><p className="text-xs text-[#444444]">Właściciel · Stare Miasto · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Myślałam że najem krótkoterminowy to dużo pracy. Z BookingHost nie zrobiłam nic — a przelew przychodzi co miesiąc."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Marta K.</p><p className="text-xs text-[#444444]">Właścicielka · Śródmieście · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Trzy mieszkania, jeden opiekun, jeden panel. Idealny model dla kogoś kto nie chce się w to mieszać."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>JR</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Jakub R.</p><p className="text-xs text-[#444444]">Właściciel · Krzyki · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Wrocław</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół we Wrocławiu</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie we Wrocławiu — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Wrocławia</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie we Wrocławiu?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Wrocław</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Wrocław to jedno z najdynamiczniej rozwijających się miast w Polsce pod względem najmu krótkoterminowego. Miasto kongresów, festiwali i turystyki kulturowej generuje stabilny popyt przez cały rok.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają mieszkania przy <strong>Rynku</strong>, na <strong>Starym Mieście</strong> i <strong>Nadodrzu</strong>. Rosnące zainteresowanie notują też <strong>Krzyki</strong> i okolice <strong>hali Stulecia</strong>.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa we Wrocławiu od lat — wiemy kiedy podnosić ceny przed Juwenaliami, Brave Festival czy kongresami w centrum, i jak utrzymać wysokie obłożenie w spokojniejszych miesiącach.</p>
</div>
</section>
</div>
<div className="page" id="pg-poznan">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Poznań</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Poznaniu</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Poznań to stolica targów i biznesu w Polsce. MTP przyciąga setki tysięcy gości rocznie — popyt biznesowy sprawia że obłożenie jest stabilne przez cały rok.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Poznaniu →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Poznań" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737396/owg9toj5nwmwtib6ahyb.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Poznań o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Poznań</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Podczas targów MTP moje mieszkanie zarabia tyle co w normalnym miesiącu. BookingHost idealnie to rozgrywa — ceny rosną dokładnie wtedy kiedy trzeba."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Aleksandra K.</p><p className="text-xs text-[#444444]">Właścicielka · Centrum · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Jeżyce to modna dzielnica i BookingHost to wykorzystuje. Goście chcą być blisko centrum ale w autentycznym miejscu. Trafiłem w punkt."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>WN</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Wojciech N.</p><p className="text-xs text-[#444444]">Właściciel · Jeżyce · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Nie wierzyłam że można tak po prostu oddać mieszkanie i zapomnieć. Po 4 latach wiem że można."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>BM</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Barbara M.</p><p className="text-xs text-[#444444]">Właścicielka · Wilda · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Poznań</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Poznaniu</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Poznaniu — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm reaguje na targi MTP i eventy w Poznaniu</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Poznaniu?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Poznań</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Poznań to wyjątkowy rynek STR w Polsce — zdominowany przez turystykę biznesową i targową. Międzynarodowe Targi Poznańskie generują skokowy wzrost popytu kilka razy w roku, a stabilny ruch korporacyjny utrzymuje obłożenie poza sezonem.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają lokale w okolicach <strong>Starego Rynku</strong>, na <strong>Jeżycach</strong> i <strong>Wildzie</strong>. Mieszkania blisko <strong>MTP</strong> i <strong>centrum kongresowego</strong> osiągają spektakularne stawki podczas targów.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Poznaniu od lat — znamy kalendarz targów i maksymalizujemy ceny podczas Polagry, Motor Show i innych kluczowych eventów. Twoje mieszkanie zarabia wtedy gdy inni tego nie wykorzystują.</p>
</div>
</section>
</div>
<div className="page" id="pg-lodz">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Łódź</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Łodzi</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Łódź to miasto w dynamicznej transformacji — tanie nieruchomości, rosnąca turystyka i rewolucja kulturalna sprawiają że to jeden z najciekawszych rynków STR w Polsce.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Łodzi →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Łódź" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737277/njuu6hietibp9mon1isj.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Łódź o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Łódź</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Kupiłem mieszkanie w Łodzi jako inwestycję bo ceny były atrakcyjne. Z BookingHost zwrot jest lepszy niż się spodziewałem."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>RK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Robert K.</p><p className="text-xs text-[#444444]">Właściciel · Śródmieście · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Manufaktura i OFF Piotrkowska przyciągają gości cały rok. BookingHost wie jak to wykorzystać — moje obłożenie przekracza 80%."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>EJ</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Ewa J.</p><p className="text-xs text-[#444444]">Właścicielka · Piotrkowska · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Zacząłem współpracę rok temu. Wyniki przerosły moje oczekiwania. Polecam każdemu właścicielowi w Łodzi."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>DW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Damian W.</p><p className="text-xs text-[#444444]">Właściciel · Bałuty · od 2023</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Łódź</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Łodzi</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Łodzi — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Łodzi</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Łodzi?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Łódź</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Łódź to jeden z najszybciej rozwijających się rynków najmu krótkoterminowego w Polsce. Rewitalizacja centrum, rosnąca popularność Manufaktury i OFF Piotrkowskiej oraz tanie ceny nieruchomości sprawiają że ROI z inwestycji jest tu wyjątkowo atrakcyjny.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze lokalizacje to okolice <strong>ul. Piotrkowskiej</strong>, <strong>Manufaktury</strong> i rewitalizowanego <strong>centrum</strong>. Rosnące zainteresowanie notują też <strong>Bałuty</strong> i okolice <strong>EC1</strong>.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Łodzi od lat — wiemy jak pozycjonować mieszkania na rosnącym rynku i jak wykorzystywać eventy kulturalne do maksymalizacji przychodów.</p>
</div>
</section>
</div>
<div className="page" id="pg-zakopane">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Zakopane</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Zakopanem</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Dwa sezony — zima i lato — plus długie weekendy i ferie. Zakopane to jeden z najwyższych zwrotów z najmu krótkoterminowego w Polsce przez cały rok.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Zakopanem →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Zakopane" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737813/ChatGPT_Image_28_mar_2026_23_43_25_smq6nz.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Zakopane o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Zakopane</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"W Zakopanem sezon nigdy nie odpuszcza. BookingHost wycisnął z mojego apartamentu tyle ile się da — w zimie, w lecie i między nimi."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MG</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Marcin G.</p><p className="text-xs text-[#444444]">Właściciel · Centrum · od 2020</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Mieszkanie przy Krupówkach to złoto w sezonie zimowym. BookingHost wie kiedy podnieść cenę i robi to bezbłędnie."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Anna K.</p><p className="text-xs text-[#444444]">Właścicielka · Krupówki · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Trzy apartamenty w Zakopanem to było za dużo żeby zarządzać samemu. Z BookingHost śpię spokojnie i zarabiam lepiej."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>PH</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Piotr H.</p><p className="text-xs text-[#444444]">Właściciel 3 apt. · Tatry · od 2019</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Zakopane</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Zakopanem</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Zakopanem — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm reaguje na sezony i ferie w Tatrach</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Zakopanem?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Zakopane</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Zakopane to jeden z najsilniejszych rynków najmu krótkoterminowego w Polsce — z unikalnymi dwoma szczytami sezonu: zimowym i letnim. Ferie, długie weekendy i wyjazdy świąteczne sprawiają że popyt jest tu właściwie ciągły.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najwyższe stawki osiągają lokale przy <strong>Krupówkach</strong>, w okolicach <strong>Gubałówki</strong> i z widokiem na <strong>Tatry</strong>. Apartamenty z sauną lub kominkiem osiągają premię cenową przez cały rok.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Zakopanem od lat — znamy specyfikę górskiego rynku i potrafimy maksymalizować przychody w każdym sezonie. Wiemy kiedy ceny na Podhalu szybują i wykorzystujemy to dla Ciebie.</p>
</div>
</section>
</div>
<div className="page" id="pg-sopot">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Sopot</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Sopocie</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Najdroższa plaża w Polsce. Letnie stawki za noc należą do najwyższych w kraju — prestiżowa lokalizacja, wymagający gość, spektakularne wyniki w sezonie.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Sopocie →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Sopot" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737848/ChatGPT_Image_28_mar_2026_23_43_54_z6rcne.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Sopot o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Sopot</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"W lipcu moje mieszkanie zarabia więcej niż przez pół roku na długoterminowym. BookingHost wycisnął z sezonu absolutne maksimum."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>KL</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Kamila L.</p><p className="text-xs text-[#444444]">Właścicielka · Monte Cassino · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Sopot to premium market — goście oczekują wysokiego standardu. BookingHost dba o każdy detal i dzięki temu mam same 5-gwiazdkowe opinie."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>TM</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Tomasz M.</p><p className="text-xs text-[#444444]">Właściciel · Centrum · od 2020</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Byłam sceptyczna czy to się opłaca poza sezonem. Wyniki pokazały że tak — nawet jesienią obłożenie trzyma się dobrze."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>IW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Iwona W.</p><p className="text-xs text-[#444444]">Właścicielka · Górny Sopot · od 2022</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Sopot</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Sopocie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Sopocie — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm maksymalizuje ceny w sezonie nadmorskim</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Sopocie?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Sopot</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Sopot to jedno z najbardziej ekskluzywnych miejsc na mapie polskiego najmu krótkoterminowego. Najdroższa plaża nad Bałtykiem, prestiżowy klimat i zamożni goście sprawiają że stawki za noc należą do najwyższych w kraju.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają lokale przy <strong>Monte Cassino</strong>, w okolicach <strong>molo</strong> i w <strong>centrum</strong>. Nawet mieszkania w <strong>Górnym Sopocie</strong> notują świetne wyniki dzięki spokojnemu charakterowi dzielnicy.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Sopocie od lat — znamy wymagającego sopockiego gościa i wiemy jak spozycjonować Twoje mieszkanie żeby osiągało premium stawki w szczycie sezonu i utrzymywało obłożenie poza nim.</p>
</div>
</section>
</div>
<div className="page" id="pg-gdynia">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Gdynia</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Gdyni</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Nowoczesne miasto portowe łączące turystykę morską z silnym rynkiem biznesowym. Gdynia to stabilne obłożenie przez cały rok i rosnące stawki za najem.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Gdyni →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Gdynia" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737880/ChatGPT_Image_28_mar_2026_23_44_27_kmhuml.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Gdynia o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Gdynia</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Gdynia jest niedoceniana na tle Gdańska i Sopotu. BookingHost pokazał mi że to błąd — moje mieszkanie generuje świetne wyniki przez cały rok."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>PK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Piotr K.</p><p className="text-xs text-[#444444]">Właściciel · Śródmieście · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Orłowo to gem — spokojna plaża, świetna lokalizacja. BookingHost pozycjonuje moje mieszkanie idealnie wśród gości szukających czegoś kameralnego."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MB</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Monika B.</p><p className="text-xs text-[#444444]">Właścicielka · Orłowo · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Dwa lata współpracy i ani razu nie musiałem interweniować. Przelew co miesiąc, mieszkanie w idealnym stanie."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>RS</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Roman S.</p><p className="text-xs text-[#444444]">Właściciel · Wzgórze Św. Maksymiliana · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Gdynia</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Gdyni</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Gdyni — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm uwzględnia sezonowość Trójmiasta</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Gdyni?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Gdynia</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Gdynia to nowoczesne miasto portowe o stabilnym rynku najmu krótkoterminowego. W przeciwieństwie do Sopotu utrzymuje dobry popyt poza sezonem letnim dzięki silnemu rynkowi biznesowemu i korporacyjnemu.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają mieszkania w <strong>Śródmieściu</strong>, przy <strong>bulwarze Nadmorskim</strong> i w spokojnym <strong>Orłowie</strong>. Rosnące zainteresowanie notują też okolice <strong>Sea Towers</strong>.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Gdyni od lat — znamy specyfikę każdej dzielnicy i potrafimy pozycjonować Twoje mieszkanie zarówno dla gości turystycznych jak i biznesowych, utrzymując wysokie obłożenie przez cały rok.</p>
</div>
</section>
</div>
<div className="page" id="pg-katowice">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Katowice</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Katowicach</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Centrum Śląska z rosnącym rynkiem kongresowym i kulturalnym. Spodek, MCK i NOSPR przyciągają gości przez cały rok — stabilne obłożenie bez sezonowości.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Katowicach →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Katowice" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737547/pa85n1r5vnxiql9kjptq.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Katowice o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Katowice</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Katowice to nie jest oczywisty wybór na najem krótkoterminowy ale wyniki mnie zaskoczyły. Kongresy i eventy w Spodku robią robotę."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>GK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Grzegorz K.</p><p className="text-xs text-[#444444]">Właściciel · Centrum · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"BookingHost wie kiedy są eventy w Katowicach i odpowiednio reaguje cenami. To widać na koncie."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>JN</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Joanna N.</p><p className="text-xs text-[#444444]">Właścicielka · Śródmieście · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Stabilne przychody, brak stresu, profesjonalna obsługa. Polecam wszystkim właścicielom na Śląsku."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Adam W.</p><p className="text-xs text-[#444444]">Właściciel · Ligota · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Katowice</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Katowicach</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Katowicach — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm reaguje na kongresy i eventy w Katowicach</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Katowicach?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Katowice</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Katowice to dynamicznie rozwijający się rynek STR w centrum Śląska. Rosnąca liczba kongresów w MCK, eventy w Spodku i NOSPR oraz dobra komunikacja z resztą Śląska sprawiają że popyt jest stabilny przez cały rok.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają mieszkania w <strong>centrum</strong>, przy <strong>Spodku</strong> i w okolicach <strong>Strefy Kultury</strong>. Dobre wyniki notują też mieszkania przy <strong>dworcu PKP</strong> — popularne wśród gości biznesowych.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Katowicach od lat — znamy kalendarz eventów i kongresów i potrafimy maksymalizować przychody podczas kluczowych wydarzeń, utrzymując dobre obłożenie w spokojniejszych miesiącach.</p>
</div>
</section>
</div>
<div className="page" id="pg-lublin">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Lublin</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Lublinie</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Prężne miasto akademickie z rosnącą turystyką kulturową i historyczną. Lublin zyska na znaczeniu jako cel podróży — a rynek STR dopiero nabiera tempa.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Lublinie →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Lublin" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737439/qoqlp7ykl8ogfaylddmp.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Lublin o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Lublin</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Lublin jest niedoceniony przez turystów ale to się zmienia. BookingHost pomaga mi korzystać z tego trendu — przychody rosną rok do roku."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>KP</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Krzysztof P.</p><p className="text-xs text-[#444444]">Właściciel · Stare Miasto · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Studenci i goście kulturalni to świetna baza. BookingHost skutecznie dociera do obu grup i utrzymuje wysokie obłożenie."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MO</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Magdalena O.</p><p className="text-xs text-[#444444]">Właścicielka · Śródmieście · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Rok współpracy i jestem pozytywnie zaskoczony wynikami. Lublin ma potencjał którego nie doceniałem."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>PW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Paweł W.</p><p className="text-xs text-[#444444]">Właściciel · LSM · od 2023</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Lublin</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Lublinie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Lublinie — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Lublina</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Lublinie?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Lublin</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Lublin to jedno z największych miast akademickich w Polsce z rosnącą atrakcyjnością turystyczną. Stare Miasto, Zamek Lubelski i bogata historia przyciągają coraz więcej gości — a rynek STR dopiero zaczyna wykorzystywać ten potencjał.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają lokale na <strong>Starym Mieście</strong> i w okolicach <strong>Zamku</strong>. Dobre rezultaty notują też mieszkania w <strong>centrum</strong> — popularne wśród gości biznesowych i studentów przyjeżdżających na events uczelniane.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Lublinie od lat — pomagamy właścicielom korzystać z rosnącej popularności miasta i pozycjonujemy mieszkania tak by przyciągały zarówno turystów kulturowych jak i gości biznesowych.</p>
</div>
</section>
</div>
<div className="page" id="pg-karpacz">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Karpacz</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Karpaczu</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Karkonosze przyciągają gości przez cały rok — narty zimą, wędrówki latem, Śnieżka o każdej porze. Karpacz to rosnący rynek górski z doskonałymi zwrotami.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Karpaczu →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Karpacz" src="https://res.cloudinary.com/depa0audz/image/upload/v1774738018/ChatGPT_Image_28_mar_2026_23_46_42_jkneab.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Karpacz o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Karpacz</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Karpacz rośnie w siłę każdego roku. BookingHost jest z tym wzrostem — moje przychody biją rekordy dwa sezony z rzędu."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AJ</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Aleksander J.</p><p className="text-xs text-[#444444]">Właściciel · Centrum · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Apartament blisko wyciągu to złoto w zimie. BookingHost wycisnął z tego maksimum — obłożenie w sezonie przekracza 95%."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>KW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Katarzyna W.</p><p className="text-xs text-[#444444]">Właścicielka · Biały Jar · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Zarządzanie z Warszawy było niemożliwe. BookingHost przejął wszystko i robi to lepiej niż ja robiłem będąc na miejscu."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MR</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Marek R.</p><p className="text-xs text-[#444444]">Właściciel · Karpacz Górny · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Karpacz</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Karpaczu</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Karpaczu — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm reaguje na sezony i ferie w Karkonoszach</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Karpaczu?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Karpacz</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Karpacz to jeden z najszybciej rosnących rynków górskiego STR w Polsce. Bliskość Śnieżki i wyciągów narciarskich generuje szczyt zimowy, a letnia turystyka piesza i rowerowa sprawia że sezon trwa właściwie przez cały rok.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najwyższe stawki osiągają apartamenty przy <strong>wyciągach</strong>, w <strong>Białym Jarze</strong> i okolicach <strong>Śnieżki</strong>. Lokale z sauną, kominkiem lub widokiem na góry osiągają znaczącą premię cenową.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Karpaczu od lat — znamy rytm karkonoskiego sezonu i potrafimy maksymalizować przychody zarówno podczas ferii zimowych jak i letnich weekendów. Twoje mieszkanie zarabia nawet gdy Cię tam nie ma.</p>
</div>
</section>
</div>
<div className="page" id="pg-rzeszow">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Rzeszów</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Rzeszowie</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Rzeszów to jedno z najszybciej rozwijających się miast w Polsce. Dolina Lotnicza, rosnąca gospodarka i turystyka sprawiają że rynek STR dynamicznie rośnie.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Rzeszowie →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Rzeszów" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737935/ChatGPT_Image_28_mar_2026_23_45_24_zptpa1.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Rzeszów o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Rzeszów</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Rzeszów rośnie jak na drożdżach i BookingHost to widzi. Moje przychody rosną razem z miastem."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>LK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Łukasz K.</p><p className="text-xs text-[#444444]">Właściciel · Centrum · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Goście biznesowi z Doliny Lotniczej to świetna baza. Stałe obłożenie, dobre stawki, brak problemów."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AN</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Anna N.</p><p className="text-xs text-[#444444]">Właścicielka · Śródmieście · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Rok z BookingHost i już wiem że to była najlepsza decyzja dotycząca tego mieszkania."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>JB</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Jacek B.</p><p className="text-xs text-[#444444]">Właściciel · Nowe Miasto · od 2023</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Rzeszów</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Rzeszowie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Rzeszowie — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Rzeszowa</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Rzeszowie?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Rzeszów</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Rzeszów to jedno z najdynamiczniej rozwijających się miast w Polsce — ze świetną infrastrukturą, rosnącą Doliną Lotniczą i coraz większą liczbą turystów. Rynek STR jest tu relatywnie młody co oznacza duże możliwości wzrostu.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają mieszkania w <strong>centrum</strong>, przy <strong>Rynku</strong> i w okolicach <strong>Galerii Rzeszów</strong>. Popyt biznesowy od firm z Doliny Lotniczej zapewnia stabilne obłożenie przez cały rok.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Rzeszowie od lat — pomagamy właścicielom korzystać z dynamicznego wzrostu miasta i pozycjonujemy mieszkania zarówno dla gości biznesowych jak i turystycznych.</p>
</div>
</section>
</div>
<div className="page" id="pg-szczecin">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Szczecin</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Szczecinie</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Brama na zachód Europy z rozwijającym się rynkiem STR. Bliskość Niemiec, rosnąca turystyka i popyt biznesowy sprawiają że Szczecin to ciekawa opcja inwestycyjna.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Szczecinie →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Szczecin" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737495/dzbrdfk8t8goybgdleph.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Szczecin o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Szczecin</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Szczecin przyciąga gości z Niemiec i to widać w rezerwacjach. BookingHost pozycjonuje moje mieszkanie idealnie na ten rynek."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>WK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Wojciech K.</p><p className="text-xs text-[#444444]">Właściciel · Centrum · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Byłam pierwsza w znajomych która zrobiła najem krótki w Szczecinie. Teraz wszyscy pytają jak to robię. Odsyłam do BookingHost."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>MZ</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Monika Z.</p><p className="text-xs text-[#444444]">Właścicielka · Śródmieście · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Świetna obsługa, terminowe rozliczenia. BookingHost sprawdza się w Szczecinie dokładnie tak samo jak w innych miastach."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>RW</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Robert W.</p><p className="text-xs text-[#444444]">Właściciel · Niebuszewo · od 2023</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Szczecin</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Szczecinie</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Szczecinie — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Szczecina</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Szczecinie?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Szczecin</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Szczecin to miasto z dużym potencjałem na mapie polskiego STR. Bliskość granicy z Niemcami przyciąga gości z zachodu, rosnąca gospodarka morska generuje popyt biznesowy, a coraz lepsza oferta kulturalna buduje turystykę weekendową.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najlepsze wyniki osiągają mieszkania w <strong>centrum</strong>, przy <strong>Wałach Chrobrego</strong> i w okolicach <strong>Starego Miasta</strong>. Rosnące zainteresowanie notuje też <strong>Łasztownia</strong> — rewitalizowana wyspa w centrum miasta.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Szczecinie od lat — pomagamy właścicielom dotrzeć zarówno do gości z Polski jak i z Niemiec, maksymalizując obłożenie i przychody przez cały rok.</p>
</div>
</section>
</div>
<div className="page" id="pg-torun">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
<div style={{display: 'flex', flex: '1', minHeight: '0'}}>
<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '48px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zarządzanie najmem · Toruń</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj na swoim<br/>mieszkaniu w Toruniu</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Miasto Kopernika z jednym z najpiękniejszych gotyckich Starych Miast w Europie. Toruń przyciąga turystów przez cały rok — i jest wpisany na listę UNESCO.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">Bezpłatna wycena w Toruniu →</a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>
<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 16px'}}>
<img alt="Toruń" src="https://res.cloudinary.com/depa0audz/image/upload/v1774737987/ChatGPT_Image_28_mar_2026_23_46_15_fbtkmm.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>
<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div><div className="text-sm text-[#444444]">obsłużonych rezerwacji</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div><div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div></div>
<div className="text-center px-4"><div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div><div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div></div>
</div>
</div>
</div>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Właściciele z Toruń o współpracy</h2>
<p className="text-[#888] mb-5">Dołącz do zadowolonych właścicieli w Toruń</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', alignItems: 'stretch'}}>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Stare Miasto w Toruniu to magnes na turystów cały rok. BookingHost wycisnął z tego potencjału dokładnie tyle ile można było."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#00c4c0'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>EK</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Elżbieta K.</p><p className="text-xs text-[#444444]">Właścicielka · Stare Miasto · od 2021</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Toruń jest niedoceniony przez inwestorów ale wyniki mnie przekonały. Obłożenie powyżej 80% przez większość roku."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#1a2e35'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>AM</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Andrzej M.</p><p className="text-xs text-[#444444]">Właściciel · Bydgoskie Przedmieście · od 2022</p></div></div></div>
<div className="bg-[#f8f8f8] rounded-2xl p-7 border border-[#ebebeb]" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}><div><div style={{color: '#f59e0b', fontSize: '18px', marginBottom: '16px'}}>★★★★★</div><p className="text-sm text-[#222222] leading-relaxed mb-5 italic">"Pierniki i UNESCO robią swoje. Goście przyjeżdżają z całej Polski i Europy. BookingHost dba żeby moje mieszkanie było zawsze gotowe."</p></div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background: '#2a6678'}}><span style={{color: 'white', fontSize: '12px', fontWeight: '700'}}>BJ</span></div><div><p className="text-sm font-semibold text-[#0f0f0f]">Beata J.</p><p className="text-xs text-[#444444]">Właścicielka · Centrum · od 2020</p></div></div></div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy w Toruń</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z — lokalny zespół w Toruniu</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p></div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}><div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}><svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg></div><h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3><p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p></div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>Zobacz pełny zakres usług <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg></a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3><p className="text-sm text-[#444] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie w Toruniu — bezpłatnie i bez zobowiązań</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3><p className="text-sm text-[#444] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja na 10+ portalach</h3><p className="text-sm text-[#444] leading-relaxed">Publikujemy na Airbnb, Booking.com i więcej — algorytm ustawia optymalne ceny dla Torunia</p></div>
<div className="text-center"><div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div><h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3><p className="text-sm text-[#444] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p></div>
</div>
</div>
</section>
<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie w Toruniu?</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Bezpłatna wycena w 24 godziny. Bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź swój zysk – bezpłatnie</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '64px 0'}}>
<div className="max-w-3xl mx-auto px-6">
<h2 style={{fontSize: '22px', fontWeight: '700', color: '#0f0f0f', marginBottom: '20px'}}>Zarządzanie najmem krótkoterminowym Toruń</h2>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Toruń to jedno z najpiękniejszych miast historycznych w Polsce — wpisane na listę UNESCO Stare Miasto przyciąga turystów przez cały rok. Miasto Kopernika generuje stabilny popyt turystyczny niezależnie od sezonu.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8', marginBottom: '16px'}}>Najwyższe stawki osiągają lokale na <strong>Starym Mieście</strong>, przy <strong>Rynku Staromiejskim</strong> i w okolicach <strong>zamku krzyżackiego</strong>. Dobre wyniki notuje też <strong>Bydgoskie Przedmieście</strong> z klimatyczną zabudową.</p>
<p style={{fontSize: '15px', color: '#444', lineHeight: '1.8'}}>BookingHost działa w Toruniu od lat — znamy specyfikę turystyki historycznej i potrafimy pozycjonować Twoje mieszkanie tak by przyciągało zarówno turystów indywidualnych jak i grupy zorganizowane.</p>
</div>
</section>
</div>
<div className="page" id="pg-inwestor">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>

<div className="hero-split" style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '64px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Dla inwestorów</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Kupujesz mieszkanie<br/>pod wynajem?</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Sprawdź potencjał lokalizacji zanim podpiszesz umowę. Analizujemy rynek, prognozujemy zwrot i zarządzamy od pierwszego dnia.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">
            Sprawdź potencjał lokalizacji →
          </a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 0px'}}>
<img alt="Nowoczesny budynek mieszkalny pod wynajem krótkoterminowy – BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774731853/ChatGPT_Image_28_mar_2026_22_04_04_lnbofv.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="hero-stats max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">2 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">apartamentów w zarządzaniu</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">250 000<span className="text-[#00c4c0]">+</span></div>
<div className="text-sm text-[#444444]">obsłużonych rezerwacji</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">4.8<span className="text-[#00c4c0]">/5</span></div>
<div className="text-sm text-[#444444]">średnia ocena gości we wszystkich miastach</div>
</div>
</div>
</div>
</div>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-14">
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Co dostaje inwestor od BookingHost?</h2>
<p className="text-[#444] max-w-xl mx-auto">Kompleksowe wsparcie – od wyboru lokalizacji po comiesięczny przelew.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-[#f8f8f8] rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-[#f0fcfb] flex items-center justify-center mb-5">
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Analiza potencjału przed zakupem</h3>
<p className="text-sm text-[#444] leading-relaxed">Powiedz nam o jakiej lokalizacji myślisz – powiemy ile możesz zarobić. Dane oparte na tysiącach rezerwacji z podobnych mieszkań w okolicy.</p>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-[#f0fcfb] flex items-center justify-center mb-5">
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M9 21V9"></path></svg>
</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przejęcie od pierwszego dnia</h3>
<p className="text-sm text-[#444] leading-relaxed">Po zakupie zajmujemy się wszystkim – zdjęcia, home staging, wystawienie na platformy, pierwsza rezerwacja. Ty nie musisz nic robić.</p>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-[#f0fcfb] flex items-center justify-center mb-5">
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Comiesięczne raporty i przelewy</h3>
<p className="text-sm text-[#444] leading-relaxed">Każdy miesiąc kończysz przelewem na konto i raportem z obłożenia, przychodów i wyników. Pełna przejrzystość bez niespodzianek.</p>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-[#f0fcfb] flex items-center justify-center mb-5">
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Dynamiczny pricing autorskim algorytmem</h3>
<p className="text-sm text-[#444] leading-relaxed">Nasz autorski algorytm cenowy aktualizuje ceny każdego dnia na podstawie popytu, konkurencji i sezonowości. Średnio +16% RevPAR vs ręczne ustawianie.</p>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-[#f0fcfb] flex items-center justify-center mb-5">
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Skalowanie portfela</h3>
<p className="text-sm text-[#444] leading-relaxed">Masz więcej mieszkań? Jeden opiekun, jeden panel, jedno rozliczenie. Preferencyjne warunki prowizji przy portfelu 3+ nieruchomości.</p>
</div>
<div className="bg-[#f8f8f8] rounded-2xl p-8">
<div className="w-12 h-12 rounded-xl bg-[#f0fcfb] flex items-center justify-center mb-5">
<svg fill="none" height="22" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Elastyczność wyjścia</h3>
<p className="text-sm text-[#444] leading-relaxed">Chcesz sprzedać mieszkanie? Możesz to zrobić w każdej chwili. Najem krótkoterminowy nie blokuje Cię – mieszkanie jest dostępne kiedy potrzebujesz.</p>
</div>
</div>
</div>
</section>

<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Nasza technologia</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Wyższa stopa zwrotu i pełna transparentność</h2>
<p className="text-[#444] max-w-xl mx-auto">Autorski algorytm cenowy maksymalizuje przychód z Twojej nieruchomości. Panel inwestora daje Ci wgląd w każdą złotówkę — z telefonu, w czasie rzeczywistym.</p>
</div>

<div className="tech-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '80px'}}>
<div>
<span style={{display: 'inline-block', background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px'}}>Autorski algorytm BookingHost</span>
<h3 style={{fontSize: '28px', fontWeight: '700', color: '#0f0f0f', lineHeight: '1.2', marginBottom: '16px'}}>Lepszy zwrot z inwestycji dzięki autorskiemu algorytmowi cenowemu</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.7', marginBottom: '24px'}}>Nasz autorski algorytm kilka razy dziennie analizuje popyt, eventy i ceny konkurencji — i ustawia optymalną cenę bez Twojego udziału. Wyższy przychód netto to bezpośrednio wyższa stopa zwrotu z zainwestowanego kapitału.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Średnio +37% przychodów vs najem długoterminowy</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Reaguje na eventy, sezonowość i konkurencję w czasie rzeczywistym</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Wyższe obłożenie = szybszy zwrot z zainwestowanego kapitału</span>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px'}}>
<div style={{background: 'white', borderRadius: '14px', padding: '16px', textAlign: 'center', border: '1px solid #ebebeb'}}>
<div style={{fontSize: '26px', fontWeight: '800', color: '#00c4c0'}}>+37%</div>
<div style={{fontSize: '11px', color: '#666', marginTop: '4px'}}>wyższy przychód</div>
</div>
<div style={{background: 'white', borderRadius: '14px', padding: '16px', textAlign: 'center', border: '1px solid #ebebeb'}}>
<div style={{fontSize: '26px', fontWeight: '800', color: '#00c4c0'}}>84%</div>
<div style={{fontSize: '11px', color: '#666', marginTop: '4px'}}>średnie obłożenie</div>
</div>
<div style={{background: 'white', borderRadius: '14px', padding: '16px', textAlign: 'center', border: '1px solid #ebebeb'}}>
<div style={{fontSize: '26px', fontWeight: '800', color: '#00c4c0'}}>10+</div>
<div style={{fontSize: '11px', color: '#666', marginTop: '4px'}}>portali rezerwacyjnych</div>
</div>
</div>
</div>
<div style={{borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', position: 'relative', aspectRatio: '4/3'}}>
<img alt="Autorski algorytm cenowy BookingHost – analiza danych" src="https://res.cloudinary.com/depa0audz/image/upload/v1774730526/math-example-bg_sr9fsi.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', opacity: '0.6'}}/>
</div>
</div>

<div style={{height: '1px', background: '#e0e0e0', marginBottom: '80px'}}></div>

<div className="tech-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center'}}>
<div style={{position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', aspectRatio: '4/3'}}>
<img alt="Panel inwestora BookingHost – przychody i stopa zwrotu" src="https://res.cloudinary.com/depa0audz/image/upload/v1774445245/chcce_aby_dokdnie_to_co_ci_wys_Nano_Banana_2_00805_jxuqjn.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%', opacity: '0.6'}}/>
<div style={{position: 'absolute', top: '20px', left: '20px', background: 'white', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
<div style={{fontSize: '11px', color: '#888', marginBottom: '4px'}}>Przychód · Czerwiec</div>
<div style={{fontSize: '22px', fontWeight: '800', color: '#0f0f0f'}}>5 840 zł</div>
<div style={{fontSize: '11px', color: '#00c4c0', fontWeight: '600', marginTop: '2px'}}>↑ +23% vs maj</div>
</div>
<div style={{position: 'absolute', bottom: '20px', right: '20px', background: 'white', borderRadius: '14px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)'}}>
<div style={{fontSize: '11px', color: '#888', marginBottom: '4px'}}>Obłożenie</div>
<div style={{fontSize: '22px', fontWeight: '800', color: '#0f0f0f'}}>84%</div>
<div style={{fontSize: '11px', color: '#444', marginTop: '2px'}}>Ostatnie 30 dni</div>
</div>
<div style={{position: 'absolute', top: '20px', right: '20px', background: '#1a2e35', borderRadius: '12px', padding: '10px 14px'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
<div style={{width: '6px', height: '6px', borderRadius: '50%', background: '#00c4c0'}}></div>
<span style={{fontSize: '11px', color: 'white', fontWeight: '600'}}>3 aktywne rezerwacje</span>
</div>
</div>
</div>
<div>
<span style={{display: 'inline-block', background: '#f0fcfb', color: '#00c4c0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.1em', padding: '5px 12px', borderRadius: '100px', marginBottom: '16px'}}>Panel inwestora</span>
<h3 style={{fontSize: '28px', fontWeight: '700', color: '#0f0f0f', lineHeight: '1.2', marginBottom: '16px'}}>Sprawdzasz wyniki<br/>swojej inwestycji w każdej chwili</h3>
<p style={{fontSize: '16px', color: '#444', lineHeight: '1.7', marginBottom: '24px'}}>Każda rezerwacja, każdy przelew, przychód miesięczny i roczny — wszystko widoczne w czasie rzeczywistym. Pełna transparentność rozliczeń bez żadnych niespodzianek.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Przychód, obłożenie i rezerwacje w czasie rzeczywistym</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Comiesięczne zestawienia i faktury online</span>
</div>
<div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
<div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#00c4c0', flexShrink: '0'}}></div>
<span style={{fontSize: '14px', color: '#333'}}>Dostępny z telefonu — zawsze wiesz ile zarabia Twoja nieruchomość</span>
</div>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00c4c0', color: 'white', fontWeight: '700', fontSize: '14px', padding: '14px 28px', borderRadius: '100px', textDecoration: 'none'}}>
          Sprawdź potencjał lokalizacji →
        </a>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Sprawdź potencjał lokalizacji przed zakupem</h2>
<p className="text-lg text-white/75 mb-10 max-w-xl mx-auto">Podaj nam adres – w 24h dostaniesz prognozę przychodów i zwrotu z inwestycji. Bezpłatnie, bez zobowiązań.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">Sprawdź potencjał – bezpłatnie →</a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<div className="page" id="pg-najem">

<div className="lg:h-[calc(100vh-80px)] flex flex-col overflow-hidden">
<div className="flex flex-col lg:flex-row flex-1 min-h-0">

<div className="flex items-center px-6 py-14 lg:py-0 lg:flex-none lg:w-[56%]" style={{paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: 'clamp(24px,4vw,48px)'}}>
<div className="w-full max-w-lg">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Zmień model najmu</span>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Najem długoterminowy<br/>kosztuje Cię więcej<br/>niż myślisz.</h1>
<p className="text-base lg:text-lg text-[#444444] leading-relaxed mb-8">Właściciele, którzy zmienili model, mają wyższe przychody, pełną kontrolę nad nieruchomością i spokój, którego najem długoterminowy nie jest w stanie zapewnić.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-8 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">
            Sprawdź ile możesz zyskać →
          </a>
<a className="text-[#444444] hover:text-[#00c4c0] text-sm flex items-center gap-2 transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div className="hidden lg:flex flex-none w-[44%] items-center justify-center p-8 pl-4">
<img alt="Właściciel sprawdzający przychody z najmu – BookingHost" className="w-full h-full object-cover object-center rounded-2xl" src="https://res.cloudinary.com/depa0audz/image/upload/v1774725617/ChatGPT_Image_28_mar_2026_20_20_07_imtntu.png"/>
</div>
</div>
</div>

<section className="py-20 bg-[#f8f8f8]">
<div className="max-w-5xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Dlaczego właściciele zmieniają model</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-5">Najem długoterminowy<br/>wygląda bezpiecznie.<br/>Ale czy naprawdę jest?</h2>
<p className="text-base text-[#444] leading-relaxed mb-4">Najem długoterminowy wydaje się prostszy i bezpieczniejszy. W rzeczywistości wiąże się z realnym ryzykiem: brak kontroli nad stanem mieszkania przez rok, problemy z lokatorami, których nie można łatwo eksmitować, i kilkumiesięczne przestoje przy każdej rotacji.</p>
</div>
<div className="space-y-3">
<div className="flex items-start gap-4 bg-[#fff8f8] rounded-2xl p-5 border border-[#fcc]">
<div className="w-9 h-9 rounded-xl bg-[#fef2f2] border border-[#fca5a5]/30 flex items-center justify-center flex-shrink-0">
<svg fill="none" height="16" stroke="#e53e3e" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<div>
<p className="text-sm font-bold text-[#0f0f0f] mb-1">Lokator nie płaci — i nic nie możesz zrobić</p>
<p className="text-xs text-[#0f0f0f] leading-relaxed">Postępowanie eksmisyjne w Polsce trwa 6–18 miesięcy. Przez cały ten czas nie masz przychodu, nie możesz wejść do własnego mieszkania i pokrywasz koszty z własnej kieszeni.</p>
</div>
</div>
<div className="flex items-start gap-4 bg-[#fff8f8] rounded-2xl p-5 border border-[#fcc]">
<div className="w-9 h-9 rounded-xl bg-[#fef2f2] border border-[#fca5a5]/30 flex items-center justify-center flex-shrink-0">
<svg fill="none" height="16" stroke="#e53e3e" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
</div>
<div>
<p className="text-sm font-bold text-[#0f0f0f] mb-1">Nie wiesz w jakim stanie jest Twoje mieszkanie</p>
<p className="text-xs text-[#0f0f0f] leading-relaxed">Przy najmie długoterminowym masz prawo do kontroli najwyżej raz w roku — za powiadomieniem. Zużycie odkłada się latami i wychodzi przy zdaniu kluczy, gdy koszty są już poważne.</p>
</div>
</div>
<div className="flex items-start gap-4 bg-[#fff8f8] rounded-2xl p-5 border border-[#fcc]">
<div className="w-9 h-9 rounded-xl bg-[#fef2f2] border border-[#fca5a5]/30 flex items-center justify-center flex-shrink-0">
<svg fill="none" height="16" stroke="#e53e3e" strokeLinecap="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<div>
<p className="text-sm font-bold text-[#0f0f0f] mb-1">Stały czynsz to złudzenie bezpieczeństwa</p>
<p className="text-xs text-[#0f0f0f] leading-relaxed">Przy każdej rotacji tracisz 1–2 miesiące na poszukiwanie nowego najemcy i odświeżenie mieszkania. Do tego remonty, spory o kaucję i ryzyko że następny lokator okaże się gorszy.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#f8f8f8]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Porównanie punkt po punkcie</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Który model naprawdę działa na Twoją korzyść?</h2>
</div>


<div className="hidden md:block">
<div className="grid grid-cols-3 gap-0 mb-1">
<div className="px-6 py-3"></div>
<div className="px-6 py-3 text-center bg-[#fff8f8] rounded-t-xl border-t border-x border-[#fcc]">
<p className="text-xs font-semibold text-[#c53030] uppercase tracking-wider">Najem długoterminowy</p>
</div>
<div className="px-6 py-3 text-center bg-[#1a2e35] rounded-t-xl">
<p className="text-xs font-semibold text-[#00c4c0] uppercase tracking-wider">Z BookingHost</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-[#ebebeb] shadow-sm divide-y divide-[#ebebeb]">
<div className="grid grid-cols-3 bg-white">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Przychód</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Stały miesięczny czynsz. Ograniczony sufitem rynkowym. Brak możliwości skorzystania na wysokim popycie.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Wyższy przychód</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Dynamiczne ceny wykorzystują weekendy, imprezy, targi i sezony. To samo mieszkanie zarabia znacznie więcej za noc.</p></div>
</div>
<div className="grid grid-cols-3 bg-[#fafafa]">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Stan mieszkania</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Widoczny dopiero przy przekazaniu — często po miesiącach lub latach. Zużycie kumuluje się niezauważone.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Codziennie monitorowane</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Profesjonalne sprzątanie po każdym gościu. Regularne inspekcje ze zdjęciami. Wszelkie uszkodzenia wykrywane natychmiast.</p></div>
</div>
<div className="grid grid-cols-3 bg-white">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Dostęp do mieszkania</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Brak dostępu przez całą umowę. Nie możesz wejść do własnej nieruchomości bez ryzyka konsekwencji prawnych.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Kiedy chcesz</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Zablokuj dowolny termin na pobyt prywatny, wizytę rodziny lub remont. Bez żadnych ograniczeń.</p></div>
</div>
<div className="grid grid-cols-3 bg-[#fafafa]">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Twoje zaangażowanie</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Każda awaria, spór czy opóźnienie spada na Ciebie — nawet w środku nocy. Szukasz hydraulika, mediujesz spory, ścigasz zaległości.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Zero</p><p className="text-xs text-[#0f0f0f] leading-relaxed">BookingHost zajmuje się wszystkim – ogłoszenia, ceny, zameldowania, sprzątanie, konserwacja, komunikacja.</p></div>
</div>
<div className="grid grid-cols-3 bg-white">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Pozycja prawna właściciela</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Polskie prawo mocno chroni najemców. Całe ryzyko ponosi właściciel.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Silna pozycja</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Gość który łamie zasady musi natychmiast opuścić mieszkanie. W najmie długim masz związane ręce przez miesiące lub lata.</p></div>
</div>
<div className="grid grid-cols-3 bg-[#fafafa]">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Wartość nieruchomości</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Bez regularnego nadzoru zużycie odkłada się latami. Koszty odtworzenia po zakończeniu najmu bywają znaczące.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Utrzymana i rosnąca</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Regularnie sprzątamy, naprawiamy i dbamy o każdy detal. Twoje mieszkanie przez lata wygląda jak nowe.</p></div>
</div>
<div className="grid grid-cols-3 bg-white">
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Ryzyko niepłacącego lokatora</p></div>
<div className="py-5 px-6 border-r border-[#ebebeb]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Eksmisja w Polsce trwa 6–18 miesięcy. Ogromny koszt finansowy i emocjonalny dla właściciela.</p></div>
<div className="py-5 px-6 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Zero ryzyka</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Goście zostają 2–7 nocy i płacą z góry. Żadnych niepłacących lokatorów, żadnych postępowań sądowych.</p></div>
</div>
</div>
</div>

<div className="md:hidden space-y-4">
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="py-2 px-4 text-center bg-[#fff8f8] rounded-xl border border-[#fcc]"><p className="text-xs font-semibold text-[#c53030] uppercase tracking-wider">Najem długi</p></div>
<div className="py-2 px-4 text-center bg-[#1a2e35] rounded-xl"><p className="text-xs font-semibold text-[#00c4c0] uppercase tracking-wider">Z BookingHost</p></div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Przychód</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Stały czynsz. Brak możliwości skorzystania na wysokim popycie.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Wyższy przychód</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Ceny rosną na weekendy, imprezy i sezony.</p></div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Stan mieszkania</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Widoczny dopiero przy zdaniu kluczy. Zużycie kumuluje się latami.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Codziennie monitorowane</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Sprzątanie i inspekcja po każdym gościu.</p></div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Dostęp do mieszkania</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Brak dostępu przez całą umowę.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Kiedy chcesz</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Zablokuj termin dla siebie lub rodziny w każdej chwili.</p></div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Twoje zaangażowanie</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Każda awaria i spór spada na Ciebie — nawet w nocy.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Zero</p><p className="text-xs text-[#0f0f0f] leading-relaxed">BookingHost obsługuje wszystko 24/7.</p></div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Pozycja prawna</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Prawo chroni lokatora. Masz związane ręce przez miesiące.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Silna pozycja</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Gość łamiący zasady musi natychmiast opuścić mieszkanie.</p></div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Wartość nieruchomości</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Zużycie odkłada się latami bez kontroli.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Utrzymana i rosnąca</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Regularnie dbamy o każdy detal. Mieszkanie wygląda jak nowe.</p></div>
</div>
</div>

<div className="bg-white rounded-2xl border border-[#ebebeb] overflow-hidden shadow-sm">
<div className="px-4 py-3 bg-[#f8f8f8] border-b border-[#ebebeb]"><p className="text-sm font-bold text-[#0f0f0f]">Ryzyko niepłacącego lokatora</p></div>
<div className="grid grid-cols-2 divide-x divide-[#ebebeb]">
<div className="p-4 bg-[#fff8f8]"><p className="text-xs text-[#0f0f0f] leading-relaxed">Eksmisja trwa 6–18 miesięcy. Ogromny koszt finansowy i emocjonalny.</p></div>
<div className="p-4 bg-[#f0fcfb]"><p className="text-xs font-semibold text-[#00c4c0] mb-1">Zero ryzyka</p><p className="text-xs text-[#0f0f0f] leading-relaxed">Goście płacą z góry. Żadnych niepłacących lokatorów.</p></div>
</div>
</div>
</div>
</div>
</section>

<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak zacząć</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Pierwsze kroki z BookingHost</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Ocena potencjału</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Dowiedz się ile może zarabiać Twoje mieszkanie — bezpłatnie i bez zobowiązań</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przygotowanie mieszkania</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Profesjonalna sesja zdjęciowa i przygotowanie oferty — wszystko po naszej stronie, bezpłatnie</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Publikacja mieszkania</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Publikujemy na Airbnb, Booking.com i 10+ portalach — algorytm dostosowuje ceny do sezonu, imprez i popytu</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Mieszkanie zarabia</h3>
<p className="text-sm text-[#0f0f0f] leading-relaxed">Goście się zameldowują, my obsługujemy wszystko 24/7 — Ty co miesiąc odbierasz przelew</p>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4">Masz mieszkanie które mogłoby zarabiać więcej?</h2>
<p className="text-lg text-white/75 mb-10">Dołącz do 2 000+ właścicieli. Bezpłatna wycena — odpowiadamy w 24h.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">
        Sprawdź swój zysk – bezpłatnie
      </a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<div className="page" id="pg-zapisz-sie">
<div className="min-h-screen bg-[#f8f8f8] flex flex-col">

<div className="bg-white border-b border-[#ebebeb] py-4 px-6 flex items-center justify-between">
<a className="flex items-center" href="#" onclick="showPage('home');return false;">
<svg height="32" style={{display: 'block'}} version="1.1" viewbox="0 0 74.3 13.2" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{clip-path:url(#SVGID_2_)}.st1{fill:#47afad}</style><defs><path d="M-50-175.6h173V99.1H-50z" id="SVGID_1_"></path></defs><clippath id="SVGID_2_"><use overflow="visible" xlink:href="#SVGID_1_"></use></clippath><g className="st0"><path className="st1" d="M.8 1h3.3c.4 0 .8 0 1.1.1.3 0 .7.2 1 .3.3.1.6.4.8.7.2.3.3.7.3 1.1 0 .4-.1.9-.4 1.2-.3.4-.7.6-1.1.7.3 0 .5.1.8.2.2.2.4.3.5.5.2.2.3.4.4.7.1.2.2.5.2.8 0 .4-.1.8-.3 1.2-.2.2-.5.5-.8.7-.3.2-.7.3-1.1.4-.4.1-.7.1-1.1.1H.8V1zm2 3.5h1.4c.1 0 .3 0 .4-.1.1 0 .3-.1.4-.2.1 0 .2-.1.3-.2.1-.1.1-.3.1-.4 0-.3-.1-.6-.4-.7-.2-.2-.3-.2-.5-.2H2.8v1.8zm0 3.6H5c.1 0 .3-.1.4-.2l.3-.3c.1-.1.1-.3.1-.5s0-.4-.2-.5c-.1-.1-.2-.2-.4-.3-.1 0-.3-.1-.5-.1H2.8v1.9zm5.4-1.4c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.9.4-1.9.4-2.7.1-.4-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1-.2-.4-.2-.8-.2-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1m5.4 0c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.8.3-1.8.3-2.6 0-.5-.1-.8-.3-1.2-.6-.3-.3-.5-.6-.7-1-.1-.4-.2-.8-.2-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1M22.9.4h1.8v5.7l2.1-2.4H29l-2.3 2.7 2.4 3.3h-2.3l-2.1-3v3h-1.8zm11 3.3h1.8v.8c.1-.1.2-.2.2-.4.1-.1.2-.2.4-.3.2-.1.3-.2.5-.2.2-.1.4-.1.6-.1.4 0 .8.1 1.1.2.3.1.5.3.7.6.2.3.3.6.3.9.1.4.1.7.1 1.1v3.3h-1.8V6.3c0-.2 0-.3-.1-.5-.1-.3-.5-.6-.8-.5-.2 0-.4 0-.6.1-.1.1-.3.2-.3.4-.1.2-.1.3-.2.5v3.6h-1.9V3.7zM47 9.2c.1.9-.2 1.9-.9 2.6-.7.6-1.7 1-2.6.9-.5 0-1.1-.1-1.6-.2s-1-.4-1.4-.7l1-1.5.9.6c.3.1.7.2 1 .2.5 0 .9-.1 1.2-.4.3-.3.4-.7.4-1.1V9c-.2.3-.5.5-.8.6-.3.1-.6.2-.9.2-.4 0-.8-.1-1.2-.2-.4-.1-.7-.4-.9-.6-.3-.3-.5-.6-.6-1-.3-.8-.3-1.6 0-2.4.1-.4.3-.7.5-1 .2-.3.5-.5.9-.7.4-.2.8-.3 1.2-.3.2 0 .5 0 .7.1.2.1.4.1.6.2.2.1.3.2.5.3l.3.3v-.8H47v5.5zm-4.6-2.5c0 .2 0 .4.1.6.1.2.2.3.3.5.1.1.3.2.5.3.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.3-.2.5-.3.1-.1.2-.3.3-.5.1-.4.1-.8 0-1.1-.2-.2-.3-.4-.4-.5-.1-.1-.3-.3-.5-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.3.2-.5.3-.1.1-.2.3-.3.5v.5"></path><path d="M48.3 1h1.9v3.3h3.7V1h2v8.7h-2V6h-3.7v3.7h-1.9zm8.6 5.7c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.8.3-1.8.3-2.6 0-.4-.1-.8-.4-1.1-.6-.3-.3-.5-.6-.7-1-.3-.4-.4-.8-.3-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1m8.9-1.2c-.2-.3-.6-.5-1-.5-.2 0-.3 0-.5.1-.1.1-.2.2-.2.4 0 .1.1.3.2.3.2.1.4.2.6.2l.8.2c.3.1.5.2.8.3.2.1.4.3.6.5 0 .3.1.6.1.9 0 .4-.1.7-.2 1-.2.2-.4.5-.7.6-.3.2-.6.3-.9.3-.3.1-.7.1-1 .1-.4 0-.9-.1-1.3-.2s-.8-.3-1.1-.6L65 7.9c.2.2.3.4.6.5.2.1.5.2.7.2.2 0 .4 0 .6-.1.2 0 .3-.2.3-.3 0-.2-.1-.3-.2-.4-.2-.1-.4-.2-.6-.2l-.8-.2c-.3-.1-.5-.2-.8-.3-.2-.1-.4-.3-.6-.5-.1-.3-.2-.6-.2-1 0-.3.1-.6.2-.9.1-.3.3-.5.6-.6.2-.2.5-.3.8-.4.3-.1.6-.1.9-.1.4 0 .8.1 1.2.2.4.1.7.3 1 .6l-1.1 1.1zm6.3-.3h-1.6v2.4c0 .1.1.2.1.4.1.1.2.2.3.2.2.1.3.1.5.1h.4c.1 0 .3-.1.4-.1v1.5c-.2.1-.4.1-.6.1h-.7c-.3 0-.6 0-.9-.1-.2-.1-.5-.2-.7-.3-.2-.1-.4-.3-.5-.6-.1-.3-.2-.6-.2-.8V5.2h-1.2V3.7h1.2V2h1.8v1.8h1.6l.1 1.4zM32.9 3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5"></path><path d="M32.2 3.8l.2 7h-2l.2-7z"></path></g></svg>
</a>
<a className="text-sm font-semibold text-[#0f0f0f] hover:text-[#00c4c0] transition-colors flex items-center gap-2" href="tel:221131400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
      22 113 14 00
    </a>
</div>

<div className="flex-1 flex items-center justify-center px-4 py-8">
<div className="w-full max-w-2xl">

<div className="text-center mb-8">

<div className="flex items-center justify-center gap-2 mt-4 mb-8">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-[#00c4c0] flex items-center justify-center text-white text-sm font-bold flex-shrink-0" id="zs-dot-1">✓</div>
<span className="text-xs font-semibold text-[#00c4c0] uppercase tracking-wide whitespace-nowrap">Twój apartament</span>
</div>
<div className="w-10 h-0.5 bg-[#00c4c0] flex-shrink-0" id="zs-line-1"></div>
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-[#00c4c0] flex items-center justify-center text-white text-sm font-bold flex-shrink-0" id="zs-dot-2">2</div>
<span className="text-xs font-semibold text-[#00c4c0] uppercase tracking-wide whitespace-nowrap" id="zs-label-2">Twój profil</span>
</div>
<div className="w-10 h-0.5 bg-[#ebebeb] flex-shrink-0" id="zs-line-2"></div>
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-full bg-[#ebebeb] flex items-center justify-center text-[#999] text-sm font-bold flex-shrink-0" id="zs-dot-3">3</div>
<span className="text-xs font-semibold text-[#999] uppercase tracking-wide whitespace-nowrap" id="zs-label-3">O Tobie</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-12 shadow-sm border border-[#ebebeb]" id="zs-step-2">
<h2 className="text-lg font-semibold text-[#0f0f0f] mb-1 text-center">Ile posiadasz mieszkań na wynajem?</h2>
<p className="text-sm text-[#444] text-center mb-6">Dopasujemy ofertę do Twojego portfela</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="zs-apartments" type="radio" value="1"/>
<div className="peer-checked:border-[#00c4c0] peer-checked:bg-[#f0fcfb] border-2 border-[#ebebeb] rounded-2xl p-5 text-center transition-all cursor-pointer hover:border-[#00c4c0]/40">
<svg className="mx-auto mb-3 text-[#00c4c0]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
<div className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide">Jedno</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="zs-apartments" type="radio" value="2"/>
<div className="peer-checked:border-[#00c4c0] peer-checked:bg-[#f0fcfb] border-2 border-[#ebebeb] rounded-2xl p-5 text-center transition-all cursor-pointer hover:border-[#00c4c0]/40">
<svg className="mx-auto mb-3 text-[#00c4c0]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><path d="M9 22V12h6v10"></path><path d="M15 5l6 4.5"></path></svg>
<div className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide">Dwa</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="zs-apartments" type="radio" value="3+"/>
<div className="peer-checked:border-[#00c4c0] peer-checked:bg-[#f0fcfb] border-2 border-[#ebebeb] rounded-2xl p-5 text-center transition-all cursor-pointer hover:border-[#00c4c0]/40">
<svg className="mx-auto mb-3 text-[#00c4c0]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36"><rect height="14" rx="2" width="20" x="2" y="7"></rect><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"></path><line x1="12" x2="12" y1="12" y2="16"></line><line x1="10" x2="14" y1="14" y2="14"></line></svg>
<div className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide">Więcej</div>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="zs-apartments" type="radio" value="planuje"/>
<div className="peer-checked:border-[#00c4c0] peer-checked:bg-[#f0fcfb] border-2 border-[#ebebeb] rounded-2xl p-5 text-center transition-all cursor-pointer hover:border-[#00c4c0]/40">
<svg className="mx-auto mb-3 text-[#00c4c0]" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
<div className="text-sm font-semibold text-[#0f0f0f] uppercase tracking-wide">Planuję zakup</div>
</div>
</label>
</div>
<button className="w-full bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 rounded-full transition-all text-sm shadow-lg shadow-[#00c4c0]/20" onclick="zsGoStep(3)">
          Dalej →
        </button>
<p className="text-center text-xs text-[#aaa] mt-3">Przechodząc dalej potwierdzasz, że przeczytałeś i akceptujesz <a className="underline" href="#">Regulamin</a></p>
</div>

<div className="bg-white rounded-3xl p-12 shadow-sm border border-[#ebebeb]" id="zs-step-3" style={{display: 'none'}}>
<h2 className="text-lg font-semibold text-[#0f0f0f] mb-6 text-center">Sprawdź ile zarobisz na swoim mieszkaniu</h2>
<div className="max-w-sm mx-auto space-y-4 mb-5">
<div>
<label className="block text-xs font-medium text-[#1a1a1a] mb-1.5">Imię</label>
<input className="w-full bg-[#f8f8f8] border border-[#ebebeb] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c4c0] focus:ring-1 focus:ring-[#00c4c0] transition-colors" placeholder="np. Marek" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#1a1a1a] mb-1.5">Numer telefonu</label>
<div className="flex w-full bg-[#f8f8f8] border border-[#ebebeb] rounded-xl overflow-hidden focus-within:border-[#00c4c0] focus-within:ring-1 focus-within:ring-[#00c4c0] transition-colors">
<div className="px-3 py-3 text-sm text-[#444] border-r border-[#ebebeb] flex-shrink-0 flex items-center">🇵🇱 +48</div>
<input className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none" placeholder="000 000 000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#1a1a1a] mb-1.5">E-mail</label>
<input className="w-full bg-[#f8f8f8] border border-[#ebebeb] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00c4c0] focus:ring-1 focus:ring-[#00c4c0] transition-colors" id="zs-email" placeholder="twoj@email.pl" type="email"/>
</div>
<label className="flex items-start gap-2 cursor-pointer">
<input checked="" className="mt-0.5 accent-[#00c4c0]" type="checkbox"/>
<span className="text-xs text-[#888]">Wyrażam zgodę na przetwarzanie podanych informacji w celach marketingowych</span>
</label>
</div>
<div className="max-w-sm mx-auto">
<p className="text-center text-xs text-[#888] mb-4">
<span className="text-[#f59e0b]">★★★★★</span> 4.8/5 · 1 800+ właścicieli · 10+ lat doświadczenia
        </p>
<button className="w-full bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 rounded-full transition-all text-sm shadow-lg shadow-[#00c4c0]/20 mb-3" id="zs-submit-btn" onclick="zsSubmit()">
          Sprawdź swój zysk – bezpłatnie →
        </button>
<button className="w-full text-xs text-[#888] hover:text-[#444] transition-colors py-1" onclick="zsGoStep(2)">← Wróć</button>
</div>
</div>

<div className="bg-white rounded-3xl p-14 shadow-sm border border-[#ebebeb] text-center" id="zs-success" style={{display: 'none'}}>
<div className="w-20 h-20 rounded-full bg-[#f0fcfb] flex items-center justify-center mx-auto mb-6">
<svg fill="none" height="40" stroke="#00c4c0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<h2 className="text-2xl font-semibold text-[#0f0f0f] mb-3">Dziękujemy!</h2>
<p className="text-base text-[#444] leading-relaxed mb-8 max-w-sm mx-auto">Twoje zgłoszenie zostało przyjęte. Nasz specjalista skontaktuje się z Tobą telefonicznie, aby omówić szczegóły.</p>
<a className="inline-flex items-center gap-2 text-sm text-[#444] hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
          22 113 14 00 · Pon–Pt 8:00–18:00
        </a>
</div>
</div>
</div>
</div>
</div>
<div className="page" id="pg-remote">

<div style={{height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>

<div className="hero-split" style={{display: 'flex', flex: '1', minHeight: '0'}}>

<div style={{flex: '0 0 56%', display: 'flex', alignItems: 'center', paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 24px))', paddingRight: '64px'}}>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-4">Właściciel z zagranicy</span>
<h1 className="text-5xl font-semibold tracking-tight text-[#0f0f0f] leading-[1.05] mb-5">Zarabiaj w Polsce,<br/>mieszkaj gdzie chcesz.</h1>
<p className="text-lg text-[#444444] leading-relaxed mb-8" style={{maxWidth: '480px'}}>Masz mieszkanie w Polsce ale mieszkasz za granicą? Zarządzamy za Ciebie w 100% zdalnie — przelew co miesiąc, bez jednej wizyty w Polsce.</p>
<div style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base inline-flex items-center gap-2" href="#" onclick="showPage('zapisz-sie');return false;">
            Sprawdź swój zysk – bezpłatnie →
          </a>
<a className="flex items-center gap-2 text-sm text-[#444444] hover:text-[#00c4c0] transition-colors" href="tel:221131400" style={{textDecoration: 'none'}}>
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
            Bezpłatna konsultacja · 22 113 14 00
          </a>
</div>
</div>
</div>

<div style={{flex: '0 0 44%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 48px 32px 0px'}}>
<img alt="Właścicielka sprawdzająca przychody z mieszkania będąc za granicą – BookingHost" src="https://res.cloudinary.com/depa0audz/image/upload/v1774731698/ChatGPT_Image_28_mar_2026_22_01_27_pdrrud.png" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '16px', transform: 'scale(0.85)', transformOrigin: 'center center'}}/>
</div>
</div>

<div style={{borderTop: '1px solid #ebebeb', background: '#ffffff', flexShrink: '0'}}>
<div className="hero-stats max-w-7xl mx-auto px-6 grid grid-cols-4 divide-x divide-[#ebebeb] py-12">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">100<span className="text-[#00c4c0]">%</span></div>
<div className="text-sm text-[#444444]">zdalne zarządzanie</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">24<span className="text-[#00c4c0]">/7</span></div>
<div className="text-sm text-[#444444]">dostęp do panelu online</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1"><span className="text-[#00c4c0]">+</span>37%</div>
<div className="text-sm text-[#444444]">średni wzrost przychodów właścicieli</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-1">0</div>
<div className="text-sm text-[#444444]">wymaganych wizyt na miejscu</div>
</div>
</div>
</div>
</div>
<section style={{padding: '80px 0', background: '#fff'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 24px'}}>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center'}}>
<div>
<div style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fcfb', borderRadius: '20px', padding: '6px 16px', marginBottom: '20px', fontSize: '13px', fontWeight: '600', color: '#00c4c0'}}>Dla kogo?</div>
<h2 style={{fontFamily: '\'Inter\',sans-serif', fontSize: 'clamp(24px,2.8vw,34px)', fontWeight: '600', color: '#0f0f0f', marginBottom: '20px', lineHeight: '1.2'}}>Twoje mieszkanie pracuje, Ty nie musisz</h2>
<div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
<div style={{display: 'flex', gap: '14px', padding: '18px', background: '#f8f8f8', borderRadius: '12px', alignItems: 'flex-start'}}>
<div style={{width: '36px', height: '36px', background: '#f0fcfb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>
</div>
<div><div style={{fontSize: '15px', fontWeight: '700', color: '#0f0f0f', marginBottom: '4px'}}>Polacy za granicą</div><div style={{fontSize: '14px', color: '#444', lineHeight: '1.6'}}>Masz mieszkanie w Polsce ale pracujesz w UK, Niemczech, Holandii? Zarządzamy za Ciebie – pełna transparentność, comiesięczny przelew, zero stresu.</div></div>
</div>
<div style={{display: 'flex', gap: '14px', padding: '18px', background: '#f8f8f8', borderRadius: '12px', alignItems: 'flex-start'}}>
<div style={{width: '36px', height: '36px', background: '#f0fcfb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div><div style={{fontSize: '15px', fontWeight: '700', color: '#0f0f0f', marginBottom: '4px'}}>Polacy pracujący sezonowo za granicą</div><div style={{fontSize: '14px', color: '#444', lineHeight: '1.6'}}>Wyjeżdżasz do pracy na kilka miesięcy? Twoje mieszkanie w Polsce zarabia kiedy Ty jesteś za granicą. Panel właściciela masz zawsze w kieszeni.</div></div>
</div>
<div style={{display: 'flex', gap: '14px', padding: '18px', background: '#f8f8f8', borderRadius: '12px', alignItems: 'flex-start'}}>
<div style={{width: '36px', height: '36px', background: '#f0fcfb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0'}}>
<svg fill="none" height="18" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<div><div style={{fontSize: '15px', fontWeight: '700', color: '#0f0f0f', marginBottom: '4px'}}>Właściciele z odziedziczoną nieruchomością</div><div style={{fontSize: '14px', color: '#444', lineHeight: '1.6'}}>Masz mieszkanie po rodzicach w Polsce a sam mieszkasz za granicą? Zamiast sprzedawać — niech zarabia. Zajmiemy się wszystkim.</div></div>
</div>
</div>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#00c4c0', color: 'white', fontWeight: '700', fontSize: '14px', padding: '14px 28px', borderRadius: '100px', textDecoration: 'none', marginTop: '24px'}}>
          Sprawdź swój zysk – bezpłatnie →
        </a>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
<div style={{background: '#f8f8f8', borderRadius: '20px', padding: '28px'}}>
<div style={{fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '.08em', color: '#00c4c0', marginBottom: '14px'}}>Co dostajesz</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><svg fill="#00c4c0" height="16" viewbox="0 0 24 24" width="16"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span style={{fontSize: '14px', color: '#333'}}>Panel właściciela 24/7 – rezerwacje, przychody, faktury</span></div>
<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><svg fill="#00c4c0" height="16" viewbox="0 0 24 24" width="16"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span style={{fontSize: '14px', color: '#333'}}>Comiesięczny przelew i raport finansowy</span></div>
<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><svg fill="#00c4c0" height="16" viewbox="0 0 24 24" width="16"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span style={{fontSize: '14px', color: '#333'}}>Zdjęcia stanu mieszkania po każdym gościu</span></div>
<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><svg fill="#00c4c0" height="16" viewbox="0 0 24 24" width="16"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span style={{fontSize: '14px', color: '#333'}}>Dedykowany opiekun – jeden kontakt do wszystkiego</span></div>
<div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><svg fill="#00c4c0" height="16" viewbox="0 0 24 24" width="16"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span style={{fontSize: '14px', color: '#333'}}>Możliwość rezerwacji własnego pobytu kiedy wrócisz</span></div>
</div>
</div>
<div style={{background: '#f0fcfb', borderRadius: '16px', padding: '20px', borderLeft: '3px solid #00c4c0'}}>
<p style={{fontSize: '13px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '10px', fontStyle: 'italic'}}>„Moje mieszkanie w Łodzi zarabia samo. Widzę każdą rezerwację w telefonie, przelew przychodzi co miesiąc. Nie musiałem ani razu lecieć do Polski przez ostatnie 2 lata."</p>
<div style={{fontSize: '12px', fontWeight: '600', color: '#00c4c0'}}>Tomasz K. · Właściciel, Łódź · Mieszka w UK</div>
</div>
<div style={{background: '#f0fcfb', borderRadius: '16px', padding: '20px', borderLeft: '3px solid #00c4c0'}}>
<p style={{fontSize: '13px', color: '#1a1a1a', lineHeight: '1.6', marginBottom: '10px', fontStyle: 'italic'}}>„Mieszkam w Niemczech, nie miałam pomysłu co zrobić z mieszkaniem w Krakowie. BookingHost zajął się wszystkim — umowa przez e-mail, pierwsze rezerwacje po 2 tygodniach."</p>
<div style={{fontSize: '12px', fontWeight: '600', color: '#00c4c0'}}>Karolina W. · Właścicielka, Kraków · Mieszka w Niemczech</div>
</div>
</div>
</div>
</div>
</section>
<section style={{background: '#ffffff', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Co robimy</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f] mb-3">Przejmujemy wszystko<br/>Ty tylko odbierasz przelewy</h2>
<p className="text-[#888] text-sm mt-2">Kompleksowe zarządzanie od A do Z</p>
</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '20px'}}>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6z"></path></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Obsługa gości 24/7</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Odpowiadamy na wiadomości, przyjmujemy rezerwacje i rozwiązujemy problemy gości — o każdej porze dnia i nocy. Ty nie odbierasz żadnych telefonów.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Sprzątanie po każdej rezerwacji</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Profesjonalne sprzątanie, świeża pościel i ręczniki po każdym wymeldowaniu. Mieszkanie zawsze gotowe na kolejnego gościa.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="8" rx="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Publikacja na 10+ portalach</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Airbnb, Booking.com, Expedia i inne — Twoje mieszkanie widoczne wszędzie tam gdzie są goście. Więcej oczu, więcej rezerwacji.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Bezpłatna sesja zdjęciowa</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Organizujemy profesjonalnego fotografa i przygotowujemy mieszkanie do zdjęć. Koszt po naszej stronie — dobre zdjęcia to więcej rezerwacji i wyższa cena.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Weryfikacja stanu mieszkania</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Po każdym wymeldowaniu sprawdzamy stan mieszkania i dokumentujemy go fotograficznie. Masz pewność, że Twoje mieszkanie jest zawsze pod kontrolą.</p>
</div>
<div style={{background: 'white', borderRadius: '20px', padding: '28px', border: '1px solid #ebebeb'}}>
<div style={{width: '44px', height: '44px', background: '#f0fcfb', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
<svg fill="none" height="20" stroke="#00c4c0" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><line x1="12" x2="12" y1="1" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>
</div>
<h3 style={{fontSize: '16px', fontWeight: '700', color: '#0f0f0f', marginBottom: '8px'}}>Rozliczenia i faktury</h3>
<p style={{fontSize: '14px', color: '#555', lineHeight: '1.6'}}>Co miesiąc przelew na konto i szczegółowe zestawienie przychodów. Wszystkie faktury i raporty dostępne w Panelu Właściciela.</p>
</div>
</div>
<div style={{textAlign: 'center', marginTop: '12px'}}>
<a href="#" onclick="showPage('uslugi');return false;" style={{display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '600', color: '#00c4c0', textDecoration: 'none'}}>
        Zobacz pełny zakres usług
        <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14"><polyline points="9 18 15 12 9 6"></polyline></svg>
</a>
</div>
</div>
</section>
<section style={{background: '#f8f8f8', borderBottom: '1px solid #ebebeb', padding: '80px 0'}}>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-14">
<span className="text-xs font-medium uppercase tracking-widest text-[#00c4c0] block mb-3">Jak to działa</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#0f0f0f]">Jak zacząć — bez wychodzenia z domu</h2>
<p className="text-[#888] text-sm mt-3">Żadnych wizyt w Polsce, żadnej papierologii na miejscu. Wszystko przez internet.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 steps-grid">
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">1</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Kontakt i umowa online</h3>
<p className="text-sm text-[#444] leading-relaxed">Rozmawiamy przez telefon. Umowę podpisujesz elektronicznie — bez wychodzenia z domu.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">2</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">My przygotowujemy mieszkanie</h3>
<p className="text-sm text-[#444] leading-relaxed">Sesja zdjęciowa, home staging, wystawienie na Airbnb i Booking.com — wszystko po naszej stronie.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">3</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Goście, sprzątanie, obsługa</h3>
<p className="text-sm text-[#444] leading-relaxed">Zajmujemy się wszystkim 24/7. Ty widzisz każdą rezerwację w panelu — z telefonu, z każdego miejsca na świecie.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-[#00c4c0] text-white font-bold text-xl flex items-center justify-center mx-auto mb-5">4</div>
<h3 className="text-base font-semibold text-[#0f0f0f] mb-3">Przelew co miesiąc</h3>
<p className="text-sm text-[#444] leading-relaxed">Każdy miesiąc kończy się przelewem na Twoje konto i raportem przychodów. Pełna przejrzystość, zero niespodzianek.</p>
</div>
</div>
</div>
</section>
<section className="py-20 text-center" style={{background: 'linear-gradient(135deg,#1a2e35 0%,#2a6678 60%,#00c4c0 100%)'}}>
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-4">Zarabiaj z Polski, gdziekolwiek jesteś</h2>
<p className="text-white/65 mb-8">Zadzwoń lub napisz — oddzwonimy w 2 godziny. Całą resztą zajmiemy się my.</p>
<div style={{display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap'}}>
<a className="bg-[#00c4c0] hover:bg-[#00b0ac] text-white font-semibold py-4 px-10 rounded-full transition-all text-base shadow-lg shadow-[#00c4c0]/20" href="#" onclick="showPage('zapisz-sie');return false;">
        Sprawdź swój zysk – bezpłatnie →
      </a>
<a className="flex items-center gap-2 text-white font-medium text-base hover:text-[#00c4c0] transition-colors" href="tel:221131400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 9.84 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path></svg>
        22 113 14 00
      </a>
</div>
<p className="text-sm text-white/40 mt-6">Oddzwaniamy w 2 godziny · Pon–Pt 8:00–18:00</p>
</div>
</section>
</div>
<footer className="bg-white border-t border-[#ebebeb] pt-16 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

<div>
<a className="block mb-5" href="#" onclick="showPage('home');return false;">
<svg height="32" style={{display: 'block'}} version="1.1" viewbox="0 0 74.3 13.2" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{clip-path:url(#SVGID_ft_2_)}.st1{fill:#47afad}</style><defs><path d="M-50-175.6h173V99.1H-50z" id="SVGID_ft_1_"></path></defs><clippath id="SVGID_ft_2_"><use overflow="visible" xlink:href="#SVGID_ft_1_"></use></clippath><g className="st0"><path className="st1" d="M.8 1h3.3c.4 0 .8 0 1.1.1.3 0 .7.2 1 .3.3.1.6.4.8.7.2.3.3.7.3 1.1 0 .4-.1.9-.4 1.2-.3.4-.7.6-1.1.7.3 0 .5.1.8.2.2.2.4.3.5.5.2.2.3.4.4.7.1.2.2.5.2.8 0 .4-.1.8-.3 1.2-.2.2-.5.5-.8.7-.3.2-.7.3-1.1.4-.4.1-.7.1-1.1.1H.8V1zm2 3.5h1.4c.1 0 .3 0 .4-.1.1 0 .3-.1.4-.2.1 0 .2-.1.3-.2.1-.1.1-.3.1-.4 0-.3-.1-.6-.4-.7-.2-.2-.3-.2-.5-.2H2.8v1.8zm0 3.6H5c.1 0 .3-.1.4-.2l.3-.3c.1-.1.1-.3.1-.5s0-.4-.2-.5c-.1-.1-.2-.2-.4-.3-.1 0-.3-.1-.5-.1H2.8v1.9zm5.4-1.4c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.9.4-1.9.4-2.7.1-.4-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1-.2-.4-.2-.8-.2-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1m5.4 0c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.8.3-1.8.3-2.6 0-.5-.1-.8-.3-1.2-.6-.3-.3-.5-.6-.7-1-.1-.4-.2-.8-.2-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1M22.9.4h1.8v5.7l2.1-2.4H29l-2.3 2.7 2.4 3.3h-2.3l-2.1-3v3h-1.8zm11 3.3h1.8v.8c.1-.1.2-.2.2-.4.1-.1.2-.2.4-.3.2-.1.3-.2.5-.2.2-.1.4-.1.6-.1.4 0 .8.1 1.1.2.3.1.5.3.7.6.2.3.3.6.3.9.1.4.1.7.1 1.1v3.3h-1.8V6.3c0-.2 0-.3-.1-.5-.1-.3-.5-.6-.8-.5-.2 0-.4 0-.6.1-.1.1-.3.2-.3.4-.1.2-.1.3-.2.5v3.6h-1.9V3.7zM47 9.2c.1.9-.2 1.9-.9 2.6-.7.6-1.7 1-2.6.9-.5 0-1.1-.1-1.6-.2s-1-.4-1.4-.7l1-1.5.9.6c.3.1.7.2 1 .2.5 0 .9-.1 1.2-.4.3-.3.4-.7.4-1.1V9c-.2.3-.5.5-.8.6-.3.1-.6.2-.9.2-.4 0-.8-.1-1.2-.2-.4-.1-.7-.4-.9-.6-.3-.3-.5-.6-.6-1-.3-.8-.3-1.6 0-2.4.1-.4.3-.7.5-1 .2-.3.5-.5.9-.7.4-.2.8-.3 1.2-.3.2 0 .5 0 .7.1.2.1.4.1.6.2.2.1.3.2.5.3l.3.3v-.8H47v5.5zm-4.6-2.5c0 .2 0 .4.1.6.1.2.2.3.3.5.1.1.3.2.5.3.2.1.4.1.6.1.2 0 .4 0 .6-.1.2-.1.3-.2.5-.3.1-.1.2-.3.3-.5.1-.4.1-.8 0-1.1-.2-.2-.3-.4-.4-.5-.1-.1-.3-.3-.5-.3-.2-.1-.4-.1-.6-.1-.2 0-.4 0-.6.1-.2.1-.3.2-.5.3-.1.1-.2.3-.3.5v.5"></path><path d="M48.3 1h1.9v3.3h3.7V1h2v8.7h-2V6h-3.7v3.7h-1.9zm8.6 5.7c0-.4.1-.9.3-1.3.2-.4.4-.7.7-1 .3-.3.7-.5 1.1-.6.8-.3 1.8-.3 2.6 0 .4.1.8.4 1.1.6.3.3.5.6.7 1 .3.8.3 1.8 0 2.6-.2.4-.4.7-.7 1-.3.3-.7.5-1.1.6-.8.3-1.8.3-2.6 0-.4-.1-.8-.4-1.1-.6-.3-.3-.5-.6-.7-1-.3-.4-.4-.8-.3-1.3m1.8 0c0 .4.1.8.4 1.1.6.6 1.6.6 2.2 0 .5-.6.5-1.6 0-2.2-.6-.6-1.6-.6-2.2 0-.3.3-.4.7-.4 1.1m8.9-1.2c-.2-.3-.6-.5-1-.5-.2 0-.3 0-.5.1-.1.1-.2.2-.2.4 0 .1.1.3.2.3.2.1.4.2.6.2l.8.2c.3.1.5.2.8.3.2.1.4.3.6.5 0 .3.1.6.1.9 0 .4-.1.7-.2 1-.2.2-.4.5-.7.6-.3.2-.6.3-.9.3-.3.1-.7.1-1 .1-.4 0-.9-.1-1.3-.2s-.8-.3-1.1-.6L65 7.9c.2.2.3.4.6.5.2.1.5.2.7.2.2 0 .4 0 .6-.1.2 0 .3-.2.3-.3 0-.2-.1-.3-.2-.4-.2-.1-.4-.2-.6-.2l-.8-.2c-.3-.1-.5-.2-.8-.3-.2-.1-.4-.3-.6-.5-.1-.3-.2-.6-.2-1 0-.3.1-.6.2-.9.1-.3.3-.5.6-.6.2-.2.5-.3.8-.4.3-.1.6-.1.9-.1.4 0 .8.1 1.2.2.4.1.7.3 1 .6l-1.1 1.1zm6.3-.3h-1.6v2.4c0 .1.1.2.1.4.1.1.2.2.3.2.2.1.3.1.5.1h.4c.1 0 .3-.1.4-.1v1.5c-.2.1-.4.1-.6.1h-.7c-.3 0-.6 0-.9-.1-.2-.1-.5-.2-.7-.3-.2-.1-.4-.3-.5-.6-.1-.3-.2-.6-.2-.8V5.2h-1.2V3.7h1.2V2h1.8v1.8h1.6l.1 1.4zM32.9 3c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5"></path><path d="M32.2 3.8l.2 7h-2l.2-7z"></path></g></svg>
</a>
<p className="text-sm text-[#222222] leading-relaxed mb-5">Kompleksowe zarządzanie najmem krótkoterminowym. 2 000+ apartamentów w 15 miastach Polski.</p>
<a className="flex items-center gap-2 text-sm font-medium text-[#0f0f0f] hover:text-[#00c4c0] transition-colors mb-2" href="tel:221131400"><iconify-icon icon="solar:phone-linear"></iconify-icon> 22 113 14 00</a>
<a className="flex items-center gap-2 text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="/cdn-cgi/l/email-protection#422b2c242d02202d2d292b2c252a2d31366c212d2f"><iconify-icon icon="solar:letter-linear"></iconify-icon> <span className="__cf_email__" data-cfemail="8ae3e4ece5cae8e5e5e1e3e4ede2e5f9fea4e9e5e7">[email protected]</span></a>
</div>

<div>
<h4 className="text-xs font-semibold text-[#0f0f0f] uppercase tracking-wider mb-5">Nasze rozwiązania</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('najem');return false;">Zmiana modelu najmu</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('inwestor');return false;">Dla inwestorów</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('remote');return false;">Właściciel z zagranicy</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('deweloperzy');return false;">Dla deweloperów</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-[#0f0f0f] uppercase tracking-wider mb-5">Dla właściciela</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="https://panel.bookinghost.com" target="_blank">Panel właściciela</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('faq');return false;">FAQ</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('blog');return false;">Blog</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('kontakt');return false;">Kontakt</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-[#0f0f0f] uppercase tracking-wider mb-5">Dla gości</h4>
<ul className="space-y-3 mb-5">
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="https://www.stay.bookinghost.com/" target="_blank">Zarezerwuj pobyt</a></li>
</ul>
<a className="flex items-center gap-2 text-sm font-medium text-[#0f0f0f] hover:text-[#00c4c0] transition-colors mb-2" href="tel:221141414"><iconify-icon icon="solar:phone-linear"></iconify-icon> 22 114 14 14</a>
<a className="flex items-center gap-2 text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="/cdn-cgi/l/email-protection#5d2f382e382f2b3c293432332e1d3f32323634333a35322e29733e3230"><iconify-icon icon="solar:letter-linear"></iconify-icon> <span className="__cf_email__" data-cfemail="fa889f899f888c9b8e93959489ba9895959193949d9295898ed4999597">[email protected]</span></a>
</div>

<div>
<h4 className="text-xs font-semibold text-[#0f0f0f] uppercase tracking-wider mb-5">
<a className="hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('lokalizacje');return false;">Obsługiwane miasta</a>
</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('warszawa');return false;">Warszawa</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('krakow');return false;">Kraków</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('wroclaw');return false;">Wrocław</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('gdansk');return false;">Gdańsk</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('poznan');return false;">Poznań</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('lodz');return false;">Łódź</a></li>
<li><a className="text-sm text-[#222222] hover:text-[#00c4c0] transition-colors" href="#" onclick="showPage('lokalizacje');return false;">Inne miasta →</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#ebebeb] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#222222]">© 2026 BookingHost Sp. z o.o. · ul. Nakielska 3, 01-106 Warszawa · NIP: 7010556748</p>
</div>
</div>
</footer>






<div id="sticky-cta" style={{display: 'none', position: 'fixed', bottom: '0', left: '0', right: '0', zIndex: '999', background: 'white', borderTop: '1px solid #ebebeb', padding: '12px 16px', boxShadow: '0 -4px 20px rgba(0,0,0,0.1)'}}>
<a href="#" onclick="showPage('zapisz-sie');return false;" style={{display: 'block', width: '100%', background: '#00c4c0', color: 'white', fontWeight: '700', fontSize: '15px', padding: '14px', borderRadius: '100px', textAlign: 'center', textDecoration: 'none'}}>
    Sprawdź</a></div>
    </>
  );
}
