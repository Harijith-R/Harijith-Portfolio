import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Star, ExternalLink, GitBranch, FolderGit2 } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

const highlightedProjects = [
  {
    name: 'Proxmox HA Cluster Setup',
    description: 'Enterprise-grade HA cluster with shared storage. Focus on resilience and failover.',
    language: 'Shell',
    topics: ['proxmox', 'ha', 'cluster'],
    html_url: 'https://github.com/Harijith-R',
    stargazers_count: 12,
  },
  {
    name: 'Terraform + Proxmox Integration',
    description: 'Infrastructure as Code for VM automation and provisioning.',
    language: 'HCL',
    topics: ['terraform', 'iac', 'automation'],
    html_url: 'https://github.com/Harijith-R',
    stargazers_count: 8,
  },
  {
    name: 'ELK Stack for Cloudflare Logs',
    description: 'Centralized logging and observability pipeline for edge traffic.',
    language: 'Logstash',
    topics: ['elk', 'cloudflare', 'observability'],
    html_url: 'https://github.com/Harijith-R',
    stargazers_count: 5,
  },
  {
    name: 'AI Support Model',
    description: 'AI-powered internal support concept for automated ticket resolution.',
    language: 'Python',
    topics: ['ai', 'support', 'automation'],
    html_url: 'https://github.com/Harijith-R',
    stargazers_count: 15,
  },
  {
    name: 'EQS Uploader Deployment',
    description: 'Internal production deployment project and pipeline.',
    language: 'Go',
    topics: ['deployment', 'production'],
    html_url: 'https://github.com/Harijith-R',
    stargazers_count: 3,
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>(highlightedProjects as Repo[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Harijith-R/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        
        // If we get valid data, use it, otherwise fallback to highlighted projects
        if (Array.isArray(data) && data.length > 0) {
          // Filter out forks or just use the latest
          const filtered = data.filter(repo => !repo.fork).slice(0, 6);
          if (filtered.length > 0) {
            setRepos(filtered);
          }
        }
      } catch (err) {
        console.error('GitHub API rate limit or error, using fallback data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 mt-4 bg-gradient-to-r from-neon-blue to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-neon-blue/40 transition-all group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FolderGit2 className="w-24 h-24 text-neon-blue" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {repo.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {repo.description || 'No description provided.'}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-neon-purple" />
                    <span className="text-xs font-mono text-gray-300">{repo.language || 'Config'}</span>
                  </div>
                  
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex gap-2">
                      <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                        #{repo.topics[0]}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/Harijith-R"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-neon-blue/50 transition-all group"
          >
            <Github className="w-4 h-4 group-hover:text-neon-blue transition-colors" />
            <span>View all on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
