import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronRight, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Cpu,
  Monitor,
  Send
} from 'lucide-react';
import LeadCaptureModal from './components/LeadCaptureModal';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    description: "A real-time environmental monitoring dashboard with predictive analytics for urban planning.",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    title: "Quantum Pay",
    description: "Secure cross-border payment gateway leveraging blockchain for instant settlements.",
    tags: ["Solidity", "Web3.js", "Next.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Lumina AI",
    description: "Deep learning interface for creative asset generation and cataloging for design teams.",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const SKILLS: Skill[] = [
  { name: "Frontend Architecture", icon: <Layout size={20} className="text-blue-500" />, level: "Expert" },
  { name: "Backend Systems", icon: <Database size={20} className="text-emerald-500" />, level: "Advanced" },
  { name: "Cloud Infrastructure", icon: <Cpu size={20} className="text-indigo-500" />, level: "Intermediate" },
  { name: "UI/UX Design", icon: <Monitor size={20} className="text-pink-500" />, level: "Advanced" }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    setIsModalOpen(true);
  };

  const handleLeadSuccess = () => {
    setIsModalOpen(false);
    // In a real app, this would trigger the actual file download
    alert("Lead captured! Starting resume download...");
  };

  return (
    <div className="relative min-h-screen bg-cream text-brown-900 font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brown-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-brown-900/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tight"
          >
            Elite<span className="text-brown-600 italic font-medium">.</span>
          </motion.a>
          
          <div className="hidden md:flex items-center gap-8">
            {['Expertise', 'Work', 'Contact'].map((item, idx) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.1em] font-medium text-brown-800 hover:text-brown-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="flex items-center gap-2 rounded-full border border-brown-900/20 bg-transparent px-6 py-2.5 text-xs tracking-widest uppercase font-semibold text-brown-900 transition-all hover:bg-brown-900 hover:text-cream"
            >
              Resume <Download size={14} />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 -z-10 opacity-5 pointer-events-none w-full h-full">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2b1f14" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
           {/* Decorative Element */}
           <div className="absolute -left-4 top-20 hidden md:block">
              <div className="vertical-text text-[10px] text-brown-900/40 font-mono tracking-[0.2em]">
                EST. 2026 // PORTFOLIO
              </div>
           </div>

          <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-brown-900/20 bg-cream-light px-4 py-1.5 text-xs uppercase tracking-widest font-semibold text-brown-800"
            >
              <Code2 size={14} className="text-brown-600" /> Available for new impact
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-6xl md:text-[7rem] font-serif font-light leading-[0.9] tracking-tight"
            >
              Engineering <br /> 
              <span className="italic font-medium text-brown-600">
                Digital Futures.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-brown-800/80 leading-relaxed max-w-xl md:ml-auto md:mr-0 md:text-right font-serif"
            >
              Senior Software Engineer specializing in building scalable distributed systems and 
              immersive user experiences with modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 items-center md:justify-start justify-center"
            >
              <button 
                onClick={handleResumeDownload}
                className="flex items-center justify-center gap-2 rounded-full bg-brown-900 px-8 py-4 text-xs tracking-widest uppercase font-semibold text-cream transition-all hover:bg-brown-800 w-full sm:w-auto"
              >
                Download Resume <Download size={14} />
              </button>
              <a 
                href="#work"
                className="flex items-center justify-center gap-2 rounded-full border border-brown-900/20 px-8 py-4 text-xs tracking-widest uppercase font-semibold text-brown-900 transition-all hover:bg-brown-900/5 w-full sm:w-auto"
              >
                View Projects <ChevronRight size={14} />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center justify-center md:justify-start gap-8 border-t border-brown-900/10 pt-8 max-w-sm"
            >
              <a href="#" className="text-brown-800/60 hover:text-brown-900 transition-colors"><Github size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-brown-800/60 hover:text-brown-900 transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
              <a href="#" className="text-brown-800/60 hover:text-brown-900 transition-colors"><Mail size={20} strokeWidth={1.5} /></a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-cream-light border-y border-brown-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brown-600">Expertise</h2>
              <h3 className="mt-4 text-4xl md:text-5xl font-serif font-light tracking-tight">Core <span className="italic">Competencies</span></h3>
              <p className="mt-6 text-lg text-brown-800/70 font-serif leading-relaxed">
                Crafting polished production environments through a mix of architectural 
                excellence and user-centered design principles.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-brown-900/10">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`group relative p-8 md:p-12 transition-all hover:bg-brown-900/5 ${
                  idx !== SKILLS.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-brown-900/10' : ''
                } ${idx === 1 ? 'lg:border-r border-brown-900/10' : ''}`}
              >
                <div className="text-brown-600 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="opacity-80 group-hover:opacity-100">{skill.icon}</div>
                </div>
                <h4 className="font-serif text-xl font-medium tracking-tight mb-2">{skill.name}</h4>
                <div className="text-[10px] font-medium uppercase tracking-widest text-brown-400">
                  {skill.level}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 relative">
             <div className="absolute top-1/2 left-0 w-[calc(50%-150px)] h-px bg-brown-900/10 hidden md:block"></div>
             <div className="absolute top-1/2 right-0 w-[calc(50%-150px)] h-px bg-brown-900/10 hidden md:block"></div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brown-600 mb-4">Selected Work</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light tracking-tight inline-block bg-cream px-8 relative">
              <span className="italic">Engineering</span> Case Studies
            </h3>
          </div>

          <div className="space-y-32">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col gap-16 lg:items-center ${
                  idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 relative">
                  {/* Decorative number */}
                  <div className="absolute -top-12 -left-8 text-[8rem] font-serif font-light text-brown-900/5 select-none pointer-events-none hidden md:block">
                    0{idx + 1}
                  </div>
                  <div className="relative group overflow-hidden bg-brown-300 aspect-[4/3] oval-mask">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 mix-blend-multiply filter grayscale pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-brown-900/20 mix-blend-overlay transition-colors duration-700 group-hover:bg-transparent" />
                  </div>
                </div>
                
                <div className="flex-1 max-w-xl">
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 uppercase text-[10px] font-semibold tracking-widest text-brown-600">
                    {project.tags.map((tag, tagIdx) => (
                      <span key={tag} className="flex items-center gap-2">
                        {tagIdx > 0 && <span className="w-1 h-1 rounded-full bg-brown-300"></span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-4xl font-serif font-medium tracking-tight mb-6">{project.title}</h4>
                  <p className="text-lg text-brown-800/80 font-serif leading-relaxed mb-10">
                    {project.description}
                  </p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-brown-900 hover:text-brown-600 transition-colors group"
                  >
                    View Project 
                    <span className="w-8 h-px bg-brown-900 group-hover:bg-brown-600 group-hover:w-12 transition-all duration-300"></span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-brown-900 text-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brown-300">Contact</h2>
            <h3 className="mt-8 text-5xl md:text-7xl font-serif font-light tracking-tight">
              Let's build something <br className="hidden md:block" /> <span className="italic text-brown-300">remarkable.</span>
            </h3>
            
            <p className="mt-8 text-cream/70 max-w-lg mx-auto text-lg font-serif">
              Currently accepting select projects and leadership roles. Reach out to start a conversation.
            </p>

            <form className="mt-16 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border-b border-cream/20">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-transparent py-4 text-cream focus:outline-none focus:border-cream transition-colors placeholder:text-cream/30 font-serif text-lg"
                  />
                </div>
                <div className="border-b border-cream/20">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-transparent py-4 text-cream focus:outline-none focus:border-cream transition-colors placeholder:text-cream/30 font-serif text-lg"
                  />
                </div>
              </div>
              <div className="border-b border-cream/20 mb-12">
                <textarea 
                  rows={4}
                  placeholder="Tell me about your vision..." 
                  className="w-full bg-transparent py-4 text-cream focus:outline-none focus:border-cream transition-colors placeholder:text-cream/30 font-serif text-lg resize-none"
                />
              </div>
              <div className="text-center">
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-cream/20 px-12 py-5 text-xs tracking-widest uppercase font-semibold text-cream transition-all hover:bg-cream hover:text-brown-900 group"
                >
                  Send Message 
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brown-100 text-brown-900 border-t border-brown-900/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-brown-600">
            © {new Date().getFullYear()} Elite Portfolio.
          </div>
          <div className="flex items-center gap-8 text-[10px] font-medium uppercase tracking-[0.2em] text-brown-600">
            <a href="#" className="hover:text-brown-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-brown-900 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brown-900 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleLeadSuccess}
      />
    </div>
  );
}

