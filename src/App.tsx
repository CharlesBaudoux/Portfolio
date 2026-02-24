import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import HeroSection from './components/organisms/HeroSection';
import SkillsGrid from './components/organisms/SkillsGrid';
import EducationTimeline from './components/organisms/EducationTimeline';
import ProjectsShowcase from './components/organisms/ProjectsShowcase';
import Footer from './components/organisms/Footer';
import ProjectViewer from './components/organisms/ProjectViewer';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Si l'URL contient #projects (ou tout autre id après le #)
    if (location.hash === '#projects') {
      // On attend un tout petit peu que les composants soient rendus
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // Petit délai de 150ms pour laisser le temps au DOM de se charger
    }
  }, [location]); // Se déclenche à chaque changement de page ou de hash

  return (
    <div className="min-h-screen bg-dark-bg text-text-primary">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SkillsGrid />
                <EducationTimeline />
                <ProjectsShowcase />
              </>
            }
          />
          <Route path="/viewer" element={<ProjectViewer />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;