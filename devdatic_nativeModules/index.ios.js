/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  Component,
  TextInput,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var MyObjcClass = require('NativeModules').MyObjcClass;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
   width: 100,
   height: 40,
   borderColor: 'red',
   borderWidth: 1,
   alignSelf: 'center'
 },
 result: {
   textAlign: 'center',
   color: '#333333',
   fontSize: 30,
   fontWeight: 'bold',
   margin: 20,
 }
});

class devdatic_nativeModules extends Component {
  constructor(props) {
    super(props);
    this.state ={
      number : 0
    }
  }

  render() {
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>
    {MyObjcClass.greeting}
    </Text>

    <TextInput style ={styles.input} onChangeText = {(text) => this.squareMe(text)} />

    <Text style ={styles.result}>
     {this.state.number}
    </Text>

    </View>
  );
}
squareMe(num){
  if (num == '') return;

  MyObjcClass.squareMe(num, (error, result)=> {
    if (error){
      console.error (error);
    }
    else {
       this.setState({number: result});
    }
  })


}
}

AppRegistry.registerComponent('devdatic_nativeModules', () => devdatic_nativeModules);
