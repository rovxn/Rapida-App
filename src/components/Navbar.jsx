import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icons for the theme ---

// Sun icon for Light Mode
const IconSun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z"
    />
  </svg>
);

// Moon icon for Dark Mode
const IconMoon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

// Hamburger menu icon
const IconMenu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// Close (X) icon
const IconClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
// --- End of SVG Icons ---

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  // Default to system preference, or light mode
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    // Apply dark mode to <html> element
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Reusable nav link array
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/admin', label: 'Admin' },
  ];

  return (
    // Navbar container: fixed top, full width, z-50 to be on top
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      {/* Container to constrain content width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl text-gray-900 dark:text-white font-poppins tracking-tighter"
            onClick={() => setOpen(false)} // Close mobile menu on logo click
          >
            Rapida
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group font-poppins font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 bg-gray-900 dark:bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right-side Icons */}
          <div className="flex gap-4 items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle Theme"
            >
              {darkMode ? <IconSun /> : <IconMoon />}
            </button>

            {/* Mobile Menu Toggle */}
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
      {/* Conditionally render with a transition */}
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
              className="font-poppins font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-center w-full p-3 rounded-lg"
              onClick={() => setOpen(false)} // Close menu on link click
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}