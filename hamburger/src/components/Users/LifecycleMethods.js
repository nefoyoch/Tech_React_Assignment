import React, {Component} from 'react';
import '../UI/home.css'

export default class ShowRead extends Component {
    constructor(){
        super();
        this.state = {
            data : "",
            msg : "Read More"
        }
        console.log("Constructor Called");
    }

    componentWillMount(){
        console.log("Component Will Mount Called");
    }
    componentDidMount(){
        console.log("Component Did Mount Called");
    }

    componentDidUpdate(){
        console.log("Component Did Update Called");
        alert("Component Updated");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount() called");
      }
    componentWillUpdate(){
        console.log("componentWillUpdate() called");
        alert("Component Will Updated");
    }

    showMe = () => {
        this.state.msg === "Read More" ? this.setState({
            data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            msg: "Show Less"
        }) : this.setState({
            data: "",
            msg: "Read More"
        })
    }

    render(){
        console.log("Render Called");
        return ( <>
            <div className="">
                <p>{this.state.data}</p>
                <button className="btn" onClick={this.showMe}>{this.state.msg}</button>
            </div>
        </>)
    }
}