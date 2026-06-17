import { memo, useEffect, useMemo, useRef, useState, Fragment } from "react";

const propertyImages = {
  mountainPool:
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/19a95dae-4e31-4252-8c35-55ba0d2d41d2/1600w.png",
  cliffsideOcean:
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/ab89766c-e0d3-4e64-b521-65e9a561110c/1600w.jpg",
  lakeMountain:
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7c658f1b-bdaf-4597-9b54-47cb56a04f03/1600w.png",
  desertGlass:
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/22ad4b16-b840-456a-8ec2-992ebe6ea226/1600w.jpg",
  londonTownhouse:
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80",
  tokyoApartment:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=80"
};

const categories = [
  "New Listings",
  "Villas",
  "Penthouses",
  "Estates",
  "Townhouses",
  "Apartments",
  "Waterfront",
  "Off-Market",
  "Commercial",
  "Land"
];

const products = [
  {
    id: 1,
    name: "Beverly Hills Estate",
    category: "Estates",
    price: "8.5M",
    image: propertyImages.mountainPool,
    tag: "Pool & Spa"
  },
  {
    id: 2,
    name: "Miami Penthouse",
    category: "Penthouses",
    price: "4.2M",
    image: propertyImages.cliffsideOcean,
    tag: "Ocean View"
  },
  {
    id: 3,
    name: "Aspen Ski Villa",
    category: "Villas",
    price: "6.7M",
    image: propertyImages.lakeMountain,
    tag: "Mountain Retreat"
  },
  {
    id: 4,
    name: "Malibu Waterfront",
    category: "Waterfront",
    price: "12.9M",
    image: propertyImages.desertGlass,
    tag: "Private Beach"
  },
  {
    id: 5,
    name: "London Townhouse",
    category: "Townhouses",
    price: "5.1M",
    image: propertyImages.londonTownhouse,
    tag: "Historic Charm"
  },
  {
    id: 6,
    name: "Tokyo Apartment",
    category: "Apartments",
    price: "2.8M",
    image: propertyImages.tokyoApartment,
    tag: "City Center"
  }
];

const navItems = ["Exclusive", "New Listings", "Services", "Showcase", "Agents"];

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

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
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  const [activeCategory, setActiveCategory] = useState("New Listings");
  const [query, setQuery] = useState("");
  const [portfolio, setPortfolio] = useLocalStorage("vista-portfolio", [
    { id: 1, qty: 1 },
    { id: 2, qty: 1 }
  ]);
  const [wishlist, setWishlist] = useLocalStorage("vista-wishlist", []);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === "New Listings" || product.category === activeCategory;
      const searchMatch = product.name.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query]);

  const portfolioCount = portfolio.reduce((sum, item) => sum + item.qty, 0);

  const addToPortfolio = (product) => {
    setPortfolio((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...current, { id: product.id, qty: 1 }];
    });
    setToast(`${product.name} saved to portfolio`);
  };

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]
    );
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const submitNewsletter = (event) => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setEmail("");
    setToast("Welcome to the VISTA property letter");
  };

  return (
    <main className="min-h-screen bg-[#14392a] text-[#173d2d]">
      <div className="mx-auto max-w-[1500px] bg-[#f7efdf] shadow-2xl">
        <Header portfolioCount={portfolioCount} onNav={scrollTo} />
        <Hero onGallery={() => scrollTo("products")} />
        <Featured onAdd={addToPortfolio} />
        <Products
          loading={loading}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          visibleProducts={visibleProducts}
          wishlist={wishlist}
          toggleWishlist={toggleWishlist}
          onAdd={addToPortfolio}
        />
        <VillageGreenResidences />
        <Pricing />
        <InteriorPromo />
        <Testimonials />
        <InteractiveTestimonials />
        <Footer
          email={email}
          setEmail={setEmail}
          error={emailError}
          onSubmit={submitNewsletter}
        />
      </div>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#173d2d] px-5 py-3 text-sm font-medium text-[#fff8e8] shadow-2xl"
        >
          <iconify-icon icon="solar:check-circle-linear" class="text-xl text-[#d99a31]"></iconify-icon>
          {toast}
        </div>
      )}
    </main>
  );
}

function Header({ portfolioCount, onNav }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4d6bd] bg-[#f7efdf]/90 backdrop-blur-xl">
      <div className="grid gap-5 px-5 py-4 items-center md:grid-cols-[1fr_auto_1fr] md:px-12">
        <button
          onClick={() => onNav("hero")}
          className="flex w-fit items-center gap-3 text-left"
          aria-label="VISTA home"
        >
          <span>
            <span className="block font-display text-2xl font-semibold tracking-tight">VISTA</span>
            <span className="block text-xs font-medium uppercase tracking-[0.22rem] text-[#6d7d65]">
              Luxury Real Estate
            </span>
          </span>
        </button>

        <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium uppercase tracking-[0.18rem] text-[#50624e]">
          {navItems.map((item) => {
            let targetId = "featured";
            if (item === "New Listings") targetId = "products";
            if (item === "Services") targetId = "pricing";

            return (
              <button
                key={item}
                onClick={() => onNav(targetId)}
                className="group relative py-2 transition hover:text-[#173d2d]"
              >
                {item === "New Listings" && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#e4772f] px-2 py-0.5 text-[0.62rem] text-white">
                    New
                  </span>
                )}
                {item}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-[#d99a31] transition group-hover:scale-x-100"></span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button className="relative grid h-11 w-11 place-items-center rounded-full bg-[#173d2d] text-[#fff8e8] transition hover:scale-105" aria-label="Saved portfolio">
            <iconify-icon icon="solar:bookmark-linear" class="text-xl"></iconify-icon>
            <span className="absolute -right-1 -top-1 rounded-full bg-[#e4772f] px-1.5 text-xs font-medium">
              {portfolioCount}
            </span>
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-[#d8c9ae] transition hover:bg-[#fff8e8]">
            <iconify-icon icon="solar:heart-linear" class="text-xl"></iconify-icon>
          </button>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-[#d8c9ae] transition hover:bg-[#fff8e8]">
            <iconify-icon icon="solar:user-rounded-linear" class="text-xl"></iconify-icon>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onGallery }) {
  return (
    <section id="hero" className="relative grid overflow-hidden px-5 pb-16 pt-14 md:grid-cols-[0.9fr_1.1fr] md:px-12 lg:px-20">
      <div className="relative z-10 flex flex-col justify-center">
        <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25rem] text-[#8a6a2d]">
          <span className="h-px w-12 bg-[#d99a31]"></span>
          Premium real estate properties
        </p>
        <h1 className="font-display text-6xl font-semibold leading-none tracking-tight text-[#173d2d] md:text-7xl lg:text-8xl">
          <span className="selection-box relative inline-block px-2">Discover</span>
          <br />
          Your Dream
          <br />
          Property
          <br />
          Today
        </h1>
        <p className="mt-7 max-w-md text-base leading-8 text-[#65735e]">
          Exclusive listings and architectural masterpieces located in the most sought-after neighborhoods, designed for modern living.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <button
            onClick={onGallery}
            className="rounded-full bg-[#d99a31] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18rem] text-[#173d2d] shadow-lg shadow-[#d99a31]/20 transition hover:-translate-y-1 hover:bg-[#e8ae47]"
          >
            View Listings
          </button>
          <div className="flex items-center gap-3 rounded-full bg-[#fff8e8] px-4 py-3 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80"
              alt="Happy VISTA client"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium">Found my dream home!</p>
              <p className="text-xs text-[#7a8772]">Verified homeowner</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14 min-h-[34rem] md:mt-0">
        <div className="blob absolute right-2 top-10 h-[28rem] w-[34rem] max-w-full bg-[#173d2d]"></div>

        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bef8b09f-b10a-435c-89f9-a87254467ed7_1600w.png"
          alt="3D Isometric Mediterranean Villa with Palm Trees"
          className="absolute bottom-10 right-0 z-10 h-[32rem] w-full max-w-3xl rounded-[3rem] object-cover object-center "
        />
      </div>
    </section>
  );
}

function Featured({ onAdd }) {
  const waterfront = products[3];
  const penthouse = products[1];

  return (
    <section id="featured" className="px-5 py-16 md:px-12 lg:px-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-5xl font-semibold tracking-tight text-[#173d2d] md:text-6xl">
          Featured Properties
        </h2>
        <p className="max-w-sm text-sm leading-7 text-[#6c7864]">
          Exclusive estates selected by our top brokers for unparalleled luxury and comfort.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#173d2d] p-6 text-[#fff8e8] shadow-2xl md:p-12">
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#295b42]"></div>
        <div className="grid gap-10 md:grid-cols-2">
          <FeatureItem
            title="Malibu Waterfront"
            subtitle="A stunning architectural masterpiece on the cliffs of Malibu with panoramic ocean views and private beach access."
            image={waterfront.image}
            price="$12.9M"
            product={waterfront}
            onAdd={onAdd}
          />
          <FeatureItem
            title="Miami Penthouse"
            subtitle="A double-height penthouse with sweeping views of South Beach, featuring a private rooftop pool and premium amenities."
            image={penthouse.image}
            price="$4.2M"
            product={penthouse}
            onAdd={onAdd}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, subtitle, image, price, product, onAdd }) {
  return (
    <article className="relative grid items-center gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-72 w-full rounded-[1.7rem] object-cover shadow-2xl transition duration-500 hover:scale-[1.03]"
        />
        <div className="absolute right-4 top-4 rounded-full border border-white bg-[#e4772f] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16rem] text-white shadow-lg">
          {price}
        </div>
      </div>
      <div>
        <h3 className="font-display text-4xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#c9d2bd]">{subtitle}</p>
        <button className="mt-5 border-b border-[#d99a31] pb-1 text-xs font-medium uppercase tracking-[0.18rem] text-[#d99a31]">
          View Gallery
        </button>
        <button
          onClick={() => onAdd(product)}
          className="mt-7 flex items-center gap-3 rounded-full bg-[#d99a31] px-6 py-4 text-xs font-semibold uppercase tracking-[0.16rem] text-[#173d2d] transition hover:-translate-y-1 hover:bg-[#efb34d]"
        >
          Save Listing
          <iconify-icon icon="solar:bookmark-add-linear" class="text-lg"></iconify-icon>
        </button>
      </div>
    </article>
  );
}

function Products({
  loading,
  activeCategory,
  setActiveCategory,
  visibleProducts,
  wishlist,
  toggleWishlist,
  onAdd
}) {
  return (
    <section id="products" className="px-5 py-16 md:px-12 lg:px-20">
      <h2 className="mb-10 font-display text-5xl font-semibold tracking-tight text-[#173d2d] md:text-6xl">
        Exclusive Properties
      </h2>

      <div className="grid gap-10 lg:grid-cols-[14rem_1fr]">
        <aside className="flex flex-col items-start">
          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex items-center gap-4 text-left text-sm font-medium transition ${
                  activeCategory === category ? "text-[#173d2d]" : "text-[#77836f] hover:text-[#173d2d]"
                }`}
              >
                <span
                  className={`h-px transition-all ${
                    activeCategory === category ? "w-12 bg-[#d99a31]" : "w-5 bg-[#d8c6a5] group-hover:w-8"
                  }`}
                ></span>
                {category}
              </button>
            ))}
          </div>
          <button className="mt-10 rounded-full bg-[#d99a31] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18rem] transition hover:-translate-y-1 hover:bg-[#e8ae47]">
            View All
          </button>
        </aside>

        <div>
          {loading ? (
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-96 animate-pulse rounded-[2rem] bg-[#eadcc4]"></div>
              ))}
            </div>
          ) : visibleProducts.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  wished={wishlist.includes(product.id)}
                  onWish={() => toggleWishlist(product.id)}
                  onAdd={() => onAdd(product)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-[#d7c5a4] p-10 text-center">
              <iconify-icon icon="solar:home-angle-2-linear" class="text-5xl text-[#d99a31]"></iconify-icon>
              <p className="mt-4 font-display text-3xl font-semibold tracking-tight">No properties found</p>
              <p className="mt-2 text-sm text-[#74806c]">Try another category or search term.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const ProductCard = memo(function ProductCard({ product, wished, onWish, onAdd }) {
  return (
    <article className="group relative overflow-hidden rounded-[2.2rem] border border-[#e1d0b3] bg-[#fff8e8] p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <button
        onClick={onWish}
        className="absolute right-8 top-8 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#f7efdf]/80 shadow backdrop-blur transition hover:scale-110"
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
      >
        <iconify-icon
          icon={wished ? "solar:heart-bold" : "solar:heart-linear"}
          class={`text-xl ${wished ? "text-[#e4772f]" : "text-[#173d2d]"}`}
        ></iconify-icon>
      </button>

      <div className="relative grid h-64 place-items-center overflow-hidden rounded-[1.7rem] bg-[#f2dfbd]/30">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4 rounded-full border border-[#173d2d] bg-[#f2cb45] px-4 py-2 font-display text-lg font-semibold text-[#173d2d] shadow-sm">
          ${product.price}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-[0.18rem] text-[#8b795d]">{product.tag}</p>
        <h3 className="mt-1 font-display text-3xl font-semibold tracking-tight">{product.name}</h3>
      </div>

      <button
        onClick={onAdd}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-full border border-[#173d2d] px-5 py-4 text-xs font-semibold uppercase tracking-[0.16rem] transition hover:bg-[#173d2d] hover:text-[#fff8e8]"
      >
        Save Listing
        <iconify-icon icon="solar:bookmark-square-linear" class="text-lg"></iconify-icon>
      </button>
    </article>
  );
});

function AuraWebGL() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    const vertexSource = "attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}";
    const fragmentSource = [
      "precision mediump float;",
      "uniform vec2 r;",
      "uniform float t;",
      "uniform vec2 m;",
      "float n(vec2 p){return fract(sin(dot(p,vec2(41.17,289.31)))*43758.5453);}",
      "void main(){",
      "vec2 uv=gl_FragCoord.xy/r.xy;",
      "vec2 p=uv-0.5;",
      "p.x*=r.x/r.y;",
      "float d=length(p-m*0.06);",
      "float wave=sin((p.x*3.4+p.y*2.2+t*0.22)*6.2831)*0.5+0.5;",
      "float glow=smoothstep(0.72,0.08,d)*0.22;",
      "float grain=n(uv*vec2(420.0,240.0)+t)*0.08;",
      "vec3 col=vec3(0.72,0.92,0.86)*glow + vec3(0.92,0.98,1.0)*wave*0.035 + grain;",
      "gl_FragColor=vec4(col, glow+0.05);",
      "}"
    ].join("");

    const shader = (type, source) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, source);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram();
    const vs = shader(gl.VERTEX_SHADER, vertexSource);
    const fs = shader(gl.FRAGMENT_SHADER, fragmentSource);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(program, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, "r");
    const timeLoc = gl.getUniformLocation(program, "t");
    const mouseLoc = gl.getUniformLocation(program, "m");
    const mouse = { x: 0, y: 0 };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      mouse.y = -((e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    };

    const parent = canvas.parentElement;
    parent.addEventListener("pointermove", onPointerMove, { passive: true });

    const resize = () => {
      const parentRect = parent.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(parentRect.width * ratio);
      const height = Math.floor(parentRect.height * ratio);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    let animationFrame;
    const draw = (now) => {
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, now * 0.001);
      gl.uniform2f(mouseLoc, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      parent.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-30 mix-blend-soft-light"
    />
  );
}

function FlowingItem({ title, description, bgImage, link, isLight }) {
  const [hoverState, setHoverState] = useState({ isHovered: false, edge: "bottom" });
  const itemRef = useRef(null);

  const getEdge = (e) => {
    if (!itemRef.current) return "bottom";
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const topEdgeDist = Math.pow(x - rect.width / 2, 2) + Math.pow(y, 2);
    const bottomEdgeDist = Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const onMouseEnter = (e) => {
    setHoverState({ isHovered: true, edge: getEdge(e) });
  };

  const onMouseLeave = (e) => {
    setHoverState({ isHovered: false, edge: getEdge(e) });
  };

  let containerTransform = "translateY(101%)";
  let innerTransform = "translateY(-101%)";

  if (hoverState.isHovered) {
    containerTransform = "translateY(0%)";
    innerTransform = "translateY(0%)";
  } else {
    containerTransform = hoverState.edge === "top" ? "translateY(-101%)" : "translateY(101%)";
    innerTransform = hoverState.edge === "top" ? "translateY(101%)" : "translateY(-101%)";
  }

  return (
    <div
      ref={itemRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group relative flex-1 overflow-hidden border-t border-[#18342f]/10 first:border-none ${
        isLight ? "bg-[#fff8e8]" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-[4vw] text-center transition-opacity duration-500 ${
          hoverState.isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-[3.5vh] font-extralight uppercase tracking-tight text-[#12312d] md:text-[4.5vh]">
          {title}
        </h2>
        <p className="mt-[1vh] max-w-[40rem] text-sm font-light text-[#102a27] md:text-base">{description}</p>
      </div>
      <a href={link} className="absolute inset-0 z-30 cursor-pointer" aria-label={`Explore ${title}`}></a>

      <div
        className="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-[#12312d] transition-transform duration-[600ms] ease-out"
        style={{transform: containerTransform}}
      >
        <div
          className="flex h-full w-fit transition-transform duration-[600ms] ease-out"
          style={{transform: innerTransform}}
        >
          <div
            className="animate-village-marquee flex shrink-0 items-center text-[#fff8e8]"
            style={{animationDuration: "12s"}}
          >
            {[...Array(8)].map((_, i) => (
              <Fragment key={i}>
                <span className="px-[2vw] text-[4vh] font-light leading-none tracking-tight uppercase whitespace-nowrap">
                  {title}
                </span>
                <div
                  className="mx-[1vw] my-[2vh] h-[6vh] w-[40vw] rounded-full bg-cover bg-center md:w-[16rem]"
                  style={{backgroundImage: `url('${bgImage}')`}}
                ></div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VillageGreenResidences() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll(".village-reveal");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#fff8e8] font-sans text-[#102a27]">
      <AuraWebGL />

      <section
        aria-label="Residential options"
        className="relative h-[85vh] w-full overflow-hidden bg-[#fff8e8] md:h-screen"
      >
        <nav className="relative z-10 m-0 flex h-full w-full flex-col p-0">
          <FlowingItem
            title="Botanical parcels"
            description="Secluded homesites woven into the western greenery."
            bgImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/005600e5-f6ab-4e59-bc86-eaeb02797dfa_1600w.jpg"
            link="#availability"
          />
          <FlowingItem
            title="Terrace residences"
            description="Move-in ready family homes featuring sunlit living spaces."
            bgImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg"
            link="#availability"
          />
          <FlowingItem
            title="Canopy apartments"
            description="Debuting in 2027 — tranquil rentals adjacent to the transit hub."
            bgImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f78131e-65e9-49b2-aa1f-ccc33e28df9f_1600w.webp"
            link="#contact"
            isLight
          />
          <FlowingItem
            title="Village lofts"
            description="Debuting in 2028 — elegant suites overlooking the central green."
            bgImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb6415fd-bf4d-4ccf-8e9d-7ab445e99207_1600w.jpg"
            link="#contact"
          />
        </nav>
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-30"
          style={{backgroundImage: "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.7), transparent 24%), radial-gradient(circle at 72% 44%, rgba(255,255,255,0.28), transparent 18%)"}}
        ></div>
      </section>

      <section id="availability" className="relative z-10 bg-[#f6efe1] px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:items-end">
          <div className="village-reveal translate-y-9 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]">
            <p className="text-xs font-light uppercase tracking-[0.32em] text-[#66746f]">Current release</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-extralight tracking-tight text-[#102a27] sm:text-5xl lg:text-6xl">
              A quiet district arranged around walkable living.
            </h2>
          </div>
          <div className="village-reveal grid gap-4 translate-y-9 opacity-0 transition-all delay-100 duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] sm:grid-cols-3">
            <div
              className="rounded-3xl border border-[#102a27]/10 bg-white/70 p-6 shadow-sm"
              style={{backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, rgba(16,42,39,0.18), rgba(255,255,255,0.24))", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box"}}
            >
              <p className="text-4xl font-extralight tracking-tight text-[#102a27]">46</p>
              <p className="mt-3 text-sm font-light leading-6 text-[#52605c]">
                Homesites planned across the first garden phase.
              </p>
            </div>
            <div
              className="rounded-3xl border border-[#102a27]/10 bg-white/70 p-6 shadow-sm"
              style={{backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, rgba(16,42,39,0.18), rgba(255,255,255,0.24))", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box"}}
            >
              <p className="text-4xl font-extralight tracking-tight text-[#102a27]">14</p>
              <p className="mt-3 text-sm font-light leading-6 text-[#52605c]">
                Minutes from station platform to central interchange.
              </p>
            </div>
            <div
              className="rounded-3xl border border-[#102a27]/10 bg-white/70 p-6 shadow-sm"
              style={{backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, rgba(16,42,39,0.18), rgba(255,255,255,0.24))", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box"}}
            >
              <p className="text-4xl font-extralight tracking-tight text-[#102a27]">9</p>
              <p className="mt-3 text-sm font-light leading-6 text-[#52605c]">
                Pocket parks linked by shaded pedestrian lanes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 overflow-hidden bg-[#102a27] px-6 py-20 text-white sm:px-10 lg:px-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}
        ></div>
        <div className="absolute inset-0 bg-[#102a27]/80"></div>
        <div className="village-reveal relative mx-auto flex max-w-7xl flex-col gap-8 translate-y-9 opacity-0 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-light uppercase tracking-[0.32em] text-white/60">Private appointments</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-extralight tracking-tight sm:text-5xl lg:text-6xl">
              Request the upcoming private release portfolio.
            </h2>
          </div>
          <a
            href="mailto:hello@villagegreen.example"
            className="group inline-flex w-fit items-start text-xs font-light uppercase tracking-[0.32em] text-white"
          >
            <span className="relative flex min-w-[18rem] flex-col sm:min-w-[24rem]">
              <span className="block h-px w-full bg-white transition-all duration-500 group-hover:w-[108%]"></span>
              <span className="flex items-center gap-3 border-l border-white pb-1 pl-8 pt-4">
                Request details
                <iconify-icon
                  icon="solar:arrow-right-up-linear"
                  class="text-sm transition-transform duration-300 group-hover:translate-x-1"
                ></iconify-icon>
              </span>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Essential",
      price: "199",
      period: "/mo",
      description: "Perfect for seamless property management and peace of mind.",
      features: ["Monthly inspections", "Standard maintenance", "Tenant screening", "Access to network"],
      highlighted: false
    },
    {
      name: "Premium",
      price: "499",
      period: "/mo",
      description: "Elevated care for your investments with priority support.",
      features: ["Bi-weekly inspections", "Priority maintenance", "24/7 Support line", "Financial reporting"],
      highlighted: true
    },
    {
      name: "Atelier",
      price: "999",
      period: "/mo",
      description: "Full-service management with a dedicated 24/7 concierge.",
      features: ["Dedicated manager", "White-glove concierge", "Custom landscaping", "Annual redesigns"],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="px-5 py-16 md:px-12 lg:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-5xl font-semibold tracking-tight text-[#173d2d] md:text-6xl">
          VISTA Management
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6c7864]">
          Experience our premium property management with flexible plans. Upgrade your services or customize care for your real estate investments.
        </p>
      </div>

      <div className="grid items-center gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-[2.5rem] p-8 shadow-xl transition duration-300 hover:-translate-y-2 ${
              plan.highlighted
                ? "z-10 scale-105 border-none bg-[#173d2d] py-12 text-[#fff8e8]"
                : "border border-[#e1d0b3] bg-[#fff8e8] text-[#173d2d]"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#d99a31] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18rem] text-[#173d2d] shadow-lg">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-3xl font-semibold tracking-tight">{plan.name}</h3>
            <p className={`mt-3 text-sm leading-6 ${plan.highlighted ? "text-[#c9d2bd]" : "text-[#7a866f]"}`}>
              {plan.description}
            </p>
            <div className="my-8 flex items-baseline gap-1">
              <span className="font-display text-5xl font-semibold tracking-tight">${plan.price}</span>
              <span className={`text-sm font-medium ${plan.highlighted ? "text-[#c9d2bd]" : "text-[#7a866f]"}`}>
                {plan.period}
              </span>
            </div>

            <ul className="mb-8 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                  <iconify-icon
                    icon="solar:check-circle-linear"
                    class={`text-xl ${plan.highlighted ? "text-[#d99a31]" : "text-[#173d2d]"}`}
                  ></iconify-icon>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-full py-4 text-xs font-semibold uppercase tracking-[0.18rem] transition hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-[#d99a31] text-[#173d2d] hover:bg-[#e8ae47]"
                  : "border border-[#173d2d] text-[#173d2d] hover:bg-[#173d2d] hover:text-[#fff8e8]"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function InteriorPromo() {
  const images = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/385a19bf-c28d-4ce5-a5d7-65107ddb7238_800w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7880ef07-dc02-494a-9ed6-22dba2fe705f_800w.webp",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  ];

  return (
    <section className="px-5 py-16 md:px-12 lg:px-20">
      <div className="relative overflow-hidden rounded-[2.7rem] bg-[#173d2d] p-6 text-[#fff8e8] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Curated property collage"
                className={`h-48 w-full rounded-[1.5rem] object-cover shadow-xl ${
                  index === 1 ? "mt-10" : index === 2 ? "-mt-6" : ""
                }`}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25rem] text-[#d99a31]">Architectural Design</p>
            <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Masterpieces of Modern Architecture.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#c9d2bd]">
              Our network of architects and designers pairs stunning proportions, premium textures, and natural elements to create homes that feel personal and deeply luxurious.
            </p>
            <button className="mt-8 w-fit rounded-full bg-[#d99a31] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18rem] text-[#173d2d] transition hover:-translate-y-1 hover:bg-[#efb34d]">
              View Portfolio
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=800&q=80"
          alt="Large potted plant"
          className="absolute -bottom-14 -right-10 hidden h-80 w-56 rounded-t-full object-cover opacity-80 shadow-2xl lg:block"
        />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-5 py-16 text-center md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-display text-8xl font-semibold leading-none text-[#d99a31]">“</p>
        <h2 className="mx-auto max-w-3xl font-display text-5xl font-semibold tracking-tight text-[#173d2d] md:text-6xl">
          Rated by Clients on Our Services
        </h2>

        <div className="mt-10 flex items-center justify-center -space-x-4">
          {[
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&q=80",
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&q=80"
          ].map((avatar, index) => (
            <img
              key={avatar}
              src={avatar}
              alt="VISTA reviewer"
              className={`rounded-full border-4 border-[#f7efdf] object-cover shadow-lg ${
                index === 1 ? "h-24 w-24" : "h-16 w-16"
              }`}
            />
          ))}
        </div>

        <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">Lincoln George</h3>
        <p className="mt-1 text-sm text-[#74806c]">Real Estate Investor</p>
        <div className="mt-4 flex justify-center gap-1 text-[#e4772f]">
          {[1, 2, 3, 4, 5].map((star) => (
            <iconify-icon key={star} icon="solar:star-bold" class="text-xl"></iconify-icon>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5f6f59]">
          “VISTA brings a calm confidence to real estate. The properties are stunningly presented, correctly priced, and the team makes the entire buying process effortless.”
        </p>
      </div>
    </section>
  );
}

function InteractiveTestimonials() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const particles = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.5 + 0.1,
      offset: Math.random() * Math.PI * 2
    }));

    const render = () => {
      time += 0.015;
      const width = (canvas.width = canvas.parentElement.offsetWidth);
      const height = (canvas.height = canvas.parentElement.offsetHeight);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#d99a31";

      particles.forEach((p) => {
        const px = p.x * width;
        const py = p.y * height;
        const pulse = Math.sin(p.x * 15 + time + p.offset) * 0.5 + 0.5;
        const size = p.z * 2.0 * (1 + pulse * 0.6);
        const alpha = (0.4 - Math.abs(pulse - 0.5)) * 0.4;

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const cards = scene.querySelectorAll(".card-wrapper");
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let time = 0;
    let raf;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      cards.forEach((card, index) => {
        const bx = parseFloat(card.dataset.x);
        const by = parseFloat(card.dataset.y);
        const br = parseFloat(card.dataset.r);
        const depth = parseFloat(card.dataset.depth);

        const floatY = Math.sin(time * 1.5 + index) * 15 * depth;
        const floatX = Math.cos(time * 1.2 + index) * 8 * depth;
        const floatR = Math.sin(time + index) * 2 * depth;

        const pX = mouseX * 80 * depth;
        const pY = mouseY * 80 * depth;
        const rotX = -mouseY * 15 * depth;
        const rotY = mouseX * 15 * depth;

        card.style.transform = `translate(-50%, -50%) translate3d(${bx + pX + floatX}px, ${by + pY + floatY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${br + floatR}deg)`;
        card.style.opacity = "1";
      });

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-[#14392a] min-h-[800px] relative overflow-hidden flex items-center justify-center antialiased text-[#fff8e8] select-none">
      <div
        className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay"
        style={{backgroundImage: "repeating-linear-gradient(-45deg, rgba(217,154,49,0.2) 0px, rgba(217,154,49,0.2) 1px, transparent 1px, transparent 6px)"}}
      ></div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="relative w-full max-w-7xl h-full border border-[#d99a31]/10">
          <div className="absolute inset-y-0 left-1/3 border-l border-[#d99a31]/10"></div>
          <div className="absolute inset-y-0 right-1/3 border-l border-[#d99a31]/10"></div>
          <div className="absolute inset-x-0 top-1/3 border-t border-[#d99a31]/10"></div>
          <div className="absolute inset-x-0 bottom-1/3 border-t border-[#d99a31]/10"></div>
          <div className="absolute -top-px -left-px w-6 h-6 border-t border-l border-[#d99a31]/30"></div>
          <div className="absolute -top-px -right-px w-6 h-6 border-t border-r border-[#d99a31]/30"></div>
          <div className="absolute -bottom-px -left-px w-6 h-6 border-b border-l border-[#d99a31]/30"></div>
          <div className="absolute -bottom-px -right-px w-6 h-6 border-b border-r border-[#d99a31]/30"></div>
        </div>
      </div>

      <main ref={sceneRef} className="relative w-full max-w-7xl h-[800px] flex items-center justify-center z-10" style={{perspective: "1400px"}}>
        {/* Module 1: Left */}
        <article
          className="card-wrapper absolute top-1/2 left-1/2 opacity-0 z-10 transition-opacity duration-1000"
          data-x="-340"
          data-y="0"
          data-r="-4"
          data-depth="0.6"
        >
          <div className="group relative transition-transform duration-700 ease-out hover:-translate-y-2">
            <div className="relative p-px rounded-2xl bg-gradient-to-b from-[#d99a31]/20 via-[#d99a31]/5 to-transparent shadow-[0_24px_40px_-10px_rgba(0,0,0,0.4)]">
              <div className="relative w-72 h-44 rounded-2xl bg-[#173d2d]/95 backdrop-blur-2xl overflow-hidden flex flex-col justify-between border border-[#e2d1b2]/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,154,49,0.15),transparent_70%)] pointer-events-none"></div>

                <div className="px-5 pt-4 flex justify-between items-center relative z-10">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#d99a31]">Client Review</span>
                  <div className="flex gap-0.5 text-[#d99a31] text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <iconify-icon key={star} icon="solar:star-bold"></iconify-icon>
                    ))}
                  </div>
                </div>

                <div className="px-5 pb-5 relative z-10 flex-1 flex flex-col justify-end">
                  <p className="text-sm text-[#c9d2bd] leading-snug mb-4 italic">"The team made finding our dream estate an effortless and joyful journey."</p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
                      alt="Sarah Jenkins"
                      className="w-9 h-9 rounded-full object-cover border border-[#d99a31]/20"
                    />
                    <div>
                      <h2 className="text-sm font-semibold text-[#fff8e8] tracking-tight">Sarah Jenkins</h2>
                      <p className="text-xs text-[#8a987e]">Beverly Hills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Module 6: Center */}
        <article
          className="card-wrapper absolute top-1/2 left-1/2 opacity-0 z-[60] transition-opacity duration-1000 delay-100"
          data-x="0"
          data-y="0"
          data-r="0"
          data-depth="0.95"
        >
          <div className="group relative transition-transform duration-700 ease-out hover:-translate-y-2">
            <div className="relative p-px rounded-2xl bg-gradient-to-b from-[#d99a31]/40 via-[#d99a31]/10 to-transparent shadow-[0_32px_50px_-10px_rgba(0,0,0,0.5)]">
              <div className="relative w-80 h-52 rounded-2xl bg-[#fff8e8]/95 backdrop-blur-2xl overflow-hidden flex flex-col justify-between border border-[#d99a31]/30 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,154,49,0.1),transparent_80%)] pointer-events-none"></div>

                <div className="absolute top-3 left-3 w-1.5 h-1.5 border-t border-l border-[#173d2d]/30"></div>
                <div className="absolute top-3 right-3 w-1.5 h-1.5 border-t border-r border-[#173d2d]/30"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 border-b border-l border-[#173d2d]/30"></div>
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 border-b border-r border-[#173d2d]/30"></div>

                <div className="px-6 pt-5 flex justify-between items-center relative z-10">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#173d2d]">Featured Client</span>
                  <div className="flex gap-0.5 text-[#d99a31] text-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <iconify-icon key={star} icon="solar:star-bold"></iconify-icon>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 relative z-10 flex-1 flex flex-col justify-end">
                  <p className="text-base text-[#50624e] leading-snug mb-5 italic font-medium">"Unparalleled discretion and service. VISTA truly understands the global luxury market."</p>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                      alt="Marcus Rossi"
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#173d2d]"
                    />
                    <div>
                      <h2 className="text-base font-semibold text-[#173d2d] tracking-tight">Marcus Rossi</h2>
                      <p className="text-xs font-medium text-[#6d7d65]">Property Investor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Module 2: Right */}
        <article
          className="card-wrapper absolute top-1/2 left-1/2 opacity-0 z-20 transition-opacity duration-1000 delay-200"
          data-x="340"
          data-y="0"
          data-r="4"
          data-depth="0.7"
        >
          <div className="group relative transition-transform duration-700 ease-out hover:-translate-y-2">
            <div className="relative p-px rounded-2xl bg-gradient-to-b from-[#d99a31]/20 via-[#d99a31]/5 to-transparent shadow-[0_24px_40px_-10px_rgba(0,0,0,0.4)]">
              <div className="relative w-72 h-44 rounded-2xl bg-[#173d2d]/95 backdrop-blur-2xl overflow-hidden flex flex-col justify-between border border-[#e2d1b2]/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,154,49,0.15),transparent_70%)] pointer-events-none"></div>

                <div className="px-5 pt-4 flex justify-between items-center relative z-10">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#d99a31]">Client Review</span>
                  <div className="flex gap-0.5 text-[#d99a31] text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <iconify-icon key={star} icon="solar:star-bold"></iconify-icon>
                    ))}
                  </div>
                </div>

                <div className="px-5 pb-5 relative z-10 flex-1 flex flex-col justify-end">
                  <p className="text-sm text-[#c9d2bd] leading-snug mb-4 italic">"A white-glove experience from listing to closing. Highly recommended."</p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                      alt="Elena Vance"
                      className="w-9 h-9 rounded-full object-cover border border-[#d99a31]/20"
                    />
                    <div>
                      <h2 className="text-sm font-semibold text-[#fff8e8] tracking-tight">Elena Vance</h2>
                      <p className="text-xs text-[#8a987e]">Estate Seller</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}

function Footer({ email, setEmail, error, onSubmit }) {
  return (
    <footer className="px-5 pb-8 pt-16 md:px-12 lg:px-20">
      <div className="rounded-[2.7rem] border border-[#e2d1b2] bg-[#fff8e8] p-6 shadow-xl md:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#173d2d] text-[#e9a13a]">
                <iconify-icon icon="solar:sun-2-linear" class="text-2xl"></iconify-icon>
              </span>
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight">VISTA</p>
                <p className="text-xs uppercase tracking-[0.22rem] text-[#7a866f]">Luxury Real Estate</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#6d7865]">
              Weekly insights on luxury real estate markets and exclusive properties.
            </p>

            <form onSubmit={onSubmit} className="mt-6">
              <div className="flex max-w-md rounded-full border border-[#d8c6a5] bg-[#f7efdf] p-1 focus-within:ring-2 focus-within:ring-[#d99a31]">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
                  aria-label="Newsletter email"
                />
                <button className="grid h-12 w-12 place-items-center rounded-full bg-[#d99a31] text-[#173d2d] transition hover:scale-105">
                  <iconify-icon icon="solar:arrow-right-linear" class="text-xl"></iconify-icon>
                </button>
              </div>
              {error && <p className="mt-2 text-sm text-[#be4b2b]">{error}</p>}
            </form>
          </div>

          <FooterLinks title="Links" items={["Exclusive", "Showcase", "Journal", "About Us"]} />
          <FooterLinks title="Properties" items={["Estates", "Villas", "Penthouses", "Townhouses"]} />

          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">Contacts</h3>
            <p className="mt-4 text-sm leading-7 text-[#6d7865]">
              18 Greenhouse Lane
              <br />
              Portland, OR 97205
              <br />
              +1 503 884 1180
              <br />
              hello@vista-estates.com
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Play Store", "App Store"].map((label) => (
                <button
                  key={label}
                  className="flex items-center gap-2 rounded-2xl bg-[#173d2d] px-4 py-3 text-xs font-medium text-[#fff8e8] transition hover:-translate-y-1"
                >
                  <iconify-icon icon={label === "Play Store" ? "simple-icons:googleplay" : "simple-icons:apple"}></iconify-icon>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#e2d1b2] pt-6">
          <p className="text-sm text-[#77836f]">© 2026 VISTA Estates. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {["simple-icons:instagram", "simple-icons:youtube", "simple-icons:facebook"].map((icon) => (
              <button key={icon} className="grid h-10 w-10 place-items-center rounded-full bg-[#f7efdf] transition hover:bg-[#e9dcc4]">
                <iconify-icon icon={icon}></iconify-icon>
              </button>
            ))}
            <span className="flex items-center gap-2 rounded-full bg-[#f7efdf] px-4 py-2 text-xs font-medium">
              <iconify-icon icon="simple-icons:trustpilot" class="text-[#00b67a]"></iconify-icon>
              Trustpilot
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="font-display text-2xl font-semibold tracking-tight">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-[#6d7865]">
        {items.map((item) => (
          <li key={item}>
            <button className="transition hover:text-[#173d2d] hover:translate-x-1">{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;