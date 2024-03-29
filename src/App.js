import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import TagFacesIcon from '@material-ui/icons/TagFaces';

  
    



function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] =useState('');


  useEffect(() => {
   // run when the app componets is loads
   db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id : doc.id, message: doc.data()})))
    })
  }, [] )  



  useEffect(() => {
   // run code here ..
   // If its blank ,inside [] the code will run only once when the component loads
   // [condition] means condition inside the box
   // const username = prompt('Please enter your name');
   setUsername(prompt('Please enter your name'));
  }, [] )  
  // console.log(input);
  // console.log(messages);

  const sendMessage = (event) => {
    // all the logic to send message will be here
    // it will stop the form from refreshing after submit button 
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    setInput('');
  }

    return ( 
      
        
        <div className = "App" >
          <img src ="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
          <h1>Connect with us on Messenger <TagFacesIcon/></h1>
          <h2>Welcome {username || 'Unknown User '}..!!</h2>

          

            {/* Form tends to refresh on submit button to prevent it we have to add the logic in sendMessage */}

          <form className ="app_form">
          <FormControl className = "app_formControl">

            {/* input feild */}
            {/*input is using the state which is empty and onchnange is tracking 
            every single character of the input
            <InputLabel>Enter a message..</InputLabel*/} 
            <Input className="app_input" placeholder='Enter a message...' value = {input} onChange = { event => setInput(event.target.value) }/>

            {/* Button */}
            {/*onclick is using the state sendMessage to set an event where will be the logic of sending the message
            diabled is used so that it doesnt store empty string in array*/}
            <IconButton className="app_iconButton" disabled={!input} variant="contained" color="primary" type = 'submit' onClick = { sendMessage }> <SendIcon/> </IconButton>

          </FormControl>
          </form>



          {/* Messages themselves */}
          {/*Message is a component using the prop text which will use various properties to design that 
              message in the Message.js file and the prop text is gonna export there which will contain every
              single message*/}

          <FlipMove>
          {
           // map funtion will loop through the messages array and return each messages one by one
            messages.map(({id, message}) => (
              //< Message username = {message.username} text = {message.text}/>
              < Message key = {id} username = {username} message = {message}/>
            ))
          }
          </FlipMove>
          

        </div>
       
    );
}

export default App;