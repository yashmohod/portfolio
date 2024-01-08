import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from "react";

function Box() {
    function Box(props) {
        // This reference will give us direct access to the mesh
        const meshRef = useRef()
        // Set up state for the hovered and active state
        // Subscribe this component to the render-loop, rotate the mesh every frame
        useFrame((state, delta) => {
            meshRef.current.rotation.x += delta;
            meshRef.current.rotation.y += delta;
            meshRef.current.rotation.z += delta;
        })
        // Return view, these are regular three.js elements expressed in JSX
        return (
            <mesh
                {...props}
                ref={meshRef}
                scale={1}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color={'orange'} />
            </mesh>
        )
    }
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    );
}

export default Box;