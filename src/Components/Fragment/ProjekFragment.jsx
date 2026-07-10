import SpotlightCard from "../Element/SpotlightCard.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import BlurText from "../Element/BlurText.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const projek = [
  {
    judul: "Biografi Pak Hendra",
    gambar: `/portofolio26/image/bioguru.png`,
    deskripsi:
      "Saya mempunyai tanggung jawab untuk membuat webiste biografi guru, saya gunakan untuk mengasah skill saya dengan menggunakan React dan ReactBits ",
    linkGit: "https://github.com/cokvrindaa/biografiguru",
  },
  {
    judul: "TingTung Social",
    gambar: `/portofolio26/image/tingtungss.png`,
    deskripsi:
      "Tingtung Social adalah replika sosial media menggunakan PHP, Tailwind, dan MySQL untuk Database. Menggunakan konsep CREATE, UPDATE, DELETE, SELECT.",
    linkGit: "https://github.com/cokvrindaa/Ting-Tung-Social",
  },
  {
    judul: "Oh The Neptune Web",
    gambar: `/portofolio26/image/ohtheneptune.png`,
    deskripsi:
      "Website untuk channel YouTube Oh The Neptune, dibuat dengan HTML dan Bootstrap.",
    linkGit: "https://github.com/cokvrindaa/ohtheneptune.github.io",
  },
  {
    judul: "#PANTAUCUY",
    gambar: `/portofolio26/image/pantaucuy.png`,
    deskripsi:
      "Projek yang mengabungkan konsep WEB dengan Elektronika Dasar. Dapat mengontrol dan memantau pompa, led, ldr, dht via ESP32.",
    linkGit: "https://github.com/cokvrindaa/-PANTAUCUY",
  },
  {
    judul: "My Perpus",
    gambar: `/portofolio26/image/myperpus.png`,
    deskripsi:
      "Aplikasi manajemen perpustakaan sederhana dengan CRUD di PHP dan CSS untuk styling.",
    linkGit: "https://github.com/cokvrindaa/My-Perpus/",
  },
  {
    judul: "Portofolio 2024",
    gambar: `/portofolio26/image/portofolio24.png`,
    deskripsi:
      "Portofolio edisi 2024 dibuat dengan HTML, CSS, dan JavaScript. Konsep Modern-Minimalis.",
    linkGit: "https://github.com/cokvrindaa/portofolio24/",
  },
  {
    judul: "Portofolio 2025",
    gambar: `/portofolio26/image/portofolio25.png`,
    deskripsi:
      "Portofolio edisi 2025 dibuat dengan ReactJS, Tailwind, Reactbits. Konsep Modern-Minimalis-Fancy.",
    linkGit: "https://github.com/cokvrindaa/portofolio26/",
  },
  {
    judul: "Smart Car",
    gambar: `/portofolio26/image/smartcar.jpg`,
    deskripsi:
      "Smart Car dibuat dengan ESP32, dikontrol dengan remote dan automatisasi sederhana menggunakan sensor ultrasonik.",
    linkGit: "https://github.com/cokvrindaa/smart-car",
  },
];

const ProjekFragment = () => {
  return (
    <div>
      <BlurText
        text="Projek Ku"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold mb-2"
      />
      <p className="text-center justify-center mb-10 lg:text-xl text-gray-400">
        Kumpulan projek yang dibuat selama belajar coding
      </p>
      <div className="flex flex-col lg:grid gap-4 lg:gap-6 lg:grid-cols-3">
        {projek.map((item, index) => (
          <Card
            key={index}
            judul={item.judul}
            gambar={item.gambar}
            deskripsi={item.deskripsi}
            linkGit={item.linkGit}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ judul, gambar, deskripsi, linkGit }) => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.0}
      threshold={0.2}
      delay={0.3}
    >
      <SpotlightCard
        className="custom-spotlight-card relative flex flex-col items-start justify-between h-full p-4 w-full"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        {/* Gambar Projek */}
        <img
          src={gambar}
          alt={judul}
          className="rounded-xl w-full object-cover h-44"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* Judul */}
        <p className="text-white text-xl font-semibold mt-3 font-Poppins">
          {judul}
        </p>

        {/* Deskripsi */}
        <p className="mt-2 text-gray-300 text-sm text-justify leading-relaxed flex-1">
          {deskripsi}
        </p>

        {/* Logo GitHub */}
        <div className="mt-4 flex items-center">
          <a
            href={linkGit}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-Poppins"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            GitHub
          </a>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
};

export default ProjekFragment;
