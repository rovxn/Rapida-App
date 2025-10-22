export default function Navbar() {
  return (
    // Used a darker background for dark mode and a slightly stronger shadow
    <nav className="bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo: 
          - Changed text to "Rapida"
          - Wrapped in an <a> tag to link to home
          - Styled with tracking-tighter for a modern "logotype" feel
        */}
        <a
          href="/"
          className="font-bold text-2xl text-gray-900 dark:text-white font-poppins tracking-tighter"
        >
          Rapida
        </a>

        {/* Navigation Links:
          - Increased gap-8 for more breathing room
          - Added `relative` and `group` to each link to allow for the animation
        */}
        <div className="flex gap-8">
          <a
            href="/"
            className="relative group font-poppins font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            Home
            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 h-0.5 bg-gray-900 dark:bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/menu"
            className="relative group font-poppins font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            Menu
            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 h-0.5 bg-gray-900 dark:bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="/admin"
            className="relative group font-poppins font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-3D00"
          >
            Admin
            {/* Animated underline */}
            <span className="absolute left-0 -bottom-1 h-0.5 bg-gray-900 dark:bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}