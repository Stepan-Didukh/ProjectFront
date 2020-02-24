import React, {Component} from "react";
import Store from "../../Reducers/ChatStore/ChatStore";
import Chat from "../../Components/Chat/Chat";
const queryString = require('query-string');

export default class Support extends Component{

    render() {

        const parsed = queryString.parse(this.props.location.search);
        const Push = (this.props);

        return(
            <div>
                <Store>
                    <Chat parsed={parsed} Push={Push}/>
                </Store>
            </div>
        )
    }

}