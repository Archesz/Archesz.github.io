import React, { useState } from 'react'
import './Sidebar.scss'

function Sidebar() {

    const [view, setView] = useState('expand')
    const [noView, setNoView] = useState('onView')

    function changeView(){
        if(view == "expand"){
            setView("reduce")
            setNoView("noView")
        } else{
            setView("expand")
            setNoView("onView")
        }
    }

    return (
        <div id="sidebar-container" className={view} onClick={changeView}>

            <div className="sidebar-icon"></div>

            <div className={`sidebar-header ${noView}`}>

                <div className="sidebar-photo"></div>

                <div className="sidebar-baseinfos">

                    <div>
                        <span>João Vitor</span>
                    </div>

                </div>

            </div>

            <div className="sidebar-pages">

            </div>

        </div>
    )
}

export default Sidebar