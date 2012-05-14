// Generated by CoffeeScript 1.3.1
(function() {
  var Scene,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Scene = (function() {

    Scene.name = 'Scene';

    function Scene(container) {
      this.animate = __bind(this.animate, this);

      var $container, ambientLight, auxLight, camera, height, mainLight, renderer, scene, width, _ref;
      $container = $(container);
      width = $container.width();
      height = $container.height();
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(30, width / height, 1, 1500);
      camera.position.y = 400;
      camera.lookAt(new THREE.Vector3());
      scene.add(camera);
      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 1);
      renderer.autoClear = false;
      $container.append(renderer.domElement);
      ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambientLight);
      mainLight = new THREE.DirectionalLight(0xffffff, 1);
      mainLight.position.set(1, 2, 4).normalize();
      scene.add(mainLight);
      auxLight = new THREE.DirectionalLight(0xffffff, 1);
      auxLight.position.set(-4, -1, -2).normalize();
      scene.add(auxLight);
      _ref = [camera, scene, renderer], this.camera = _ref[0], this.scene = _ref[1], this.renderer = _ref[2];
    }

    Scene.prototype.animate = function() {
      requestAnimationFrame(this.animate);
      this.renderer.clear();
      return this.renderer.render(this.scene, this.camera);
    };

    return Scene;

  })();

  this.Scene = Scene;

}).call(this);
