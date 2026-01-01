import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
  mousePosition: { x: number; y: number };
}

export const ParticleField = ({ count = 2000, mousePosition }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      const scale = Math.random() * 0.5 + 0.5;
      temp.push({ x, y, z, scale, originalX: x, originalY: y, originalZ: z });
    }
    return temp;
  }, [count]);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorPrimary = new THREE.Color('#00e5ff');
    const colorSecondary = new THREE.Color('#a855f7');
    const colorAccent = new THREE.Color('#ec4899');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = particles[i].x;
      positions[i3 + 1] = particles[i].y;
      positions[i3 + 2] = particles[i].z;

      const colorChoice = Math.random();
      const color = colorChoice < 0.5 ? colorPrimary : colorChoice < 0.8 ? colorSecondary : colorAccent;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count, particles]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const positionAttr = mesh.current.geometry.attributes.position;
    const positionArray = positionAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const particle = particles[i];

      // Floating motion
      positionArray[i3] = particle.originalX + Math.sin(time * 0.5 + i * 0.01) * 0.3;
      positionArray[i3 + 1] = particle.originalY + Math.cos(time * 0.3 + i * 0.01) * 0.3;
      positionArray[i3 + 2] = particle.originalZ + Math.sin(time * 0.4 + i * 0.02) * 0.2;

      // Mouse influence
      const mouseInfluence = 2;
      positionArray[i3] += mousePosition.x * mouseInfluence * (1 - Math.abs(particle.originalZ) / 10);
      positionArray[i3 + 1] += mousePosition.y * mouseInfluence * (1 - Math.abs(particle.originalZ) / 10);
    }

    positionAttr.needsUpdate = true;
    mesh.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
