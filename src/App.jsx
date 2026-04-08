import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { OptInPage } from './pages/OptIn/OptInPage';
import { VideoPage } from './pages/Video/VideoPage';
import { ConsultationPage } from './pages/Consultation/ConsultationPage';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<OptInPage />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
