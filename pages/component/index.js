import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { motion, Variant } from "framer-motion";
import * as THREE from "three";
import css from "../styles/Home.module.css";

export default function Home() {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };

  return (
    <div className="h-screen m-0">
      <div className="h-full ml-52 flex items-center">
        <div className="w-5/12">
          <div className="block overflow-hidden font-Roboto">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                type: "spring",
                bounce: 0.3,
              }}
            >
              <a>
                <div className="group">
                  <h1 className="hover:transition-all hover:duration-500 text-white group-hover:ml-8 group-hover:after:content-['About'] font-bold		 text-9xl after:content-['Hello.'] hover:cursor-pointer" />
                </div>
              </a>
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 0.5,
                type: "spring",
                bounce: 0.3,
              }}
            >
              <div className="group">
                <h1 className="hover:transition-all hover:duration-500 text-[#205375] group-hover:ml-8 group-hover:after:content-['Work'] font-bold		 text-9xl after:content-['I_am'] hover:cursor-pointer" />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 1 }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
                delay: 1,
                type: "spring",
                bounce: 0.3,
              }}
            >
              <div className="group">
                <h1 className="hover:transition-all hover:duration-500 text-[#205375] group-hover:ml-8 group-hover:after:content-['Contact'] font-bold		 text-9xl after:content-['RDev'] hover:cursor-pointer" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-7/12">
          <Canvas
            className={css.canvas}
            // camera={{
            //   position: [6, 10, 16],
            //   fov: 22,
            // }}
            camera={{ position: [0, -1.3, 15], fov: 18, near: 0.1, far: 1000 }}
          >
            <ambientLight color={"#FFFFFF"} intensity={2.5} />
            <Suspense>
              <Model />
              <Rig />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 1, state.mouse.y / 1, 55),
      0.1
    );
  });
}
