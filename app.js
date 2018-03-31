import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';

export default class App extends React.Component {
constructor(props) {
 
  super(props)
  
  this.state = {
  
    TextInputUsername: '',
    TextInputPassword: '',
    TextInputEmail: ''
  
  }
  
}
InsertDataToServer = () =>{

 
  const { TextInputUsername }  = this.state ;
  const { TextInputPassword }  = this.state ;
  const { TextInputEmail }  = this.state ;
 
 fetch('http://192.168.21.193/react_native/create_user.php', {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
 
     username: TextInputUsername,
 
     password: TextInputPassword,
 
     email: TextInputEmail
 
   })
 
 }).then((response) => response.json())
       .then((responseJson) => {
 
 // Showing response message coming from server after inserting records.
         Alert.alert(responseJson);
 
       }).catch((error) => {
         console.error(error);
       });
  
  
   }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Username"
 
          onChangeText={TextInputUsername => this.setState({TextInputUsername})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Password"
 
          onChangeText={TextInputPassword => this.setState({TextInputPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Email"
 
          onChangeText={TextInputEmail => this.setState({TextInputEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  margin: 10
  },
  
  TextInputStyleClass: {
  
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  // Set border Hex Color Code Here.
   borderColor: '#FF5722',
   
  // Set border Radius.
   //borderRadius: 10 ,
  }
   
});
