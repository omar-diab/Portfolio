import { education } from "@/data/content";
import { MainTitle } from "../";

const Education = () => {
  return (
    <section id="education" className="w-full h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <MainTitle 
          title="EDUCATION"
        />

        <div className="max-w-lg" data-aos="fade-up" data-aos-delay="150">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b-2 border-primary p-4 mb-4 rounded-lg"
            >
              <div>
                <h3 className="text-white text-lg mb-2">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.school}</p>
                <p className="text-gray-400 text-sm">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
