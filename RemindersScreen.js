import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import PhotoScreen from './PhotoScreen';
import { DrawerNavigator } from 'react-navigation';

const styles = StyleSheet.create({
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
  icon: {
    width: 24,
    height: 24,
  },
});


export default class RemindersScreen extends Component {

  static navigationOptions = {
      drawerLabel: 'Reminders',

    };

    render() {
      return (
        <View>
        <Button
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          title="Go back home"
        />,
        <Image
           source={{ uri: pictureData }}
        />
      </View>
      );
    }
}
