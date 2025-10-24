import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center">
          
          {/* Left Side: Copyright */}
          {/* `order-3` makes it appear last on mobile, `md:order-1` first on desktop */}
          <div className="text-sm text-gray-500 dark:text-gray-400 font-poppins order-3 md:order-1 md:text-left">
            © 2025 Rapida — All Rights Reserved
          </div>

          {/* Middle: Links */}
          {/* `order-1` makes it appear first on mobile, `md:order-2` in middle on desktop */}
          <div className="flex justify-center gap-6 text-sm font-poppins text-gray-500 dark:text-gray-400 order-1 md:order-2">
            <Link 
              to="/about" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
            <a 
              href="https://github.com/rovxn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
          </div>

          {/* Right Side: Developer & Project Info */}
          {/* `order-2` for mobile, `md:order-3` for desktop */}
          <div className="text-sm text-gray-500 dark:text-gray-400 font-poppins md:text-right order-2 md:order-3">
            <p>
              Created by{' '}
              <a
                href="https://rovn.me"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Rovn.me
              </a>
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              As part of Entri Elevate FSD Mini Project
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}