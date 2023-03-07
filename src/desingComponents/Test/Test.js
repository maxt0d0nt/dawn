import React from 'react';
import './Test.css';
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei'




const Container = styled.div`
height: 100vh;
width: 100%
`
const Test = () => {
   
  return (
    <Container>
        <Canvas >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1}/>
            <directionalLight position={[3, 2, 1]} />
            <mesh>
    <torusKnotGeometry  />
    <meshStandardMaterial color="#e12c2c" />
    </mesh>
           
</Canvas>
    </Container>
  )
}

export default Test