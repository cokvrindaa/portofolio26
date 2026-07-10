import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = [
    {
      image: "https://i.pravatar.cc/300?img=8",
      title: "Alex Rivera",
      subtitle: "Full Stack Developer",
      handle: "@alexrivera",
      url: "https://github.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=11",
      title: "Jordan Chen",
      subtitle: "DevOps Engineer",
      handle: "@jordanchen",
      url: "https://linkedin.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=3",
      title: "Morgan Blake",
      subtitle: "UI/UX Designer",
      handle: "@morganblake",
      url: "https://dribbble.com/",
    },
    {
      image: "https://i.pravatar.cc/300?img=16",
      title: "Casey Park",
      subtitle: "Data Scientist",
      handle: "@caseypark",
      url: "https://kaggle.com/",
    },
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full flex flex-wrap justify-center gap-6 ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          className="group relative flex flex-col w-[400px] sm:w-[300px] lg:w-[360px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* spotlight hover */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15), transparent 70%)",
            }}
          />

          {/* image */}
          <div className="p-2">
            <img
              src={c.image}
              alt={c.title}
              className="w-full h-[380px] object-cover rounded-lg"
            />
          </div>

          {/* text */}
          <footer className="p-3 text-white font-sans">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-sm opacity-80">{c.subtitle}</p>
            {c.handle && (
              <span className="text-xs opacity-60">{c.handle}</span>
            )}
          </footer>
        </article>
      ))}

      {/* spotlight mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "brightness(0.85)",
          WebkitBackdropFilter: "brightness(0.85)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, transparent 25%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* fade layer */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "brightness(0.85)",
          WebkitBackdropFilter: "brightness(0.85)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid;