import { motion } from 'motion/react';
import { Cloud, ShieldCheck, Activity, Terminal, Network, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: 'from-blue-500 to-cyan-400',
    core: ['Proxmox', 'VMware', 'Docker', 'Kubernetes', 'High Availability (HA)', 'Load Balancing'],
    advanced: ['Infrastructure Resilience Engineering', 'Failure Domain Design', 'Bare Metal Orchestration', 'Capacity Planning & Forecasting', 'Workload Isolation', 'Immutable Infrastructure']
  },
  {
    title: 'DevOps',
    icon: Terminal,
    color: 'from-purple-500 to-pink-500',
    core: ['Terraform', 'CI/CD Pipelines', 'GitOps', 'GitHub Actions / GitLab CI', 'Infrastructure as Code (IaC)'],
    advanced: ['Declarative Infrastructure Design', 'Pipeline as Code', 'Drift Detection & Correction', 'Idempotent Automation', 'Platform Engineering', 'Deployment Strategies (Blue-Green / Canary)']
  },
  {
    title: 'Monitoring & Observability',
    icon: Activity,
    color: 'from-orange-400 to-red-500',
    core: ['Zabbix', 'ELK Stack', 'Prometheus', 'Grafana', 'Logging & Alerting'],
    advanced: ['Observability Engineering', 'SLI / SLO / SLA Design', 'Event Correlation', 'Log Enrichment Pipelines', 'Anomaly Detection', 'Root Cause Analysis (RCA)']
  },
  {
    title: 'Systems',
    icon: Server,
    color: 'from-indigo-400 to-blue-600',
    core: ['Linux Administration', 'Windows Server', 'Bash / Shell Scripting', 'PowerShell', 'Patch Management'],
    advanced: ['OS Performance Tuning', 'Kernel Optimization', 'System Reliability Engineering', 'Configuration Drift Management', 'Secure Baseline Enforcement', 'Golden Image Strategy']
  },
  {
    title: 'Networking',
    icon: Network,
    color: 'from-yellow-400 to-orange-500',
    core: ['TCP/IP', 'DNS', 'VPN', 'Firewalls', 'Routing & Switching'],
    advanced: ['Zero Trust Network Architecture', 'Network Segmentation', 'Traffic Engineering', 'DNS Failover Strategies', 'Network Observability', 'East-West Traffic Control']
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    color: 'from-emerald-400 to-teal-500',
    core: ['CrowdStrike', 'Endpoint Security', 'SSO', 'IAM', 'VPN Security', 'Vulnerability Management'],
    advanced: ['Security-First Architecture', 'Zero Trust Security Model', 'Identity Federation', 'Privileged Access Management (PAM)', 'Threat Detection & Response', 'Attack Surface Reduction']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Arsenal</span>
          </h2>
          <div className="w-20 h-1 mt-4 bg-gradient-to-r from-neon-purple to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10 flex-grow">
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-blue/30 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all">
                    <category.icon className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-sm font-mono text-neon-cyan mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                    Core Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.core.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-medium text-white bg-neon-blue/10 border border-neon-blue/20 rounded-md shadow-[0_0_10px_rgba(0,243,255,0.05)] hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:bg-neon-blue/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-neon-purple mb-4 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple" />
                    Advanced Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.advanced.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-white/5 border border-white/5 rounded-md hover:text-white hover:border-neon-purple/30 hover:bg-neon-purple/10 transition-all cursor-default"
                      >
                        {skill}
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
