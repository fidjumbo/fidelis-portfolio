import React from 'react'
import RevealOnScroll from '../RevealOnScroll'


const Projects = () => {
  return (
    <section id='projects' className=' flex items-center justify-center py-20'>
     
     <RevealOnScroll>
     <div className='max-w-5xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400
            bg-clip-text text-transparent text-center'>
                Featured Projects
            </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
           
           <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>Admin Dashboard</h3>
            <p className='text-gray-400 mb-4'>A modern responsive admin panel that allows user to monitor various 
                aspects of the application.</p>
            <div className='flex gap-1 mt-2'>
                <p className=' text-blue-500 '>React Tailwind FramerMotion Recharts</p>
                
            </div>

            <div>
                <a href="https://admin-dashboard-alpha-six-38.vercel.app/" 
                 target='blank'
                >
                    <img src="/admin.png" alt="" className='my-6' />
                </a>
                <a href="https://github.com/fidjumbo/admin-dashboard.git" className='text-blue-400 
                // hover:text-blue-300 mt-5 transition-colors'
                 target='blank'
                >Source Code → </a>
            </div>
           </div>

           <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>Movie Website</h3>
            <p className='text-gray-400 mb-4'>A responsive movie landing page that displays movie 
                from a movie API, movies can be searched on the search bar to be displayed from the movie API, and finally
                has a trending section displaying the most searched movies based on what users search the most.</p>
            <div className='flex gap-1 mt-2'>
                <p className=' text-blue-500 '>React Tailwind TMDB API</p>
                
            </div>

            <div>
                <a href="https://snazzy-panda-c5196d.netlify.app/"
                 target='blank'
                >
                    <img src="/hero.png" alt="" className='mb-4' />
                </a>
                <a href="https://github.com/fidjumbo/movie-website.git" className='text-blue-400 
                // hover:text-blue-300 mt-5 transition-colors'
                 target='blank'
                >Source Code → </a>
            </div>
           </div>

           <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
           hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all'>
            <h3 className='text-xl font-bold mb-2'>Business Landing Page</h3>
            <p className='text-gray-400 mb-4'>A modern mobile first landing page with good UI, 
                and great animation for a business.</p>
            <div className='flex gap-1 mt-2'>
                <p className=' text-blue-500 '>React Tailwind Framer Motion</p>
                
            </div>

            <div>
                <a href="https://business-landing-page-olive.vercel.app/"
                 target='blank'
                >
                    <img src="/business.png" alt="" className='my-4' />
                </a>
                <a href="https://github.com/fidjumbo/Business-landing-page.git" className='text-blue-400 
                // hover:text-blue-300 mt-5 transition-colors' 
                target='blank'
                >Source Code → </a>
            </div>
           </div>
        </div>
     </div>

     </RevealOnScroll>
    </section>
  )
}

export default Projects