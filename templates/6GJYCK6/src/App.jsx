import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const IMGS = [
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
        ];

        class RollingGallery {
            constructor(options = {}) {
                this.autoplay = options.autoplay || true;
                this.pauseOnHover = options.pauseOnHover || true;
                this.images = options.images || IMGS;
                this.cylinder = document.getElementById('galleryCylinder');
                this.rotation = 0;
                this.isDragging = false;
                this.dragStart = 0;
                this.dragFactor = 0.05;
                this.isSmallScreen = window.innerWidth <= 640;
                this.init();
                this.setupEventListeners();
            }

            init() {
                this.updateDimensions();
                this.createGalleryFaces();
                if (this.autoplay) {
                    this.startAutoplay();
                }
            }

            updateDimensions() {
                this.cylinderHeight = this.isSmallScreen ? 1600 : 2000;
                this.faceCount = this.images.length;
                this.faceHeight = (this.cylinderHeight / this.faceCount) * 1.2;
                this.radius = this.cylinderHeight / (2 * Math.PI);
                this.cylinder.style.height = `${this.cylinderHeight}px`;
            }

            createGalleryFaces() {
                this.cylinder.innerHTML = '';
                this.images.forEach((url, i) => {
                    const face = document.createElement('div');
                    face.className = 'gallery-face group absolute flex h-fit items-center justify-center p-[8%] md:p-[6%]';
                    face.style.height = `${this.faceHeight}px`;
                    face.style.transform = `rotateX(${(360 / this.faceCount) * i}deg) translateZ(${this.radius}px)`;

                    // Glass effect frame wrapping the image
                    const glassFrame = document.createElement('div');
                    glassFrame.className = 'glass-frame flex items-center justify-center rounded-[32px] transition-transform duration-300 ease-out group-hover:scale-105 shadow-lg';
                    glassFrame.style.width = '600px';
                    glassFrame.style.height = '240px';
                    glassFrame.style.overflow = 'hidden';

                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = 'mountain gallery';
                    img.className = 'pointer-events-none h-full w-full rounded-[28px] object-cover';
                    img.draggable = false;

                    glassFrame.appendChild(img);
                    face.appendChild(glassFrame);
                    this.cylinder.appendChild(face);
                });
            }

            updateRotation() {
                this.cylinder.style.transform = `rotateX(${this.rotation}deg)`;
            }

            startAutoplay() {
                this.cylinder.classList.add('gallery-spinning');
            }

            stopAutoplay() {
                this.cylinder.classList.remove('gallery-spinning');
            }

            setupEventListeners() {
                this.cylinder.addEventListener('mousedown', this.handleMouseDown.bind(this));
                document.addEventListener('mousemove', this.handleMouseMove.bind(this));
                document.addEventListener('mouseup', this.handleMouseUp.bind(this));
                this.cylinder.addEventListener('touchstart', this.handleTouchStart.bind(this));
                document.addEventListener('touchmove', this.handleTouchMove.bind(this));
                document.addEventListener('touchend', this.handleTouchEnd.bind(this));
                if (this.pauseOnHover) {
                    this.cylinder.addEventListener('mouseenter', () => {
                        if (this.autoplay) this.stopAutoplay();
                    });
                    this.cylinder.addEventListener('mouseleave', () => {
                        if (this.autoplay && !this.isDragging) this.startAutoplay();
                    });
                }
                window.addEventListener('resize', () => {
                    this.isSmallScreen = window.innerWidth <= 640;
                    this.updateDimensions();
                    this.createGalleryFaces();
                });
            }

            handleMouseDown(e) {
                this.isDragging = true;
                this.dragStart = e.clientY;
                this.stopAutoplay();
                e.preventDefault();
            }

            handleMouseMove(e) {
                if (!this.isDragging) return;
                const deltaY = e.clientY - this.dragStart;
                this.rotation += deltaY * this.dragFactor;
                this.updateRotation();
                this.dragStart = e.clientY;
            }

            handleMouseUp() {
                if (!this.isDragging) return;
                this.isDragging = false;
                if (this.autoplay) {
                    setTimeout(() => this.startAutoplay(), 100);
                }
            }

            handleTouchStart(e) {
                this.isDragging = true;
                this.dragStart = e.touches[0].clientY;
                this.stopAutoplay();
                e.preventDefault();
            }

            handleTouchMove(e) {
                if (!this.isDragging) return;
                const deltaY = e.touches[0].clientY - this.dragStart;
                this.rotation += deltaY * this.dragFactor;
                this.updateRotation();
                this.dragStart = e.touches[0].clientY;
                e.preventDefault();
            }

            handleTouchEnd() {
                if (!this.isDragging) return;
                this.isDragging = false;
                if (this.autoplay) {
                    setTimeout(() => this.startAutoplay(), 100);
                }
            }
        }

        new RollingGallery({
            autoplay: true,
            pauseOnHover: true
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative flex items-center justify-center w-full h-screen min-h-screen">

<div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">

<div className="aurora-wave absolute inset-0">
<div className="aurora-layer absolute top-1/2 left-0 w-full h-32 opacity-60" style="background: linear-gradient(90deg, #3A29FF 0%, #FF94B4 50%, #FF3232 100%); 
                            filter: blur(20px); 
                            transform: translateY(-50%) rotate(-2deg);">
</div>
</div>

<div className="aurora-wave absolute inset-0">
<div className="aurora-layer absolute top-1/2 left-0 w-full h-24 opacity-50" style="background: linear-gradient(90deg, #FF3232 0%, #3A29FF 50%, #FF94B4 100%); 
                            filter: blur(25px); 
                            transform: translateY(-30px) rotate(1deg);">
</div>
</div>

<div className="aurora-wave absolute inset-0">
<div className="aurora-layer absolute top-1/2 left-0 w-full h-40 opacity-40" style="background: linear-gradient(90deg, #FF94B4 0%, #FF3232 50%, #3A29FF 100%); 
                            filter: blur(30px); 
                            transform: translateY(20px) rotate(-1deg);">
</div>
</div>

<div className="absolute top-1/3 left-0 w-full h-20 opacity-30 aurora-layer" style="background: radial-gradient(ellipse, #3A29FF 0%, transparent 70%); 
                        filter: blur(40px); 
                        animation-duration: 10s, 8s;">
</div>
<div className="absolute bottom-1/3 left-0 w-full h-16 opacity-25 aurora-layer" style="background: radial-gradient(ellipse, #FF94B4 0%, transparent 60%); 
                        filter: blur(35px); 
                        animation-duration: 14s, 9s; 
                        animation-delay: -3s, -2s;">
</div>
</div>

<div className="relative flex flex-col items-center justify-center w-full h-full z-10">

<div className="absolute top-0 left-0 w-full h-[120px] z-20 gradient-top"></div>

<div className="absolute bottom-0 left-0 w-full h-[120px] z-20 gradient-bottom"></div>

<div className="flex h-[600px] items-center justify-center gallery-container w-full">
<div className="gallery-cylinder flex min-w-[600px] items-center justify-center gallery-spinning" id="galleryCylinder" style={{height: '2400px', transform: 'rotateX(0.05deg)'}}></div>
</div>
</div>
</div>


    </>
  );
}
