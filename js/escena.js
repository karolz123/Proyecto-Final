//ESCENARIO

let scene;

function init(){
const scene = new THREE.Scene();
var loader = new THREE.TextureLoader();

loader.load("../IMG/paisajeinterior.jpg", function(texture){
scene.background = texture;
});

//CAMARA
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1 );

//RENDER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const luz = new THREE.DirectionalLight(0xffffff, 6);
luz.position.set(4, 8, 4);
scene.add(luz)

//3D
const loader2 = new THREE.GLTFLoader();
loader2.load("../IMG/TROLL/scene.gltf", function(gltf){
    troll = gltf.scene.children[0];
    troll.scale.set(0.2, 0.2, 0.2);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    troll.position.y = -10
    troll.position.x = 0
})

const loader3 = new THREE.GLTFLoader();
loader3.load("../IMG/Anciana1/scene.gltf", function(gltf){
    anciana = gltf.scene.children[0];
    anciana.scale.set(0.7, 0.7, 0.7);
    scene.add(gltf.scene)
    renderer.render(scene, camera);
    anciana.position.y = -1
    anciana.position.x = -10
})

//CONTROLADORES
var control = new THREE.OrbitControls(camera, renderer.domElement)
control.maxDistance = 40
control.minDistance = 5

camera.position.z = 20;

//FUNCION
function animate() {
requestAnimationFrame( animate );
renderer.render( scene, camera, );
//flycontrols.update(0.5)
}
animate();
}

init();