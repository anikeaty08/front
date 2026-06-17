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



        document.addEventListener('DOMContentLoaded', () => {
            const fileInput = document.getElementById('fileInput');
            const dropzone = document.getElementById('dropzone');
            const uploadPrompt = document.getElementById('uploadPrompt');
            const previewContainer = document.getElementById('previewContainer');
            const previewImage = document.getElementById('previewImage');
            const fileNameDisplay = document.getElementById('fileName');
            const clearBtn = document.getElementById('clearBtn');
            
            const garmentBtns = document.querySelectorAll('.garment-btn');
            const selectionStatus = document.getElementById('selectionStatus');
            const createBtn = document.getElementById('createBtn');
            const btnText = document.getElementById('btnText');

            let state = {
                imageLoaded: false,
                selectedType: null
            };

            // Image Upload Logic
            fileInput.addEventListener('change', handleFile);
            
            function handleFile(e) {
                const file = e.target.files[0];
                if (file && file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        previewImage.src = event.target.result;
                        fileNameDisplay.textContent = file.name;
                        
                        // UI Transitions
                        uploadPrompt.classList.add('opacity-0');
                        setTimeout(() => {
                            uploadPrompt.classList.add('hidden');
                            previewContainer.classList.remove('hidden');
                            // Slight delay for smooth image fade-in
                            setTimeout(() => {
                                previewImage.classList.remove('opacity-0');
                            }, 50);
                            clearBtn.classList.remove('hidden');
                            dropzone.classList.remove('border-dashed', 'border-neutral-200');
                            dropzone.classList.add('border-solid', 'border-neutral-200');
                        }, 300);

                        state.imageLoaded = true;
                    };
                    reader.readAsDataURL(file);
                }
            }

            clearBtn.addEventListener('click', () => {
                fileInput.value = '';
                previewImage.classList.add('opacity-0');
                setTimeout(() => {
                    previewContainer.classList.add('hidden');
                    uploadPrompt.classList.remove('hidden');
                    setTimeout(() => uploadPrompt.classList.remove('opacity-0'), 10);
                    clearBtn.classList.add('hidden');
                    dropzone.classList.add('border-dashed', 'border-neutral-200');
                    dropzone.classList.remove('border-solid');
                }, 300);
                state.imageLoaded = false;
            });

            // Garment Selection Logic
            garmentBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active state from all
                    garmentBtns.forEach(b => b.classList.remove('selected'));
                    // Add to clicked
                    btn.classList.add('selected');
                    
                    state.selectedType = btn.dataset.type;
                    selectionStatus.textContent = state.selectedType;
                    selectionStatus.classList.add('text-black', 'font-medium');
                });
            });

            // Form Action Logic simulating AWS Workflow
            createBtn.addEventListener('click', () => {
                if (!state.imageLoaded) {
                    showError(dropzone, 'Please upload a design first');
                    return;
                }
                if (!state.selectedType) {
                    showError(document.querySelector('.grid'), 'Please select a canvas type');
                    return;
                }

                createBtn.disabled = true;
                createBtn.classList.replace('bg-white', 'bg-neutral-900');
                createBtn.classList.replace('text-black', 'text-white');

                // Simulate AWS Pipeline processing steps
                const awsSteps = [
                    { text: 'Uploading asset to Amazon S3...', delay: 0 },
                    { text: 'Processing via AWS Lambda...', delay: 1000 },
                    { text: 'Saving to Amazon DynamoDB...', delay: 2000 },
                    { text: 'Sending Amazon SNS alert...', delay: 3000 }
                ];

                awsSteps.forEach(step => {
                    setTimeout(() => {
                        btnText.innerHTML = `<iconify-icon icon="solar:refresh-circle-linear" width="18" class="animate-spin"></iconify-icon> ${step.text}`;
                    }, step.delay);
                });
                
                // Final Success State
                setTimeout(() => {
                    createBtn.classList.replace('bg-neutral-900', 'bg-black');
                    btnText.innerHTML = '<iconify-icon icon="solar:check-read-linear" width="18" class="text-green-400"></iconify-icon> Order Confirmed';
                    console.log("Logged metrics to Amazon CloudWatch.");
                    
                    // Reset after a few seconds
                    setTimeout(() => {
                        createBtn.disabled = false;
                        createBtn.classList.replace('bg-black', 'bg-white');
                        createBtn.classList.replace('text-white', 'text-black');
                        btnText.innerHTML = '<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon> Create Production Order';
                    }, 3500);
                }, 4000);
            });

            function showError(element, message) {
                element.classList.add('border-red-400', 'transition-colors', 'duration-300');
                setTimeout(() => {
                    element.classList.remove('border-red-400');
                }, 1000);
            }
        });
    
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
      

<nav className="border-b sticky top-0 backdrop-blur-md z-50 border-neutral-900 bg-black/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white text-black">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter">SnapPrint</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-white" href="#">Catalog</a>
<a className="transition-colors hover:text-white" href="#">How it works</a>
<a className="transition-colors hover:text-white" href="#">Gallery</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium transition-colors text-neutral-400 hover:text-white">Log in</button>
</div>
</div>
</nav>

<main className="flex-grow flex md:py-24 pt-12 pr-6 pb-12 pl-6 items-center justify-center w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-5xl mr-auto ml-auto gap-x-12 gap-y-12 items-start">

<div className="flex flex-col gap-x-8 gap-y-8">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-neutral-900 border-neutral-800 text-neutral-400">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        New Production Line Open
                    </div>
<h1 className="md:text-5xl leading-tight text-4xl font-semibold tracking-tight mb-4">
                        Bring your ideas<br/>to life, instantly.
                    </h1>
<p className="text-base text-neutral-500 max-w-md leading-relaxed">
                        Upload your artwork, pattern, or photo. Choose a high-quality garment, and we'll custom print and ship it directly to you.
                    </p>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold">1. Upload your design</h2>
<button className="hidden text-xs transition-colors flex items-center gap-1 text-neutral-600 hover:text-white" id="clearBtn">
<iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon> Clear
                        </button>
</div>
<div className="relative group border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer min-h-[280px] overflow-hidden border-neutral-800 hover:border-neutral-600 bg-neutral-950/50 hover:bg-neutral-950" id="dropzone">
<input accept="image/*" className="cursor-pointer opacity-0 w-full h-full z-20 absolute top-0 right-0 bottom-0 left-0" id="fileInput" type="file"/>

<div className="flex flex-col items-center z-10 transition-opacity duration-300" id="uploadPrompt">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform bg-black border-neutral-900">
<iconify-icon className="text-neutral-400" icon="solar:gallery-add-linear" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-100">Click to browse</p>
<p className="text-xs mt-1 text-neutral-600">or drag and drop your image here</p>
<div className="flex items-center gap-2 mt-4 text-xs text-neutral-700">
<span>PNG</span>•<span>JPG</span>•<span>SVG</span>
</div>
</div>

<div className="absolute inset-0 z-10 hidden p-2 bg-black" id="previewContainer">
<div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
<img className="w-full h-full object-contain opacity-0 transition-opacity duration-500" id="previewImage"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-white/20"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 backdrop-blur-sm px-3 py-1.5 rounded-lg border shadow-sm bg-black/90 border-black/20">
<iconify-icon className="text-green-400" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-medium truncate max-w-[120px] text-neutral-300" id="fileName">Image loaded</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-8 bg-neutral-950/30 border-neutral-900 border rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold">2. Choose the canvas</h2>
<span className="text-xs text-neutral-600" id="selectionStatus">None selected</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="garment-btn relative flex flex-col items-start p-4 rounded-xl border transition-all text-left group border-neutral-800 hover:border-neutral-700 bg-black" data-type="T-Shirt" type="button">
<iconify-icon className="mb-3 group-hover:text-neutral-700 transition-colors text-neutral-600" icon="solar:t-shirt-linear" width="24"></iconify-icon>
<span className="text-sm font-medium transition-colors text-neutral-400">T-Shirt</span>
</button>
<button className="garment-btn relative flex flex-col items-start p-4 rounded-xl border transition-all text-left group border-neutral-800 hover:border-neutral-700 bg-black" data-type="Shirt" type="button">
<iconify-icon className="mb-3 group-hover:text-neutral-700 transition-colors text-neutral-600" icon="solar:clothes-linear" width="24"></iconify-icon>
<span className="text-sm font-medium transition-colors text-neutral-400">Shirt</span>
</button>
<button className="garment-btn relative flex flex-col items-start p-4 rounded-xl border transition-all text-left group border-neutral-800 hover:border-neutral-700 bg-black" data-type="Jacket" type="button">
<iconify-icon className="mb-3 group-hover:text-neutral-700 transition-colors text-neutral-600" icon="solar:ghost-smile-linear" width="24"></iconify-icon>
<span className="text-sm font-medium transition-colors text-neutral-400">Jacket</span>
</button>
<button className="garment-btn relative flex flex-col items-start p-4 rounded-xl border transition-all text-left group border-neutral-800 hover:border-neutral-700 bg-black" data-type="Pants" type="button">
<iconify-icon className="mb-3 group-hover:text-neutral-700 transition-colors text-neutral-600" icon="solar:trousers-minimalistic-linear" width="24"></iconify-icon>
<span className="text-sm font-medium transition-colors text-neutral-400">Pants</span>
</button>
<button className="garment-btn relative flex flex-col items-start p-4 rounded-xl border transition-all text-left group border-neutral-800 hover:border-neutral-700 bg-black" data-type="Shoes" type="button">
<iconify-icon className="mb-3 group-hover:text-neutral-700 transition-colors text-neutral-600" icon="solar:sneaker-linear" width="24"></iconify-icon>
<span className="text-sm font-medium transition-colors text-neutral-400">Shoes</span>
</button>
<button className="garment-btn relative flex flex-col items-start p-4 rounded-xl border transition-all text-left group border-neutral-800 hover:border-neutral-700 bg-black" data-type="Accessories" type="button">
<iconify-icon className="mb-3 group-hover:text-neutral-700 transition-colors text-neutral-600" icon="solar:bag-3-linear" width="24"></iconify-icon>
<span className="text-sm font-medium transition-colors text-neutral-400">Accessories</span>
</button>
</div>
</div>
<hr className="border-neutral-900"/>

<div className="space-y-4">
<h2 className="text-sm font-semibold">3. Finalize</h2>
<div className="flex items-center justify-between p-4 rounded-xl border mb-4 bg-black border-neutral-800">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-neutral-500 bg-neutral-900">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium">Standard Shipping</p>
<p className="text-xs text-neutral-500">3-5 business days</p>
</div>
</div>
<span className="text-sm font-medium">Free</span>
</div>
<button className="w-full relative overflow-hidden h-14 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98] group disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black hover:bg-neutral-200" id="createBtn">
<span className="relative z-10 flex items-center gap-2" id="btnText">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                            Create Production Order
                        </span>

<div className="absolute inset-0 bg-gradient-to-r translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite] from-black/0 via-black/10 to-black/0"></div>
</button>
<p className="text-xs text-center text-neutral-600">Securely processed via AWS infrastructure.</p>
</div>
</div>
</div>
</main>

<section className="border-t border-neutral-900 bg-neutral-950/50 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="flex flex-col gap-6">
<div>
<h3 className="text-sm font-semibold text-neutral-100 tracking-tight">Enterprise Infrastructure</h3>
<p className="text-xs text-neutral-500 max-w-2xl leading-relaxed mt-2">
                        SnapPrint is built for scale and reliability. The frontend is delivered via Amazon CloudFront. API requests are routed through Amazon EC2 and processed by AWS Lambda. Assets are stored securely in Amazon S3, and orders are persisted in Amazon DynamoDB. System health is monitored by Amazon CloudWatch, with real-time notifications handled by Amazon SNS.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:cloud-storage-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Amazon S3</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:bolt-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">AWS Lambda</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:database-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Amazon DynamoDB</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:global-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Amazon CloudFront</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:bell-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Amazon SNS</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:chart-square-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Amazon CloudWatch</span>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-800 bg-black">
<iconify-icon className="text-neutral-400" icon="solar:server-minimalistic-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-300">Amazon EC2</span>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t py-8 border-neutral-900 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-sm font-semibold tracking-tighter text-neutral-600">SnapPrint © 2024</span>
<div className="flex gap-6 text-xs font-medium text-neutral-600">
<a className="transition-colors hover:text-neutral-100" href="#">Privacy</a>
<a className="transition-colors hover:text-neutral-100" href="#">Terms</a>
<a className="transition-colors hover:text-neutral-100" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
