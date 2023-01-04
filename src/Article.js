import React from "react";
import './styles/articles.scss'

export default function Article()
{
    return <section className='article_wrapper'>
                <div className='article_container'>
                    <img src="./assets/display.webp" alt="" className="article_photo"/>
                        <div className="left_infos">
                            <span>A Timeless Car</span>
                            <p>The new 911 has absorbed the features of all its predecessors. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="right_infos">
                            <p className="year">1975</p>
                            <span>Silhouette: iconic.<br />Design: timeless classic.</span>
                        </div>
                </div>
           </section>
}