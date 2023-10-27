import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function StickyNavigation({ ref }) {
  const [classOpacity, setClassOpacity] = useState("sticky-navigation");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 150) {
      return setClassOpacity("sticky-navigation");
    } else if (window.scrollY > 155) {
      return setClassOpacity("sticky-navigation sticky-navigation__scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    // <nav className="sticky-navigation">
    <nav className={classOpacity}>
      <StickyLayout />
    </nav>
  );
}

function StickyLayout() {
  return (
    <div className="sticky-navigation__layout">
      <LinkNavigation link={"about"} name={"About"} />
      <LinkNavigation link={"portfolio"} name={"Portfolio"} />
      <LinkNavigation link={"contact"} name={"Contact"} />
    </div>
  );
}

function LinkNavigation({ link, name }) {
  return (
    <Link
      activeClass="text--navigation__active"
      className="text--navigation__link"
      to={link}
      spy={true}
      smooth={true}
      duration={1500}
    >
      {name}
    </Link>
  );
}

export default StickyNavigation;
