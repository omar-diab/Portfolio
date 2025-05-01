import { experience } from "@/app";
import { MainTitle } from "../Ui";


const Experience = () => {
  return (
    <section id="experience" className="w-full h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <MainTitle 
          title="EXPERIENCE"
        />

        <div className="max-w-lg" data-aos="fade-up" data-aos-delay="150">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b-2 border-primary p-4 mb-4 rounded-lg"
            >
              <div>
                <h3 className="text-white text-lg mb-2">{exp.company}</h3>
                <p className="text-gray-400 text-sm">{exp.position}</p>
                <p className="text-gray-400 text-sm">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
