import * as BABYLON from "@babylonjs/core";
import Camera from "../objects/Camera";
export default class MainScene extends BABYLON.Scene {
    engine: BABYLON.Engine;
    canvas: HTMLCanvasElement;
    assetsManager: BABYLON.AssetsManager;
    camera: Camera;
    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement, options?: BABYLON.SceneOptions);
}
