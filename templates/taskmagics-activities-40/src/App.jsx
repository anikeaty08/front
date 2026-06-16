import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const addBtn = document.getElementById('addFileBtn');
        const addCard = document.getElementById('addFileCard');
        const closeAdd = document.getElementById('closeAddFileCard');
        const cancelAdd = document.getElementById('cancelAddFile');
        const uploadBtn = document.getElementById('uploadFile');
        const fileNameInput = document.getElementById('fileNameInput');
        const fileInput = document.getElementById('fileInput');
        const fileHint = document.getElementById('fileSelectedHint');
        const dropArea = document.getElementById('dropArea');
        const filesTbody = document.getElementById('filesTbody');
        const filesCount = document.getElementById('filesCount');
        const sortByName = document.getElementById('sortByName');
        const sortByTime = document.getElementById('sortByTime');

        const previewModal = document.getElementById('previewModal');
        const previewTitle = document.getElementById('previewTitle');
        const previewPdf = document.getElementById('previewPdf');
        const previewImage = document.getElementById('previewImage');
        const previewFallback = document.getElementById('previewFallback');
        const previewDownload = document.getElementById('previewDownload');
        const closePreview = document.getElementById('closePreview');
        const previewCloseBottom = document.getElementById('previewCloseBottom');

        function toggleAddCard(show) {
          if (show) {
            addCard.classList.remove('hidden');
          } else {
            addCard.classList.add('hidden');
          }
        }

        function updateFilesCount() {
          const count = filesTbody.querySelectorAll('tr').length;
          filesCount.textContent = `Showing ${count} file${count === 1 ? '' : 's'}`;
        }

        function fmtDate(d) {
          const dt = new Date(d);
          return dt.toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: 'numeric',
            minute: '2-digit'
          });
        }

        function resetUploadForm() {
          fileInput.value = '';
          fileNameInput.value = '';
          fileHint.textContent = 'No file selected';
          uploadBtn.disabled = true;
        }

        function validateUploadState() {
          uploadBtn.disabled = !(fileInput.files && fileInput.files[0] && fileNameInput.value.trim().length > 0);
        }

        // Add File interactions
        addBtn.addEventListener('click', () => toggleAddCard(addCard.classList.contains('hidden')));
        closeAdd.addEventListener('click', () => toggleAddCard(false));
        cancelAdd.addEventListener('click', () => {
          toggleAddCard(false);
          resetUploadForm();
        });

        document.addEventListener('click', (e) => {
          if (!addCard.contains(e.target) && !addBtn.contains(e.target)) {
            toggleAddCard(false);
          }
        });

        // Drop area
        ['dragenter','dragover'].forEach(evt => dropArea.addEventListener(evt, (e) => {
          e.preventDefault();
          dropArea.classList.add('ring-violet-300','bg-slate-100');
        }));
        ['dragleave','drop'].forEach(evt => dropArea.addEventListener(evt, (e) => {
          e.preventDefault();
          dropArea.classList.remove('ring-violet-300','bg-slate-100');
        }));
        dropArea.addEventListener('drop', (e) => {
          const file = e.dataTransfer.files && e.dataTransfer.files[0];
          if (file) {
            fileInput.files = e.dataTransfer.files;
            fileHint.textContent = file.name;
            if (!fileNameInput.value.trim()) {
              fileNameInput.value = file.name;
            }
            validateUploadState();
          }
        });

        fileInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          fileHint.textContent = file ? file.name : 'No file selected';
          if (file && !fileNameInput.value.trim()) {
            fileNameInput.value = file.name;
          }
          validateUploadState();
        });

        fileNameInput.addEventListener('input', validateUploadState);

        uploadBtn.addEventListener('click', () => {
          const file = fileInput.files && fileInput.files[0];
          const name = fileNameInput.value.trim();
          if (!file || !name) return;

          const url = URL.createObjectURL(file);
          const nowIso = new Date().toISOString();
          const owner = 'You';
          const lower = name.toLowerCase();
          let fileType = 'other';
          if (lower.endsWith('.pdf')) fileType = 'pdf';
          else if (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.webp') || lower.endsWith('.gif')) fileType = 'image';

          const tr = document.createElement('tr');
          tr.className = 'odd:bg-white even:bg-slate-50 hover:bg-slate-100/70 transition-colors';
          tr.setAttribute('data-owner', 'employee'); // Treat as employee for actions
          tr.setAttribute('data-ts', nowIso);

          tr.innerHTML = `
            <td class="py-3.5 pl-5 pr-3 align-middle">
              <a href="${url}" class="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-violet-700">
                <i data-lucide="${fileType === 'image' ? 'file-image' : fileType === 'pdf' ? 'file-text' : 'file'}" class="w-[16px] h-[16px] text-violet-600"></i>
                ${name}
              </a>
            </td>
            <td class="px-3 py-3.5 align-middle">
              <span class="font-semibold text-slate-900">${owner}</span>
            </td>
            <td class="px-3 py-3.5 align-middle">
              <span class="text-[13px] text-slate-500">${fmtDate(nowIso)}</span>
            </td>
            <td class="py-3.5 pr-5 pl-3 align-middle">
              <div class="flex items-center justify-end gap-1.5">
                <button class="btn-view inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" data-file-url="${url}" data-file-type="${fileType}" data-file-name="${name}">
                  <i data-lucide="eye" class="w-[14px] h-[14px] text-violet-600"></i>
                  View
                </button>
                <a href="${url}" download class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300">
                  <i data-lucide="download" class="w-[14px] h-[14px] text-violet-600"></i>
                  Download
                </a>
              </div>
            </td>
          `;

          filesTbody.prepend(tr);
          updateFilesCount();
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          toggleAddCard(false);
          resetUploadForm();
        });

        // Delegated View handler
        filesTbody.addEventListener('click', (e) => {
          const btn = e.target.closest('.btn-view');
          if (!btn) return;
          const url = btn.getAttribute('data-file-url');
          const type = btn.getAttribute('data-file-type');
          const name = btn.getAttribute('data-file-name') || 'Preview';

          previewTitle.textContent = name;
          previewPdf.classList.add('hidden');
          previewImage.classList.add('hidden');
          previewFallback.classList.add('hidden');

          if (type === 'pdf') {
            previewPdf.src = url;
            previewPdf.classList.remove('hidden');
          } else if (type === 'image') {
            previewImage.src = url;
            previewImage.classList.remove('hidden');
          } else {
            previewFallback.classList.remove('hidden');
          }

          previewDownload.href = url;
          previewDownload.setAttribute('download', name);
          previewModal.classList.remove('hidden');
        });

        function closePreviewModal() {
          previewModal.classList.add('hidden');
          previewPdf.src = '';
          previewImage.src = '';
        }

        closePreview.addEventListener('click', closePreviewModal);
        previewCloseBottom.addEventListener('click', closePreviewModal);
        previewModal.addEventListener('click', (e) => {
          const panel = e.target.closest('.rounded-xl.bg-white');
          if (!panel) closePreviewModal();
        });

        // Sorting
        function setSortIcon(headerBtn, which) {
          const icons = headerBtn.querySelectorAll('i');
          icons.forEach(i => i.classList.add('hidden'));
          if (which === 'none') {
            icons[0].classList.remove('hidden'); // arrow-up-down
          } else if (which === 'asc') {
            icons[1].classList.remove('hidden'); // chevron-up
          } else {
            icons[2].classList.remove('hidden'); // chevron-down
          }
        }

        function sortRows(by, direction) {
          const rows = Array.from(filesTbody.querySelectorAll('tr'));
          const mult = direction === 'asc' ? 1 : -1;
          rows.sort((a, b) => {
            if (by === 'name') {
              const an = a.querySelector('td a')?.textContent.trim().toLowerCase() || '';
              const bn = b.querySelector('td a')?.textContent.trim().toLowerCase() || '';
              if (an < bn) return -1 * mult;
              if (an > bn) return 1 * mult;
              return 0;
            } else {
              const at = new Date(a.getAttribute('data-ts')).getTime() || 0;
              const bt = new Date(b.getAttribute('data-ts')).getTime() || 0;
              return (at - bt) * mult;
            }
          });
          rows.forEach(r => filesTbody.appendChild(r));
        }

        // Initialize default sort by time desc
        sortRows('time', 'desc');
        setSortIcon(sortByTime, 'desc');
        sortByTime.setAttribute('data-sort', 'desc');
        setSortIcon(sortByName, 'none');
        sortByName.setAttribute('data-sort', 'none');

        sortByName.addEventListener('click', () => {
          // reset other header
          sortByTime.setAttribute('data-sort', 'none');
          setSortIcon(sortByTime, 'none');

          const current = sortByName.getAttribute('data-sort') || 'none';
          const next = current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'none';
          sortByName.setAttribute('data-sort', next);
          setSortIcon(sortByName, next);

          if (next === 'none') {
            // fallback to time desc when clearing
            sortByTime.setAttribute('data-sort', 'desc');
            setSortIcon(sortByTime, 'desc');
            sortRows('time', 'desc');
          } else {
            sortRows('name', next);
          }
        });

        sortByTime.addEventListener('click', () => {
          // reset other header
          sortByName.setAttribute('data-sort', 'none');
          setSortIcon(sortByName, 'none');

          const current = sortByTime.getAttribute('data-sort') || 'none';
          const next = current === 'none' ? 'asc' : current === 'asc' ? 'desc' : 'none';
          sortByTime.setAttribute('data-sort', next);
          setSortIcon(sortByTime, next);

          if (next === 'none') {
            // default back to desc
            sortByTime.setAttribute('data-sort', 'desc');
            setSortIcon(sortByTime, 'desc');
            sortRows('time', 'desc');
          } else {
            sortRows('time', next);
          }
        });

        updateFilesCount();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-14">
<div className="flex items-center gap-3">

<div className="h-8 w-8 rounded-md bg-violet-600 text-white flex items-center justify-center text-[13px] font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>TM</div>
<div className="flex items-baseline gap-3">
<span className="text-[15px] font-medium text-slate-700">TaskMagics</span>
<span className="h-4 w-px bg-slate-200"></span>
<span className="text-[14px] font-medium text-slate-900">Files</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-3">
<div className="text-[12px] text-slate-500">Updated just now</div>
</div>
</div>
</div>
</header>

<main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

<div className="mb-5">
<div className="flex items-center justify-between">
<div>
<h1 className="text-[24px] leading-7 tracking-tight font-semibold text-slate-900">Files</h1>
<p className="mt-1 text-[13px] text-slate-500">Upload, view, and manage project files.</p>
</div>

<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-[13px] font-medium bg-violet-600 text-white ring-1 ring-violet-500/20 shadow-sm hover:bg-violet-700 hover:ring-violet-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-colors" id="addFileBtn">
<i className="w-[16px] h-[16px]" data-lucide="plus"></i>
                Add File
              </button>

<div className="hidden absolute right-0 mt-2 w-[380px] sm:w-[420px]" id="addFileCard">
<div className="rounded-xl bg-white ring-1 ring-slate-200 shadow-lg">
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900">Add File</h3>
<button className="p-1 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" id="closeAddFileCard">
<i className="w-[16px] h-[16px]" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 space-y-3">

<div>
<label className="block text-[12px] font-medium text-slate-700 mb-1" htmlFor="fileNameInput">File Name</label>
<input className="w-full rounded-md border-slate-200 text-[14px] placeholder:text-slate-400 focus:border-violet-500 focus:ring-violet-500 bg-white ring-1 ring-slate-200 focus:ring-2 px-3 py-2 outline-none" id="fileNameInput" placeholder="Enter file name…" type="text"/>
</div>

<div className="rounded-lg ring-1 ring-slate-200 border-dashed bg-slate-50 hover:bg-slate-100 transition-colors" id="dropArea">
<label className="flex flex-col items-center justify-center px-4 py-6 cursor-pointer" htmlFor="fileInput">
<div className="flex items-center gap-2 text-slate-700">
<div className="h-9 w-9 rounded-md bg-violet-50 text-violet-600 ring-1 ring-violet-100 flex items-center justify-center">
<i className="w-[18px] h-[18px]" data-lucide="upload"></i>
</div>
<div className="text-left">
<div className="text-[13px] font-medium text-slate-800">Drag &amp; drop or click to upload</div>
<div className="text-[12px] text-slate-500" id="fileSelectedHint">No file selected</div>
</div>
</div>
<input className="hidden" id="fileInput" type="file"/>
</label>
</div>
</div>

<div className="mt-4 flex justify-end gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[13px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" id="cancelAddFile">
                        Cancel
                      </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-[13px] font-medium bg-violet-600 text-white ring-1 ring-violet-500/20 hover:bg-violet-700 hover:ring-violet-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 disabled:opacity-50 disabled:cursor-not-allowed" id="uploadFile">
<i className="w-[16px] h-[16px]" data-lucide="arrow-up-circle"></i>
                        Upload
                      </button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<section className="rounded-xl bg-white ring-1 ring-slate-200 shadow-sm">

<div className="overflow-x-auto">
<table className="min-w-full text-left">
<thead className="bg-white">
<tr className="border-b border-slate-200">
<th className="py-3.5 pl-5 pr-3 text-[12px] font-medium text-slate-600">
<button className="inline-flex items-center gap-1 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded px-1 -mx-1" data-sort="none" id="sortByName">
<span>File Name</span>
<span className="inline-flex items-center">
<i className="w-[14px] h-[14px] sort-name-icon sort-default" data-lucide="arrow-up-down"></i>
<i className="w-[14px] h-[14px] sort-name-icon hidden" data-lucide="chevron-up"></i>
<i className="w-[14px] h-[14px] sort-name-icon hidden" data-lucide="chevron-down"></i>
</span>
</button>
</th>
<th className="px-3 py-3.5 text-[12px] font-medium text-slate-600">Owner</th>
<th className="px-3 py-3.5 text-[12px] font-medium text-slate-600">
<button className="inline-flex items-center gap-1 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 rounded px-1 -mx-1" data-sort="desc" id="sortByTime">
<span>Uploaded Time</span>
<span className="inline-flex items-center">
<i className="w-[14px] h-[14px] sort-time-icon hidden" data-lucide="arrow-up-down"></i>
<i className="w-[14px] h-[14px] sort-time-icon hidden" data-lucide="chevron-up"></i>
<i className="w-[14px] h-[14px] sort-time-icon" data-lucide="chevron-down"></i>
</span>
</button>
</th>
<th className="py-3.5 pr-5 pl-3 text-[12px] font-medium text-slate-600 text-right">Actions</th>
</tr>
</thead>
<tbody className="text-[14px]" id="filesTbody">

<tr className="odd:bg-white even:bg-slate-50 hover:bg-slate-100/70 transition-colors" data-owner="admin" data-ts="2025-10-14T15:45:00Z">
<td className="py-3.5 pl-5 pr-3 align-middle">
<a className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-violet-700" href="https://images.unsplash.com/photo-1587614148185-1cf3fd431536?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" target="_blank">
<i className="w-[16px] h-[16px] text-violet-600" data-lucide="file-image"></i>
                      Brand_Guidelines.png
                    </a>
</td>
<td className="px-3 py-3.5 align-middle">
<span className="font-semibold text-slate-900">Admin</span>
</td>
<td className="px-3 py-3.5 align-middle">
<span className="text-[13px] text-slate-500">Oct 14, 2025, 3:45 PM</span>
</td>
<td className="py-3.5 pr-5 pl-3 align-middle">
<div className="flex items-center justify-end gap-1.5">
<button className="btn-view inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" data-file-name="Brand_Guidelines.png" data-file-type="image" data-file-url="https://images.unsplash.com/photo-1587614148185-1cf3fd431536?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<i className="w-[14px] h-[14px] text-violet-600" data-lucide="eye"></i>
                        View
                      </button>
</div>
</td>
</tr>

<tr className="odd:bg-white even:bg-slate-50 hover:bg-slate-100/70 transition-colors" data-owner="employee" data-ts="2025-10-12T09:32:00Z">
<td className="py-3.5 pl-5 pr-3 align-middle">
<a className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-violet-700" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="w-[16px] h-[16px] text-violet-600" data-lucide="file-text"></i>
                      Dashboard_Wireframe.pdf
                    </a>
</td>
<td className="px-3 py-3.5 align-middle">
<span className="font-semibold text-slate-900">Alex Johnson</span>
</td>
<td className="px-3 py-3.5 align-middle">
<span className="text-[13px] text-slate-500">Oct 12, 2025, 9:32 AM</span>
</td>
<td className="py-3.5 pr-5 pl-3 align-middle">
<div className="flex items-center justify-end gap-1.5">
<button className="btn-view inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" data-file-name="Dashboard_Wireframe.pdf" data-file-type="pdf" data-file-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="w-[14px] h-[14px] text-violet-600" data-lucide="eye"></i>
                        View
                      </button>
<a className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" download="" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="w-[14px] h-[14px] text-violet-600" data-lucide="download"></i>
                        Download
                      </a>
</div>
</td>
</tr>

<tr className="odd:bg-white even:bg-slate-50 hover:bg-slate-100/70 transition-colors" data-owner="employee" data-ts="2025-10-13T11:10:00Z">
<td className="py-3.5 pl-5 pr-3 align-middle">
<a className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-violet-700" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="w-[16px] h-[16px] text-violet-600" data-lucide="file-text"></i>
                      API_Spec_v1.3.pdf
                    </a>
</td>
<td className="px-3 py-3.5 align-middle">
<span className="font-semibold text-slate-900">Sarah Lee</span>
</td>
<td className="px-3 py-3.5 align-middle">
<span className="text-[13px] text-slate-500">Oct 13, 2025, 11:10 AM</span>
</td>
<td className="py-3.5 pr-5 pl-3 align-middle">
<div className="flex items-center justify-end gap-1.5">
<button className="btn-view inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" data-file-name="API_Spec_v1.3.pdf" data-file-type="pdf" data-file-url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="w-[14px] h-[14px] text-violet-600" data-lucide="eye"></i>
                        View
                      </button>
<a className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" download="" href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">
<i className="w-[14px] h-[14px] text-violet-600" data-lucide="download"></i>
                        Download
                      </a>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-3 border-t border-slate-200 flex items-center justify-between">
<p className="text-[12px] text-slate-500" id="filesCount">Showing 3 files</p>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 transition-colors" id="refreshBtn">
<i className="w-[14px] h-[14px] text-slate-500" data-lucide="refresh-ccw"></i>
              Refresh
            </button>
</div>
</section>
</main>
</div>

<div className="hidden fixed inset-0 z-50" id="previewModal">
<div className="absolute inset-0 bg-slate-900/60"></div>
<div className="relative z-10 mx-auto max-w-3xl h-[80vh] mt-16 px-4 sm:px-6">
<div className="flex flex-col h-full rounded-xl bg-white ring-1 ring-slate-200 shadow-xl overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-violet-50 text-violet-600 ring-1 ring-violet-100 flex items-center justify-center">
<i className="w-[16px] h-[16px]" data-lucide="file"></i>
</div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900" id="previewTitle">Preview</h3>
</div>
<button className="p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300" id="closePreview">
<i className="w-[18px] h-[18px]" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 bg-slate-50">

<iframe className="w-full h-full hidden bg-white" id="previewPdf" title="PDF preview"></iframe>

<img alt="Image preview" className="w-full h-full hidden object-contain" id="previewImage"/>

<div className="w-full h-full hidden flex items-center justify-center" id="previewFallback">
<div className="text-center px-6">
<i className="w-[24px] h-[24px] text-slate-400 mx-auto" data-lucide="file-question"></i>
<p className="mt-2 text-[14px] text-slate-600">Preview not available for this file type.</p>
</div>
</div>
</div>
<div className="px-4 py-3 border-t border-slate-200 flex items-center justify-end gap-2">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300" download="" href="#" id="previewDownload">
<i className="w-[14px] h-[14px] text-violet-600" data-lucide="download"></i>
              Download
            </a>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12px] font-medium bg-violet-600 text-white ring-1 ring-violet-500/20 hover:bg-violet-700 hover:ring-violet-500/30" id="previewCloseBottom">
              Close
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
