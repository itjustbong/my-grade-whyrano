import { Canvas } from '@react-three/fiber';
import Medal3D from './Medal3D';

export function EnlargeMedal3D() {
  let scene = new THREE.Scene();

  return (
    <Canvas>
      <Medal3D />
    </Canvas>
  );
}
