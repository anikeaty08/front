import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const imagesInput = document.getElementById("imagesInput");
    const logoInput = document.getElementById("logoInput");
    const opacityInput = document.getElementById("opacityInput");
    const sizeInput = document.getElementById("sizeInput");
    const opacityValue = document.getElementById("opacityValue");
    const sizeValue = document.getElementById("sizeValue");
    const statusBox = document.getElementById("status");
    const resultsBox = document.getElementById("results");
    const downloadZipBtn = document.getElementById("downloadZipBtn");
    const formatInput = document.getElementById("formatInput");

    let processedImages = [];

    opacityInput.addEventListener("input", () => {
      opacityValue.textContent = opacityInput.value + "%";
    });

    sizeInput.addEventListener("input", () => {
      sizeValue.textContent = sizeInput.value + "%";
    });

    function loadImageFromFile(file) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = e => {
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = e.target.result;
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    function getExtension(format) {
      if (format === "image/png") return "png";
      if (format === "image/webp") return "webp";
      return "jpg";
    }

    async function createWatermarks() {
      const imageFiles = Array.from(imagesInput.files);
      const logoFile = logoInput.files[0];

      if (imageFiles.length === 0) {
        alert("الرجاء اختيار الصور أولاً");
        return;
      }

      if (!logoFile) {
        alert("الرجاء اختيار اللوغو أولاً");
        return;
      }

      resultsBox.innerHTML = "";
      processedImages = [];
      downloadZipBtn.style.display = "none";

      const opacity = Number(opacityInput.value) / 100;
      const logoSizePercent = Number(sizeInput.value) / 100;
      const outputFormat = formatInput.value;
      const extension = getExtension(outputFormat);

      statusBox.textContent = "جاري تحميل اللوغو...";
      const logoImage = await loadImageFromFile(logoFile);

      for (let i = 0; i < imageFiles.length; i++) {
        const file = imageFiles[i];

        statusBox.textContent = `جاري معالجة الصورة ${i + 1} من ${imageFiles.length}...`;

        try {
          const mainImage = await loadImageFromFile(file);

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = mainImage.width;
          canvas.height = mainImage.height;

          ctx.drawImage(mainImage, 0, 0, canvas.width, canvas.height);

          const logoWidth = canvas.width * logoSizePercent;
          const logoHeight = logoWidth * (logoImage.height / logoImage.width);

          const x = (canvas.width - logoWidth) / 2;
          const y = (canvas.height - logoHeight) / 2;

          ctx.globalAlpha = opacity;
          ctx.drawImage(logoImage, x, y, logoWidth, logoHeight);
          ctx.globalAlpha = 1;

          const quality = outputFormat === "image/jpeg" || outputFormat === "image/webp" ? 0.95 : undefined;
          const dataUrl = canvas.toDataURL(outputFormat, quality);

          const originalName = file.name.replace(/\.[^/.]+$/, "");
          const outputName = `${originalName}_watermarked.${extension}`;

          processedImages.push({
            name: outputName,
            dataUrl
          });

          addResultCard(dataUrl, outputName);

        } catch (error) {
          console.error(error);
          alert(`حدث خطأ أثناء معالجة الصورة: ${file.name}`);
        }
      }

      statusBox.textContent = `تم الانتهاء من معالجة ${processedImages.length} صورة بنجاح`;
      
      if (processedImages.length > 0) {
        downloadZipBtn.style.display = "block";
      }
    }

    function addResultCard(dataUrl, fileName) {
      const card = document.createElement("div");
      card.className = "result-card";

      const img = document.createElement("img");
      img.src = dataUrl;

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = fileName;
      link.textContent = "تحميل الصورة";

      const name = document.createElement("div");
      name.className = "small";
      name.textContent = fileName;

      card.appendChild(img);
      card.appendChild(link);
      card.appendChild(name);

      resultsBox.appendChild(card);
    }

    async function downloadZip() {
      if (processedImages.length === 0) {
        alert("لا توجد صور جاهزة للتحميل");
        return;
      }

      statusBox.textContent = "جاري إنشاء ملف ZIP...";

      const zip = new JSZip();
      const folder = zip.folder("watermarked-images");

      processedImages.forEach(item => {
        const base64Data = item.dataUrl.split(",")[1];
        folder.file(item.name, base64Data, { base64: true });
      });

      const zipBlob = await zip.generateAsync({ type: "blob" });

      const zipUrl = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = zipUrl;
      a.download = "watermarked-images.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(zipUrl);

      statusBox.textContent = "تم إنشاء وتحميل ملف ZIP بنجاح";
    }

    function clearResults() {
      resultsBox.innerHTML = "";
      processedImages = [];
      downloadZipBtn.style.display = "none";
      statusBox.textContent = "تم مسح النتائج";
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="container">
<h1>أداة إضافة العلامة المائية على الصور</h1>
<div className="box">
<label>اختر الصور</label>
<input accept="image/*" id="imagesInput" multiple="" type="file"/>
<div className="small">يمكنك اختيار 50 صورة أو أكثر دفعة واحدة.</div>
</div>
<div className="box">
<label>اختر اللوغو / العلامة المائية</label>
<input accept="image/*" id="logoInput" type="file"/>
<div className="small">يفضل أن يكون اللوغو بصيغة PNG بخلفية شفافة.</div>
</div>
<div className="settings">
<div className="setting-card">
<label>شفافية اللوغو: <span id="opacityValue">60%</span></label>
<input id="opacityInput" max="100" min="10" type="range" value="60"/>
</div>
<div className="setting-card">
<label>حجم اللوغو من عرض الصورة: <span id="sizeValue">30%</span></label>
<input id="sizeInput" max="80" min="5" type="range" value="30"/>
</div>
<div className="setting-card">
<label>صيغة الإخراج</label>
<select id="formatInput" style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid #ddd'}}>
<option value="image/jpeg">JPG</option>
<option value="image/png">PNG</option>
<option value="image/webp">WEBP</option>
</select>
</div>
</div>
<button className="create-btn" onclick="createWatermarks()">Create Watermarked Images</button>
<button className="download-all-btn" id="downloadZipBtn" onclick="downloadZip()">تحميل كل الصور ZIP</button>
<button className="clear-btn" onclick="clearResults()">مسح النتائج</button>
<div className="status" id="status">جاهز للعمل</div>
<div className="results" id="results"></div>
</div>




    </>
  );
}
