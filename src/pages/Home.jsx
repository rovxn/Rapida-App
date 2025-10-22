import React from 'react'; // Added import for SVGs

// Simple SVG Icons for the features section
const FeatureIconFresh = () => (
  <svg
    className="w-10 h-10 text-gray-700 dark:text-gray-300"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.833 15.75 12 17 9.167 18.25 12zM18 17.25l-1.25 2.5-1.25-2.5 1.25-2.5 1.25 2.5z"
    />
  </svg>
);

const FeatureIconFast = () => (
  <svg
    className="w-10 h-10 text-gray-700 dark:text-gray-300"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    />
  </svg>
);

const FeatureIconQuality = () => (
  <svg
    className="w-10 h-10 text-gray-700 dark:text-gray-300"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    />
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gray-100 rounded-full filter blur-3xl opacity-70 dark:bg-gray-800 dark:opacity-50" />
          <div className="absolute -bottom-1/4 -right-1/4 w-80 h-80 bg-gray-100 rounded-full filter blur-3xl opacity-70 dark:bg-gray-800 dark:opacity-50" />
        </div>

        <div className="text-center py-32 md:py-48">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tighter mb-4 font-poppins">
            Welcome to Rapida 🍽️ {/* <-- Name updated here */}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-poppins">
            Browse our delicious menu and order your favorites now. Fresh, fast,
            and ready for you.
          </p>
          <a
            href="/menu"
            className="mt-10 inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-poppins font-semibold 
                      hover:bg-gray-700 shadow-lg hover:shadow-xl 
                      dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
                      transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Our Menu
          </a>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 mb-4">
                <FeatureIconFresh />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins mb-2">
                Fresh Ingredients
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-poppins">
                We source the best local ingredients for every dish.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 mb-4">
                <FeatureIconFast />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-poppins">
                Hot and fresh to your door, faster than you think.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 mb-4">
                <FeatureIconQuality />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white font-poppins mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-poppins">
                Every meal is prepared with love and high standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}