// import React from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';

// export const EnlargeMedal3D = () => {
//   const myMesh = React.useRef({ rotation: { x: 0 } });

//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     myMesh.current.rotation.x = a;
//   });

//   return (
//     <Canvas style={{ position: 'absolute', width: '100%', height: '100%' }}>
//       <mesh position={[0, 0, 0]}>
//         <ambientLight intensity={0.1} />
//         <directionalLight color="white" position={[0, 0, 5]} />
//         <boxGeometry />
//         <meshStandardMaterial />
//       </mesh>
//     </Canvas>
//   );
// };
import React from 'react';
import Medal3D from './Medal3D';
import { Mesh } from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

function MyRotatingBox() {
  const myMesh = React.useRef<Mesh>(null!);

  useFrame(() => {
    myMesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={myMesh} scale={[1, 1, 1]}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default function EnlargeMedal3D() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 9999,
      }}
      orthographic
      camera={{
        zoom: 100,
        position: [2, 2, 2],
        top: 1,
        bottom: -1,
        near: 0.1,
        far: 100,
      }}
    >
      <Medal3D />
      <MyRotatingBox />
      <ambientLight intensity={0.1} />
      <directionalLight />
    </Canvas>
  );
}
