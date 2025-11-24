import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Procedures from './pages/Procedures';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main content wrapper to handle page transitions
const MainContent = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* 
         Padding top adjusted with relative units (pt-40 = 10rem).
         This ensures that when html font-size increases on large screens, 
         the top padding increases proportionally to accommodate the larger header.
      */}
      <main className="flex-grow pt-40 md:pt-44"> 
        <div key={location.pathname} className="animate-fade-in-up">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/procedimientos" element={<Procedures />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <MainContent />
    </HashRouter>
  );
};

export default App;