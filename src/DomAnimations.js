import gsap from 'gsap'
import {useEffect} from "react";

export default function DomAnimations()
{
    useEffect(() =>
    {
        const landingReveal =
            gsap.timeline({delay: 0.75})

                .addLabel('first', 0)
                .to('.porsche_heading',
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'Circ.easeOut',
                    }, 'first')
                .addLabel('second', 'start')
                .to('.navigation',
                    {
                        opacity: 1,
                        y: 0,
                        ease: 'Circ.easeOut',
                        duration: 1
                    }, 'second')
                .to('.assets_container',
                    {
                        opacity: 1,
                        y: 0,
                        ease: 'Circ.easeOut',
                        duration: 1
                    }, 'second')
                .to('.article_wrapper',
                {
                    display:'flex',
                    top: '90%'
                })
    },[])
}