import React from 'react'
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'
import Index from './Pages/index'
import List from './Pages/list'


// function Index(){
//     return (
//         <h2>Index</h2>
//     )
// }

// function List(){
//     return (
//         <h3>List-Page</h3>
//     )
// }

function AppRouter(){
    return (
       <Router>
           <ul>
               <li>
                    <Link to="/">Index</Link>
               </li>
               <li>
                    {/* <Link to="/list">List</Link> */}
                    {/* 路由传参 */}
                    <Link to="/list/123">List</Link>
               </li>
           </ul>
            <Route path="/" exact component = { Index } />
            {/* <Route path="/list" component = { List } /> */}
            {/* 路由传参  */}
            <Route path="/list/:id" component = { List } />
       </Router>
    )
}

// exact 即 精准匹配的意思  相当于完全匹配

export default AppRouter