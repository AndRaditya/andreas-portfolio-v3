import heartLogo from "../assets/logo/heart.png";
import reactLogo from "../assets/logo/react.png";

function FooterElement() {
  return (
    <div className="footer-element">
      <div className="footer-element__wrapper">
        <p className="text--footer__header">Made with&nbsp;</p>
        <img src={heartLogo} alt="heart" className="footer-element__icon-1" />
        <p className="text--footer__header">&nbsp;and&nbsp;</p>
        <img src={reactLogo} alt="heart" className="footer-element__icon-2" />
      </div>

      <p className="text--footer__copyright">
        &copy; 2023 | Andreas Raditya Aryatama
      </p>
    </div>
  );
}

export default FooterElement;
