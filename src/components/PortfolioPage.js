import { Link } from "react-router-dom";

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <PortfolioLayout />
    </div>
  );
}

function PortfolioLayout() {
  return (
    <div className="portfolio-page__layout">
      <PortfolioCard index={1} title={"Kost Catleya"} />
      <PortfolioCard index={2} title={"Weather Whisper"} />
      <PortfolioCard index={3} title={"E Arsip"} />
      <PortfolioCard index={4} title={"Atma Jogja Rental"} />
      <PortfolioCard index={5} title={"Warehouse System"} />
    </div>
  );
}

function PortfolioCard({ index, title }) {
  return (
    <>
      <Link
        to={`/portfolio/${index}`}
        className={`portfolio-page__link portfolio-page__link-${index}`}
      >
        <div className={`portfolio-page__format portfolio-page__${index}`}>
          <div className={`portfolio-page__${index}--filter`}></div>
          <div className={`portfolio-page__${index}--images`}></div>
          <PortfolioIndexLayout index={index} title={title} />
        </div>
      </Link>
    </>
  );
}

function PortfolioIndexLayout({ index, title }) {
  return (
    <div className={`portfolio-page__${index}--layout`}>
      <div className={`portfolio-page__${index}--layout__wrapper`}>
        <p className="text--portfolio-page__title">{title}</p>
        <p className="text--portfolio-page__subtitle">
          More Information &rarr;
        </p>
      </div>
    </div>
  );
}

export default PortfolioPage;
