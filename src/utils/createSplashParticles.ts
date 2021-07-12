import * as BABYLON from "@babylonjs/core";

export const setupAnimationSheet = function(
  system: BABYLON.ParticleSystem,
  texture: BABYLON.Texture,
  width: number,
  height: number,
  numSpritesWidth: number,
  numSpritesHeight: number,
  animationSpeed: number,
  isRandom: boolean
)
{
  system.isAnimationSheetEnabled = true;
  system.particleTexture = texture;
  system.spriteCellWidth = width / numSpritesWidth;
  system.spriteCellHeight = height / numSpritesHeight;
  const numberCells = numSpritesWidth * numSpritesHeight;
  system.startSpriteCellID = 0;
  system.endSpriteCellID = numberCells - 1;
  system.spriteCellChangeSpeed = animationSpeed;
  system.spriteRandomStartCell = isRandom;
  system.updateSpeed = 1/60;
};

const colorParticles = (system: BABYLON.ParticleSystem) => {
  system.addColorGradient(0.0, new BABYLON.Color4(1.9245, 1.6540, 1.0915, 1));
  system.addColorGradient(0.04, new BABYLON.Color4(1.4062, 1.1132, 0.5942, 1));
  system.addColorGradient(0.4, new BABYLON.Color4(1.6968, 1.685, 1.09105, 1.0));
  system.addColorGradient(0.7, new BABYLON.Color4(1.3886, 1.2266, 1.0, 1.0));
  system.addColorGradient(0.9, new BABYLON.Color4(1.4062, 1.1132, 0.5942, 1.0));
  system.addColorGradient(1.0, new BABYLON.Color4(1.6968, 1.685, 1.09105, 1.0));

  system.addRampGradient(0.0, new BABYLON.Color3(1, 1, 1));
  system.addRampGradient(0.7, new BABYLON.Color3(0.5, 0.5, 0.5));
  system.addRampGradient(1.0, new BABYLON.Color3(0.7968, 0.3685, 0.1105));
  system.useRampGradients = true;

  system.addColorRemapGradient(0, 0, 0.1);
  system.addColorRemapGradient(0.2, 0.1, 0.8);
  system.addColorRemapGradient(0.3, 0.2, 0.85);
  system.addColorRemapGradient(0.35, 0.4, 0.85);
  system.addColorRemapGradient(0.4, 0.5, 0.9);
  system.addColorRemapGradient(0.5, 0.95, 1.0);
  system.addColorRemapGradient(1.0, 0.95, 1.0);

  system.addSizeGradient(0, 1.0, 2.0);
  system.addSizeGradient(0.1, 2.0, 3.0);
  system.addSizeGradient(0.2, 4.0, 5.0);
  system.addSizeGradient(0.3, 4.0, 5.0);
  system.addSizeGradient(1.0, 4.0, 5.0);
};

const colorLakeParticles = (system: BABYLON.ParticleSystem) => {
  system.addColorGradient(0.0, new BABYLON.Color4(1.0245, 1.0540, 1.0915, 0));
  system.addColorGradient(0.04, new BABYLON.Color4(1.4062, 1.1132, 0.5942, 1));
  system.addColorGradient(0.4, new BABYLON.Color4(1.4968, 1.485, 0.8, 1.0));
  system.addColorGradient(0.7, new BABYLON.Color4(1.1886, 0.96, 0.8, 1.0));
  system.addColorGradient(0.9, new BABYLON.Color4(1.4062, 1.1132, 0.5942, 0));
  system.addColorGradient(1.0, new BABYLON.Color4(1.6968, 1.685, 1.09105, 0));

  system.addRampGradient(0.0, new BABYLON.Color3(1, 0.75, 0.75));
  system.addRampGradient(0.7, new BABYLON.Color3(0.75, 0.5, 0.5));
  system.addRampGradient(1.0, new BABYLON.Color3(0.7968, 0.3685, 0.1105));
  system.useRampGradients = true;

  system.addColorRemapGradient(0, 0, 0.1);
  system.addColorRemapGradient(0.2, 0.1, 0.8);
  system.addColorRemapGradient(0.3, 0.2, 0.85);
  system.addColorRemapGradient(0.35, 0.4, 0.85);
  system.addColorRemapGradient(0.4, 0.5, 0.9);
  system.addColorRemapGradient(0.5, 0.95, 1.0);
  system.addColorRemapGradient(1.0, 0.95, 1.0);

  system.addSizeGradient(0, 0.0, 0.0);
  system.addSizeGradient(0.1, 0.15, 0.25);
  system.addSizeGradient(0.2, 1.75, 2.75);
  system.addSizeGradient(0.3, 3.0, 4.0);
  system.addSizeGradient(0.7, 1.0, 2.0);
  system.addSizeGradient(1.0, 0.0, 0.0);
};

export const createSplashPArticles = (scene: BABYLON.Scene, radius: number, angle: number) => {
  const particleSystem = new BABYLON.ParticleSystem("Splash", 100, scene);
  colorParticles(particleSystem);
  particleSystem.isLocal = true;
  particleSystem.renderingGroupId = 2;

  particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

  particleSystem.color1 = new BABYLON.Color4(1.0, 0.8, 0.7, 1.0);
  particleSystem.color2 = new BABYLON.Color4(1.0, 0.5, 0.2, 1.0);
  particleSystem.colorDead = new BABYLON.Color4(0.2, 0, 0, 0.0);

  particleSystem.minSize = 5;
  particleSystem.maxSize = 10;

  particleSystem.minLifeTime = 1.0;
  particleSystem.maxLifeTime = 1.0;

  particleSystem.emitRate = 60;

  particleSystem.minScaleX = 1;
  particleSystem.maxScaleX = 1.5;
  particleSystem.minScaleY = 1;
  particleSystem.maxScaleY = 1.5;

  particleSystem.minInitialRotation = -Math.PI;
  particleSystem.maxInitialRotation = Math.PI;

  particleSystem.maxAngularSpeed = 1.0;
  particleSystem.minAngularSpeed = -1.0;

  particleSystem.gravity = new BABYLON.Vector3(0, -20, 0);

  particleSystem.createConeEmitter(radius, angle);

  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

  particleSystem.minEmitPower = 4;
  particleSystem.maxEmitPower = 5;
  particleSystem.updateSpeed = 1/60;

  return particleSystem
}

export const createDownSplashPArticles = (scene: BABYLON.Scene, radius: number) => {
  const particleSystem = new BABYLON.ParticleSystem("Splash", 100, scene);
  colorLakeParticles(particleSystem);
  particleSystem.isLocal = true;
  particleSystem.renderingGroupId = 2;

  particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

  particleSystem.color1 = new BABYLON.Color4(1.0, 0.8, 0.7, 1.0);
  particleSystem.color2 = new BABYLON.Color4(1.0, 0.5, 0.2, 1.0);
  particleSystem.colorDead = new BABYLON.Color4(0.2, 0, 0, 0.0);

  particleSystem.minSize = 5;
  particleSystem.maxSize = 10;

  particleSystem.minLifeTime = 2.0;
  particleSystem.maxLifeTime = 2.0;

  particleSystem.emitRate = 30;

  particleSystem.minScaleX = 1;
  particleSystem.maxScaleX = 1.5;
  particleSystem.minScaleY = 1;
  particleSystem.maxScaleY = 1.5;

  particleSystem.minInitialRotation = -Math.PI;
  particleSystem.maxInitialRotation = Math.PI;

  particleSystem.maxAngularSpeed = 1.0;
  particleSystem.minAngularSpeed = -1.0;

  particleSystem.gravity = new BABYLON.Vector3(0, -1, 0);

  particleSystem.createHemisphericEmitter(radius);

  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_MULTIPLYADD;

  particleSystem.minEmitPower = 0.75;
  particleSystem.maxEmitPower = 1.25;
  particleSystem.updateSpeed = 1/60;

  return particleSystem
}

export const createLakeSplashPArticles = (scene: BABYLON.Scene, radius: number, angle: number) => {
  const particleSystem = new BABYLON.ParticleSystem("LakeSplash", 100, scene);
  colorLakeParticles(particleSystem);
  particleSystem.isLocal = true;
  particleSystem.renderingGroupId = 2;

  particleSystem.emitter = BABYLON.Vector3.Zero(); // the starting location

  particleSystem.color1 = new BABYLON.Color4(1.0, 0.8, 0.7, 1.0);
  particleSystem.color2 = new BABYLON.Color4(1.0, 0.5, 0.2, 1.0);
  particleSystem.colorDead = new BABYLON.Color4(0.2, 0, 0, 0.0);

  particleSystem.minSize = 5;
  particleSystem.maxSize = 10;

  particleSystem.minLifeTime = 1.0;
  particleSystem.maxLifeTime = 1.5;

  particleSystem.emitRate = 10;

  particleSystem.minScaleX = 0.25;
  particleSystem.maxScaleX = 1;
  particleSystem.minScaleY = 0.75;
  particleSystem.maxScaleY = 1;

  particleSystem.createConeEmitter(radius, angle);

  particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_MULTIPLYADD;

  particleSystem.minEmitPower = 2.5;
  particleSystem.maxEmitPower = 2.75;
  particleSystem.updateSpeed = 1/60;

  return particleSystem
}
