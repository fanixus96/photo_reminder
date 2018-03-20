import React, { Component } from 'react';
import { View, Text, StyleSheet, AppState, Button, Image, Alert} from 'react-native';
import DatePicker from 'react-native-datepicker'
import  RemindersScreen  from './RemindersScreen';
import  DateGet  from './DatePicker';
import  PhotoScreen  from './PhotoScreen';
import PushNotification from 'react-native-push-notification';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const styles = StyleSheet.create({

  icon: {
    width: 24,
    height: 24,
  },
});

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datetime: 'huj',
      desiredSeconds: '1',
    };
    this.dateGetRef = null;
  }


setNotification() {
  PushNotification.localNotification({
    message: this.props.navigation.state.params.message,
    date: new Date(Date.now() + (this.state.desiredSeconds*1000)),
    imageUrl: this.props.navigation.state.params.pictureData,
  });
}


  updateDatetime(datetime) {
    this.setState({ datetime: datetime });
  }

  updateDesiredSeconds(seconds) {
    this.setState({ desiredSeconds: seconds
    }, () => {
      this.setNotification();
      }
    );
  }


  static navigationOptions = {
    drawerLabel: 'HomeScreen',
  };

  render() {

      return (
        <View style={{width: 0, height: 0}}>
          <DateGet
            updateDatetime={this.updateDatetime.bind(this)}
            updateDesiredSeconds={this.updateDesiredSeconds.bind(this)}
            navigation={this.props.navigation}
          />
        </View>
      );

    }

 }
