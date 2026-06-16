import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const colorWheel = document.getElementById('colorWheel');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const selectedColor = document.getElementById('selectedColor');
    const colorCode = document.getElementById('colorCode');

    function drawWheel() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = colorWheel.style.background;
      ctx.beginPath();
      ctx.arc(100, 100, 100, 0, 2 * Math.PI);
      ctx.fill();
    }

    drawWheel();

    colorWheel.addEventListener('click', function (e) {
      const rect = colorWheel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const rgbColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
      const hexColor = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1).toUpperCase()}`;

      if (pixel[3] !== 0) { // Check for transparent pixels
        selectedColor.style.backgroundColor = rgbColor;
        colorCode.textContent = hexColor;
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-white shadow-lg rounded-3xl w-80 h-[42rem] relative overflow-hidden">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-black w-32 h-4 mt-3 rounded-b-lg"></div>
<div className="p-4 pt-8">
<div className="flex flex-col items-center space-y-4">
<h1 className="text-xl font-bold text-gray-800 mt-14">Color Picker</h1>
<div className="mt-6" id="colorWheel"></div>
<canvas className="hidden" height="200" id="canvas" width="200"></canvas>
<div className="mt-6 p-4 w-64 bg-gray-100 rounded-lg shadow-inner text-center">
<span className="text-lg font-medium text-gray-500">Selected Color:</span>
<div className="mt-2 w-24 h-24 rounded-full border-2 border-gray-300" id="selectedColor"></div>
</div>
<div className="mt-4 text-gray-600" id="colorCode">
<span className="text-lg font-semibold">#FFFFFF</span>
</div>
</div>
</div>
</div>


    </>
  );
}
