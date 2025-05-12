import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home_page';
import Prediction from './pages/prediction'; // Create this component
import Resources from './components/resources'; // Create this component
import Support from './pages/support'; // Create this component
import About from './pages/about'; // Create this component
import Login from './pages/login'; // Create this component
import Signup from './pages/register'; // Create this component
import Header from './components/header'; // Import your Header component
import NotFound from './pages/NotFound';
import Footer from './components/footer';
import FAQ from './pages/FAQ';
import GettingStartedGuide from './pages/getStartedGuide';
import Videos from './pages/Videos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crop-prediction" element={<Prediction />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/getting-started" element={<GettingStartedGuide />} />
        <Route path="/video-tutorials" element={<Videos />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;