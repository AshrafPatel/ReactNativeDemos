import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(newText) {
    this.setState({
      text: newText
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => alert("You tapped the car")}>
          <Image 
            source={{uri: "https://cdn.motor1.com/images/mgl/17XG3/s1/bugatti-la-voiture-noire-leaves-geneva.jpg"}}
            style={{height: 100, width: 200, margin: 20}}
          />
        </TouchableOpacity>
        <TextInput style={styles.textInput} onChangeText={this.handleChange}/>
        <Text style={styles.text}>{this.state.text}</Text>
        <Button
          onPress={() => alert(this.state.text)}
          title="Press Me"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 3,
    borderColor: "blue",
    width: 300,
    height: 50
  },
  text: {
    fontSize: 30
  }
});
