
import { skills } from '@/data/skills'
import { MainTitle } from '../'

const Skills = () => {
  return (
    <section 
      id="skills" 
      className="w-full h-screen py-20 px-6"
    >
      <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
        <MainTitle 
          title="SKILLS"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4" data-aos="fade-up" data-aos-delay="150">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="border-b-2 border-primary p-3 rounded-lg"
            >
              <p className="text-white text-center font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills