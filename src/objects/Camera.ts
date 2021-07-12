import { ArcRotateCamera, AnimationGroup, Vector3, Scene, AbstractMesh, Observable } from "@babylonjs/core";

class Camera extends ArcRotateCamera {
  canvas: HTMLCanvasElement;
  transitionAnimation: AnimationGroup;
  targetNode: AbstractMesh;
  onTurnOffObservable: any;
  onTurnOnObservable: any;

  constructor(
    name: string,
    alpha: number,
    beta: number,
    radius: number,
    target: Vector3,
    scene: Scene,
    canvas: HTMLCanvasElement,
    setActiveOnSceneIfNoneActive?: boolean,
  ) {
    super(name, alpha, beta, radius, target, scene, setActiveOnSceneIfNoneActive);
    this.onTurnOffObservable = new Observable();
    this.onTurnOnObservable = new Observable();
    this.position = new Vector3(-100, 30, 50);
    this.canvas = canvas;
    this.minZ = 0.0;
    this.maxZ = 32000;
    this.lowerRadiusLimit = 70;
    this.upperRadiusLimit = 170;
    this.upperBetaLimit = 1.35 * Math.PI / 3;
    this.attachControl(this.canvas, false);

    this.targetNode = new AbstractMesh("target", scene);
    this.setTarget(this.targetNode);
  }
}

export default Camera;
