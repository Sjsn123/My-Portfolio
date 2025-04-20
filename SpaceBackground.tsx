import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Aurora() {
  const auroraRef = useRef();
  const auroraPoints = useMemo(() => {
    const points = [];
    const numPoints = 100;
    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * 400;
      const y = 50 + Math.random() * 100;
      const z = (Math.random() - 0.5) * 400;
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  }, []);

  const auroraColors = useMemo(() => {
    const colors = [];
    const color1 = new THREE.Color('#64ffda');
    const color2 = new THREE.Color('#0891b2');
    const numPoints = 100;
    
    for (let i = 0; i < numPoints; i++) {
      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors.push(mixedColor.r, mixedColor.g, mixedColor.b);
    }
    return new Float32Array(colors);
  }, []);

  useFrame(({ clock }) => {
    if (auroraRef.current) {
      const time = clock.getElapsedTime();
      const positions = auroraRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + positions[i] * 0.01) * 0.1;
        positions[i] += Math.cos(time + positions[i + 1] * 0.01) * 0.1;
      }
      
      auroraRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={auroraRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={auroraPoints.length}
          array={new Float32Array(auroraPoints.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={auroraPoints.length}
          array={auroraColors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={3}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function RotatingStars() {
  const starsRef = useRef();
  const [fallingStar] = useMemo(() => [new THREE.Vector3()], []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = clock.getElapsedTime() * 0.05;
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return <Stars ref={starsRef} radius={300} depth={50} count={7000} factor={6} saturation={0} fade speed={1.5} />;
}

function FallingStars() {
  const groupRef = useRef();
  const stars = useMemo(() => 
    Array.from({ length: 50 }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 400,
        200 + Math.random() * 100,
        (Math.random() - 0.5) * 400
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        -0.5 - Math.random() * 0.5,
        (Math.random() - 0.5) * 0.2
      ),
      size: 0.1 + Math.random() * 0.3
    })), []
  );

  useFrame(() => {
    stars.forEach((star, i) => {
      star.position.add(star.velocity);
      if (star.position.y < -200) {
        star.position.set(
          (Math.random() - 0.5) * 400,
          200,
          (Math.random() - 0.5) * 400
        );
      }
      if (groupRef.current) {
        groupRef.current.children[i].position.copy(star.position);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <mesh key={i} position={star.position.toArray()}>
          <sphereGeometry args={[star.size, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

function NorthernLights() {
  const materialRef = useRef();
  
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  const auroraShader = {
    uniforms: {
      time: { value: 0 },
      color1: { value: new THREE.Color('#64ffda') },
      color2: { value: new THREE.Color('#0891b2') }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      
      void main() {
        float noise = sin(vUv.x * 10.0 + time) * 0.5 + 0.5;
        noise *= sin(vUv.y * 5.0 + time * 0.5) * 0.5 + 0.5;
        vec3 color = mix(color1, color2, noise);
        gl_FragColor = vec4(color, noise * 0.5);
      }
    `
  };

  return (
    <mesh position={[0, 100, -200]} rotation={[-Math.PI * 0.1, 0, 0]}>
      <planeGeometry args={[400, 200, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        args={[auroraShader]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function Meteors() {
  const groupRef = useRef();
  const meteors = useMemo(() => 
    Array.from({ length: 20 }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 400,
        200 + Math.random() * 100,
        (Math.random() - 0.5) * 400
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 1,
        -2 - Math.random() * 2,
        (Math.random() - 0.5) * 1
      ),
      trail: Array.from({ length: 10 }, () => new THREE.Vector3())
    })), []
  );

  useFrame(() => {
    meteors.forEach((meteor, i) => {
      meteor.position.add(meteor.velocity);
      if (meteor.position.y < -200) {
        meteor.position.set(
          (Math.random() - 0.5) * 400,
          200,
          (Math.random() - 0.5) * 400
        );
      }
      if (groupRef.current) {
        const meteorMesh = groupRef.current.children[i];
        meteorMesh.position.copy(meteor.position);
        meteorMesh.scale.x = 2 + Math.sin(Date.now() * 0.01) * 0.5;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {meteors.map((meteor, i) => (
        <mesh key={i} position={meteor.position.toArray()}>
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshBasicMaterial color="#ff4444" />
        </mesh>
      ))}
    </group>
  );
}

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
        <FallingStars />
        <Meteors />
        <Aurora />
        <NorthernLights />
      </Canvas>
    </div>
  );
}