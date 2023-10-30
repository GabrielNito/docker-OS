import '../css/style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scene, camera)

const jupiterTexture = new THREE.TextureLoader().load('../img/jupiter.jpg')
const normalTexture = new THREE.TextureLoader().load('../img/normal.jpg')

const geometry = new THREE.SphereGeometry(15, 30, 30)
const material = new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalTexture
})
const jupiter = new THREE.Mesh(geometry, material)
scene.add(jupiter)

const pointLight = new THREE.PointLight(0xffffff, 500)
pointLight.position.set(20, 0, 20)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
scene.add(pointLight)
scene.add(ambientLight)

function animate() {
    requestAnimationFrame(animate)
    jupiter.rotation.y += 0.001
    renderer.render(scene, camera)
}
animate()