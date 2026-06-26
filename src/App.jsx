import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Preloader from './components/Preloader';
import WhatsAppButton from './components/WhatsAppButton';
import { startBackgroundFetch } from './utils/backgroundFetcher';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderFinish = () => {
    setShowPreloader(false);
    startBackgroundFetch(); // Kick off lazy caching for other pages
  };

  return (
    <Router>
      <ScrollToTop />
      {showPreloader && <Preloader onFinish={handlePreloaderFinish} />}
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
