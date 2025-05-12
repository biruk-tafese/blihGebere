import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextInstance";
import logo from "/assets/logo.jpeg";
import { MenuIcon, XIcon, Settings2Icon, MessageCircleCode, LogOut } from "lucide-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Use AuthContext for user and logout
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const dropdownRef = useRef(null); // Ref for dropdown to detect outside clicks
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout(); // Call logout function
    navigate("/login"); // Redirect to login page
  };

  const handleCropPredictionClick = () => {
    if (user?.token) {
      navigate("/crop-prediction");
    } else {
      alert("Please log in to access crop prediction!");
      navigate("/login");
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-green-200 w-full shadow-md flex items-center justify-between py-4 px-6">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="BlihGebere Logo"
            className="h-12 w-12 rounded-full shadow-lg mx-3"
          />
          <span className="text-green-800 text-2xl font-bold">BlihGebere</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center z-50">
        <button
          onClick={toggleMenu}
          className="h-8 w-8 hover:cursor-pointer focus:outline-none transition-transform duration-300"
        >
          {isOpen ? <XIcon className="text-red-600" /> : <MenuIcon className="text-green-800" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav
          className="absolute inset-0 bg-green-200 z-50 w-full h-full transition-transform duration-300 md:hidden"
        >
          {/* Close Icon */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-red-600"
          >
            <XIcon className="h-8 w-8" />
          </button>

          <div className="flex flex-col h-full justify-center gap-4 text-lg items-center">
            <button
              onClick={() => {
                handleCropPredictionClick();
                closeMenu();
              }}
              className="text-green-800 font-medium hover:text-green-500"
            >
              Crop Prediction
            </button>
            <Link
              to="/resources"
              className="text-green-800 font-medium hover:text-green-500"
              onClick={closeMenu}
            >
              Resources
            </Link>
            <Link
              to="/support"
              className="text-green-800 font-medium hover:text-green-500"
              onClick={closeMenu}
            >
              Support
            </Link>
            <Link
              to="/about"
              className="text-green-800 font-medium hover:text-green-500"
              onClick={closeMenu}
            >
              About
            </Link>
            {user?.user ? (
              <div className="flex flex-col items-center w-[40%]">
                {/* Dropdown for Mobile */}
                <button
                  onClick={toggleDropdown}
                  className="text-green-700 font-medium bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100"
                >
                  {user.user.full_name || "User"}
                </button>
                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4"
                  >
                    {/* Profile Icon */}
                    <div className="flex flex-col items-center mb-4">
                      <div className="h-16 w-16 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl font-bold">
                        {user.user.full_name?.charAt(0).toUpperCase() || "U"}
                      </div>
                      <p className="mt-2 text-lg font-semibold text-gray-800">
                        {user.user.full_name || "User"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {user.user.phone_number || "No Phone Number"}
                      </p>
                    </div>

                    {/* Dropdown Links */}
                    <Link
                      to="/profile-settings"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings2Icon className="h-5 w-5 mr-3 text-green-800" />
                      Profile Settings
                    </Link>
                    <Link
                      to="/chat-history"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <MessageCircleCode className="h-5 w-5 mr-3 text-green-800" />
                      Chat History
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                    >
                      <LogOut className="h-5 w-5 mr-3 text-red-600" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-green-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-700"
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-800 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-700"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:space-x-8">
        <button
          onClick={handleCropPredictionClick}
          className="text-green-800 text-lg font-medium hover:text-green-500"
        >
          Crop Prediction
        </button>
        <Link
          to="/resources"
          className="text-green-800 text-lg font-medium hover:text-green-500"
        >
          Resources
        </Link>
        <Link
          to="/support"
          className="text-green-800 text-lg font-medium hover:text-green-500"
        >
          Support
        </Link>
        <Link
          to="/about"
          className="text-green-800 text-lg font-medium hover:text-green-500"
        >
          About
        </Link>
        {user?.user ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-green-800 text-white px-4 py-2 border-gray-300 rounded-lg font-bold hover:bg-green-700 ml-4"
            >
              {user.user.full_name || "User"} <span className="ml-2">▼</span>
            </button>
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-4"
              >
                {/* Profile Icon */}
                <div className="flex flex-col items-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl font-bold">
                    {user.user.full_name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <p className="mt-2 text-lg font-semibold text-gray-800">
                    {user.user.full_name || "User"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.user.phone_number || "No Phone Number"}
                  </p>
                </div>

                {/* Dropdown Links */}
                <Link
                  to="/profile-settings"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                  onClick={() => setDropdownOpen(false)}
                >
                  <Settings2Icon className="h-5 w-5 mr-3 text-green-800" />
                  Profile Settings
                </Link>
                <Link
                  to="/chat-history"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                  onClick={() => setDropdownOpen(false)}
                >
                  <MessageCircleCode className="h-5 w-5 mr-3 text-green-800" />
                  Chat History
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut className="h-5 w-5 mr-3 text-red-600" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 ml-4"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;