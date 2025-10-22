export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          
          {/* Left Side: Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 font-poppins">
            © 2025 Rapida — All Rights Reserved {/* <-- Name updated here */}
          </div>

          {/* Right Side: Developer & Project Info */}
          <div className="text-sm text-gray-500 dark:text-gray-400 font-poppins text-center sm:text-right">
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