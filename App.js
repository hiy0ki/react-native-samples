import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        text: '',
    }
  }

  // インクリメントしていくだけ
  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // 入力されたテキストをsetする
  changeText(text) {
    this.setState({
        text: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button title="count up!" onPress={() => this.countUp()} />
        <Text>{this.state.count}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(t) => this.changeText(t)}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#008080',
  },
});
