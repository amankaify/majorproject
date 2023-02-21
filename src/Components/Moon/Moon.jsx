import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import SphereGeometry from "../Assets/Moon3D";
import "../Moon/Moon.css";

function Moon({ moonSize,moonColor }) {
  return (
    <>
      <Canvas style={{ width: "100%", height:"100%", background: "none" }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 3, 1]} intensity={1} />
        <Suspense fallback={null}>
          <SphereGeometry position={[-1.2, 0, 0]} moonSize={moonSize} moonColor={moonColor} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Moon;
