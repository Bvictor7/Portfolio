import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import HeaderMain from "../components/HeaderMain";

const Home = () => {
  return (
    <div className="home-container">
      <HeaderMain /> {/* Header fixe avec menu burger */}

      {/* Overlay qui assombrit légèrement l'arrière-plan */}
      <div className="overlay"></div>

      {/* Contenu principal */}
      <div className="content">
        <h1>Je suis Victor</h1>
        <h2>Developpeur web</h2>
        <p>
Passionné par la création d’expériences numériques, je conçois des applications web modernes, performantes et intuitives. Fort d’une expertise sur la stack MERN (MongoDB, Express, React, Node.js), je développe des solutions sur mesure, de l’architecture backend à l’interface utilisateur.
Je m’engage à livrer un code propre, évolutif, et à collaborer efficacement en équipe pour répondre aux besoins concrets des utilisateurs. Curieux, rigoureux et autonome, je mets un point d’honneur à rester à jour sur les dernières technologies du web.
        </p>
        <div>
          <Link to="/portfolio" className="btn btn-primary mx-2">
            Mon Portfolio
          </Link>
          <Link to="/contact" className="btn btn-secondary mx-2">
            Contactez-moi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;




