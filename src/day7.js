import axios from 'axios'
import React from 'react'

export default class Day7 extends React.Component{
    state = {person:[]}

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{this.setState({person:res.data})})
    }
    render(){
        return(
            <div>
            <h1>Day 7: </h1>
            {this.state.person.map((e)=><li key={e.userId}>{e.title}</li>)}
            </div>
        )
    }
}