import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-full flex flex-col md:flex-row justify-center items-center p-8 gap-2"
    >
      <HeroText />
      <HeroImg />
    </section>
  );
};

export default Hero;