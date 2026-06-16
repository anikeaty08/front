import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize icons with stroke-width 1.5
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({}, { attrs: { 'stroke-width': 1.5 } });
      });

      const overlay = document.getElementById('landscapeOverlay');
      const expandBtn = document.getElementById('expandBtn');
      const closeBtn = document.getElementById('closeLandscape');

      function adjustRotatedViewport() {
        const stage = document.getElementById('rotatedViewport');
        if (!stage) return;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const designW = 862;
        const designH = 375;
        const scale = Math.min(vw / designH, vh / designW);
        stage.style.width = designW + 'px';
        stage.style.height = designH + 'px';
        stage.style.transform = `translate(-50%, -50%) rotate(90deg) scale(${scale})`;
      }

      function openLandscape() {
        overlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        adjustRotatedViewport();
      }
      function closeLandscape() {
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }

      expandBtn.addEventListener('click', openLandscape);
      closeBtn.addEventListener('click', closeLandscape);
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLandscape();
      });
      window.addEventListener('keyup', (e) => {
        if (e.key === 'Escape') closeLandscape();
      });
      window.addEventListener('resize', () => {
        if (!overlay.classList.contains('hidden')) adjustRotatedViewport();
      });

      // Sticky first-column fade edge (dynamic width for mobile/desktop)
      const container = document.querySelector('main .relative');
      const grid = document.getElementById('compareGrid');
      if (container && grid) {
        const fade = document.createElement('div');
        fade.className = 'pointer-events-none absolute top-0 bottom-0 w-5 bg-gradient-to-r from-black/5 to-transparent rounded-r-2xl';
        container.appendChild(fade);

        const positionFade = () => {
          const firstSticky = grid.querySelector('div.sticky');
          if (firstSticky) {
            const rect = firstSticky.getBoundingClientRect();
            fade.style.left = `${Math.max(0, rect.width)}px`;
          }
        };
        positionFade();
        window.addEventListener('resize', positionFade);
      }

      // Drag & Drop for "순서변경" row (column reordering across all rows)
      (function () {
        const mainGrid = document.getElementById('compareGrid');
        const overlayGrid = document.querySelector('#landscapeOverlay .grid');

        function buildGridModel(gridEl) {
          if (!gridEl) return null;
          const items = Array.from(gridEl.children);
          const rows = [];
          for (let i = 0; i < items.length; ) {
            const labelCell = items[i++];
            if (!labelCell || !labelCell.classList.contains('sticky')) break;
            const c0 = items[i++], c1 = items[i++], c2 = items[i++];
            rows.push({ labelCell, productCells: [c0, c1, c2] });
          }
          const reorderRow = rows.find(r => (r.labelCell.textContent || '').trim().includes('순서변경'));
          const handles = reorderRow ? reorderRow.productCells : [];
          return { root: gridEl, rows, handles };
        }

        const mainModel = buildGridModel(mainGrid);
        const overModel = buildGridModel(overlayGrid);

        let colOrder = [0, 1, 2]; // display order -> source index

        function applyOrderToModel(model, order) {
          if (!model) return;
          model.rows.forEach(row => {
            const src = row.productCells;
            const contents = order.map(idx => src[idx].innerHTML);
            for (let j = 0; j < 3; j++) {
              src[j].innerHTML = contents[j];
            }
          });
        }

        function applyOrder(order) {
          applyOrderToModel(mainModel, order);
          applyOrderToModel(overModel, order);
          // Re-setup handles since innerHTML changed (cells persist, listeners re-bound)
          setupHandles(mainModel);
          setupHandles(overModel);
        }

        function arrayMove(arr, from, to) {
          if (from === to) return arr.slice();
          const a = arr.slice();
          const item = a.splice(from, 1)[0];
          a.splice(to, 0, item);
          return a;
        }

        function clearDragStyles(models) {
          models.forEach(model => {
            if (!model) return;
            model.handles.forEach(h => h.classList.remove('ring-2', 'ring-blue-500/50', 'rounded-lg', 'bg-blue-50/30'));
          });
          document.body.classList.remove('select-none');
        }

        function setupHandles(model) {
          if (!model || !model.handles || model.handles.length !== 3) return;
          model.handles.forEach((cell, displayIndex) => {
            cell.setAttribute('draggable', 'true');
            cell.classList.add('cursor-grab', 'select-none');
            cell.title = '드래그하여 순서를 변경';

            cell.ondragstart = (e) => {
              e.dataTransfer.effectAllowed = 'move';
              try { e.dataTransfer.setData('text/plain', String(displayIndex)); } catch (_) {}
              document.body.classList.add('select-none');
              // subtle source feedback
              cell.classList.add('bg-blue-50/30');
            };

            cell.ondragenter = (e) => {
              e.preventDefault();
              cell.classList.add('ring-2', 'ring-blue-500/50', 'rounded-lg');
            };

            cell.ondragover = (e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = 'move';
            };

            cell.ondragleave = () => {
              cell.classList.remove('ring-2', 'ring-blue-500/50', 'rounded-lg');
            };

            cell.ondrop = (e) => {
              e.preventDefault();
              const sourceDisplayIndex = Number(e.dataTransfer.getData('text/plain'));
              const targetDisplayIndex = displayIndex;
              const nextOrder = arrayMove(colOrder, sourceDisplayIndex, targetDisplayIndex);
              colOrder = nextOrder;
              applyOrder(colOrder);
              clearDragStyles([mainModel, overModel]);
            };

            cell.ondragend = () => {
              clearDragStyles([mainModel, overModel]);
            };
          });
        }

        // Initial bind
        setupHandles(mainModel);
        setupHandles(overModel);
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-dvh flex flex-col">

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="h-14 flex items-center justify-between">
<button className="flex items-center gap-2 text-neutral-700 hover:text-neutral-900">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
<span className="text-sm">뒤로</span>
</button>
<div className="flex-1 flex items-center justify-center">
<div className="text-[22px] tracking-tight font-semibold leading-none">소파 상품비교</div>
</div>
<button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700" id="expandBtn">
<i className="w-5 h-5" data-lucide="rotate-cw"></i>
<span className="font-medium">크게보기</span>
</button>
</div>
<div className="pb-3 px-1 text-xs text-neutral-500">선택한 상품 3개</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
<div className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm">

<div className="overflow-auto touch-pan-x touch-pan-y">

<div className="min-w-[836px] sm:min-w-[980px] grid [grid-template-columns:128px_repeat(3,220px)] sm:[grid-template-columns:160px_repeat(3,260px)]" id="compareGrid">

<div className="sticky left-0 z-20 bg-white border-b border-neutral-200"></div>

<div className="p-4 border-b border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative">
<img alt="소파 A" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white grid place-items-center">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-sm text-blue-600 hover:text-blue-700 font-medium">상품상세</a>
<div className="text-neutral-400"><i className="w-5 h-5" data-lucide="grip-vertical"></i></div>
</div>
</div>

<div className="p-4 border-b border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative">
<img alt="소파 B" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white grid place-items-center">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-sm text-blue-600 hover:text-blue-700 font-medium">상품상세</a>
<div className="text-neutral-400"><i className="w-5 h-5" data-lucide="grip-vertical"></i></div>
</div>
</div>

<div className="p-4 border-b border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative">
<img alt="소파 C" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white grid place-items-center">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-sm text-blue-600 hover:text-blue-700 font-medium">상품상세</a>
<div className="text-neutral-400"><i className="w-5 h-5" data-lucide="grip-vertical"></i></div>
</div>
</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">순서변경</div>
<div className="border-b border-neutral-100 px-4 py-3"><i className="w-5 h-5 text-neutral-400" data-lucide="grip-vertical"></i></div>
<div className="border-b border-neutral-100 px-4 py-3"><i className="w-5 h-5 text-neutral-400" data-lucide="grip-vertical"></i></div>
<div className="border-b border-neutral-100 px-4 py-3"><i className="w-5 h-5 text-neutral-400" data-lucide="grip-vertical"></i></div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">브랜드</div>
<div className="border-b border-neutral-100 px-4 py-3">삼익가구</div>
<div className="border-b border-neutral-100 px-4 py-3">한샘</div>
<div className="border-b border-neutral-100 px-4 py-3">바오트가구</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">상품명</div>
<div className="border-b border-neutral-100 px-4 py-3">르카 2인용 가족 소파</div>
<div className="border-b border-neutral-100 px-4 py-3">눕 리세 아쿠아텍스 3인용 패브릭 소파</div>
<div className="border-b border-neutral-100 px-4 py-3">앵고 아쿠아텍스 2인용 패브릭 소파</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">옵션</div>
<div className="border-b border-neutral-100 px-4 py-3">
<div className="text-neutral-700 text-sm mb-2">2인용 브라운</div>
<button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50">옵션 변경</button>
</div>
<div className="border-b border-neutral-100 px-4 py-3">
<div className="text-neutral-700 text-sm mb-2">3인용 그레이</div>
<button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50">옵션 변경</button>
</div>
<div className="border-b border-neutral-100 px-4 py-3">
<div className="text-neutral-700 text-sm mb-2">2인용 베이지</div>
<button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50">옵션 변경</button>
</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">가격</div>
<div className="border-b border-neutral-100 px-4 py-3 font-medium">229,000원</div>
<div className="border-b border-neutral-100 px-4 py-3 font-medium">265,900원</div>
<div className="border-b border-neutral-100 px-4 py-3 font-medium">99,000원</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">크기</div>
<div className="border-b border-neutral-100 px-4 py-3">W150 × D80 × H85cm</div>
<div className="border-b border-neutral-100 px-4 py-3">W200 × D90 × H88cm</div>
<div className="border-b border-neutral-100 px-4 py-3">W140 × D75 × H80cm</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">소재</div>
<div className="border-b border-neutral-100 px-4 py-3">천연가죽</div>
<div className="border-b border-neutral-100 px-4 py-3">아쿠아텍스 패브릭</div>
<div className="border-b border-neutral-100 px-4 py-3">아쿠아텍스 패브릭</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">프레임</div>
<div className="border-b border-neutral-100 px-4 py-3">원목프레임</div>
<div className="border-b border-neutral-100 px-4 py-3">철재프레임</div>
<div className="border-b border-neutral-100 px-4 py-3">합판프레임</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">쿠션</div>
<div className="border-b border-neutral-100 px-4 py-3">고밀도 우레탄폼</div>
<div className="border-b border-neutral-100 px-4 py-3">메모리폼 + 스프링</div>
<div className="border-b border-neutral-100 px-4 py-3">일반 우레탄폼</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">품질보증</div>
<div className="border-b border-neutral-100 px-4 py-3">1년</div>
<div className="border-b border-neutral-100 px-4 py-3">2년</div>
<div className="border-b border-neutral-100 px-4 py-3">6개월</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-4 py-3 text-sm text-neutral-500">제조국</div>
<div className="border-b border-neutral-100 px-4 py-3">국내제조</div>
<div className="border-b border-neutral-100 px-4 py-3">국내제조</div>
<div className="border-b border-neutral-100 px-4 py-3">해외제조</div>
</div>
</div>
</div>
</div>
</main>

<footer className="sticky bottom-0 z-30">
<div className="mx-auto max-w-6xl px-4 sm:px-6 pb-[max(env(safe-area-inset-bottom),16px)]">
<button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-lg shadow-blue-500/20">상품 더 선택하기</button>
</div>
</footer>
</div>

<div className="fixed inset-0 z-[100] hidden bg-white overflow-hidden" id="landscapeOverlay">

<div className="flex flex-col w-full h-full bg-white" id="rotatedViewport" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg)', transformOrigin: 'center'}}>

<div className="h-12 flex items-center justify-between px-4 pt-[env(safe-area-inset-top)] text-neutral-800 border-b border-neutral-200 bg-white">
<div className="text-sm text-neutral-500">가로 보기</div>
<button className="flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900" id="closeLandscape">
<i className="w-5 h-5" data-lucide="x"></i>
<span className="font-medium">닫기</span>
</button>
</div>

<div className="flex-1 overflow-auto px-4 py-4 pb-[max(env(safe-area-inset-bottom),16px)] touch-pan-x touch-pan-y overscroll-contain">
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<div className="overflow-auto touch-pan-x touch-pan-y">
<div className="min-w-[900px] sm:min-w-[1100px] grid [grid-template-columns:140px_repeat(3,240px)] sm:[grid-template-columns:180px_repeat(3,300px)]">

<div className="sticky left-0 z-20 bg-white border-b border-neutral-200"></div>

<div className="p-5 border-b border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative">
<img alt="소파 A" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white grid place-items-center">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-sm text-blue-600 hover:text-blue-700 font-medium">상품상세</a>
<div className="text-neutral-400"><i className="w-5 h-5" data-lucide="grip-vertical"></i></div>
</div>
</div>
<div className="p-5 border-b border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative">
<img alt="소파 B" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white grid place-items-center">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-sm text-blue-600 hover:text-blue-700 font-medium">상품상세</a>
<div className="text-neutral-400"><i className="w-5 h-5" data-lucide="grip-vertical"></i></div>
</div>
</div>
<div className="p-5 border-b border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative">
<img alt="소파 C" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/70 text-white grid place-items-center">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<a className="text-sm text-blue-600 hover:text-blue-700 font-medium">상품상세</a>
<div className="text-neutral-400"><i className="w-5 h-5" data-lucide="grip-vertical"></i></div>
</div>
</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">순서변경</div>
<div className="border-b border-neutral-100 px-5 py-4"><i className="w-5 h-5 text-neutral-400" data-lucide="grip-vertical"></i></div>
<div className="border-b border-neutral-100 px-5 py-4"><i className="w-5 h-5 text-neutral-400" data-lucide="grip-vertical"></i></div>
<div className="border-b border-neutral-100 px-5 py-4"><i className="w-5 h-5 text-neutral-400" data-lucide="grip-vertical"></i></div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">브랜드</div>
<div className="border-b border-neutral-100 px-5 py-4">삼익가구</div>
<div className="border-b border-neutral-100 px-5 py-4">한샘</div>
<div className="border-b border-neutral-100 px-5 py-4">바오트가구</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">상품명</div>
<div className="border-b border-neutral-100 px-5 py-4">르카 2인용 가족 소파</div>
<div className="border-b border-neutral-100 px-5 py-4">눕 리세 아쿠아텍스 3인용 패브릭 소파</div>
<div className="border-b border-neutral-100 px-5 py-4">앵고 아쿠아텍스 2인용 패브릭 소파</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">옵션</div>
<div className="border-b border-neutral-100 px-5 py-4">
<div className="text-neutral-700 text-sm mb-2">2인용 브라운</div>
<button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50">옵션 변경</button>
</div>
<div className="border-b border-neutral-100 px-5 py-4">
<div className="text-neutral-700 text-sm mb-2">3인용 그레이</div>
<button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50">옵션 변경</button>
</div>
<div className="border-b border-neutral-100 px-5 py-4">
<div className="text-neutral-700 text-sm mb-2">2인용 베이지</div>
<button className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm text-neutral-700 hover:bg-neutral-50">옵션 변경</button>
</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">가격</div>
<div className="border-b border-neutral-100 px-5 py-4 font-medium">229,000원</div>
<div className="border-b border-neutral-100 px-5 py-4 font-medium">265,900원</div>
<div className="border-b border-neutral-100 px-5 py-4 font-medium">99,000원</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">크기</div>
<div className="border-b border-neutral-100 px-5 py-4">W150 × D80 × H85cm</div>
<div className="border-b border-neutral-100 px-5 py-4">W200 × D90 × H88cm</div>
<div className="border-b border-neutral-100 px-5 py-4">W140 × D75 × H80cm</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">소재</div>
<div className="border-b border-neutral-100 px-5 py-4">천연가죽</div>
<div className="border-b border-neutral-100 px-5 py-4">아쿠아텍스 패브릭</div>
<div className="border-b border-neutral-100 px-5 py-4">아쿠아텍스 패브릭</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">프레임</div>
<div className="border-b border-neutral-100 px-5 py-4">원목프레임</div>
<div className="border-b border-neutral-100 px-5 py-4">철재프레임</div>
<div className="border-b border-neutral-100 px-5 py-4">합판프레임</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">쿠션</div>
<div className="border-b border-neutral-100 px-5 py-4">고밀도 우레탄폼</div>
<div className="border-b border-neutral-100 px-5 py-4">메모리폼 + 스프링</div>
<div className="border-b border-neutral-100 px-5 py-4">일반 우레탄폼</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">품질보증</div>
<div className="border-b border-neutral-100 px-5 py-4">1년</div>
<div className="border-b border-neutral-100 px-5 py-4">2년</div>
<div className="border-b border-neutral-100 px-5 py-4">6개월</div>

<div className="sticky left-0 z-20 bg-white border-b border-neutral-100 px-5 py-4 text-sm text-neutral-500">제조국</div>
<div className="border-b border-neutral-100 px-5 py-4">국내제조</div>
<div className="border-b border-neutral-100 px-5 py-4">국내제조</div>
<div className="border-b border-neutral-100 px-5 py-4">해외제조</div>
</div>
</div>
</div>

<div className="mt-3 text-center text-xs text-neutral-500">좌우 스크롤로 넓게 비교하세요</div>
</div>
</div>
</div>


    </>
  );
}
