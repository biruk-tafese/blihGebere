import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextInstance";
import logo from "/assets/logo.jpeg";
import { MenuIcon, XIcon } from "lucide-react";

const Header = () => {
  const { user, logout } = useContext(AuthContext); // Use AuthContext for user and logout
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
  const navigate = useNavigate();

  // Debugging: Log the user object to inspect its structure
  console.log("User Object:", user);

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

  return (
    <header className="bg-green-200 w-full shadow-md flex items-center justify-between py-4 px-6">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="BlihGebere Logo"
            className="h-25 w-25 rounded-2xl shadow-lg mx-3"
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
      <nav
        className={`absolute inset-y-0 right-0 bg-green-200 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full hidden"
        } transition-transform duration-300 w-1/2 h-full md:hidden`}
      >
        <div className="flex flex-col h-full justify-center gap-4 text-2xl items-center">
          <button
            onClick={() => {
              handleCropPredictionClick();
              closeMenu();
            }}
            className="text-green-800 text-lg font-medium hover:text-green-300"
          >
            Crop Prediction
          </button>
          <Link to="/resources" className="text-green-800 text-lg font-medium hover:text-green-300" onClick={closeMenu}>
            Resources
          </Link>
          <Link to="/support" className="text-green-800 text-lg font-medium hover:text-green-300" onClick={closeMenu}>
            Support
          </Link>
          <Link to="/about" className="text-green-800 text-lg font-medium hover:text-green-300" onClick={closeMenu}>
            About
          </Link>
          {user?.user ? (
            <>
              {/* Display full name or fallback */}
              <p className="text-green-800 text-lg font-medium">
                {user.user.full_name || "User"}
              </p>

              <button
                onClick={() => {
                  handleLogout();
                  closeMenu();
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 mt-4"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 mt-4" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/signup" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 mt-2" onClick={closeMenu}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:space-x-8">
        <button
          onClick={handleCropPredictionClick}
          className="text-green-800 text-lg font-medium hover:text-green-300"
        >
          Crop Prediction
        </button>
        <Link to="/resources" className="text-green-800 text-lg font-medium hover:text-green-300">
          Resources
        </Link>
        <Link to="/support" className="text-green-800 text-lg font-medium hover:text-green-300">
          Support
        </Link>
        <Link to="/about" className="text-green-800 text-lg font-medium hover:text-green-300">
          About
        </Link>
        {user?.user ? (
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 ml-4"
            >
              {user.user.full_name || "User"} <span className="ml-2">▼</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <p className="block px-4 py-2 text-gray-800">
                  {user.user.phone_number || "No Phone Number"}
                </p>
                <Link
                  to="/profile-settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile Settings
                </Link>
                <Link
                  to="/chat-history"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  See Chat History
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700">
              Login
            </Link>
            <Link to="/signup" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 ml-4">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;