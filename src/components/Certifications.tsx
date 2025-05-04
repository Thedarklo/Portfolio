import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="text-blue-600 dark:text-blue-400 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              {cert.link && (
                <a 
                  href={cert.link} 
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

const certifications = [
  {
    title: "J.P. Morgan Software Engineering Job Simulation",
    issuer: "J.P. Morgan",
    date: "2023",
    description: "Completed a professional certificate program focused on software engineering skills and practices.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_ngxjSi3LZM7yyiKc6_1723329146194_completion_certificate.pdf"
  },
  {
    title: "AWS Academy Introduction to Cloud",
    issuer: "AWS Academy",
    date: "2023",
    description: "Completed the AWS Academy program covering cloud fundamentals and AWS services.",
    link: "https://www.credly.com/badges/0d9bf106-a137-43da-bf8e-3405bf60086e/print"
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Coursera",
    date: "2023",
    description: "Learned cloud computing principles, service models, and deployment strategies.",
    link: "https://www.coursera.org/account/accomplishments/verify/AY29P55V3S7E?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Problem Solving (Basic & Intermediate)",
    issuer: "HackerRank",
    date: "2022",
    description: "Demonstrated proficiency in basic and intermediate problem-solving skills through algorithmic challenges.",
    link: "https://www.hackerrank.com/certificates/90f3524f2e8f"
  },
  {
    title: "Data & Analytics Workshop",
    issuer: "Industry Academia Community",
    date: "2023",
    description: "Participated in a workshop focused on data analysis techniques and practices.",
    link: "https://www.industryacademiacommunity.com/verify-certificate?serialno=IAC-IT4-230864"
  },
  {
    title: "Internship Preparation Workshop",
    issuer: "Industry Academia Community",
    date: "2023",
    description: "Completed a workshop covering professional development and internship readiness.",
    link: "https://www.industryacademiacommunity.com/verify-certificate?serialno=IAC2023-IP1-623"
  },
  {
    title: "The ReneVerse Borderless Gaming Hackathon",
    issuer: "ReneVerse",
    date: "2023",
    description: "Participated in a gaming hackathon focused on developing innovative gaming solutions.",
    link: "https://unstop.com/certificate-preview/40bbb714-aa4a-426b-b5d0-a4d433280028"
  },
  {
    title: "Tata Crucible Campus Quiz 2023",
    issuer: "Tata",
    date: "2023",
    description: "Participated in the prestigious Tata Crucible Campus Quiz, demonstrating knowledge across various domains.",
    link: "https://unstop.com/certificate-preview/72321184-0b95-4f30-b80a-decdbd3e1226"
  },
  {
    title: "Coca-Cola Disrupt Season 3 Online Assessment",
    issuer: "Coca-Cola",
    date: "2023",
    description: "Completed the online assessment for the Coca-Cola Disrupt innovation challenge.",
    link: "https://unstop.com/certificate-preview/82bc5880-198c-4aaa-9e30-7dd124b887f9?utm_campaign="
  }
];

export default Certifications;