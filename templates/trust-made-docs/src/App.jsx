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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // ═══════════════════════════════════════════════════
    // THEME TOGGLE
    // ═══════════════════════════════════════════════════
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('tm-dash-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    function applyTheme(theme) {
      html.setAttribute('data-theme', theme);
      localStorage.setItem('tm-dash-theme', theme);
    }

    function toggleTheme() {
      applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    }

    document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-desktop').addEventListener('click', toggleTheme);

    // ═══════════════════════════════════════════════════
    // MOBILE SIDEBAR TOGGLE
    // ═══════════════════════════════════════════════════
    const sidebar = document.getElementById('icon-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('mobile-menu-btn');

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('visible');
      menuBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('visible');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    menuBtn.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener('click', closeSidebar);

    // ═══════════════════════════════════════════════════
    // MOBILE PANEL TAB SWITCHER
    // ═══════════════════════════════════════════════════
    function switchMobileTab(tab) {
      const counselPanel = document.getElementById('counsel-panel');
      const docPanel = document.getElementById('doc-panel');
      const tabCounsel = document.getElementById('tab-counsel');
      const tabDoc = document.getElementById('tab-doc');

      if (tab === 'counsel') {
        counselPanel.classList.remove('mobile-hidden');
        docPanel.classList.add('mobile-hidden');
        tabCounsel.classList.add('active');
        tabCounsel.setAttribute('aria-selected', 'true');
        tabDoc.classList.remove('active');
        tabDoc.setAttribute('aria-selected', 'false');
      } else {
        docPanel.classList.remove('mobile-hidden');
        counselPanel.classList.add('mobile-hidden');
        tabDoc.classList.add('active');
        tabDoc.setAttribute('aria-selected', 'true');
        tabCounsel.classList.remove('active');
        tabCounsel.setAttribute('aria-selected', 'false');
      }
    }

    // ═══════════════════════════════════════════════════
    // TRANSLATIONS
    // ═══════════════════════════════════════════════════
    const translations = {
      en: {
        watermark: 'Draft', stripLabel: '',
        jurisdiction: 'State of California · County of Los Angeles · Governed by CA Probate Code §§ 15000–19403 & IRC § 2056',
        titleMain: 'The Harrington Family Trust',
        subtitle: 'Revocable Living Trust Agreement — Executed under California Law',
        intro: `This Revocable Living Trust Agreement is made this <span class="doc-field">12th day of January, 2026</span>, by and between <strong>James R. Harrington</strong> of 1240 Bel Air Road, Los Angeles, CA 90077 ("the Grantor" and initial "Trustee"), and <strong>TrustMade, Inc.</strong>, a professional corporation with offices at 2029 Century Park East, Suite 1400, Los Angeles, CA 90067 ("the Successor Trustee").`,
        artIILabel: 'Article I', artIITitle: 'Real Property Assets',
        artIIBody: `The Grantor confirms that the real property commonly known as <strong>1240 Bel Air Road, Los Angeles, CA 90077</strong> (Assessor's Parcel No. <span class="doc-field">4369-021-015</span>) has been duly conveyed to this Trust by grant deed recorded with the Los Angeles County Recorder on <span class="doc-field">October 14, 2025</span>, as Instrument No. <span class="doc-field">20251014-0442991</span>. The Trustee is authorized to manage, lease, encumber, or sell said property in accordance with the terms of this Trust and CA Probate Code § 16220.`,
        artIINote: '*Title vesting confirmed. LA County Recorder search completed January 12, 2026. No liens noted.',
        artIIILabel: 'Article II', artIIITitle: 'Assignment of Business Interests',
        artIIIBody: `The Grantor hereby assigns, transfers, and conveys to the Trustee one hundred percent (100%) of the membership interest in <strong>Harrington Capital Ventures LLC</strong>, a California limited liability company (CA SOS File No. <span class="doc-field">202560415891</span>), to be held as part of the Trust Estate, pursuant to CA Corp. Code § 17704.01.`,
        artIIINote: '*CA SOS confirmation pending — provisional pending state acknowledgment.',
        artIVLabel: 'Article III', artIVTitle: 'Federal Estate Tax & Generation-Skipping Provisions',
        artIVBody: `This Trust is structured to qualify for the federal estate tax marital deduction under IRC § 2056. The Successor Trustee shall divide the Trust Estate into a Survivor's Trust, a Bypass Trust, and a Marital QTIP Trust to maximize the applicable exclusion under IRC § 2010 — currently <span class="doc-highlight">$13,610,000 per person (2026)</span>.`,
        artIVBody2: 'Any generation-skipping transfer tax exposure under IRC § 2601 et seq. shall be reported on IRS Form 706-GS(D). GST exemption allocation per Trustee election on IRS Form 709.',
        artVLabel: 'Article IV', artVTitle: 'Successor Trustee Powers',
        artVBody: 'The Successor Trustee shall have all powers under CA Probate Code §§ 16200–16249, including power to invest under the Uniform Prudent Investor Act (CA Prob. Code § 16045 et seq.); to retain or sell Trust assets; to borrow funds; and to make distributions to Beneficiaries in cash or in kind.',
        artSpendTitle: 'Spendthrift Protection',
        artSpendBody: 'No interest of any beneficiary shall be subject to assignment, anticipation, pledge, attachment, execution, or bankruptcy proceedings before actual receipt, pursuant to CA Probate Code § 15300.',
        artContestTitle: 'No-Contest Clause',
        artContestBody: 'Any beneficiary who directly or indirectly contests this Trust or any provision thereof shall forfeit their entire interest under this Trust, pursuant to CA Probate Code § 21310 et seq.',
        witness: 'IN WITNESS WHEREOF, the Grantor has executed this Trust Agreement on the date first written above, and the Successor Trustee has accepted the trusts herein created.',
        sigGrantorTitle: 'Grantor & Initial Trustee',
        sigTrusteeTitle: 'TrustMade, Inc. · Successor Trustee',
        notice: '',
      },
      es: {
        watermark: 'Borrador', stripLabel: 'TRADUCCIÓN AL ESPAÑOL',
        jurisdiction: 'Estado de California · Condado de Los Ángeles · Regulado por CA Probate Code §§ 15000–19403 e IRC § 2056',
        titleMain: 'Fideicomiso Familiar Harrington',
        subtitle: 'Acuerdo de Fideicomiso en Vida Revocable — Ejecutado bajo la Ley de California',
        intro: `Este Acuerdo de Fideicomiso en Vida Revocable se suscribe el <span class="doc-field">12 de enero de 2026</span>, entre <strong>James R. Harrington</strong> de 1240 Bel Air Road, Los Ángeles, CA 90077 ("el Otorgante" y Fiduciario inicial) y <strong>TrustMade, Inc.</strong>, persona moral con domicilio en 2029 Century Park East, Suite 1400, Los Ángeles, CA 90067 ("el Fiduciario Sucesor").`,
        artIILabel: 'Artículo I', artIITitle: 'Bienes Inmuebles',
        artIIBody: `El Otorgante confirma que el inmueble conocido como <strong>1240 Bel Air Road, Los Ángeles, CA 90077</strong> (Número de Parcela: <span class="doc-field">4369-021-015</span>) fue debidamente transferido a este Fideicomiso mediante escritura de donación registrada en el Registro del Condado de Los Ángeles el <span class="doc-field">14 de octubre de 2025</span>, Instrumento No. <span class="doc-field">20251014-0442991</span>. El Fiduciario está autorizado para administrar, arrendar, gravar o vender dicha propiedad conforme al CA Probate Code § 16220.`,
        artIINote: '*Titularidad confirmada. Búsqueda en Registro del Condado de LA completada el 12 de enero de 2026.',
        artIIILabel: 'Artículo II', artIIITitle: 'Cesión de Intereses Comerciales',
        artIIIBody: `El Otorgante cede, transfiere y convierte al Fiduciario el cien por ciento (100%) de la participación en <strong>Harrington Capital Ventures LLC</strong>, compañía de responsabilidad limitada de California (CA SOS No. <span class="doc-field">202560415891</span>), para ser parte del patrimonio fiduciario, conforme al CA Corp. Code § 17704.01.`,
        artIIINote: '*Confirmación de CA SOS pendiente — provisional hasta acuse estatal.',
        artIVLabel: 'Artículo III', artIVTitle: 'Impuesto Federal al Patrimonio y Disposiciones de Salto Generacional',
        artIVBody: `Este Fideicomiso está estructurado para calificar para la deducción marital del impuesto federal al patrimonio bajo IRC § 2056. El Fiduciario Sucesor dividirá el patrimonio en Fideicomiso del Sobreviviente, Fideicomiso de Crédito y, si aplica, Fideicomiso QTIP Conyugal, maximizando la exclusión bajo IRC § 2010 — actualmente <span class="doc-highlight">$13,610,000 por persona (2026)</span>.`,
        artIVBody2: 'Cualquier exposición al impuesto de transferencia por salto generacional bajo IRC § 2601 se informará en Formulario IRS 706-GS(D).',
        artVLabel: 'Artículo IV', artVTitle: 'Facultades del Fiduciario Sucesor',
        artVBody: 'El Fiduciario Sucesor tendrá todas las facultades otorgadas bajo CA Probate Code §§ 16200–16249, incluyendo invertir activos del Fideicomiso conforme a la Ley del Inversionista Prudente; retener o vender activos; solicitar préstamos; y realizar distribuciones a los Beneficiarios en efectivo o en especie.',
        artSpendTitle: 'Protección contra Dilapidación',
        artSpendBody: 'Ningún interés de un beneficiario podrá ser sujeto a cesión, anticipación, prenda, embargo, ejecución o procedimientos de quiebra antes de su recepción efectiva, conforme al CA Probate Code § 15300.',
        artContestTitle: 'Cláusula de No Impugnación',
        artContestBody: 'Todo beneficiario que impugne directa o indirectamente este Fideicomiso perderá íntegramente su participación, conforme al CA Probate Code § 21310 et seq.',
        witness: 'EN FE DE LO CUAL, el Otorgante ha ejecutado este Acuerdo de Fideicomiso en la fecha indicada anteriormente.',
        sigGrantorTitle: 'Otorgante y Fiduciario Inicial',
        sigTrusteeTitle: 'TrustMade, Inc. · Fiduciario Sucesor',
        notice: '<strong>Aviso de Traducción:</strong> Este documento ha sido traducido al español para mayor accesibilidad. La versión en inglés es el original legalmente vinculante.',
      },
      zh: {
        watermark: '草稿', stripLabel: '中文翻译版本',
        jurisdiction: '加利福尼亚州 · 洛杉矶县 · 依据加州遗嘱认证法典 §§ 15000–19403 及美国税法 § 2056',
        titleMain: '哈灵顿家族信托',
        subtitle: '可撤销生前信托协议 — 依据加利福尼亚州法律签订',
        intro: `本可撤销生前信托协议于 <span class="doc-field">2026年1月12日</span> 由 <strong>James R. Harrington</strong>（"委托人"及初始受托人）与 <strong>TrustMade, Inc.</strong>（"继任受托人"）共同签订。`,
        artIILabel: '第一条', artIITitle: '不动产资产',
        artIIBody: `委托人确认，地址为 <strong>1240 Bel Air Road, Los Angeles, CA 90077</strong>（地块编号：<span class="doc-field">4369-021-015</span>）的不动产已于 <span class="doc-field">2025年10月14日</span> 通过让与契据（文书号：<span class="doc-field">20251014-0442991</span>）正式过户至本信托。受托人有权依据加州遗嘱认证法典 § 16220 对该不动产进行管理、出租、抵押或出售。`,
        artIINote: '*所有权过户已确认。洛杉矶县房产记录查询完成于2026年1月12日，无留置权记录。',
        artIIILabel: '第二条', artIIITitle: '商业权益转让',
        artIIIBody: `委托人特此将 <strong>Harrington Capital Ventures LLC</strong>（加州有限责任公司，加州州务卿备案号：<span class="doc-field">202560415891</span>）100% 的成员权益转让给受托人，作为信托财产，依据加州公司法典 § 17704.01。`,
        artIIINote: '*加州州务卿确认待处理 — 暂定，待州府确认后生效。',
        artIVLabel: '第三条', artIVTitle: '联邦遗产税及跨代转让税条款',
        artIVBody: `本信托旨在符合 IRC § 2056 联邦遗产税婚姻扣除资格。委托人去世后，继任受托人将把信托财产分为生存者信托、旁路信托及（如适用）婚姻QTIP信托，以最大化利用 IRC § 2010 规定的适用豁免额 — 目前为 <span class="doc-highlight">每人 $13,610,000（2026年）</span>。`,
        artIVBody2: '依据 IRC § 2601 等条款产生的任何跨代转让税风险须申报于 IRS 表格 706-GS(D)。',
        artVLabel: '第四条', artVTitle: '继任受托人权限',
        artVBody: '继任受托人拥有加州遗嘱认证法典 §§ 16200–16249 赋予受托人的全部权力，包括依据《统一谨慎投资者法》投资信托资产；保留或出售任何信托资产；代表信托借款；以及以现金或实物方式向受益人进行分配。',
        artSpendTitle: '防挥霍保护条款',
        artSpendBody: '任何受益人在实际收取前，其在信托收益或本金中的权益不得被转让、预支、质押、扣押、执行或用于破产程序，依据加州遗嘱认证法典 § 15300。',
        artContestTitle: '不得争议条款',
        artContestBody: '任何受益人若直接或间接对本信托或其任何条款提出异议，将丧失其在本信托下的全部权益，依据加州遗嘱认证法典 § 21310 等条款。',
        witness: '以此为证，委托人于上述日期签署本信托协议，继任受托人接受本协议所创设之信托。',
        sigGrantorTitle: '委托人及初始受托人', sigTrusteeTitle: 'TrustMade, Inc. · 继任受托人',
        notice: '<strong>翻译说明：</strong>本文件已翻译成中文以提高可读性。英文版本为具有法律效力的原始文件。',
      },
      ko: {
        watermark: '초안', stripLabel: '한국어 번역본',
        jurisdiction: '캘리포니아 주 · 로스앤젤레스 카운티 · 캘리포니아 유언검인법 §§ 15000–19403 및 IRC § 2056 적용',
        titleMain: '해링턴 가족 신탁',
        subtitle: '캘리포니아 법률에 따라 체결된 취소 가능한 생전 신탁 계약',
        intro: `이 취소 가능한 생전 신탁 계약은 <span class="doc-field">2026년 1월 12일</span>에 <strong>James R. Harrington</strong> ("위탁자" 및 초기 수탁자)과 <strong>TrustMade, Inc.</strong> ("후임 수탁자") 사이에 체결됩니다.`,
        artIILabel: '제1조', artIITitle: '부동산 자산',
        artIIBody: `위탁자는 <strong>1240 Bel Air Road, Los Angeles, CA 90077</strong> (필지번호: <span class="doc-field">4369-021-015</span>)로 알려진 부동산이 <span class="doc-field">2025년 10월 14일</span>에 양도 증서(문서 번호: <span class="doc-field">20251014-0442991</span>)로 이 신탁에 적법하게 양도되었음을 확인합니다.`,
        artIINote: '*소유권 귀속 확인. 2026년 1월 12일 LA 카운티 등기소 검색 완료. 담보권 없음.',
        artIIILabel: '제2조', artIIITitle: '사업 지분 양도',
        artIIIBody: `위탁자는 캘리포니아 유한책임회사인 <strong>Harrington Capital Ventures LLC</strong> (CA SOS 번호: <span class="doc-field">202560415891</span>)의 지분 100%를 신탁 재산의 일부로 수탁자에게 양도합니다.`,
        artIIINote: '*CA SOS 확인 보류 중.',
        artIVLabel: '제3조', artIVTitle: '연방 유산세 및 세대 건너뛰기 조항',
        artIVBody: `이 신탁은 IRC § 2056에 따른 연방 유산세 부부 공제 자격을 갖추도록 구성됩니다. IRC § 2010 하의 적용 제외 금액을 최대화하기 위해 현재 <span class="doc-highlight">1인당 $13,610,000 (2026)</span>에 해당합니다.`,
        artIVBody2: 'IRC § 2601에 따른 세대 건너뛰기 이전세 위험은 IRS 양식 706-GS(D)에 보고됩니다.',
        artVLabel: '제4조', artVTitle: '후임 수탁자 권한',
        artVBody: '후임 수탁자는 CA 유언검인법 §§ 16200–16249에 따른 모든 수탁자 권한을 가집니다.',
        artSpendTitle: '낭비 방지 보호 조항',
        artSpendBody: '어떤 수익자도 실제 수령 전에 신탁 수익이나 원금에 대한 권리를 양도, 예상, 담보, 압류, 집행 또는 파산 절차에 이용할 수 없습니다.',
        artContestTitle: '이의 제기 금지 조항',
        artContestBody: '이 신탁 또는 그 조항에 직간접적으로 이의를 제기하는 수익자는 이 신탁 하의 모든 권리를 박탈당합니다.',
        witness: '이에 위탁자는 위에 기재된 날짜에 이 신탁 계약을 체결하였으며, 후임 수탁자는 여기에 규정된 신탁을 수락하였습니다.',
        sigGrantorTitle: '위탁자 및 초기 수탁자', sigTrusteeTitle: 'TrustMade, Inc. · 후임 수탁자',
        notice: '<strong>번역 고지:</strong> 이 문서는 접근성을 위해 번역되었습니다. 영어 버전이 법적 구속력 있는 원본입니다.',
      },
      tl: {
        watermark: 'Draft', stripLabel: 'TAGALOG NA SALIN',
        jurisdiction: 'Estado ng California · Lalawigan ng Los Angeles · Pinamamahalaan ng CA Probate Code §§ 15000–19403 at IRC § 2056',
        titleMain: 'Ang Harrington Family Trust',
        subtitle: 'Kasunduan ng Revocable Living Trust — Naisakatuparan sa ilalim ng Batas ng California',
        intro: `Ang Kasunduan ng Revocable Living Trust na ito ay ginawa noong <span class="doc-field">ika-12 ng Enero, 2026</span>, sa pagitan ni <strong>James R. Harrington</strong> ("ang Grantor" at unang Trustee) at ng <strong>TrustMade, Inc.</strong> ("ang Kahaliling Trustee").`,
        artIILabel: 'Artikulo I', artIITitle: 'Mga Ari-ariang Real Property',
        artIIBody: `Kinukumpirma ng Grantor na ang real property na kilala bilang <strong>1240 Bel Air Road, Los Angeles, CA 90077</strong> (APN: <span class="doc-field">4369-021-015</span>) ay nailipat na sa Trust sa pamamagitan ng grant deed na naitala noong <span class="doc-field">Oktubre 14, 2025</span>.`,
        artIINote: '*Nakumpirma ang pagmamay-ari. Kumpleto ang paghahanap sa LA County Recorder noong Enero 12, 2026.',
        artIIILabel: 'Artikulo II', artIIITitle: 'Paglilipat ng Interes sa Negosyo',
        artIIIBody: `Inilipat ng Grantor ang 100% ng interes sa <strong>Harrington Capital Ventures LLC</strong> (CA SOS No. <span class="doc-field">202560415891</span>) sa Trustee bilang bahagi ng Trust Estate.`,
        artIIINote: '*Naghihintay pa ang kumpirmasyon ng CA SOS.',
        artIVLabel: 'Artikulo III', artIVTitle: 'Federal Estate Tax at Generation-Skipping Provisions',
        artIVBody: `Ang Trust na ito ay nakaayos para maging karapat-dapat sa federal estate tax marital deduction sa ilalim ng IRC § 2056. Kasalukuyang <span class="doc-highlight">$13,610,000 bawat tao (2026)</span>.`,
        artIVBody2: 'Ang anumang pagkakalantad sa generation-skipping transfer tax ay iuulat sa IRS Form 706-GS(D).',
        artVLabel: 'Artikulo IV', artVTitle: 'Mga Kapangyarihan ng Kahaliling Trustee',
        artVBody: 'Magtataglay ang Kahaliling Trustee ng lahat ng kapangyarihan sa ilalim ng CA Probate Code §§ 16200–16249.',
        artSpendTitle: 'Proteksyon sa Paggastos',
        artSpendBody: 'Walang interes ng sinumang benepisyaryo ang maaaring ibigay, maantisipahan, ipangako, o isangla bago aktwal na matanggap.',
        artContestTitle: 'No-Contest na Sugnay',
        artContestBody: 'Sinumang benepisyaryo na direkta o hindi direktang nakikipaglaban sa Trust na ito ay mawawalan ng lahat ng interes.',
        witness: 'BILANG KATIBAYAN NITO, nilagdaan ng Grantor ang Kasunduan ng Trust na ito sa unang petsang nakasulat.',
        sigGrantorTitle: 'Grantor at Unang Trustee', sigTrusteeTitle: 'TrustMade, Inc. · Kahaliling Trustee',
        notice: '<strong>Paunawa sa Pagsasalin:</strong> Ang dokumentong ito ay isinalin sa Filipino para sa accessibility. Ang English na bersyon ang legal na orihinal.',
      },
      vi: {
        watermark: 'Bản Thảo', stripLabel: 'BẢN DỊCH TIẾNG VIỆT',
        jurisdiction: 'Bang California · Hạt Los Angeles · Được điều chỉnh bởi CA Probate Code §§ 15000–19403 và IRC § 2056',
        titleMain: 'Quỹ Ủy Thác Gia Đình Harrington',
        subtitle: 'Thỏa Thuận Quỹ Ủy Thác Sống Có Thể Hủy Ngang — Được thực hiện theo Luật California',
        intro: `Thỏa Thuận Quỹ Ủy Thác Sống Có Thể Hủy Ngang này được lập vào <span class="doc-field">ngày 12 tháng 1 năm 2026</span>, giữa <strong>James R. Harrington</strong> ("Người Ủy Thác" và Người Được Ủy Thác ban đầu) và <strong>TrustMade, Inc.</strong> ("Người Được Ủy Thác Kế Nhiệm").`,
        artIILabel: 'Điều I', artIITitle: 'Tài Sản Bất Động Sản',
        artIIBody: `Người Ủy Thác xác nhận rằng bất động sản tại <strong>1240 Bel Air Road, Los Angeles, CA 90077</strong> (APN: <span class="doc-field">4369-021-015</span>) đã được chuyển nhượng hợp lệ cho Quỹ Ủy Thác này vào <span class="doc-field">ngày 14 tháng 10 năm 2025</span>.`,
        artIINote: '*Xác nhận quyền sở hữu. Tìm kiếm Hồ Sơ Quận LA hoàn tất ngày 12/1/2026. Không có quyền cầm giữ.',
        artIIILabel: 'Điều II', artIIITitle: 'Chuyển Nhượng Lợi Ích Kinh Doanh',
        artIIIBody: `Người Ủy Thác chuyển nhượng 100% quyền lợi thành viên trong <strong>Harrington Capital Ventures LLC</strong> (CA SOS số <span class="doc-field">202560415891</span>) cho Người Được Ủy Thác.`,
        artIIINote: '*Xác nhận CA SOS đang chờ xử lý.',
        artIVLabel: 'Điều III', artIVTitle: 'Thuế Bất Động Sản Liên Bang và Các Điều Khoản Bỏ Qua Thế Hệ',
        artIVBody: `Quỹ Ủy Thác này được cấu trúc để đủ điều kiện khấu trừ hôn nhân theo IRC § 2056, hiện là <span class="doc-highlight">$13,610,000 mỗi người (2026)</span>.`,
        artIVBody2: 'Bất kỳ rủi ro thuế chuyển nhượng bỏ qua thế hệ nào sẽ được báo cáo trên Mẫu IRS 706-GS(D).',
        artVLabel: 'Điều IV', artVTitle: 'Quyền Hạn Của Người Được Ủy Thác Kế Nhiệm',
        artVBody: 'Người Được Ủy Thác Kế Nhiệm sẽ có tất cả các quyền theo CA Probate Code §§ 16200–16249.',
        artSpendTitle: 'Bảo Vệ Chống Phung Phí',
        artSpendBody: 'Không có lợi ích nào của bất kỳ người thụ hưởng nào trong thu nhập hoặc vốn của Quỹ Ủy Thác này bị chuyển nhượng trước khi thực sự nhận được.',
        artContestTitle: 'Điều Khoản Không Tranh Chấp',
        artContestBody: 'Bất kỳ người thụ hưởng nào tranh chấp tính hợp lệ của Quỹ Ủy Thác này sẽ mất toàn bộ quyền lợi.',
        witness: 'ĐỂ LÀM CHỨNG, Người Ủy Thác đã ký kết Hợp Đồng Ủy Thác này vào ngày ghi ở trên.',
        sigGrantorTitle: 'Người Ủy Thác và Người Được Ủy Thác Ban Đầu', sigTrusteeTitle: 'TrustMade, Inc. · Người Được Ủy Thác Kế Nhiệm',
        notice: '<strong>Thông Báo Dịch Thuật:</strong> Tài liệu này đã được dịch sang tiếng Việt để dễ tiếp cận. Phiên bản tiếng Anh là bản gốc có giá trị pháp lý.',
      }
    };

    const langMeta = {
      en: { code: 'EN', name: 'English',     badge: 'English' },
      es: { code: 'ES', name: 'Español',     badge: 'Spanish' },
      zh: { code: 'ZH', name: '中文',         badge: 'Mandarin' },
      ko: { code: 'KO', name: '한국어',        badge: 'Korean' },
      tl: { code: 'TL', name: 'Filipino',    badge: 'Filipino' },
      vi: { code: 'VI', name: 'Tiếng Việt',  badge: 'Vietnamese' },
    };

    let currentLang = 'en';
    let pendingLang = null;

    function setLang(lang, btnEl) {
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btnEl.classList.add('active');
      btnEl.setAttribute('aria-checked', 'true');
      pendingLang = lang;
      document.getElementById('lang-count').textContent = langMeta[lang].code;
      document.getElementById('score-lang-label').textContent = langMeta[lang].name;
      document.getElementById('lang-context-tag').innerHTML =
        `<i class="ph ph-translate" aria-hidden="true"></i> ${langMeta[lang].name}`;
    }

    function applyTranslation(lang) {
      const t = translations[lang];
      if (!t) return;
      const paper = document.getElementById('doc-paper');
      paper.style.opacity = '0.4';
      setTimeout(() => {
        document.getElementById('doc-watermark').textContent   = t.watermark;
        document.getElementById('doc-jurisdiction').textContent= t.jurisdiction;
        document.getElementById('doc-title-main').textContent  = t.titleMain;
        document.getElementById('doc-subtitle').textContent    = t.subtitle;
        document.getElementById('doc-intro').innerHTML         = t.intro;
        document.getElementById('art-ii-label').textContent    = t.artIILabel;
        document.getElementById('art-ii-title').textContent    = t.artIITitle;
        document.getElementById('art-ii-body').innerHTML       = t.artIIBody;
        document.getElementById('art-ii-note').innerHTML       = t.artIINote;
        document.getElementById('art-iii-label').textContent   = t.artIIILabel;
        document.getElementById('art-iii-title').textContent   = t.artIIITitle;
        document.getElementById('art-iii-body').innerHTML      = t.artIIIBody;
        document.getElementById('art-iii-note').innerHTML      = t.artIIINote;
        document.getElementById('art-iv-label').textContent    = t.artIVLabel;
        document.getElementById('art-iv-title').innerHTML      = t.artIVTitle;
        document.getElementById('art-iv-body').innerHTML       = t.artIVBody;
        document.getElementById('art-iv-body2').textContent    = t.artIVBody2;
        document.getElementById('art-v-label').textContent     = t.artVLabel;
        document.getElementById('art-v-title').textContent     = t.artVTitle;
        document.getElementById('art-v-body').textContent      = t.artVBody;
        document.getElementById('art-spend-title').textContent = t.artSpendTitle;
        document.getElementById('art-spend-body').textContent  = t.artSpendBody;
        document.getElementById('art-contest-title').textContent = t.artContestTitle;
        document.getElementById('art-contest-body').textContent  = t.artContestBody;
        document.getElementById('doc-witness').textContent     = t.witness;
        document.getElementById('sig-grantor-title').textContent = t.sigGrantorTitle;
        document.getElementById('sig-trustee-title').textContent = t.sigTrusteeTitle;

        const notice = document.getElementById('translation-notice');
        const noticeText = document.getElementById('translation-notice-text');
        if (lang !== 'en' && t.notice) {
          noticeText.innerHTML = t.notice;
          notice.classList.add('visible');
        } else {
          notice.classList.remove('visible');
        }

        const strip = document.getElementById('doc-lang-strip');
        if (lang !== 'en') {
          strip.textContent = t.stripLabel;
          strip.classList.add('visible');
        } else {
          strip.classList.remove('visible');
        }

        const badge = document.getElementById('topbar-lang-badge');
        const badgeText = document.getElementById('topbar-lang-text');
        if (lang !== 'en') {
          badgeText.textContent = langMeta[lang].badge;
          badge.style.display = 'flex';
        } else {
          badge.style.display = 'none';
        }

        currentLang = lang;
        paper.style.opacity = '1';
      }, 220);
    }

    // ═══════════════════════════════════════════════════
    // MODE TOGGLE
    // ═══════════════════════════════════════════════════
    function setMode(mode) {
      const isCounsel = mode === 'counsel';
      document.getElementById('btn-counsel').classList.toggle('active', isCounsel);
      document.getElementById('btn-counsel').setAttribute('aria-pressed', isCounsel);
      document.getElementById('btn-optimize').classList.toggle('active', !isCounsel);
      document.getElementById('btn-optimize').setAttribute('aria-pressed', !isCounsel);
      document.getElementById('view-counsel').classList.toggle('active', isCounsel);
      document.getElementById('view-optimize').classList.toggle('active', !isCounsel);
      document.getElementById('mode-label').textContent = isCounsel ? 'ACTIVE' : 'OPTIMIZE';
    }

    // ═══════════════════════════════════════════════════
    // CLAUSE TOGGLES
    // ═══════════════════════════════════════════════════
    function toggleClause(clauseId, rowEl) {
      const toggle = rowEl.querySelector('.clause-toggle');
      const isOn = toggle.classList.contains('on');
      toggle.classList.toggle('on', !isOn);
      toggle.setAttribute('aria-checked', (!isOn).toString());
      const clause = document.getElementById(clauseId);
      if (clause) {
        if (!isOn) {
          clause.classList.remove('opt-hidden');
          clause.classList.add('flash');
          setTimeout(() => clause.classList.remove('flash'), 1200);
        } else {
          clause.classList.add('opt-hidden');
        }
      }
      updateScore();
    }

    function updateScore() {
      const activeToggles = document.querySelectorAll('#view-optimize .clause-toggle.on').length;
      const score = Math.min(58 + activeToggles * 7 + (currentLang !== 'en' ? 3 : 0), 98);
      document.getElementById('opt-score').textContent = score;
      const pct = Math.min(45 + activeToggles * 8, 98);
      document.getElementById('progress-fill').style.width = pct + '%';
      document.getElementById('progress-val').textContent = pct + '%';
      document.getElementById('progress-val').setAttribute('aria-label', `${pct}% complete`);
      const ring = document.querySelector('.score-ring circle');
      const dash = 175;
      ring.style.strokeDashoffset = dash - (dash * score / 100);
    }

    // ═══════════════════════════════════════════════════
    // APPLY OPTIMIZATIONS
    // ═══════════════════════════════════════════════════
    let applied = false;
    function applyOptimizations() {
      if (applied) return;
      const btn = document.getElementById('opt-apply-btn');
      btn.innerHTML = '<i class="ph ph-spinner" id="apply-spin" aria-hidden="true"></i> Applying…';
      btn.setAttribute('aria-busy', 'true');

      // Use requestAnimationFrame to not block main thread; GSAP may not be loaded yet
      const spin = () => {
        const spinEl = document.getElementById('apply-spin');
        if (spinEl && window.gsap) {
          gsap.to(spinEl, { rotation: 360, duration: 0.8, repeat: 2, ease: 'linear' });
        }
      };

      if (pendingLang && pendingLang !== currentLang) {
        setTimeout(() => applyTranslation(pendingLang), 400);
      }

      setTimeout(() => {
        spin();
        setTimeout(() => {
          btn.classList.add('applied');
          btn.innerHTML = '<i class="ph ph-check-circle" aria-hidden="true"></i> Applied to Document';
          btn.setAttribute('aria-busy', 'false');
          applied = true;

          showToast(
            'ph-check-circle',
            'Optimizations Applied',
            `Document updated — ${document.querySelectorAll('.clause-toggle.on').length} active clauses, language: <strong>${pendingLang ? langMeta[pendingLang].name : langMeta[currentLang].name}</strong>.`
          );

          setTimeout(() => {
            btn.classList.remove('applied');
            btn.innerHTML = '<i class="ph ph-arrow-clockwise" aria-hidden="true"></i> Apply to Document';
            applied = false;
          }, 4000);
        }, 1600);
      }, 50);
    }

    // ═══════════════════════════════════════════════════
    // RESET
    // ═══════════════════════════════════════════════════
    document.getElementById('reset-btn').addEventListener('click', () => {
      setLang('en', document.querySelector('[data-lang="en"]'));
      applyTranslation('en');
      pendingLang = null;
      document.querySelectorAll('.clause-toggle').forEach((t, i) => {
        const on = i < 4;
        t.classList.toggle('on', on);
        t.setAttribute('aria-checked', on.toString());
      });
      document.getElementById('clause-spendthrift').classList.add('opt-hidden');
      document.getElementById('clause-contest').classList.add('opt-hidden');
      updateScore();
      showToast('ph-arrow-counter-clockwise', 'Session Reset', 'Document restored to defaults. Language set to English.');
    });

    // ═══════════════════════════════════════════════════
    // TOAST
    // ═══════════════════════════════════════════════════
    let toastTimer = null;
    function showToast(icon, title, body) {
      const t = document.getElementById('toast');
      t.querySelector('.toast-icon i').className = `ph ${icon}`;
      t.querySelector('.toast-content h4').textContent = title;
      t.querySelector('.toast-content p').innerHTML = body;
      t.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => t.classList.remove('show'), 7000);
    }

    // ═══════════════════════════════════════════════════
    // INIT — wait for GSAP defer + Phosphor icons
    // ═══════════════════════════════════════════════════
    function initAnimations() {
      if (!window.gsap) { setTimeout(initAnimations, 100); return; }
      gsap.from('#doc-paper', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 });
      gsap.from('#chat-messages > *', { x: -12, opacity: 0, duration: 0.6, stagger: 0.14, ease: 'power2.out', delay: 0.25 });
      setTimeout(() => {
        showToast('ph-buildings', 'CA Secretary of State Verified', '<strong>Harrington Capital Ventures LLC</strong> confirmed active. Article II drafted and inserted.');
        const na = document.getElementById('new-article');
        if (na) gsap.fromTo(na, { backgroundColor: 'rgba(74,127,168,0.18)' }, { backgroundColor: 'rgba(74,127,168,0)', duration: 2.4, ease: 'power1.out' });
      }, 2000);

      const spinner = document.querySelector('.thought-item.active i');
      if (spinner) gsap.to(spinner, { rotation: 360, duration: 1.2, repeat: -1, ease: 'linear' });
      gsap.fromTo('.thought-item', { opacity: 0, x: -5 }, { opacity: (i) => i < 2 ? 0.7 : 1, x: 0, stagger: 0.3, delay: 0.8, duration: 0.45 });
    }

    // Kick off animations after DOM ready + scripts loaded
    if (document.readyState === 'complete') {
      initAnimations();
    } else {
      window.addEventListener('load', initAnimations);
    }

    // ═══════════════════════════════════════════════════
    // EVENT LISTENERS
    // ═══════════════════════════════════════════════════
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });

    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', function() {
        const txt = this.textContent;
        document.getElementById('prompt-input').value = txt;
        document.getElementById('prompt-input').focus();
        // Auto-switch to optimize + Spanish for translate prompt
        if (txt.toLowerCase().includes('spanish') || txt.toLowerCase().includes('español')) {
          setMode('optimize');
          setTimeout(() => setLang('es', document.querySelector('[data-lang="es"]')), 150);
        }
      });
    });

    document.querySelectorAll('.sidebar-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        // On mobile, close sidebar after selection
        if (window.innerWidth < 768) closeSidebar();
      });
    });

    // Initial score sync
    updateScore();
  
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
      

<div className="mobile-topbar" id="mobile-topbar">
<button aria-controls="icon-sidebar" aria-expanded="false" aria-label="Open navigation" className="mobile-menu-btn" id="mobile-menu-btn">
<i className="ph ph-list"></i>
</button>
<a className="mobile-logo" href="#">Trust<span>Made</span></a>
<div className="mobile-topbar-right">

<button aria-label="Toggle light/dark mode" className="theme-toggle" id="theme-toggle-mobile">
<i aria-hidden="true" className="ph ph-moon icon-moon"></i>
<i aria-hidden="true" className="ph ph-sun icon-sun"></i>
</button>
<div className="avatar">RH</div>
</div>
</div>

<div aria-hidden="true" className="sidebar-overlay" id="sidebar-overlay"></div>

<div className="app-body">

<aside aria-label="Main navigation" className="icon-sidebar" id="icon-sidebar">
<div aria-hidden="true" className="sidebar-logo">
<svg aria-hidden="true" fill="none" viewbox="0 0 16 16">
<path d="M8 1L2 4.5V11C2 13 4.5 15 8 16C11.5 15 14 13 14 11V4.5L8 1Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.1"></path>
<path d="M5.5 8.5L7.5 10.5L11 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"></path>
</svg>
</div>
<nav aria-label="App navigation" className="sidebar-nav" role="navigation">
<button aria-current="page" aria-label="AI Counsel" className="sidebar-btn active">
<i aria-hidden="true" className="ph ph-chat-teardrop-text"></i>
<span className="tooltip" role="tooltip">AI Counsel</span>
</button>
<button aria-label="Matters" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-briefcase"></i>
<span className="tooltip" role="tooltip">Matters</span>
</button>
<div aria-hidden="true" className="sidebar-divider"></div>
<button aria-label="Clients" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-users"></i>
<span className="tooltip" role="tooltip">Clients</span>
</button>
<button aria-label="Trusts" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-buildings"></i>
<span className="tooltip" role="tooltip">Trusts</span>
</button>
<button aria-label="Compliance" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-scales"></i>
<span className="tooltip" role="tooltip">Compliance</span>
</button>
<div aria-hidden="true" className="sidebar-divider"></div>
<button aria-label="History" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-clock-counter-clockwise"></i>
<span className="tooltip" role="tooltip">History</span>
</button>
<button aria-label="Archive" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-archive"></i>
<span className="tooltip" role="tooltip">Archive</span>
</button>
</nav>
<div className="sidebar-footer">

<button aria-label="Toggle light/dark mode" className="theme-toggle" id="theme-toggle-desktop">
<i aria-hidden="true" className="ph ph-moon icon-moon"></i>
<i aria-hidden="true" className="ph ph-sun icon-sun"></i>
</button>
<button aria-label="Settings" className="sidebar-btn">
<i aria-hidden="true" className="ph ph-gear"></i>
<span className="tooltip" role="tooltip">Settings</span>
</button>
<div aria-label="User: R.H." className="avatar">RH</div>
</div>
</aside>

<div className="main-content">
<div className="mobile-panel-wrap" style={{display: 'flex', flex: '1', overflow: 'hidden', flexDirection: 'column'}}>

<div aria-label="Panel tabs" className="mobile-tabs" id="mobile-tabs" role="tablist">
<button aria-controls="counsel-panel" aria-selected="true" className="mobile-tab active" id="tab-counsel" onclick="switchMobileTab('counsel')" role="tab">
<i aria-hidden="true" className="ph ph-chat-teardrop-text"></i>Counsel
          </button>
<button aria-controls="doc-panel" aria-selected="false" className="mobile-tab" id="tab-doc" onclick="switchMobileTab('doc')" role="tab">
<i aria-hidden="true" className="ph ph-file-text"></i>Document
          </button>
</div>

<div style={{display: 'flex', flex: '1', overflow: 'hidden'}}>

<div aria-label="Counsel panel" className="counsel-panel" id="counsel-panel" role="region">
<div className="panel-header">
<div aria-label="Panel mode" className="mode-toggle" role="group">
<button aria-pressed="true" className="mode-btn active" id="btn-counsel" onclick="setMode('counsel')">
<i aria-hidden="true" className="ph ph-chat-teardrop-text"></i>Counsel
                </button>
<button aria-pressed="false" className="mode-btn" id="btn-optimize" onclick="setMode('optimize')">
<i aria-hidden="true" className="ph ph-sliders"></i>Optimize
                </button>
</div>
<div className="header-right">
<div className="agent-status">
<div aria-hidden="true" className="status-dot"></div>
<span className="agent-label" id="mode-label">ACTIVE</span>
</div>
<button aria-label="Reset session" className="reset-btn" id="reset-btn">Reset</button>
</div>
</div>

<div aria-label="Active context" className="context-bar" role="list">
<div className="context-tag" role="listitem"><i aria-hidden="true" className="ph ph-user"></i> Harrington, J.</div>
<div className="context-tag" role="listitem"><i aria-hidden="true" className="ph ph-file-text"></i> Trust v3.1</div>
<div className="context-tag" id="lang-context-tag" role="listitem"><i aria-hidden="true" className="ph ph-translate"></i> English</div>
</div>

<div className="panel-view active" id="view-counsel" role="tabpanel">
<div aria-label="Counsel messages" aria-live="polite" className="chat-messages" id="chat-messages" role="log">
<div className="msg-row" id="msg1">
<div aria-hidden="true" className="msg-avatar ai"><i className="ph ph-shield-check"></i></div>
<div className="msg-bubble ai">
                    Good morning. I've reviewed James Harrington's portfolio. I notice <strong style={{color: 'var(--gold)'}}>Harrington Capital Ventures LLC</strong> has not been assigned to the Family Trust — this creates a succession gap.
                  </div>
</div>
<div className="msg-row user" id="msg2">
<div aria-hidden="true" className="msg-avatar user">RH</div>
<div className="msg-bubble user">
                    Correct — draft the assignment clause. Also verify the Bel Air residence is properly titled after the October grant deed transfer.
                  </div>
</div>
<div aria-label="Agent reasoning steps" className="thought-block" id="thought-block">
<div className="thought-item done">
<i aria-hidden="true" className="ph ph-check-circle"></i>
<span>CA Secretary of State · HC Ventures verified</span>
</div>
<div className="thought-item done">
<i aria-hidden="true" className="ph ph-check-circle"></i>
<span>LA County Recorder · Grant deed retrieved</span>
</div>
<div className="thought-item active">
<i aria-hidden="true" className="ph ph-spinner"></i>
<span>Drafting Article III assignment clause…</span>
</div>
</div>
<div className="msg-row" id="msg3">
<div aria-hidden="true" className="msg-avatar ai"><i className="ph ph-shield-check"></i></div>
<div className="msg-bubble ai shimmer">
<span className="typing-cursor">Bel Air (APN: 4369-021-015) confirms vesting in Trust via recorded grant deed. Article III — assignment of 100% membership in <strong style={{color: 'var(--doc-muted)'}}>Harrington Capital Ventures LLC</strong> — inserted now.</span>
</div>
</div>
</div>
<div className="prompt-area">
<div className="prompt-wrap">
<textarea aria-label="Counsel instruction input" className="prompt-input" id="prompt-input" placeholder="Instruct counsel to amend this document…" rows="2"></textarea>
<button aria-label="Send instruction" className="prompt-send"><i aria-hidden="true" className="ph ph-arrow-right"></i></button>
</div>
<div className="prompt-meta">
<span>⌘K COMMANDS · ENTER TO SEND</span>
<span className="encrypted"><i aria-hidden="true" className="ph ph-lock-key"></i> ENCRYPTED</span>
</div>
<div aria-label="Quick suggestions" className="suggestions" role="list">
<button className="suggestion-chip" role="listitem">Estate tax exposure</button>
<button className="suggestion-chip" role="listitem">Add pour-over will</button>
<button className="suggestion-chip" role="listitem">Successor trustee</button>
<button className="suggestion-chip" role="listitem">Verify beneficiaries</button>
<button className="suggestion-chip" role="listitem">Translate to Spanish</button>
</div>
</div>
</div>

<div className="panel-view optimize-view" id="view-optimize" role="tabpanel">
<div className="opt-section">
<div className="score-display">
<div aria-label="Optimization score" className="score-ring">
<svg aria-hidden="true" viewbox="0 0 60 60"><circle cx="30" cy="30" r="27" style={{strokeDashoffset: '47'}}></circle></svg>
<span className="score-num" id="opt-score">73</span>
</div>
<div className="score-info">
<h4>Optimization Score</h4>
<p>3 clauses can be strengthened. Language: <strong id="score-lang-label">English</strong>. All CA compliance checks passing.</p>
</div>
</div>
</div>

<div className="opt-section">
<div className="opt-section-head">
<div className="opt-section-title">
<i aria-hidden="true" className="ph ph-translate"></i>
                    Document Language
                  </div>
<span className="opt-count" id="lang-count">EN</span>
</div>
<div aria-label="Select document language" className="lang-grid" id="lang-grid" role="radiogroup">
<div aria-checked="true" className="lang-btn active" data-lang="en" onclick="setLang('en', this)" role="radio" tabindex="0">
<div aria-hidden="true" className="lang-check"><i className="ph ph-check"></i></div>
<div aria-hidden="true" className="lang-flag">🇺🇸</div>
<div className="lang-name">English</div>
<div className="lang-native">English</div>
</div>
<div aria-checked="false" className="lang-btn" data-lang="es" onclick="setLang('es', this)" role="radio" tabindex="0">
<div aria-hidden="true" className="lang-check"><i className="ph ph-check"></i></div>
<div aria-hidden="true" className="lang-flag">🇲🇽</div>
<div className="lang-name">Spanish</div>
<div className="lang-native">Español</div>
</div>
<div aria-checked="false" className="lang-btn" data-lang="zh" onclick="setLang('zh', this)" role="radio" tabindex="0">
<div aria-hidden="true" className="lang-check"><i className="ph ph-check"></i></div>
<div aria-hidden="true" className="lang-flag">🇨🇳</div>
<div className="lang-name">Mandarin</div>
<div className="lang-native">普通话</div>
</div>
<div aria-checked="false" className="lang-btn" data-lang="ko" onclick="setLang('ko', this)" role="radio" tabindex="0">
<div aria-hidden="true" className="lang-check"><i className="ph ph-check"></i></div>
<div aria-hidden="true" className="lang-flag">🇰🇷</div>
<div className="lang-name">Korean</div>
<div className="lang-native">한국어</div>
</div>
<div aria-checked="false" className="lang-btn" data-lang="tl" onclick="setLang('tl', this)" role="radio" tabindex="0">
<div aria-hidden="true" className="lang-check"><i className="ph ph-check"></i></div>
<div aria-hidden="true" className="lang-flag">🇵🇭</div>
<div className="lang-name">Filipino</div>
<div className="lang-native">Tagalog</div>
</div>
<div aria-checked="false" className="lang-btn" data-lang="vi" onclick="setLang('vi', this)" role="radio" tabindex="0">
<div aria-hidden="true" className="lang-check"><i className="ph ph-check"></i></div>
<div aria-hidden="true" className="lang-flag">🇻🇳</div>
<div className="lang-name">Vietnamese</div>
<div className="lang-native">Tiếng Việt</div>
</div>
</div>
</div>

<div className="opt-section">
<div className="opt-section-head">
<div className="opt-section-title">
<i aria-hidden="true" className="ph ph-list-checks"></i>
                    Clause Controls
                  </div>
<span className="opt-count">6 active</span>
</div>
<div className="clause-list" role="list">
<div className="clause-row" onclick="toggleClause('clause-prop', this)" role="listitem">
<div aria-checked="true" aria-label="Real Property Assets" className="clause-toggle on" id="ct-prop" role="switch"></div>
<div className="clause-body">
<div className="clause-name">Real Property Assets</div>
<div className="clause-desc">Bel Air residence vesting &amp; APN confirmation</div>
<span className="clause-tag tag-req">Required</span>
</div>
</div>
<div className="clause-row" onclick="toggleClause('clause-biz', this)" role="listitem">
<div aria-checked="true" aria-label="Business Interest Assignment" className="clause-toggle on" id="ct-biz" role="switch"></div>
<div className="clause-body">
<div className="clause-name">Business Interest Assignment</div>
<div className="clause-desc">100% LLC membership transfer to trust</div>
<span className="clause-tag tag-new">Newly Added</span>
</div>
</div>
<div className="clause-row" onclick="toggleClause('clause-tax', this)" role="listitem">
<div aria-checked="true" aria-label="Federal Estate Tax" className="clause-toggle on" id="ct-tax" role="switch"></div>
<div className="clause-body">
<div className="clause-name">Federal Estate Tax &amp; GST</div>
<div className="clause-desc">QTIP, Bypass Trust, IRC §2056 provisions</div>
<span className="clause-tag tag-req">Required</span>
</div>
</div>
<div className="clause-row" onclick="toggleClause('clause-trustee', this)" role="listitem">
<div aria-checked="true" aria-label="Successor Trustee Powers" className="clause-toggle on" id="ct-trustee" role="switch"></div>
<div className="clause-body">
<div className="clause-name">Successor Trustee Powers</div>
<div className="clause-desc">CA Prob. Code §§16200–16249 full powers</div>
<span className="clause-tag tag-req">Required</span>
</div>
</div>
<div className="clause-row" onclick="toggleClause('clause-spendthrift', this)" role="listitem">
<div aria-checked="false" aria-label="Spendthrift Protection" className="clause-toggle" id="ct-spendthrift" role="switch"></div>
<div className="clause-body">
<div className="clause-name">Spendthrift Protection</div>
<div className="clause-desc">Protects beneficiaries from creditors &amp; assignments</div>
<span className="clause-tag tag-opt">Optional</span>
</div>
</div>
<div className="clause-row" onclick="toggleClause('clause-contest', this)" role="listitem">
<div aria-checked="false" aria-label="No-Contest Clause" className="clause-toggle" id="ct-contest" role="switch"></div>
<div className="clause-body">
<div className="clause-name">No-Contest Clause</div>
<div className="clause-desc">In terrorem provision — deters challenges</div>
<span className="clause-tag tag-risk">High Impact</span>
</div>
</div>
</div>
</div>

<div className="opt-section">
<div className="opt-section-head">
<div className="opt-section-title">
<i aria-hidden="true" className="ph ph-chart-line-up"></i>
                    Risk Analysis
                  </div>
</div>
<div className="risk-grid">
<div className="risk-item">
<div className="risk-top"><span className="risk-label">Probate Exposure</span><span className="risk-val low">Low</span></div>
<div className="risk-track"><div className="risk-fill low" style={{width: '18%'}}></div></div>
</div>
<div className="risk-item">
<div className="risk-top"><span className="risk-label">LLC Funding Gap</span><span className="risk-val med">Medium</span></div>
<div className="risk-track"><div className="risk-fill med" style={{width: '52%'}}></div></div>
</div>
<div className="risk-item">
<div className="risk-top"><span className="risk-label">GST Exemption Usage</span><span className="risk-val low">Low</span></div>
<div className="risk-track"><div className="risk-fill low" style={{width: '12%'}}></div></div>
</div>
<div className="risk-item">
<div className="risk-top"><span className="risk-label">Beneficiary Conflict</span><span className="risk-val med">Moderate</span></div>
<div className="risk-track"><div className="risk-fill med" style={{width: '44%'}}></div></div>
</div>
<div className="risk-item">
<div className="risk-top"><span className="risk-label">CA Prop 19 Exposure</span><span className="risk-val low">Mitigated</span></div>
<div className="risk-track"><div className="risk-fill low" style={{width: '8%'}}></div></div>
</div>
</div>
</div>

<div className="opt-section">
<button aria-label="Apply optimizations to document" className="opt-apply-btn" id="opt-apply-btn" onclick="applyOptimizations()">
<i aria-hidden="true" className="ph ph-arrow-clockwise"></i>
                  Apply to Document
                </button>
</div>
</div>
</div>

<div aria-label="Document panel" className="doc-panel" id="doc-panel" role="region">
<div className="doc-topbar">
<div className="doc-title-group">
<span className="doc-title">The Harrington Family Trust</span>
<span className="doc-version">v3.1 · Draft</span>
<span className="status-badge badge-compliant">Compliant</span>
<span className="lang-badge" id="topbar-lang-badge" style={{display: 'none'}}>
<i aria-hidden="true" className="ph ph-translate"></i>
<span id="topbar-lang-text">English</span>
</span>
</div>
<div className="doc-topbar-actions">
<div aria-label="Document view" className="view-toggle" role="group">
<button className="view-btn active">Legal</button>
<button className="view-btn">Plain English</button>
<button className="view-btn">Redline</button>
</div>
<div aria-hidden="true" className="divider-v"></div>
<button aria-label="Export document" className="action-btn">
<i aria-hidden="true" className="ph ph-download-simple"></i>
<span className="btn-text">Export</span>
</button>
<button aria-label="Share document" className="action-btn">
<i aria-hidden="true" className="ph ph-share-network"></i>
<span className="btn-text">Share</span>
</button>
<button aria-label="Sign and execute document" className="action-btn primary">
<i aria-hidden="true" className="ph ph-pen-nib"></i>
<span className="btn-text">Sign &amp; Execute</span>
</button>
</div>
</div>
<div className="doc-meta-bar">
<div className="meta-item"><i aria-hidden="true" className="ph ph-user"></i><span>James Harrington</span></div>
<div aria-hidden="true" className="meta-sep"></div>
<div className="meta-item"><i aria-hidden="true" className="ph ph-calendar"></i><span className="val">Jan 12, 2026</span></div>
<div aria-hidden="true" className="meta-sep"></div>
<div className="meta-item"><i aria-hidden="true" className="ph ph-gavel"></i><span className="val">CA · Federal &amp; CA Probate Code</span></div>
<div className="progress-bar-wrap">
<span className="progress-label">COMPLETION</span>
<div aria-hidden="true" className="progress-track"><div className="progress-fill" id="progress-fill" style={{width: '73%'}}></div></div>
<span aria-label="73% complete" className="progress-val" id="progress-val">73%</span>
</div>
</div>
<div className="doc-canvas">
<div aria-label="Quick actions" className="float-actions">
<button aria-label="Senior Partner Review" className="float-btn"><i aria-hidden="true" className="ph ph-gavel"></i><span className="tip">Senior Partner Review</span></button>
<button aria-label="Track Changes" className="float-btn"><i aria-hidden="true" className="ph ph-git-diff"></i><span className="tip">Track Changes</span></button>
<button aria-label="Add Annotation" className="float-btn"><i aria-hidden="true" className="ph ph-chat-dots"></i><span className="tip">Add Annotation</span></button>
<button aria-label="Print" className="float-btn"><i aria-hidden="true" className="ph ph-printer"></i><span className="tip">Print</span></button>
</div>

<div aria-label="Trust document" className="doc-paper" id="doc-paper" role="document">
<div aria-hidden="true" className="doc-watermark" id="doc-watermark">Draft</div>
<div aria-hidden="true" className="doc-lang-strip" id="doc-lang-strip"></div>
<div className="doc-header">
<div className="doc-jurisdiction" id="doc-jurisdiction">State of California · County of Los Angeles · Governed by CA Probate Code §§ 15000–19403 &amp; IRC § 2056</div>
<div aria-hidden="true" className="doc-crest">
<div className="crest-line"></div>
<i className="ph ph-shield-check crest-icon"></i>
<div className="crest-line"></div>
</div>
<div className="doc-title-h1" id="doc-title-main">The Harrington Family Trust</div>
<div className="doc-subtitle" id="doc-subtitle">Revocable Living Trust Agreement — Executed under California Law</div>
<hr aria-hidden="true" className="doc-rule"/>
</div>

<div className="translation-notice" id="translation-notice" role="alert">
<i aria-hidden="true" className="ph ph-info"></i>
<p id="translation-notice-text"><strong>Translation Notice:</strong> This document has been translated for accessibility. The English version is the legally binding original. All legal terms, citations, and obligations remain governed by California law.</p>
</div>
<div className="doc-body">
<p id="doc-intro">
                    This Revocable Living Trust Agreement is made this <span className="doc-field">12th day of January, 2026</span>, by and between
                    <strong>James R. Harrington</strong> of 1240 Bel Air Road, Los Angeles, CA 90077 ("the Grantor" and initial "Trustee"), and
                    <strong>TrustMade, Inc.</strong>, a professional corporation with offices at 2029 Century Park East, Suite 1400, Los Angeles, CA 90067 ("the Successor Trustee").
                  </p>
<div id="clause-prop">
<div className="smart-clause">
<span className="clause-verified-tag">✓ LA COUNTY RECORDER · APN 4369-021-015</span>
<div className="doc-article" id="art-ii-label">Article I</div>
<div className="doc-article-title" id="art-ii-title">Real Property Assets</div>
<p id="art-ii-body">
                        The Grantor confirms that the real property commonly known as
                        <strong>1240 Bel Air Road, Los Angeles, CA 90077</strong>
                        (Assessor's Parcel No. <span className="doc-field">4369-021-015</span>) has been duly conveyed
                        to this Trust by grant deed recorded with the Los Angeles County Recorder on
                        <span className="doc-field">October 14, 2025</span>, as Instrument No. <span className="doc-field">20251014-0442991</span>.
                        The Trustee is authorized to manage, lease, encumber, or sell said property in accordance with
                        the terms of this Trust and CA Probate Code § 16220.
                      </p>
<p id="art-ii-note" style={{fontSize: '13px', color: '#6b5e4a', fontStyle: 'italic', marginTop: '-6px'}}>
                        *Title vesting confirmed. LA County Recorder search completed January 12, 2026. No liens noted. CA R&amp;T Code § 62(d) exclusion filed.
                      </p>
</div>
</div>
<div id="clause-biz">
<div className="smart-clause" id="new-article">
<span className="clause-verified-tag">✓ CA SOS · HARRINGTON CAPITAL VENTURES LLC</span>
<div className="clause-new-badge">New</div>
<div className="doc-article" id="art-iii-label">Article II</div>
<div className="doc-article-title" id="art-iii-title">Assignment of Business Interests</div>
<p id="art-iii-body">
                        The Grantor hereby assigns, transfers, and conveys to the Trustee one hundred percent (100%)
                        of the membership interest in <strong>Harrington Capital Ventures LLC</strong>, a California
                        limited liability company (CA SOS File No. <span className="doc-field">202560415891</span>),
                        to be held as part of the Trust Estate. The Trustee is authorized to exercise all management
                        rights, receive distributions, and execute documents to effectuate this transfer,
                        pursuant to CA Corp. Code § 17704.01.
                      </p>
<p id="art-iii-note" style={{fontSize: '13px', color: '#4a7fa8', fontStyle: 'italic', marginTop: '-6px'}}>
                        *CA SOS confirmation pending — provisional pending state acknowledgment. Operating agreement amendment required.
                      </p>
</div>
</div>
<div id="clause-tax">
<div className="doc-article" id="art-iv-label">Article III</div>
<div className="doc-article-title" id="art-iv-title">Federal Estate Tax &amp; Generation-Skipping Provisions</div>
<p id="art-iv-body">
                      This Trust is structured to qualify for the federal estate tax marital deduction under IRC § 2056.
                      The Successor Trustee shall, upon the Grantor's death, divide the Trust Estate into a Survivor's Trust,
                      a Bypass Trust (Credit Shelter Trust), and, if applicable, a Marital QTIP Trust, to maximize the
                      applicable exclusion amount under IRC § 2010 — currently <span className="doc-highlight">$13,610,000 per person (2026)</span>.
                    </p>
<p id="art-iv-body2">
                      Any generation-skipping transfer tax exposure arising under IRC § 2601 et seq. shall be reviewed
                      by the Successor Trustee and reported on IRS Form 706-GS(D). The Grantor's unused GST exemption
                      shall be allocated per the Trustee's election on IRS Form 709.
                    </p>
</div>
<div id="clause-trustee">
<div className="doc-article" id="art-v-label">Article IV</div>
<div className="doc-article-title" id="art-v-title">Successor Trustee Powers</div>
<p id="art-v-body">
                      The Successor Trustee shall have all powers granted to trustees under CA Probate Code §§ 16200–16249,
                      including the power to invest Trust assets under the Uniform Prudent Investor Act (CA Prob. Code § 16045 et seq.);
                      to retain or sell any Trust asset; to borrow funds on behalf of the Trust; and to make distributions
                      to Beneficiaries in cash or in kind at the Trustee's discretion.
                    </p>
</div>
<div className="opt-hidden" id="clause-spendthrift">
<div className="doc-article">Article V</div>
<div className="doc-article-title" id="art-spend-title">Spendthrift Protection</div>
<p id="art-spend-body">
                      No interest of any beneficiary in the income or principal of this Trust shall be subject to
                      assignment, anticipation, pledge, attachment, execution, or bankruptcy proceedings before actual
                      receipt by such beneficiary. This spendthrift protection is absolute and shall not be waived
                      by any beneficiary, pursuant to CA Probate Code § 15300.
                    </p>
</div>
<div className="opt-hidden" id="clause-contest">
<div className="doc-article">Article VI</div>
<div className="doc-article-title" id="art-contest-title">No-Contest Clause</div>
<p id="art-contest-body">
                      Any beneficiary who directly or indirectly contests the validity of this Trust, or any provision thereof,
                      or who opposes, challenges, or seeks to impair any of its provisions, shall forfeit any and all
                      interest they would otherwise receive under this Trust, pursuant to CA Probate Code § 21310 et seq.
                    </p>
</div>
<p id="doc-witness" style={{marginTop: '28px'}}>
                    IN WITNESS WHEREOF, the Grantor has executed this Trust Agreement on the date first written above,
                    and the Successor Trustee has accepted the trusts herein created.
                  </p>
<div className="doc-signature">
<div className="sig-block">
<div className="sig-name">James R. Harrington</div>
<div className="sig-title" id="sig-grantor-title">Grantor &amp; Initial Trustee</div>
</div>
<div className="sig-block">
<div className="sig-name">R. Henderson, Esq.</div>
<div className="sig-title" id="sig-trustee-title">TrustMade, Inc. · Successor Trustee</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-live="polite" className="toast" id="toast" role="alert">
<div className="toast-icon"><i aria-hidden="true" className="ph ph-buildings"></i></div>
<div className="toast-content">
<h4>CA Secretary of State Verified</h4>
<p><strong>Harrington Capital Ventures LLC</strong> confirmed active. Article II drafted and inserted. Operating agreement amendment flagged.</p>
</div>
<button aria-label="Dismiss notification" className="toast-close" onclick="document.getElementById('toast').classList.remove('show')">
<i aria-hidden="true" className="ph ph-x"></i>
</button>
</div>


    </>
  );
}
