import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground,Switch } from 'react-native';

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
        source={require('../RenIoT/assets/renIoTBackground.jpg')}>
        <View style={styles.container}>
          <Text>
            <Text style={styles.header}>RenIoT</Text>
            <Text style={[styles.header, styles.sub_header]}> Box</Text>
          </Text>
          <View style={{ marginTop: 20, justifyContent: 'center' }}>
            <Text>
              <Text style={styles.sub_header}>Battery Percentage </Text>
              <Text style={styles.sub_header}> 55%</Text>
            </Text>
            <Switch
          trackColor={{false: 'gray', true: 'teal'}}
          thumbColor="white"
          onValueChange={(value) => this.setState({toggle: value})}
          value={this.state.toggle}
        />
            <Text style={styles.sub_header}>Box Temperature</Text>
            <Text style={styles.sub_header}>7&#176;C</Text>
            <Text style={styles.sub_header}>Required Temperature:</Text>
            <TextInput style={styles.textInput}
              underlineColorAndroid="transparent"
              placeholder="Enter Required Temperature"
              placeholderTextColor="#9a73ef"
              autoCapitalize="none"
              onChangeText={this.handleChangeTemp} />
            <Text style={styles.sub_header}>Estimated Time</Text>
            <Text style={styles.sub_header}>7 mins</Text>
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
  },
  header: {
    fontSize: 50,
    color: 'red',
  },
  sub_header: {
    color: 'black',
    fontSize: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
  }
});

export default RenIoT;