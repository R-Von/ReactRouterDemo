import React from 'react'
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'


function Index(){
    return (
        <h2>Index</h2>
    )
}

function List(){
    return (
        <h3>List-Page</h3>
    )
}

function AppRouter(){
    return (
       <Router>
           <ul>
               <li>
                    <Link to="/">Index</Link>
               </li>
               <li>
                    <Link to="/list">List</Link>
               </li>
           </ul>
            <Route path="/" exact component = { Index } />
            <Route path="/list" component = { List } />
       </Router>
    )
}

export default AppRouter