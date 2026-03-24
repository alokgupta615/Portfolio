import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:aalokgupta4545@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400 text-center flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-emerald-500 fill-current" /> by Alok Kumar Gupta
          </p>
          <p className="text-slate-500 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
