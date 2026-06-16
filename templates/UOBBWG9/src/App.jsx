import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Lucide Icons
lucide.createIcons();

// ParticlesJS
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#14b8a6" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": false },
    "move": { "speed": 1 }
  },
  "interactivity": { "events": { "onhover": { "enable": true, "mode": "repulse" } } }
});

// IntersectionObserver for fade-in
const observer = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}})});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// Charts
const expCtx = document.getElementById('expChart').getContext('2d');
new Chart(expCtx,{
  type:'doughnut',
  data:{
    labels:['電商 & 品牌','MarTech','ESG','AI & OMO'],
    datasets:[{data:[40,25,20,15],backgroundColor:['#14b8a6','#0ea5e9','#f97316','#e11d48'],borderWidth:0}]
  },
  options:{plugins:{legend:{labels:{color:'#fafafa'}}}}
});

const roadmapCtx = document.getElementById('roadmapChart').getContext('2d');
new Chart(roadmapCtx,{
  type:'bar',
  data:{
    labels:['2023','2024','2025','2026'],
    datasets:[{label:'累計輔導企業數',data:[80,150,230,320],backgroundColor:'#14b8a6'}]
  },
  options:{
    scales:{
      x:{ticks:{color:'#fafafa'}},
      y:{ticks:{color:'#fafafa'},beginAtZero:true}
    },
    plugins:{legend:{display:false}}
  }
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10" id="particles-js"></div>

<header className="sticky top-0 z-20 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<h1 className="text-xl font-semibold tracking-tight text-white">Marres</h1>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-teal-400" href="#about">關於我們</a>
<a className="hover:text-teal-400" href="#services">服務</a>
<a className="hover:text-teal-400" href="#advantage">優勢</a>
<a className="hover:text-teal-400" href="#vision">願景</a>
</nav>
</div>
</header>

<section className="pt-28 pb-32 px-6">
<div className="max-w-4xl mx-auto text-center fade-in">
<p className="text-teal-400 text-sm uppercase tracking-widest mb-4">顧問 × 科技 × 永續</p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">以<span className="text-teal-400"> MarTech </span>驅動成長，<br className="hidden md:block"/>以<span className="text-teal-400"> ESG </span>實踐責任</h2>
<p className="text-lg text-neutral-400">專注數位轉型、OMO全通路與永續策略，為中小企業打造營收成長飛輪。</p>
<a className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-sm font-medium rounded-lg shadow-md shadow-teal-500/30 transition" href="#contact">
<span>聯絡我們</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<div className="border-t border-white/10 mx-6"></div>

<section className="py-24 px-6" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
<div className="fade-in">
<h3 className="text-2xl font-semibold tracking-tight mb-4">公司概述</h3>
<p className="text-neutral-400 leading-7">Marres（墨思）是一家專精於「數位轉型 × ESG永續 × OMO全通路零售」的顧問型企業，累積 110＋ 產業品牌輔導案例，跨足 Google、Apple、可口可樂等國際品牌，協助企業強化競爭力與永續能力。</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400" data-lucide="check-circle"></i>
<span>20年以上品牌與電商經驗</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400" data-lucide="check-circle"></i>
<span>ESG管理師、ISO查證主任、Google認證</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-400" data-lucide="check-circle"></i>
<span>跨域團隊：PChome・TVBS・阿里巴巴・UCLA</span>
</li>
</ul>
</div>
<div className="fade-in">
<canvas height="280" id="expChart"></canvas>
</div>
</div>
</section>

<div className="border-t border-white/10 mx-6"></div>

<section className="py-24 px-6" id="services">
<div className="max-w-6xl mx-auto fade-in">
<h3 className="text-2xl font-semibold tracking-tight text-center mb-14">服務範圍</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="group border border-white/10 p-8 rounded-xl hover:border-teal-400 transition">
<i className="w-6 h-6 text-teal-400 mb-4" data-lucide="shopping-bag"></i>
<h4 className="font-medium mb-2">品牌 OMO 轉型</h4>
<p className="text-neutral-400 text-sm leading-6">串連線上線下銷售，導入POS、ERP、CRM 打造全通路體驗。</p>
</div>
<div className="group border border-white/10 p-8 rounded-xl hover:border-teal-400 transition">
<i className="w-6 h-6 text-teal-400 mb-4" data-lucide="leaf"></i>
<h4 className="font-medium mb-2">ESG 碳盤查</h4>
<p className="text-neutral-400 text-sm leading-6">提供碳盤查、永續報告與行動路徑設計，落實企業責任。</p>
</div>
<div className="group border border-white/10 p-8 rounded-xl hover:border-teal-400 transition">
<i className="w-6 h-6 text-teal-400 mb-4" data-lucide="settings"></i>
<h4 className="font-medium mb-2">MarTech &amp; CRM</h4>
<p className="text-neutral-400 text-sm leading-6">整合 CDP、行銷自動化、會員管理，驅動精準成長。</p>
</div>
<div className="group border border-white/10 p-8 rounded-xl hover:border-teal-400 transition">
<i className="w-6 h-6 text-teal-400 mb-4" data-lucide="sparkles"></i>
<h4 className="font-medium mb-2">AI 行銷工具</h4>
<p className="text-neutral-400 text-sm leading-6">導入 AI 內容生成與營運優化工具，提升效率。</p>
</div>
<div className="group border border-white/10 p-8 rounded-xl hover:border-teal-400 transition">
<i className="w-6 h-6 text-teal-400 mb-4" data-lucide="clipboard-list"></i>
<h4 className="font-medium mb-2">成長 10 堂課</h4>
<p className="text-neutral-400 text-sm leading-6">顧問陪跑與實務課程，打造可複製營收飛輪。</p>
</div>
<div className="group border border-white/10 p-8 rounded-xl hover:border-teal-400 transition">
<i className="w-6 h-6 text-teal-400 mb-4" data-lucide="bar-chart-3"></i>
<h4 className="font-medium mb-2">營收模型 &amp; 補助</h4>
<p className="text-neutral-400 text-sm leading-6">設計營收模型並協助政府補助申請，加速轉型。</p>
</div>
</div>
</div>
</section>

<div className="border-t border-white/10 mx-6"></div>

<section className="py-24 px-6" id="advantage">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
<div className="fade-in">
<h3 className="text-2xl font-semibold tracking-tight mb-6">競爭優勢</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="users"></i>
<div>
<h5 className="font-medium">跨域實戰專家</h5>
<p className="text-neutral-400 text-sm">團隊來自電商、媒體、製造與學術，兼具策略與落地能力。</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="layers"></i>
<div>
<h5 className="font-medium">一站式整合</h5>
<p className="text-neutral-400 text-sm">行銷、ESG、MarTech、AI、POS 一體化，降低溝通成本。</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="package"></i>
<div>
<h5 className="font-medium">模組化產品組合</h5>
<p className="text-neutral-400 text-sm">按需選購、快速導入，縮短啟動時間。</p>
</div>
</li>
<li className="flex gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="trending-up"></i>
<div>
<h5 className="font-medium">導入成效顯著</h5>
<p className="text-neutral-400 text-sm">多數客戶營收倍增或數位資產大幅提升。</p>
</div>
</li>
</ul>
</div>
<div className="fade-in">
<h3 className="text-2xl font-semibold tracking-tight mb-6">目標客群</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="factory"></i>
<p>成長型中小企業</p>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="store"></i>
<p>通路品牌主</p>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="settings-2"></i>
<p>傳產製造業</p>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-teal-400" data-lucide="rocket"></i>
<p>初創品牌／二代接班</p>
</div>
</div>
</div>
</div>
</section>

<div className="border-t border-white/10 mx-6"></div>

<section className="py-24 px-6" id="vision">
<div className="max-w-4xl mx-auto text-center fade-in">
<h3 className="text-2xl font-semibold tracking-tight mb-6">未來展望</h3>
<p className="text-neutral-400 leading-7 mb-10">持續深化 OMO＋ESG 雙軸策略，推動「顧問服務產品化」與「商業模組平台化」，三年內輔導 300 家以上中小企業，佈局新南向與東南亞市場，成為品牌顧問 SaaS 化先鋒。</p>
<canvas height="220" id="roadmapChart"></canvas>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 fade-in" id="contact">
<div>
<h4 className="text-lg font-medium mb-2">Marres 墨思顧問</h4>
<p className="text-neutral-400 text-sm">© 2023 Marres. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="hover:text-teal-400" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-teal-400" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-teal-400" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>



    </>
  );
}
