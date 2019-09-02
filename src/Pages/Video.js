import React from 'react'
import { Route,Link } from 'react-router-dom'
import ReactPage from './Video/React'
import Vue from './Video/Vue'
import Flutter from './Video/Flutter'

function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/video/react">
                            React Video
                         </Link>   
                    </li> 
                    <li>
                        <Link to="/video/vue">
                            Vue Video
                        </Link>    
                    </li> 
                    <li>
                        <Link to="/video/flutter">
                            Flutter Video
                        </Link>
                    </li> 
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>Video</h3></div>
                <Route path="/video/react" component = { ReactPage } />
                <Route path="/video/vue" component = { Vue } />
                <Route path="/video/flutter" component = { Flutter } />
            </div>

        </div>
    )
}


export default Video