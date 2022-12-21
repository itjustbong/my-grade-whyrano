import React from 'react';
import { useGLTF } from '@react-three/drei';

function Medal3D() {
  const { nodes, materials }: any = useGLTF('../assets/3d/medalA.gltf');
  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_all1_Texture1_0.geometry}
            material={materials.Texture1}
          />
        </group>
      </group>
    </group>
  );
}

export default Medal3D;
