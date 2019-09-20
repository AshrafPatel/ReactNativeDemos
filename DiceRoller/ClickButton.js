import React, {Component} from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";

export default class ClickButton extends Component {
    constructor(props) {
        super(props);
        this.handleRollDice = this.handleRollDice.bind(this);
    }

    handleRollDice() {
        this.props.rollDice();
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handleRollDice}>
                <Text style={styles.diceButton}>Roll Dice</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    diceButton: {
        marginTop: 60,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderColor: "black",
        borderWidth: 5,
        backgroundColor: "#FFFFFF",
        width: 200,
        textAlign: "center",
        fontSize: 40,
        borderRadius: 10
    }
});