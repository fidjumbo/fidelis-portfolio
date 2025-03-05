import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const About = () => {
    const MySkills = [
        "React", 
        "Javascript", 
        "Css", 
        "Tailwind",
];
  return (
    <section id='about' className=' flex items-center  justify-center py-20'>
        
        <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
            bg-clip-text text-center text-transparent'>About Me</h2>

            <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
                <p className='text-gray-300 mb-6'>Am a passionate developer with a drive for creating visually appealling 
                    and user-friendly web experience, and always ready to show my experience in solving problems
                </p>

                <div>
                  <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                    <h2 className='text-xl font-bold mb-4 text-center'>My skills</h2>
                    <div className='flex flex-wrap gap-3'>
                        {MySkills.map((tech, key) => (
                            <span 
                            key={key}
                            className='bg-blue-500/10 ml-11 mt-2 text-blue-500 py-1 px-3 rounded-full text-lg
                            hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                            >
                               {tech}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
            </div>
        </div>

        </RevealOnScroll>
    </section>
  )
}

export default About