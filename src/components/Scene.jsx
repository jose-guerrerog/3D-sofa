import { PresentationControls, Stage } from "@react-three/drei";
import Sofa from "./Sofa";

import React from "react";

function Scene() {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage
        environment={"city"}
        intensity={0.6}
        contactShadow={false}
      >
        <Sofa />
      </Stage>
    </PresentationControls>
  );
}

export default Scene;
