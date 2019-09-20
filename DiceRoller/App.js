import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ClickButton from "./ClickButton"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dice1: "",
      dice2: ""
    }
    this.rollDice = this.rollDice.bind(this)
  }

  rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    this.setState({
      dice1,
      dice2
    })
    this.getDice1();
    this.getDice2();
  }

  getDice1() {
    const {dice1} = this.state;
    switch (dice1) {
      case 1:
        return require("./assets/dice1.png");
      case 2:
        return require("./assets/dice2.png");
      case 3:
        return require("./assets/dice3.png");
      case 4:
        return require("./assets/dice4.png");
      case 5:
        return require("./assets/dice5.png");
      case 6:
        return require("./assets/dice6.png");
      default:
        return require("./assets/dice1.png");
    }
  }

  getDice2() {
    const {dice2} = this.state;
    switch (dice2) {
      case 1:
        return require("./assets/dice1.png");
      case 2:
        return require("./assets/dice2.png");
      case 3:
        return require("./assets/dice3.png");
      case 4:
        return require("./assets/dice4.png");
      case 5:
        return require("./assets/dice5.png");
      case 6:
        return require("./assets/dice6.png");
      default:
        return require("./assets/dice1.png");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Image style={styles.dice} source={this.getDice1()}/>
          <Image style={styles.dice} source={this.getDice2()}/>
        </View>
        <ClickButton rollDice={this.rollDice}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211461',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dice: {
    width: 200,
    height: 200
  }
});
