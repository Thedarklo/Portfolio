import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey, including work experience and educational background.
          </p>
        </motion.div>

        <VerticalTimeline>
          {timelineElements.map((element, index) => (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="text-gray-700 dark:text-gray-300"
              iconStyle={{ 
                background: element.type === 'work' ? '#3B82F6' : '#14B8A6',
                color: '#fff' 
              }}
              icon={element.type === 'work' ? <Briefcase /> : <GraduationCap />}
              contentStyle={{
                background: 'white',
                color: '#333',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
              }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
            >
              <h3 className="text-xl font-bold">{element.title}</h3>
              <h4 className="text-lg font-medium text-gray-600">{element.subtitle}</h4>
              <p className="text-gray-700 mt-2">{element.description}</p>
              {element.skills && (
                <div className="mt-4">
                  <h5 className="font-medium text-gray-700 mb-2">Key Skills:</h5>
                  <div className="flex flex-wrap">
                    {element.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

const timelineElements = [
  {
    title: "Software Developer Intern",
    subtitle: "ONEKLOPP FASHION PRIVATE LIMITED",
    description: "Building and integrating backend services with AI capabilities to optimize product recommendations and improve customer insights.",
    date: "Jan 2025 - Present",
    type: "work",
    skills: ["Python", "Machine Learning", "Data Analysis", "SQL", "Git", "API Development", "Backend Integration", "Performance Optimization"]
  },
  {
    title: "Web Developer",
    subtitle: "ICEICO",
    description: "Working as a web developer to build responsive and interactive web applications.",
    date: "July 2024 - December 2024",
    type: "work",
    skills: ["React", "HTML", "CSS", "JavaScript", "Python (Flask)", "MySQL", "Git", "Responsive Design", "UI/UX", "Performance Optimization"]
  },
  {
    title: "Web Developer",
    subtitle: "Bizleap Inc.",
    description: "Developed web applications focusing on user experience and responsive design principles.",
    date: "Jan 2024 - April 2024",
    type: "work",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "Debugging", "Performance Optimization", "Cross-browser Compatibility", "Team Collaboration", "Project Management"]
  },
  {
    title: "Consultant",
    subtitle: "Cloud Counselage Pvt. Ltd.",
    description: "Provided consultancy services focusing on strategic planning and problem-solving.",
    date: "Aug 2023 - Dec 2023",
    type: "work",
    skills: ["Project Management", "Problem Solving", "Strategic Thinking", "Client Services", "Communication", "Data Analysis"]
  },
  {
    title: "Welfare Support",
    subtitle: "Icchedana (NGO Work)",
    description: "Supported underprivileged children and elderly women by providing education assistance and helping with government forms for welfare programs. Helped with food distribution and medical aid for those in need.",
    date: "Jan 2024 - Oct 2024",
    type: "work",
    skills: ["Community Outreach", "Education", "Social Welfare", "Government Documentation", "Medical Aid"]
  },
  {
    title: "Intern - National Outreach Programme",
    subtitle: "Collaboration with Rupantaran NGO",
    description: "Organized community outreach programs impacting 100+ individuals focusing on education, health, and social development. Increased participation by 15% through awareness campaigns and managed project documentation.",
    date: "April 2022 - Aug 2022",
    type: "work",
    skills: ["Community Outreach", "Program Planning", "Data Analysis", "Documentation", "Social Development"]
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    subtitle: "Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha",
    description: "Achieved CGPA of 8.66/10 while focusing on computer science fundamentals and practical applications.",
    date: "2020 - 2024",
    type: "education"
  },
  {
    title: "High School Graduate (XII)",
    subtitle: "S.R.P. College, Patna, Bihar",
    description: "Completed higher secondary education with 73.6% marks.",
    date: "2018 - 2020",
    type: "education"
  },
  {
    title: "Secondary School (X)",
    subtitle: "D.A.V. Public School, Patna, Bihar",
    description: "Completed secondary education with CGPA of 9.4/10.",
    date: "2012 - 2017",
    type: "education"
  }
];

export default Experience;