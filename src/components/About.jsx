import { User, Award, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <User className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Passionate Developer</h3>
              <p className="text-slate-600">Dedicated to writing clean, efficient code</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <Award className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Problem Solver</h3>
              <p className="text-slate-600">Creating solutions that make a difference</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-emerald-500" />
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Full Stack Expert</h3>
              <p className="text-slate-600">End-to-end application development</p>
            </div>
          </div>
          <div className="text-center text-slate-700 leading-relaxed space-y-4">
            <p className="text-lg">
              I'm a passionate MERN Stack Developer specializing in building exceptional digital experiences.
              With expertise in MongoDB, Express.js, React, and Node.js, I create full-stack applications
              that are both powerful and user-friendly.
            </p>
            <p className="text-lg">
              My focus is on writing clean, maintainable code and delivering projects that exceed expectations.
              I'm constantly learning and adapting to new technologies to provide the best solutions for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
