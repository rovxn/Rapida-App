export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tighter mb-4">
          Welcome to Foodie 🍽️
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-poppins">
          Browse our delicious menu and order your favorites now! Fresh, fast,
          and ready for you.
        </p>
        <a
          href="/menu"
          className="mt-8 inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-poppins font-semibold hover:bg-yellow-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Our Menu
        </a>
      </div>
    </div>
  );
}