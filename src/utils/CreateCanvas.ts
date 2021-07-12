const CreateCanvas = (): HTMLCanvasElement => {
  const canvas = document.createElement("canvas");
  canvas.id = "renderCanvas";
  const container = <HTMLElement>document.getElementById("content");
  container.appendChild(canvas);
  return canvas;
};

export default CreateCanvas;
