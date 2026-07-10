import ChromaGrid from "../Element/ChromaGrid";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};
const items = [
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Dwija - 22",
    subtitle: "Project Leader - Merangkai kalimat ",
    handle: "",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "",
  },
  {
    image: "/portofolio26/image/CokVrinda.jpeg",
    title: "Cok Vrinda - 06",
    subtitle: "Web Developer - Merangkai kalimat",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/cokvrindaa",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Bagas - 16",
    subtitle: "Merangkai kalimat",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Albina - 25",
    subtitle: "Wawancara",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Sima - 11",
    subtitle: "Wawancara",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Rama - 34",
    subtitle: "Merangkai kalimat",
    handle: "",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "",
  },
];

const PenulisFragment = () => {
  return (
    <div>
      <BlurText
        text="Penulis"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold  lg:text-5xl"
      />
      <BlurText
        text="Kelompok 5 | X RPL 2"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[20px] text-center justify-center font-Poppins mt-4 mb-20 "
      />
      <AnimatedContent>
        <div style={{ height: "600px", position: "relative" }}>
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </AnimatedContent>
    </div>
  );
};
export default PenulisFragment;
