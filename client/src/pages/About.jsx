import React from "react";
import "./About.css"; 
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import HeaderMain from "../components/HeaderMain";


const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <HeaderMain /> 

      <div className="about-container">
        <div className="about-header">
          <h1>Salut, je suis Victor 👋</h1>
          <p>Développeur Web en formation, passionné par le développement Full-Stack.</p>
          <p>
  Actuellement en formation de <strong>Développeur Web et Web Mobile</strong> à l’<strong>AFEC de Bayonne</strong>, je suis à la recherche d’une <strong>alternance à partir de septembre 2024</strong> (ou dès que possible) et ce jusqu’à <strong>décembre 2026</strong>.
</p>
<p>
  Mon objectif est de mettre en pratique les compétences que j’acquiers en formation, notamment en développement React, Node.js, MongoDB, ainsi qu’en intégration, conception d’API et déploiement d’applications web.
</p>

        </div>

    
        <div className="about-section">
          <h2>💻 Compétences Techniques</h2>
          <p>Langages & Outils que j'utilise :</p>
          <div className="skills-icons">
            <img src="https://skillicons.dev/icons?i=vscode,npm,git,github,javascript,nodejs,express,mongodb,postman,react,css,bootstrap,vercel" alt="Technologies" />
          </div>
        </div>

        <div className="about-section">
          <h2>📜 Expérience Professionnelle</h2>
          <ul>
            <li><strong>Entrepreneur Numérique</strong> - Simplon (2024)</li>
            <li><strong>Commercial Automobile</strong> - BHCar Mont de Marsan (2022)</li>
            <li><strong>Ouvrier Agroalimentaire</strong> - (2022 - 2023)</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🎓 Formation</h2>
          <ul>
            <li>📌 <strong>Développeur Web & Web Mobile</strong> (2024 - 2025)</li>
            <li>📌 <strong>Entrepreneur Numérique</strong> - Simplon (2024)</li>
            <li>📌 <strong>BTS NDRC</strong> - Mont de Marsan (2021 - 2022)</li>
            <li>📌 <strong>Bac Pro Commerce</strong> - Bayonne (2017 - 2021)</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🎮 Centres d’Intérêt</h2>
          <p>Moto, Jeux Vidéos, Animés, Sport.</p>
        </div>
      
        <div className="about-footer">
          <Link to="/contact" className="contact-button">Me Contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default About;