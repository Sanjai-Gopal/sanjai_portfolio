/* ========================================
   THREE.JS - 3D Background Animation
   ======================================== */

class ThreeBackground {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.objects = [];
        this.mouseX = 0;
        this.mouseY = 0;
        
        this.init();
        this.createObjects();
        this.animate();
        this.addEventListeners();
    }

    init() {
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0f172a);

        // Camera
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 30;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x0f172a, 1);
        
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);

        const light1 = new THREE.PointLight(0x8b5cf6, 1, 50);
        light1.position.set(10, 10, 10);
        this.scene.add(light1);

        const light2 = new THREE.PointLight(0x3b82f6, 1, 50);
        light2.position.set(-10, -10, 10);
        this.scene.add(light2);
    }

    createObjects() {
        // Create floating cubes
        for (let i = 0; i < 50; i++) {
            const size = Math.random() * 0.5 + 0.2;
            const geometry = new THREE.BoxGeometry(size, size, size);
            
            // Color gradient
            const hue = Math.random() * 0.2 + 0.7; // Purple to blue range
            const color = new THREE.Color().setHSL(hue, 0.8, 0.5);
            
            const material = new THREE.MeshStandardMaterial({
                color: color,
                emissive: color.clone().multiplyScalar(0.3),
                roughness: 0.2,
                metalness: 0.8,
                transparent: true,
                opacity: 0.7
            });
            
            const cube = new THREE.Mesh(geometry, material);
            
            // Random positions in a sphere
            const radius = 20;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            cube.position.x = radius * Math.sin(phi) * Math.cos(theta);
            cube.position.y = radius * Math.sin(phi) * Math.sin(theta);
            cube.position.z = radius * Math.cos(phi);
            
            // Random rotation
            cube.rotation.x = Math.random() * Math.PI;
            cube.rotation.y = Math.random() * Math.PI;
            
            // Store custom properties for animation
            cube.userData = {
                speed: Math.random() * 0.02 + 0.01,
                rotationSpeed: Math.random() * 0.02,
                originalPosition: cube.position.clone()
            };
            
            this.scene.add(cube);
            this.objects.push(cube);
        }

        // Create floating spheres
        for (let i = 0; i < 30; i++) {
            const geometry = new THREE.SphereGeometry(Math.random() * 0.3 + 0.1, 16, 16);
            
            const hue = Math.random() * 0.2 + 0.5;
            const color = new THREE.Color().setHSL(hue, 0.9, 0.6);
            
            const material = new THREE.MeshStandardMaterial({
                color: color,
                emissive: color.clone().multiplyScalar(0.2),
                roughness: 0.1,
                metalness: 0.3,
                transparent: true,
                opacity: 0.6
            });
            
            const sphere = new THREE.Mesh(geometry, material);
            
            const radius = 25;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            sphere.position.x = radius * Math.sin(phi) * Math.cos(theta);
            sphere.position.y = radius * Math.sin(phi) * Math.sin(theta);
            sphere.position.z = radius * Math.cos(phi);
            
            sphere.userData = {
                speed: Math.random() * 0.01 + 0.005,
                originalPosition: sphere.position.clone()
            };
            
            this.scene.add(sphere);
            this.objects.push(sphere);
        }

        // Create connection lines between nearby objects
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8b5cf6, opacity: 0.1, transparent: true });
        
        for (let i = 0; i < this.objects.length; i++) {
            for (let j = i + 1; j < this.objects.length; j++) {
                const distance = this.objects[i].position.distanceTo(this.objects[j].position);
                
                if (distance < 8 && Math.random() > 0.95) {
                    const points = [
                        this.objects[i].position,
                        this.objects[j].position
                    ];
                    
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    const line = new THREE.Line(geometry, lineMaterial);
                    this.scene.add(line);
                }
            }
        }

        // Create a central glowing sphere
        const centerGeometry = new THREE.SphereGeometry(1.5, 32, 32);
        const centerMaterial = new THREE.MeshStandardMaterial({
            color: 0x8b5cf6,
            emissive: 0x4c1d95,
            roughness: 0.1,
            metalness: 0.2
        });
        
        const centerSphere = new THREE.Mesh(centerGeometry, centerMaterial);
        centerSphere.position.set(0, 0, 0);
        this.scene.add(centerSphere);
        
        // Add particles around center
        const particleCount = 1000;
        const particleGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount * 3; i += 3) {
            const radius = 3 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
            particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            particlePositions[i + 2] = radius * Math.cos(phi);
        }
        
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
            color: 0x8b5cf6,
            size: 0.05,
            transparent: true,
            opacity: 0.6
        });
        
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        this.scene.add(particles);
        this.objects.push(particles);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate objects based on mouse position
        this.objects.forEach(obj => {
            if (obj.isMesh) {
                obj.rotation.x += 0.001;
                obj.rotation.y += 0.002;
                
                // Orbit movement
                const speed = obj.userData.speed || 0.01;
                const time = Date.now() * speed;
                
                if (obj.userData.originalPosition) {
                    obj.position.x = obj.userData.originalPosition.x + Math.sin(time) * 2;
                    obj.position.y = obj.userData.originalPosition.y + Math.cos(time) * 2;
                }
            }
        });

        // Camera movement based on mouse
        this.camera.position.x += (this.mouseX * 5 - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouseY * 5 - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.onResize());
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(e) {
        this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('canvas-container')) {
        new ThreeBackground();
    }
});
