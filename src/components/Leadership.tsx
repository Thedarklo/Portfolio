import { motion } from 'framer-motion';
import { Users, Award, ExternalLink } from 'lucide-react';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Positions of Responsibility
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Leadership roles and volunteer experiences that showcase my organizational skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="text-blue-600 dark:text-blue-400 mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {position.organization} • {position.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {position.description}
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-4">
                {position.responsibilities.map((item, idx) => (
                  <li key={idx} className="mb-1">{item}</li>
                ))}
              </ul>
              {position.certificateLink && (
                <a 
                  href={position.certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span className="mr-1">View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const positions = [
  {
    title: "Event Volunteer",
    organization: "Konvergence",
    date: "January 2023",
    description: "Successfully managed a culturally diverse event featuring traditional dances from various Indian states.",
    responsibilities: [
      "Managed an event with 400 attendees featuring traditional dances from various Indian states",
      "Ensured seamless coordination throughout the event",
      "Actively contributed to captivating performances, positively impacting overall event quality and audience engagement"
    ],
    certificateLink: ""
  },
  {
    title: "Team Leader",
    organization: "Namma Yatri Open Mobility Challenge",
    date: "May 2023",
    description: "Led a team developing innovative urban mobility solutions.",
    responsibilities: [
      "Led a team of 3 members in developing innovative solutions for urban mobility",
      "Conducted user research that improved service efficiency by 25%",
      "Presented our solution to a panel of 10 industry experts",
      "Achieved a 30% reduction in estimated operational costs within a 3-month timeline"
    ],
    certificateLink: "https://unstop.com/certificate-preview/3d392b1f-8c1f-48bc-ab60-c022219c004d"
  }
];

export default Leadership; 