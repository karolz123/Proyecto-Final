//escenario
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//renderización
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//Metalizado
const textureLoader = new THREE.TextureLoader()
const matcap = textureLoader.load('../img/metal.jpg')

const material = new THREE. MeshStandardMaterial()
material.matcap = matcap 
material.color.set('blue')
material.metalness = 1;
material.roughness = 0;

//LightDirection
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1000)
directionalLight.position.set(2, 4, 1)
scene.add(directionalLight)

//Geometrias
const geometry = new THREE.TorusKnotGeometry( 10, 3, 70, 9, 42, 10 );
const torusKnot = new THREE.Mesh( geometry, material );

const geometria = new THREE.BoxGeometry( 4, 4, 4 );
const cube = new THREE.Mesh(geometria, material)

const geometr = new THREE.CapsuleGeometry( 3, 3, 8, 16 );
const capsule = new THREE.Mesh(geometr, material)

const geomet = new THREE.ConeGeometry( 5, 10, 12 );
const cone = new THREE.Mesh(geomet,material)

const object = [torusKnot, cube, capsule, cone]
const controls = new THREE.DragControls(object, camara, render.domElement)

controls.addEventListener('hoveron', function (event){
    event.object.material.wireframe = true; 
    event.object.scale.y *=2;
})

controls.addEventListener('hoveroff', function (event){
    event.object.material.wireframe = false;
    event.object.scale.y /=2;
})

//Controles
scene.background = new THREE.Color(0xeeeeee)
const flyControls = new THREE.FlyControls(camara, render.domElement)
flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;

camara.position.z = 50;
camara.position.x = 0;
camara.position.y = 0;
torusKnot.position.x = -40
torusKnot.position.z = 5
cube.position.z = 40
capsule.position.x = 20
capsule.position.z = 20
cone.position.x = 60

//animación 
function animate(){
    requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.x += 0.01;
 flyControls.update(0.5);
    
    render.render( scene, camara );
    scene.add(torusKnot);
    scene.add(cube)
    scene.add(capsule)
    scene.add(cone)
    
}
animate();
