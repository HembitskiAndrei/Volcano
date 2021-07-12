import {Texture} from "@babylonjs/core"

export const textureSettings = (texture: Texture) => {
  texture.wrapU = Texture.MIRROR_ADDRESSMODE;
  texture.wrapV = Texture.MIRROR_ADDRESSMODE;
}
