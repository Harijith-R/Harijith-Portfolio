import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

function ParticleField(props: any) {
  const ref = useRef<any>(null);
  
  const sphere = useMemo(() => {
    const count = 800; // Reduced from 4000 for readability
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.015} // Reduced size
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6} // Reduced opacity
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 6] }} className="w-full h-full">
          <ParticleField />
        </Canvas>
      </div>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-mono w-fit mx-auto md:mx-0">
            <Terminal className="w-3 h-3" />
            <span>SYSTEM_ENGINEER_INIT</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
            Harijith <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">R</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium text-gray-200 max-w-2xl drop-shadow-md">
            Senior System Engineer | Security & Infrastructure Specialist
          </h2>
          
          <p className="text-gray-400 max-w-xl text-lg font-mono drop-shadow-md">
            &gt; "Building secure, scalable, and resilient systems"
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-black bg-neon-blue rounded-md overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-medium text-white bg-[#050505]/50 backdrop-blur-sm border border-white/20 rounded-md transition-all hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-blue to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
