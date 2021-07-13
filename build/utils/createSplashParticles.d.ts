import * as BABYLON from "@babylonjs/core";
export declare const setupAnimationSheet: (system: BABYLON.ParticleSystem, texture: BABYLON.Texture, width: number, height: number, numSpritesWidth: number, numSpritesHeight: number, animationSpeed: number, isRandom: boolean) => void;
export declare const createSplashPArticles: (scene: BABYLON.Scene, radius: number, angle: number) => BABYLON.ParticleSystem;
export declare const createDownSplashPArticles: (scene: BABYLON.Scene, radius: number) => BABYLON.ParticleSystem;
export declare const createLakeSplashPArticles: (scene: BABYLON.Scene) => BABYLON.ParticleSystem;
export declare const createSmokePArticles: (scene: BABYLON.Scene, radius: number, angle: number) => BABYLON.ParticleSystem;
export declare const createDebrisPArticles: (scene: BABYLON.Scene, radius: number, angle: number) => BABYLON.ParticleSystem;
