import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';

export default class BoxLoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
        boxUserName: "",
        boxPassword: "",
        errMsg: "",
    }

    onBoxLogin = () => {
        this.props.navigation.navigate('RenIoT')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Box Login Form</Text>
               

                <Animatable.View
                    ref={this.validateInput}>
                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Username"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ boxUserName: text })
                        }
                        }
                    />

                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, outline: 'none', paddingBottom: 10 }}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ boxPassword: text })
                        }
                        }
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>

                <TouchableOpacity
                    onPress={() => this.onBoxLogin()}
                    style={{ width: 150, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                >
                    <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Box Login</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20
    }
})