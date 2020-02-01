import React, {Component} from "react";

class Chat extends Component{
    render() {
        return(
            <div>
                <p>{this.props.email}</p>
            </div>
        )
    }

}
export default Chat;