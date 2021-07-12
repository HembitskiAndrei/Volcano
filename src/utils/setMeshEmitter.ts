import * as BABYLON from "@babylonjs/core";

export const setMeshEmitter = (
  firstParticlesSystem: BABYLON.ParticleSystem,
  mesh: BABYLON.Mesh,
  emitter: BABYLON.Mesh,
  direction1: BABYLON.Vector3,
  direction2: BABYLON.Vector3,
  secondParticlesSystem?: BABYLON.ParticleSystem
) => {
  const meshEmitter = new BABYLON.MeshParticleEmitter(mesh);
  firstParticlesSystem.particleEmitterType = meshEmitter;
  firstParticlesSystem.emitter = emitter;
  if (secondParticlesSystem) {
    secondParticlesSystem.particleEmitterType = meshEmitter;
    secondParticlesSystem.emitter = emitter;
  }
  meshEmitter.useMeshNormalsForDirection = false;
  meshEmitter.direction1 = direction1;
  meshEmitter.direction2 = direction2;
}
