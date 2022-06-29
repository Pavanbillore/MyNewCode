import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
export class App extends Component {
  render() {
    return (
      <View>
        <AntDesign name="pluscircle" size={30} color="#5E17EB" />
      </View>
    )
  }
}

export default App;