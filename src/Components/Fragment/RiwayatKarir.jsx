import SpotlightCard from "../Element/SpotlightCard.jsx";
import CountUp from "../Element/CountUp.jsx";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import DecryptedText from "../Element/DecryptedText.jsx";
import { useState } from "react";
const RiwayatKarirFragment = () => {
  return (
    <div>
      <DecryptedText
        text="Riwayat Karir dan Pengalaman"
        animateOn="view"
        revealDirection="center"
        className="font-Poppins text-2xl lg:text-4xl mx-auto font-bold  "
      />{" "}
      <p className="mt-[-5px] mb-4 text-sm lg:text-2xl lg:mb-5">
        cokvrinda26 adalah seorang developer yang memiliki  {" "}
          <CountUp
            from={0}
            to={15}
            separator=","
            direction="up"
            duration={5}
            className="count-up-text font-Poppins font-bold"
            startCounting
          />
        {" "} buah projek yang dikerjakan
      </p>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4 ">
        <Card
          text="SMK TI Bali Global Singaraja"
          gambar={`/portofolio26/image/logoTIHitam.png`}
          textisi="2009-2011"
          deskripsi = "Beliau pernah mengajar di SMK TI Bali Global Singaraja pada periode 2009 hingga 2011. Masa tersebut menjadi salah satu bagian penting dalam perjalanan karier beliau karena banyak pengalaman berharga yang diperoleh, baik dalam dunia pendidikan maupun dalam interaksi bersama siswa dan rekan kerja."
        ></Card>
        <Card
          text="SMK TI Bali Global Denpasar"
          gambar={`/portofolio26/image/logoTIHitam.png`}
          textisi="2011-sekarang"
          deskripsi = "Dari tahun 2011 hingga saat ini, beliau mengajar di SMK TI Bali Global Denpasar. Beliau mengampu mata pelajaran Pendidikan Agama Hindu"
        ></Card>

        <Card
          text="Pelatihan public speaking"
 
          gambar={`/portofolio26/image/santisastra.png`}
          deskripsi = "Beliau pernah mengikuti pelatihan public speaking di Santy Sastra Denpasar sebagai upaya untuk meningkatkan kemampuan berbicara di depan umum."
        ></Card>

        <Card
          text="Juara 1 festival lawak Se-Bali"
          gambar={`/portofolio26/image/lawakbali.png`}
          deskripsi ="Selain aktif mengajar, beliau juga pernah meraih Juara 1 Festival Lawak se-Bali bersama grup Rare Kual Singaraja. Prestasi tersebut menjadi salah satu kenangan berharga yang lahir dari kerja sama, kreativitas, dan semangat kebersamaan."
        ></Card>
      </div>
    </div>
  );
};
const Card = (props) => {
  const { text, gambar, textisi, deskripsi } = props;
  const [open, setOpen] = useState(false);

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
          className="custom-spotlight-card relative flex flex-col gap-4 h-full p-6 transition-all duration-500"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex items-start gap-4">
            <img src={gambar} className="w-16 rounded-lg" />

            <div className="flex flex-col mt-1.5">
              <span className="text-white text-lg font-semibold">
                {text}
              </span>
              <p>{textisi}</p>
            </div>
          </div>

          {open && (
            <div className="mt-3 text-sm text-gray-300">
              {deskripsi}
            </div>
          )}

          <div className="mt-2 text-xs text-white font-Poppins font-semibold">
            {open ? "Info lebih sedikit🔼 " : "Info lebih lanjut 🔽 "}
          </div>
        </SpotlightCard>
      </div>
    </AnimatedContent>
  );
};
export default RiwayatKarirFragment;
