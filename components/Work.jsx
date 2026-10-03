import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      My portfolio</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My latest work</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end & full-stack development.</motion.p>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-8'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='rounded-lg overflow-hidden border border-gray-300 dark:border-white/20 bg-white dark:bg-darkHover/30 group'>

                <div className='w-full aspect-video overflow-hidden bg-gray-100 dark:bg-darkHover'>
                    <img
                    src={project.bgImage}
                    alt={project.title}
                    className='w-full h-full object-cover object-top group-hover:scale-105 transition duration-500'
                    />
                </div>

                <div className='p-5'>
                    <h2 className='font-semibold text-gray-800 dark:text-white'>{project.title}</h2>
                    <p className='text-sm text-gray-600 dark:text-white/70 mb-4'>{project.description}</p>

                    <div className='flex items-center gap-3'>
                        {project.github && (
                            <a
                            href={project.github}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='text-sm font-medium border border-black dark:border-white rounded-full px-4 py-1.5 hover:bg-lime-300 dark:hover:bg-lime-300 dark:hover:text-black transition'>
                                GitHub
                            </a>
                        )}
                        {project.live && (
                            <a
                            href={project.live}
                            target='_blank'
                            rel="noopener noreferrer"
                            className='text-sm font-medium border border-black dark:border-white rounded-full px-4 py-1.5 hover:bg-lime-300 dark:hover:bg-lime-300 dark:hover:text-black transition'>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

            </motion.div>
        ))}
    </motion.div>

    <motion.a 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1.1, duration: 0.5 }}
    href="https://github.com/sujalpiprikar01" target="_blank" rel="noopener noreferrer" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
    </motion.a>

    </motion.div>
  )
}

export default Work