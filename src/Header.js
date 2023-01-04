import './styles/header.scss'

export default function Header()
{
    return <>
        <div className="heading_container">
            <img src="./assets/porsche.svg" alt="" className="porsche_heading"/>
        </div>
        <div className="assets_container">
            <div className="logo_container">
                <img src="./assets/porsche_logo.png" alt="porsche logo" className="porsche_logo"/>
                <aside className="logo_aside">We are moving into the future on the <span>911</span> eighth generation.</aside>
            </div>
        </div>
    </>
}