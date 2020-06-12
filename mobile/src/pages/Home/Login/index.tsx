import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

const Login = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.title}>Entrar</Text>
            </View>
            <View style={styles.divider}/>

            <Text style={styles.label}>E-mail</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
            />

            <RectButton style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>

            <Text style={styles.options}>Ainda não tem cadastro?</Text>
            <Text style={styles.options}>Esqueceu a senha?</Text>

            <View style={styles.shadow}>
                <RectButton style={[styles.buttonSocial, {
                    backgroundColor: "#FFF"
                }]}>
                    <Image style={styles.socialLogo} source={require('../../../assets/social/google.png')}/>
                    <Text style={styles.buttonSocialText}>Continuar com o Google</Text>
                </RectButton>
            </View>

            <View style={styles.shadow}>
                <RectButton style={[styles.buttonSocial, {
                    backgroundColor: "#3B5998"
                }]}>
                    <Image style={styles.socialLogo} source={require('../../../assets/social/facebook.png')}/>
                    <Text style={[styles.buttonSocialText, {
                        color: "#FFF"
                    }]}>Continuar com o Facebook</Text>
                </RectButton>
            </View>

            <View style={styles.shadow}>
                <RectButton style={[styles.buttonSocial, {
                    backgroundColor: "#000"
                }]}>
                    <Image style={styles.socialLogo} source={require('../../../assets/social/apple.png')}/>
                    <Text style={[styles.buttonSocialText, {
                        color: "#FFF"
                    }]}>Continuar com a Apple</Text>
                </RectButton>
            </View>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        fontFamily: 'Ubuntu_500Medium'    
    },
    divider: {
        borderTopColor: "#DBD3CD",
        borderTopWidth: 1,
        marginBottom: 10
    },
    label: {
        fontFamily: "Ubuntu_400Regular",
        color: "#595959",
        fontSize: 14,
        marginVertical: 10,
        lineHeight: 21
    },
    input: {
        height: 60,
        backgroundColor: '#EEEEEE',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
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
        marginLeft: 8,
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Ubuntu_500Medium'
      },
    options: {
        fontFamily: "Ubuntu_400Regular",
        color: "#595959",
        fontSize: 16,
        marginVertical: 5,
        textAlign: "center"
    },
    buttonSocial: {
        width: '100%',
        borderRadius: 8,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 2,
        paddingHorizontal: 30
      },
    buttonSocialText: {
        marginLeft: 8,
        fontSize: 16,
        fontFamily: 'Ubuntu_400Regular'
      },
      shadow: {
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1
      },
      shadowRadius: 2,
      shadowOpacity: 0.6,
      margin: 2
    },
    socialLogo: {
        width: 20,
        height: 20
    }
})