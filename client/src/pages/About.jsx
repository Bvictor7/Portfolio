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
          <p>Développeur Full-Stack passionné par la conception et le développement d'applications.</p>
          <p className="status-info">
            🎓 Actuellement en formation CDA (Sept 2025 - Déc 2026) • À la recherche d'une alternance
          </p>
        </div>

        <div className="about-section">
          <h2>🚀 Mon Parcours</h2>
          <ul>
            <li>
              <strong>Concepteur Développeur d'Applications (CDA) 🎯</strong><br />
              📅 Septembre 2025 - Décembre 2026 | AFEC Bayonne<br />
              Formation actuellement en cours. Spécialisation en architecture logicielle, gestion de projets complexes et développement d'applications avancées.
              <strong> À la recherche d'une alternance !</strong>
            </li>
            <li>
              <strong>Développeur Web et Web Mobile ✅</strong><br />
              📅 2024 - Juin 2025 | AFEC Bayonne<br />
              Formation terminée avec succès en juin 2025. Acquisition de compétences solides en développement Front-end et Back-end.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>💻 Compétences Techniques</h2>
          <p>Langages & Outils que j'utilise :</p>
          
          <p><strong>Front-end</strong></p>
          <div className="skills-icons">
            <img src="https://skillicons.dev/icons?i=react,javascript,css,bootstrap" alt="Front-end" />
          </div>
          
          <p><strong>Back-end</strong></p>
          <div className="skills-icons">
            <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,postman" alt="Back-end" />
          </div>
          
          <p><strong>Outils & DevOps</strong></p>
          <div className="skills-icons">
            <img src="https://skillicons.dev/icons?i=vscode,git,github,npm,vercel" alt="Outils" />
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
            <li>🎯 <strong>Concepteur Développeur d'Applications (en cours)</strong> - AFEC Bayonne (Septembre 2025 - Décembre 2026)</li>
            <li>✅ <strong>Développeur Web & Web Mobile</strong> - AFEC Bayonne (2024 - Juin 2025)</li>
            <li>📌 <strong>Entrepreneur Numérique</strong> - Simplon (2024)</li>
            <li>📌 <strong>BTS NDRC</strong> - Mont de Marsan (2021 - 2022)</li>
            <li>📌 <strong>Bac Pro Commerce</strong> - Bayonne (2017 - 2021)</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🎮 Centres d'Intérêt</h2>
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