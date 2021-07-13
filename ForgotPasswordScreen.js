import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';



export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props)
        this.validateInput = React.createRef()
    }

    state = {
       email: "",
        errMsg: ""
    }

    onContinue = () => {
        if (this.state.email == '') {
            this.validateInput.current.shake(600)
            this.setState({ errMsg: 'Please enter your details' })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Forgot Password </Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 20 }}>Please enter your email address</Text>

                <Animatable.View
                    ref={this.validateInput}>
                    <TextInput
                        style={{ marginTop: 40, borderBottomColor: '#ddd', borderBottomWidth: 1, paddingBottom: 10, outline: 'none' }}
                        placeholder="Email address"
                        onChangeText={(text) => {
                            this.setState({ errMsg: '' }),
                                this.setState({ email: text })
                        }
                        }
                        icon='mail'
                    />
                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{this.state.errMsg}</Text>

                </Animatable.View>



                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.onContinue()}
                        style={{ width: 200, backgroundColor: '#0d47a1', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 16 }}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={{ marginTop: 20 }}
                    >
                        <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 18 }}>Back to Sign In</Text>
                    </TouchableOpacity>

                   
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
        textAlign: 'center',
    }
})