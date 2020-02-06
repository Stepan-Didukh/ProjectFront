import './Chat.css'
import React from "react";
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
import Chip from "@material-ui/core/Chip";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
            <div className={'header-chat'}>Ask me</div>

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
                        id="standard-basic"
                        label="Send a chat"
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />

                </form>
                <div className={'btnBox'}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            sendAction({from: Name, msg: textValue, topic: activeTopic});
                            changeTextValue('');
                        }}
                    >Send</Button>
                </div>

            </div>

        </div>
    )
};
export default Chat;