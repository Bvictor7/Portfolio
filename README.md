# Victor Belahcene – Web Developer Portfolio

A modern, responsive portfolio website built with React, showcasing the skills, projects, and experience of Victor Belahcene. This project demonstrates expertise in the MERN stack and a passion for creating intuitive, high-performance web applications.

## Features

- **Home Page:** Introduction and quick navigation to portfolio and contact sections.
- **About Page:** Detailed background, technical skills, professional experience, education, and interests.
- **Portfolio Page:** Gallery of projects with images, descriptions, and links to live demos or repositories.
- **Contact Page:** Contact form with email integration (via EmailJS) for direct communication.
- **Responsive Design:** Optimized for all devices using Bootstrap and custom CSS.
- **Modern Stack:** Built with React, React Router, Bootstrap, and more.

## Technologies Used

- React 18
- React Router DOM
- Bootstrap 5
- EmailJS
- React Icons
- React Helmet Async
- Axios

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd portfolio/client
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/pages/` – Main pages: Home, About, Portfolio, Contact
- `src/components/` – Reusable UI components (Header, Navbar, SkillCard, etc.)
- `src/content_option.js` – Portfolio data and meta information
- `public/assets/` – Images and static assets

## Customization

- Update your personal information, skills, and project data in `src/pages/About.jsx` and `src/content_option.js`.
- Add or update project images in `public/assets/LogoBelahceneVictor/`.
- Configure EmailJS in `src/pages/Contact.jsx` with your own service and template IDs.

## Deployment

To build the app for production:
```bash
npm run build
```
The optimized build will be in the `build/` folder, ready for deployment to your preferred hosting service.

## Contact

For questions, feedback, or collaboration opportunities:
- **Email:** belahcene2@gmail.com
- **GitHub:** https://github.com/Bvictor7


---

© 2024 Victor Belahcene. All rights reserved.
