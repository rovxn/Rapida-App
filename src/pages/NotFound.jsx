import { Link } from 'react-router-dom';

export default function NotFound() {
  
  // The primary neutral button style (as a <Link>)
  const primaryButtonLink = 
    `inline-block bg-gray-900 text-white px-8 py-3 rounded-lg 
     font-poppins font-semibold text-center
     hover:bg-gray-700 shadow-lg hover:shadow-xl 
     dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
     transition-all duration-300 transform hover:-translate-y-0.5`;

  return (
    // Standard page wrapper
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      {/* Container with padding for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-md mx-auto text-center">
          
          {/* Large "404" for visual emphasis */}
          <h1 className="text-9xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tighter font-poppins">
            404
          </h1>
          
          {/* Themed Sub-heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-tight font-poppins mt-4">
            Page Not Found
          </h2>
          
          {/* Themed Paragraph */}
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-poppins mb-10">
            The page you are looking for does not exist or has been moved.
          </p>
          
          {/* Themed Button */}
          <Link to="/" className={primaryButtonLink}>
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}