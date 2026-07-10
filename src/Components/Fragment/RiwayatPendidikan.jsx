import SpotlightCard from "../Element/SpotlightCard.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import { Timeline } from "../Element/Timeline.jsx";
import BlurText from "../Element/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const RiwayatPendidikanFragment = () => {
  const data = [
    {
      title: "Lulusan 2022",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal  text-white ">
            SD Bali Dharma School
          </p>
          <img src="/portofolio26/image/sd.png" className="h-40" alt="" />
        </div>
      ),
    },
    {
      title: "Lulusan 2025",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal  text-white ">
            SMP Nasional Denpasar
          </p>
          <img src="/portofolio26/image/smp.png" className="h-40" alt="" />
        </div>
      ),
    },
    {
      title: "Lulusan - ",
      content: (
        <div>
          <p className="mb-8 text-xl font-normal  text-white ">
            SMK TI Bali Global Denpasar
          </p>
          <img src="/portofolio26/image/SMK.png" className="h-40" alt="" />
        </div>
      ),
    },

  ];
  return (
    <div>
      <BlurText
        text="Riwayat Pendidikan"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl lg:text-[35px] text-center justify-center font-Poppins font-bold  lg:text-5xl"
      />
      <Timeline data={data}></Timeline>
    </div>
  );
};

const Card = (props) => {
  const { text, gambar, textisi } = props;
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
        className="custom-spotlight-card relative flex items-start gap-4 h-full p-6"
        spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        <img src={gambar} className="w-16 rounded-lg" />
        <div className="flex flex-col mt-1.5">
          <span className="text-white text-justify text-lg font-semibold">
            {text}
          </span>
          <p>{textisi}</p>
        </div>
      </SpotlightCard>
    </AnimatedContent>
  );
};
export default RiwayatPendidikanFragment;
