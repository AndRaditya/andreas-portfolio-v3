import homeBg from "../assets/home-background.webp";
import WelcomePage from "./WelcomePage";
import PortfolioPage from "./PortfolioPage";
import ContactPage from "./ContactPage";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import StickyNavigation from "./StickyNavigation";
import AboutPage from "./AboutPage";
import { useInView } from "react-intersection-observer";

function FillHeight() {
  return (
    <div
      style={{ height: "100vh", width: "100%", backgroundColor: "#171717" }}
    ></div>
  );
}

function ParallaxLayout() {
  const { ref: aboutRef, inView: elementAbout } = useInView({
    triggerOnce: true,
    delay: 200,
  });
  const { ref: portfolioRef, inView: elementPortfolio } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: elementContact } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="parallax-layout">
      <StickyNavigation />

      <div className="parallax-layout__main">
        <Parallax bgImage={homeBg} strength={-500}>
          <WelcomePage />
        </Parallax>
        <Element name="about">
          <div ref={aboutRef}>
            {elementAbout ? <AboutPage /> : <FillHeight />}
          </div>
        </Element>
        <Element name="portfolio">
          <div ref={portfolioRef}>
            {elementPortfolio ? <PortfolioPage /> : <FillHeight />}
          </div>
        </Element>
        <Element name="contact">
          <div ref={contactRef}>
            {elementContact ? <ContactPage /> : <FillHeight />}
          </div>
        </Element>
      </div>
    </div>
  );
}

export default ParallaxLayout;
