import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';

import HomePage from './pages/home_page';
import Prediction from './pages/prediction';
import Resources from './components/resources';
import Support from './pages/support';
import About from './pages/about';
import Login from './pages/login';
import Signup from './pages/register';
import Header from './components/header';
import NotFound from './pages/NotFound';
import Footer from './components/footer';
import FAQ from './pages/FAQ';
import GettingStartedGuide from './pages/getStartedGuide';
import Videos from './pages/Videos';
import Profile_settings from './pages/Profile_settings';
import Create_user from './admin/Create_user';
import View_users from './admin/View_users';
import AdminLogin from './admin/admin_login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContextInstance';


function AdminRoute({ children }) {
  const { isAdminAuthenticated } = useContext(AuthContext);
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

function useIsAdminRoute() {
  const location = useLocation();
  return location.pathname.startsWith('/admin');
}

function AppContent() {
  const isAdminRoute = useIsAdminRoute();

  return (
    <>
      {!isAdminRoute && <Header />}
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
        <Route path="/profile-settings" element={<Profile_settings />} />

        {/* Admin login route */}
        <Route path="/admin/*" element={<AdminLogin />} />

        {/* Protected admin routes with sidebar */}
        <Route
          path="/createuser"
          element={
            <AdminRoute>
              <Create_user />
            </AdminRoute>
          }
        />
        <Route
          path="/view-users"
          element={
            <AdminRoute>
              <View_users />
            </AdminRoute>
          }
        />

        {/* Catch-all route for 404 Not Found */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;