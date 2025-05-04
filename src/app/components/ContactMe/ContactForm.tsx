
const ContactForm = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1" data-aos="fade-up" data-aos-delay="100">
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Your Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-1" data-aos="fade-up" data-aos-delay="100">
          <label className="text-sm text-gray-600 dark:text-gray-400">
            Subject
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary"
            placeholder="Enter subject"
          />
        </div>
      </div>

      <div className="space-y-1" data-aos="fade-up" data-aos-delay="150">
        <label className="text-sm text-gray-600 dark:text-gray-400">
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-1" data-aos="fade-up" data-aos-delay="200">
        <label className="text-sm text-gray-600 dark:text-gray-400">
          Message
        </label>
        <textarea
          rows={3}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary resize-none"
          placeholder="Your message..."
        />
      </div>

      <button
        className="w-full block px-4 py-2 border-l-2 border-b-2 border-white text-white hover:text-primary hover:border-primary rounded-lg shadow-lg text-sm font-medium transition-colors duration-500"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        SEND MESSAGE
      </button>
    </div>
  );
};

export default ContactForm;
