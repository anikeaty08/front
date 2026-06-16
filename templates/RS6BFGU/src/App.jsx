import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const palette = document.getElementById('palette');
      const dropZone = document.getElementById('dropZone');
      const placeholder = document.getElementById('placeholder');
      const insertLine = document.getElementById('insertLine');
      const previewToggle = document.getElementById('previewToggle');
      const canvas = document.getElementById('canvas');
      const canvasWidth = document.getElementById('canvasWidth');
      const desktopBtn = document.getElementById('desktopBtn');
      const mobileBtn = document.getElementById('mobileBtn');
      const exportBtn = document.getElementById('exportBtn');
      const exportModal = document.getElementById('exportModal');
      const closeExport = document.getElementById('closeExport');
      const closeExport2 = document.getElementById('closeExport2');
      const exportCode = document.getElementById('exportCode');
      const copyExport = document.getElementById('copyExport');
      const toast = document.getElementById('toast');

      let state = [];
      let selectedId = null;
      let preview = false;
      let mobile = false;
      let draggedType = null;
      let draggingBlockId = null;
      const placeholderLine = document.createElement('div');
      placeholderLine.className = 'h-1 bg-sky-400/70 rounded-full my-1';
      placeholderLine.dataset.placeholder = 'true';

      const defaultBlocks = {
        heading: () => ({
          type: 'heading',
          settings: { text: 'Your headline', size: 24, weight: 600, align: 'left', color: '#111827', paddingY: 10 }
        }),
        paragraph: () => ({
          type: 'paragraph',
          settings: { text: 'Write something compelling. Keep it short for better readability in email clients.', size: 14, leading: 1.6, align: 'left', color: '#374151', paddingY: 8 }
        }),
        button: () => ({
          type: 'button',
          settings: { label: 'Get started', url: '#', textColor: '#ffffff', bgColor: '#0ea5e9', radius: 8, padding: 12, align: 'left' }
        }),
        image: () => ({
          type: 'image',
          settings: { url: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop', width: 100, radius: 8, align: 'center' }
        }),
        divider: () => ({
          type: 'divider',
          settings: { color: '#e5e7eb', thickness: 2, spacing: 16 }
        }),
        spacer: () => ({
          type: 'spacer',
          settings: { height: 24 }
        }),
        social: () => ({
          type: 'social',
          settings: { color: '#6b7280', size: 20, align: 'center' }
        }),
        twoColumns: () => ({
          type: 'twoColumns',
          settings: { ratio: 50, gap: 16, align: 'left', leftText: 'Left column text', rightText: 'Right column text', size: 14, color: '#374151' }
        }),
      };

      function uid() {
        return Math.random().toString(36).slice(2, 9);
      }

      function render() {
        dropZone.innerHTML = '';
        if (state.length === 0) {
          dropZone.appendChild(placeholder);
        }
        state.forEach((block, index) => {
          const el = renderBlock(block);
          el.dataset.index = index;
          dropZone.appendChild(el);
        });
      }

      function renderBlock(block) {
        const wrap = document.createElement('div');
        wrap.className = 'group relative';
        wrap.dataset.id = block.id;
        wrap.draggable = !preview;

        const controls = document.createElement('div');
        controls.className = 'absolute -top-3 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition';
        controls.innerHTML = `
          <button data-action="move" title="Drag to reorder" class="p-1.5 rounded-md bg-white text-neutral-800 shadow border border-black/5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V6m6 12V6M3 12h18"/></svg>
          </button>
          <button data-action="duplicate" title="Duplicate" class="p-1.5 rounded-md bg-white/90 text-neutral-800 shadow border border-black/10 hover:bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="9" y="9" width="11" height="11" rx="2"/><rect x="4" y="4" width="11" height="11" rx="2"/></svg>
          </button>
          <button data-action="delete" title="Delete" class="p-1.5 rounded-md bg-red-500/10 text-red-300 border border-red-500/30 hover:bg-red-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/></svg>
          </button>
        `;
        if (preview) controls.classList.add('hidden');

        // Block content
        const c = block.settings;
        let node;

        if (block.type === 'heading') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer rounded-md hover:bg-neutral-50/60 transition';
          node.innerHTML = `
            <div contenteditable="true" class="block px-1"
              style="font-size:${c.size}px; font-weight:${c.weight}; color:${c.color}; text-align:${c.align}; padding:${c.paddingY}px 0;">
              ${escapeHtml(c.text)}
            </div>`;
        }

        if (block.type === 'paragraph') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer rounded-md hover:bg-neutral-50/60 transition';
          node.innerHTML = `
            <div contenteditable="true" class="block px-1"
              style="font-size:${c.size}px; line-height:${c.leading}; color:${c.color}; text-align:${c.align}; padding:${c.paddingY || 0}px 0;">
              ${escapeHtml(c.text)}
            </div>`;
        }

        if (block.type === 'button') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer';
          node.innerHTML = `
            <div class="px-1" style="text-align:${c.align};">
              <a href="${c.url}" contenteditable="false"
                style="display:inline-block; color:${c.textColor}; background:${c.bgColor}; border-radius:${c.radius}px; padding:${c.padding}px ${Math.max(20, c.padding + 8)}px; font-weight:600; text-decoration:none;">
                ${escapeHtml(c.label)}
              </a>
            </div>`;
        }

        if (block.type === 'image') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer';
          node.innerHTML = `
            <div class="px-1" style="text-align:${c.align};">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="" style="width:${c.width}%; border-radius:${c.radius}px; display:inline-block;"/>
            </div>`;
        }

        if (block.type === 'divider') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer';
          node.innerHTML = `
            <div class="px-1" style="padding:${c.spacing}px 0;">
              <div style="height:${c.thickness}px; background:${c.color}; width:100%;"></div>
            </div>`;
        }

        if (block.type === 'spacer') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer';
          node.innerHTML = `<div class="px-1" style="height:${c.height}px;"></div>`;
        }

        if (block.type === 'social') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer';
          node.innerHTML = `
            <div class="px-1 flex items-center justify-${c.align === 'center' ? 'center' : (c.align === 'right' ? 'end' : 'start')} gap-3">
              ${socialIcon('facebook', c.color, c.size)}
              ${socialIcon('twitter', c.color, c.size)}
              ${socialIcon('linkedin', c.color, c.size)}
              ${socialIcon('instagram', c.color, c.size)}
            </div>`;
        }

        if (block.type === 'twoColumns') {
          node = document.createElement('div');
          node.className = 'w-full cursor-pointer';
          const left = c.ratio;
          const right = 100 - left;
          node.innerHTML = `
            <div class="px-1">
              <div class="grid" style="grid-template-columns:${left}% ${right}%; gap:${c.gap}px;">
                <div>
                  <div contenteditable="true" style="font-size:${c.size}px; color:${c.color}; text-align:${c.align}; line-height:1.5;">${escapeHtml(c.leftText)}</div>
                </div>
                <div>
                  <div contenteditable="true" style="font-size:${c.size}px; color:${c.color}; text-align:${c.align}; line-height:1.5;">${escapeHtml(c.rightText)}</div>
                </div>
              </div>
            </div>`;
        }

        // Selection ring
        wrap.appendChild(node);
        wrap.appendChild(controls);
        if (selectedId === block.id && !preview) {
          wrap.classList.add('outline', 'outline-2', 'outline-sky-500/50', 'rounded-md', 'outline-offset-2');
        } else {
          wrap.classList.remove('outline', 'outline-2', 'outline-sky-500/50', 'rounded-md', 'outline-offset-2');
        }

        // Events
        wrap.addEventListener('click', (e) => {
          if (e.target.closest('[data-action]')) return;
          selectBlock(block.id);
          e.stopPropagation();
        });

        wrap.addEventListener('dragstart', (e) => {
          if (preview) { e.preventDefault(); return; }
          draggingBlockId = block.id;
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text/plain', block.id);
          showInsertLine(e);
        });

        wrap.addEventListener('dragend', () => {
          draggingBlockId = null;
          hideInsertLine();
        });

        // Control buttons
        controls.querySelector('[data-action="delete"]').addEventListener('click', () => {
          state = state.filter(b => b.id !== block.id);
          if (selectedId === block.id) selectedId = null;
          render();
          syncForms(null);
        });
        controls.querySelector('[data-action="duplicate"]').addEventListener('click', () => {
          const clone = JSON.parse(JSON.stringify(block));
          clone.id = uid();
          const idx = state.findIndex(b => b.id === block.id);
          state.splice(idx + 1, 0, clone);
          render();
        });
        controls.querySelector('[data-action="move"]').addEventListener('mousedown', () => { /* visual hint only */ });

        // Content change handlers
        node.querySelectorAll('[contenteditable="true"]').forEach((ed, i) => {
          ed.addEventListener('input', () => {
            if (block.type === 'heading') block.settings.text = ed.innerText.trim();
            if (block.type === 'paragraph') block.settings.text = ed.innerText.trim();
            if (block.type === 'twoColumns') {
              if (i === 0) block.settings.leftText = ed.innerText.trim();
              if (i === 1) block.settings.rightText = ed.innerText.trim();
            }
            if (selectedId === block.id) syncForms(block);
          });
        });

        return wrap;
      }

      // Palette drag
      palette.querySelectorAll('[draggable="true"]').forEach(item => {
        item.addEventListener('dragstart', (e) => {
          draggedType = e.currentTarget.dataset.type;
          e.dataTransfer.setData('text/plain', draggedType);
          e.dataTransfer.effectAllowed = 'copy';
          showInsertLine(e);
        });
        item.addEventListener('dragend', () => {
          draggedType = null;
          hideInsertLine();
        });
      });

      // Canvas drop handling
      canvas.addEventListener('dragover', (e) => {
        e.preventDefault();
        showInsertLine(e);
      });

      canvas.addEventListener('dragleave', () => {
        hideInsertLine();
      });

      canvas.addEventListener('drop', (e) => {
        e.preventDefault();
        const afterIndex = getInsertIndex(e);
        if (draggingBlockId) {
          const fromIdx = state.findIndex(b => b.id === draggingBlockId);
          const [moved] = state.splice(fromIdx, 1);
          const toIdx = afterIndex === -1 ? state.length : afterIndex;
          state.splice(toIdx, 0, moved);
          draggingBlockId = null;
        } else if (draggedType) {
          const fn = defaultBlocks[draggedType];
          if (fn) {
            const block = fn();
            block.id = uid();
            const idx = afterIndex === -1 ? state.length : afterIndex;
            state.splice(idx, 0, block);
            selectBlock(block.id);
          }
          draggedType = null;
        }
        hideInsertLine();
        render();
      });

      function getBlocksDom() {
        return Array.from(dropZone.children).filter(el => !el.dataset.placeholder);
      }

      function getInsertIndex(e) {
        const blocks = getBlocksDom();
        let afterIndex = -1;
        for (let i = 0; i < blocks.length; i++) {
          const rect = blocks[i].getBoundingClientRect();
          const mid = rect.top + rect.height / 2;
          if (e.clientY < mid) { afterIndex = i; break; }
        }
        return afterIndex;
      }

      function showInsertLine(e) {
        const afterIndex = getInsertIndex(e);
        const blocks = getBlocksDom();
        let top;
        if (blocks.length === 0) {
          const rect = dropZone.getBoundingClientRect();
          top = rect.top + 8;
        } else if (afterIndex === -1) {
          const last = blocks[blocks.length - 1];
          const rect = last.getBoundingClientRect();
          top = rect.bottom + 2;
        } else {
          const target = blocks[afterIndex];
          const rect = target.getBoundingClientRect();
          top = rect.top - 2;
        }
        insertLine.style.top = (top - canvas.getBoundingClientRect().top) + 'px';
        insertLine.style.opacity = '1';
      }

      function hideInsertLine() {
        insertLine.style.opacity = '0';
      }

      // Selection
      document.addEventListener('click', (e) => {
        if (!canvas.contains(e.target)) return;
        if (e.target === canvas || e.target.id === 'dropZone') {
          selectedId = null;
          render();
          syncForms(null);
        }
      });

      function selectBlock(id) {
        selectedId = id;
        const block = state.find(b => b.id === id);
        render();
        syncForms(block);
        // Scroll into view if needed
        const el = Array.from(dropZone.children).find(c => c.dataset.id === id);
        if (el) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }

      // Forms sync
      function hideAllForms() {
        document.querySelectorAll('#propsPanel form').forEach(f => f.classList.add('hidden'));
        document.getElementById('noSelection').classList.remove('hidden');
      }

      function syncForms(block) {
        hideAllForms();
        if (!block) return;

        document.getElementById('noSelection').classList.add('hidden');
        const t = block.type, s = block.settings;
        // Heading
        if (t === 'heading') {
          const f = document.getElementById('formHeading');
          f.classList.remove('hidden');
          byId('headingText').value = s.text || '';
          byId('headingSize').value = s.size || 24;
          byId('headingWeight').value = s.weight || 600;
          byId('headingColor').value = s.color || '#111827';
          f.querySelectorAll('.alignBtn').forEach(btn => {
            btn.classList.toggle('bg-white/10', btn.dataset.align === (s.align || 'left'));
            btn.onclick = () => { s.align = btn.dataset.align; render(); };
          });
          // Bind
          byId('headingText').oninput = e => { s.text = e.target.value; render(); };
          byId('headingSize').oninput = e => { s.size = +e.target.value; render(); };
          byId('headingWeight').oninput = e => { s.weight = +e.target.value; render(); };
          byId('headingColor').oninput = e => { s.color = e.target.value; render(); };
        }

        // Paragraph
        if (t === 'paragraph') {
          const f = byId('formParagraph');
          f.classList.remove('hidden');
          byId('paraText').value = s.text;
          byId('paraSize').value = s.size;
          byId('paraLeading').value = s.leading;
          byId('paraColor').value = s.color;
          f.querySelectorAll('.alignBtn').forEach(btn => {
            btn.classList.toggle('bg-white/10', btn.dataset.align === s.align);
            btn.onclick = () => { s.align = btn.dataset.align; render(); };
          });
          byId('paraText').oninput = e => { s.text = e.target.value; render(); };
          byId('paraSize').oninput = e => { s.size = +e.target.value; render(); };
          byId('paraLeading').oninput = e => { s.leading = +e.target.value; render(); };
          byId('paraColor').oninput = e => { s.color = e.target.value; render(); };
        }

        // Button
        if (t === 'button') {
          const f = byId('formButton');
          f.classList.remove('hidden');
          byId('btnLabel').value = s.label;
          byId('btnUrl').value = s.url;
          byId('btnTextColor').value = s.textColor;
          byId('btnBgColor').value = s.bgColor;
          byId('btnRadius').value = s.radius;
          byId('btnPadding').value = s.padding;
          byId('btnLabel').oninput = e => { s.label = e.target.value; render(); };
          byId('btnUrl').oninput = e => { s.url = e.target.value; render(); };
          byId('btnTextColor').oninput = e => { s.textColor = e.target.value; render(); };
          byId('btnBgColor').oninput = e => { s.bgColor = e.target.value; render(); };
          byId('btnRadius').oninput = e => { s.radius = +e.target.value; render(); };
          byId('btnPadding').oninput = e => { s.padding = +e.target.value; render(); };
        }

        // Image
        if (t === 'image') {
          const f = byId('formImage');
          f.classList.remove('hidden');
          byId('imgUrl').value = s.url;
          byId('imgWidth').value = s.width;
          byId('imgRadius').value = s.radius;
          byId('imgUrl').oninput = e => { s.url = e.target.value; render(); };
          byId('imgWidth').oninput = e => { s.width = +e.target.value; render(); };
          byId('imgRadius').oninput = e => { s.radius = +e.target.value; render(); };
        }

        // Divider
        if (t === 'divider') {
          const f = byId('formDivider');
          f.classList.remove('hidden');
          byId('divThickness').value = s.thickness;
          byId('divColor').value = s.color;
          byId('divSpacing').value = s.spacing;
          byId('divThickness').oninput = e => { s.thickness = +e.target.value; render(); };
          byId('divColor').oninput = e => { s.color = e.target.value; render(); };
          byId('divSpacing').oninput = e => { s.spacing = +e.target.value; render(); };
        }

        // Spacer
        if (t === 'spacer') {
          const f = byId('formSpacer');
          f.classList.remove('hidden');
          byId('spacerHeight').value = s.height;
          byId('spacerHeight').oninput = e => { s.height = +e.target.value; render(); };
        }

        // Social
        if (t === 'social') {
          const f = byId('formSocial');
          f.classList.remove('hidden');
          byId('socialColor').value = s.color;
          byId('socialSize').value = s.size;
          byId('socialColor').oninput = e => { s.color = e.target.value; render(); };
          byId('socialSize').oninput = e => { s.size = +e.target.value; render(); };
        }

        // Two columns
        if (t === 'twoColumns') {
          const f = byId('formTwoColumns');
          f.classList.remove('hidden');
          byId('colRatio').value = s.ratio;
          byId('colRatioLabel').innerText = s.ratio;
          byId('colRatioLabel2').innerText = 100 - s.ratio;
          byId('colGap').value = s.gap;
          f.querySelectorAll('.alignBtn').forEach(btn => {
            btn.classList.toggle('bg-white/10', btn.dataset.align === s.align);
            btn.onclick = () => { s.align = btn.dataset.align; render(); };
          });
          byId('colRatio').oninput = e => {
            s.ratio = +e.target.value;
            byId('colRatioLabel').innerText = s.ratio;
            byId('colRatioLabel2').innerText = 100 - s.ratio;
            render();
          };
          byId('colGap').oninput = e => { s.gap = +e.target.value; render(); };
        }
      }

      function byId(id) { return document.getElementById(id); }

      function escapeHtml(text) {
        return (text || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }

      function socialIcon(name, color, size) {
        const common = `width:${size}px;height:${size}px;color:${color};`;
        if (name === 'facebook') {
          return `<span style="${common};display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></span>`;
        }
        if (name === 'twitter') {
          return `<span style="${common};display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 4s-.8 3-3 4c0 9-9 12-15 7 2 0 4-.6 5.5-2C6 13 5 9.5 6.5 7.5c2 2.5 5 3 7.5 1-.5-2.5 2-3.5 3.5-2.5 1 0 2-1 2-1Z"/></svg></span>`;
        }
        if (name === 'linkedin') {
          return `<span style="${common};display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5a2 2 0 0 1 4 0v5"/></svg></span>`;
        }
        if (name === 'instagram') {
          return `<span style="${common};display:inline-flex;"><svg xmlns="http://www.w3.org/2000/svg" style="width:${size}px;height:${size}px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg></span>`;
        }
        return '';
      }

      // View toggles
      desktopBtn.addEventListener('click', () => {
        mobile = false;
        canvasWidth.style.maxWidth = '680px';
        desktopBtn.classList.add('text-white');
        mobileBtn.classList.remove('text-white');
      });
      mobileBtn.addEventListener('click', () => {
        mobile = true;
        canvasWidth.style.maxWidth = '420px';
        mobileBtn.classList.add('text-white');
        desktopBtn.classList.remove('text-white');
      });

      // Preview toggle
      previewToggle.addEventListener('click', () => {
        preview = !preview;
        if (preview) {
          previewToggle.classList.add('bg-white/10');
        } else {
          previewToggle.classList.remove('bg-white/10');
        }
        render();
      });

      // Export
      exportBtn.addEventListener('click', () => {
        exportCode.value = generateEmailHtml();
        exportModal.classList.remove('hidden');
      });
      [closeExport, closeExport2].forEach(btn => btn.addEventListener('click', () => exportModal.classList.add('hidden')));
      copyExport.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(exportCode.value);
          toast.style.opacity = '1';
          setTimeout(() => { toast.style.opacity = '0'; }, 1200);
        } catch (e) {}
      });

      function generateEmailHtml() {
        // Very simple exporter with inline styles suited for basic clients
        const rows = state.map(b => exportBlock(b)).join('\n');
        const width = mobile ? 420 : 680;
        return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Email</title>
  </head>
  <body style="margin:0;padding:0;background:#f6f6f6;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;background:#f6f6f6;">
      <tr>
        <td align="center" style="padding:24px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:${Math.min(width, 680)}px;background:#ffffff;border-radius:8px;border:1px solid #e5e7eb;">
            <tr><td style="padding:24px;">
${rows}
            </td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
      }

      function exportBlock(block) {
        const s = block.settings;
        if (block.type === 'heading') {
          return `<h2 style="margin:0 0 ${s.paddingY || 10}px 0;font-size:${s.size}px;font-weight:${s.weight};color:${s.color};text-align:${s.align};">${escapeHtml(s.text)}</h2>`;
        }
        if (block.type === 'paragraph') {
          return `<p style="margin:${s.paddingY || 8}px 0 0 0;font-size:${s.size}px;line-height:${s.leading};color:${s.color};text-align:${s.align};">${escapeHtml(s.text)}</p>`;
        }
        if (block.type === 'button') {
          const pad = s.padding;
          const px = Math.max(20, pad + 8);
          return `<div style="text-align:${s.align};margin:12px 0;"><a href="${s.url}" style="display:inline-block;background:${s.bgColor};color:${s.textColor};padding:${pad}px ${px}px;border-radius:${s.radius}px;font-weight:600;text-decoration:none;">${escapeHtml(s.label)}</a></div>`;
        }
        if (block.type === 'image') {
          return `<div style="text-align:${s.align};margin:8px 0;"><img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="" style="display:inline-block;width:${s.width}%;border-radius:${s.radius}px;"/></div>`;
        }
        if (block.type === 'divider') {
          return `<div style="height:${s.spacing}px;"></div><div style="height:${s.thickness}px;background:${s.color};width:100%;"></div><div style="height:${s.spacing}px;"></div>`;
        }
        if (block.type === 'spacer') {
          return `<div style="height:${s.height}px;"></div>`;
        }
        if (block.type === 'social') {
          const size = s.size, color = s.color;
          const icon = (d) => `<span style="display:inline-block;width:${size}px;height:${size}px;color:${color};margin-right:12px;">${socialIcon(d, color, size)}</span>`;
          const justify = s.align === 'center' ? 'center' : (s.align === 'right' ? 'right' : 'left');
          return `<div style="text-align:${justify};margin:8px 0;">${socialIcon('facebook', color, size)}${socialIcon('twitter', color, size)}${socialIcon('linkedin', color, size)}${socialIcon('instagram', color, size)}</div>`;
        }
        if (block.type === 'twoColumns') {
          const left = s.ratio, right = 100 - s.ratio;
          return `
<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;"><tr>
  <td style="width:${left}%;vertical-align:top;padding-right:${s.gap/2}px;text-align:${s.align};">
    <div style="font-size:${s.size}px;line-height:1.5;color:${s.color};">${escapeHtml(s.leftText)}</div>
  </td>
  <td style="width:${right}%;vertical-align:top;padding-left:${s.gap/2}px;text-align:${s.align};">
    <div style="font-size:${s.size}px;line-height:1.5;color:${s.color};">${escapeHtml(s.rightText)}</div>
  </td>
</tr></table>`;
        }
        return '';
      }

      // Initialize with a couple of blocks
      (function init() {
        const h = defaultBlocks.heading(); h.id = uid(); h.settings.text = 'Welcome to your newsletter';
        const p = defaultBlocks.paragraph(); p.id = uid();
        const b = defaultBlocks.button(); b.id = uid(); b.settings.label = 'Explore updates';
        state = [h, p, b];
        render();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 bg-neutral-900/80 border-b border-white/10">
<div className="mx-auto max-w-[1400px] px-4">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-[6px] bg-white text-neutral-900 flex items-center justify-center text-xs font-semibold tracking-tight">EM</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">Email Builder</span>
<span className="text-slate-600">•</span>
<span className="hidden md:inline">Drag components into the canvas</span>
</div>
</div>
<div className="flex items-center gap-2">

<div className="hidden sm:flex items-center rounded-md border border-white/10 bg-white/5 overflow-hidden">
<button className="px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500/60" id="desktopBtn" title="Desktop view">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="18" x="3" y="4"></rect><path d="M7 20h10"></path></svg>
</button>
<div className="h-6 w-px bg-white/10"></div>
<button className="px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500/60" id="mobileBtn" title="Mobile view">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="10" x="7" y="2"></rect><path d="M11 19h2"></path></svg>
</button>
</div>

<button className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-slate-200 hover:bg-white/10 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500/60" id="previewToggle" title="Toggle preview">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="hidden sm:inline">Preview</span>
</button>

<button className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sm text-sky-300 hover:bg-sky-500/20 hover:text-sky-200 transition outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500/60" id="exportBtn" title="Export HTML">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="hidden sm:inline">Export</span>
</button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-[1400px] px-3 sm:px-4 md:px-5 py-4 md:py-5 grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-4 md:gap-5">

<aside className="lg:sticky lg:top-16 rounded-xl border border-white/10 bg-neutral-900/50 p-3 sm:p-4">
<div className="flex items-center justify-between mb-3">
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-white">Components</h2>
<button className="lg:hidden text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition" id="collapseLeft" title="Hide">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3" id="palette">

<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="heading" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M12 6v12M4 18h16"></path></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Heading</div>
<div className="text-[11px] text-slate-400">Title text</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="paragraph" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 10h10M4 14h16M4 18h12"></path></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Paragraph</div>
<div className="text-[11px] text-slate-400">Body copy</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="button" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="16" x="4" y="7"></rect></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Button</div>
<div className="text-[11px] text-slate-400">Call to action</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="image" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="18" x="3" y="5"></rect><path d="m10 13 3-3 6 6H5l3-3 2 2z"></path></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Image</div>
<div className="text-[11px] text-slate-400">Upload or link</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="divider" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Divider</div>
<div className="text-[11px] text-slate-400">Separator</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="spacer" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v4M12 15v4M5 12h14"></path></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Spacer</div>
<div className="text-[11px] text-slate-400">White space</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="social" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="12" r="2.5"></circle><circle cx="12" cy="12" r="2.5"></circle><circle cx="18" cy="12" r="2.5"></circle></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Social</div>
<div className="text-[11px] text-slate-400">Icons row</div>
</div>
</div>
</button>
<button className="group p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition text-left" data-type="twoColumns" draggable="true">
<div className="flex items-center gap-2">
<div className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-300 group-hover:text-white transition">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="7" x="4" y="6"></rect><rect height="12" rx="2" width="7" x="13" y="6"></rect></svg>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Two columns</div>
<div className="text-[11px] text-slate-400">Split layout</div>
</div>
</div>
</button>
</div>
<div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400">
          Tip: Drag items into the canvas. Click a block to edit its properties.
        </div>
</aside>

<section className="min-h-[70vh]">
<div className="relative h-full w-full rounded-xl border border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),rgba(2,6,23,0.3))] p-3 sm:p-6 overflow-auto">

<div className="flex justify-center">
<div className="w-full max-w-[680px] transition-[max-width] duration-300" id="canvasWidth">

<div className="relative rounded-lg bg-white text-neutral-800 shadow-2xl ring-1 ring-black/5 overflow-hidden min-h-[480px]" id="canvas" style={{fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>

<div className="bg-neutral-50 border-b border-neutral-200 px-6 py-3 flex items-center justify-between">
<div className="text-sm text-neutral-500">Subject: <span className="text-neutral-800">Your product update</span></div>
<div className="text-neutral-400 text-xs">Preview text</div>
</div>

<div className="relative px-6 py-8" id="dropZone">
<div className="rounded-lg border-2 border-dashed border-neutral-300 text-neutral-500 text-sm p-6 text-center" id="placeholder">
                    Drop components here
                  </div>
</div>

<div className="px-6 py-6 bg-neutral-50 border-t border-neutral-200 text-[12px] text-neutral-500">
                  You’re receiving this email because you subscribed. Unsubscribe
                </div>

<div className="absolute left-0 right-0 h-0.5 bg-sky-500/70 pointer-events-none opacity-0 transition-opacity duration-150" id="insertLine"></div>
</div>
</div>
</div>
</div>
</section>

<aside className="lg:sticky lg:top-16 rounded-xl border border-white/10 bg-neutral-900/50 p-3 sm:p-4" id="propsPanel">
<div className="flex items-center justify-between mb-3">
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-white">Properties</h2>
<button className="lg:hidden text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition" id="collapseRight" title="Hide">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-slate-400" id="noSelection">
          Select a block to edit its properties.
        </div>
<form className="hidden space-y-4" id="formHeading">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Text</label>
<textarea className="w-full text-sm bg-neutral-950/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-sky-500/40" id="headingText" placeholder="Heading" rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Size</label>
<input className="w-full accent-sky-400" id="headingSize" max="36" min="16" step="1" type="range"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Weight</label>
<select className="w-full text-sm bg-neutral-950/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-sky-500/40" id="headingWeight">
<option value="500">Medium</option>
<option selected="" value="600">Semibold</option>
<option value="700">Bold</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Align</label>
<div className="inline-flex rounded-md border border-white/10 overflow-hidden">
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="left" type="button">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h12M4 10h16M4 14h12M4 18h16"></path></svg>
</button>
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="center" type="button">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h12M4 10h16M6 14h12M4 18h16"></path></svg>
</button>
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="right" type="button">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h12M4 10h16M8 14h12M4 18h16"></path></svg>
</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Color</label>
<input className="w-full h-9 bg-neutral-950/60 border border-white/10 rounded-md p-1" id="headingColor" type="color"/>
</div>
</div>
</form>
<form className="hidden space-y-4" id="formParagraph">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Text</label>
<textarea className="w-full text-sm bg-neutral-950/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-sky-500/40" id="paraText" placeholder="Paragraph" rows="5"></textarea>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Size</label>
<input className="w-full accent-sky-400" id="paraSize" max="18" min="12" step="1" type="range"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Line height</label>
<input className="w-full accent-sky-400" id="paraLeading" max="1.9" min="1.2" step="0.1" type="range"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Align</label>
<div className="inline-flex rounded-md border border-white/10 overflow-hidden">
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="left" type="button">L</button>
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="center" type="button">C</button>
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="right" type="button">R</button>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Color</label>
<input className="w-full h-9 bg-neutral-950/60 border border-white/10 rounded-md p-1" id="paraColor" type="color"/>
</div>
</div>
</form>
<form className="hidden space-y-4" id="formButton">
<div className="grid grid-cols-1 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Label</label>
<input className="w-full text-sm bg-neutral-950/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-sky-500/40" id="btnLabel" placeholder="Get started"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">URL</label>
<input className="w-full text-sm bg-neutral-950/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-sky-500/40" id="btnUrl" placeholder="https://..."/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Text color</label>
<input className="w-full h-9 bg-neutral-950/60 border border-white/10 rounded-md p-1" id="btnTextColor" type="color"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Fill color</label>
<input className="w-full h-9 bg-neutral-950/60 border border-white/10 rounded-md p-1" id="btnBgColor" type="color"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Radius</label>
<input className="w-full accent-sky-400" id="btnRadius" max="20" min="0" step="1" type="range"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Padding</label>
<input className="w-full accent-sky-400" id="btnPadding" max="18" min="8" step="1" type="range"/>
</div>
</div>
</form>
<form className="hidden space-y-4" id="formImage">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Image URL</label>
<input className="w-full text-sm bg-neutral-950/60 border border-white/10 rounded-md px-3 py-2 text-slate-200 outline-none focus:ring-2 focus:ring-sky-500/40" id="imgUrl" placeholder="https://images.unsplash.com/..."/>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Width (%)</label>
<input className="w-full accent-sky-400" id="imgWidth" max="100" min="30" step="1" type="range"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Radius</label>
<input className="w-full accent-sky-400" id="imgRadius" max="16" min="0" step="1" type="range"/>
</div>
</div>
</form>
<form className="hidden space-y-4" id="formDivider">
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Thickness</label>
<input className="w-full accent-sky-400" id="divThickness" max="6" min="1" step="1" type="range"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Color</label>
<input className="w-full h-9 bg-neutral-950/60 border border-white/10 rounded-md p-1" id="divColor" type="color"/>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Spacing</label>
<input className="w-full accent-sky-400" id="divSpacing" max="40" min="8" step="1" type="range"/>
</div>
</form>
<form className="hidden space-y-4" id="formSpacer">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Height</label>
<input className="w-full accent-sky-400" id="spacerHeight" max="64" min="8" step="1" type="range"/>
</div>
</form>
<form className="hidden space-y-4" id="formSocial">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Icon color</label>
<input className="w-full h-9 bg-neutral-950/60 border border-white/10 rounded-md p-1" id="socialColor" type="color"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Size</label>
<input className="w-full accent-sky-400" id="socialSize" max="28" min="16" step="1" type="range"/>
</div>
</form>
<form className="hidden space-y-4" id="formTwoColumns">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Column ratio</label>
<input className="w-full accent-sky-400" id="colRatio" max="70" min="30" step="1" type="range"/>
<div className="mt-1 text-xs text-slate-400"><span id="colRatioLabel">50</span>% / <span id="colRatioLabel2">50</span>%</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Gap</label>
<input className="w-full accent-sky-400" id="colGap" max="32" min="8" step="1" type="range"/>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<label className="block text-xs text-slate-400 mb-1">Align</label>
<div className="inline-flex rounded-md border border-white/10 overflow-hidden">
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="left" type="button">L</button>
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="center" type="button">C</button>
<button className="alignBtn px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/5" data-align="right" type="button">R</button>
</div>
</div>
</div>
</form>
</aside>
</main>

<div className="fixed inset-0 z-[60] hidden" id="exportModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-2xl rounded-xl bg-neutral-900 border border-white/10 shadow-2xl">
<div className="px-4 sm:px-5 py-3 border-b border-white/10 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-white">Export HTML</h3>
<button className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" id="closeExport" title="Close">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 6l12 12M6 18L18 6"></path></svg>
</button>
</div>
<div className="p-4 sm:p-5">
<div className="rounded-lg border border-white/10 bg-black/30">
<textarea className="w-full h-72 resize-none bg-transparent outline-none p-3 text-xs text-slate-200" id="exportCode"></textarea>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-slate-400">Copy and paste this into your email platform. Some platforms require inlined styles.</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-slate-200 hover:bg-white/10 transition" id="copyExport">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Copy
                </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-sky-500/10 border border-sky-500/30 text-sm text-sky-300 hover:bg-sky-500/20 transition" id="closeExport2">Close</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] px-3 py-2 rounded-md bg-white/10 backdrop-blur border border-white/10 text-sm text-white shadow-xl opacity-0 pointer-events-none transition" id="toast">
      Copied to clipboard
    </div>


    </>
  );
}
