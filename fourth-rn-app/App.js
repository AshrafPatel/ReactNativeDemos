import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random() * 256})`,
      buttonColor: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
    }
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this)
  }

  updateBackgroundColor() {
    this.setState({
      backgroundColor: `rgb(${Math.random()*256}, ${Math.random()*256}, ${Math.random() * 256})`,
      buttonColor: `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
    })
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.backgroundColor}]}>
        <TouchableOpacity onPress={this.updateBackgroundColor}>
          <Text style={[styles.textButton, {backgroundColor: this.state.buttonColor}]}>Open up App.js to start working on your app!</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#BFEAFF`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    backgroundColor: '#4B6071',
    fontSize: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: 300,
    textAlign: 'center',
    color: "white",
    borderColor: "white",
    borderWidth: 5,
    textShadowColor: "black",
    textShadowRadius: 10
  }
});
