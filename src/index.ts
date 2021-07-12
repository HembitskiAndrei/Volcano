import "@babylonjs/core/Loading/loadingScreen";
import { Engine } from "@babylonjs/core/Engines/engine";
import CreateCanvas from "./utils/CreateCanvas";
import MainScene from "./scenes/MainScene";

window.addEventListener("DOMContentLoaded", function () {
  if (Engine.isSupported()) {
    const canvas = CreateCanvas();
    const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true }, true);
    new MainScene(engine, canvas);
  } else {
    window.alert("Browser not supported");
  }
});
