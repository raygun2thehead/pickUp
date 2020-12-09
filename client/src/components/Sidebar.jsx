import React from 'react';


const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:schaab.steven@gmail.com")
    }
    return (
        <div className="sidebar">
            Log In
            <div className="sidebarName">Steven <span>Schaab</span></div>
            <div className="sidebarName">Web Developer</div>
            <div className="contact">
                <div className="sidebarName">schaab.steven@gmail.com</div>
                <div className="sidebarName">773.656.9747</div>
                <div className="sidebarItem">
                    <a href="https://github.com/raygun2thehead">
                        <img src='' alt="github" className="icon" />Github</a>
                </div>
                <div className="sidebarItem">
                    <a href="linkedin.com/in/stevenschaab">
                        <img src='' alt="linkedin" className="icon" />Linked In</a>
                </div>
            </div>
            <div className="sidebarName sidebarEmail" onClick={handleEmailMe}>email me</div>
        </div>
    )
}

export default Sidebar;

