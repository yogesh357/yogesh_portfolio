import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

function HeroCamera({ children, isMobile }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Keep camera fixed in place
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // Apply pointer-based rotation to the HackerRoom (group), not the camera
    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.2}>
      {children}
    </group>
  );
}

export default HeroCamera;
