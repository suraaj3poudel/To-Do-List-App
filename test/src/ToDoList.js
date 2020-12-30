import React from 'react'
import {Component} from 'react'
import './App.css';
import Comment from './Comment'


class ToDoList extends Component {

  constructor(){
    super()

    this.state =(
      {
        item:'',
        items:[],
        uniqitems:[],
        check: 0
      }
    )
  }

  shouldComponentUpdate(){
    return true;
  }

  componentDidMount(){
    document.querySelector('input').focus();
    
  }
  

  inputHandler=(event)=>{
    let input = event.target.value
    
    this.setState({
      item: input
    })
  }

  submitHandler=()=>{
    let newItem = this.state.item
    let newItemArr = this.state.items
    let uniqitems = this.state.uniqitems

    if(!uniqitems.includes(newItem) && !newItem=='')
      newItemArr.push({itemName: newItem, completed:'comment-box'})

    if(!uniqitems.includes(newItem))
      uniqitems.push(newItem)

    

    this.setState({
      items: newItemArr,
    })
  }

  deleteHandler=(ind)=>{
    let itemArr = this.state.items
    let uniq = this.state.uniqitems
    itemArr.splice(ind,1)
    uniq.splice(ind,1)

    this.setState(
      {
        items: itemArr,
        uniqitems: uniq
      }
    )
  }

  checkHandler= (ind) =>{
    console.log()
    let newItemArr = this.state.items
    let itemCls = this.state.itemprop


    if(newItemArr[ind].completed === 'comment-box cross')
      newItemArr[ind].completed = 'comment-box'
    else
      newItemArr[ind].completed = 'comment-box cross'

    this.setState({
      items:newItemArr,
      itemprop: itemCls + " cross"
    })
  }


    title = <h1 id="title"> To Do List</h1> 

  render(){

  return (
    <div className="todo">
      {this.title}
      <input  type="text" onChange={this.inputHandler}  placeholder="What do you plan to do?" ></input>
      <button onClick={this.submitHandler}> Submit </button>
      {this.state.items.length === 0 ? <div class="intro">
      <p>Instructions </p>
      <p>a. Enter your to-do items. </p>
      <p>b. Once you are done, mark the item as "done" to cross it off the list !</p>
      </div> : null }
       <Comment comment= { this.state.items.map( (element) => {
          let checkInd = this.state.items.indexOf(element)
          return(
           <p  
           class={element.completed}>  
          {element === '' ?  null : 
         <span>
         <label className="container">
         <input  class="tick" type="checkbox" onClick={(e) => this.checkHandler(checkInd,e)}type="checkbox"/>
         <span class="checkmark"></span> 
         </label>

     </span>} {checkInd+1+ ". " +element.itemName} <button className="delete" onClick={(e) => this.deleteHandler(checkInd,e)}>-----</button></p>)}
       )}/>

    </div>
  )
}
}

export default ToDoList;
