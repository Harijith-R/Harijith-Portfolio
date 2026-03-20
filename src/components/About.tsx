import { motion } from 'motion/react';
import { Shield, Server, Cpu, Lock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              With over <span className="text-neon-cyan font-semibold">16+ years of experience</span> in IT infrastructure and security, 
              I specialize in designing, deploying, and securing enterprise-grade systems.
            </p>
            <p>
              My expertise spans across platform engineering, automation, and building resilient architectures. 
              I advocate for a <span className="text-neon-purple font-semibold">Zero Trust approach</span>, ensuring that security is baked into the foundation of every system, not bolted on as an afterthought.
            </p>
            <p>
              Currently, I am deeply focused on exploring Kubernetes, optimizing Proxmox clusters for high availability, 
              and integrating AI-driven support models to revolutionize internal operations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Server, title: 'Infrastructure', desc: 'Proxmox, VMware, K8s' },
              { icon: Shield, title: 'Security', desc: 'Zero Trust, CrowdStrike' },
              { icon: Cpu, title: 'Automation', desc: 'Terraform, CI/CD' },
              { icon: Lock, title: 'Identity', desc: 'SSO, IAM Solutions' },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-panel p-6 rounded-xl border border-white/5 hover:border-neon-blue/30 transition-all group"
              >
                <item.icon className="w-8 h-8 text-neon-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
