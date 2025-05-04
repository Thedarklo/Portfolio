import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import img from '../img.jpeg';  
const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              <span className="block">Hi, I'm Kr. Rishabh</span>
              <span className="block text-blue-600 dark:text-blue-400">Software Developer</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Building robust web applications with a focus on performance, scalability, and user experience.
              Specialized in machine learning models and cybersecurity solutions.
            </p>
            
            {/* <div className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">LANGUAGE SKILLS</h2>
              
              <div className="mb-2">
                <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Mother tongue:</span> HINDI</p>
                <p className="text-gray-700 dark:text-gray-300"><span className="font-medium">Other languages:</span></p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="text-left py-2"></th>
                      <th className="text-center py-2 px-2" colSpan={2}>UNDERSTANDING</th>
                      <th className="text-center py-2 px-2" colSpan={2}>SPEAKING</th>
                      <th className="text-center py-2 px-2">WRITING</th>
                    </tr>
                    <tr>
                      <th className="text-left py-1"></th>
                      <th className="text-center py-1 px-2">Listening</th>
                      <th className="text-center py-1 px-2">Reading</th>
                      <th className="text-center py-1 px-2">Spoken production</th>
                      <th className="text-center py-1 px-2">Spoken interaction</th>
                      <th className="text-center py-1 px-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-2 font-medium">ENGLISH</td>
                      <td className="text-center py-2 px-2">B2</td>
                      <td className="text-center py-2 px-2">B2</td>
                      <td className="text-center py-2 px-2">B2</td>
                      <td className="text-center py-2 px-2">B2</td>
                      <td className="text-center py-2 px-2">B2</td>
                    </tr>
                    <tr className="border-t border-gray-200 dark:border-gray-700">
                      <td className="py-2 font-medium">GERMAN</td>
                      <td className="text-center py-2 px-2">A1</td>
                      <td className="text-center py-2 px-2">A1</td>
                      <td className="text-center py-2 px-2">A1</td>
                      <td className="text-center py-2 px-2">A1</td>
                      <td className="text-center py-2 px-2">A1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                Levels: A1 and A2: Basic user; B1 and B2: Independent user; C1 and C2: Proficient user
              </p>
            </div> */}
            
            <div className="flex space-x-4 mb-8">
              <a 
                href="mailto:Dev88393@gmail.com" 
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="https://github.com/Thedarklo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 px-6 rounded-lg transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
            
            <div className="flex space-x-5">
              <a 
                href="https://github.com/Thedarklo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="http://www.linkedin.com/in/krrishabh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:Dev88393@gmail.com" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl blur opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <img 
                  src={img}
                  alt="Developer portrait" 
                  className="w-full h-[480px] object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2
          }}
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-600 dark:text-gray-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;