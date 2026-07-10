import Lanyard from "../Element/Lanyard/Lanyard/Lanyard.jsx";
import SplitText from "../Element/SplitText.jsx";
import SpotlightCard from "../Element/SpotlightCard.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";

import { useState } from "react";
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const isi = {
  deskirpsiBasic:
    "Saya Cokorda Vrindavan Chandra Dasa, atau biasa dipanggil Cok Vrinda maupun Vrinda. Saat ini saya sedang mendalami bidang Full Stack Development dan terus mengembangkan kemampuan saya dalam membangun aplikasi web, baik dari sisi frontend maupun backend. Meskipun masih berada di tahap pemula (newbie), saya memiliki semangat belajar yang tinggi, senang mengeksplorasi teknologi baru, serta selalu berusaha meningkatkan kemampuan melalui berbagai proyek dan pengalaman yang saya kerjakan.",
  latarBelakang: `Perjalanan coding dimulai dari rasa penasaran yang besar terhadap bagaimana sebuah website dibuat. Dari HTML sederhana, terus berkembang ke CSS, JavaScript, PHP, hingga ReactJS. Setiap projek yang dibuat adalah cerminan dari proses belajar yang terus berjalan.`,
  kehidupan: `Selain bermain di ranah Web Developer, saya juga memliki antusias pada pengembangan IoT, AI dengan N8N dan juga hobi otak-atik komputer`,
};

const MoreAboutFragment = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-4 px-4">
      <div className="w-full lg:w-[2000px] flex justify-center max-h-[660px] lg:max-h-full overflow-hidden">
        <Lanyard position={[0, 0, 11]} gravity={[0, -40, 0]} />
      </div>
      <div>
        <SplitText
          text={`Tentang saya`}
          className="text-justify text-large md:text-lg font-Poppins font-bold  lg:text-3xl"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text={isi.deskirpsiBasic}
          className="text-justify text-large md:text-lg font-Poppins lg:text-lg mb-5"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <Card text="Latar Belakang" deskripsi={isi.latarBelakang}></Card>
        <Card text="Kehidupan Pribadi" deskripsi={isi.kehidupan}></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { text, deskripsi } = props;
  const [open, setOpen] = useState(false);

  // menentukan batas karakter untuk preview
  const previewText = deskripsi.substring(0, 90) + "...";

  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      threshold={0.2}
      delay={0.3}
    >
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <SpotlightCard
          className="custom-spotlight-card relative flex flex-col gap-4 mt-5 h-full p-6 transition-all duration-500"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <h2 className="text-white text-xl font-semibold">{text}</h2>

          {/* Jika dibuka, maka akan tampilkan deskirpsinya, jika tidak tampilkan preview saja */}
          <p className="text-gray-400 text-justify whitespace-pre-line">
            {open ? deskripsi : previewText}
          </p>
          {/* Jika di buka tampilkan less info, jika tidak tampilkan ore info */}
          <div className="text-xs text-white font-Poppins font-semibold uppercase">
            {open ? "Info lebih sedikit🔼 " : "Info lebih lanjut 🔽 "}
          </div>
        </SpotlightCard>
      </div>
    </AnimatedContent>
  );
};

export default MoreAboutFragment;
