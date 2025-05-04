
const About = () => {
  return (
    <section id="about" className="w-full h-full py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-start mb-5" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl font-bold text-white mb-4">
            ABOUT <span className="text-primary">ME</span>
          </h2>
          <div className="w-28 h-1 bg-blue-600"></div>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <p className="text-white leading-8 text-lg border-b-2 border-primary p-4 rounded-lg">
            I am a second-year Software Engineering student at Istinye University
            and a passionate full-stack developer. Starting with front-end
            development, I mastered creating engaging, user-focused interfaces
            before expanding into back-end development to build robust and
            scalable applications with over two years of dedicated study and
            hands-on experience, I enjoy bringing ideas to life from front to
            back and excel at communicating and collaborating effectively to
            drive projects forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
