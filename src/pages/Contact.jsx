export default function Contact() {
  
  // Standard themed input style
  const inputStyle = `
    font-poppins bg-white dark:bg-gray-700 border border-gray-300 
    dark:border-gray-600 p-3 rounded-lg focus:outline-none 
    focus:ring-2 focus:ring-gray-900 dark:focus:ring-white 
    transition-shadow w-full`;
  
  // Standard themed button style
  const primaryButton = `
    w-full bg-gray-900 text-white px-8 py-3 rounded-lg 
    font-poppins font-semibold text-center
    hover:bg-gray-700 shadow-lg hover:shadow-xl 
    dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
    transition-all duration-300 transform hover:-translate-y-0.5`;

  return (
    // Standard page wrapper
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      {/* Container with padding for fixed navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-xl mx-auto">
          
          {/* Themed Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight font-poppins mb-4">
              Contact Us
            </h2>
            <p className="font-poppins text-lg text-gray-600 dark:text-gray-300">
              Have questions, feedback, or want to see the code? 
              We’d love to hear from you.
            </p>
          </div>

          {/* Themed Form Card */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent successfully!');
            }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8"
          >
            <div className="flex flex-col gap-5 mb-6">
              <input type="text" placeholder="Your Name" required className={inputStyle} />
              <input type="email" placeholder="Your Email" required className={inputStyle} />
              <textarea placeholder="Your Message" required rows="5" className={inputStyle}></textarea>
            </div>
            <button type="submit" className={primaryButton}>
              Send Message
            </button>
          </form>

          {/* Themed Contact Details (Updated Data) */}
          <div className="mt-12 text-center font-poppins text-gray-600 dark:text-gray-300">
            <p className="text-lg">You can also reach out directly at:</p>
            <a 
              href="mailto:contact@rovn.me"
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              contact@rovn.me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}