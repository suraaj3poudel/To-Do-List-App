import React from 'react'
import {Component} from 'react'

class Comment extends Component{

    render(){
    return(
        <div>
        <p class="item-text">{this.props.comment}</p>
        </div>
    )
    }
}

export default Comment