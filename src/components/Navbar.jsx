export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
          Foodie
        </h1>
        <div className="flex gap-6">
          <a
            href="/"
            className="font-poppins font-medium text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/menu"
            className="font-poppins font-medium text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            Menu
          </a>
          <a
            href="/admin"
            className="font-poppins font-medium text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
}