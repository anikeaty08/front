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
      
<!DOCTYPE html>

<html lang="vi">
<head>
<meta charset="utf-8" />
<title>Fohla Food - Thịt Bò Cao Cấp Cho Người Sành Ăn Tại TP.HCM</title>
<meta content="width=device-width, initial-scale=1.0" name="viewport" />

</meta></meta></head>
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white/90 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-500 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
            FF
          </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900">
              Fohla Food
            </span>
<span className="text-[11px] text-slate-500">
              Thịt bò cao cấp giao nhanh tại TP.HCM
            </span>
</div>
</div>
<div className="hidden md:flex items-center gap-4 text-[11px] text-slate-500">
<span>Giao hàng trong 2 giờ nội thành</span>
<span className="h-1 w-1 rounded-full bg-slate-300"></span>
<span>Đóng gói chuẩn lạnh, an toàn</span>
</div>
</div>
</header>

<main className="flex-1">
<article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 lg:gap-14">

<div className="space-y-10">

<section className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<p className="text-[11px] font-medium tracking-tight text-emerald-700">
                Chia sẻ từ một “mọt” thịt bò sống tại TP.HCM
              </p>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Tại sao cùng là “thịt bò” nhưng khác nhau một trời một vực?
            </h1>
<p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Nếu bạn từng mua thịt bò ở siêu thị lớn, về nấu lại bị dai, tanh,
              ra nước… rất có thể vấn đề không nằm ở cách nấu, mà nằm ở
              <span className="text-slate-900 font-medium">
                nguồn gốc &amp; cách xử lý thịt
              </span>
              . Bài viết này sẽ giúp bạn hiểu:
              <span className="text-slate-900">
                thịt bò mát Việt Nam – bò nhập Úc/Mỹ – Wagyu
              </span>
              khác nhau thế nào, nên chọn loại nào cho gia đình mình, và làm sao
              để “nâng cấp” bữa ăn mà không phải chi quá tay.
            </p>

<div className="grid sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200">
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-emerald-700 mb-1">
                  Giải mã thịt bò
                </p>
<p className="text-xs text-slate-600">
                  Hiểu rõ thịt bò mát, bò đông lạnh nhập khẩu và Wagyu khác nhau
                  ra sao.
                </p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-emerald-700 mb-1">
                  Chọn đúng, không phí tiền
                </p>
<p className="text-xs text-slate-600">
                  Mỗi món ăn nên dùng phần thịt nào để không lãng phí, vẫn ngon
                  mềm.
                </p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-emerald-700 mb-1">
                  Lộ trình nâng cấp
                </p>
<p className="text-xs text-slate-600">
                  Từ thịt mát Việt Nam → bò Úc/Mỹ → Wagyu &amp; premium cuts.
                </p>
</div>
</div>
</section>

<section className="space-y-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              1. Lý do món bò ở nhà “không bao giờ ngon như nhà hàng”
            </h2>
<p className="text-sm text-slate-700 leading-relaxed">
              Phần lớn khách hàng tại TP.HCM đang mua thịt bò từ các siêu thị
              lớn hoặc chợ gần nhà. Tiện, quen, nhưng có 3 vấn đề:
            </p>
<div className="space-y-3">
<div className="flex gap-3">
<div className="mt-1 h-5 w-5 rounded-full border border-rose-300 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                    Không phân loại theo món
                  </p>
<p className="text-xs text-slate-600">
                    Mua “thịt bò” chung chung: về ăn lẩu, kho, xào, lúc nào
                    cũng… hơi sai. Mỗi phần thịt phù hợp với một kiểu nấu khác
                    nhau, nếu chọn nhầm sẽ dai, bở hoặc mất vị.
                  </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 h-5 w-5 rounded-full border border-rose300 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                    Chênh lệch quá lớn về chất lượng
                  </p>
<p className="text-xs text-slate-600">
                    Cùng là “bò Úc” nhưng có loại dành cho buffet rẻ tiền, có
                    loại dùng cho steakhouse. Nhãn mác không nói hết được, nên
                    nhiều người chọn theo giá, ăn xong… thất vọng.
                  </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 h-5 w-5 rounded-full border border-rose-300 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">
                    Không rõ câu chuyện phía sau miếng thịt
                  </p>
<p className="text-xs text-slate-600">
                    Thịt bò là sản phẩm đòi hỏi quy trình bảo quản, vận chuyển
                    khắt khe. Nếu chỉ thấy “đỏ tươi” nhưng không biết được nhiệt
                    độ, ngày xử lý, nguồn gốc… thì rất khó để an tâm.
                  </p>
</div>
</div>
</div>
<div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
<p className="text-xs text-slate-900">
                Fohla Food là một thương hiệu nhỏ tại TP.HCM, chuyên về
                <span className="font-medium text-emerald-700">
                  thịt bò mát Việt Nam, bò nhập khẩu Úc/Mỹ và Wagyu
                </span>
                . Không thể cạnh tranh về độ “phủ sóng” với các hệ thống lớn,
                nên Fohla chọn cách khác: tập trung vào
                <span className="font-medium">
                  chất lượng và tư vấn cá nhân hóa
                </span>
                cho từng khách.
              </p>
</div>
</section>

<section className="space-y-5">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              2. Thịt bò mát Việt Nam, bò đông lạnh Úc/Mỹ, Wagyu – khác nhau ở
              đâu?
            </h2>
<p className="text-sm text-slate-700">
              Hãy coi đây là “bản đồ thịt bò” đơn giản, để bạn dễ chọn:
            </p>

<div className="grid md:grid-cols-3 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
<p className="text-xs font-medium text-emerald-700 uppercase tracking-tight">
                  Entry • Hợp túi tiền
                </p>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                  Thịt bò mát Việt Nam
                </h3>
<p className="text-xs text-slate-600">
                  Thịt được làm mát nhanh sau giết mổ, bảo quản ở 0–4°C. An
                  toàn, tươi, giá dễ chịu cho bữa ăn hàng ngày.
                </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-800">
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Phù hợp: xào, kho, nấu canh, phở, hầm.</span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Ưu điểm: dễ ăn, ít ngấy, giá tốt.</span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>
                      Thích hợp cho gia đình 3–5 người cần ăn ngon mỗi ngày.
                    </span>
</li>
</ul>
</div>

<div className="rounded-xl border border-emerald-200 bg-white p-4 flex flex-col gap-2 relative">
<div className="absolute right-3 top-3 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5">
<span className="text-[10px] font-medium text-amber-700 tracking-tight">
                    Gợi ý cho gia đình
                  </span>
</div>
<p className="text-xs font-medium text-emerald-700 uppercase tracking-tight">
                  Core • Nâng cấp trải nghiệm
                </p>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                  Thịt bò đông lạnh nhập Úc, Mỹ
                </h3>
<p className="text-xs text-slate-600">
                  Nuôi theo chuẩn quốc tế, tỷ lệ mỡ – nạc cân bằng, phù hợp cho
                  steak, nướng, lẩu “kiểu nhà hàng”.
                </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-800">
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Phù hợp: steak, áp chảo, BBQ, lẩu nhúng nhanh.</span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>
                      Ưu điểm: mềm hơn bò Việt, vị thịt đậm, dễ chế biến.
                    </span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>
                      Thích hợp cho cuối tuần, đãi khách, hoặc “tự thưởng” tại
                      nhà.
                    </span>
</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
<p className="text-xs font-medium text-emerald-700 uppercase tracking-tight">
                  Differentiation • Thưởng thức
                </p>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                  Wagyu &amp; Premium Cuts
                </h3>
<p className="text-xs text-slate-600">
                  Tomahawk, Rib Eye, Wagyu vân mỡ đẹp. Cảm giác “tan trong
                  miệng”, dư vị béo bùi rất khác thịt bò thường.
                </p>
<ul className="mt-1 space-y-1.5 text-xs text-slate-800">
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>
                      Phù hợp: nướng nguyên miếng, steak medium rare, tiệc đặc
                      biệt.
                    </span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>
                      Ưu điểm: trải nghiệm khác biệt rõ, chuẩn nhà hàng cao cấp.
                    </span>
</li>
<li className="flex gap-2">
<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Thích hợp cho dịp kỷ niệm, sinh nhật, tặng quà.</span>
</li>
</ul>
</div>
</div>
<p className="text-xs text-slate-600">
              Fohla không cố gắng bán loại đắt nhất cho mọi người. Thay vào đó,
              đội ngũ sẽ
              <span className="text-slate-900">gợi ý lộ trình phù hợp</span>
              : nếu bạn đang quen thịt mát Việt Nam → thử một phần bò Úc/Mỹ →
              khi đã quen hơn, hãy thử Wagyu/premium cho dịp đặc biệt.
            </p>
</section>

<section className="space-y-5">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              3. Lộ trình nâng cấp bữa ăn từ 150K đến 1 triệu mà vẫn “đáng tiền”
            </h2>
<div className="grid md:grid-cols-3 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
<p className="text-xs font-medium text-slate-500 tracking-tight">
                  Bước 1
                </p>
<h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                  Món quen hàng ngày (150K – 300K)
                </h3>
<ul className="mt-2 space-y-1.5 text-xs text-slate-700">
<li>• Thịt bò mát Việt Nam: nạm, bắp, thăn nội, gầu,…</li>
<li>• Món nên thử: bò xào rau củ, bò kho, phở bò, bún bò.</li>
<li>
                    • Gợi ý: bắt đầu với 500g – 1kg để cảm nhận độ tươi, ngọt.
                  </li>
</ul>
</div>

<div className="rounded-xl border border-emerald-200 bg-white p-4 flex flex-col">
<p className="text-xs font-medium text-slate-500 tracking-tight">
                  Bước 2
                </p>
<h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                  Cuối tuần, đãi khách (400K – 600K)
                </h3>
<ul className="mt-2 space-y-1.5 text-xs text-slate-700">
<li>• Bò Úc/Mỹ đông lạnh: striploin, ribeye, shortplate,…</li>
<li>• Món nên thử: steak tại nhà, lẩu bò nhúng, BBQ.</li>
<li>
                    • Gợi ý: kết hợp 1–2 phần bò nhập + bò mát Việt Nam cho nước
                    dùng.
                  </li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
<p className="text-xs font-medium text-slate-500 tracking-tight">
                  Bước 3
                </p>
<h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                  Dịp đặc biệt, kỷ niệm (700K – 1M+)
                </h3>
<ul className="mt-2 space-y-1.5 text-xs text-slate-700">
<li>• Wagyu, Tomahawk, Rib Eye premium.</li>
<li>• Món nên thử: steak medium rare, nướng nguyên tảng.</li>
<li>
                    • Gợi ý: dùng kèm rượu vang, muối hồng, bơ lạt – ở nhà mà
                    vẫn “chill” như nhà hàng.
                  </li>
</ul>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="max-w-xl">
<p className="text-sm font-semibold tracking-tight text-slate-900">
                  Không biết bắt đầu từ đâu? Fohla có thể gợi ý combo theo ngân
                  sách.
                </p>
<p className="text-xs text-slate-600 mt-1">
                  Ví dụ: với 450K cho 4 người, bạn có thể kết hợp thịt bò mát
                  Việt Nam (nấu lẩu) + một phần bò Úc cho món nhúng/steak.
                </p>
</div>
<a className="inline-flex items-center justify-center rounded-md border border-emerald-500/60 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-100 hover:border-emerald-500 transition-colors" href="#fohla-products">
                Khám phá gợi ý sản phẩm
              </a>
</div>
</section>

<section className="space-y-5">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              4. Những băn khoăn thường gặp khi mua thịt bò cao cấp (và cách
              Fohla giải quyết)
            </h2>
<div className="space-y-3">

<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900">
                  “Thương hiệu nhỏ, sao mình tin được?”
                </p>
<p className="mt-1 text-xs text-slate-600">
                  Fohla không có mặt ở mọi trung tâm thương mại, nhưng tập trung
                  vào
                  <span className="text-slate-900">
                    một thị trường rất cụ thể: thịt bò
                  </span>
                  . Nguồn hàng được chọn từ nhà cung cấp có chứng nhận, lưu trữ
                  lịch sử lô hàng, ngày nhập – ngày xuất kho. Mỗi đơn hàng đều
                  được tư vấn trực tiếp (Zalo/Inbox) nếu khách yêu cầu.
                </p>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900">
                  “Thịt đông lạnh có bị mất chất, mất vị không?”
                </p>
<p className="mt-1 text-xs text-slate-600">
                  Bò Úc/Mỹ đông lạnh được cấp đông sâu tại nước sở tại, sau đó
                  vận chuyển lạnh về Việt Nam. Nếu
                  <span className="text-slate-900">giải đông đúng cách</span>
                  (trong ngăn mát từ 8–12 giờ), hương vị vẫn giữ được rất tốt.
                  Fohla gửi kèm hướng dẫn giải đông &amp; chế biến cho từng loại
                  sản phẩm, nên bạn chỉ cần làm theo là được.
                </p>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900">
                  “Sợ mua nhầm phần thịt, về nấu không ngon rồi phí tiền”
                </p>
<p className="mt-1 text-xs text-slate-600">
                  Đội ngũ Fohla sẽ hỏi trước: bạn nấu món gì, cho bao nhiêu
                  người, thích mềm hay dai, béo hay ít mỡ… rồi mới gợi ý. Tất cả
                  sản phẩm trên website đều ghi rõ
                  <span className="text-slate-900">“Phù hợp với món”</span>
                  để bạn dễ chọn. Nếu vẫn phân vân, chỉ cần chat nhanh, Fohla sẽ
                  gợi ý cụ thể.
                </p>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900">
                  “Mua Wagyu/Premium có quá ‘xa xỉ’ không?”
                </p>
<p className="mt-1 text-xs text-slate-600">
                  Không nhất thiết lần nào cũng ăn Wagyu. Fohla khuyến khích
                  khách:
                  <span className="text-slate-900">
                    ăn đúng dịp, đúng món, đúng khẩu phần
                  </span>
                  . Một miếng Wagyu 200–300g chia cho 2 người, kèm salad, pasta
                  hoặc cơm là đã đủ cho một bữa tối ấn tượng.
                </p>
</div>
</div>
</section>

<section className="space-y-5" id="fohla-products">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              5. Không chỉ có steak: bò viên, bò xay, khô bò… cho mọi nhu cầu
            </h2>
<p className="text-sm text-slate-700">
              Ngoài các phần thịt nguyên bản, Fohla còn chuẩn bị sẵn nhiều sản
              phẩm “cứ thế nấu” cho ngày bận rộn:
            </p>
<div className="grid md:grid-cols-3 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Bò viên
                </h3>
<p className="mt-1 text-xs text-slate-600">
                  Dùng làm bún bò, hủ tiếu, lẩu, ăn vặt cho bé.
                </p>
<ul className="mt-2 space-y-1 text-xs text-slate-700">
<li>• Kết cấu dai giòn, mùi bò rõ.</li>
<li>• Tiện trữ đông, rã đông nhanh.</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Bò xay hamburger
                </h3>
<p className="mt-1 text-xs text-slate-600">
                  Làm burger, bò viên sốt cà, mỳ Ý… cực nhanh.
                </p>
<ul className="mt-2 space-y-1 text-xs text-slate-700">
<li>• Tỷ lệ mỡ được canh để không khô, không quá ngấy.</li>
<li>• Đóng gói vừa cho từng bữa.</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Khô bò
                </h3>
<p className="mt-1 text-xs text-slate-600">
                  Nhâm nhi cùng bạn bè, mang đi du lịch hoặc làm quà.
                </p>
<ul className="mt-2 space-y-1 text-xs text-slate-700">
<li>• Vị mặn ngọt vừa, sợi rõ, không bột.</li>
<li>• Đóng túi kín, bảo quản dễ dàng.</li>
</ul>
</div>
</div>
<div className="mt-2 rounded-lg border border-dashed border-emerald-300 bg-emerald-50/60 p-4">
<p className="text-xs font-semibold tracking-tight text-emerald-800 mb-1">
                Gợi ý bố cục collection thịt bò trên trang sản phẩm
              </p>
<p className="text-xs text-emerald-900 mb-1">
                • Với số lượng collection cố định (Thịt bò mát Việt Nam, Bò
                Úc/Mỹ, Wagyu &amp; Premium, Sản phẩm chế biến sẵn), nên dùng
                <span className="font-semibold">layout dạng grid 2–4 cột</span>
                để khách thấy toàn bộ lựa chọn trong một lần cuộn.
              </p>
<p className="text-xs text-emerald-900">
                • Slider chỉ nên dùng cho
                <span className="font-semibold">
                  collection nổi bật hoặc combo khuyến mãi
                </span>
                (ví dụ: "Combo cuối tuần", "Ưu đãi Wagyu"), đặt phía dưới grid
                chính. Như vậy khách dễ hiểu cấu trúc sản phẩm mà vẫn có khu vực
                hút mắt cho các gói nổi bật.
              </p>
</div>
</section>

<section className="space-y-4 border-t border-slate-200 pt-6">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
              6. Chuẩn bị gì trước khi sang trang sản phẩm của Fohla?
            </h2>
<p className="text-sm text-slate-700">
              Để chọn đúng và không tốn thời gian, hãy trả lời nhanh 3 câu hỏi:
            </p>
<ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-700">
<li>Bạn dự định nấu món gì? (xào, kho, lẩu, steak, nướng…)</li>
<li>
                Có bao nhiêu người ăn, trong đó có trẻ em/người lớn tuổi không?
              </li>
<li>Ngân sách cho bữa này khoảng bao nhiêu?</li>
</ol>
<p className="text-xs text-slate-600">
              Trên trang sản phẩm, bạn sẽ thấy phân loại rõ ràng:
              <span className="text-slate-900">
                Thịt bò mát Việt Nam – Bò nhập Úc/Mỹ – Wagyu &amp; Premium – Sản
                phẩm chế biến sẵn
              </span>
              . Chỉ cần chọn nhóm phù hợp với câu trả lời của bạn.
            </p>
</section>
</div>

<aside className="space-y-6">

<section className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Thịt bò cao cấp Fohla Food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 border-t border-slate-200 space-y-3">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-semibold tracking-tight text-slate-900">
                  Fohla Food – Thịt bò cho người kỹ tính tại TP.HCM
                </p>
<div className="flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.12 18.18 21.02 12 17.77 5.82 21.02 7 14.12 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-[11px] text-slate-700">4.9/5</span>
<span className="text-[11px] text-slate-400">
                    • 500+ đơn hàng
                  </span>
</div>
</div>
<p className="text-xs text-slate-600">
                Tập trung duy nhất vào thịt bò: từ thịt mát Việt Nam đến bò
                Úc/Mỹ, Wagyu và các sản phẩm chế biến sẵn.
              </p>
<div className="flex flex-wrap gap-2 pt-1">
<span className="rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-800">
                  Giao nhanh trong 2 giờ nội thành
                </span>
<span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                  Đóng gói chuẩn lạnh
                </span>
<span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                  Tư vấn theo món
                </span>
</div>
</div>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 space-y-4">
<p className="text-sm font-semibold tracking-tight text-slate-900">
              Gợi ý nhanh: Chọn thịt bò phù hợp trong 30 giây
            </p>
<div className="space-y-3">

<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-800">
                  1. Hôm nay bạn muốn nấu món gì?
                </p>
<div className="grid grid-cols-2 gap-2">
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-left">
                    Xào / kho / canh
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-left">
                    Lẩu / nhúng
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-left">
                    Steak / nướng
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-left">
                    Món nhanh (burger, bò viên,…)
                  </button>
</div>
</div>

<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-800">2. Số người ăn</p>
<div className="grid grid-cols-3 gap-2">
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    1–2
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    3–4
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    5+
                  </button>
</div>
</div>

<div className="space-y-1.5">
<p className="text-xs font-medium text-slate-800">
                  3. Ngân sách dự kiến
                </p>
<div className="grid grid-cols-3 gap-2">
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    &lt; 300K
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    300–600K
                  </button>
<button className="text-[11px] rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50 transition-colors">
                    &gt; 600K
                  </button>
</div>
</div>
<p className="text-[11px] text-slate-600">
                Dựa trên lựa chọn này, trên trang sản phẩm bạn chỉ cần tìm tag
                <span className="text-slate-900">
                  “Phù hợp: xào/kho”, “Phù hợp: steak/nướng”,…
                </span>
                mà Fohla đã ghi sẵn.
              </p>
</div>
<a className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-xs font-medium text-white hover:bg-emerald-400 hover:border-emerald-400 transition-colors" href="https://your-shopify-product-page-link.com" target="_blank">
              Sang trang sản phẩm Fohla để xem chi tiết &amp; giá
            </a>
<p className="text-[11px] text-slate-600 text-center">
              Bạn có thể chat ngay trên trang sản phẩm nếu cần Fohla gợi ý phần
              thịt phù hợp.
            </p>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
<p className="text-sm font-semibold tracking-tight text-slate-900">
              Khách tại TP.HCM nói gì về Fohla?
            </p>
<div className="space-y-3">

<div className="flex gap-3">
<img alt="Khách hàng Fohla" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900">
                    Anh Minh – Q.3
                  </p>
<p className="text-[11px] text-slate-600">
                    “Trước giờ toàn mua bò ở siêu thị, ăn được nhưng không ‘đã’.
                    Đợt sinh nhật vợ thử order ribeye Úc của Fohla, được hướng
                    dẫn nướng khá kỹ, kết quả mềm ngon bất ngờ, ăn xong mới hiểu
                    vì sao steak nhà hàng đắt.”
                  </p>
</div>
</div>

<div className="flex gap-3">
<img alt="Khách hàng Fohla" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900">
                    Chị Hằng – Thủ Đức
                  </p>
<p className="text-[11px] text-slate-600">
                    “Nhà có 2 bé nhỏ nên mình ưu tiên thịt tươi, ít mỡ, nấu
                    nhanh. Nhân viên Fohla hỏi khá kỹ rồi gợi ý combo thịt mát
                    Việt Nam + bò viên, giờ cứ hết là mình đặt lại theo combo đó
                    luôn.”
                  </p>
</div>
</div>

<div className="flex gap-3">
<img alt="Khách hàng Fohla" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex-1">
<p className="text-xs font-medium text-slate-900">
                    Anh Long – Q.7
                  </p>
<p className="text-[11px] text-slate-600">
                    “Mình thích BBQ, thỉnh thoảng muốn đổi không khí. Fohla tư
                    vấn chi tiết giữa shortplate Mỹ và ba chỉ bò thường, ăn thử
                    mới thấy khác hẳn. Giá không rẻ như chợ, nhưng xứng đáng.”
                  </p>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-slate-200 bg-white p-4 space-y-3">
<p className="text-sm font-semibold tracking-tight text-slate-900">
              Thông tin nhanh về Fohla Food
            </p>
<ul className="space-y-1.5 text-[11px] text-slate-700">
<li>
                • Địa bàn chính: TP.HCM, giao nhanh trong 2 giờ nội thành (tùy
                khu vực).
              </li>
<li>
                • Sản phẩm chính: thịt bò mát Việt Nam, bò nhập khẩu Úc/Mỹ,
                Wagyu &amp; premium cuts.
              </li>
<li>
                • Thêm: bò viên, bò xay hamburger, khô bò… cho ngày bận rộn.
              </li>
<li>• Đóng gói: hút chân không, bảo quản lạnh đúng chuẩn.</li>
<li>• Tư vấn: qua Zalo/Facebook, theo món và ngân sách.</li>
</ul>
<div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
<p className="text-[11px] text-slate-900">
                Nếu lần đầu thử Fohla, hãy bắt đầu từ
                <span className="text-emerald-700 font-medium">
                  thịt bò mát Việt Nam hoặc bò Úc/Mỹ
                </span>
                . Khi đã hài lòng, bạn có thể nâng lên Wagyu hoặc premium cuts
                cho những dịp đặc biệt.
              </p>
</div>
</section>
</aside>
</article>
</main>

<footer className="border-t border-slate-200 bg-white/95 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="text-[11px] text-slate-600 text-center sm:text-left">
          Sẵn sàng thử một trải nghiệm thịt bò khác biệt? – Fohla sẽ gợi ý phần
          thịt phù hợp với món bạn chuẩn bị nấu.
        </div>
<a className="inline-flex items-center justify-center rounded-md border border-emerald-500 bg-emerald-500 px-4 py-2 text-xs font-medium text-white hover:bg-emerald-400 hover:border-emerald-400 transition-colors" href="https://your-shopify-product-page-link.com" target="_blank">
          Sang trang sản phẩm Fohla ngay
        </a>
</div>
</footer>
</div>
</html>

    </>
  );
}
