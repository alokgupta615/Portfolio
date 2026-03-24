import { ExternalLink, Github } from "lucide-react";
import img1 from "../assets/home.png";

export default function Projects() {
  const projects = [
    {
      title: "WanderLust",
      description:
        "A full-stack MERN travel listing app for exploring destinations, creating listings, and sharing reviews.Includes secure JWT authentication and a responsive user-friendly interface.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: img1,
      github: "https://github.com/alokgupta615/WanderLust",
      live: "https://wanderlust-yp1e.onrender.com/listings",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with data visualization, user engagement metrics, and interactive charts.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    // {
    //   title: "Task Management System",
    //   description:
    //     "Collaborative project management tool with real-time updates, team collaboration features, and task tracking.",
    //   tech: ["React", "Express", "MongoDB", "JWT", "Redux"],
    //   image:
    //     "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800",
    // },
    // {
    //   title: "Blog Platform",
    //   description:
    //     "Modern blogging platform with rich text editor, comment system, user profiles, and content management.",
    //   tech: ["React", "Node.js", "MongoDB", "Express", "Quill"],
    //   image:
    //     "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
