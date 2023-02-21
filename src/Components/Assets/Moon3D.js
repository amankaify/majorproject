import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../Assets/moonTexture.jpeg";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Moon3D({moonSize, moonColor}) {
  
  const colorMap = useLoader(TextureLoader, texture);
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.z += 0.002));

  return (
    <mesh ref={ref}>
      <OrbitControls enableZoom={false} target={[0, 0, 0]} />
      <PerspectiveCamera
        args={[45, window.innerWidth / window.innerHeight, 1, 10000]}
      />
      <sphereGeometry attach="geometry" args={[moonSize, 50, 300]} />
      <meshStandardMaterial map={colorMap} roughness={5} metalness={0.4} />
      <hemisphereLightProbe intensity={4} args={[moonColor, 0x071110, 1]} />
    </mesh>
  );
}

export default Moon3D;
