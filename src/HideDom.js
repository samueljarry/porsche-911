import gsap from 'gsap'

export default function HideDom()
{
    gsap.timeline()
    .set('.porsche_heading',
    {
        y:100,
        opacity: 0
    })
    .set('.navigation',
        {
            opacity: 0,
            y: 40
        })
    .set('.assets_container',
        {
            opacity:0,
            y: 40
        })
    .set('.article_wrapper',
        {
            top: '100%',
            display: 'none'
        })
}