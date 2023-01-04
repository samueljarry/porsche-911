import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {useLoader} from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import CarAnimations from './CarAnimation'
import DomAnimations from "./DomAnimations";
import {useRef} from "react";

export default function Experience()
{
    const car = useLoader(
        GLTFLoader,
        './918/porsche.gltf',
        (loader) =>
        {
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('./draco/')
            loader.setDRACOLoader(dracoLoader)
        }
    )

    return <>
        <DomAnimations />
        <CarAnimations car={ car } />

        {/* Lights */}
        <ambientLight color=""  intensity={ 4 } />
        <spotLight position={[0, 10, 10]} angle={ 0.25 } penumbra={1} intensity={10} />

        {/* Scene Objects */}
        <PresentationControls speed={ 3 } global={ true } azimuth={[-Math.PI, Math.PI]} polar={[0,0]}>
            <Stage intensity={ 2 } environment="city" preset="upfront" contactShadow={ false } >
                    <primitive position={ [2, -1.5, 0] }  object={ car.scene }  />
            </Stage>
        </PresentationControls>
    </>
}