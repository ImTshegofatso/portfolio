import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const sceneGroupRef = useRef<THREE.Group | null>(null);
  const autoRotateRef = useRef(true);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    
    // Create a group to hold all objects (for rotation)
    const sceneGroup = new THREE.Group();
    sceneGroupRef.current = sceneGroup;
    scene.add(sceneGroup);
    
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    rendererRef.current = renderer;

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.shadowMap.enabled = true;

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 0.6 : 1; // Scale down on mobile

    // Set up camera - closer on mobile
    camera.position.set(3 * scale, 2.5 * scale, 3 * scale);
    camera.lookAt(0, 0, 0);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0x6366f1, 0.3);
    backLight.position.set(-5, 3, -5);
    scene.add(backLight);

    // Create table top
    const tableTopGeometry = new THREE.BoxGeometry(2.2 * scale, 0.08 * scale, 1.2 * scale);
    const tableTopMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4a5568,
      roughness: 0.7,
      metalness: 0.1
    });
    const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);
    tableTop.position.y = 0.6 * scale;
    tableTop.receiveShadow = true;
    tableTop.castShadow = true;
    sceneGroup.add(tableTop);

    // Create table legs (4 legs)
    const legGeometry = new THREE.CylinderGeometry(0.04 * scale, 0.04 * scale, 0.6 * scale, 16);
    const legMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d3748,
      roughness: 0.5,
      metalness: 0.3
    });

    // Leg positions
    const legPositions = [
      { x: 0.9, z: 0.5 },
      { x: -0.9, z: 0.5 },
      { x: 0.9, z: -0.5 },
      { x: -0.9, z: -0.5 }
    ];

    legPositions.forEach(pos => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(pos.x * scale, 0.3 * scale, pos.z * scale);
      leg.castShadow = true;
      sceneGroup.add(leg);
    });

    // Create monitor stand
    const standGeometry = new THREE.BoxGeometry(0.12 * scale, 0.35 * scale, 0.12 * scale);
    const standMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d3748,
      roughness: 0.4,
      metalness: 0.5
    });
    const stand = new THREE.Mesh(standGeometry, standMaterial);
    stand.position.set(0, 0.82 * scale, 0);
    stand.castShadow = true;
    sceneGroup.add(stand);

    // Create monitor
    const monitorGeometry = new THREE.BoxGeometry(0.85 * scale, 0.55 * scale, 0.025 * scale);
    const monitorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a202c,
      roughness: 0.3,
      metalness: 0.6
    });
    const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
    monitor.position.set(0, 1.1 * scale, 0);
    monitor.castShadow = true;
    sceneGroup.add(monitor);

    // Create screen with glow
    const screenGeometry = new THREE.PlaneGeometry(0.78 * scale, 0.48 * scale);
    const screenMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x6366f1
    });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 1.1 * scale, 0.013 * scale);
    sceneGroup.add(screen);

    // Add screen glow
    const glowGeometry = new THREE.PlaneGeometry(0.82 * scale, 0.52 * scale);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.set(0, 1.1 * scale, 0.014 * scale);
    sceneGroup.add(glow);

    // Create keyboard
    const keyboardGeometry = new THREE.BoxGeometry(0.45 * scale, 0.025 * scale, 0.18 * scale);
    const keyboardMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d3748,
      roughness: 0.5,
      metalness: 0.4
    });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.position.set(0, 0.65 * scale, 0.35 * scale);
    keyboard.castShadow = true;
    sceneGroup.add(keyboard);

    // Create mouse
    const mouseGeometry = new THREE.BoxGeometry(0.06 * scale, 0.03 * scale, 0.09 * scale);
    mouseGeometry.scale(1, 1.2, 1);
    const mouseMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d3748,
      roughness: 0.4,
      metalness: 0.5
    });
    const mouse = new THREE.Mesh(mouseGeometry, mouseMaterial);
    mouse.position.set(0.5 * scale, 0.655 * scale, 0.3 * scale);
    mouse.castShadow = true;
    sceneGroup.add(mouse);

    // Mouse/Touch interaction for dragging
    let isDragging = false;
    let previousPosition = { x: 0, y: 0 };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (isHovered) {
        isDragging = true;
        autoRotateRef.current = false;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        previousPosition = { x: clientX, y: clientY };
      }
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging && sceneGroupRef.current) {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const deltaX = clientX - previousPosition.x;
        sceneGroupRef.current.rotation.y += deltaX * 0.01;
        previousPosition = { x: clientX, y: clientY };
      }
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Mouse events
    canvas.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch events for mobile
    canvas.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Auto-rotate when not hovered and not dragging
      if (sceneGroupRef.current && autoRotateRef.current && !isHovered) {
        sceneGroupRef.current.rotation.y += 0.003;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize with debounce
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;
        
        const newIsMobile = window.innerWidth < 768;
        const newScale = newIsMobile ? 0.6 : 1;
        
        // Update camera
        cameraRef.current.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        
        // Update renderer
        rendererRef.current.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Update camera position based on screen size
        cameraRef.current.position.set(3 * newScale, 2.5 * newScale, 3 * newScale);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      canvas.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, [isHovered]);

  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          autoRotateRef.current = true;
        }}
      />
    </div>
  );
}