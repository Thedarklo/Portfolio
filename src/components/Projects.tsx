import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Github, Database, Music, BookOpen, Heart, Shield } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'ml', name: 'Machine Learning' }
  ];

  const projects = [
    {
      id: 1,
      title: "Custom MCP Server Implementation",
      description: "Designed and implemented a custom Minecraft Protocol server with a strong focus on secure network communication and client validation. Developed low-level packet handling systems to manage TCP/IP connections, integrated firewall rules and NAT settings, and conducted vulnerability testing using Wireshark and custom scripts.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["TCP/IP", "Firewalls", "Packet Inspection", "Linux", "Java", "Wireshark", "iptables", "NAT"],
      category: "backend",
      links: {
        github: "https://github.com/Thedarklo/",
        live: "#"
      },
      icon: <Shield size={24} />
    },
    {
      id: 2,
      title: "Real-time Chat Application",
      description: "Engineered a real-time chat application using WebSocket and Apache Kafka, handling up to 10,000 concurrent messages per second with 99.9% uptime. Deployed on AWS EC2 with Nginx for traffic management and optimized scalability. Integrated AWS S3 for persistent media storage and designed dashboards in Grafana for real-time monitoring.",
      image: "https://images.pexels.com/photos/4050290/pexels-photo-4050290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["WebSocket", "Apache Kafka", "AWS EC2", "Nginx", "AWS S3", "Grafana"],
      category: "backend",
      links: {
        github: "https://github.com/Thedarklo/",
        live: "#"
      },
      icon: <MessageSquare size={24} />
    },
    {
      id: 3,
      title: "RhythmRevive",
      description: "A music streaming platform built with a modern tech stack, featuring user playlists, artist pages, and personalized recommendations. The application includes user authentication, media streaming, and a responsive interface.",
      image: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Express", "AWS S3"],
      category: "fullstack",
      links: {
        github: "https://github.com/Thedarklo/RhythmRevive",
        live: "#"
      },
      icon: <Music size={24} />
    },
    {
      id: 4,
      title: "Blogging Platform",
      description: "A full-featured blogging platform with rich text editing, commenting system, and user profiles. The platform supports image uploads, tagging, and social sharing integration.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      category: "fullstack",
      links: {
        github: "https://github.com/Thedarklo/Blogging-site/tree/main/BLOGLITE-main",
        live: "#"
      },
      icon: <BookOpen size={24} />
    },
    {
      id: 5,
      title: "FoodEasy",
      description: "An online food ordering platform connecting users with local restaurants. Features include real-time order tracking, payment integration, and restaurant management dashboard.",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "PostgreSQL", "Express", "Redux"],
      category: "fullstack",
      links: {
        github: "https://github.com/Thedarklo/FoodEasy",
        live: "#"
      },
      icon: <Database size={24} />
    },
    {
      id: 6,
      title: "Heart Disease Prediction",
      description: "A machine learning model that predicts the likelihood of heart disease based on various health parameters. The project includes data preprocessing, model training, and a web interface for predictions.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "scikit-learn", "Flask", "pandas", "NumPy"],
      category: "ml",
      links: {
        github: "https://github.com/Thedarklo/Heart-Disease-Prediction.git",
        live: "#"
      },
      icon: <Heart size={24} />
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. My focus has been on building 
            scalable, performant applications with excellent user experiences.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`mx-2 my-1 px-4 py-2 rounded-full transition-colors ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] hover:scale-110 cursor-pointer group">
                  <div className="transition-all duration-300 group-hover:text-white group-hover:scale-110">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} className="mr-1" /> Code
                    </a>
                  )}
                  
                  {/* {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" /> Live Demo
                    </a>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;