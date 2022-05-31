import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import css from "../styles/Home.module.css";
import Box from "./Box";
import Draggable from "./Draggable";
import Floor from "./Floor";
import LightBulb from "./LightBulb";
import OrbitControls from "./OrbitControls";

export default function ModelThree() {
  return (
    <div>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <OrbitControls />
        <Floor />
      </Canvas>
    </div>
  );
}
