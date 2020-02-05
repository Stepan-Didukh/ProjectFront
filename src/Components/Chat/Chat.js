import './Chat.css'
import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {CTX} from "../../Reducers/ChatStore/ChatStore";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 400,
        },
    },
}));
const Chat = () => {

    const classes = useStyles();
    const {allChats, sendAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats);
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div className={'chat'}>
            <div className={'header-chat'}>Chat app  ({activeTopic})</div>

            <div className={'display-flex'}>
                <div className={'classesTopicsWindow'}>
                    <List>
                        {
                            topics.map(topic => (
                                <ListItem
                                    onClick={e=>changeActiveTopic(e.target.innerText)}
                                    key={topic} button>

                                    <ListItemText primary={topic}>

                                    </ListItemText>
                                </ListItem>
                            ))
                        }

                    </List>
                </div>
                <div className={'classesChatWindow'}>
                    {
                        allChats[activeTopic].map((chat, i) => (
                            <div className={'display-flex name'} key={i}>
                                <Chip label={chat.from} className={'classes_chip'}/>
                                <Typography variant={'h5'}>{chat.msg}</Typography>
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
                        onClick={()=>{
                            sendAction({from: user, msg: textValue, topics: activeTopic});
                            changeTextValue('');
                        }}
                    >Send</Button>
                </div>

            </div>

        </div>
    )
};
export default Chat;