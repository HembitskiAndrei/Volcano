import * as BABYLON from "@babylonjs/core";
import { GLTFFileLoader, GLTFLoaderAnimationStartMode } from "@babylonjs/loaders/glTF";
import Camera from "../objects/Camera";
import LavaMaterial from "../objects/materials/LavaMaterial";
import { createSplashPArticles, setupAnimationSheet, createLakeSplashPArticles, createDownSplashPArticles } from "../utils/createSplashParticles";
import { textureSettings } from "../utils/textureSettings";
import { setMeshEmitter } from "../utils/setMeshEmitter";

export default class MainScene extends BABYLON.Scene {
  engine: BABYLON.Engine;
  canvas: HTMLCanvasElement;
  assetsManager: BABYLON.AssetsManager;
  camera: Camera;

  constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement, options?: BABYLON.SceneOptions) {
    super(engine, options);
    this.engine = engine;
    this.canvas = canvas;

    this.setRenderingAutoClearDepthStencil(2, false);

    BABYLON.SceneLoader.OnPluginActivatedObservable.add(function (plugin) {
      if (plugin.name === "gltf" && plugin instanceof GLTFFileLoader) {
        plugin.animationStartMode = GLTFLoaderAnimationStartMode.NONE;
        plugin.compileMaterials = true;
        plugin.compileShadowGenerators = false;
      }
    });

    BABYLON.ParticleHelper.BaseAssetsUrl = `${window.location.href}assets`;

    this.assetsManager = new BABYLON.AssetsManager(this);

    const helper = this.createDefaultEnvironment({
      skyboxColor: new BABYLON.Color3(0.5, 0.5, 0.75),
      groundColor: new BABYLON.Color3(1, 1, 2),
      groundSize: 220,
      skyboxSize: 220,
    });
    (helper?.ground as BABYLON.Mesh).alphaIndex = 0.5;
    (helper?.skybox as BABYLON.Mesh).alphaIndex = 0.5;
    (helper?.ground as BABYLON.Mesh).position.y -= 15;

    this.camera = new Camera("camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), this, this.canvas);

    const pipeline = new BABYLON.DefaultRenderingPipeline("default", true, this);

    this.imageProcessingConfiguration.toneMappingEnabled = true;
    this.imageProcessingConfiguration.toneMappingType = BABYLON.ImageProcessingConfiguration.TONEMAPPING_ACES;
    this.imageProcessingConfiguration.exposure = 1.5;
    this.imageProcessingConfiguration.contrast = 1.5;

    pipeline.samples = 8;

    pipeline.fxaaEnabled = true;

    pipeline.bloomEnabled = true;
    pipeline.bloomThreshold = 0.8;
    pipeline.bloomWeight = 0.25;
    pipeline.bloomKernel = 128;
    pipeline.bloomScale = 0.5;

    const light = new BABYLON.DirectionalLight(
      "DirectionalLight",
      new BABYLON.Vector3(1, -0.35, -2),
      this
    );
    light.intensity = 1.0;

    const rightSplashParticles = createSplashPArticles(this, 3, Math.PI / 4);
    const leftSplashParticles = createSplashPArticles(this, 2, Math.PI / 6);
    const downSplashParticles = createDownSplashPArticles(this, 3);
    const lake0SplashParticles = createLakeSplashPArticles(this, 2, Math.PI / 6);
    const alternativeLake0SplashParticles = createLakeSplashPArticles(this, 2, Math.PI / 6);
    alternativeLake0SplashParticles.billboardMode = BABYLON.ParticleSystem.BILLBOARDMODE_STRETCHED;
    alternativeLake0SplashParticles.minInitialRotation = -Math.PI;
    alternativeLake0SplashParticles.maxInitialRotation = Math.PI;
    const lakeSplashParticles = createLakeSplashPArticles(this, 2, Math.PI / 6);
    const alternativeLakeSplashParticles = createLakeSplashPArticles(this, 2, Math.PI / 6);
    alternativeLakeSplashParticles.billboardMode = BABYLON.ParticleSystem.BILLBOARDMODE_STRETCHED;
    alternativeLakeSplashParticles.minInitialRotation = -Math.PI;
    alternativeLakeSplashParticles.maxInitialRotation = Math.PI;
    const lake1SplashParticles = createLakeSplashPArticles(this, 2, Math.PI / 6);
    const alternativeLake1SplashParticles = createLakeSplashPArticles(this, 2, Math.PI / 6);
    alternativeLake1SplashParticles.billboardMode = BABYLON.ParticleSystem.BILLBOARDMODE_STRETCHED;
    alternativeLake1SplashParticles.minInitialRotation = -Math.PI;
    alternativeLake1SplashParticles.maxInitialRotation = Math.PI;

    const lavaMaterial = new LavaMaterial("LavaMaterial");
    const lakeMaterial = new LavaMaterial("LakeMaterial");
    (lakeMaterial.getBlockByName("SpeedFactor") as BABYLON.InputBlock).value = -0.154;
    (lakeMaterial.getBlockByName("SpeedFactor2") as BABYLON.InputBlock).value = -0.035;
    const lakeGradient = (lakeMaterial.getBlockByName("GradientOffset") as BABYLON.GradientBlock);
    lakeGradient.colorSteps = [];
    lakeGradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.74, new BABYLON.Color3(0, 0, 0)));
    lakeGradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.85, new BABYLON.Color3(1, 1, 1)));
    lakeMaterial.build();
    const cupMaterial = new LavaMaterial("CupMaterial");

    const lavaTask = this.assetsManager.addTextureTask(
      "lavaTask",
      "assets/textures/lava.jpg",
      false,
      false
    );
    lavaTask.onSuccess = task => {
      textureSettings(task.texture);
      (lavaMaterial.getBlockByName("BaseColor") as BABYLON.TextureBlock).texture = task.texture;
      (lavaMaterial.getBlockByName("EdgeTexture") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("BaseColor") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("BaseColor2") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("EdgeTexture") as BABYLON.TextureBlock).texture = task.texture;
      (lakeMaterial.getBlockByName("EdgeTexture") as BABYLON.TextureBlock).texture = task.texture;
    };

    const lavaSecondTask = this.assetsManager.addTextureTask(
      "lavaSecondTask",
      "assets/textures/lava2.jpg",
      false,
      false
    );
    lavaSecondTask.onSuccess = task => {
      textureSettings(task.texture);
      (lavaMaterial.getBlockByName("BaseColor2") as BABYLON.TextureBlock).texture = task.texture;
      (lakeMaterial.getBlockByName("BaseColor") as BABYLON.TextureBlock).texture = task.texture;
    };

    const grTask = this.assetsManager.addTextureTask(
      "grTask",
      "assets/textures/gr.jpg",
      false,
      false
    );
    grTask.onSuccess = task => {
      (lavaMaterial.getBlockByName("HeightTexture") as BABYLON.TextureBlock).texture = task.texture;
      (lakeMaterial.getBlockByName("HeightTexture") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("HeightTexture") as BABYLON.TextureBlock).texture = task.texture;
    };

    const alphaTextureTask = this.assetsManager.addTextureTask(
      "alphaTextureTask",
      "assets/textures/alpha.jpg",
      false,
      false
    );
    alphaTextureTask.onSuccess = task => {
      (lavaMaterial.getBlockByName("AlphaTexture") as BABYLON.TextureBlock).texture = task.texture;
      (lakeMaterial.getBlockByName("AlphaTexture") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("AlphaTexture") as BABYLON.TextureBlock).texture = task.texture;
    };

    const edgeTextureTask = this.assetsManager.addTextureTask(
      "edgeTextureTask",
      "assets/textures/edgelava.jpg",
      false,
      false
    );
    edgeTextureTask.onSuccess = task => {
      textureSettings(task.texture);
      (lakeMaterial.getBlockByName("BaseColor2") as BABYLON.TextureBlock).texture = task.texture;
    };

    const normalTextureTask = this.assetsManager.addTextureTask(
      "normalTextureTask",
      "assets/textures/normalMap.jpg",
      false,
      false
    );
    normalTextureTask.onSuccess = task => {
      textureSettings(task.texture);
      (lakeMaterial.getBlockByName("NormalMap") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("NormalMap") as BABYLON.TextureBlock).texture = task.texture;
      (lavaMaterial.getBlockByName("NormalMap") as BABYLON.TextureBlock).texture = task.texture;
    };

    const normalTexture2Task = this.assetsManager.addTextureTask(
      "normalTexture2Task",
      "assets/textures/normalMap2.jpg",
      false,
      false
    );
    normalTexture2Task.onSuccess = task => {
      textureSettings(task.texture);
      (lakeMaterial.getBlockByName("NormalMap2") as BABYLON.TextureBlock).texture = task.texture;
      (cupMaterial.getBlockByName("NormalMap2") as BABYLON.TextureBlock).texture = task.texture;
      (lavaMaterial.getBlockByName("NormalMap2") as BABYLON.TextureBlock).texture = task.texture;
    };

    const splashTextureTask = this.assetsManager.addTextureTask(
      "splashTextureTask",
      "assets/textures/Splash_SpriteSheet_8x8.png",
      false,
      false
    );
    splashTextureTask.onSuccess = task => {
      setupAnimationSheet(rightSplashParticles, task.texture, 512, 512, 8, 8, 1, false);
      setupAnimationSheet(leftSplashParticles, task.texture, 512, 512, 8, 8, 1, false);
      setupAnimationSheet(downSplashParticles, task.texture, 512, 512, 8, 8, 1, false);
    };

    const otherSplashTextureTask = this.assetsManager.addTextureTask(
      "otherSplashTextureTask",
      "assets/textures/Splash_SpriteSheet_8x8_1.png",
      false,
      false
    );
    otherSplashTextureTask.onSuccess = task => {
      setupAnimationSheet(alternativeLakeSplashParticles, task.texture, 512, 512, 8, 8, 1.25, false);
      setupAnimationSheet(alternativeLake0SplashParticles, task.texture, 512, 512, 8, 8, 1.25, false);
      setupAnimationSheet(alternativeLake1SplashParticles, task.texture, 512, 512, 8, 8, 1.25, false);
    };

    const lakeSplashTextureTask = this.assetsManager.addTextureTask(
      "lakeSplashTextureTask",
      "assets/textures/sheets.png",
      false,
      false
    );
    lakeSplashTextureTask.onSuccess = task => {
      setupAnimationSheet(lakeSplashParticles, task.texture, 960, 448, 15, 7, 1.25, false);
      setupAnimationSheet(lake0SplashParticles, task.texture, 960, 448, 15, 7, 1.25, false);
      setupAnimationSheet(lake1SplashParticles, task.texture, 960, 448, 15, 7, 1.25, false);
    };

    const smokeTextureTask = this.assetsManager.addTextureTask(
      "smokeTextureTask",
      "assets/textures/Smoke_SpriteSheet_8x8.png",
      false,
      false
    );

    const flareTextureTask = this.assetsManager.addTextureTask(
      "flareTextureTask",
      "assets/textures/Flare.png",
      false,
      false
    );

    const flameBlastTextureTask = this.assetsManager.addTextureTask(
      "flameBlastTextureTask",
      "assets/textures/FlameBlastSpriteSheet.png",
      false,
      false
    );

    BABYLON.ParticleHelper.CreateAsync("explode", this).then(set => {
      smokeTextureTask.onSuccess = task => {
        set.systems[0]["subEmitters"][0][1].particleSystem.particleTexture = task.texture;
        set.systems[1].particleTexture = task.texture;
        set.systems[2].particleTexture = task.texture;
        set.systems[3].particleTexture = task.texture;
        set.start();
      };

      flareTextureTask.onSuccess = task => {
        set.systems[0].particleTexture = task.texture;
      };

      flameBlastTextureTask.onSuccess = task => {
        set.systems[0]["subEmitters"][0][0].particleSystem.particleTexture = task.texture;
      };
    });

    const meshTaskVolcano = this.assetsManager.addContainerTask(
      "meshTaskVolcano",
      "",
      "./assets/meshes/",
      "volcano.glb",
    );
    meshTaskVolcano.onSuccess = task => {
      task.loadedContainer.instantiateModelsToScene(name => name, false);
      const lava = <BABYLON.Mesh>this.getMeshByName("lava");
      lava.alphaIndex = 1;
      const lava1 = <BABYLON.Mesh>this.getMeshByName("lava_1");
      lava1.alphaIndex = 0.9;
      const lava2 = <BABYLON.Mesh>this.getMeshByName("lava_2");
      lava2.alphaIndex = 1;
      const lava3 = <BABYLON.Mesh>this.getMeshByName("lava_3");
      lava3.alphaIndex = 0.7;
      const cup = <BABYLON.Mesh>this.getMeshByName("cup");
      cup.alphaIndex = 0.5;

      const lake = <BABYLON.Mesh>this.getMeshByName("lake");
      lake.alphaIndex = 0.9;
      const lake1 = <BABYLON.Mesh>this.getMeshByName("lake_1");
      lake1.alphaIndex = 0.8;

      const volcano = <BABYLON.Mesh>this.getMeshByName("volcano");

      const particleLake0 = <BABYLON.Mesh>this.getMeshByName("particles_lake_0");
      particleLake0.setEnabled(false);
      const particleLake = <BABYLON.Mesh>this.getMeshByName("particles_lake");
      particleLake.setEnabled(false);
      const particleLake1 = <BABYLON.Mesh>this.getMeshByName("particles_lake_1");
      particleLake1.setEnabled(false);
      const particleLava = <BABYLON.Mesh>this.getMeshByName("particles_lava");
      particleLava.setEnabled(false);

      lava.renderingGroupId = 1;
      lava1.renderingGroupId = 1;
      lava2.renderingGroupId = 1;
      lava3.renderingGroupId = 1;
      cup.renderingGroupId = 1;
      lake.renderingGroupId = 1;
      lake1.renderingGroupId = 1;
      volcano.renderingGroupId = 1;

      lava.material = lavaMaterial;
      lava1.material = lavaMaterial;
      lava2.material = lavaMaterial;
      lava3.material = lavaMaterial;
      lake.material = lakeMaterial;
      lake1.material = lakeMaterial;
      cup.material = cupMaterial;
      cup.material.alphaMode = BABYLON.Engine.ALPHA_ADD;

      setMeshEmitter(
        lakeSplashParticles,
        particleLake,
        lake,
        new BABYLON.Vector3(1, 0, -0.05),
        new BABYLON.Vector3(1, 0, 0.25),
        alternativeLakeSplashParticles
      );

      setMeshEmitter(
        lake0SplashParticles,
        particleLake0,
        lake,
        new BABYLON.Vector3(-0.05, 0, -1),
        new BABYLON.Vector3(0.25, 0, -1),
        alternativeLake0SplashParticles
      );

      setMeshEmitter(
        lake1SplashParticles,
        particleLake1,
        lake1,
        new BABYLON.Vector3(1, 0, -0.05),
        new BABYLON.Vector3(1, 0, 0.25),
        alternativeLake1SplashParticles
      );

      setMeshEmitter(
        downSplashParticles,
        particleLava,
        lava,
        new BABYLON.Vector3(0, 1, 0),
        new BABYLON.Vector3(-1, 1, 1)
      );
    }

    const rightParticlesEmitter = new BABYLON.AbstractMesh("rightParticlesEmitter");
    rightParticlesEmitter.position = new BABYLON.Vector3(1.4, -1.25, 11);
    rightSplashParticles.emitter = rightParticlesEmitter;

    const leftParticlesEmitter = new BABYLON.AbstractMesh("leftParticlesEmitter");
    leftParticlesEmitter.position = new BABYLON.Vector3(3.0, -1.5, 17);
    leftSplashParticles.emitter = leftParticlesEmitter;

    this.assetsManager.onFinish = () => {
      (lakeMaterial.getBlockByName("Time") as BABYLON.InputBlock).onValueChangedObservable.add(InputBlock => {
        if (InputBlock.value > 0.75) {
          if (!rightSplashParticles.isStarted()) {
            rightSplashParticles.start();
          }
          if (!leftSplashParticles.isStarted()) {
            leftSplashParticles.start();
          }
        }

        if (InputBlock.value > 2.5) {
          if (!downSplashParticles.isStarted()) {
            downSplashParticles.start();
          }
        }
        if (InputBlock.value > 5.525) {
          lakeSplashParticles.start();
          alternativeLakeSplashParticles.start();
          lake0SplashParticles.start();
          alternativeLake0SplashParticles.start();
          lake1SplashParticles.start();
          alternativeLake1SplashParticles.start();
          InputBlock.onValueChangedObservable.clear();
        }
      })
    };

    window.addEventListener("resize", () => {
      this.engine.resize();
    });

    this.engine.runRenderLoop(() => {
      this.render();
    });

    this.assetsManager.load();
  }
};
