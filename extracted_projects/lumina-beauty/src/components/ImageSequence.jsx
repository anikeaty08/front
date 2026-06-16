import React, { useEffect, useRef, useState } from 'react';

export default function ImageSequence({ urlStart, urlEnd, totalFrames, floatingZeros, className }) {
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);

  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    const currentFrame = (i) => `${urlStart}${i.toString().padStart(floatingZeros, '0')}${urlEnd}`;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          imagesRef.current = images;
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }
  }, [urlStart, urlEnd, totalFrames, floatingZeros]);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let frame = 0;
    let animationId;
    let lastTime = 0;
    const fps = 15;
    const interval = 1000 / fps;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawImageContain = (img) => {
      if (!img || !img.complete) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const scale = Math.min(w / img.width, h / img.height);
      const nw = img.width * scale;
      const nh = img.height * scale;
      const dx = (w - nw) / 2;
      const dy = (h - nh) / 2;
      ctx.drawImage(img, dx, dy, nw, nh);
    };

    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const delta = timestamp - lastTime;

      if (delta >= interval) {
        drawImageContain(imagesRef.current[frame]);
        frame = (frame + 1) % totalFrames;
        lastTime = timestamp;
      }
      animationId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        animationId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationId);
      }
    });

    observer.observe(canvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [imagesLoaded, totalFrames]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-contain mix-blend-multiply opacity-90" />
    </div>
  );
}