"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

/** The central iridescent orb — distorts gently and follows the pointer. */
function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.15;
    // Ease toward the pointer for a parallax tilt.
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      pointer.y * 0.4,
      0.05,
    );
    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z,
      -pointer.x * 0.3,
      0.05,
    );
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={mesh} scale={2.05}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#1c1c20"
          emissive="#0a0a0c"
          emissiveIntensity={0.2}
          roughness={0.32}
          metalness={1}
          distort={0.34}
          speed={1.3}
        />
      </mesh>
    </Float>
  );
}

/** A drifting starfield of points behind the orb. */
function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#d8d6cf"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  const isSmall =
    typeof window !== "undefined" && window.innerWidth < 768;
  const particleCount = isSmall ? 320 : 800;

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.6} color="#ffffff" />
      <pointLight position={[-6, -3, -2]} intensity={1.8} color="#cfcabd" />
      <Orb />
      <Particles count={particleCount} />
    </Canvas>
  );
}
