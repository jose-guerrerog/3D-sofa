/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useSofaStore } from "../store/sofaStore";

function Sofa(props) {
  const { nodes, materials } = useGLTF("./models/sofa.glb");
  const material = useSofaStore(state => state.material)
  const color = useSofaStore(state => state.color)

  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  const fabricTextureProps = useTexture({
    // map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });

  leatherTextureProps.normalMap.repeat.set(3, 3);
  leatherTextureProps.roughnessMap.repeat.set(3, 3);
  leatherTextureProps.aoMap.repeat.set(3, 3);

  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS =
    leatherTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  fabricTextureProps.normalMap.repeat.set(3, 3);
  fabricTextureProps.roughnessMap.repeat.set(3, 3);
  fabricTextureProps.aoMap.repeat.set(3, 3);

  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT =
    THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS =
    fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.282}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.025}>
          <group scale={0.394}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sofa_geo_Leather_mat_0.geometry}
              material={materials.Leather_mat}
            >
              <meshStandardMaterial
                {...(material === "leather"
                ? leatherTextureProps
                : fabricTextureProps)}
                color={color.color}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.sofa_geo_Leather_mat_0_1.geometry}
              material={materials.Leather_mat}
            >
               <meshStandardMaterial
                 {...(material === "leather"
                 ? leatherTextureProps
                 : fabricTextureProps)}
                color={color.color}
              />
            </mesh>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.legs_geo4_wood_mat_0.geometry}
            material={materials.wood_mat}
            scale={0.394}
          />
        </group>
      </group>
    </group>
  );
}

export default Sofa;

useGLTF.preload("./models/sofa2.glb");
