import foto from "../assets/foto2.webp";

function AboutPage(ref) {
  return (
    <div className="about-page">
      <AboutPageMain />
    </div>
  );
}

function AboutPageMain() {
  return (
    <div className="about-page__main">
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
      <AboutPageWrapper />
    </div>
  );
}

function AboutPageWrapper() {
  return (
    <div className="about-page__wrapper">
      <AboutPageHeaders />
      <AboutPageDesc />
      <AboutPageButton />
    </div>
  );
}

function AboutPageHeaders() {
  return (
    <div className="about-page__main--headers">
      <div className="about-page__main--headers__1">
        <img src={foto} alt="self" className="about-page__photo" />
      </div>
      <div className="about-page__main--headers__2">
        <p className="text--about-page__name">Andreas Raditya Aryatama</p>
        <p className="text--about-page__web">Web Developer</p>
      </div>
    </div>
  );
}

function AboutPageDesc() {
  return (
    <div className="about-page__main--desc">
      <div className="about-page__main--desc__child">
        <p className="text--about-page__desc">
          Freshgraduate from Atma Jaya Yogyakarta University.
        </p>
      </div>
      <div className="about-page__main--desc__child">
        <p className="text--about-page__desc">
          I`ve been interest into Website Developer since 2020 and a lot of
          projects also tasks given by the university.
        </p>
      </div>
      <div className="about-page__main--desc__child">
        <p className="text--about-page__desc">
          I`ve had a internship as Full Stack Website Developer at Solen System
          Indonesia for 6 months at 2022. During internship, I collaborated with
          other employees develop many projects such as Warehouse Management
          System, Customer Relationship Management, and Archive Management.
        </p>
      </div>
    </div>
  );
}

function AboutPageButton() {
  return (
    <div className="about-page__main--button">
      <a
        href="https://drive.google.com/uc?export=download&id=1Hnh8_R8Gt54NqIiT5zxQoSmP6xEb2yka"
        target="_blank"
        rel="noreferrer"
        className="text--about-page__button button--animation"
      >
        Download CV Here!
      </a>
    </div>
  );
}

export default AboutPage;
