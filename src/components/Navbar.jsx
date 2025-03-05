import React, { useEffect } from 'react'

const Navbar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen])
  return (
    <nav className="top-0 z-40 fixed bg-[rgba(10, shadow-lg backdrop-blur-lg border-white/10 border-b w-full 10, 10, 0.8)]">
        <div className='mx-auto px-4 max-w-5xl'>
         <div className='flex justify-between items-center h-16'>
           <a href='#home'
           className='font-mono font-bold text-white text-xl'
           > 
           
           FID<span className='text-blue-500'>ELIS</span>  </a>

           <div className='md:hidden z-40 relative w-7 h-5 cursor-pointer' 
           onClick={() => setMenuOpen((prev) => !prev)}
           >
            &#9776;
           </div>

           <div className='hidden md:flex items-center space-x-8'>
               <a href="#home" 
               className='text-gray-300 hover:text-white transition-colors'
               > 
               Home
               </a>
               <a href="#about" 
               className='text-gray-300 hover:text-white transition-colors'
               > 
               About
               </a>
               <a href="#projects" 
               className='text-gray-300 hover:text-white transition-colors'
               > 
               Projects
               </a>
               <a href="#contact" 
               className='text-gray-300 hover:text-white transition-colors'
               > 
               Contact
               </a>
           </div>
         </div>
        </div>
    </nav>
  )
}

export default Navbar