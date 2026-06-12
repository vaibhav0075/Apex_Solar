"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function SolarPanel({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ref} position={position} rotation={[0.3, 0.5, 0]}>
        <boxGeometry args={[1.2, 0.05, 0.8]} />
        <meshStandardMaterial
          color="#0a4d9b"
          metalness={0.8}
          roughness={0.2}
          emissive="#00c8ff"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function EnergyOrb() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} floatIntensity={1}>
      <mesh ref={ref} position={[2, 1, -1]}>
        <icosahedronGeometry args={[0.6, 1]} />
        <MeshDistortMaterial
          color="#ffb400"
          emissive="#ffb400"
          emissiveIntensity={0.4}
          distort={0.3}
          speed={2}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffd54f"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd54f" />
      <pointLight position={[-3, 2, 2]} intensity={0.5} color="#00c8ff" />

      <SolarPanel position={[-1.5, 0, 0]} />
      <SolarPanel position={[0.5, -0.5, -0.5]} />
      <SolarPanel position={[1.8, 0.3, 0.2]} />
      <EnergyOrb />
      <Particles />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
