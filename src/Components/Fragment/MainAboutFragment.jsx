import GradientText from "../Element/GradientText.jsx";
import BlurText from "../Element/BlurText";
import AnimatedContent from "../Element/AnimatedContent.jsx";
import GlareHover from "../Element/GlareHover.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ProfileCard from "../Element/ProfileCard.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const MainAboutFragment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  lg:gap-20  p-8">
      <div className="scale-60 md:scale-100 mt-[-10px] md:mt-0">
        <AnimatedContent>
          <ProfileCard
            name="cokvrinda26"
            title=""
            handle=""
            status=""
            contactText=""
            avatarUrl="/portofolio26/image/CokVrinda.png"
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
          />
        </AnimatedContent>
      </div>
      <div className="gap-3 flex items-center flex-col justify-center mt-2">
        <Text />
        <div className="gap-3 flex flex-row justify-center mt-2 lg:mt-2">
          <Button link="https://www.instagram.com/cokvrindaaa/">
            <FontAwesomeIcon icon={faInstagram} />
          </Button>
          <Button link="https://github.com/cokvrindaa">
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button link="https://www.linkedin.com/in/cokorda-vrindavan-chandra-dasa-1210662b4/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
          <Button link="https://drive.google.com/file/d/1yQ9CpgNyoSKpB5V13LPN0KkfgeWjZFs-/view?usp=sharing" newTab width="90px" height="40px">
            <span style={{ fontSize: "13px", fontWeight: "600", color: "white", letterSpacing: "0.5px", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>Lihat CV</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
const Gambar = () => {
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <img
        src={`/portofolio26/image/profilsatu.jpg`}
        className=" rounded-full w-58 justify-center items-center mb-5 m-auto lg:w-96"
      ></img>
    </AnimatedContent>
  );
};

const Button = (props) => {
  const { children, link, newTab = false, width = "40px", height = "40px" } = props;
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={1.2}
      ease="power3.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.3}
    >
      <button>
        <a href={link} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
          <GlareHover
            width={width}
            height={height}
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                fontSize: "20px",
                fontWeight: "900",
                color: "white",
                margin: 0,
              }}
            >
              {children}
            </div>
          </GlareHover>
        </a>
      </button>
    </AnimatedContent>
  );
};

const Text = () => {
  return (
    <div>
      <BlurText
        text="Haloo 👋,  perkenalkan saya"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[20px] md:mt-0 mt-[-100px] text-center justify-center lg:text-[25px]  font-Poppins"
      />

      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <GradientText
          colors={["#FFFF, #4079ff, #FFFF, #4079ff, #FFFF"]}
          animationSpeed={8}
          showBorder={false}
          className=" text-[28px] text-center font-bold lg:text-[50px] "
        >
          Cokorda Vrindavan Chandra Dasa
        </GradientText>
      </AnimatedContent>

      <BlurText
        text="Newbie Web Developer"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[20px] text-center justify-center lg:text-[25px] mt-3  font-Poppins"
      />
    </div>
  );
};

export default MainAboutFragment;
