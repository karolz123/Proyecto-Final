//escenario
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)


//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//GEOMETRIAS 
const textureLoader = new THREE.TextureLoader()
const matcap = textureLoader.load('../img/metalizada.jpg')
const cubeTextureLoader = new THREE.CubeTextureLoader()
const evm = cubeTextureLoader.load([
    "../img/.jpg"
])




const material = new THREE. MeshStandardMaterial()
material.matcap = matcap 
material.color.set('#ff0000')
material.metalness = 1;
material.roughness = 0;
scene.background = new THREE.Color(0xeeeeee)

const ambientaLLight = new THREE.AmbientLight(0xffffff,1)
scene.add(ambientaLLight);

const pointLight = new THREE.PointLight(0xffffff, 2)
scene.add(pointLight)
pointLight.position.set(5, 5, 5)

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const torusKnot = new THREE.Mesh( geometry, material );
scene.background = new THREE.Color(0xeeeeee)


camara.position.z = 40;
camara.position.x = 0;
camara.position.y = 0;

//animación 
function animate(){
    requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.x += 0.01;
    
    render.render( scene, camara );
    scene.add( torusKnot );
}
animate();