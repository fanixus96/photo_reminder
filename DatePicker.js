import React, { Component } from 'react'
import { View, Button, Alert, Text, StyleSheet,} from 'react-native';
import DatePicker from 'react-native-datepicker';
import HomeScreen from './HomeScreen';
import { DrawerNavigator } from 'react-navigation';

export default class DateGet extends Component {

  constructor(props){

    super(props);
    this.state = {datetime:(new Date())};
  }

  updateDate(datetime) {
    this.setState({ datetime: datetime });
    this.props.updateDatetime(datetime);
    var datetime = datetime.split(" ");

     var date = datetime[0].split("-");
     var time = datetime[1].split(":");

     date[0] = (date[0].toString()).replace(/^0+/, '');
     date[1] = (date[1].toString()).replace(/^0+/, '');
     date[1] = parseInt(date[1])-1;
     date[2] = (date[2].toString()).replace(/^0+/, '');
     time[0] = (time[0].toString()).replace(/^0+/, '');
     time[1] = (time[1].toString()).replace(/^0+/, '');

    var currentDate = new Date();
    var desiredDate = new Date(date[0], date[1], date[2], time[0], time[1]);
    var milliseconds = desiredDate.getTime()-currentDate.getTime();
    var seconds = Math.floor(milliseconds/1000);
    this.props.updateDesiredSeconds(seconds);
    this.props.navigation.goBack();
  }

  static navigationOptions = {
      drawerLabel: () => null
   }

   componentDidMount() {
     if (this.datePicker) this.datePicker.onPressDate()
   }

  render(){
    return(
        <View>
      <DatePicker
        style={{width: 400,}}
         date={this.state.datetime}
         mode="datetime"
         format="YYYY-MM-DD HH:mm"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         showIcon={false}
         onDateChange={this.updateDate.bind(this)}
         ref={(picker) => { this.datePicker = picker; }}
     />

        </View>
    );

  }

}
