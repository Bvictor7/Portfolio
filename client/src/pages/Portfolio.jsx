import React from "react";
import "./Portfolio.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeaderMain from "../components/HeaderMain";
import { dataportfolio, meta } from "../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <HeaderMain />

      <div className="portfolio-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <h1 className="portfolio-title">Mon Portfolio</h1>

        <div className="portfolio-grid">
          {dataportfolio.map((data, i) => (
            <div key={i} className="portfolio-item">
              <img src={data.img} alt={`Projet ${i}`} />
              <div className="overlay">
                <p>{data.description}</p>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  Voir le projet
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Portfolio;

