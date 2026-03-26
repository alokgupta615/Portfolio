import {
  Database,
  Server,
  LayoutGrid as Layout,
  Code,
  BookOpen,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Layout,
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      icon: Server,
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication & Authorization",
        "JWT",
        "API Integration",
      ],
    },
    {
      icon: Database,
      title: "Database",
      skills: [
        "MongoDB",
        "Mongoose",
        "SQL",
        "Database Design",
        "Data Modeling",
        "Query Optimization",
      ],
    },
    {
      icon: Code,
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "npm/yarn",
        "Webpack",
        "Vite",
        "Agile Methodology",
      ],
    },
    {
      icon: BookOpen,
      title: "Data Structures & Algorithms",
      skills: [
        "Java Programming",
        "Arrays & Linked Lists",
        "Trees & Graphs",
        "Sorting & Searching",
        "Problem Solving",
        "Algorithm Optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Technical Skills
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <category.icon className="w-12 h-12 mb-4 text-emerald-500" />
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-slate-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              MERN Stack Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["MongoDB", "Express.js", "React.js", "Node.js"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold shadow-md"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
