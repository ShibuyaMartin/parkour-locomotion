import { engine, executeTask, GltfContainer, Material, Transform } from '@dcl/sdk/ecs'
import { Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
export * from '@dcl/sdk'
export function main() {
 


let samplescene = engine.addEntity()

GltfContainer.create(samplescene, {src: "models/base-plaza.glb"})

Transform.create(samplescene, {
	  position:  Vector3.create(0, 0, 0),
	  scale: Vector3.create(1, 1, 1),
	  rotation: Quaternion.fromEulerDegrees(0, 180, 0)
	})

  let samplescene_02 = engine.addEntity()

}