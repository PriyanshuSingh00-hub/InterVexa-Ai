import React from 'react'
import { BsRobot } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react"

function Footer() {
    return (
        <footer className='bg-white border-t border-gray-200 mt-20'>

            <div className='max-w-6xl mx-auto px-6 py-12 text-center'>

                <div className='flex justify-center items-center gap-3 mb-4'>
                    <div className='bg-black text-white p-2 rounded-lg'>
                        <BsRobot size={18} />
                    </div>
                    <h2 className='font-semibold text-lg'>InterVexa.AI</h2>
                </div>

                <p className='text-gray-600 text-sm md:text-base max-w-xl mx-auto mb-8'>
                    AI-powered interview preparation platform designed to improve communication skills, technical depth, and professional confidence.
                </p>

                <div className='flex justify-center gap-6 mb-8'>

                    <motion.a
                        href="https://github.com/PriyanshuSingh00-hub"
                        target="_blank"
                        whileHover={{ scale: 1.12, y: -3 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 900, damping: 20 }}
                        className='p-3 rounded-lg bg-gray-100 hover:bg-black duration-100'
                    >
                        <FaGithub className='text-gray-800 hover:text-white' />
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/priyanshu-singh-aa19a13a4/"
                        target="_blank"
                        whileHover={{ scale: 1.12, y: -3 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 900, damping: 20 }}
                        className='p-3 rounded-lg bg-gray-100 hover:bg-green-500 duration-100'
                    >
                        <FaLinkedin className='text-green-600 hover:text-white' />
                    </motion.a>

                </div>

                <p className='text-xs text-gray-400'>
                    © {new Date().getFullYear()} InterVexa.AI — Built with AI ⚡
                </p>

            </div>
        </footer>
    )
}

export default Footer