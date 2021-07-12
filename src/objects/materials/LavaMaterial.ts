import * as BABYLON from "@babylonjs/core";

class LavaMaterial extends BABYLON.NodeMaterial {
  time: BABYLON.InputBlock;

  constructor(name: string) {
    super(name);

    // InputBlock
    const position = new BABYLON.InputBlock("position");
    position.visibleInInspector = false;
    position.target = 1;
    position.setAsAttribute("position");

// LerpBlock
    const Lerp = new BABYLON.LerpBlock("Lerp");
    Lerp.visibleInInspector = false;
    Lerp.target = 4;

// AddBlock
    const Add = new BABYLON.AddBlock("Add");
    Add.visibleInInspector = false;
    Add.target = 4;

// MultiplyBlock
    const Multiply = new BABYLON.MultiplyBlock("Multiply");
    Multiply.visibleInInspector = false;
    Multiply.target = 4;

// NormalizeBlock
    const Normalize = new BABYLON.NormalizeBlock("Normalize");
    Normalize.visibleInInspector = false;
    Normalize.target = 4;

// InputBlock
    const normal = new BABYLON.InputBlock("normal");
    normal.visibleInInspector = false;
    normal.target = 1;
    normal.setAsAttribute("normal");

// TransformBlock
    const Worldnormal = new BABYLON.TransformBlock("World normal");
    Worldnormal.visibleInInspector = false;
    Worldnormal.target = 1;
    Worldnormal.complementZ = 0;
    Worldnormal.complementW = 0;

// InputBlock
    const World = new BABYLON.InputBlock("World");
    World.visibleInInspector = false;
    World.target = 1;
    World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

// TransformBlock
    const WorldPos = new BABYLON.TransformBlock("WorldPos");
    WorldPos.visibleInInspector = false;
    WorldPos.target = 1;
    WorldPos.complementZ = 0;
    WorldPos.complementW = 1;

// TransformBlock
    const WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
    WorldPosViewProjectionTransform.visibleInInspector = false;
    WorldPosViewProjectionTransform.target = 1;
    WorldPosViewProjectionTransform.complementZ = 0;
    WorldPosViewProjectionTransform.complementW = 1;

// InputBlock
    const ViewProjection = new BABYLON.InputBlock("ViewProjection");
    ViewProjection.visibleInInspector = false;
    ViewProjection.target = 1;
    ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

// VertexOutputBlock
    const VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
    VertexOutput.visibleInInspector = false;
    VertexOutput.target = 1;

// PBRMetallicRoughnessBlock
    const PBRMetallicRoughness = new BABYLON.PBRMetallicRoughnessBlock("PBRMetallicRoughness");
    PBRMetallicRoughness.visibleInInspector = false;
    PBRMetallicRoughness.target = 3;
    PBRMetallicRoughness.lightFalloff = 0;
    PBRMetallicRoughness.useAlphaTest = false;
    PBRMetallicRoughness.alphaTestCutoff = 0.5;
    PBRMetallicRoughness.useAlphaBlending = false;
    PBRMetallicRoughness.useRadianceOverAlpha = true;
    PBRMetallicRoughness.useSpecularOverAlpha = true;
    PBRMetallicRoughness.enableSpecularAntiAliasing = false;
    PBRMetallicRoughness.realTimeFiltering = false;
    PBRMetallicRoughness.realTimeFilteringQuality = 8;
    PBRMetallicRoughness.useEnergyConservation = true;
    PBRMetallicRoughness.useRadianceOcclusion = true;
    PBRMetallicRoughness.useHorizonOcclusion = true;
    PBRMetallicRoughness.unlit = false;
    PBRMetallicRoughness.forceNormalForward = false;
    PBRMetallicRoughness.debugMode = 0;
    PBRMetallicRoughness.debugLimit = 0;
    PBRMetallicRoughness.debugFactor = 1;

// InputBlock
    const view = new BABYLON.InputBlock("view");
    view.visibleInInspector = false;
    view.target = 1;
    view.setAsSystemValue(BABYLON.NodeMaterialSystemValues.View);

// InputBlock
    const cameraPosition = new BABYLON.InputBlock("cameraPosition");
    cameraPosition.visibleInInspector = false;
    cameraPosition.target = 1;
    cameraPosition.setAsSystemValue(BABYLON.NodeMaterialSystemValues.CameraPosition);

// PerturbNormalBlock
    const Perturbnormal = new BABYLON.PerturbNormalBlock("Perturb normal");
    Perturbnormal.visibleInInspector = false;
    Perturbnormal.target = 2;
    Perturbnormal.invertX = false;
    Perturbnormal.invertY = false;

// TransformBlock
    const Worldtangent = new BABYLON.TransformBlock("World tangent");
    Worldtangent.visibleInInspector = false;
    Worldtangent.target = 1;
    Worldtangent.complementZ = 0;
    Worldtangent.complementW = 0;

// InputBlock
    const tangent = new BABYLON.InputBlock("tangent");
    tangent.visibleInInspector = false;
    tangent.target = 1;
    tangent.setAsAttribute("tangent");

// AddBlock
    const Add1 = new BABYLON.AddBlock("Add");
    Add1.visibleInInspector = false;
    Add1.target = 4;

// ScaleBlock
    const Scale = new BABYLON.ScaleBlock("Scale");
    Scale.visibleInInspector = false;
    Scale.target = 4;

// VectorMergerBlock
    const VectorMerger = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger.visibleInInspector = false;
    VectorMerger.target = 4;

// VectorSplitterBlock
    const VectorSplitter = new BABYLON.VectorSplitterBlock("VectorSplitter");
    VectorSplitter.visibleInInspector = false;
    VectorSplitter.target = 4;

// InputBlock
    const uv = new BABYLON.InputBlock("uv");
    uv.visibleInInspector = false;
    uv.target = 1;
    uv.setAsAttribute("uv");

// VectorSplitterBlock
    const VectorSplitter1 = new BABYLON.VectorSplitterBlock("VectorSplitter");
    VectorSplitter1.visibleInInspector = false;
    VectorSplitter1.target = 4;

// VectorMergerBlock
    const VectorMerger1 = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger1.visibleInInspector = false;
    VectorMerger1.target = 4;

// AddBlock
    const Add2 = new BABYLON.AddBlock("Add");
    Add2.visibleInInspector = false;
    Add2.target = 4;

// ScaleBlock
    const Scale1 = new BABYLON.ScaleBlock("Scale");
    Scale1.visibleInInspector = false;
    Scale1.target = 4;

// InputBlock
    const Time = new BABYLON.InputBlock("Time");
    Time.visibleInInspector = false;
    Time.target = 1;
    Time.value = 0;
    Time.min = 0;
    Time.max = 0;
    Time.isBoolean = false;
    Time.matrixMode = 0;
    Time.animationType = BABYLON.AnimatedInputBlockTypes.Time;
    Time.isConstant = false;

// ScaleBlock
    const Scale2 = new BABYLON.ScaleBlock("Scale");
    Scale2.visibleInInspector = false;
    Scale2.target = 4;

// InputBlock
    const SpeedFactor = new BABYLON.InputBlock("SpeedFactor");
    SpeedFactor.visibleInInspector = false;
    SpeedFactor.target = 1;
    SpeedFactor.value = -0.5;
    SpeedFactor.min = 0;
    SpeedFactor.max = 0;
    SpeedFactor.isBoolean = false;
    SpeedFactor.matrixMode = 0;
    SpeedFactor.animationType = BABYLON.AnimatedInputBlockTypes.None;
    SpeedFactor.isConstant = false;

// AddBlock
    const Add3 = new BABYLON.AddBlock("Add");
    Add3.visibleInInspector = false;
    Add3.target = 4;

// ClampBlock
    const Clamp = new BABYLON.ClampBlock("Clamp");
    Clamp.visibleInInspector = false;
    Clamp.target = 4;
    Clamp.minimum = 0;
    Clamp.maximum = 1;

// OneMinusBlock
    const Oneminus = new BABYLON.OneMinusBlock("One minus");
    Oneminus.visibleInInspector = false;
    Oneminus.target = 4;

// ScaleBlock
    const Scale3 = new BABYLON.ScaleBlock("Scale");
    Scale3.visibleInInspector = false;
    Scale3.target = 4;

// ScaleBlock
    const Scale4 = new BABYLON.ScaleBlock("Scale");
    Scale4.visibleInInspector = false;
    Scale4.target = 4;

// TextureBlock
    const HeightTexture = new BABYLON.TextureBlock("HeightTexture");
    HeightTexture.visibleInInspector = false;
    HeightTexture.convertToGammaSpace = false;
    HeightTexture.convertToLinearSpace = false;

// AddBlock
    const Add4 = new BABYLON.AddBlock("Add");
    Add4.visibleInInspector = false;
    Add4.target = 4;

// DiscardBlock
    const Discard = new BABYLON.DiscardBlock("Discard");
    Discard.visibleInInspector = false;
    Discard.target = 2;

// InputBlock
    const DiscardFactor = new BABYLON.InputBlock("DiscardFactor");
    DiscardFactor.visibleInInspector = false;
    DiscardFactor.target = 1;
    DiscardFactor.value = -0.125;
    DiscardFactor.min = 0;
    DiscardFactor.max = 0;
    DiscardFactor.isBoolean = false;
    DiscardFactor.matrixMode = 0;
    DiscardFactor.animationType = BABYLON.AnimatedInputBlockTypes.None;
    DiscardFactor.isConstant = false;

// AddBlock
    const Add5 = new BABYLON.AddBlock("Add");
    Add5.visibleInInspector = false;
    Add5.target = 4;

// ScaleBlock
    const Scale5 = new BABYLON.ScaleBlock("Scale");
    Scale5.visibleInInspector = false;
    Scale5.target = 4;

// InputBlock
    const NoiseFactor = new BABYLON.InputBlock("NoiseFactor");
    NoiseFactor.visibleInInspector = false;
    NoiseFactor.target = 1;
    NoiseFactor.value = 0.005;
    NoiseFactor.min = 0;
    NoiseFactor.max = 0;
    NoiseFactor.isBoolean = false;
    NoiseFactor.matrixMode = 0;
    NoiseFactor.animationType = BABYLON.AnimatedInputBlockTypes.None;
    NoiseFactor.isConstant = false;

// AddBlock
    const Add6 = new BABYLON.AddBlock("Add");
    Add6.visibleInInspector = false;
    Add6.target = 4;

// ScaleBlock
    const Scale6 = new BABYLON.ScaleBlock("Scale");
    Scale6.visibleInInspector = false;
    Scale6.target = 4;

// InputBlock
    const HeightFactor = new BABYLON.InputBlock("HeightFactor");
    HeightFactor.visibleInInspector = false;
    HeightFactor.target = 1;
    HeightFactor.value = 0.25;
    HeightFactor.min = 0;
    HeightFactor.max = 0;
    HeightFactor.isBoolean = false;
    HeightFactor.matrixMode = 0;
    HeightFactor.animationType = BABYLON.AnimatedInputBlockTypes.None;
    HeightFactor.isConstant = false;

// ScaleBlock
    const Scale7 = new BABYLON.ScaleBlock("Scale");
    Scale7.visibleInInspector = false;
    Scale7.target = 4;

// ColorSplitterBlock
    const ColorSplitter = new BABYLON.ColorSplitterBlock("ColorSplitter");
    ColorSplitter.visibleInInspector = false;
    ColorSplitter.target = 4;

// InputBlock
    const color = new BABYLON.InputBlock("color");
    color.visibleInInspector = false;
    color.target = 1;
    color.setAsAttribute("color");

// LerpBlock
    const Lerp1 = new BABYLON.LerpBlock("Lerp");
    Lerp1.visibleInInspector = false;
    Lerp1.target = 4;

// ScaleBlock
    const Scale8 = new BABYLON.ScaleBlock("Scale");
    Scale8.visibleInInspector = false;
    Scale8.target = 4;

// AddBlock
    const Add7 = new BABYLON.AddBlock("Add");
    Add7.visibleInInspector = false;
    Add7.target = 4;

// LerpBlock
    const Lerp2 = new BABYLON.LerpBlock("Lerp");
    Lerp2.visibleInInspector = false;
    Lerp2.target = 4;

// MultiplyBlock
    const Multiply1 = new BABYLON.MultiplyBlock("Multiply");
    Multiply1.visibleInInspector = false;
    Multiply1.target = 4;

// MultiplyBlock
    const Multiply2 = new BABYLON.MultiplyBlock("Multiply");
    Multiply2.visibleInInspector = false;
    Multiply2.target = 4;

// AddBlock
    const Add8 = new BABYLON.AddBlock("Add");
    Add8.visibleInInspector = false;
    Add8.target = 4;

// TextureBlock
    const BaseColor = new BABYLON.TextureBlock("BaseColor2");
    BaseColor.visibleInInspector = false;
    BaseColor.convertToGammaSpace = false;
    BaseColor.convertToLinearSpace = false;

// VectorMergerBlock
    const VectorMerger2 = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger2.visibleInInspector = false;
    VectorMerger2.target = 4;

// VectorSplitterBlock
    const VectorSplitter2 = new BABYLON.VectorSplitterBlock("VectorSplitter");
    VectorSplitter2.visibleInInspector = false;
    VectorSplitter2.target = 4;

// AddBlock
    const Add9 = new BABYLON.AddBlock("Add");
    Add9.visibleInInspector = false;
    Add9.target = 4;

// ScaleBlock
    const Scale9 = new BABYLON.ScaleBlock("Scale");
    Scale9.visibleInInspector = false;
    Scale9.target = 4;

// InputBlock
    const EdgeScaleFactor = new BABYLON.InputBlock("EdgeScaleFactor");
    EdgeScaleFactor.visibleInInspector = false;
    EdgeScaleFactor.target = 1;
    EdgeScaleFactor.value = 1;
    EdgeScaleFactor.min = 0;
    EdgeScaleFactor.max = 0;
    EdgeScaleFactor.isBoolean = false;
    EdgeScaleFactor.matrixMode = 0;
    EdgeScaleFactor.animationType = BABYLON.AnimatedInputBlockTypes.None;
    EdgeScaleFactor.isConstant = false;

// ScaleBlock
    const Scale10 = new BABYLON.ScaleBlock("Scale");
    Scale10.visibleInInspector = false;
    Scale10.target = 4;

// VectorMergerBlock
    const VectorMerger3 = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger3.visibleInInspector = false;
    VectorMerger3.target = 4;

// InputBlock
    const Float = new BABYLON.InputBlock("Float");
    Float.visibleInInspector = false;
    Float.target = 1;
    Float.value = 0.005;
    Float.min = 0;
    Float.max = 0;
    Float.isBoolean = false;
    Float.matrixMode = 0;
    Float.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float.isConstant = false;

// ScaleBlock
    const Scale11 = new BABYLON.ScaleBlock("Scale");
    Scale11.visibleInInspector = false;
    Scale11.target = 4;

// InputBlock
    const Float1 = new BABYLON.InputBlock("Float");
    Float1.visibleInInspector = false;
    Float1.target = 1;
    Float1.value = 4;
    Float1.min = 0;
    Float1.max = 0;
    Float1.isBoolean = false;
    Float1.matrixMode = 0;
    Float1.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float1.isConstant = false;

// TextureBlock
    const EdgeTexture = new BABYLON.TextureBlock("EdgeTexture");
    EdgeTexture.visibleInInspector = false;
    EdgeTexture.convertToGammaSpace = false;
    EdgeTexture.convertToLinearSpace = false;

// MultiplyBlock
    const Multiply3 = new BABYLON.MultiplyBlock("Multiply");
    Multiply3.visibleInInspector = false;
    Multiply3.target = 4;

// MultiplyBlock
    const Multiply4 = new BABYLON.MultiplyBlock("Multiply");
    Multiply4.visibleInInspector = false;
    Multiply4.target = 4;

// MultiplyBlock
    const Multiply5 = new BABYLON.MultiplyBlock("Multiply");
    Multiply5.visibleInInspector = false;
    Multiply5.target = 4;

// LerpBlock
    const Lerp3 = new BABYLON.LerpBlock("Lerp");
    Lerp3.visibleInInspector = false;
    Lerp3.target = 4;

// TextureBlock
    const BaseColor1 = new BABYLON.TextureBlock("BaseColor");
    BaseColor1.visibleInInspector = false;
    BaseColor1.convertToGammaSpace = false;
    BaseColor1.convertToLinearSpace = false;

// MultiplyBlock
    const Multiply6 = new BABYLON.MultiplyBlock("Multiply");
    Multiply6.visibleInInspector = false;
    Multiply6.target = 4;

// ScaleBlock
    const Scale12 = new BABYLON.ScaleBlock("Scale");
    Scale12.visibleInInspector = false;
    Scale12.target = 4;

// InputBlock
    const Float2 = new BABYLON.InputBlock("Float");
    Float2.visibleInInspector = false;
    Float2.target = 1;
    Float2.value = 0.25;
    Float2.min = 0;
    Float2.max = 0;
    Float2.isBoolean = false;
    Float2.matrixMode = 0;
    Float2.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float2.isConstant = false;

// ScaleBlock
    const Scale13 = new BABYLON.ScaleBlock("Scale");
    Scale13.visibleInInspector = false;
    Scale13.target = 4;

// ColorSplitterBlock
    const ColorSplitter1 = new BABYLON.ColorSplitterBlock("ColorSplitter");
    ColorSplitter1.visibleInInspector = false;
    ColorSplitter1.target = 4;

// GradientBlock
    const Gradient = new BABYLON.GradientBlock("Gradient");
    Gradient.visibleInInspector = false;
    Gradient.target = 4;
    Gradient.colorSteps = [];
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.02, new BABYLON.Color3(0, 0, 0)));
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.46, new BABYLON.Color3(1, 1, 1)));

// MultiplyBlock
    const Multiply7 = new BABYLON.MultiplyBlock("Multiply");
    Multiply7.visibleInInspector = false;
    Multiply7.target = 4;

// ColorSplitterBlock
    const ColorSplitter2 = new BABYLON.ColorSplitterBlock("ColorSplitter");
    ColorSplitter2.visibleInInspector = false;
    ColorSplitter2.target = 4;

// GradientBlock
    const Gradient1 = new BABYLON.GradientBlock("Gradient");
    Gradient1.visibleInInspector = false;
    Gradient1.target = 4;
    Gradient1.colorSteps = [];
    Gradient1.colorSteps.push(new BABYLON.GradientBlockColorStep(0.22, new BABYLON.Color3(1, 1, 1)));
    Gradient1.colorSteps.push(new BABYLON.GradientBlockColorStep(1, new BABYLON.Color3(0, 0, 0)));

// OneMinusBlock
    const Oneminus1 = new BABYLON.OneMinusBlock("One minus");
    Oneminus1.visibleInInspector = false;
    Oneminus1.target = 4;

// SmoothStepBlock
    const Smoothstep = new BABYLON.SmoothStepBlock("Smooth step");
    Smoothstep.visibleInInspector = false;
    Smoothstep.target = 4;

// GradientBlock
    const GradientOffset = new BABYLON.GradientBlock("GradientOffset");
    GradientOffset.visibleInInspector = false;
    GradientOffset.target = 4;
    GradientOffset.colorSteps = [];
    GradientOffset.colorSteps.push(new BABYLON.GradientBlockColorStep(0, new BABYLON.Color3(0, 0, 0)));
    GradientOffset.colorSteps.push(new BABYLON.GradientBlockColorStep(0.42, new BABYLON.Color3(1, 1, 1)));

// SmoothStepBlock
    const Smoothstep1 = new BABYLON.SmoothStepBlock("Smooth step");
    Smoothstep1.visibleInInspector = false;
    Smoothstep1.target = 4;

// OneMinusBlock
    const Oneminus2 = new BABYLON.OneMinusBlock("One minus");
    Oneminus2.visibleInInspector = false;
    Oneminus2.target = 4;

// MultiplyBlock
    const Multiply8 = new BABYLON.MultiplyBlock("Multiply");
    Multiply8.visibleInInspector = false;
    Multiply8.target = 4;

// AddBlock
    const Add10 = new BABYLON.AddBlock("Add");
    Add10.visibleInInspector = false;
    Add10.target = 4;

// MultiplyBlock
    const Multiply9 = new BABYLON.MultiplyBlock("Multiply");
    Multiply9.visibleInInspector = false;
    Multiply9.target = 4;

// LerpBlock
    const Lerp4 = new BABYLON.LerpBlock("Lerp");
    Lerp4.visibleInInspector = false;
    Lerp4.target = 4;

// TextureBlock
    const NormalMap = new BABYLON.TextureBlock("NormalMap2");
    NormalMap.visibleInInspector = false;
    NormalMap.convertToGammaSpace = false;
    NormalMap.convertToLinearSpace = false;

// TextureBlock
    const NormalMap1 = new BABYLON.TextureBlock("NormalMap");
    NormalMap1.visibleInInspector = false;
    NormalMap1.convertToGammaSpace = false;
    NormalMap1.convertToLinearSpace = false;

// ScaleBlock
    const Scale14 = new BABYLON.ScaleBlock("Scale");
    Scale14.visibleInInspector = false;
    Scale14.target = 4;

// GradientBlock
    const Gradient2 = new BABYLON.GradientBlock("Gradient");
    Gradient2.visibleInInspector = false;
    Gradient2.target = 4;
    Gradient2.colorSteps = [];
    Gradient2.colorSteps.push(new BABYLON.GradientBlockColorStep(0.82, new BABYLON.Color3(0, 0, 0)));
    Gradient2.colorSteps.push(new BABYLON.GradientBlockColorStep(0.93, new BABYLON.Color3(1, 1, 1)));

// MultiplyBlock
    const Multiply10 = new BABYLON.MultiplyBlock("Multiply");
    Multiply10.visibleInInspector = false;
    Multiply10.target = 4;

// ScaleBlock
    const Scale15 = new BABYLON.ScaleBlock("Scale");
    Scale15.visibleInInspector = false;
    Scale15.target = 4;

// InputBlock
    const Float3 = new BABYLON.InputBlock("Float");
    Float3.visibleInInspector = false;
    Float3.target = 1;
    Float3.value = 1;
    Float3.min = 0;
    Float3.max = 0;
    Float3.isBoolean = false;
    Float3.matrixMode = 0;
    Float3.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float3.isConstant = false;

// AddBlock
    const Add11 = new BABYLON.AddBlock("Add");
    Add11.visibleInInspector = false;
    Add11.target = 4;

// MultiplyBlock
    const Multiply11 = new BABYLON.MultiplyBlock("Multiply");
    Multiply11.visibleInInspector = false;
    Multiply11.target = 4;

// MultiplyBlock
    const Multiply12 = new BABYLON.MultiplyBlock("Multiply");
    Multiply12.visibleInInspector = false;
    Multiply12.target = 4;

// AddBlock
    const Add12 = new BABYLON.AddBlock("Add");
    Add12.visibleInInspector = false;
    Add12.target = 4;

// AddBlock
    const Add13 = new BABYLON.AddBlock("Add");
    Add13.visibleInInspector = false;
    Add13.target = 4;

// ScaleBlock
    const Scale16 = new BABYLON.ScaleBlock("Scale");
    Scale16.visibleInInspector = false;
    Scale16.target = 4;

// InputBlock
    const Float4 = new BABYLON.InputBlock("Float");
    Float4.visibleInInspector = false;
    Float4.target = 1;
    Float4.value = 0.25;
    Float4.min = 0;
    Float4.max = 0;
    Float4.isBoolean = false;
    Float4.matrixMode = 0;
    Float4.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float4.isConstant = false;

// VectorMergerBlock
    const VectorMerger4 = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger4.visibleInInspector = false;
    VectorMerger4.target = 4;

// ScaleBlock
    const Scale17 = new BABYLON.ScaleBlock("Scale");
    Scale17.visibleInInspector = false;
    Scale17.target = 4;

// InputBlock
    const Float5 = new BABYLON.InputBlock("Float");
    Float5.visibleInInspector = false;
    Float5.target = 1;
    Float5.value = 0.005;
    Float5.min = 0;
    Float5.max = 0;
    Float5.isBoolean = false;
    Float5.matrixMode = 0;
    Float5.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float5.isConstant = false;

// InputBlock
    const Float6 = new BABYLON.InputBlock("Float");
    Float6.visibleInInspector = false;
    Float6.target = 1;
    Float6.value = 0.01;
    Float6.min = 0;
    Float6.max = 0;
    Float6.isBoolean = false;
    Float6.matrixMode = 0;
    Float6.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float6.isConstant = false;

// FragmentOutputBlock
    const FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
    FragmentOutput.visibleInInspector = false;
    FragmentOutput.target = 2;

// TextureBlock
    const AlphaTexture = new BABYLON.TextureBlock("AlphaTexture");
    AlphaTexture.visibleInInspector = false;
    AlphaTexture.convertToGammaSpace = false;
    AlphaTexture.convertToLinearSpace = false;

// ColorSplitterBlock
    const ColorSplitter3 = new BABYLON.ColorSplitterBlock("ColorSplitter");
    ColorSplitter3.visibleInInspector = false;
    ColorSplitter3.target = 4;

// GradientBlock
    const Gradient3 = new BABYLON.GradientBlock("Gradient");
    Gradient3.visibleInInspector = false;
    Gradient3.target = 4;
    Gradient3.colorSteps = [];
    Gradient3.colorSteps.push(new BABYLON.GradientBlockColorStep(0.45, new BABYLON.Color3(1, 1, 1)));
    Gradient3.colorSteps.push(new BABYLON.GradientBlockColorStep(0.67, new BABYLON.Color3(0, 0, 0)));

// InputBlock
    const SpeedFactor1 = new BABYLON.InputBlock("SpeedFactor2");
    SpeedFactor1.visibleInInspector = false;
    SpeedFactor1.target = 1;
    SpeedFactor1.value = -0.1;
    SpeedFactor1.min = 0;
    SpeedFactor1.max = 0;
    SpeedFactor1.isBoolean = false;
    SpeedFactor1.matrixMode = 0;
    SpeedFactor1.animationType = BABYLON.AnimatedInputBlockTypes.None;
    SpeedFactor1.isConstant = false;

// InputBlock
    const Float7 = new BABYLON.InputBlock("Float");
    Float7.visibleInInspector = false;
    Float7.target = 1;
    Float7.value = 1;
    Float7.min = 0;
    Float7.max = 0;
    Float7.isBoolean = false;
    Float7.matrixMode = 0;
    Float7.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float7.isConstant = false;

// InputBlock
    const strength = new BABYLON.InputBlock("strength");
    strength.visibleInInspector = false;
    strength.target = 1;
    strength.value = 1;
    strength.min = 0;
    strength.max = 0;
    strength.isBoolean = false;
    strength.matrixMode = 0;
    strength.animationType = BABYLON.AnimatedInputBlockTypes.None;
    strength.isConstant = false;

// InputBlock
    const Float8 = new BABYLON.InputBlock("Float");
    Float8.visibleInInspector = false;
    Float8.target = 1;
    Float8.value = 0;
    Float8.min = 0;
    Float8.max = 0;
    Float8.isBoolean = false;
    Float8.matrixMode = 0;
    Float8.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float8.isConstant = false;

// InputBlock
    const Float9 = new BABYLON.InputBlock("Float");
    Float9.visibleInInspector = false;
    Float9.target = 1;
    Float9.value = 0;
    Float9.min = 0;
    Float9.max = 0;
    Float9.isBoolean = false;
    Float9.matrixMode = 0;
    Float9.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Float9.isConstant = false;

// Connections
    position.output.connectTo(Add.left);
    normal.output.connectTo(Normalize.input);
    Normalize.output.connectTo(Multiply.left);
    color.output.connectTo(ColorSplitter.rgba);
    ColorSplitter.rgbOut.connectTo(Scale7.input);
    uv.output.connectTo(VectorSplitter.xyIn);
    VectorSplitter.x.connectTo(VectorMerger.x);
    VectorSplitter.y.connectTo(Add3.left);
    Time.output.connectTo(Scale2.input);
    SpeedFactor.output.connectTo(Scale2.factor);
    Scale2.output.connectTo(Add3.right);
    Add3.output.connectTo(VectorMerger.y);
    VectorMerger.xy.connectTo(HeightTexture.uv);
    HeightTexture.r.connectTo(Scale4.input);
    VectorSplitter.y.connectTo(Gradient3.gradient);
    Gradient3.output.connectTo(ColorSplitter3.rgbIn);
    ColorSplitter3.r.connectTo(Scale4.factor);
    Scale4.output.connectTo(Scale3.input);
    Add3.output.connectTo(Clamp.value);
    Clamp.output.connectTo(Oneminus.input);
    Oneminus.output.connectTo(Scale3.factor);
    Scale3.output.connectTo(Add6.left);
    HeightTexture.g.connectTo(Add5.left);
    HeightTexture.b.connectTo(Scale5.input);
    NoiseFactor.output.connectTo(Scale5.factor);
    Scale5.output.connectTo(Add5.right);
    Add5.output.connectTo(Add6.right);
    Add6.output.connectTo(Scale6.input);
    HeightFactor.output.connectTo(Scale6.factor);
    Scale6.output.connectTo(Scale7.factor);
    Scale7.output.connectTo(Multiply.right);
    Multiply.output.connectTo(Add.right);
    Add.output.connectTo(Lerp.left);
    position.output.connectTo(Lerp.right);
    VectorSplitter.y.connectTo(Gradient1.gradient);
    Gradient1.output.connectTo(ColorSplitter2.rgbIn);
    ColorSplitter2.r.connectTo(Multiply7.left);
    Add6.output.connectTo(Multiply7.right);
    Multiply7.output.connectTo(Oneminus1.input);
    Oneminus1.output.connectTo(Lerp.gradient);
    Lerp.output.connectTo(WorldPos.vector);
    World.output.connectTo(WorldPos.transform);
    WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
    ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
    WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
    uv.output.connectTo(VectorSplitter1.xyIn);
    VectorSplitter1.x.connectTo(VectorMerger1.x);
    VectorSplitter1.y.connectTo(Add2.left);
    Time.output.connectTo(Scale1.input);
    SpeedFactor1.output.connectTo(Scale1.factor);
    Scale1.output.connectTo(Add2.right);
    Add2.output.connectTo(VectorMerger1.y);
    VectorMerger1.xy.connectTo(Scale9.input);
    EdgeScaleFactor.output.connectTo(Scale9.factor);
    Scale9.output.connectTo(Add9.left);
    HeightTexture.b.connectTo(VectorMerger3.x);
    HeightTexture.b.connectTo(VectorMerger3.y);
    VectorMerger3.xy.connectTo(Scale10.input);
    Float.output.connectTo(Scale10.factor);
    Scale10.output.connectTo(Add9.right);
    Add9.output.connectTo(VectorSplitter2.xyIn);
    VectorSplitter2.x.connectTo(VectorMerger2.x);
    VectorSplitter2.y.connectTo(Scale11.input);
    Float1.output.connectTo(Scale11.factor);
    Scale11.output.connectTo(VectorMerger2.y);
    VectorMerger2.xy.connectTo(BaseColor.uv);
    BaseColor.rgb.connectTo(Add8.left);
    BaseColor.rgb.connectTo(Add8.right);
    Add8.output.connectTo(Multiply2.left);
    BaseColor.rgb.connectTo(Multiply2.right);
    Multiply2.output.connectTo(Multiply1.left);
    Multiply7.output.connectTo(Smoothstep.value);
    BaseColor.g.connectTo(Smoothstep.edge0);
    VectorMerger.xy.connectTo(Scale.input);
    Float7.output.connectTo(Scale.factor);
    Scale.output.connectTo(Add1.left);
    VectorMerger2.xy.connectTo(EdgeTexture.uv);
    EdgeTexture.r.connectTo(VectorMerger4.x);
    EdgeTexture.b.connectTo(VectorMerger4.y);
    VectorMerger4.xy.connectTo(Scale17.input);
    Float5.output.connectTo(Scale17.factor);
    Scale17.output.connectTo(Add1.right);
    Add1.output.connectTo(BaseColor1.uv);
    BaseColor1.r.connectTo(Smoothstep.edge1);
    Smoothstep.output.connectTo(GradientOffset.gradient);
    GradientOffset.output.connectTo(Smoothstep1.value);
    BaseColor.r.connectTo(Smoothstep1.edge0);
    BaseColor1.r.connectTo(Smoothstep1.edge1);
    Smoothstep1.output.connectTo(Oneminus2.input);
    Oneminus2.output.connectTo(Multiply1.right);
    Multiply1.output.connectTo(Lerp2.left);
    Smoothstep1.output.connectTo(Multiply8.left);
    BaseColor1.rgb.connectTo(Add10.left);
    EdgeTexture.rgb.connectTo(Multiply5.left);
    EdgeTexture.rgb.connectTo(Multiply5.right);
    Multiply5.output.connectTo(Multiply4.left);
    EdgeTexture.rgb.connectTo(Multiply4.right);
    Multiply4.output.connectTo(Multiply3.left);
    EdgeTexture.rgb.connectTo(Multiply3.right);
    Multiply3.output.connectTo(Multiply9.left);
    BaseColor1.rgb.connectTo(Multiply9.right);
    Multiply9.output.connectTo(Add10.right);
    Add10.output.connectTo(Multiply8.right);
    Multiply8.output.connectTo(Lerp2.right);
    Smoothstep1.output.connectTo(Lerp2.gradient);
    Lerp2.output.connectTo(Add7.left);
    BaseColor.rgb.connectTo(Scale15.input);
    Float3.output.connectTo(Scale15.factor);
    Scale15.output.connectTo(Multiply10.left);
    Multiply7.output.connectTo(Scale14.input);
    BaseColor.r.connectTo(Scale14.factor);
    Scale14.output.connectTo(Gradient2.gradient);
    Gradient2.output.connectTo(Multiply10.right);
    Multiply10.output.connectTo(Add7.right);
    Add7.output.connectTo(Scale8.input);
    Float6.output.connectTo(Scale8.factor);
    Scale8.output.connectTo(Lerp1.left);
    WorldPos.output.connectTo(PBRMetallicRoughness.worldPosition);
    normal.output.connectTo(Worldnormal.vector);
    World.output.connectTo(Worldnormal.transform);
    Worldnormal.output.connectTo(PBRMetallicRoughness.worldNormal);
    view.output.connectTo(PBRMetallicRoughness.view);
    cameraPosition.output.connectTo(PBRMetallicRoughness.cameraPosition);
    WorldPos.output.connectTo(Perturbnormal.worldPosition);
    Worldnormal.output.connectTo(Perturbnormal.worldNormal);
    tangent.output.connectTo(Worldtangent.vector);
    World.output.connectTo(Worldtangent.transform);
    Worldtangent.output.connectTo(Perturbnormal.worldTangent);
    Add1.output.connectTo(Perturbnormal.uv);
    VectorMerger2.xy.connectTo(NormalMap.uv);
    NormalMap.rgb.connectTo(Lerp4.left);
    Add1.output.connectTo(NormalMap1.uv);
    NormalMap1.rgb.connectTo(Lerp4.right);
    Smoothstep1.output.connectTo(Lerp4.gradient);
    Lerp4.output.connectTo(Perturbnormal.normalMapColor);
    strength.output.connectTo(Perturbnormal.strength);
    Perturbnormal.output.connectTo(PBRMetallicRoughness.perturbedNormal);
    Multiply3.output.connectTo(Lerp3.left);
    BaseColor1.rgb.connectTo(Lerp3.right);
    Multiply7.output.connectTo(Gradient.gradient);
    Gradient.output.connectTo(ColorSplitter1.rgbIn);
    ColorSplitter1.r.connectTo(Lerp3.gradient);
    Lerp3.output.connectTo(Add11.left);
    BaseColor1.rgb.connectTo(Multiply6.left);
    BaseColor1.rgb.connectTo(Multiply6.right);
    Multiply6.output.connectTo(Scale12.input);
    Float2.output.connectTo(Scale12.factor);
    Scale12.output.connectTo(Scale13.input);
    ColorSplitter1.r.connectTo(Scale13.factor);
    Scale13.output.connectTo(Add11.right);
    Add11.output.connectTo(Multiply11.left);
    Add7.output.connectTo(Multiply11.right);
    Multiply11.output.connectTo(PBRMetallicRoughness.baseColor);
    Float8.output.connectTo(PBRMetallicRoughness.metallic);
    Float9.output.connectTo(PBRMetallicRoughness.roughness);
    PBRMetallicRoughness.diffuseDir.connectTo(Add12.left);
    PBRMetallicRoughness.lighting.connectTo(Add12.right);
    Add12.output.connectTo(Multiply12.left);
    Multiply11.output.connectTo(Multiply12.right);
    Multiply12.output.connectTo(Add13.left);
    Multiply11.output.connectTo(Scale16.input);
    Float4.output.connectTo(Scale16.factor);
    Scale16.output.connectTo(Add13.right);
    Add13.output.connectTo(Lerp1.right);
    ColorSplitter.r.connectTo(Lerp1.gradient);
    Lerp1.output.connectTo(FragmentOutput.rgb);
    uv.output.connectTo(AlphaTexture.uv);
    AlphaTexture.r.connectTo(FragmentOutput.a);
    DiscardFactor.output.connectTo(Discard.value);
    HeightTexture.r.connectTo(Add4.left);
    Add3.output.connectTo(Add4.right);
    Add4.output.connectTo(Discard.cutoff);

// Output nodes
    this.addOutputNode(VertexOutput);
    this.addOutputNode(FragmentOutput);
    this.addOutputNode(Discard);
    this.build();

    this.backFaceCulling = false;
  }
}

export default LavaMaterial;
