import React, { Suspense } from "react";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";

const HomePage = () => {
  const textureLoader = new THREE.TextureLoader();
  //
  const modelRef = useRef();
  const cameraLev = useRef();

  const bakedTexture = textureLoader.load("../static/bakedIMAGE.jpg");
  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

  const model = useLoader(GLTFLoader, "../static/dracoTest2.glb", (gltf) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    gltf.setDRACOLoader(dracoLoader);
  });
  console.log(model);
  model.scene.traverse((child) => {
    child.material = bakedMaterial;
  });
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    const yOffset = 0.1 + Math.sin(time * 2) * 0.1; // Adjust the amplitude (0.1) as desired
    modelRef.current.position.y = yOffset;

    // Rotate the model
    modelRef.current.rotation.y = -time * 0.5;
  });
  return (
    <>
      <PerspectiveCamera ref={cameraLev} position-y={9999} />
      <primitive
        object={model.scene}
        ref={modelRef}
        scale={2.1}
        rotation-y={-27}
        rotation-x={0.5}
      />
    </>
  );
};

export default HomePage;
