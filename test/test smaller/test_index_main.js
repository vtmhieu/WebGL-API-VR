
const objLoader = new THREE.OBJLoader();
const objFilePath = 'data_return/out.obj';

objLoader.load(objFilePath, (object) => {
  console.log('OBJ file loaded successfully:', object);
}, (progressEvent) => {
  // progress callback, you can use it to show a loading progress bar
  const percentLoaded = Math.round((progressEvent.loaded / progressEvent.total) * 100);
  console.log('Loading progress:', percentLoaded + '%');
}, (error) => {
  console.error('Error loading OBJ file:', error);
});
