import React from 'react';
import './App.css';
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Sky, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./cat/scene.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={0.6} rotation={[0, -Math.PI/2, 0]} />
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Canvas className="canvas">
        <Suspense fallback={null}>
          <pointLight color="white" intensity={2.3} position={[10, 20, 10]} />
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />

          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
