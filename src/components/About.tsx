import { motion } from 'framer-motion';
import { Code, Server, Brain, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate software developer specializing in building scalable backend systems and cloud infrastructure. 
            With expertise in various technologies, I create efficient, reliable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{card.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Approach</h3>
          <div className="text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              I believe in creating software that not only solves problems but also provides an excellent user experience. My development process focuses on writing clean, maintainable code while ensuring performance and scalability.
            </p>
            <p>
              My experience with real-time systems, particularly with WebSocket and Apache Kafka, has taught me the importance of resilient architecture. I've successfully built systems handling 1000+ concurrent messages.
            </p>
            <p>
              I'm passionate about network security and have expertise in implementing secure communication protocols, configuring firewalls, and conducting vulnerability testing. My experience with TCP/IP, packet inspection, and security tools like Wireshark allows me to build robust systems that protect against unauthorized access and attacks.
            </p>
            <p>
              I enjoy working with machine learning frameworks like TensorFlow and PyTorch to create intelligent systems. I'm also dedicated to continuously improving my security knowledge to stay ahead of emerging threats in the cybersecurity landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    title: "Cybersecurity",
    description: "Implementing robust security measures including network security, packet inspection, firewall configuration.",
    icon: <Shield size={40} />
  },
  {
    title: "Backend Development",
    description: "Building robust, scalable backend systems using Spring Boot, WebSocket, Apache Kafka, and more.",
    icon: <Server size={40} />
  },
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with React, TypeScript, modern CSS frameworks, and focusing on UI/UX design principles.",
    icon: <Code size={40} />
  },
  // {
  //   title: "Database Management",
  //   description: "Designing efficient database schemas and optimizing queries for SQL and NoSQL databases.",
  //   icon: <Database size={40} />
  // },
  {
    title: "Machine Learning",
    description: "Developing intelligent systems with TensorFlow and PyTorch to extract insights and automate decision-making processes.",
    icon: <Brain size={40} />
  }

];

export default About;