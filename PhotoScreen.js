'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableNativeFeedback,
  TextInput,
} from 'react-native';
import  DateGet  from './DatePicker';
import HomeScreen from './HomeScreen';
import RemindersScreen from './RemindersScreen';
import { RNCamera } from 'react-native-camera';
import PushNotification from 'react-native-push-notification';

export default class PhotoScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pictureData: null,
      message: "your reminder",
    };
  }


  async takePicture() {
    try {
      let data = await this.camera.takePictureAsync();
      this.setState({ pictureData: data });
    } catch(err) {
      console.log(err);
    }
  };

  dismissImage() {
    this.setState({ pictureData: null });
  }

  saveImage() {
    this.props.navigation.navigate('HomeScreen', { message: this.state.message, pictureData: this.state.pictureData.uri });
  }

  renderCamera() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderImage() {
  
    return (
      <View style={styles.imagecontainer}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(message) => this.setState({message})}
        value={this.state.message}
      />

      <TouchableNativeFeedback
         onPress={this.dismissImage.bind(this)}
         background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{width: 150, height: 100, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
         <Text style={{margin: 30}}>Cancel</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onPress={this.saveImage.bind(this)}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{width: 150, height: 100, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
          <Text style={{margin: 30}}>Save</Text>
        </View>
      </TouchableNativeFeedback>

        <Image
            style={styles.container}
            source={{ uri: this.state.pictureData.uri }}
          />
      </View>
      );
  }

  render() {
    if (this.state.pictureData) {
      return this.renderImage();
    } else {
      return this.renderCamera();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange'
  },
  imagecontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
  preview: {
    flex:1,
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 60,
    padding: 30,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
