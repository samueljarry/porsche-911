import gsap from 'gsap'

export default function CarAnimation({ car })
{
    const landingCar =

        gsap.timeline()
            .addLabel('start', 0)
            .set(car.scene.position,
            {
                z: 3,
                x: -3
            }, 'start')
            .set(car.scene.rotation,
                {
                    y: 5 * Math.PI,
                }, 'start')
            .to(car.scene.position,
            {
                z: 0,
                x: 2.5,
                duration: 2,
                ease: 'Circ.easeOut'
            }, 'start')
            .to(car.scene.rotation,
            {
                y: 3.8 * Math.PI,
                duration: 2,
                ease: 'Circ.easeOut'
            }, 'start')

}