import CircularGallery from "../Element/CircularGallery.jsx";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const GaleriFragment = () => {
  return (
    <div>
      <BlurText
        text="Galeri.."
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold  lg:text-5xl"
      />
      <AnimatedContent>
        <div
          style={{ height: "600px", position: "relative" }}
          className="mt-[-50px] md:mt-0"
        >
          <CircularGallery
            bend={0}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </AnimatedContent>
    </div>
  );
};
export default GaleriFragment;
