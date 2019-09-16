import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.textInput}
          onChangeText={(e) => {this.setState({text: e})}}/>
        <Text 
          style={{color: "blue", fontSize: 30}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#a7d68a',
    alignItems: 'center',
  },
  textInput: {
    marginTop: 50,
    height: 50,
    width: 200,
    borderWidth: 1,
    borderColor: "#f0f0f0"
  }
});
