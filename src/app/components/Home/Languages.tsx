import { languages } from "@/data/content";
import { MainTitle } from "../";

const Languages = () => {
  return (
    <section id="languages" className="w-full h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <MainTitle 
          title="LANGUAGES"
        />
        <div className="max-w-lg" data-aos="fade-up" data-aos-delay="150">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b-2 border-primary p-4 mb-4 rounded-lg"
            >
              <span className="text-white text-lg">{language.name}</span>
              <span className="text-gray-400 text-sm">{language.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
