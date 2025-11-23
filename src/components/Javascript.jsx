import { Html, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Javascript(props) {
  const targetRef = useRef(null);
  const { scene } = useGLTF("models/javascript.glb");

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI, 0]}>
      <primitive object={scene} /> 
      <directionalLight
        shadow-mapSize={[1024, 1024]}
        position={[10, 10, 10]}
        intensity={0.5}
      />
    </mesh>
  );
}

export default Javascript;
