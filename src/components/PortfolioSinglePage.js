import VueLogo from "../assets/logo/vue-logo.png";
import LaravelLogo from "../assets/logo/laravel-icon.png";
import SassLogo from "../assets/logo/sass.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PortfolioSinglePage() {
  const parameter = useParams();
  const params = parameter.portfolioId;

  return (
    <div className="portfolio-single">
      <PortfolioLayout params={params} />
    </div>
  );
}

function PortfolioLayout({ params }) {
  return (
    <div className="portfolio-single__layout">
      <PortfolioButton />
      <PortfolioContent params={params} />
      <PortfolioImage params={params} />
    </div>
  );
}

function PortfolioButton() {
  let history = useNavigate();
  console.log(history);

  return (
    <div className="portfolio-single__button">
      <p className="text--portfolio-single__button-back">
        {/* <button onClick={() => history(-1)}> */}
        <Link
          to="/dashboard"
          className="text--portfolio-single__button-back--link"
        >
          Back to Home
          {/* </button> */}
        </Link>
      </p>
    </div>
  );
}

function PortfolioContent({ params }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (params === "1") {
      setTitle("Kost Catleya");
      setDesc(
        "Website intended for Catleya Boarding House with a purpose to develops the boarding house. Booking can be made by customer to makes it easy on booking room. Manage the data required in the management of boarding house, such as room data to edit whether it fills or not. Transaction, the manager can fill transaction in and out, complete with graph, reports that can be download."
      );
    }

    if (params === "2") {
      setTitle("Weather Whisper");
      setDesc(
        "Self Project about weather application offers a wealth of features to ensure you're always informed and prepared. It has some features: Search Location: Whether you're planning a trip, or just curious about the weather halfway around the world, 5-Day Wind Forecast: For those who rely on wind conditions for outdoor activities, Current Location, Current Location silent guide by automatically detecting your current location, and display wind, humidity, and further information."
      );
    }

    if (params === "3") {
      setTitle("E-Arsip [Project Internship]");
      setDesc(
        "Managing archives in form digital or physical. It has plenty features: Storing and managing archives whether on rack or bin. Upload document template from physical document also with variables. Create template using What You See is What You Get complete with document name and variables. Create archive/document easily from templates that was made before. Print and email document easily."
      );
    }

    if (params === "4") {
      setTitle("Atma Jogja Rental");
      setDesc(
        "Booking and Manage Car Rental project given by college. It solving many issues base on Customer and Manger such as booking cars, managing employees shift and schedule, company partner cars, booking promos, payment verification, print reports, and many more."
      );
    }

    if (params === "5") {
      setTitle("Warehouse Management System [Project Internship]");
      setDesc(
        "Managing warehouses and has plenty features: Managing products stored on warehouses. Managing documents related to products, warehouses, shipping, etc. Tracking shipment using document number. Emailing related to document and product"
      );
    }

    return () => {
      setTitle("");
      setDesc("");
    };
  }, [params]);

  return (
    <div className="portfolio-single__content">
      <div className="portfolio-single__content--wrapper">
        <p className="text--portfolio-single__title">{title}</p>
        <p className="text--portfolio-single__desc">{desc}</p>
        <PortfolioContentFooter params={params} />
      </div>
    </div>
  );
}

function PortfolioContentFooter({ params }) {
  const [link, setLink] = useState("#");

  useEffect(() => {
    if (params === "1") {
      setLink("https://kost-catleya.andreas-r.space");
    }

    if (params === "2") {
      setLink("https://weather-whisper.andreas-r.space");
    }

    if (params === "3") {
      setLink("https://e-arsip.andreas-r.space");
    }

    if (params === "4") {
      setLink("https://atmarental.andreas-r.space");
    }

    if (params === "5") {
      setLink("#");
    }

    return () => {};
  }, [params]);

  return (
    <div className="portfolio-single__content--footer">
      {link !== "#" && (
        <>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text--portfolio-single__button-link--anchor"
          >
            <p className="text--portfolio-single__button-link">
              Project Link &rarr;
            </p>
          </a>

          <div className="portfolio-single__content--footer__icon">
            <FooterContent params={params} />
          </div>
        </>
      )}

      {link === "#" && (
        <div className="portfolio-single__content--footer__icon-2">
          <FooterContent params={params} />
        </div>
      )}
    </div>
  );
}

function FooterContent({ params }) {
  return (
    <>
      <img src={VueLogo} className="portfolio-single__icon" alt="icon" />

      {(params === "1" ||
        params === "3" ||
        params === "4" ||
        params === "5") && (
        <img src={LaravelLogo} className="portfolio-single__icon" alt="icon" />
      )}
      {(params === "1" || params === "2") && (
        <img src={SassLogo} className="portfolio-single__icon" alt="icon" />
      )}
    </>
  );
}

function PortfolioImage({ params }) {
  return <div className={`portfolio-single__image-${params}`}></div>;
}

export default PortfolioSinglePage;
