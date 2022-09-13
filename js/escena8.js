//escenario
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x008000)

//fondo
let loader = new THREE.TextureLoader();
loader.load('../imagenes/arcoiris.jpg', function(texture){
 scene.background = texture;
});


//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//render
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//GEOMETRIAS 
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const textureLoader= new THREE.TextureLoader();
const matcap= textureLoader.load('../imagenes/metal.jpg')

const material13 = new THREE.MeshNormalMaterial()
material13.matcap = matcap
material13.flatShading = true

const cube = new THREE.Mesh(geometry,material13)
scene.add(cube);
camara.position.z = 20;
camara.position.x = 1;
camara.position.y = 1;

//edges
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x3F2212 } ) );
scene.add( line );

//animación 
function animate(){
    requestAnimationFrame( animate );
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    render.render( scene, camara );
}
animate();