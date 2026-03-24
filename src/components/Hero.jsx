import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Code2 className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Alok Kumar Gupta
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-slate-300">
            MERN Stack Developer
          </p>
          <p className="text-lg md:text-xl mb-8 text-slate-400 max-w-2xl mx-auto">
            Crafting robust and scalable web applications with MongoDB,
            Express.js, React, and Node.js
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Projects
            </a>
          </div>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/alokgupta615"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https:www.linkedin.com/in/aalok-gupta-497a7424a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:aalokgupta4545@gmail.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
