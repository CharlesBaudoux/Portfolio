import { Routes, Route } from 'react-router-dom';
import Navbar from './components/organisms/Navbar';
import HeroSection from './components/organisms/HeroSection';
import SkillsGrid from './components/organisms/SkillsGrid';
import EducationTimeline from './components/organisms/EducationTimeline';
import ProjectsShowcase from './components/organisms/ProjectsShowcase';
import Footer from './components/organisms/Footer';
import ProjectViewer from './components/organisms/ProjectViewer';

function App() {
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
