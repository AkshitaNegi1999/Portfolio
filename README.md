### 📄 `README.md`

```markdown
# 🚀 Developer Portfolio Components

A set of visually rich and interactive components used in a developer portfolio built with React and Tailwind CSS.

This includes:

1. **HoverSwapButton** – A hover-sensitive button that smoothly transitions from text to a down arrow icon using pure CSS.
2. **TechStackCanvas** – A 3D animated globe visualizing your tech stack using `@react-three/fiber`, `three.js`, and `drei`.

---

## 🔧 Technologies Used

- React
- Tailwind CSS
- React Icons
- Three.js
- @react-three/fiber
- @react-three/drei

---

## 🌟 Components

### 1. 💡 HoverSwapButton

A CTA-style button that changes its text ("All My Works") to a down arrow when hovered — no state, no flicker, just clean CSS transitions.

#### ✅ Features

- Fully styled with Tailwind CSS
- Uses `react-icons` for the arrow
- No React state — fast and responsive
- Scales and underlines on hover
- Designed for modern UIs

#### 📦 Dependencies
```bash
npm install react-icons
```

#### 🧩 Usage

```jsx
import { FaArrowDown } from "react-icons/fa";

function HoverSwapButton() {
  return (
    <div className="group self-center mb-16">
      <button
        className="relative bg-[#4595eb] py-2 px-5 rounded font-bold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden"
      >
        <span className="transition-opacity duration-200 ease-in-out group-hover:opacity-0">
          All My Works
        </span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
          <FaArrowDown className="text-white text-lg" />
        </span>
      </button>
    </div>
  );
}
```

---

### 2. 🌐 TechStackCanvas (3D Globe Visualization)

A beautiful, animated 3D tech stack globe with orbit controls, glowing tech labels, and connecting lines. Only visible on tablets and larger screens (`md+`).

#### ✅ Features

- Responsive: Hidden on mobile, auto-rotates on desktop
- Dynamic label placement using spherical coordinates
- Connected with quadratic Bézier curves
- Auto-rotating globe via `useFrame`
- Lightweight and interactive via `@react-three/fiber`

#### 📦 Dependencies
```bash
npm install three @react-three/fiber @react-three/drei
```

#### 🧩 Usage

```jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const techStack = [
  "React.js", "Next.js", "JavaScript", "TypeScript", "Node.js",
  "SQL", "jQuery", "ASP.NET", "TailwindCSS", "Material UI",
  "ShadCN", "CSS", "HTML5", "AWS", "Firebase",
];

function GlobePoints() {
  const groupRef = useRef();
  const radius = 2.5;

  const points = useMemo(() =>
    techStack.map((label, index) => {
      const phi = Math.acos(-1 + (2 * index) / techStack.length);
      const theta = Math.sqrt(techStack.length * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return { position: [x, y, z], label };
    }), []
  );

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {points.map((p, i) => (
        <Text key={`text-${i}`} position={p.position} fontSize={0.18} color="#b0c4de" anchorX="center" anchorY="middle">
          {p.label}
        </Text>
      ))}
      {points.map((p, i) =>
        points.map((p2, j) => {
          if (i >= j) return null;
          const dist = new THREE.Vector3(...p.position).distanceTo(new THREE.Vector3(...p2.position));
          if (dist > 2.5) return null;
          const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(...p.position),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(...p2.position)
          );
          const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(30));
          return (
            <line key={`line-${i}-${j}`} geometry={geometry}>
              <lineBasicMaterial color="#666666" />
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
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
```

---

## 🧠 Tips

- The `TechStackCanvas` is **non-interactive** to the user (`pointer-events-none`), but rotates automatically. You can enable dragging or interactivity by adjusting `OrbitControls`.
- The radius, font size, colors, and number of labels can be customized for aesthetic tuning.
- For performance, avoid rendering on smaller screens where GPU usage matters more.

---

## 🪪 License

Open-source under the [MIT License](LICENSE).

---

> Made with ❤️ by Shubhang Mishra  
> [Portfolio](https://portfolio-five-sigma-61.vercel.app/)
```
