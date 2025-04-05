import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 78,


        }
    }

    render(){
        return (
            <div className="class-card">
            

            <button className="btn" onClick={() =>{
                this.setState({
                    count: this.state.count + 1
                });
            }}> + </button>

            <h1>{this.state.count} </h1>


            <button className="btn" onClick={() =>{
                this.setState({
                    count: this.state.count - 1 
                });
            }}> - </button>

            <p><b>Name :</b> {this.props.name}</p>
            <p><b>Location:</b> {this.props.location}</p>
            <p><b>Contact: </b>{this.props.contact}</p>

            </div>
        )
    }

}

export default UserClass;