import React , { Component } from 'react'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <div>
                <h3>This is list</h3>
                <p>List Page - {this.state.id}</p>
                {/* <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul> */}
            </div>
        )
    }
    componentDidMount(){
        // 获取路由传参的参数
        console.log(this.props.match)
        // {"path":"/list/:id","url":"/list/123","isExact":true,"params":{"id":"123"}}
        let temId = this.props.match.params.id
        this.setState({id:temId})
    }

}

export default List