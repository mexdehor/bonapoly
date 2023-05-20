import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Home = () => {
	return (
		<div className="relative flex flex-col items-center justify-center w-screen h-screen">
			<Canvas className="w-full h-full bg-black">
				<ambientLight />
				<OrbitControls />
				<RotatingBox />
			</Canvas>
		</div>
	)
}

export const RotatingBox = () => {
	const mesh = React.useRef<THREE.Mesh>(null!)
	useFrame(() => {
		if (mesh.current) {
			mesh.current.rotation.x = mesh.current.rotation.y += 0.01
		}
	})

	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
			<meshStandardMaterial attach="material" color="hotpink" />
		</mesh>
	)
}

export default Home
