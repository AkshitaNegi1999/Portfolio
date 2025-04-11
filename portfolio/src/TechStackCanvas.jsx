import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const techStack = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "SQL",
  "jQuery",
  "ASP.NET",
  "TailwindCSS",
  "Material UI",
  "ShadCN",
  "CSS",
  "HTML5",
  "AWS",
  "Firebase",
];

function GlobePoints() {
  const groupRef = useRef();
  const radius = 2.5;

  const points = useMemo(() => {
    return techStack.map((label, index) => {
      const phi = Math.acos(-1 + (2 * index) / techStack.length);
      const theta = Math.sqrt(techStack.length * Math.PI) * phi;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      return { position: [x, y, z], label };
    });
  }, []);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {/* Tech stack text labels */}
      {points.map((p, i) => (
        <Text
          key={`text-${i}`}
          position={p.position}
          fontSize={0.18} // Slightly smaller
          color="#b0c4de" // A refined, mature tone
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {p.label}
        </Text>
      ))}

      {/* Node spheres (nearly invisible) */}
      {points.map((p, i) => (
        <mesh key={`dot-${i}`} position={p.position}>
          <sphereGeometry args={[0.015, 4, 4]} /> {/* Tiny size */}
          <meshStandardMaterial color="transparent" transparent opacity={0} />
        </mesh>
      ))}

      {/* Curved lines between nodes */}
      {points.map((p1, i) =>
        points.map((p2, j) => {
          if (i >= j) return null;

          const dist = new THREE.Vector3(...p1.position).distanceTo(
            new THREE.Vector3(...p2.position)
          );
          if (dist > 2.5) return null;

          const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(...p1.position),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(...p2.position)
          );

          const curvePoints = curve.getPoints(30);
          const geometry = new THREE.BufferGeometry().setFromPoints(
            curvePoints
          );

          return (
            <line key={`line-${i}-${j}`} geometry={geometry}>
              <lineBasicMaterial color="#666666" linewidth={1} />
            </line>
          );
        })
      )}
    </group>
  );
}

export default function TechStackCanvas() {
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 hidden md:block pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <GlobePoints />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
