import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Apache Kafka", level: 90 },
        { name: "WebSocket", level: 95 }
      ]
    },
    {
      name: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Computer Vision", level: 80 }
      ]
    },
    {
      name: "Cybersecurity",
      skills: [
        { name: "Network Security", level: 85 },
        { name: "Penetration Testing", level: 80 },
        { name: "Threat Analysis", level: 75 },
        { name: "Security Auditing", level: 85 },
        { name: "Cryptography", level: 70 }
      ]
    },
    // {
    //   name: "Tools & Others",
    //   skills: [
    //     { name: "Git", level: 90 },
    //     { name: "REST API Design", level: 90 },
    //     { name: "Microservices", level: 85 },
    //     { name: "CI/CD", level: 75 },
    //     { name: "System Design", level: 80 }
    //   ]
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies throughout my career.
            Here's an overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white pb-2 border-b-2 border-gray-200 dark:border-gray-700">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-800 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;