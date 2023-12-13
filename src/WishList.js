import { Component } from "react";
export class WishList extends Component {

    state = {
        userInput: "",
        wishList: []
    }

    onChangeEvent(e) {
        this.setState ({userInput: e})
    }

    addItem (input) {
        if (input === '') {
            alert ("Please enter an item")
        }
        else{}

        let listArray = this.state.wishList;
        listArray.push(input);
        this.setState({wishList:listArray,userInput:''})
    }

    deleteItem () {
        let listArray = this.state.wishList;
        listArray = [];
        this.setState({wishList:listArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}> 
            <div className="inp">
                <input type="text"
                placeholder="What are you dreaming about?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="btn">
                <button className="white" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                <button className="black" onClick={() => this.deleteItem()}>DEL</button>
            </div>
            <ul>
                {this.state.wishList.map((item,index) => (
                <li onClick={this.crossedWord}
                key = {index}> {item} </li>
                ))}
            </ul>
            </form>
            </div>
        )
    }
}