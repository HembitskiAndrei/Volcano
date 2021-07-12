import * as BABYLON from "@babylonjs/core";
/**
 * Create trail effect for wild
 *
 * @param {Vector3} deltaPosition - delta for position
 * @param {Texture} noiseTexture - noise texture for particles
 * @param {Number} durationTrailAnimation - duration for animation
 * @param {Scene} scene - main scene
 */
export declare class TrailEffect {
    scene: BABYLON.Scene;
    root: BABYLON.TransformNode;
    rootNoAnimation: BABYLON.TransformNode;
    arm: BABYLON.TransformNode;
    instances: BABYLON.InstancedMesh;
    trailMesh: BABYLON.TrailMesh;
    constructor(deltaPosition: BABYLON.Vector3, scene: BABYLON.Scene);
    /**
     * Set emitter for effect
     *
     * @param {Mesh} emitter - emitter for particles
     */
    setTrailPosition(emitter: BABYLON.AbstractMesh): void;
    /**
     * Start effect
     */
    start(): void;
    /**
     * Stop effect
     */
    stop(): void;
}
