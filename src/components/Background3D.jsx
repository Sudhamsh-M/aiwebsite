import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------------- SCROLL-REVEALED STARFIELD ---------------- */

function StarField({ scrollProgressRef }) {
  const pointsRef = useRef(null);

  const COUNT = 450; // Slight increase in count for better coverage

  const { basePositions, currentPositions, directions } = useMemo(() => {
    const basePositions = new Float32Array(COUNT * 3);
    const directions = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      // 1. INCREASED SPREAD: Changed random * 2.4 to random * 4.0
      // This ensures stars cover the screen even when t=0
      const r = Math.random() * 4.0; 
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = (Math.random() - 0.5) * 5;

      basePositions.set([x, y, z], i * 3);

      // Radial dispersion vectors
      directions.set(
        [x * 7.0, y * 7.0, z * 5.0],
        i * 3
      );
    }

    const currentPositions = new Float32Array(basePositions);
    return { basePositions, currentPositions, directions };
  }, []);

  useFrame((state) => {
    const t = scrollProgressRef.current; // 0 → 1 

    const posAttr = pointsRef.current.geometry.attributes.position;
    const material = pointsRef.current.material;

    // 2. IDLE ANIMATION
    // Gently rotate the whole system so it feels alive when not scrolling
    // state.clock.getElapsedTime() gives continuous time
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;

    // STAR POSITIONS (reversible)
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      posAttr.array[i3]     = basePositions[i3]     + directions[i3]     * t;
      posAttr.array[i3 + 1] = basePositions[i3 + 1] + directions[i3 + 1] * t;
      posAttr.array[i3 + 2] = basePositions[i3 + 2] + directions[i3 + 2] * t;
    }
    posAttr.needsUpdate = true;

    /* ---------------- MODIFIED VISIBILITY ---------------- */
    
    // Create a "boost" factor based on scroll, capped at 1
    const boost = Math.min(t * 10, 1);

    // 3. ALWAYS VISIBLE OPACITY
    // Base: 0.25 (Subtle enough not to disturb text)
    // On Scroll: Adds up to 0.35 more (Total 0.6)
    material.opacity = 0.25 + (boost * 0.35);          
    
    // 4. DYNAMIC SIZE
    // Base: 0.02 (Visible dots) -> Grows on scroll
    material.size = 0.02 + (boost * 0.02);    
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={currentPositions} 
          count={currentPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#9cf6f6"
        size={0.02} // Default size
        opacity={0.25} // Default opacity
        transparent
        depthWrite={false}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ---------------- BACKGROUND SCENE ---------------- */

export default function Background3D() {
  const progressRef = useRef(0);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const onScroll = () => {
      const rect = hero.getBoundingClientRect();
      const total = rect.height;
      const t = Math.min(Math.max(-rect.top / total, 0), 1);
      progressRef.current = t;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 52 }}>
        {/* Dimmed light to keep it subtle behind text */}
        <ambientLight intensity={0.5} />
        <StarField scrollProgressRef={progressRef} />
      </Canvas>
    </div>
  );
}