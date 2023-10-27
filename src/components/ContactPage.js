import GithubLogo from "../assets/logo/github.png";
import LinkedinLogo from "../assets/logo/linkedin.png";

function ContactPage() {
  return (
    <div className="contact-page">
      <ContactPageLayout />
    </div>
  );
}

function ContactPageLayout() {
  return (
    <div className="contact-page__layout">
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
      <ContactWrapper />
    </div>
  );
}

function ContactWrapper() {
  return (
    <div className="contact-page__wrapper">
      <ContactPageHeader />
      <ContactPageFooter />
    </div>
  );
}

function ContactPageHeader() {
  return (
    <>
      <div className="contact-page__header">
        <p className="text--contact-page__title">Contact</p>
        <form
          action="https://formsubmit.co/raditya.aryatama@gmail.com"
          method="POST"
          className="contact-page__header--form"
        >
          <ContactPageInputs />
          <div className="contact-page__header--button">
            <button type="submit" className="text--contact-page__button">
              <p className="text--contact-page__button-par button--animation">
                Send
              </p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ContactPageInputs() {
  return (
    <>
      <div className="contact-page__header--form-1">
        <FormInput name={"email"} type={"email"} placeholder={"Email"} />
        <FormInput name={"_subject"} type={"text"} placeholder={"Subject"} />
      </div>
      <textarea
        name="message"
        type="text"
        className="contact-page__textarea"
        placeholder="Your Message"
        required
      />
    </>
  );
}

function FormInput({ name, type, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      className="contact-page__input"
      placeholder={placeholder}
      required
    />
  );
}

function ContactPageFooter() {
  return (
    <div className="contact-page__footer">
      <ContactIcon
        link={"https://github.com/AndRaditya"}
        src={GithubLogo}
        alt={"Github"}
      />
      <ContactIcon
        link={"https://www.linkedin.com/in/andreas-raditya/"}
        src={LinkedinLogo}
        alt={"Linkedin"}
      />
    </div>
  );
}

function ContactIcon({ link, src, alt }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="contact-page__footer--link"
    >
      <img src={src} alt={alt} className="contact-page__footer--icon" />
    </a>
  );
}

export default ContactPage;
