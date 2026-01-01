import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapesProps {
  mousePosition: { x: number; y: number };
}

export const FloatingShapes = ({ mousePosition }: FloatingShapesProps) => {
  const torusRef = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.2 + mousePosition.y * 0.5;
      torusRef.current.rotation.y = time * 0.3 + mousePosition.x * 0.5;
    }

    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = -time * 0.15 + mousePosition.y * 0.3;
      octahedronRef.current.rotation.z = time * 0.25 + mousePosition.x * 0.3;
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y = time * 0.2 - mousePosition.x * 0.4;
      icosahedronRef.current.rotation.z = -time * 0.1 + mousePosition.y * 0.4;
    }
  });

  return (
    <>
      {/* Main torus */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={torusRef} position={[3, 1, -2]}>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <MeshDistortMaterial
            color="#00e5ff"
            distort={0.2}
            speed={2}
            transparent
            opacity={0.6}
            wireframe
          />
        </mesh>
      </Float>

      {/* Octahedron */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh ref={octahedronRef} position={[-4, -1, -3]}>
          <octahedronGeometry args={[0.8]} />
          <MeshDistortMaterial
            color="#a855f7"
            distort={0.3}
            speed={3}
            transparent
            opacity={0.5}
            wireframe
          />
        </mesh>
      </Float>

      {/* Icosahedron */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={icosahedronRef} position={[-2, 2, -4]}>
          <icosahedronGeometry args={[0.6]} />
          <MeshDistortMaterial
            color="#ec4899"
            distort={0.25}
            speed={2.5}
            transparent
            opacity={0.5}
            wireframe
          />
        </mesh>
      </Float>

      {/* Additional small shapes */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[4, -2, -1]}>
          <dodecahedronGeometry args={[0.3]} />
          <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.7} floatIntensity={0.7}>
        <mesh position={[0, -3, -2]}>
          <tetrahedronGeometry args={[0.4]} />
          <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.4} />
        </mesh>
      </Float>
    </>
  );
};
