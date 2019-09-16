import React from 'react';
import {View, Image, Text, StyleSheet} from "react-native"

export default class App extends React.Component {
  render() {
    return (
    <View style={style.container}>
      <Text style={style.textStuff}>Ashraf Patel</Text>
      <Image source={require("./assets/email.png")}/>
      < Image 
        source = {{uri: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"}}
        style={{height: 100, width: 100}}
      />
    </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#67965a"
  },
  textStuff: {
    fontSize: 45
  }
})