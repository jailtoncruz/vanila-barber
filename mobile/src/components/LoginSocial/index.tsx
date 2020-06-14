import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
const LoginSocial = () => {

    return (
        <View>

            <View style={styles.shadow}>
                <RectButton style={[styles.buttonSocial, styles.shadow, {
                    backgroundColor: "#FFF"
                }]}>
                    <Image style={styles.socialLogo} source={require('../../assets/social/google.png')}/>
                    <Text style={styles.buttonSocialText}>Continuar com o Google</Text>
                </RectButton>
            </View>

            <View style={styles.shadow}>
                <RectButton style={[styles.buttonSocial, styles.shadow,{
                    backgroundColor: "#3B5998"
                }]}>
                    <Image style={styles.socialLogo} source={require('../../assets/social/facebook.png')}/>
                    <Text style={[styles.buttonSocialText, {
                        color: "#FFF"
                    }]}>Continuar com o Facebook</Text>
                </RectButton>
            </View>

            <View style={styles.shadow}>
                <RectButton style={[styles.buttonSocial, styles.shadow,{
                    backgroundColor: "#000"
                }]}>
                    <Image style={styles.socialLogoApple} source={require('../../assets/social/apple.png')}/>
                    <Text style={[styles.buttonSocialText, {
                        color: "#FFF"
                    }]}>Continuar com a Apple</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default LoginSocial;

const styles = StyleSheet.create({
    buttonSocial: {
        width: '100%',
        borderRadius: 8,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        paddingHorizontal: 30
      },
    buttonSocialText: {
        marginLeft: 8,
        fontSize: 14,
        fontFamily: 'Ubuntu_400Regular'
      },
      shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 20
    },
    socialLogoApple: {
        width: 17,
        height: 20,
        marginRight: 20
    }
})