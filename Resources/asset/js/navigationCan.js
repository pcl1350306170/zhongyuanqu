/// Scene
const sceneSettings = {
  width: () => $(window).width(),
  height: () => $(window).height(),
  angle: 45,
  aspect: () => sceneSettings.width() / sceneSettings.height(),
  close: 0.1,
  far: 10000
};

const sceneContainer = $("#scene");
const setSceneDimenstions = () =>
  sceneContainer.css({
    width: sceneSettings.width(),
    height: sceneSettings.height()
  });

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
const camera = new THREE.PerspectiveCamera(
  sceneSettings.angle,
  sceneSettings.aspect(),
  sceneSettings.close,
  sceneSettings.far
);

const scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(sceneSettings.width(), sceneSettings.height());
renderer.setClearColor(0xffffff, 0);

sceneContainer.append(renderer.domElement);

// Sphere settings
const sphereSettings = {
  radius: 10,
  segments: 60,
  rings: 60
};

// Sphere shape
let sph = new THREE.SphereGeometry(
  sphereSettings.radius,
  sphereSettings.segments,
  sphereSettings.rings
);

// Create spherical particles
let particles = [];

let xPiecesAmount = Math.round(sceneSettings.width() / 60);

for (let i = 1; i < 75; i++) {
  let row = new THREE.Object3D();
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 1 - i / 40
  });

  for (let j = -xPiecesAmount; j < xPiecesAmount; ++j) {
    let sphere = new THREE.Mesh(sph, sphereMaterial);

    sphere.position.x = 300 * j;
    sphere.position.z = -300 * i;

    row.add(sphere);
  }

  scene.add(row);

  particles[i] = row;
}

// Create light
const pointLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);

// set its position
pointLight.position.x = 2;
pointLight.position.y = 100;
pointLight.position.z = 2000;

// add to the scene
scene.add(pointLight);

camera.position.set(0, 400, -200);
camera.lookAt(new THREE.Vector3(0, 300, -1000));
renderer.render(scene, camera);

for (let i in particles) {
  let row = particles[i];

  TweenMax.to(row.position, 2, {
    y: Math.sin(i / 25) * 300 + 100,
    yoyo: true,
    repeat: -1,
    ease: Sine.easeInOut,
    delay: i / 10
  });
}

TweenMax.ticker.addEventListener("tick", () => {
  renderer.render(scene, camera);
});

/// Window events
$(window)
  .on("load resize", () => {
    setSceneDimenstions();

    if (typeof window.orientation == "undefined") {
      camera.aspect = sceneSettings.width() / sceneSettings.height();
      camera.updateProjectionMatrix();
      renderer.setSize(sceneSettings.width(), sceneSettings.height());
    }
  })
  .on("orientationchange", () => {
    setSceneDimenstions();

    camera.aspect = sceneSettings.width() / sceneSettings.height();
    camera.updateProjectionMatrix();
    renderer.setSize(sceneSettings.width(), sceneSettings.height());
  });
