import React from 'react'
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'
import Index from './Pages/home'
import Video from './Pages/Video'

import './index.css'

function AppRouter(){
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>First Nav</h3>
                    <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                        <li>
                            <Link to="/video">Video</Link>
                        </li>
                        <li>
                            <Link to="/skill">Skill</Link>
                        </li>
                    </ul>
                </div>
               
                <div className="rightMain">
                    <Route path="/" exact component = { Index } />

                    <Route path="/video"  component = { Video } />


                </div>

            </div>
        </Router>
    )
}


export default AppRouter