import { motion } from 'motion/react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Senior System Engineer – Security (Technical Lead)',
    company: 'EQS Group',
    duration: '2019 – Present',
    summary: 'Leading infrastructure, security, and platform engineering initiatives across enterprise environments. Driving reliability, scalability, and security-first architecture across hybrid and cloud systems.',
    contributions: [
      'Designed and implemented High Availability infrastructure using Proxmox clusters with fault-tolerant architecture',
      'Led infrastructure modernization including migration to T-Systems and removal of legacy AD dependencies via SSO',
      'Built Infrastructure as Code frameworks using Terraform, enabling declarative infrastructure and reduced deployment drift',
      'Introduced automation-first approach using Ansible, improving deployment efficiency and operational consistency',
      'Implemented observability improvements using monitoring stacks and proactive alerting strategies'
    ],
    projects: [
      'Proxmox HA Cluster with shared storage and resilience engineering focus',
      'Terraform + Proxmox integration (Infrastructure automation)',
      'ELK Stack for Cloudflare log observability',
      'AI-powered internal support model (automation-first IT support concept)',
      'EQS Uploader deployment and production rollout'
    ],
    keywords: ['Resilience Engineering', 'Platform Engineering', 'Zero Trust Architecture', 'Observability-driven systems', 'Infrastructure modernization']
  },
  {
    title: 'System Admin Manager',
    company: 'VIPoint Solutions Pvt Ltd',
    duration: '2012 – 2019',
    summary: 'Managed infrastructure operations, system reliability, and team coordination for production environments. Focused on process optimization, system stability, and scalable operations.',
    contributions: [
      'Led server lifecycle management including migrations, RAID/LVM implementation, and system optimization',
      'Established operational standards and security policies for data integrity and access control',
      'Improved system reliability through proactive monitoring, backup strategies, and failure prevention mechanisms',
      'Streamlined operations using scripting, automation, and process standardization',
      'Managed cross-platform environments (Linux & Windows) with performance tuning'
    ],
    keywords: ['System Reliability Engineering', 'Process Optimization', 'Infrastructure Lifecycle Management', 'Operational Excellence', 'Configuration Standardization']
  },
  {
    title: 'Senior System Administrator',
    company: 'Netrix Worldwide',
    duration: '2010 – 2012',
    summary: 'Managed production hosting environments and core infrastructure services. Built strong foundation in system administration, networking, and security.',
    contributions: [
      'Deployed and managed web, DNS, mail, FTP, and firewall servers across environments',
      'Strengthened system security through access control, VPNs, and server hardening',
      'Implemented backup and recovery strategies to reduce data loss and improve reliability',
      'Provided 24/7 infrastructure support and incident response',
      'Managed hosting control panels and virtualization tools'
    ],
    keywords: ['Infrastructure Foundations', 'Secure System Hardening', 'Service-Oriented Architecture', 'Incident Response Handling', 'Multi-service Environment Management']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">Journey</span>
          </h2>
          <div className="w-20 h-1 mt-4 bg-gradient-to-r from-neon-cyan to-transparent" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#050505] border-2 border-neon-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.5)] z-10">
                <Briefcase className="w-4 h-4 text-neon-cyan" />
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/40 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-blue opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-lg">
                      <span className="text-neon-cyan font-medium">{exp.company}</span>
                      <span className="text-gray-500 hidden md:inline">|</span>
                      <span className="text-gray-400 font-mono text-sm">{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed border-l-2 border-white/10 pl-4 py-1 italic">
                    {exp.summary}
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="text-sm font-mono text-neon-cyan mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                    Key Contributions
                  </h5>
                  <ul className="space-y-3">
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-neon-cyan/70 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.projects && (
                  <div className="mb-8">
                    <h5 className="text-sm font-mono text-neon-blue mb-4 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue" />
                      Current / Key Projects
                    </h5>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.projects.map((project, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                          <span className="w-1 h-1 rounded-full bg-neon-blue shrink-0" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {exp.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-neon-cyan/80 bg-neon-cyan/5 border border-neon-cyan/20 rounded-full cursor-default hover:bg-neon-cyan/10 hover:border-neon-cyan/40 hover:text-neon-cyan transition-all"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
