import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import LoginSocial from '../../../components/LoginSocial'

const Login = () => {
    const navigation = useNavigation();

    function handleLogin() {
        navigation.navigate("Dashboard");
    }

    function handleForgot() {
        navigation.navigate("Forgot");
    }

    function handleSingIn() {
        navigation.navigate("Signin");
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Entrar</Text>
            </View>

            <View>
                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    autoCorrect={false}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput 
                    style={styles.input}
                    autoCorrect={false}
                    autoCompleteType="password"
                    textContentType="password"
                    secureTextEntry={true}
                />

                <RectButton style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText} >Entrar</Text>
                </RectButton>

                <TouchableOpacity onPress={handleSingIn}>
                    <Text style={styles.options}>Ainda não tem cadastro?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleForgot}>
                    <Text style={styles.options}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <LoginSocial />
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex: 1
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    title: {
        fontSize: 24,
        fontFamily: 'Ubuntu_500Medium'    
    },
    label: {
        fontFamily: "Ubuntu_400Regular",
        color: "#595959",
        fontSize: 12,
        marginVertical: 10,
        lineHeight: 21
    },
    input: {
        height: 60,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 14,
      },
      button: {
        width: '100%',
        backgroundColor: '#000',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
      },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Ubuntu_500Medium'
      },
    options: {
        fontFamily: "Ubuntu_400Regular",
        color: "#595959",
        fontSize: 14,
        marginVertical: 5,
        textAlign: "center",
        
    }
})