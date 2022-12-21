import React from 'react';
import { useGLTF } from '@react-three/drei';

function Medal3D() {
  // const gltf: any = useGLTF('../assets/3d/medalA.gltf');
  const gltf: any = useGLTF('assets/3d/medalA.gltf');
  return <primitive object={gltf.scene} />;
}

export default Medal3D;
