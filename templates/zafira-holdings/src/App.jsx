import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function gerarCrescimento(inicial, dias, taxa) {
  let valores = [inicial];
  for (let i = 1; i <= dias; i++) valores.push(valores[i-1] * (1 + taxa));
  return valores;
}

const dias20 = Array.from({length: 21}, (_, i) => i);
const dias260 = Array.from({length: 261}, (_, i) => i);
const data10M20 = gerarCrescimento(10000000, 20, 0.01);
const data10M260 = gerarCrescimento(10000000, 260, 0.01);

new Chart(document.getElementById('chart10M'), {
  type: 'line',
  data: { labels: dias20, datasets: [{ label: '¥10,000,000 — 1%/日（20営業日複利）', data: data10M20, borderWidth: 3, borderColor: '#0048FF', fill: false }] },
  options: { responsive: true, plugins: { legend: { display: false } } }
});
new Chart(document.getElementById('chart10MY'), {
  type: 'line',
  data: { labels: dias260, datasets: [{ label: '¥10,000,000 — 1%/日（年間260営業日複利）', data: data10M260, borderWidth: 3, borderColor: '#00AEEF', fill: false }] },
  options: { responsive: true, plugins: { legend: { display: false } } }
});

const tbody = document.getElementById('growth-table');
const final20 = data10M20[data10M20.length - 1];
const final260 = data10M260[data10M260.length - 1];
tbody.innerHTML = `
<tr><td class='border p-2 font-semibold'>20営業日</td><td class='border p-2'>¥${final20.toLocaleString()}</td><td class='border p-2'>¥${(final20-10000000).toLocaleString()}</td></tr>
<tr><td class='border p-2 font-semibold'>1年間（260営業日）</td><td class='border p-2'>¥${final260.toLocaleString()}</td><td class='border p-2'>¥${(final260-10000000).toLocaleString()}</td></tr>
`;

let chartCustom = null;
function simularPersonalizado() {
  const valor = parseFloat(document.getElementById('valorInicial').value);
  const canvas = document.getElementById('chartCustom');
  const resultado = document.getElementById('resultadoSimulacao');
  if (!valor || valor <= 0) {
    resultado.textContent = '有効な金額を入力してください。';
    canvas.classList.add('hidden');
    return;
  }
  const dataCustom20 = gerarCrescimento(valor, 20, 0.01);
  const dataCustom260 = gerarCrescimento(valor, 260, 0.01);
  const final20 = dataCustom20[dataCustom20.length - 1];
  const final260 = dataCustom260[dataCustom260.length - 1];
  resultado.textContent = `20営業日後: ¥${final20.toLocaleString()}（利益: ¥${(final20-valor).toLocaleString()}） | 1年後: ¥${final260.toLocaleString()}（利益: ¥${(final260-valor).toLocaleString()}）`;

  if (chartCustom) chartCustom.destroy();
  chartCustom = new Chart(canvas, {
    type: 'line',
    data: { labels: dias260, datasets: [
      { label: '20営業日（1%/日複利）', data: dataCustom20.concat(Array(240).fill(null)), borderWidth: 3, borderColor: '#FF7A00', fill: false },
      { label: '1年間（1%/日複利）', data: dataCustom260, borderWidth: 3, borderColor: '#0048FF', fill: false }
    ] },
    options: { responsive: true, plugins: { legend: { display: true } } }
  });
  canvas.classList.remove('hidden');
}
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
<div className="text-lg font-bold">VIDYA AI</div>
<div className="space-x-4 text-sm font-semibold">
<a className="hover:underline" href="#jp">日本語</a>
<a className="hover:underline" href="/vidya">AIの仕組み</a>
</div>
</nav>
<section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-10 md:p-16 text-center md:text-left">
<h1 className="text-3xl md:text-4xl font-bold mb-4">VIDYA AI — 日次・年間利益シミュレーション</h1>
<p className="text-base md:text-lg leading-relaxed">
      このページは、VIDYA AI の自動取引アルゴリズムが市場で安定した利益を追求する能力を示す
      <strong>複利シミュレーション</strong>です。<br/>
    当AIは平均して<strong>1日あたり0.5%〜1%</strong>の利益を目標としています（平日20営業日）。<br/>
    市場状況により<strong>マイナスの日</strong>や<strong>+4%以上</strong>の結果となる日もあります。
    </p>
</section>
<section className="p-6 md:p-10">
<div className="alert mb-8 text-center text-sm md:text-base">
<p>このページは<strong>理論値に基づくシミュレーション</strong>です。実際の結果は市場状況により変動し、<strong>複利運用</strong>を前提としています。</p>
</div>
<div className="card mb-8 text-center">
<h2 className="text-blue-700 font-bold text-xl mb-4">カスタムシミュレーション</h2>
<p className="mb-3 text-sm md:text-base">開始資金を入力して、20営業日および1年間（260営業日）の複利成長を確認できます。</p>
<input className="border p-2 rounded w-full max-w-xs text-center mb-4 mx-auto block" id="valorInicial" placeholder="例: 100000" type="number"/>
<button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold w-full max-w-xs mx-auto" onclick="simularPersonalizado()">シミュレーション開始</button>
<p className="mt-4 text-lg font-bold text-blue-800" id="resultadoSimulacao"></p>
<canvas className="hidden mt-6" id="chartCustom"></canvas>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="card">
<h2 className="text-blue-700 font-bold text-lg mb-2">20営業日 — ¥10,000,000（複利）</h2>
<canvas id="chart10M"></canvas>
</div>
<div className="card">
<h2 className="text-blue-700 font-bold text-lg mb-2">1年間（260営業日） — ¥10,000,000（複利）</h2>
<canvas id="chart10MY"></canvas>
</div>
</div>
</section>
<section className="p-6 md:p-10">
<div className="card overflow-x-auto">
<h2 className="text-blue-700 font-bold text-xl mb-3">利益推移（複利シミュレーション）</h2>
<table className="min-w-full text-center border-collapse text-sm md:text-base">
<thead className="bg-blue-700 text-white">
<tr>
<th className="p-2">期間</th>
<th className="p-2">最終資金</th>
<th className="p-2">利益</th>
</tr>
</thead>
<tbody id="growth-table"></tbody>
</table>
</div>
</section>


    </>
  );
}
