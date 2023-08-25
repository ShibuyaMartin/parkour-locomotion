import { engine, executeTask, GltfContainer, Material, Transform } from '@dcl/sdk/ecs'
import { Color4, Vector3 } from '@dcl/sdk/math'
export * from '@dcl/sdk'
export function main() {
 


let samplescene = engine.addEntity()

GltfContainer.create(samplescene, {src: "models/parkour-scene.glb"})

Transform.create(samplescene, {
	  position:  Vector3.create(48, 0, 48),
	  scale: Vector3.create(1, 1, 1)
	})

  let samplescene_02 = engine.addEntity()

}