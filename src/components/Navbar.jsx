import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/authSlice';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// --- SVG Icons for the theme ---

// Sun icon for Light Mode
const IconSun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z" />
  </svg>
);

// Moon icon for Dark Mode
const IconMoon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

// Hamburger menu icon
const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Close (X) icon
const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
// --- End of SVG Icons ---

export default function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // Use .reduce() to get the total item count
  const totalItemCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Set initial state from localStorage or system preference
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedMode !== null ? savedMode : systemPrefersDark);
  }, []);

  useEffect(() => {
    // Apply dark mode to <html> and save to localStorage
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/cart', label: 'Cart' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  // Helper for Cart Link content
  const CartLinkContent = () => (
    <div className="flex items-center gap-1.5">
      Cart
      {totalItemCount > 0 && (
        <span className="flex items-center justify-center w-5 h-5 bg-gray-900 text-white text-xs dark:bg-white dark:text-gray-900 font-bold rounded-full">
          {totalItemCount}
        </span>
      )}
    </div>
  );
  
  // Reusable themed link style
  const themedLink = "relative group font-poppins font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300";
  const underline = "absolute left-0 -bottom-1 h-0.5 bg-gray-900 dark:bg-white w-0 transition-all duration-300 group-hover:w-full";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl text-gray-900 dark:text-white font-poppins tracking-tighter"
            onClick={() => setOpen(false)}
          >
            Rapida
          </Link>

          {/* Desktop Nav Links & Auth */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={themedLink}>
                {link.label === 'Cart' ? <CartLinkContent /> : link.label}
                <span className={underline}></span>
              </Link>
            ))}

            {/* Conditional Admin Link */}
            {isAuthenticated && (
              <Link to="/admin" className={themedLink}>
                Admin
                <span className={underline}></span>
              </Link>
            )}

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <>
                <span className="font-poppins text-sm text-gray-600 dark:text-gray-300">
                  Hi, {user?.name || 'User'}
                </span>
                <button
                  onClick={() => dispatch(logout())}
                  className="font-poppins text-sm font-semibold text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-gray-900 text-white px-4 py-1.5 rounded-md font-poppins text-sm font-semibold hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Right-side Icons (Dark Mode & Mobile Toggle) */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle Theme"
            >
              {darkMode ? <IconSun /> : <IconMoon />}
            </button>

            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-xl transition-all duration-300 ease-in-out
          ${open ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'} 
          overflow-hidden`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-poppins font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full p-3 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              {link.label === 'Cart' ? <CartLinkContent /> : link.label}
            </Link>
          ))}
          
          {/* Conditional Admin Link (Mobile) */}
          {isAuthenticated && (
            <Link
              to="/admin"
              className="font-poppins font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 w-full p-3 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Admin
            </Link>
          )}

          {/* Auth Buttons (Mobile) */}
          {isAuthenticated ? (
            <button
              onClick={() => {
                dispatch(logout());
                setOpen(false);
              }}
              className="font-poppins font-semibold text-red-600 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 w-full p-3 rounded-lg text-center"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="font-poppins font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 w-full p-3 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}