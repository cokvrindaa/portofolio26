import MainAbout from "../Layout/MainAbout";
import ScrollVelocity from "../Element/ScrollVelocity.jsx";
import MoreAbout from "../Layout/MoreAbout.jsx";
import RiwayatPendidikan from "../Layout/RiwayatPendidikan.jsx";
import Projek from "../Layout/Projek.jsx";
import Sertifikat from "../Layout/Sertifikat.jsx";
import Kontak from "../Layout/Kontak.jsx";
import Footer from "../Layout/Footer.jsx";

const MainPage = () => {
  return (
    <div>
      <div id="beranda">
        <MainAbout />
      </div>

      <div id="tentang">
        <ScrollVelocity
          texts={[
            "NEWBIE FRONT END AND BACK END DEVELOPER",
            "REACT - PHP - JS - IOT ENTHUSIAST",
          ]}
          className="custom-scroll-text font-Poppins"
          velocity={40}
        />
        <MoreAbout />
      </div>

      <div id="pendidikan">
        <RiwayatPendidikan />
      </div>

      <div id="projek">
        <Projek />
      </div>

      <div id="sertifikat">
        <Sertifikat />
      </div>

      <div id="kontak">
        <Kontak />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
