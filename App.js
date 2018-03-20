
import React, { Component } from 'react';
import { View,Text,StyleSheet,ScrollView,TouchableOpacity,Platform} from 'react-native';
import  RemindersScreen  from './RemindersScreen';
import  HomeScreen  from './HomeScreen';
import  DateGet  from './DatePicker';
import  PhotoScreen  from './PhotoScreen';
import PushNotification from 'react-native-push-notification';
import { StackNavigator, DrawerNavigator } from 'react-navigation';



const MyApp = DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  RemindersScreen: {
    screen: RemindersScreen,
  },
  Date: {
    screen: DateGet,
  },
  PhotoScreen: {
    screen: PhotoScreen,
  },

},
{
  initialRouteName: 'PhotoScreen',
  drawerPosition: 'left',
  initialRouteParams: {
    message: null,
  }
}
);
 export default MyApp;
