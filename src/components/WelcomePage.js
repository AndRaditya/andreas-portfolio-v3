import { useEffect, useState } from "react";

function WelcomePage() {
  const [classOpacity, setClassOpacity] = useState("welcome-page");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 150) {
      return setClassOpacity("welcome-page");
    } else if (window.scrollY > 155) {
      return setClassOpacity("welcome-page welcome-page__on-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    // <div className="welcome-page">
    <div className={classOpacity}>
      <WelcomeTexts />
    </div>
  );
}

function WelcomeTexts() {
  return (
    <div className="welcome-page__texts">
      <div className="welcome-page__texts--title">
        <p className="text--welcome-page__title">Welcome!</p>
      </div>
      <WelcomeScroll />
    </div>
  );
}

function WelcomeScroll() {
  return (
    <div className="welcome-page__texts--scroll">
      <p className="text--welcome-page__subtitle">scroll down</p>
      <div className="welcome-page__scroll">
        <div className="welcome-page__scroll-icon"></div>
      </div>
    </div>
  );
}

export default WelcomePage;
