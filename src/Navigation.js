import './styles/navigation.scss'

export default function Navigation()
{
    return <nav className="navigation">
        <div className="navigation_content">
            <ul className="navigation_links">
                <li className="navigation_link"><a href="#">Home</a></li>
                <li className="navigation_link"><a href="#">Events</a></li>
                <li className="navigation_link"><a href="#">About Porsche</a></li>
            </ul>
            <div className="technology_container">
                <p className="technology_paragraph">Technology</p>
                <span className="technology_span">Always one step ahead, but impossible without sports victories from the past.</span>
            </div>
        </div>
        <div className="navigation_menu">
            <span className="menu_span"></span>
            <span className="menu_span"></span>
        </div>
    </nav>
}