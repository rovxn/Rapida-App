export default function About() {
  return (
    // Standard page wrapper
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      {/* Container with padding for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Themed Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins text-center mb-8">
            About Rapida
          </h2>
          
          {/* Themed Paragraph with updated data */}
          <p className="font-poppins text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            Rapida is a modern food-ordering platform built as part of the 
            Entri Elevate FSD Mini Project. It's designed to showcase a 
            smooth, intuitive, and aesthetic user experience. This application 
            demonstrates modern frontend architecture using React, 
            Redux for state management, and Tailwind CSS for styling.
          </p>

        </div>
      </div>
    </section>
  );
}