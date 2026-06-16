export default function GridOverlay() {
  return (
    <>
      {/* Global Framed Grid Lines */}
      <div className="fixed inset-0 pointer-events-none flex justify-center z-50 opacity-20 mix-blend-overlay">
        <div className="w-full max-w-7xl flex justify-between h-full px-4 md:px-8">
          <div className="w-px h-full bg-white relative gs-line-anim" style={{ animationDelay: '0s' }}>
            <div className="absolute top-1/4 left-[-2px] w-1 h-1 bg-white opacity-50"></div>
          </div>
          <div className="w-px h-full bg-white hidden md:block gs-line-anim" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-px h-full bg-white hidden lg:block gs-line-anim" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-px h-full bg-white hidden lg:block gs-line-anim" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-px h-full bg-white relative gs-line-anim" style={{ animationDelay: '0.4s' }}>
            <div className="absolute bottom-1/4 right-[-2px] w-1 h-1 bg-white opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Dither / Noise Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]" 
        style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')` }}
      ></div>
    </>
  );
}