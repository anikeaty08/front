import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('alpine:init', () => {
        // dữ liệu khởi tạo (giống backend trả về)
        const initialData = {
          article: {
            title: document.getElementById('article-title').textContent.trim(),
            description: document.getElementById('article-description').textContent.trim(),
            category: document.getElementById('article-category').textContent.trim(),
            author: document.getElementById('article-author').textContent.replace('by ', '').trim(),
            readingTime: document.getElementById('article-reading-time').textContent.trim()
          },
          trending: Array.from(document.querySelectorAll('#trending-list button')).map(btn => {
            const title = btn.querySelector('span:first-child').textContent.trim();
            const count = btn.querySelector('span:last-child').textContent.trim();
            return { title, count };
          }),
          related: Array.from(document.querySelectorAll('#related-list article')).map(card => {
            const meta = card.querySelector('p').textContent.trim();
            const title = card.querySelector('h3').textContent.trim();
            return { meta, title };
          }),
          ads: {
            title: document.getElementById('ad-title').textContent.trim(),
            description: document.getElementById('ad-description').textContent.trim(),
            cta: document.getElementById('ad-cta').textContent.trim()
          }
        };

        // fill form trending & related từ DOM hiện tại
        initialData.trending.forEach((item, i) => {
          const tTitle = document.getElementById('cms-trending-title-' + i);
          const tCount = document.getElementById('cms-trending-count-' + i);
          if (tTitle) tTitle.value = item.title;
          if (tCount) tCount.value = item.count;
        });

        initialData.related.forEach((item, i) => {
          const rMeta = document.getElementById('cms-related-meta-' + i);
          const rTitle = document.getElementById('cms-related-title-' + i);
          if (rMeta) rMeta.value = item.meta;
          if (rTitle) rTitle.value = item.title;
        });

        // nút apply: "lưu & đồng bộ"
        document.getElementById('cms-apply').addEventListener('click', () => {
          // bài viết
          const title = document.getElementById('cms-article-title').value;
          const desc = document.getElementById('cms-article-description').value;
          const cat = document.getElementById('cms-article-category').value;
          const author = document.getElementById('cms-article-author').value;
          const rt = document.getElementById('cms-article-reading-time').value;

          document.getElementById('article-title').textContent = title;
          document.getElementById('article-description').textContent = desc;
          document.getElementById('article-category').textContent = cat;
          document.getElementById('article-author').textContent = 'by ' + author;
          document.getElementById('article-reading-time').textContent = rt;

          // trending
          document.querySelectorAll('#trending-list button').forEach((btn, i) => {
            const tTitle = document.getElementById('cms-trending-title-' + i);
            const tCount = document.getElementById('cms-trending-count-' + i);
            if (!tTitle || !tCount) return;
            const spans = btn.querySelectorAll('span');
            if (spans[0]) spans[0].textContent = tTitle.value;
            if (spans[1]) spans[1].textContent = tCount.value;
          });

          // related
          document.querySelectorAll('#related-list article').forEach((card, i) => {
            const rMeta = document.getElementById('cms-related-meta-' + i);
            const rTitle = document.getElementById('cms-related-title-' + i);
            if (!rMeta || !rTitle) return;
            const p = card.querySelector('p');
            const h3 = card.querySelector('h3');
            if (p) p.textContent = rMeta.value;
            if (h3) h3.textContent = rTitle.value;
          });

          // ads
          const adTitle = document.getElementById('cms-ad-title').value;
          const adDesc = document.getElementById('cms-ad-description').value;
          const adCta = document.getElementById('cms-ad-cta').value;
          document.getElementById('ad-title').textContent = adTitle;
          document.getElementById('ad-description').textContent = adDesc;
          document.getElementById('ad-cta').textContent = adCta;
        });

        // reset về dữ liệu mẫu
        document.getElementById('cms-reset').addEventListener('click', () => {
          // article
          document.getElementById('cms-article-title').value = initialData.article.title;
          document.getElementById('cms-article-description').value = initialData.article.description;
          document.getElementById('cms-article-category').value = initialData.article.category;
          document.getElementById('cms-article-author').value = initialData.article.author;
          document.getElementById('cms-article-reading-time').value = initialData.article.readingTime;

          initialData.trending.forEach((item, i) => {
            const tTitle = document.getElementById('cms-trending-title-' + i);
            const tCount = document.getElementById('cms-trending-count-' + i);
            if (tTitle) tTitle.value = item.title;
            if (tCount) tCount.value = item.count;
          });

          initialData.related.forEach((item, i) => {
            const rMeta = document.getElementById('cms-related-meta-' + i);
            const rTitle = document.getElementById('cms-related-title-' + i);
            if (rMeta) rMeta.value = item.meta;
            if (rTitle) rTitle.value = item.title;
          });

          document.getElementById('cms-ad-title').value = initialData.ads.title;
          document.getElementById('cms-ad-description').value = initialData.ads.description;
          document.getElementById('cms-ad-cta').value = initialData.ads.cta;

          document.getElementById('cms-apply').click();
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div :className="darkMode ? 'opacity-100' : 'opacity-0'" className="fixed inset-0 -z-10 bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 opacity-0 from-slate-50 via-slate-100 to-slate-50"></div>
<div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-10">

<header className="flex sm:py-6 pt-4 pb-4 items-center justify-between">
<div className="flex items-center gap-3 sm:gap-4">
<a className="flex items-center gap-2" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/40">
<span className="text-base font-semibold tracking-tight text-slate-50">CN</span>
</div>
<div className="hidden flex-col sm:flex">
<span className="text-lg font-semibold tracking-tight" id="site-name">CryptoNova</span>
<span :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="text-sm text-slate-500">Crypto news • Phân tích • Hướng dẫn</span>
</div>
</a>
</div>
<div className="flex items-center gap-3">
<div :className="darkMode ? 'border border-slate-800 bg-slate-900/80 text-slate-300' : 'border border-slate-200 bg-white text-slate-600'" className="hidden items-center gap-2 rounded-full px-3 py-1.5 text-sm md:flex border border-slate-800 bg-black text-slate-400">
<svg :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="lucide lucide-search h-4 w-4 text-slate-500" data-lucide="search" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input :className="darkMode ? 'placeholder:text-slate-500 text-slate-100' : 'placeholder:text-slate-400 text-slate-900'" className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400 text-slate-100" placeholder="Tìm tin tức, chủ đề, coin..." type="text"/>
<span :className="darkMode ? 'border border-slate-700 bg-slate-900 text-slate-400' : 'border border-slate-200 bg-slate-50 text-slate-500'" className="rounded-full px-2 text-xs border text-slate-500 border-slate-800 bg-slate-950">/</span>
</div>

<button :className="darkMode ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200' : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-800'" @click="showAdmin = !showAdmin" className="hidden sm:inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors">
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings"></svg>
<span>Admin</span>
</button>
<button :className="darkMode ? 'justify-end border-slate-700 bg-slate-900' : 'justify-start border-slate-300 bg-slate-100'" @click="darkMode = !darkMode; lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});" aria-label="Chuyển chế độ sáng/tối" className="flex transition-colors bg-slate-900 w-16 h-9 border-slate-700 border rounded-full pt-0.5 pr-0.5 pb-0.5 pl-0.5 items-center justify-start">
<div className="flex shadow-cyan-500/40 bg-gradient-to-tr to-fuchsia-500 w-7 h-7 rounded-full shadow-md items-center justify-center from-cyan-600">
<svg :className="darkMode ? 'text-slate-950' : 'text-amber-400'" :data-lucide="darkMode ? 'moon' : 'sun'" className="lucide lucide-moon lucide-sun" data-lucide="sun" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
</button>
</div>
</header>

<main className="flex-1 pb-10">
<section className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] lg:gap-7">

<article :className="darkMode ? 'bg-slate-950/90 ring-slate-800/80' : 'bg-white ring-slate-200'" className="rounded-3xl ring-1 bg-black ring-slate-800 px-4 py-4 sm:px-6 sm:py-6 space-y-5" id="article-root">
<div className="space-y-3">
<div className="flex flex-wrap items-center gap-2 text-xs">
<span :className="darkMode ? 'bg-sky-500/10 text-sky-300' : 'bg-sky-50 text-sky-700'" className="rounded-full px-3 py-1 font-medium bg-sky-950 text-sky-300" id="article-category">
                  Bitcoin News
                </span>
<span :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="text-slate-500" id="article-date">2 days ago</span>
<span :className="darkMode ? 'bg-slate-600' : 'bg-slate-400'" className="h-1 w-1 rounded-full bg-slate-600"></span>
<span :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="text-slate-500" id="article-author">by Hongji Feng</span>
<span :className="darkMode ? 'bg-slate-600' : 'bg-slate-400'" className="h-1 w-1 rounded-full bg-slate-600 hidden sm:inline-block"></span>
<span :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="flex items-center gap-1 text-slate-500 text-xs">
<svg className="lucide lucide-clock-3 h-3.5 w-3.5" data-lucide="clock-3"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6h4"></path></svg>
<span id="article-reading-time">Đọc trong 6 phút</span>
</span>
</div>
<h1 :className="darkMode ? '' : 'text-slate-900'" className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-100" id="article-title">
                Bitcoin Slips Below $95k: 10x Research Maps The Reset While ETF Outflows Bite
              </h1>
<p :className="darkMode ? 'text-slate-300' : 'text-slate-600'" className="text-base text-slate-400" id="article-description">
                Thị trường crypto chứng kiến cú điều chỉnh mạnh khi Bitcoin rơi xuống dưới mốc 95.000 USD,
                trong bối cảnh các quỹ ETF Bitcoin giao ngay ghi nhận dòng tiền rút ròng kỷ lục. 10x Research
                đưa ra kịch bản “reset” lại chu kỳ tăng giá, cùng các vùng giá có thể là cơ hội tích lũy mới.
              </p>
</div>

<div className="overflow-hidden rounded-2xl bg-gradient-to-tr from-fuchsia-500 via-slate-900 to-cyan-500 relative">
<div className="aspect-[16/7] w-full"></div>
<div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-600"></div>
</div>

<div :className="darkMode ? '' : 'prose-invert:!text-slate-900'" className="prose max-w-none text-base prose-invert prose-headings:tracking-tight prose-p:text-base">
<section className="space-y-3" id="article-section-1">
<h2 :className="darkMode ? '' : 'text-slate-900'" className="text-xl font-semibold tracking-tight text-slate-100">
                  1. Bối cảnh: ETF Bitcoin tiếp tục bị rút vốn
                </h2>
<p :className="darkMode ? 'text-slate-300' : 'text-slate-700'" className="text-base text-slate-300">
                  Trong 3 tuần liên tiếp, các quỹ ETF Bitcoin giao ngay đã chứng kiến lượng vốn rút ròng hơn
                  3,2 tỷ USD. Điều này tạo áp lực bán đáng kể lên thị trường khi một phần lượng BTC nắm giữ
                  bị hoàn trả lại cho nhà đầu tư, làm giảm thanh khoản mua chủ động.
                </p>
<p :className="darkMode ? 'text-slate-300' : 'text-slate-700'" className="text-base text-slate-300">
                  Theo 10x Research, dòng tiền này không chỉ phản ánh tâm lý chốt lời sau giai đoạn tăng nóng,
                  mà còn là phản ứng trước môi trường lãi suất cao kéo dài và kỳ vọng Fed chưa sớm đảo chiều.
                </p>
</section>
<section className="space-y-3 mt-5" id="article-section-2">
<h2 :className="darkMode ? '' : 'text-slate-900'" className="text-xl font-semibold tracking-tight text-slate-100">
                  2. Các vùng hỗ trợ kỹ thuật quan trọng
                </h2>
<p :className="darkMode ? 'text-slate-300' : 'text-slate-700'" className="text-base text-slate-300">
                  Mốc 95.000 USD bị phá vỡ kích hoạt thêm các lệnh stop-loss ngắn hạn, nhưng vùng 90.000–92.000
                  USD mới là khu vực được nhiều tổ chức và quỹ đầu tư quan sát cho chiến lược mua trung hạn.
                </p>
<ul :className="darkMode ? 'text-slate-300' : 'text-slate-700'" className="list-disc pl-5 space-y-1 text-base text-slate-300">
<li>90.000–92.000 USD: Hỗ trợ kỹ thuật trùng với vùng tích lũy on-chain dày đặc.</li>
<li>85.000 USD: Hỗ trợ tâm lý mạnh, từng là kháng cự chính trong nhịp tăng trước đó.</li>
<li>80.000 USD: Kịch bản bi quan hơn nếu dòng vốn ETF tiếp tục rút mạnh.</li>
</ul>
</section>
</div>
</article>

<aside className="space-y-4">

<section :className="darkMode ? 'bg-slate-950/90 ring-slate-800/80' : 'bg-white ring-slate-200'" className="rounded-3xl ring-1 bg-black ring-slate-800 p-4 sm:p-5">
<div className="flex items-center justify-between mb-3">
<h2 className="text-base sm:text-lg font-semibold tracking-tight">Trending Topic</h2>
<span :className="darkMode ? 'text-pink-400' : 'text-pink-500'" className="text-xs text-pink-400">#Hot</span>
</div>
<div className="space-y-3 text-sm" id="trending-list">
<button :className="darkMode ? 'bg-slate-900/60 hover:bg-slate-900' : 'bg-slate-100 hover:bg-slate-200'" className="flex w-full items-center justify-between rounded-xl px-3 py-2 bg-slate-900/60 hover:bg-slate-900 transition-colors" data-trending-index="0">
<span :className="darkMode ? 'text-slate-100' : 'text-slate-900'" className="text-left text-slate-100">ETF Bitcoin dòng tiền đảo chiều?</span>
<span className="text-xs text-slate-400">12.3k</span>
</button>
<button :className="darkMode ? 'hover:bg-slate-900/70' : 'hover:bg-slate-100'" className="flex w-full items-center justify-between rounded-xl px-3 py-2 bg-transparent hover:bg-slate-900/70 transition-colors" data-trending-index="1">
<span :className="darkMode ? 'text-slate-300' : 'text-slate-800'" className="text-left text-slate-300">Altseason hay chỉ là bull trap?</span>
<span className="text-xs text-slate-400">8.7k</span>
</button>
<button :className="darkMode ? 'hover:bg-slate-900/70' : 'hover:bg-slate-100'" className="flex w-full items-center justify-between rounded-xl px-3 py-2 bg-transparent hover:bg-slate-900/70 transition-colors" data-trending-index="2">
<span :className="darkMode ? 'text-slate-300' : 'text-slate-800'" className="text-left text-slate-300">Stablecoin on-chain yield cho tổ chức</span>
<span className="text-xs text-slate-400">5.1k</span>
</button>
</div>
</section>

<section :className="darkMode ? 'bg-slate-950/90 ring-slate-800/80' : 'bg-white ring-slate-200'" className="rounded-3xl ring-1 bg-black ring-slate-800 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-base sm:text-lg font-semibold tracking-tight">Related Post</h2>
</div>
<div className="space-y-3 text-sm" id="related-list">
<article className="flex gap-3" data-related-index="0">
<div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500"></div>
<div className="flex-1">
<p :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="text-xs text-slate-500 mb-0.5">Bitcoin News • 5 min read</p>
<h3 :className="darkMode ? 'text-slate-100' : 'text-slate-900 hover:text-pink-500'" className="text-sm font-medium text-slate-100 hover:text-pink-400 cursor-pointer">
                      US Spot Bitcoin ETFs Bleed $1.1B in Third Consecutive Week of Outflows
                    </h3>
</div>
</article>
<article className="flex gap-3" data-related-index="1">
<div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500"></div>
<div className="flex-1">
<p :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="text-xs text-slate-500 mb-0.5">Altcoin News • 7 min read</p>
<h3 :className="darkMode ? 'text-slate-100' : 'text-slate-900 hover:text-pink-500'" className="text-sm font-medium text-slate-100 hover:text-pink-400 cursor-pointer">
                      XRP Whales Offload Nearly 200M Tokens After Splashy ETF Debut
                    </h3>
</div>
</article>
<article className="flex gap-3" data-related-index="2">
<div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500"></div>
<div className="flex-1">
<p :className="darkMode ? 'text-slate-400' : 'text-slate-500'" className="text-xs text-slate-500 mb-0.5">Crypto Regulation • 4 min read</p>
<h3 :className="darkMode ? 'text-slate-100' : 'text-slate-900 hover:text-pink-500'" className="text-sm font-medium text-slate-100 hover:text-pink-400 cursor-pointer">
                      Former Binance CEO CZ Vows to Reinvest Any Future Refund of $4.3B DOJ Fine
                    </h3>
</div>
</article>
</div>
</section>

<section :className="darkMode ? 'bg-slate-950/90 ring-slate-800/80' : 'bg-white ring-slate-200'" className="rounded-3xl ring-1 bg-black ring-slate-800 p-4 sm:p-5 relative overflow-hidden">
<div className="absolute inset-0 opacity-60 bg-gradient-to-tr from-fuchsia-500 via-cyan-500 to-emerald-500"></div>
<div className="relative space-y-3">
<div className="inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[0.7rem] text-slate-100">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Sponsored</span>
</div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50" id="ad-title">
                  Nhận tới 8% APY với Stablecoin an toàn cho tổ chức
                </h2>
<p className="text-sm text-slate-100/80" id="ad-description">
                  Giải pháp staking stablecoin được kiểm toán, bảo mật cấp doanh nghiệp. Đăng ký trong 3 phút,
                  rút vốn linh hoạt.
                </p>
<button className="mt-1 w-full rounded-full bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-50 hover:bg-slate-950" id="ad-cta">
                  Mở tài khoản ngay
                </button>
</div>
</section>
</aside>
</section>
</main>

<footer :className="darkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-200 text-slate-500'" className="border-t py-5 text-xs text-slate-500 border-slate-800">
<div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
<div className="flex items-center gap-2">
<span :className="darkMode ? 'text-slate-200' : 'text-slate-900'" className="text-sm font-semibold tracking-tight text-slate-100">CryptoNova</span>
<span :className="darkMode ? 'bg-slate-600' : 'bg-slate-400'" className="h-1 w-1 rounded-full bg-slate-600"></span>
<span :className="darkMode ? '' : 'text-slate-600'" className="text-slate-400">Tin tức, phân tích &amp; hướng dẫn crypto dành cho nhà đầu tư Việt.</span>
</div>
<div className="flex flex-wrap items-center gap-4">
<a :className="darkMode ? 'hover:text-slate-300' : 'hover:text-slate-800'" className="hover:text-slate-200" href="#">Về chúng tôi</a>
<a :className="darkMode ? 'hover:text-slate-300' : 'hover:text-slate-800'" className="hover:text-slate-200" href="#">Liên hệ</a>
<a :className="darkMode ? 'hover:text-slate-300' : 'hover:text-slate-800'" className="hover:text-slate-200" href="#">Điều khoản</a>
<span :className="darkMode ? 'text-slate-600' : 'text-slate-500'" className="text-slate-500">© 2025 CryptoNova.</span>
</div>
</div>
</footer>

<section :className="darkMode ? 'bg-slate-900/60 border-slate-700' : 'bg-white border-slate-300 text-slate-900'" className="mt-4 mb-8 rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 p-4 sm:p-6 space-y-4" x-show="showAdmin" x-transition="">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database"></svg>
<h2 className="text-base sm:text-lg font-semibold tracking-tight">Bảng điều khiển nội dung (CMS)</h2>
</div>
<span :className="darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'" className="text-xs rounded-full px-2 py-0.5">Mô phỏng backend</span>
</div>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">

<div className="space-y-2">
<h3 className="font-medium">Bài viết chính</h3>
<label className="flex flex-col gap-1">
<span>Tiêu đề</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" className="rounded-lg border bg-transparent px-2 py-1 outline-none" id="cms-article-title" type="text" value="Bitcoin Slips Below $95k: 10x Research Maps The Reset While ETF Outflows Bite"/>
</label>
<label className="flex flex-col gap-1">
<span>Mô tả ngắn</span>
<textarea :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500" className="rounded-lg border bg-transparent px-2 py-1 outline-none resize-none" id="cms-article-description" rows="3">Thị trường crypto chứng kiến cú điều chỉnh mạnh khi Bitcoin rơi xuống dưới mốc 95.000 USD, trong bối cảnh các quỹ ETF Bitcoin giao ngay ghi nhận dòng tiền rút ròng kỷ lục. 10x Research đưa ra kịch bản “reset” lại chu kỳ tăng giá, cùng các vùng giá có thể là cơ hội tích lũy mới.</textarea>
</label>
<div className="grid grid-cols-2 gap-2">
<label className="flex flex-col gap-1">
<span>Category</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" className="rounded-lg border bg-transparent px-2 py-1 outline-none" id="cms-article-category" type="text" value="Bitcoin News"/>
</label>
<label className="flex flex-col gap-1">
<span>Tác giả</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" className="rounded-lg border bg-transparent px-2 py-1 outline-none" id="cms-article-author" type="text" value="Hongji Feng"/>
</label>
</div>
<label className="flex flex-col gap-1">
<span>Thời gian đọc</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" className="rounded-lg border bg-transparent px-2 py-1 outline-none" id="cms-article-reading-time" type="text" value="Đọc trong 6 phút"/>
</label>
</div>

<div className="space-y-2">
<h3 className="font-medium">Trending Topic</h3>
<template x-htmlFor="i in 3">
<div :className="darkMode ? 'border-slate-700 bg-slate-900/80' : 'border-slate-300 bg-slate-50'" className="rounded-xl border px-2 py-2 space-y-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">Item <span x-text="i"></span></span>
</div>
<label className="flex flex-col gap-0.5">
<span>Tiêu đề</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" :id="'cms-trending-title-' + (i-1)" className="rounded-lg border bg-transparent px-2 py-1 outline-none" type="text"/>
</label>
<label className="flex flex-col gap-0.5">
<span>Lượt quan tâm</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" :id="'cms-trending-count-' + (i-1)" className="rounded-lg border bg-transparent px-2 py-1 outline-none" type="text"/>
</label>
</div>
</template>
</div>

<div className="space-y-3">
<div className="space-y-2">
<h3 className="font-medium">Related Post</h3>
<template x-htmlFor="i in 3">
<div :className="darkMode ? 'border-slate-700 bg-slate-900/80' : 'border-slate-300 bg-slate-50'" className="rounded-xl border px-2 py-2 space-y-1">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">Post <span x-text="i"></span></span>
</div>
<label className="flex flex-col gap-0.5">
<span>Meta (category • time)</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" :id="'cms-related-meta-' + (i-1)" className="rounded-lg border bg-transparent px-2 py-1 outline-none" type="text"/>
</label>
<label className="flex flex-col gap-0.5">
<span>Tiêu đề</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" :id="'cms-related-title-' + (i-1)" className="rounded-lg border bg-transparent px-2 py-1 outline-none" type="text"/>
</label>
</div>
</template>
</div>
<div className="space-y-2">
<h3 className="font-medium">Banner quảng cáo</h3>
<label className="flex flex-col gap-0.5">
<span>Tiêu đề</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" className="rounded-lg border bg-transparent px-2 py-1 outline-none" id="cms-ad-title" type="text" value="Nhận tới 8% APY với Stablecoin an toàn cho tổ chức"/>
</label>
<label className="flex flex-col gap-0.5">
<span>Mô tả</span>
<textarea :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500" className="rounded-lg border bg-transparent px-2 py-1 outline-none resize-none" id="cms-ad-description" rows="3">Giải pháp staking stablecoin được kiểm toán, bảo mật cấp doanh nghiệp. Đăng ký trong 3 phút,
rút vốn linh hoạt.</textarea>
</label>
<label className="flex flex-col gap-0.5">
<span>Nút CTA</span>
<input :className="darkMode ? 'border-slate-700 focus:border-sky-500' : 'border-slate-300 focus:border-sky-500'" className="rounded-lg border bg-transparent px-2 py-1 outline-none" id="cms-ad-cta" type="text" value="Mở tài khoản ngay"/>
</label>
</div>
</div>
</div>
<div :className="darkMode ? 'border-slate-800' : 'border-slate-200'" className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t">
<p :className="darkMode ? 'text-slate-400' : 'text-slate-600'" className="text-xs sm:text-sm">
            Thay đổi trong khu vực này sẽ đồng bộ ngay lên giao diện bài viết, trending và related post (mô phỏng liên kết dữ liệu backend &amp; frontend).
          </p>
<div className="flex items-center gap-2">
<button :className="darkMode ? 'border-slate-700 text-slate-200 hover:bg-slate-800' : 'border-slate-300 text-slate-800 hover:bg-slate-100'" className="rounded-full border px-3 py-1.5 text-xs font-medium" id="cms-reset">
              Khôi phục dữ liệu mẫu
            </button>
<button className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-medium text-white hover:bg-sky-600" id="cms-apply">
              Lưu &amp; đồng bộ
            </button>
</div>
</div>
</section>
</div>



    </>
  );
}
