import { useState } from "react";
import BlurText from "../Element/BlurText.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const sertifikat = [
  {
    judul: "Belajar Dasar AI by Dicoding",
    gambar: "/portofolio26/image/DASARAI.png",
  },
  {
    judul: "Belajar Dasar Javascript by Dicoding",
    gambar: "/portofolio26/image/DASARJS.png",
  },
  {
    judul: "Belajar Pemrograman Web Dicoding",
    gambar: "/portofolio26/image/DASARWEB.png",
  },
  {
    judul: "Juara 3 IKCT di PNB",
    gambar: "/portofolio26/image/3IKCT.png",
  },
];

const SertifikatFragment = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <BlurText
        text="Sertifikat"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold mb-2"
      />
      <p className="text-center mb-10 lg:text-xl text-gray-400">
        Sertifikat yang telah diraih
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-4">
        {sertifikat.map((item, index) => (
          <KotakSertifikat
            key={index}
            judul={item.judul}
            gambar={item.gambar}
            index={index}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {/* Modal Popup */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-[#0f172a] border border-white/20 rounded-2xl shadow-2xl w-full max-w-[95vw] lg:max-w-4xl xl:max-w-5xl p-5 lg:p-8 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol tutup */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-3xl font-bold transition-colors"
              aria-label="Tutup"
            >
              &times;
            </button>

            {/* Gambar sertifikat */}
            <img
              src={selected.gambar}
              alt={selected.judul}
              className="w-full rounded-xl object-contain max-h-[55vh] lg:max-h-[75vh]"
              onError={(e) => {
                e.target.src = "";
                e.target.alt = "Gambar tidak tersedia";
              }}
            />

            {/* Judul */}
            <p className="text-white font-Poppins font-semibold text-base lg:text-xl text-center">
              {selected.judul}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const KotakSertifikat = ({ judul, gambar, index, onClick }) => {
  return (
    <AnimatedContent
      distance={60}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
      delay={index * 0.05}
    >
      <div
        onClick={onClick}
        className="cursor-pointer border border-white/20 rounded-xl p-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[80px] lg:min-h-[100px] select-none"
      >
        {gambar && (
          <img
            src={gambar}
            alt={judul}
            className="w-full h-52 object-cover rounded-lg pointer-events-none"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}
        <p className="text-white text-sm lg:text-base font-Poppins font-medium text-center leading-snug">
          {judul}
        </p>
      </div>
    </AnimatedContent>
  );
};

export default SertifikatFragment;
