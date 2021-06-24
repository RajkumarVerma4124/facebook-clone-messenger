// We are goona us ES7 snippets code here

import { Card, CardContent, Typography } from '@material-ui/core';
import React, { forwardRef }from 'react';
import './Message.css';
import { List, ListItem, ListItemText, useStyles, makeStyles } from '@material-ui/core';



const Message = forwardRef(( {message, username}, ref ) => {
    const isUser = username === message.username;

    return (
        
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <List> 
            <ListItem>
                <ListItemText secondary={!isUser && `${message.username || 'Unknown User'}: ` }/>
            </ListItem>
        </List>
            <Card className={isUser ? "message_userCard": "message_guestCard"}>
                <CardContent>
                    <Typography className = "message_format" 
                        color="white"
                    > 
                     {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
    );
})
export default Message