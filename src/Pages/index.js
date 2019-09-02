import React , { Component , Fragment } from 'react'
import 'antd/dist/antd.css'
import { List } from 'antd'
import { Link } from 'react-router-dom'

class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[
                {cid:123,title:"article-1"},
                {cid:345,title:"article-2"},
                {cid:678,title:"article-3"}
            ]
        }
    }
    render(){
        return(
            <Fragment>
                <h2>Index</h2>
                <List
                    bordered
                    dataSource = {this.state.list}
                    renderItem = {(item,index)=>{
                        return (
                            <List.Item key={index}>
                                <Link to={`/list/${item.cid}`}> {item.title} </Link>
                            </List.Item>
                        )
                    }}
                /> 
            </Fragment>    
        )
    }
}


export default Index