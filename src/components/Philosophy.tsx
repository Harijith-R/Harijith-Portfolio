import { motion } from 'motion/react';
import { ShieldAlert, Zap, Layers, Eye, BookOpen } from 'lucide-react';

const philosophies = [
  {
    icon: ShieldAlert,
    title: 'Security-First Design',
    desc: 'Security is not an add-on; it is the foundation. Every architecture decision starts with a Zero Trust mindset.',
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/30',
  },
  {
    icon: Zap,
    title: 'Automation Over Manual Ops',
    desc: 'If you do it twice, automate it. Infrastructure as Code (IaC) and CI/CD pipelines are essential for scale.',
    color: 'text-neon-purple',
    border: 'border-neon-purple/30',
  },
  {
    icon: Layers,
    title: 'High Availability & Fault Tolerance',
    desc: 'Systems will fail. Designing for resilience ensures that failures are handled gracefully without downtime.',
    color: 'text-neon-blue',
    border: 'border-neon-blue/30',
  },
  {
    icon: Eye,
    title: 'Observability-Driven',
    desc: 'You cannot fix what you cannot see. Comprehensive monitoring and centralized logging are non-negotiable.',
    color: 'text-emerald-400',
    border: 'border-emerald-400/30',
  },
  {
    icon: BookOpen,
    title: 'Continuous Optimization',
    desc: 'Technology evolves rapidly. Continuous learning and iterative system optimization keep infrastructure ahead of the curve.',
    color: 'text-amber-400',
    border: 'border-amber-400/30',
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16 text-center items-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Philosophy</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-2xl border ${item.border} hover:bg-white/5 transition-all group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              
              <item.icon className={`w-10 h-10 ${item.color} mb-6`} />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative grid background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
