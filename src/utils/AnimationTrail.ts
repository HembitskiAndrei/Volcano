import * as BABYLON from "@babylonjs/core";

export const AnimationTrailRoot = (object: BABYLON.TransformNode, duration: number, deltaPosition: BABYLON.Vector3) => {
  const animationRotatePulse = new BABYLON.Animation("animationTrailRoot", "rotation", 1, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
  const keysRotation = [];
  keysRotation.push({ frame: 0, value: object.rotation });
  keysRotation.push({ frame: 120, value: new BABYLON.Vector3(0,Math.PI*2,0) });

  animationRotatePulse.setKeys(keysRotation);

  let easingFunctionRotation = new BABYLON.CubicEase();

  easingFunctionRotation.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

  const animationPosition = new BABYLON.Animation("animationPosition", "position", 1.0, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

  const keysPosition = [];
  keysPosition.push({ frame: 0, value: new BABYLON.Vector3(0,0,0) });

  keysPosition.push({ frame: 15, value: deltaPosition.add(new BABYLON.Vector3(-10,10,-10)) });
  keysPosition.push({ frame: 30, value: deltaPosition.add(new BABYLON.Vector3(10,-15,10)) });
  keysPosition.push({ frame: 40, value: deltaPosition.add(new BABYLON.Vector3(-10,10,-20)) });
  keysPosition.push({ frame: 50, value: deltaPosition.add(new BABYLON.Vector3(10,-10,15)) });
  keysPosition.push({ frame: 60, value: deltaPosition.add(new BABYLON.Vector3(-10,10,-20)) });
  keysPosition.push({ frame: 80, value: deltaPosition.add(new BABYLON.Vector3(10,-10,10)) });
  keysPosition.push({ frame: 100, value: deltaPosition.add(new BABYLON.Vector3(0,0,0)) });
  keysPosition.push({ frame: 120, value: new BABYLON.Vector3(0,0,0) });

  animationPosition.setKeys(keysPosition);

  let easingFunctionPosition = new BABYLON.BounceEase(1, 5);

  easingFunctionPosition.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

  animationPosition.setEasingFunction(easingFunctionPosition);

  let animationGroup = new BABYLON.AnimationGroup("animationTrailRootGroups", object.getScene());
  animationGroup.addTargetedAnimation(animationRotatePulse, object);
  animationGroup.addTargetedAnimation(animationPosition, object.getChildTransformNodes()[0]);
  // animationGroup.normalize(0, 120);
  animationGroup.speedRatio = duration;
  // animationGroup.onAnimationGroupEndObservable.add(function(){
  //   object.rotation = BABYLON.Vector3.Zero();
  // });

  return  animationGroup
}
