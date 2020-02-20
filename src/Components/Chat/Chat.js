import './Chat.css'
import React from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

import {CTX} from "../../Reducers/ChatStore/ChatStore";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));
const Chat = (props) => {

    const classes = useStyles();

    const {allChats, sendAction} = React.useContext(CTX);
    const topics = Object.keys(allChats);

    const [activeTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');

    const Name = props.parsed.Name;

    return (
        <div className={'chat'}>
            <div className={'header-chat'}>{Name}

            </div>

            <div className={'display-flex'}>

                <div className={'classesChatWindow'}>
                    {
                        allChats[activeTopic].map((chat, i) => (
                            <div className={'display-flex name'} key={i}>
                                <Chip label={chat.from} className={'classes_chip'}/>
                                <div>{chat.msg}</div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className={`display-flex mesaggeBox`}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        label="Send a chat"
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />

                </form>
                <div className={'btnBox'}>
                    <button
                        className={'SendMsg'}
                        onClick={() => {
                            sendAction({from: Name, msg: textValue, topic: activeTopic});
                            changeTextValue('');
                        }}
                    ><SendIcon/></button>
                </div>

            </div>

        </div>
    )
};
export default Chat;