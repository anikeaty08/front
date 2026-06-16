import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Lucide icons
    lucide.createIcons();

    // ParticlesJS
    particlesJS("particles-js", {
      particles: {
        number: { value: 28, density: { enable: true, value_area: 800 } },
        color: { value: "#a78bfa" },
        shape: { type: "circle" },
        opacity: { value: 0.09, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 140, color: "#7c3aed", opacity: 0.13, width: 1 },
        move: { enable: true, speed: 1.1, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false } },
        modes: { repulse: { distance: 82, duration: 0.3 } }
      },
      retina_detect: true
    });

    // Sequential fade in (stagger effect)
    document.querySelectorAll('.fade-in-up').forEach((el, idx) => {
      setTimeout(() => el.style.opacity = 1, 200 + idx * 120);
    });

    // Button click: imitate download and show spinner
    const btn = document.getElementById('download-btn');
    const spinnerContainer = document.getElementById('spinner-container');
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.innerHTML = '<span class="mr-2">Загрузка...</span><i class="lucide lucide-loader-2 animate-spin" style="width:22px;height:22px"></i>';
      lucide.createIcons();
      spinnerContainer.style.display = 'flex';
      // Simulating loader download
      setTimeout(() => {
        spinnerContainer.innerHTML = '<div class="text-green-400 flex items-center gap-2 font-semibold text-lg"><i class="lucide lucide-check-circle" style="width:24px;height:24px"></i>Лоадер скачан!</div>';
        lucide.createIcons();
        btn.innerHTML = '<span class="mr-2">Скачать снова</span><i class="lucide lucide-download" style="width:22px;height:22px"></i>';
        btn.disabled = false;
        // Actual file download (demo, replace link with real file)
        const a = document.createElement('a');
        a.href = 'https://example.com/loader.exe';
        a.download = 'loader.exe';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }, 2700);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none" id="particles-js"></div>
<main className="relative z-10 w-full max-w-md">
<div className="glass p-8 sm:p-10 w-full flex flex-col items-center gap-8 fade-in-up" style={{animationDelay: '0.15s'}}>
<h2 className="text-3xl tracking-tight font-semibold text-white fade-in-up" style={{animationDelay: '0.25s'}}>
        Скачать лоадер
      </h2>
<p className="text-base text-violet-100 font-normal text-center fade-in-up" style={{animationDelay: '0.35s'}}>
        Нажмите кнопку ниже, чтобы скачать лоадер.<br/>Загрузка начнётся автоматически.
      </p>
<button className="w-full py-3 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#a78bfa] via-[#8b5cf6] to-[#6d28d9] font-semibold text-lg tracking-tight text-white shadow-lg hover:from-[#c4b5fd] hover:to-[#7c3aed] hover:ring-2 hover:ring-violet-400/60 transition-all duration-150 outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 fade-in-up" id="download-btn" style={{animationDelay: '0.5s'}} type="button">
<span className="mr-2">Скачать лоадер</span>
<i className="lucide lucide-download" style={{width: '22px', height: '22px'}}></i>
</button>
<div className="flex flex-col items-center gap-2 fade-in-up" id="spinner-container" style={{animationDelay: '0.7s'}}>
<div className="loader" id="spinner"></div>
<span className="text-violet-200 text-sm font-medium mt-2">Готовим загрузку...</span>
</div>
</div>
<div className="w-full flex justify-center mt-8 fade-in-up" style={{animationDelay: '1s'}}>
<div className="text-xs text-violet-300/60 font-medium tracking-wide">
        Файл безопасен. Проверено антивирусом.
      </div>
</div>
</main>



    </>
  );
}
