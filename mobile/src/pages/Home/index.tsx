import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';

import Login from './Login'

const Home = () => {
    const modal = useRef(new Animated.Value(-Dimensions.get('screen').height * 0.7)).current;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleModal () {
        setModalIsOpen(!modalIsOpen);
        if(modalIsOpen === true) {
            modalOpen()
        } else {
            modalClosed()
        }
    }

    const modalOpen = () => {
        Animated.timing(modal, {
          toValue: 0,
          duration: 700
        }).start();
      };
    
      const modalClosed = () => {
        Animated.timing(modal, {
          toValue: -Dimensions.get('screen').height * 0.7,
          duration: 700
        }).start();
      };
    

    return (
        <ImageBackground
            source={require("../../assets/background.png")}
            style={styles.container} 
        >
            <View style={styles.footer}>
                <View style={styles.footerDetail}>
                    <Text style={styles.titleApp}>Vanila Barber</Text>
                    <Text style={styles.description}>Seu barbeiro a um toque de distancia.</Text>
                </View>
                <RectButton style={styles.button} onPress={handleModal}>
                    <Text style={styles.buttonText}>Começar</Text>
                </RectButton>
            </View>

            <Animated.View style={[styles.modal, {
                bottom: modal
            }]}>
                <TouchableOpacity style={styles.back} onPress={handleModal}>
                    <Icon name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Login />
            </Animated.View>

        </ImageBackground>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#11181D"
    },
    titleApp: {
        color: "#DBD3CD",
        fontSize: 28,
        fontFamily: 'Ubuntu_500Medium'    
    },
    description: {
        color: "#DBD3CD",
        lineHeight: 28,
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 22
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        height: '30%',
        alignItems: "center",
        justifyContent: "center"
      },
    footerDetail: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20
      },
    button: {
        width: '48%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
    buttonText: {
        marginLeft: 8,
        color: '#000',
        fontSize: 16,
        fontFamily: 'Roboto_500Medium'
      },
      modal: {
          backgroundColor: '#FFF',
          position: 'absolute',
          height: "70%",
          borderTopLeftRadius: 50 ,
          borderTopRightRadius: 50,
          width: "100%",
          paddingHorizontal: 50,
          elevation: 1,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      },
      back: {
          paddingHorizontal: 50,
          paddingVertical: 30,
          position: 'absolute',
          zIndex: 10
      }
})