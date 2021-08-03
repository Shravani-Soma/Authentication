import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground,Switch } from 'react-native';
import { Image} from 'react-native';
import { withTheme } from 'styled-components';
class RenIoT extends Component {
  state = {
    req_temp: '',
  }
  handleChangeTemp = (temp) => {
    this.setState({ req_temp: temp });
  }
  render() {
    return (
      <ImageBackground
        style={{ width: null, height: null, flex: 1 }}
        source={require('../RenIoT/assets/renIoTBackground.png')}>
        <View style={styles.container}>
        <Image
        source={require('../RenIoT/assets/person-icon.png')}
        fadeDuration={0}
        style={{ width: 50, height: 50 }}
      />
          <Text>
            <Text style={styles.header}>RenIoT</Text>
            <Text style={[styles.header, styles.sub_header]}> Box</Text>
          </Text>
          <View style={{ marginTop: 20, justifyContent: 'center' }}>
            <Text>
              <Text style={styles.sub_header}>Battery Percentage    </Text>
              <Text style={styles.underline}>55%</Text>
            </Text>
            <Text>
              <Text style={styles.sub_header}> Lid OFF    </Text>
            <Switch
          trackColor={{false: 'gray', true: 'teal'}}
          thumbColor="white"
          backgroundColor="gray"
          onValueChange={(value) => this.setState({toggle: value})}
          value={this.state.toggle}
        />
        <Text style={styles.sub_header}>    Lid ON </Text>
        </Text>
            <Text style={styles.sub_header}>Box Temperature</Text>
            <Text style={styles.sub_header}>7&#176;C</Text>
            <Text style={styles.sub_header}>Required Temperature:</Text>
            <TextInput style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Enter Required Temperature"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleChangeTemp} />
              <Text>
            <Text style={styles.sub_header}>Estimated Time    </Text>
            <Text style={styles.underline}>7 mins</Text>
            </Text>
            <View style={styles}>
      <Image

        source={require('../RenIoT/assets/danger-icon.jpg')}
        style={{ width: 50, height: 50,left:70,top:50}}
      />
      <Image
        source={require('../RenIoT/assets/secure-icon.jpg')}
        style={{ width: 50, height: 50,left:150}}
      />
      </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    position:'absolute',
    alignSelf:'center',
    textAlign: 'center',
    width:400,
    padding:10,
  },
  header: {
    fontSize: 50,
    color: 'red',
    lineHeight:30,
  },
  sub_header: {
    color: 'white',
    fontSize: 23,
    lineHeight:40,
  },
  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    lineHeight:40,
  },
  underline:{
    textDecorationLine: 'underline',
    color:'white',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    lineHeight:40,
  }
});

export default RenIoT;
